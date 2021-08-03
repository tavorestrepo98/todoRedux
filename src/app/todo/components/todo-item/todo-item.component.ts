import { Component, OnInit, ElementRef, Input, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { Store } from '@ngrx/store';
import * as actions from '../../todo.actions';
import { AppState } from 'src/app/app.reducer';
import { Todo } from './../../models/todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  @ViewChild('inputFisico') txtInputFisico: ElementRef;

  chkCompletado: FormControl;
  txtInput: FormControl;

  editando: boolean = false;

  constructor(
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    console.log(this.todo);
    this.chkCompletado = new FormControl(this.todo.completado);
    this.txtInput = new FormControl(this.todo.texto, [Validators.required]);

    this.chkCompletado.valueChanges.subscribe((value: boolean) => {
      this.store.dispatch(actions.toggle({id: this.todo.id}));
    });
  }

  editar(){
    this.editando = true;
    this.txtInput.setValue(this.todo.texto);

    setTimeout(() => {
      this.txtInputFisico.nativeElement.select()
    }, 1);
  }

  terminarEdicion(){
    if(this.txtInput.invalid){return;}
    if(this.txtInput.value === this.todo.texto){return;}
    this.store.dispatch(actions.editarTodo({id: this.todo.id, texto: this.txtInput.value}));
    this.editando = false;
  }

  borrar(){
    this.store.dispatch(actions.borrarTodo({id: this.todo.id}));
  }
}
