import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Bar } from '../../components/bar/bar';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [Bar, CommonModule, RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {

}
