import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../shared/services/auth.service";
import {confirm, len, lower, num, upper} from "../../shared/custom.validators";
import {AuthResponse, UserInfoDTO} from "../../shared/interfaces";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {
  form: FormGroup
  isSubmitted = false
  email: string
  constructor(
    private authService: AuthService,
    private router: Router) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      password: new FormControl(null, [len(10), upper(), lower(), num()]),
      confirm: new FormControl(null, [Validators.required])
    }, {validators: confirm()})
    this.email = localStorage.getItem('email')!
  }

  submit() {
    this.isSubmitted = true
    if (this.form.invalid) {
      return
    }

    const user: UserInfoDTO = { email: this.email, password: this.form.value.password }
    this.authService.registerUser(user).subscribe({
      next: (response) => {
        if (response.status === 201) {
          // TODO TOKENS IN BODY!
          const body: AuthResponse = <AuthResponse>response.body
          this.router.navigate(['/'])
        }
      },
      error: err => {
        this.router.navigate(['error'], {
          queryParams: { code: err.status }
        })
      }
    })
  }
}
