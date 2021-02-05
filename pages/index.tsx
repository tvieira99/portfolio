import Layout from '../components/Layout/Layout';

const prefix:string = '/portfolio';

const IndexPage = () => (
  <div>
    <link rel="stylesheet" href={prefix + "/globals.css"} />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <Layout />
  </div>
  )

export default IndexPage
