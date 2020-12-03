import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; // core component

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; // root component

import { ShelvesComponent } from './components/shelves/shelves.component';
import { CashiersComponent } from './components/cashiers/cashiers.component';
import { CategoriesComponent } from './components/categories/categories.component';

@NgModule({
  declarations: [
    AppComponent, // components
    ShelvesComponent,
    CashiersComponent,
    CategoriesComponent
  ],
  imports: [ // dependency
    BrowserModule,
    AppRoutingModule
  ],
  providers: [], // service
  bootstrap: [AppComponent]
})
export class AppModule { }
