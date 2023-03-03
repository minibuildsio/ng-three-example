import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DuckBasicComponent } from './duck-basic/duck-basic.component';
import { DuckShaderComponent } from './duck-shader/duck-shader.component';

@NgModule({
  declarations: [
    AppComponent,
    DuckBasicComponent,
    DuckShaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
