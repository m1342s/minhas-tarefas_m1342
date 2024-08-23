/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import {configureStore} from "@reduxjs/toolkit"

import tarefasReducer from "./reducers/tarefas"

import filtroReducer from "./reducers/filtro"

export const store=configureStore({
  reducer:{
     tarefas: tarefasReducer,
     filtro: filtroReducer
  }
})

export type RootReducer=ReturnType<typeof store.getState>
