import { Component } from '@angular/core';
import { Article } from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'angular-reddit';
  articles: Article[];

  constructor(){
    this.articles = [
      new Article('Angular','http://angular.io',10),
      new Article('Fullstack','http://fullstack.io',10),
      new Article('Angular HomePage','http://angular.io',10)
    ];
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement){
    console.log(`Adding article title: ${title.value} 
    and link: ${link.value}`);
    this.articles.push(new Article(title.value, link.value));
    return false;
  }

  sortedArticle(): Article[]{
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }

}
