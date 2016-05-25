import { Component, OnInit } from '@angular/core';
import { Routes, ROUTER_DIRECTIVES, Router } from '@angular/router';
import { HTTP_PROVIDERS } from '@angular/http';

import { NavbarComponent} from './navbar/navbar.component';
import { HomeComponent} from './home/home.component';
import { UsersComponent} from './users/users.component';
import { PostsComponent} from './posts/posts.component';



@Routes([
    {path: '/home', component: HomeComponent},
    {path: '/users', component: UsersComponent},
    {path: '/posts', component: PostsComponent}
])
@Component({
  moduleId: module.id,
  selector: 'first-app-app',
  templateUrl: 'first-app.component.html',
  styleUrls: ['first-app.component.css'],
  directives: [NavbarComponent, ROUTER_DIRECTIVES],
  providers: [HTTP_PROVIDERS]
})

export class FirstAppAppComponent {

  constructor(private _router:Router){

  }

  ngOnInit(){
    this._router.navigate(['/home']);
  }

}
