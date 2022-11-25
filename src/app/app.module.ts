import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemComponentComponent } from './item-component/item-component.component';
import { ItemListComponentComponent } from './item-list-component/item-list-component.component';
import { CartComponentComponent } from './cart-component/cart-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponentComponent,
    ItemListComponentComponent,
    CartComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
