import { createReducer, on, } from '@ngrx/store';
import * as actions from './filtro.actions';
import { filtrosValidos } from './filtro.actions';

const initialState: filtrosValidos = 'todos'

const _filtroReducer = createReducer(
    initialState,
    on(
        actions.set,
        (state, { filter }) => filter
    )
);

export function filtroReducer(state, action) {
    return _filtroReducer(state, action);
}