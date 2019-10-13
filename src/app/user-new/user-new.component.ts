import { Component, OnInit } from '@angular/core';
import { UsersOnlineService } from '../services/users-online.service';

@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.css']
})
export class UserNewComponent implements OnInit {

  isOk = false;

  constructor(
      private service: UsersOnlineService ) { }

  ngOnInit() {

  }

  onSubmitNewUser($event, f) {
    $event.preventDefault();
    if (f.valid) {
      const user = f.value;
      console.log(user);

      // appeler l'API pour faire le POST
      this.service.create(user).subscribe(
        (result) => {
          console.log(result);
          this.isOk = true;

        }
      );
    }
  }

}
