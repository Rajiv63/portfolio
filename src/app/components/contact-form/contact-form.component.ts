import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  constructor(private fb: FormBuilder, private firebase: FirebaseService) {}

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(20)]]
    });
  }

  isInvalid(field: string) {
    const c = this.form.get(field);
    return c?.invalid && c?.touched;
  }

  getError(field: string): string {
    const c = this.form.get(field);
    if (!c?.errors) return '';
    if (c.errors['required']) return `${field.charAt(0).toUpperCase() + field.slice(1)} is required.`;
    if (c.errors['minlength']) return `Too short.`;
    if (c.errors['email']) return 'Enter a valid email.';
    return '';
  }

  async onSubmit() {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    this.submitState = 'loading';
    try {
      await this.firebase.sendContactMessage(this.form.value);
      this.submitState = 'success';
      this.form.reset();
    } catch (err) {
      this.submitState = 'error';
      this.errorMessage = 'Something went wrong. Please try emailing directly.';
    }
  }

  reset() { this.submitState = 'idle'; }
}
