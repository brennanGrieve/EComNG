import {Routes} from '@angular/router';

export const routes: Routes  = [
    {path: '', redirectTo: '/', pathMatch:'full'},
    {path: 'contactUs', redirectTo:'/contactus', pathMatch:'full'},
    {path: 'search', redirectTo: '/search', pathMatch:'full'},
    {path: 'signIn', redirectTo: '/signIn', pathMatch:'full'},
    {path: 'myCart', redirectTo: '/myCart', pathMatch:'full'},
    {path: 'products/:productId', redirectTo:'/products/:productId', pathMatch:'full'}

]