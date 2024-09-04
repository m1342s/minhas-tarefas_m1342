/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'
import * as enums from '../../utils/enums/Tarefa'

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState: {
    itens: [
      {
        id:1,
        descricao: 'Estudar JavaScript recevendo o exercício do módulo 7',
        prioridade: enums.Prioridade.NORMAL,
        status:enums.Status.CONCLUIDA,
        titulo:'Estudar JavaScript'
      },
      {
        id:2,
        descricao: 'Estudar material de apoio',
        prioridade: enums.Prioridade.NORMAL,
        status:enums.Status.PENDENTES,
        titulo:'Estudar TypeScript'
      },
      {
        id:1,
        descricao: 'Estudar JavaScript recevendo o exercício do módulo 7',
        prioridade: enums.Prioridade.IMPORTANTE,
        status:enums.Status.PENDENTES,
        titulo:'Estudar Bootstrap'
      },
    ]
  },
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((tarefa) => tarefa.id !== action.payload)
    },
    editar: (state, action: PayloadAction<Tarefa>) => {
      const indexDaTarefa = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )
      if (indexDaTarefa >= 0) {
        state.itens[indexDaTarefa] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Omit<Tarefa,'id'>>) => {
      const tarefaExiste = state.itens.find(
        (tarefa) =>
          tarefa.titulo.toLowerCase() === action.payload.titulo.toLowerCase()
      )
      if (tarefaExiste) {
        alert('Já existe uma tarefa com esse nome')
      } else {
        const ultimaTarefa=state.itens[state.itens.length-1]
        const tarefaNova={...action.payload,id:ultimaTarefa? ultimaTarefa.id+1:1}
        state.itens.push(tarefaNova)
      }
    },
    alteraStatus: (
      state,
      action: PayloadAction<{ id: number; finalizado: boolean }>
    ) => {
      const indexDaTarefa = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )
      if (indexDaTarefa >= 0) {
        state.itens[indexDaTarefa].status = action.payload.finalizado
          ? enums.Status.CONCLUIDA
          : enums.Status.PENDENTES
      }
    }
  }
})

export const { remover, editar, cadastrar, alteraStatus } = tarefasSlice.actions

export default tarefasSlice.reducer
