import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes';

import { VIEWS, COMPONENTS, SERVICES, GUARDS, PIPES, DIRECTIVES } from './app.declarations';

@NgModule({
  declarations: [
    AppComponent,
    ...VIEWS,
    ...COMPONENTS,
    ...GUARDS,
    ...DIRECTIVES,
    ...PIPES
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    AppRoutes,
    HttpClientModule,
    HttpClientXsrfModule
  ],
  providers: [
    ...SERVICES
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
