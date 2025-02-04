import { FunctionComponent, JSX } from "react";
import { LayoutProps } from "./Layout.props";
import { Header } from "./Header/Header";
import { Sidebar } from "./Sidebar/Sidebar";
import { Footer } from "./Footer/Footer";
import styles from './Layout.module.css';
import { AppContextProvider, IAppContext } from "@/context/app.context";
import { Noto_Sans_KR } from "next/font/google";
import cn from 'classnames';

const notoSans = Noto_Sans_KR({ subsets: ['cyrillic'], weight: ['100' , '200' , '300', '400' , '500' , '600' , '700' , '800' , '900' ] });

export const Layout = ({children}: LayoutProps): JSX.Element => {
    return (
        <div className={cn(styles.wrapper, notoSans.className)}>
            <Header className={styles.header}/>
            <Sidebar/>
            <div className={styles.body}>
                {children}
            </div>
            <Footer className={styles.footer}/>
        </div>
    )
};

// компонент высшего порядка
export const withLayout = <T extends Record<string, unknown> & IAppContext>(Component: FunctionComponent<T>) => {
    return function withLayoutComponent(props: T) {
        return (
            <AppContextProvider menu={props.menu} firstCategory={props.firstCategory}>
                <Layout>
                    <Component {...props}/>
                </Layout>
            </AppContextProvider>

        );
    }

}
