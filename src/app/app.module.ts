import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; // core component
import { FormsModule }   from '@angular/forms'; // data binding

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; // root component

import { ShelvesComponent } from './components/shelves/shelves.component';
import { CashiersComponent } from './components/cashiers/cashiers.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CustomersComponent } from './components/customers/customers.component';

@NgModule({
  declarations: [
    AppComponent, // components
    ShelvesComponent,
    CashiersComponent,
    CategoriesComponent,
    CustomersComponent
  ],
  imports: [ // dependency
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [], // service
  bootstrap: [AppComponent]
})
export class AppModule { }
