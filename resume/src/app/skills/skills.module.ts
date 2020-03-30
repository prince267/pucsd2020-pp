import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkillsRoutingModule } from './skills-routing.module';
import { TechnicalSkillsComponent } from './technical-skills/technical-skills.component';


@NgModule({
  declarations: [TechnicalSkillsComponent],
  imports: [
    CommonModule,
    SkillsRoutingModule
  ]
})
export class SkillsModule { }
