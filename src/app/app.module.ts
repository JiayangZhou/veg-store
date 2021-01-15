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
import { AdminComponent } from './components/admin/admin.component';
import { TransitionComponent } from './components/transition/transition.component';
import { HeaderComponent } from './components/header/header.component';


@NgModule({
  declarations: [
    AppComponent, // components
    ShelvesComponent,
    CashiersComponent,
    CategoriesComponent,
    SearchComponent,
    OrdersComponent,
    AdminComponent,
    TransitionComponent,
    HeaderComponent
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
