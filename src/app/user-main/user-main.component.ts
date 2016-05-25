import { Component, OnInit } from '@angular/core';
import { Routes, ROUTER_DIRECTIVES } from '@angular/router';

import { UsersComponent } from '../users/users.component';
import { NewUserComponent } from '../new-user/new-user.component';

@Routes([
    {path: '/', component: UsersComponent},
    {path: '/new', component: NewUserComponent}
])

@Component({
  moduleId: module.id,
  selector: 'app-user-main',
  templateUrl: 'user-main.component.html',
  styleUrls: ['user-main.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class UserMainComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
