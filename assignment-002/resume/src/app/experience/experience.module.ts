import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExperienceRoutingModule } from './experience-routing.module';
import { CompanyExperienceComponent } from './company-experience/company-experience.component';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  declarations: [CompanyExperienceComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatGridListModule,
    ExperienceRoutingModule
  ]
})
export class ExperienceModule { }
