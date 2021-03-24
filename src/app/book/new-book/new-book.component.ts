import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {BookService} from '../book.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ConfirmationService} from 'primeng/api';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.scss'],
  providers: [ConfirmationService]
})
export class NewBookComponent implements OnInit {

  bookForm: FormGroup = null;

  bookId: number = null;
  editMode: boolean = null;

  constructor(private fb: FormBuilder,
              private bookService: BookService,
              private route: ActivatedRoute,
              private router: Router,
              private confirmationService: ConfirmationService) {

  }

  ngOnInit(): void {
    this.bookId = this.route.snapshot.params.id;
    if (this.bookId !== 0 && !this.bookId) {
      this.generateForm();
      this.editMode = false;
    } else {
      this.fillForm();
      this.editMode = true;
    }
  }

  generateForm() {
    this.bookForm = this.fb.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      coverUrl: [''],
      description: ['', Validators.required],
      publisher: ['', Validators.required],
      ISBN: ['', Validators.required],
      releaseYear: new FormControl(null, [Validators.required, Validators.max(2022)]),
      totalPages: [null],
      rating: [0, Validators.required],

    });
  }

  fillForm() {
    const book = this.bookService.getBookById(this.bookId);
    this.bookForm = this.fb.group({
      title: [book.title, Validators.required],
      author: [book.author, Validators.required],
      coverUrl: [book.coverUrl ? book.coverUrl : ''],
      description: [book.description, Validators.required],
      publisher: [book.publisher, Validators.required],
      ISBN: [book.ISBN, Validators.required],
      releaseYear: new FormControl(book.releaseYear, [Validators.required, Validators.max(2022)]),
      totalPages: [book.totalPages ? book.totalPages : null],
      rating: [book.rating, Validators.required],
    });
  }

  onSubmit() {
    // If submitted mark every form control as dirty for styling
    Object.keys(this.bookForm.controls).forEach(key => {
      this.bookForm.get(key).markAsDirty();
    });

    if (this.bookForm.invalid) {
      return;
    }

    if (this.editMode) {
      this.editBook();
    } else {
      this.addBook();
    }

  }

  editBook() {
    this.bookService.editBook(this.bookId, this.bookForm.value);
    this.router.navigate(['/book', this.bookId]);
  }

  addBook() {
    const bookId = this.bookService.addBook(this.bookForm.value);
    this.router.navigate(['/book', bookId]);
  }

  onCancel() {
    const text = this.editMode ? 'editing' : 'adding';
    this.confirmationService.confirm({
      message: 'Do you want to cancel ' + text + ' book? All progress will be lost',
      header: 'Cancel Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
        if (this.editMode) {
          this.router.navigate(['/book', this.bookId]);
        } else {
          this.router.navigate(['/book']);
        }
      }
    });
  }
}
