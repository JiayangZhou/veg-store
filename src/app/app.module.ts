import { StorageService } from './services/storage.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; // core component
import { FormsModule }   from '@angular/forms'; // data binding

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; // root component

import { ShelvesComponent } from './components/shelves/shelves.component';
import { CashiersComponent } from './components/cashiers/cashiers.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { SearchComponent } from './components/search/search.component';
import { OrdersComponent } from './components/orders/orders.component';


@NgModule({
  declarations: [
    AppComponent, // components
    ShelvesComponent,
    CashiersComponent,
    CategoriesComponent,
    SearchComponent,
    OrdersComponent
  ],
  imports: [ // dependency
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [StorageService], // service, quite like a hash map to me
  bootstrap: [AppComponent]
})
export class AppModule { }
