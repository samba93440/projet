import { Component, OnInit } from '@angular/core';
import { UsersOnlineService } from '../services/users-online.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usershome',
  templateUrl: './usershome.component.html',
  styleUrls: ['./usershome.component.css']
})
export class UsershomeComponent implements OnInit {
  users;

constructor(
    private service: UsersOnlineService ,
    private router: Router
  ) { }

  ngOnInit() {
    this.service.getAll().subscribe(
      (resultat) => {
        this.users = resultat;
        console.log(resultat);
      }
    );

  }
  onClickDelete(user) {

    this.service.delete(user._id).subscribe(
      (resultat) => {
        const index = this.users.indexOf(user);
        this.users.splice(index, 1);
      }
    );
  }
  onClickUpdate(user) {
     console.log(user);
     this.router.navigate(['/user/update', user._id]);
  }

}
