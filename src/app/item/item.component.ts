import { Component, Input } from '@angular/core';
import { Card } from 'src/app/interfaces/pokemon';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {

  @Input() data: Card;

  constructor() { }

}
