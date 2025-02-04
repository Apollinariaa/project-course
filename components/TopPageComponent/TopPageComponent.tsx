
import { TopPageComponentProps } from './TopPageComponent.props';
import styles from './TopPageComponent.module.css';
import { Product } from '../Product/Product';
import { JSX, useEffect, useReducer } from 'react';
import { TopLevelCategory } from '@/interfaces/page.interface';
import { HhData } from '../HhData/HhData';
import { Advantages } from '../Advantages/Advantages';
import { Sort } from '../Sort/Sort';
import { SortEnum } from '../Sort/Sort.props';
import { sortReducer } from './helpers';
import { Htag } from '../Htag/Htag';
import { Tag } from '../Tag/Tag';

export const TopPageComponent = ({ page, products, firstCategory }: TopPageComponentProps): JSX.Element => {
    const [{products: sortedProducts, sort}, dispatchSort] = useReducer(sortReducer, { products, sort: SortEnum.Rating})

    const setSort = (sort: SortEnum) => dispatchSort({type: sort});

    useEffect(() => { dispatchSort({type: 'reset', initialProducts: products}) },[products]);

    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>
                <Htag>{page.title}</Htag>
                <Tag type='grey'>{products.length}</Tag>
                <Sort sort={sort} setSort={setSort}/>
            </div>
            <div>
                {sortedProducts && sortedProducts.map(p => (<Product role='listitem' key={p._id}  product={p} />))}
            </div>
            {firstCategory == TopLevelCategory.Courses && page.hh && (
                <>
                    <div className={styles.hhTitle}>
                        <Htag tag='h2'>Вакансии - {page.category}</Htag>
                        <Tag type='red' size='m'>hh.ru</Tag>
                    </div>
                    <HhData {...page.hh}/>
                </>
            )}
			{page.advantages && page.advantages.length > 0 && <>
				<Htag tag='h2'>Преимущства</Htag>
				<Advantages advantages={page.advantages} />
			</>}
			{page.seoText && <div className={styles.seo} dangerouslySetInnerHTML={{ __html: page.seoText }} />}
			<Htag tag='h2'>Получаемые навыки</Htag>
			{page.tags.map(t => <Tag key={t} type='puple'>{t}</Tag>)}
        </div>
    );
}
