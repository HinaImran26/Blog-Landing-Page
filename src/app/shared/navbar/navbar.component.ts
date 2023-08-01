import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  navItems = ['home', 'about', 'features', 'categories', 'contact']
  openFlag = false;
  constructor() { }

  ngOnInit(): void {
  }

  openNav() {
    this.openFlag = !this.openFlag;
    console.log(this.openFlag)
  }

}
