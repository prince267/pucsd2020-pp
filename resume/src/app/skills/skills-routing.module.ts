import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TechnicalSkillsComponent} from './technical-skills/technical-skills.component'

const routes: Routes = [
  {
    path:'',
    component:TechnicalSkillsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SkillsRoutingModule { }
