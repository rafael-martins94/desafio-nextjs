import { Button } from '@material-ui/core';
import React from 'react';
import Layout from '../components/Layout';
import { Box, Grid } from '@material-ui/core';
import axios from "axios";



export async function getStaticProps() {
  const [pokemons, setPokemon] = useState();

  useEffect(() => {
      axios
        .get("https://pokeapi.co/api/v2/type/16")
        .then((response) => setPokemon(response.data))
        .catch((err) => {
          console.error("ops! ocorreu um erro" + err);
        });
    }, []);


  
  return {
    props: {
      data: pokemons,
    }, // will be passed to the page component as props
    revalidate: 15,
  };
}




export default function Home({data}) {  

console.log(data)

  return (
    <>
      <Layout title="PokéShop" >
      <Box p={2}>
        <Grid container spacing={4}>
          
        </Grid>
      </Box>
      </Layout>  

    </>
  )
}
