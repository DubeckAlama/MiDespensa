import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';

//my modules
import { RootModule } from './modules/root/root.module';
import { HomeModule } from './modules/home/home.module';
import { WhatsAppModule } from '@shared-components/whats-app/whats-app.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    // my modules
    RootModule,
    HomeModule,
    // shared components
    WhatsAppModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
