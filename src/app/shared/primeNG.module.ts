import {NgModule} from '@angular/core';
import {CardModule} from 'primeng/card';
import {RatingModule} from 'primeng/rating';
import {MenuModule} from 'primeng/menu';

@NgModule({
  imports: [CardModule, RatingModule, MenuModule],
  exports: [CardModule, RatingModule, MenuModule]
})
export class PrimeNGModule {

}
