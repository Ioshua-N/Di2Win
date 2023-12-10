import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUsers, faScroll, faFile } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit 
{
  faUsers = faUsers;
  faScroll = faScroll;
  faFile = faFile;

  userCount!: number;
  pagesCount!: number;
  docCount!: number;
  pgPerDoc!: number;

  constructor(private dataService: DataService) {}

  ngOnInit(): void 
  {
    this.dataService.getPgPerDoc().subscribe((response: any) => 
    {
      this.pgPerDoc = response.rows[0]?.round;
    },
    error => {
      console.error('Erro ao obter dados do usuário', error);
    });

    this.dataService.getUserCount().subscribe((response: any) => 
    {
      this.userCount = response.rows[0]?.count;
    },
    error => {
      console.error('Erro ao obter dados do usuário', error);
    });

    this.dataService.getPagesCount().subscribe((response: any) =>
    {
      this.pagesCount = response.rows[0]?.sum;
    }, 
    error =>
    {
      console.error('Erro ao obter dados das páginas', error);
    });

    this.dataService.getDocCount().subscribe((response: any) =>
    {
      this.docCount = response.rows[0]?.count;
    }, 
    error =>
    {
      console.error('Erro ao obter dados das páginas', error);
    });
  }
}