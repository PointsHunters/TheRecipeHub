import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  
  // username = new FormControl('', [Validators.required, Validators.username]);
  // fullname = new FormControl('', [Validators.required, Validators.fullname]);
  // email = new FormControl('', [Validators.required, Validators.email]);
  // password = new FormControl('', [Validators.required, Validators.password]);
  
  // getErrorMessage() {
  //   if (this.username.hasError('required')) {
  //     return 'You must enter a value';
  //   }
  //   if (this.fullname.hasError('required')) {
  //     return 'You must enter a value';
  //   }
  //   if (this.email.hasError('required')) {
  //     return 'You must enter a value';
  //   }
  //   if (this.password.hasError('required')) {
  //     return 'You must enter a value';
  //   }

  //   return this.email.hasError('email') ? 'Not a valid email' : '';
  // }

  constructor(private formBuilder:FormBuilder) { }

  profileForm = this.formBuilder.group({
    username:['', Validators.required],
    fullname:['', Validators.required],
    email:['', Validators.required],
    password:['', Validators.required]
  });

  saveForm() {
    console.log(this.profileForm.value);
  }

  ngOnInit(): void {
  }

}
