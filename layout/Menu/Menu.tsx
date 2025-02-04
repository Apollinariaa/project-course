import { JSX, useContext } from "react";
import { AppContext } from "@/context/app.context";
import { FirstLevelMenuItem, PageItem } from "@/interfaces/menu.interface";
import cn from "classnames";
import styles from './Menu.module.css';
import Link from "next/link";
import { useRouter } from "next/router";
import { firstLevelMenu } from "@/helpers/helpers";

export const Menu = (): JSX.Element => {
    const { menu, setMenu, firstCategory } = useContext(AppContext);
    // const [announce, setAnnounce] = useState<'closed' | 'opened' | undefined>();
    const router = useRouter();

	const openThirdLevel = (thirdCategory: string) => {
        if (setMenu) {
            setMenu(menu.map(m => {
                if (m._id.secondCategory == thirdCategory) {
                    m.isOpened = !m.isOpened;
                }
                return m;
            }));
        }
	};

    const buildThirdLevel = (pages: PageItem[], route: string, isOpen: boolean) => {
        return (
            pages.map(p =>  (
                <Link href={`/${route}/${p.alias}`} className={cn(styles.thirdLevel, styles.link, {
                    [styles.thirdLevelActive]: `/${route}/${p.alias}` == router.asPath
                })} tabIndex={isOpen ? 0 : -1} key={p._id}>
                    {p.category}
                </Link>
            ) )
        );
    };


	const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {

		return (
			<ul className={styles.secondBlock}>
				{menu.map(m => {
                    if (m.pages.map(p => p.alias).includes(router.asPath.split('/')[2])) {
                        m.isOpened = true
                    }
					return (
						<li key={m._id.secondCategory} >
                            <div onClick={() => openThirdLevel(m._id.secondCategory)}>
                                <div className={styles.secondLevel}>
                                    {m._id.secondCategory}
                                </div>
                                <div className={cn(styles.secondLevelBlock, {
                                    [styles.open]: m.isOpened
                                })}>
                                    {buildThirdLevel(m.pages, menuItem.route, m.isOpened ?? false)}
                                </div>
                            </div>

						</li>
					);
				})}
			</ul>
		);
	};


    const buildFirstLevel = () => {
		return (
			<ul className={styles.firstLevelList}>
				{firstLevelMenu.map(m => (
					<li key={m.route}>
						<Link href={`/${m.route}`} className={styles.link}>
                            <div className={cn(styles.firstLevel, {
                                [styles.firstLevelActive]: m.id == firstCategory,
                            })}>
                                {m.icon}
                                <span>{m.name}</span>
                            </div>
						</Link>
						{m.id == firstCategory && buildSecondLevel(m)}
					</li>
				))}
			</ul>
		);
	};

    return (
        <div className={styles.menu}>
            {buildFirstLevel()}
        </div>
    )
}
