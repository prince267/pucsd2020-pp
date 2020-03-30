import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkillsRoutingModule } from './skills-routing.module';
import { TechnicalSkillsComponent } from './technical-skills/technical-skills.component';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  declarations: [TechnicalSkillsComponent],
  imports: [
    CommonModule,
    MatListModule,
    MatGridListModule,
    SkillsRoutingModule,
    MatCardModule
  ]
})
export class SkillsModule { }
