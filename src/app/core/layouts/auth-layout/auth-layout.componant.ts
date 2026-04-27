import { Component } from '@angular/core';
import { RouterLink, RouterPreloader, RouterOutlet } from '@angular/router';
import { NavbarComponant } from "../../../shared/componants/navbar/navbar.componant";

@Component({
  selector: 'app-auth-layout',
  imports: [RouterOutlet, NavbarComponant],
  templateUrl: './auth-layout.componant.html',
  styleUrl: './auth-layout.componant.css',
})
export class AuthLayoutComponant {

}
