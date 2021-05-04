import { NgModule } from '@angular/core';
import { RouterModule, Routes ,CanActivate, ExtraOptions} from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AuthenticationGuard } from './auth/authentication.guard'

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthenticationGuard]},
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) }, 
  { path: 'register', loadChildren: () => import('./register/register.module').then(m => m.RegisterModule) }, 
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) }];

  const config: ExtraOptions = {
    useHash: false,
  };
  
@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
