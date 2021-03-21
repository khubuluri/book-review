import {NgModule} from '@angular/core';
import {PrimeNGModule} from './primeNG.module';
import {StarsComponent} from './components/stars/stars.component';

@NgModule({
  declarations: [StarsComponent],
  imports: [PrimeNGModule],
  exports: [StarsComponent, PrimeNGModule],
})
export class SharedModule {
}
