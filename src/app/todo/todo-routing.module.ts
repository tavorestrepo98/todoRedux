import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TodoPageComponent } from './todo-page/todo-page.component';

const routes: Routes = [
  {
    path: '',
    component: TodoPageComponent
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule { }
