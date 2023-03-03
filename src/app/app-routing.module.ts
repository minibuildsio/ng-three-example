import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DuckBasicComponent } from './duck-basic/duck-basic.component';
import { DuckShaderComponent } from './duck-shader/duck-shader.component';

const routes: Routes = [
  { 'path': '', component: DuckBasicComponent },
  { 'path': 'basic', component: DuckBasicComponent },
  { 'path': 'shader', component: DuckShaderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
