import { Routes } from '@angular/router';
import { AuthLayoutComponant } from './core/layouts/auth-layout/auth-layout.componant';

import { HomeComponant } from './features/home/home.componant';
import { MainLayoutComponant } from './core/layouts/main-layout/main-layout.componant';
import { ProductsComponant } from './features/products/products.componant';
import { CategoriesComponant } from './features/categories/categories.componant';
import { CartComponant } from './features/cart/cart.componant';
import { CheckoutComponant } from './features/checkout/checkout.componant';
import { DetailesComponant } from './features/detailes/detailes.componant';
import { BrandsComponant } from './features/brands/brands.componant';
import { NotfoundComponant } from './features/notfound/notfound.componant';
import { LoginComponant } from './core/auth/Login/login/login.componant';
import { RegisterComponant } from './core/auth/Register/register/register.componant';

export const routes: Routes = [

{
    path:'',
    redirectTo:'home',
    pathMatch:'full'
},


    {
        path: '',
        component:AuthLayoutComponant,
       
        children: [
            {
             path: 'login',
        component:LoginComponant,
        title: 'login',
            },
            {
                path: 'register',
        component:RegisterComponant,
        title: 'Register',
            }
        ]

    },

    {
        path: '',
component:MainLayoutComponant,
        children: [


            {
                path: 'home',
        component:HomeComponant,
        title: 'Home',
            },
            {
                path:'products',
                component:ProductsComponant,
                title:'Products'
            },
              {
                path:'brands',
                component:BrandsComponant,
                title:'Brands'
            },
               {
                path:'categories',
                component:CategoriesComponant,
                title:'Categories'
            },
               {
                path:'cart',
                component:CartComponant,
                title:'Cart'
            },
                   {
                path:'checkout',
                component:CheckoutComponant,
                title:'Checkout'
            },

                      {
                path:'details/:slog/:id',
                component:DetailesComponant,
                title:'Details'
            },

        ]

    }
    ,
    {
        path:'**',
        component:NotfoundComponant,
        title:'Not Found'
    }
];
