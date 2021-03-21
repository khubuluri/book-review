import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BookListComponent} from './book-list/book-list.component';
import {NewBookComponent} from './new-book/new-book.component';
import {BookDetailsComponent} from './book-details/book-details.component';
import {EditBookComponent} from './edit-book/edit-book.component';


const routes: Routes = [
  {path: '', component: BookListComponent, pathMatch: 'full'},
  {path: 'new', component: NewBookComponent},
  {path: ':id', component: BookDetailsComponent},
  {path: ':id/edit', component: EditBookComponent},
  {path: '**', redirectTo: '/book', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule {
}
