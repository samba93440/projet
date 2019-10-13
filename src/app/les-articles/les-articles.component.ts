import { Component, OnInit } from '@angular/core';
import { ArticleOnlineService } from '../services/article-online.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-les-articles',
  templateUrl: './les-articles.component.html',
  styleUrls: ['./les-articles.component.css']
})
export class LesArticlesComponent implements OnInit {

  articles;



  constructor(private service: ArticleOnlineService, private router: Router) { }

  ngOnInit() {
    this.service.getAll().subscribe(
      (resultat) => {
        this.articles = resultat;
      }
    );
  }
  onClickHome() {
    this.router.navigate(['']);
  }


}
