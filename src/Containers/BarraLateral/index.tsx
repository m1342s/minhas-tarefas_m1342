/* eslint-disable prettier/prettier */
import { useDispatch, useSelector } from 'react-redux'
import FiltroCard from '../../components/FiltroCards'
import * as enums from "../../utils/enums/Tarefa"

import * as S from './styles'
import { Campo } from '../../styles'
import { RootReducer } from '../../store'
import { alteraTermo } from '../../store/reducers/filtro'

/* eslint-disable prettier/prettier */
const BarraLateral = () => {
  const dispatch=useDispatch()
  const {termo}=useSelector((state:RootReducer)=>state.filtro)
  return (
    <S.Aside>
      <div>
        <Campo type="text" placeholder="Buscar" value={termo} onChange={evento=>dispatch(alteraTermo(evento.target.value))} />
        <S.Filtros>
          <FiltroCard valor={enums.Status.PENDENTES} criterio="status" legenda="pendente"  />
          <FiltroCard valor={enums.Status.CONCLUIDA} criterio="status"  legenda="concluída"  />
          <FiltroCard valor={enums.Prioridade.URGENTE} criterio="prioridade" legenda="urgente"  />
          <FiltroCard valor={enums.Prioridade.IMPORTANTE}  criterio="prioridade" legenda="importante"  />
          <FiltroCard valor={enums.Prioridade.NORMAL} criterio="prioridade" legenda="normal"  />
          <FiltroCard criterio='todas' legenda="todas" />
        </S.Filtros>
      </div>
    </S.Aside>
  )
}

export default BarraLateral
