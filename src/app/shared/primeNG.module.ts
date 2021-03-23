import {NgModule} from '@angular/core';
import {CardModule} from 'primeng/card';
import {RatingModule} from 'primeng/rating';
import {MenuModule} from 'primeng/menu';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {InputNumberModule} from 'primeng/inputnumber';
import {ButtonModule} from 'primeng/button';
import {RippleModule} from 'primeng/ripple';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {MessagesModule} from 'primeng/messages';
import {ToastModule} from 'primeng/toast';

@NgModule({
  imports: [
    CardModule,
    RatingModule,
    MenuModule,
    InputTextModule,
    InputNumberModule,
    InputTextareaModule,
    ButtonModule,
    RippleModule,
    ConfirmDialogModule,
    MessagesModule,
    ToastModule
  ],
  exports: [
    CardModule,
    RatingModule,
    MenuModule,
    InputTextModule,
    InputNumberModule,
    InputTextareaModule,
    ButtonModule,
    RippleModule,
    ConfirmDialogModule,
    MessagesModule,
    ToastModule
  ]
})
export class PrimeNGModule {

}
