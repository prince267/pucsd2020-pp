import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component'
import {ContactComponent} from './contact/contact.component'
// import {ProjectsModule} from './projects/projects.module'
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path:'about-me', 
loadChildren: () =>import('./about-me/about-me.module').then(m=>m.AboutMeModule)
},
  { path:'contact', component:ContactComponent},
  {
    path:'projects',
    loadChildren: () => import('./projects/projects.module').then(m => m.ProjectsModule)
  },
  {
    path:'experience',
    loadChildren:()=> import('./experience/experience.module').then(m=>m.ExperienceModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
