import { Component, OnInit } from '@angular/core';
import { ArticleOnlineService } from 'src/app/services/article-online.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-portfolio-one',
  templateUrl: './portfolio-one.component.html',
  styleUrls: ['./portfolio-one.component.css']
})
export class PortfolioOneComponent implements OnInit {

  portfolio;

  constructor(
      private service: ArticleOnlineService,
      private route: ActivatedRoute ,
      private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => { // appel de l'url

      const id = params.get('id');

      this.service.getOne(id).subscribe( // appel l'api
        (resultat) => {

          this.portfolio = resultat;
          console.log(resultat);
        }, (error) => {
          // console.log( "Erreur inattendue", error.status);
          this.router.navigate(['/not-found']);
        }

      );
    });
  }

}
