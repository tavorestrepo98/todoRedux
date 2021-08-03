import { createReducer, on } from '@ngrx/store';
import * as actions from './todo.actions';

import { Todo } from './models/todo.model';

export const initialState: Todo[] = [
  new Todo('Salvar el mundo'),
  new Todo('Hola mundo')
];

const _todoReducer = createReducer(
  initialState,
  on(actions.crearTodo, (state, {texto}) => [...state, new Todo(texto)]),
  on(actions.toggle, (state, {id}) => state.map((todo: Todo) => {
    if(todo.id === id){
      return {
        ...todo,
        completado: !todo.completado
      };
    }else{
      return {...todo};
    }
  })),
  on(actions.editarTodo, (state, {id, texto}) => state.map((todo: Todo) => {
    if(todo.id === id){
      return {
        ...todo,
        texto
      };
    }else{
      return {...todo};
    }
  })),
  on(actions.borrarTodo, (state, {id}) => state.filter((todo: Todo) => {
    if(todo.id !== id){
      return {
        ...todo
      }
    }
  })),
  on(actions.toggleAllTodos, (state, {completado}) => state.map((todo: Todo) => {
    return {
      ...todo,
      completado
    }
  })),
  on(actions.deleteAllTodos, (state) => state.filter((todo: Todo) => {
    if(!todo.completado){
      return todo;
    }
  })),
);

export function todoReducer(state, action) {
  return _todoReducer(state, action);
}
