import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { toggleAllTodos } from './../todo.actions';
import { AppState } from './../../app.reducer';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css']
})
export class TodoPageComponent implements OnInit {

  chktoggleAll: boolean = true;

  constructor(
    private store:Store<AppState>
  ) { }

  ngOnInit(): void {
  }

  toogleAll(){
    this.store.dispatch(toggleAllTodos({completado: this.chktoggleAll}));
    this.chktoggleAll = !this.chktoggleAll;
  }

}
