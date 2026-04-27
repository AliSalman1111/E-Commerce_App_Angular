import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink ,RouterLinkActive],
  templateUrl: './navbar.componant.html',
  styleUrl: './navbar.componant.css',
})
export class NavbarComponant {

  @Input({required:true}) islogin!: boolean;

}
