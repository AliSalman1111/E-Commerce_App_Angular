import { Component, inject, signal, WritableSignal } from '@angular/core';
import { AuthService } from '../../service/athontication/auth.service';
import { Router } from '@angular/router';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.componant.html',
  styleUrl: './login.componant.css',
})
export class LoginComponant {

  
  private readonly authService=inject(AuthService)
  private readonly router=inject(Router)  ;


  errorMessage:WritableSignal<string>=signal<string>('');
  isLouding:WritableSignal<boolean>=signal<boolean>(false);





loginForm=new FormGroup(
  {

  email: new FormControl(null,[Validators.required, Validators.email]),
  password: new FormControl(null,[Validators.required,Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/)]),




}


)


LoginForm():void{



if(this.loginForm.valid){

  this.isLouding.set(true);

this.authService.sendLoginData(this.loginForm.value).subscribe({

  

  next:(res)=>{

   if(res.message=='success'){

this.loginForm.reset();
    this.isLouding.set(false);

    this.errorMessage.set('');

    setTimeout(() => {
      this.router.navigate(['/home']);
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
