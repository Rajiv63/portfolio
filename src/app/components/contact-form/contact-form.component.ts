import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { FirebaseService } from '../../services/firebase.service';

type SubmitState = 'idle' | 'loading' | 'success' | 'error';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  form!: FormGroup;

  submitState: SubmitState = 'idle';

  errorMessage = '';

  subjects = [
    'Job Opportunity / Internship',
    'Freelance Project',
    'Collaboration',
    'General Inquiry',
    'Other'
  ];

  constructor(
    private fb: FormBuilder,
    private firebase: FirebaseService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(2)
        ]
      ],

      email: [
        '',
        [
          Validators.required,
          Validators.email
        ]
      ],

      subject: [
        '',
        Validators.required
      ],

      message: [
        '',
        [
          Validators.required,
          Validators.minLength(20)
        ]
      ]
    });
  }

  isInvalid(field: string): boolean {
    const control = this.form.get(field);
    return !!(control && control.invalid && control.touched);
  }

  getError(field: string): string {

    const control = this.form.get(field);

    if (!control?.errors) {
      return '';
    }

    if (control.errors['required']) {
      return `${field.charAt(0).toUpperCase() + field.slice(1)} is required.`;
    }

    if (control.errors['email']) {
      return 'Please enter a valid email address.';
    }

    if (control.errors['minlength']) {
      return `Minimum ${control.errors['minlength'].requiredLength} characters required.`;
    }

    return '';
  }

  async onSubmit(): Promise<void> {

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.submitState = 'loading';

    try {

      await this.firebase.sendContactMessage(this.form.value);

      this.submitState = 'success';

      this.form.reset({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

      this.form.markAsUntouched();

    } catch (error) {

      console.error(error);

      this.submitState = 'error';

      this.errorMessage =
        'Unable to send your message at the moment. Please try again or contact me directly via email.';

    }
  }

  reset(): void {

    this.submitState = 'idle';

    this.errorMessage = '';

    this.form.reset({
      name: '',
      email: '',
      subject: '',
      message: ''
    });

    this.form.markAsUntouched();
  }

}