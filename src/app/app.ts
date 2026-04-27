import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponant } from "./shared/componants/footer/footer.componant";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponant],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('E-Commerce_App_Angular');
}
