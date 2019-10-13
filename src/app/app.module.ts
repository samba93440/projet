import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LesArticlesComponent } from './les-articles/les-articles.component';
import { PortfolioComponent } from './portfolios/portfolio/portfolio.component';
import { PortfolioOneComponent } from './portfolios/portfolio-one/portfolio-one.component';
import { PortfolioUpdateComponent } from './portfolios/portfolio-update/portfolio-update.component';
import { NewPortfolioComponent } from './portfolios/new-portfolio/new-portfolio.component';
import { ArticleLocalService } from './services/article-local.service';
import { ArticleOnlineService } from './services/article-online.service';
import { MorePipe } from './more.pipe';
import { UsersComponent } from './users/users.component';
import { UsersOnlineService } from './services/users-online.service';
import { CommentairesOnlineService } from './services/commentaires-online.service';
import { UsershomeComponent } from './usershome/usershome.component';
import { UserNewComponent } from './user-new/user-new.component';
import { UserUpdateComponent } from './user-update/user-update.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContactComponent,
    NotFoundComponent,
    HomepageComponent,
    LesArticlesComponent,
    PortfolioComponent,
    PortfolioOneComponent,
    PortfolioUpdateComponent,
    NewPortfolioComponent,
    MorePipe,
    UsersComponent,
    UsershomeComponent,
    UserNewComponent,
    UserUpdateComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path : '' , component : HomepageComponent } ,
      { path : 'article/:id' , component : LesArticlesComponent },
      { path : 'portfolio/update/:id' , component : PortfolioUpdateComponent } ,
      { path : 'portfolio/new' , component : NewPortfolioComponent } ,
      { path : 'portfolio/:id' , component : PortfolioOneComponent } ,
      { path : 'portfolio' , component : PortfolioComponent } ,
      { path : 'contact', component: ContactComponent},
      { path : 'users' , component : UsershomeComponent },
      { path : 'users/:id' , component : UsersComponent },
      { path : 'users/users/new' , component : UserNewComponent },
      { path : 'user/update/:id' , component : UserUpdateComponent },
      { path : '**' , component : NotFoundComponent }

  ]),
  HttpClientModule,
  FormsModule
  ],
  providers: [
    ArticleLocalService,
    ArticleOnlineService,
    UsersOnlineService,
    CommentairesOnlineService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
