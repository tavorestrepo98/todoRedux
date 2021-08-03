import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { crearTodo } from '../../todo.actions';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent {

  txtInput: FormControl;

  constructor(
    private store: Store<AppState>
  ) {
    this.txtInput = new FormControl('', [Validators.required, Validators.minLength(2)]);
  }

  addTodo(){
    if(this.txtInput.invalid){
      return;
    }

    this.store.dispatch(crearTodo({texto: this.txtInput.value}));
    this.txtInput.setValue('');

  }

}
