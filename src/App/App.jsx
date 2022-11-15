import { Layout } from "antd"
import React from "react"
import { Searcher } from "../components/Searcher"
import '../styles/app.css'
import { HeaderComponent } from "../components/HeaderComponent"
import { PokemonList } from "../components/PokemonList"
const { Content } = Layout
import {useSelector, useDispatch, shallowEqual} from 'react-redux';
import { LoadingSpin } from "../components/LoadingSpin"
import { fetchPokemonWithDetails } from "../slices/dataSlice"



export const App = () => {
  
  // const [pokemons, setPokemons] = React.useState([]);
    const loading = useSelector(state =>  state.ui.loading);
    const pokemons = useSelector((state) => state.data.pokemonsFiltered, shallowEqual);
    

    const dispatch = useDispatch()

    React.useEffect(() => {
       dispatch(fetchPokemonWithDetails());
    }, [])
    
  return (
    <Layout>
      <HeaderComponent />
      <Content style={{ padding: '50px 50px', height:'100vh' }}>
        <Searcher />
        {loading ? <LoadingSpin/> : <PokemonList pokemons={pokemons} />}
      </Content>
    </Layout>
  )
}


export default App
