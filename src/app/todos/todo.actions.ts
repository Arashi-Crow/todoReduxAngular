import { createAction, props } from "@ngrx/store";

export const add = createAction(
    '[TODO] Add Item',
    props<{ texto: string }>()
);