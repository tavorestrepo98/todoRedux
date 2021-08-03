import { ActionReducerMap } from "@ngrx/store";

import { Todo } from "./todo/models/todo.model";
import { todoReducer } from "./todo/todo.reducer";

import { filtroReducer } from './filtro/filtro.reducer';
import { filtrosValidos } from "./filtro/filtro.actions";



export interface AppState {
  todos: Todo[];
  filtro: filtrosValidos
}


export const appReducers: ActionReducerMap<AppState> = {
  todos: todoReducer,
  filtro: filtroReducer
}
