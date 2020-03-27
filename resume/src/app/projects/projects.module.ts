import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import {MatTableModule} from '@angular/material/table';
import { ProjectComponent } from './project/project.component';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [ProjectComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatTableModule,
    ProjectsRoutingModule
  ]
})
export class ProjectsModule { }
