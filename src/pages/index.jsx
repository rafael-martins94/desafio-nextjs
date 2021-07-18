import { Button } from '@material-ui/core';
import React from 'react';

import Layout from '../components/Layout';


export default function Home() {
  return (
    <>
      <Layout title="PokéShop" >
      <div>
        <Button variant="contained" color="secondary" >Hello World</Button>
      </div>
      </Layout>  

    </>
  )
}
