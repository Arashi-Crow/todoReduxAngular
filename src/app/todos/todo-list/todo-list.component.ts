import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Todo } from '../models/todo.model';
import { AppState } from '../../app.reducer';
import { filtrosValidos } from '../../filtro/filtro.actions';
import { state } from '@angular/animations';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
   
  arrayTodos: Todo[] = [];
   filtroActual:filtrosValidos;

  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {
   //this.store.select('todos').subscribe( todos => this.arrayTodos = todos);
   this.store.subscribe(({todos,filtro}) => {
     this.arrayTodos = todos;
     this.filtroActual = filtro;
   })
  }

}
