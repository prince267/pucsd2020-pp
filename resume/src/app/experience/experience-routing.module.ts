import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CompanyExperienceComponent} from './company-experience/company-experience.component'

const routes: Routes = [
  {
    path:'',
    component:CompanyExperienceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExperienceRoutingModule { }
