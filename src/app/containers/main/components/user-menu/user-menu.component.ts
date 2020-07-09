import { Component, OnInit } from '@angular/core';
import { AuthService } from '@core/auth';

@Component({
  selector: 'p-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss'],
})
export class UserMenuComponent implements OnInit {
  constructor(public auth: AuthService) {}

  ngOnInit(): void {}
}
