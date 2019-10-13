import { Component, OnInit } from '@angular/core';
import { ArticleOnlineService } from '../services/article-online.service';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  articles;


  constructor(
    private service: ArticleOnlineService ,
  ) { }

  ngOnInit() {
    this.service.getAll().subscribe(
      (resultat) => {
        this.articles = resultat;
        console.log(resultat);
      }
    );

  }

}
