import { Component, inject, signal, WritableSignal } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { error, log } from 'node:console';
import { AuthService } from '../../service/athontication/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.componant.html',
  styleUrl: './register.componant.css',
})
export class RegisterComponant {

  private readonly authService=inject(AuthService)
  private readonly router=inject(Router)  ;


  errorMessage:WritableSignal<string>=signal<string>('');
  isLouding:WritableSignal<boolean>=signal<boolean>(false);





registerForm=new FormGroup(
  {

  name:new FormControl(null,[Validators.required, Validators.minLength(3),Validators.maxLength(30)]),
  email: new FormControl(null,[Validators.required, Validators.email]),
  phone:new FormControl(null,[Validators.required,Validators.pattern(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/)]),
  password: new FormControl(null,[Validators.required,Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/)]),
  rePassword: new FormControl(null,[Validators.required,Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/)]),




}

,

{
 validators: this.handelConfirmPassword
}
)


RegisterForm():void{



if(this.registerForm.valid){

  this.isLouding.set(true);

this.authService.sendRegisterData(this.registerForm.value).subscribe({

  

  next:(res)=>{

   if(res.message=='success'){

this.registerForm.reset();
    this.isLouding.set(false);

    this.errorMessage.set('');

    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 500);


    
   }
}
,
error:(err)=>{

this.errorMessage.set(err.error.message);
    this.isLouding.set(false);
}

}

)
  


}

}


  

handelConfirmPassword(group:AbstractControl){

  let password=group.get('password')?.value;
  let repassword=group.get('rePassword')?.value;

 if(password===repassword){
  return null
 }

 else{

  return {mismatch :true}
 }

  
}


}
