import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { filtrosValidos, setFiltro } from '../../../filtro/filtro.actions';
import { deleteAllTodos } from '../../todo.actions';
import { AppState } from './../../../app.reducer';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  filtroActual: filtrosValidos;
  filtros: filtrosValidos[] = ['todos', 'completados', 'pendientes'];

  pendientes: number = 0;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    // this.store.select('filtro').subscribe((filtro: filtrosValidos) => {
    //   this.filtroActual = filtro;
    //   console.log(this.filtroActual);
    // });

    this.store.subscribe(state => {
      this.filtroActual = state.filtro;
      this.pendientes = state.todos.filter(todo => !todo.completado).length;
    })
  }

  seleccionarFiltro(filtro: filtrosValidos){
    this.store.dispatch(setFiltro({ filtro }));
  }

  borrarCompletados(){
    this.store.dispatch(deleteAllTodos());
  }
}
