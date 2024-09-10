import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CollectionsComponent } from './collections/collections.component';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiNinjasService } from './api-ninjas.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CollectionsComponent,
    MenComponent,
    WomenComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ApiNinjasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
