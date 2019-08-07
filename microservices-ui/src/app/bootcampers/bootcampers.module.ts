import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BootcampersRoutingModule } from './bootcampers-routing.module';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    BootcampersRoutingModule
  ]
})
export class BootcampersModule { }
