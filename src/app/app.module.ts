import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {FormsModule} from '@angular/forms';
import {SearchServiceClient} from './services/search.service.client';
import { DescriptionComponent } from './description/description.component';
import {RouterModule} from '@angular/router';
import {routing} from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DescriptionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [
    SearchServiceClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
