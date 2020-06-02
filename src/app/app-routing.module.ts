import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ListenComponent } from './listen/listen.component';


const routes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: 'listen', component: ListenComponent},
  {path: '', component: ListenComponent},
  {path: '**', redirectTo: '/listen'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
