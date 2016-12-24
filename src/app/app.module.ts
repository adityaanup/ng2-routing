import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ApplicationComponent } from './components/application/app.component';
import { HomeComponent } from './components/home/home.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';

import { ApplicationRoutingModule } from './routing.module';

@NgModule({
  declarations: [
    ApplicationComponent,
    HomeComponent,
    NavigationComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ApplicationRoutingModule
  ],
  providers: [],
  bootstrap: [ApplicationComponent]
})
export class AppModule { }
