/* eslint-disable prettier/prettier */
import BotaoAdicionar from '../../components/BotaoAdicionar'
import BarraLateral from '../../Containers/BarraLateral'
import { ListaDeTarefas } from '../../Containers/ListaDeTarefas'

/* eslint-disable prettier/prettier */
const Home = () =>(
    <>
      <BarraLateral />
      <ListaDeTarefas />
      <BotaoAdicionar/>
    </>
  )

  export default Home

