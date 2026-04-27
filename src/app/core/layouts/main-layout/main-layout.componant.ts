import { RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';
import { NavbarComponant } from "../../../shared/componants/navbar/navbar.componant";

@Component({
  selector: 'app-main-layout',
  imports: [RouterOutlet, NavbarComponant],
  templateUrl: './main-layout.componant.html',
  styleUrl: './main-layout.componant.css',
})
export class MainLayoutComponant {

}
