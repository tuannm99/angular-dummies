import { Component, Inject, OnInit } from '@angular/core';
import { flyInOut, expand } from '../animations/app.animation';
import { DishService } from '../services/dish.service';
import { LeaderService } from '../services/leader.service';
import { PromotionService } from '../services/promotion.service';
import { Dish } from '../shared/dish';
import { Leader } from '../shared/leader';
import { Promotion } from '../shared/promotion';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [flyInOut(), expand()],
  host: {
    '[@flyInOut]': 'true',
    style: 'display: block;',
  },
})
export class HomeComponent implements OnInit {
  dish: Dish;
  promotion: Promotion;
  leader: Leader;
  dishErrMess: string;
  leaderErrMess: string;
  promotionErrMess: string;

  constructor(
    private dishservice: DishService,
    private promotionservice: PromotionService,
    private leaderService: LeaderService,
    @Inject('BaseURL') private baseURL
  ) {}

  ngOnInit(): void {
    this.dishservice.getFeaturedDish().subscribe(
      (dish) => (this.dish = dish),
      (errmess) => (this.dishErrMess = <any>errmess)
    );
    this.promotionservice.getFeaturedPromotion().subscribe(
      (promo) => (this.promotion = promo),
      (errmess) => (this.leaderErrMess = <any>errmess)
    );
    this.leaderService.getFeaturedLeader().subscribe(
      (leader) => (this.leader = leader),
      (errmess) => (this.promotionErrMess = <any>errmess)
    );
  }
}
