import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import {ErrorLayoutComponent} from "./shared/components/error-layout/error-layout.component";

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    ErrorLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
