import { createAction, props } from "@ngrx/store";
import { ShoppingItem } from "../models/shopping-item.model";


export const addItem = createAction('[SHOPPING] addItem', props<{item : ShoppingItem}>());
export const deleteItem = createAction('[SHOPPING] deleteItem', props<{item : ShoppingItem}>());
export const listItems = createAction('[SHOPPING] listItems', props<{item : ShoppingItem}>());
