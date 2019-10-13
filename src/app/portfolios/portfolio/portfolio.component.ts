import { Component, OnInit } from '@angular/core';
import { ArticleOnlineService } from 'src/app/services/article-online.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  portfolios;
  constructor(
                private service: ArticleOnlineService,
                private router: Router
              ) { }

  ngOnInit() {
    this.service.getAll().subscribe(
      (resultat) => {
        this.portfolios = resultat;


      }
    );
  }

  onClickDelete(portfolio) {

    this.service.delete(portfolio._id).subscribe(
      (resultat) => {
        const index = this.portfolios.indexOf(portfolio);
        this.portfolios.splice(index, 1);
      }
    );
  }
  onClickUpdate(portfolio) {
     console.log(portfolio);
     this.router.navigate(['/portfolio/update', portfolio._id]);
  }
}
