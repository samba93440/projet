import { Component, OnInit } from '@angular/core';
import { UsersOnlineService } from '../services/users-online.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users;

  constructor(private service: UsersOnlineService, private router: Router) { }

  ngOnInit() {
    this.service.getAll().subscribe(
      (resultat) => {
        this.users = resultat;
      }
    );
  }
  onClickHome() {
    this.router.navigate(['']);
  }

}
