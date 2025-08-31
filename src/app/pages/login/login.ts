import { Component } from '@angular/core';
import { Bar } from '../../components/bar/bar';
import { FormsModule } from '@angular/forms';
import { emailValid } from '../../utils/valids';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-login',
  imports: [Bar, FormsModule, RouterModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  //user model
  email = ''
  password = ''
  error = ''
  remember = false


  //fonksiyon
  userLogin(){
    this.error = ''
    const emailStatus = emailValid(this.email);
    if(!emailStatus){
    this.error = ' Email format error'
    } else if(this.password === '') {
      this.error = ' Password empty!'
    } else {
    console.log("Form Send:", this.email, this.password, this.remember);
  }
 }
}
