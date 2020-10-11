import { createReducer, on } from '@ngrx/store';
import * as actions from './todo.actions';
import { Todo } from './models/todo.model';


const initialState: Todo[] = [
    new Todo('Salvar al Mundo')
];      

const _todoReducer = createReducer(
    initialState,
    on(
        actions.add,
        (state, {texto}) => [...state, new Todo(texto)],
    ),
);

export function todoReducer(state, action){
   return _todoReducer(state,action);
}