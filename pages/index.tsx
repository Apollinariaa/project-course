import Head from 'next/head';
import { Noto_Sans_KR } from 'next/font/google';
import { Button, Htag, P, Rating, Tag } from '@/components';
import { JSX, useState } from 'react';
import { withLayout } from '@/layout/Layout';
import { GetStaticProps } from 'next';
import axios from 'axios';
import { MenuItem } from '@/interfaces/menu.interface';
import { API } from '@/helpers/api';

const notoSans = Noto_Sans_KR({
    subsets: ['cyrillic'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

function Home({ menu }: HomeProps): JSX.Element {
    const [rating, setRating] = useState(0);
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={`${notoSans.className} `}>
                <Htag>Htag</Htag>
                <Htag tag="h2">Htag1</Htag>
                <Htag tag="h3">Htag2</Htag>
                <P>PPPPPPPPPPPPPPPPPP</P>
                <Button appearance="primary">В корзину</Button>
                <Button appearance="default">В корзину</Button>
                <Tag type="green">-10руб</Tag>
                <Tag>-10руб</Tag>
                <Tag type="red">-10руб</Tag>
                <Tag type="grey">-10руб</Tag>
                <Tag type="puple">-10руб</Tag>
                <Rating rating={rating} setRating={setRating} />
                <ul>
                    {menu.map((i, index) => (
                        <li key={index}>{i._id.secondCategory}</li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps = async () => {
    const firstCategory = 0;
    const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
        firstCategory,
    });

    return {
        props: {
            menu,
            firstCategory,
        },
    };
};

interface HomeProps extends Record<string, unknown> {
    menu: MenuItem[];
}
