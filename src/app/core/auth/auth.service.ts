import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface User {
  name: string;
  username: string;
  email: string;
  image: string;
  accessLevel: number;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public authStatus: Subject<User> = new Subject();

  public currentUser: User = {
    username: 'nrwinner',
    name: 'Nick Winner',
    email: 'design@winnerdigital.net',
    image:
      'https://avatars3.githubusercontent.com/u/7431390?s=460&u=aae814429544d7da1d6c4761e4dd5cc5d061be23&v=4',
    accessLevel: 3,
  };

  public isLoggedIn: boolean = false;

  constructor() {}
}
