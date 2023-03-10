import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-second-forms',
  templateUrl: './second-forms.component.html',
  styleUrls: ['./second-forms.component.scss']
})
export class SecondFormsComponent implements OnInit {
  usernameForm = new FormGroup({
    "firstName": new FormControl("", Validators.required),
    "lastName": new FormControl("", Validators.required),
  })

  constructor(fb: FormBuilder) { }

  ngOnInit(): void {
    
  }

  onSubmit() {
     console.log(this.usernameForm.value)
  }

}
