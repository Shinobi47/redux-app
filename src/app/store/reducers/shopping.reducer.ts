import { createReducer, on } from "@ngrx/store";
import { addItem } from "../actions/shopping.actions";
import { ShoppingItem } from "../models/shopping-item.model";

export const initialItems: ShoppingItem[] = [
    { id: 1, name: 'shampoo'},
    { id: 2, name: 'computer'}
];

export const itemReducer = createReducer(
    initialItems,
    on(addItem,  (state, action) => state.concat({
        ...action.item,
        id: 7
    }))
); 