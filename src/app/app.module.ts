import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavigationComponent } from './navigation/navigation.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NavigationExtComponent } from './navigation-ext/navigation-ext.component';
import { RootComponent } from './root/root.component';

import { AboutModule } from './about/about.module';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    WelcomeComponent,
    NavigationExtComponent,
    RootComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    AboutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
