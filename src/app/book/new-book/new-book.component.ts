import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BookService} from '../book.service';
import {Router} from '@angular/router';
import {ConfirmationService, MessageService} from 'primeng/api';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.scss'],
  providers: [ConfirmationService, MessageService]
})
export class NewBookComponent implements OnInit {

  bookForm: FormGroup = null;

  constructor(private fb: FormBuilder,
              private bookService: BookService,
              private router: Router,
              private confirmationService: ConfirmationService,
              private messageService: MessageService) {

  }

  ngOnInit(): void {
    this.generateForm();
  }

  generateForm() {
    this.bookForm = this.fb.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      coverUrl: [''],
      description: ['', Validators.required],
      publisher: ['', Validators.required],
      ISBN: ['', Validators.required],
      releaseYear: [null, Validators.required],
      totalPages: [null],
      rating: [0, Validators.required],

    });

    this.bookForm.markAsDirty();

  }

  onSubmit() {
    // If submitted mark every form control as dirty for styling
    Object.keys(this.bookForm.controls).forEach(key => {
      this.bookForm.get(key).markAsDirty();
    });

    if (this.bookForm.invalid) {
      return;
    }
    const bookId = this.bookService.addBook(this.bookForm.value);
    this.messageService.add({severity: 'info', summary: 'Added', detail: 'Book has been added'});
    this.router.navigate(['/book', bookId]);
  }

  onCancel() {
    this.confirmationService.confirm({
      message: 'Do you want to cancel adding book? All progress will be lost',
      header: 'Cancel Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.router.navigate(['/book']);
      }
    });
  }
}
