import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css']
})
export class TodoPageComponent implements OnInit {

  completado: boolean = false;

  constructor(private sotre:Store<AppState>) { }

  ngOnInit(): void {
  }

  toggleAll(){
     this.completado = !this.completado;
     this.sotre.dispatch(actions.toggleAll({completado: this.completado}));
  }

}
