import { Component, OnInit } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';

import { UserService } from './user.service';

@Component({
  moduleId: module.id,
  selector: 'app-users',
  templateUrl: 'users.component.html',
  styleUrls: ['users.component.css'],
  providers: [HTTP_PROVIDERS, UserService]
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
