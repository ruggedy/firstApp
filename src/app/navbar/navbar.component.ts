import { Component, OnInit } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';


@Component({
  moduleId: module.id,
  selector: 'app-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.css'],
  directives: [ROUTER_DIRECTIVES],
})
export class NavbarComponent implements OnInit {
  router: any;
  constructor(private _router: Router){
    this.router = this._router;
  }

  ngOnInit() {

  }

}
