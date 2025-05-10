import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {ApplicationFormComponent} from './components/application-form/application-form.component';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
  ],
  imports: [
    ApplicationFormComponent,
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([]) // Ensure RouterModule is imported
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }