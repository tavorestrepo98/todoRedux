import { createAction, props } from '@ngrx/store';

export const crearTodo = createAction(
  '[TODO] Crear Todo',
  props<{texto: string}>()
);

export const toggle = createAction(
  '[TODO] Toggle Todo',
  props<{id: number}>()
);

export const editarTodo = createAction(
  '[TODO] Editar Todo',
  props<{id: number, texto: string}>()
);

export const borrarTodo = createAction(
  '[TODO] Borrar Todo',
  props<{id: number}>()
);

export const toggleAllTodos = createAction(
  '[TODO] Toggle All Todos',
  props<{completado: boolean}>()
);

export const deleteAllTodos = createAction(
  '[TODO] Delete All Todos'
);
// export const decrement = createAction('[Counter Component] Decrement');
// export const reset = createAction('[Counter Component] Reset');
