import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Book} from '../interfaces';
import {BookService} from '../book.service';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  book: Book = null;
  bookId: number = null;

  items: MenuItem[];

  constructor(private route: ActivatedRoute, private router: Router, private bookService: BookService) {
    this.items = [
      {label: 'Edit Book', icon: 'pi pi-fw pi-pencil'},
      {label: 'Add Note', icon: 'pi pi-fw pi-bookmark'},
      {label: 'Delete Book', icon: 'pi pi-fw pi-times'},
    ];
  }

  ngOnInit(): void {
    this.route.params.subscribe((value) => {
      this.bookId = value.id;
      this.getBook();
    });
  }

  getBook() {
    this.book = this.bookService.getBookById(this.bookId);
    // If Id is invalid and book wasn't found navigate to main page
    if (!this.book) {
      this.router.navigate(['/book']);
    }
  }

}
