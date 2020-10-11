import { createAction, props } from "@ngrx/store";

export const add = createAction(
    '[TODO] Add Item',
    props<{ texto: string }>()
);

export const toggle = createAction(
    '[TODO] Toggle Todo',
    props<{ id:number }>()
);

export const editar = createAction(
    '[TODO] Editar Todo',
    props<{ id:number, texto:string}>()
)