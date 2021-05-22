import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CoreModule } from './core/core.module';
import { CustomersModule } from './customers/customers.module';
import { SharedModule } from '../app/shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrdersModule } from './orders/orders.module';



@NgModule({
  imports: [BrowserModule, CoreModule, AppRoutingModule,  CustomersModule, OrdersModule,SharedModule],
  declarations: [AppComponent],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
