import { Component, OnInit } from '@angular/core';
import { UsersOnlineService } from '../services/users-online.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {

  user ;
  pageId;

  isOk = false ;

  constructor(
      private service: UsersOnlineService ,
      private route: ActivatedRoute ,
      private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe( (params) => {
      const id = params.get('id');
      this.pageId = id;
      this.service.getOne(id).subscribe( (result) => {

        this.user = result ;
        console.log(result);

      }, (error) => {
         console.log( 'Erreur inattendue', error.status);
         this.router.navigate(['/not-found']);
      });
    });
  }

  onSubmitNewUser($event, f) {
    $event.preventDefault();
    if (f.valid) {
      const user = f.value;
      // appel à notre api

      console.log('ressource => ', user);
      this.service.update(user, this.pageId).subscribe((result) => {
        console.log(result);

        this.isOk = true ;
      });
    }
  }

}
