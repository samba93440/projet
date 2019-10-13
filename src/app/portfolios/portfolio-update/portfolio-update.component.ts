import { Component, OnInit } from '@angular/core';
import { ArticleOnlineService } from 'src/app/services/article-online.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-portfolio-update',
  templateUrl: './portfolio-update.component.html',
  styleUrls: ['./portfolio-update.component.css']
})
export class PortfolioUpdateComponent implements OnInit {

  portfolio ;
  pageId;

  isOk = false ;

  constructor(
      private service: ArticleOnlineService ,
      private route: ActivatedRoute ,
      private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe( (params) => {
      const id = params.get('id');
      this.pageId = id;
      this.service.getOne(id).subscribe( (result) => {

        this.portfolio = result ;
        console.log(result);

      }, (error) => {
         console.log( 'Erreur inattendue', error.status);
         this.router.navigate(['/not-found']);
      });
    });
  }

  onSubmitNewPortfolio($event, f) {
    $event.preventDefault();
    if (f.valid) {
      const portfolio = f.value;
      // appel à notre api

      console.log('ressource => ', portfolio);
      this.service.update(portfolio, this.pageId).subscribe((result) => {
        console.log(result);

        this.isOk = true ;
      });
    }
  }

}
