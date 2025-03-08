import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule], // ✅ Required for routing to work
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private router: Router) {}


  login() {
    console.log("Login clicked");
    this.router.navigate(['/dashboard']); // ✅ Redirect after login
  }
}
