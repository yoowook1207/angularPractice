import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss'],
})
export class ReactiveFormsComponent implements OnInit {
  formSet!: FormGroup;
  user: any = {
    first_name: '',
    last_name: '',
    email: ''
  }

  get first(): FormControl {
    return this.formSet.get('first_name') as FormControl;
  }
  get last(): FormControl {
    return this.formSet.get('last_name') as FormControl;
  }
  get email(): FormControl {
    return this.formSet.get('email') as FormControl;
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formSet = this.fb.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: [
        '',
        [Validators.pattern('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$')],
      ],
    });
  }

  onSubmit() {
    console.log(this.formSet.get('first_name')!.value)
    console.log(this.formSet.value)
    this.user = this.formSet.value
  }
}
