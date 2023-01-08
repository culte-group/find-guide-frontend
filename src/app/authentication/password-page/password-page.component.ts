import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../shared/services/auth.service";
import {Router} from "@angular/router";
import {AuthResponse, UserInfoDTO} from "../../shared/interfaces";

@Component({
  selector: 'app-password-page',
  templateUrl: './password-page.component.html',
  styleUrls: ['./password-page.component.scss']
})
export class PasswordPageComponent implements OnInit {
  form: FormGroup
  isSubmitted: boolean = false
  isInvalid: boolean = false
  email: string

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      password: new FormControl(null, Validators.required)
    })
    this.email = localStorage.getItem('email')!
  }

  submit() {
    this.isSubmitted = true
    if (this.form.invalid) {
      return
    }

    const user: UserInfoDTO = {email: this.email, password: this.form.value.password}
    this.authService.findUser(user).subscribe({
      next: response => {
        if (response.status === 200) {
          const body: AuthResponse = <AuthResponse>response.body
          localStorage.setItem('access-token', body.accessToken)
          localStorage.setItem('refresh-token', body.refreshToken)

          this.authService.update()
          this.authService.refresh()

          this.router.navigate(['/'])
        }
      },
      error: err => {
        if (err.status === 403) {
          this.isInvalid = true
        } else {
          this.router.navigate(['error'], {
            queryParams: { code: err.status }
          })
        }
      }
    })
  }

}
