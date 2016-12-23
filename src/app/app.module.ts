import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ApplicationComponent } from './components/application/app.component';
import { NavigationComponent } from './components/navigation/navigation.component';

@NgModule({
  declarations: [
    ApplicationComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [ApplicationComponent]
})
export class AppModule { }
