import {NgModule} from '@angular/core';
import {PrimeNGModule} from './primeNG.module';
import {StarsComponent} from './components/stars/stars.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [StarsComponent],
  imports: [PrimeNGModule, FormsModule],
  exports: [StarsComponent, PrimeNGModule, FormsModule],
})
export class SharedModule {
}
