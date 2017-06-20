import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { HomeRoutingModule } from './home-routing.module';
import { ConsultancyComponent } from './consultancy/consultancy.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule
  ],
  declarations: [ConsultancyComponent, AboutUsComponent, ContactComponent, HomeComponent]
})
export class HomeModule { }
