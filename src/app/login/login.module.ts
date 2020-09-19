import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountService, Account } from '../account';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    AccountService
  ]
})
export class LoginModule { }
