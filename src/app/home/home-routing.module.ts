import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from 'app/home/home.component';
import { ConsultancyComponent } from 'app/home/consultancy/consultancy.component';
import { AboutUsComponent } from 'app/home/about-us/about-us.component';
import { ContactComponent } from 'app/home/contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent, children: [
    { path: '', component: ConsultancyComponent },
    { path: 'about-us', component: AboutUsComponent },
    { path: 'contact', component: ContactComponent }
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
