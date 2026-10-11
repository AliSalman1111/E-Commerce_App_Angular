import { FlowbiteService } from './../../../core/services/flowbites/flowbits.service';
import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink ,RouterLinkActive],
  templateUrl: './navbar.componant.html',
  styleUrl: './navbar.componant.css',
})
export class NavbarComponant {

  @Input({required:true}) islogin!: boolean;


   constructor(private FlowbiteService: FlowbiteService) {}

  ngOnInit(): void {
    this.FlowbiteService.loadFlowbite((flowbite) => {
      initFlowbite();
    });

}
}
