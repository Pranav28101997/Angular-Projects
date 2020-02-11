import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { PageNoFoundComponent } from './page-no-found/page-no-found.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    routingComponent,
    PageNoFoundComponent,
    DepartmentDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
