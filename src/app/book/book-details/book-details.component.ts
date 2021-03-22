import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Book} from '../interfaces';
import {BookService} from '../book.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  book: Book = null;
  bookId: number = null;

  constructor(private route: ActivatedRoute, private router: Router, private bookService: BookService) {
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
