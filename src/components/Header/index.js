import Head from 'next/head';
import db from '../../../db.json';

export default function IndexPage() {
    return (
        <Head>
            <title>AluraQuiz</title>
            <meta property="og:image" content={db.bg} />
            <meta property="og:image:type" content="image/jpeg"/>
            <meta property="og:image:width" content="800"/>
            <meta property="og:image:height" content="600"/>
        </Head>
    );
}