import { createReducer, on } from '@ngrx/store';
import * as actions from './todo.actions';
import { Todo } from './models/todo.model';


const initialState: Todo[] = [
    new Todo('Salvar al Mundo'),
    new Todo('Salvar al Mundo 2'),
    new Todo('Salvar al Mundo 3')
];      

const _todoReducer = createReducer(
    initialState,
    on(
        actions.add,
        (state, {texto}) => [...state, new Todo(texto)],
    ),
    on(
        actions.toggle,
        (state, { id } ) => {
            return state.map(todo => {
              if(todo.id === id){
                return {
                ...todo,
                completado: !todo.completado
              } 
            } else {
                return todo;
            }
            });
        }
    ),
    on(
        actions.editar,
        (state, { id, texto } ) => {
            return state.map(todo => {
              if(todo.id === id){
                return {
                ...todo,
                texto: texto,                
              } 
            } else {
                return todo;
            }
            });
        }
    )
);

export function todoReducer(state, action){
   return _todoReducer(state,action);
}