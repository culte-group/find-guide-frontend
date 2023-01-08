import {NgModule, Provider} from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthPageComponent} from "./auth-page/auth-page.component";
import { AuthLayoutComponent } from './shared/components/auth-layout/auth-layout.component';
import {RouterModule, Routes} from "@angular/router";
import { PasswordPageComponent } from './password-page/password-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../shared/components/shared.module";
import {AuthService} from "./shared/services/auth.service";
import {AuthInterceptor} from "./shared/services/auth.interceptor";
import {HTTP_INTERCEPTORS} from "@angular/common/http";

const routes: Routes = [
  {
    path: '', component: AuthLayoutComponent, children: [
      {path: '', redirectTo: '/sign-in/auth', pathMatch: 'full'},
      {path: 'auth', component: AuthPageComponent},
      {path: 'password', component: PasswordPageComponent},
      {path: 'register', component: RegisterPageComponent},
    ]
  }
]

const INTERCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthInterceptor,
  multi: true
}

@NgModule({
  declarations: [
    AuthPageComponent,
    AuthLayoutComponent,
    PasswordPageComponent,
    RegisterPageComponent,
  ],
  imports: [
    SharedModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  providers: [AuthService, INTERCEPTOR_PROVIDER],
  exports: [RouterModule],
})
export class AuthModule { }
