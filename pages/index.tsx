import Layout from '../components/Layout/Layout';
import Head from 'next/head';

const prefix:string = process.env.NEXT_PUBLIC_BASE_PATH || '';

const IndexPage = () => (
  <div>
    <Head>
      <title>Meu currículo</title>
      <link rel="stylesheet" href={prefix + "/globals.css"} />
    </Head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <Layout />
  </div>
  )

export default IndexPage
