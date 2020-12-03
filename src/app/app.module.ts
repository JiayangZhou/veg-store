import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShelevsComponents } from './components/shelves/shelves.compoent';
import { CashiersComponent } from './components/cashiers/cashiers.component';

@NgModule({
  declarations: [
    AppComponent, // components
    ShelevsComponents,
    CashiersComponent
  ],
  imports: [ // dependency
    BrowserModule,
    AppRoutingModule
  ],
  providers: [], // service
  bootstrap: [AppComponent]
})
export class AppModule { }
