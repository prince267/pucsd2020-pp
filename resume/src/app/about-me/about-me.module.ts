import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutMeRoutingModule } from './about-me-routing.module';
import { AboutMeComponent } from './about-me/about-me.component';
import {MatExpansionModule} from '@angular/material/expansion';

@NgModule({
  declarations: [AboutMeComponent],
  imports: [
    CommonModule,
    AboutMeRoutingModule,
    MatExpansionModule
  ]
})
export class AboutMeModule { }
