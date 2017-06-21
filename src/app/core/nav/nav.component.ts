import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  public links: any[];

  constructor(private router: Router) {
    this.links = [
      { link: 'consultancy', label: 'Consultancy' },
      { link: 'about-us', label: 'About Us' },
      { link: 'contact', label: 'Contact' }
    ];
  }

  ngOnInit() {
  }

}
