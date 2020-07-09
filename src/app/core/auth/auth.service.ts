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
      'https://media-exp1.licdn.com/dms/image/C5103AQGe7loa0_DtIg/profile-displayphoto-shrink_400_400/0?e=1597881600&v=beta&t=__sc-nVDGbW5opyl0z_ViyXq4SA7OCNmulZWGr65EgM',
    accessLevel: 3,
  };

  public isLoggedIn: boolean = false;

  constructor() {}
}
