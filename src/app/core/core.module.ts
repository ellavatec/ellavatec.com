import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { NavComponent } from './nav/nav.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [NavComponent],
  exports: [NavComponent]
})
export class CoreModule { }
