import { Injectable } from '@angular/core';






@Injectable({
  providedIn: 'root'
})


export class ArticleLocalService {

  constructor() { }

  getAll() {
    return [
      {
        id : 1,
        titre: 'un titre',
        contenu: 'lorem',
        dateCreation: '26/08/2017',
        nomAuteur: 'azert',
        emailAuteur: 'azert@yuiop.fr',
        isPublic: true,
        categories: [
        'session1',
        'session2',
        'session3',
        'session4'
    ]
    },
      {
        id : 2,
        titre: 'un titre',
        contenu: 'lorem',
        dateCreation: '26/08/2017',
        nomAuteur: 'azert',
        emailAuteur: 'azert@yuiop.fr',
        isPublic: true,
        categories: [
        'session1',
        'session2',
        'session3',
        'session4'
    ]
    },
      {
        id : 3,
        titre: 'un titre',
        contenu: 'lorem',
        dateCreation: '26/08/2017',
        nomAuteur: 'azert',
        emailAuteur: 'azert@yuiop.fr',
        isPublic: true,
        categories: [
        'session1',
        'session2',
        'session3',
        'session4'
    ]
    },
      {
        id : 4,
        titre: 'un titre',
        contenu: 'lorem',
        dateCreation: '26/08/2017',
        nomAuteur: 'azert',
        emailAuteur: 'azert@yuiop.fr',
        isPublic: true,
        categories: [
        'session1',
        'session2',
        'session3',
        'session4'
    ]
    },
      {
        id : 5,
        titre: 'un titre',
        contenu: 'lorem',
        dateCreation: '26/08/2017',
        nomAuteur: 'azert',
        emailAuteur: 'azert@yuiop.fr',
        isPublic: true,
        categories: [
        'session1',
        'session2',
        'session3',
        'session4'
    ]
    },
      {
        id : 6,
        titre: 'un titre',
        contenu: 'lorem',
        dateCreation: '26/08/2017',
        nomAuteur: 'azert',
        emailAuteur: 'azert@yuiop.fr',
        isPublic: true,
        categories: [
        'session1',
        'session2',
        'session3',
        'session4'
    ]
    },
    ];
  }

  get(id) {
    // rechercher un article qui a l'id n° dans le tableau this.getAll()
    // vue dans Express [].find()
    const article = this.getAll().find( (article) => {
      if ( article.id === id) {
      return article;
      }
    } ) ;

    if (!article ) { return {} ; }
    return article ;
  }

  getFromTo(numPage ?: number , nbArticleParPage ?: number) {
    const vraiNumeroPage: number = numPage || 0 ;
    const vraiNbArticleParPage: number = nbArticleParPage || 2 ;

    return this.getAll().slice(
        vraiNumeroPage * vraiNbArticleParPage,
        vraiNumeroPage * vraiNbArticleParPage + vraiNbArticleParPage
    );

  }

}
