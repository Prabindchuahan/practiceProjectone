import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-register',
  imports: [RouterModule], // ✅ Required for routing to work
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  constructor(private router: Router) {}

  register() {
    console.log
  }}