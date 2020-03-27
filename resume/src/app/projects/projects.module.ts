import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import {MatTableModule} from '@angular/material/table';
import { ProjectComponent } from './project/project.component';


@NgModule({
  declarations: [ProjectComponent],
  imports: [
    CommonModule,
    MatTableModule,
    ProjectsRoutingModule
  ]
})
export class ProjectsModule { }
