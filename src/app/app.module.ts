import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontendComponent } from './layout/frontend/frontend.component';
import { BackendComponent } from './layout/backend/backend.component';
import { Err404Component } from './shared/err404/err404.component';
import { FrontendHeaderComponent } from './shared/frontend/frontend-header/frontend-header.component';
import { FrontendFooterComponent } from './shared/frontend/frontend-footer/frontend-footer.component';
import { BackendFooterComponent } from './shared/backend/backend-footer/backend-footer.component';
import { BackendHeaderComponent } from './shared/backend/backend-header/backend-header.component';

@NgModule({
  declarations: [
    AppComponent,
    FrontendComponent,
    BackendComponent,
    Err404Component,
    FrontendHeaderComponent,
    FrontendFooterComponent,
    BackendFooterComponent,
    BackendHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
