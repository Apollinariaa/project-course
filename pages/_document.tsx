import Document, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from 'next/document';

const MyDocument = () => {
    return (
        <Html lang="ru">
            <Head />
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
};

MyDocument.getInitialProps = async (ctx: DocumentContext): Promise<DocumentInitialProps> => {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
};

export default MyDocument;
