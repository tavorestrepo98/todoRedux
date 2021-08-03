import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { AppState } from './../../../app.reducer';
import { Todo } from './../../models/todo.model';
import { filtrosValidos } from 'src/app/filtro/filtro.actions';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit{

  filtroActual: filtrosValidos = 'todos';
  todos: Todo[] = [];

  constructor(
    private store: Store<AppState>
  ) {
    // this.store.select('todos').subscribe(todos => {
    //   this.todos = todos;
    // });
  }

  ngOnInit(): void {
    this.store.subscribe(({ todos, filtro }) => {
      this.todos = todos;
      this.filtroActual = filtro;
    })
  }

}
