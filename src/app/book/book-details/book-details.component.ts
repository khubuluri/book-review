import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Book} from '../interfaces';
import {BookService} from '../book.service';
import {ConfirmationService, MenuItem} from 'primeng/api';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss'],
  providers: [ConfirmationService]
})
export class BookDetailsComponent implements OnInit, OnDestroy {

  routSub: Subscription = null;

  book: Book = null;
  bookId: number = null;

  items: MenuItem[];

  noteDialogVisible = false;
  newNote = '';

  @ViewChild('note') noteInput: ElementRef;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private bookService: BookService,
              private confirmationService: ConfirmationService) {
    this.items = [
      {
        label: 'Edit Book', icon: 'pi pi-fw pi-pencil', command: () => {
          this.onEdit();
        }
      },
      {
        label: 'Add Note', icon: 'pi pi-fw pi-bookmark', command: () => {
          this.noteDialogVisible = true;
        }
      },
      {
        label: 'Delete Book', icon: 'pi pi-fw pi-times', command: () => {
          this.deleteBook();
        }
      },
    ];
  }

  ngOnInit(): void {
    // Get book right away
    this.bookId = this.route.snapshot.params.id;
    this.getBook();

    // If route changes update book
    this.routSub = this.route.params.subscribe((value) => {
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

  onEdit(): void {
    this.router.navigate(['/book', this.bookId, 'edit']);
  }

  addNote(): void {
    // Get rid off whitespace
    this.newNote = this.newNote.trim();
    if (!this.newNote) {
      // Add dirty class if input is empty to show error
      this.noteInput.nativeElement.classList.add('ng-dirty');
    } else {
      this.bookService.addNoteToBook(this.bookId, this.newNote);
      this.noteDialogVisible = false;
    }
  }

  deleteBook() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete this book?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.bookService.removeBook(this.bookId);
        this.router.navigate(['/books']);
      }
    });
  }

  ngOnDestroy(): void {
    if (this.routSub) {
      this.routSub.unsubscribe();
    }
  }
}
