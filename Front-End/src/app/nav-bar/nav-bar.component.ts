import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent 
{
  selectedItem: number | null = 1;

  selectItem(itemNumber : number): void
  {
    this.selectedItem = itemNumber;
  }
}
