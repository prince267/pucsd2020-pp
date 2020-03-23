import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component'
import {AboutMeComponent} from './about-me/about-me.component'
import {ExperienceComponent} from './experience/experience.component'
import {ContactComponent} from './contact/contact.component'
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path:'about-me', component:AboutMeComponent},
  { path:'experience', component: ExperienceComponent},
  { path:'contact', component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
