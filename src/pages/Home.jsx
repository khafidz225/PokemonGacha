import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'
import Card from '../components/Card'
import Cardgacha from '../components/Cardgacha'
import Navbar from '../components/Navbar'
import { API } from '../config/Api'

const Home = () => {
  let {data: pokemon} = useQuery('pokemonCache', async() => {
        const response = API.get("/pokemon")
        return (await response).data.results;
    })

    const pokeapi = useQuery(['allApis', pokemon], () =>
    Promise.all(pokemon?.map(datas => axios.get(datas?.url).then(res => res?.data)))
  );
  return (
    <>
      <Navbar />
      <div className='mt-[40px]'>
        <Cardgacha pokeapi={pokeapi}/>
        <h1 className='text-center text-[32px] font-medium mt-5'>Card Pokemon</h1>
        <Card pokeapi={pokeapi}/> 
      </div>
    </>
  )
}

export default Home