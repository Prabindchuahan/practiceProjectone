import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'practiceProjectone';
  constructor()
  {
    console.log("constructructure called")
  }

  // ngOnInit(){
  //   this.changeTitle()
  // }
  // ngOnInit() { // ✅ Fixed: Correct method name
  //   this.changeTitle();
  // }

 changeTitle (){
  this.title ="Prabind"
 }

}
