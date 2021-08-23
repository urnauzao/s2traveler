import Head from "next/head";

export default function Header(props) {
    return (
        <Head>
            <link rel="icon" href="/favicon.ico" />
            <title>{props?.title}</title>
            <link rel="preconnect" href="https://fonts.gstatic.com" />
        </Head>
    );
}