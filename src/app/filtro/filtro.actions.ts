import { createAction, props } from '@ngrx/store';

export type filtrosValidos = 'todos' | 'completados' | 'pendientes'; 

export const set = createAction(
    '[Filtrro] Set Filter',
    props<({ filter: filtrosValidos})>()
);