import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import {MatTableModule} from '@angular/material/table';
import { ProjectComponent } from './project/project.component';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
// import { 
//   MatCardModule,
//   MatListModule,
//   MatIconModule
// } from '@angular/material';

@NgModule({
  declarations: [ProjectComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatTableModule,
    ProjectsRoutingModule
  ]
})
export class ProjectsModule { }
