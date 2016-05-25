import { Component, OnInit } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { Routes, ROUTER_DIRECTIVES} from '@angular/router';

import { UserService } from './user.service';

@Component({
  moduleId: module.id,
  selector: 'app-users',
  templateUrl: 'users.component.html',
  styleUrls: ['users.component.css'],
  providers: [HTTP_PROVIDERS, UserService],
  directives: [ROUTER_DIRECTIVES]
})
export class UsersComponent implements OnInit {
  users: Object[];
  constructor(private _userService: UserService) {

  }

  ngOnInit() {
    this._userService.getUsers()
        .subscribe(users => {
          this.users = users;
        });
  }

}
