import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppState } from './app-state';
import { addItem } from './store/actions/shopping.actions';
import { ShoppingItem } from './store/models/shopping-item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  shoppingItems$ = this.store.pipe(select(state => state.shoppingItems));

  constructor(private store: Store<AppState>){
  }

  onAddShoppingItem(){
    const item:ShoppingItem = {id: 11, name: 'test'};
    this.store.dispatch(addItem({item}));
    console.log('Item added !')
    this.shoppingItems$.subscribe(rs => console.log(rs));
  }
}
