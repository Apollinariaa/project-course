import { JSX } from 'react';
import { withLayout } from '@/layout/Layout';
import { GetStaticProps, GetStaticPropsContext } from 'next';
import axios from 'axios';
import { MenuItem } from '@/interfaces/menu.interface';
import { API } from '@/helpers/api';
import { firstLevelMenu } from '@/helpers/helpers';
import { ParsedUrlQuery } from 'querystring';

function Search(): JSX.Element {
    return <>Search</>;
}

export default withLayout(Search);

export const getStaticProps: GetStaticProps<SearchProps> = async ({
    params,
}: GetStaticPropsContext<ParsedUrlQuery>) => {
    if (!params) {
        return {
            notFound: true,
        };
    }
    const firstCategoryItem = firstLevelMenu.find(m => m.route == params.type);
    if (!firstCategoryItem) {
        return {
            notFound: true,
        };
    }
    const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
        firstCategory: firstCategoryItem.id,
    });
    return {
        props: {
            menu,
            firstCategory: firstCategoryItem.id,
        },
    };
};

interface SearchProps extends Record<string, unknown> {
    menu: MenuItem[];
    firstCategory: number;
}
