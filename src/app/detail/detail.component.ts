import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardsService } from '../services/cards.service';
import { Card } from 'src/app/interfaces/pokemon';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {

  item$: Observable<Card>;

  constructor(
    private route: ActivatedRoute,
    private cardsService: CardsService
  ) {
    const id = this.route.snapshot.paramMap.get('id');
    this.item$ = cardsService.get(id);
  }

}
