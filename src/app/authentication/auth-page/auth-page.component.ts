import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../shared/services/auth.service";
import {EmailDTO} from "../../shared/interfaces";
import {Router} from "@angular/router";

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss']
})
export class AuthPageComponent implements OnInit{
  form: FormGroup
  isSubmitted: boolean = false

  constructor(
    private authService: AuthService,
    private router: Router
    ) {
  }
  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.email, Validators.required])
    })
  }

  submit() {
    this.isSubmitted = true
    if (this.form.invalid) {
      return
    }

    const dto: EmailDTO = { email: this.form.value.email }
    localStorage.setItem('email', dto.email)

    this.authService.checkExistence(dto).subscribe({
      next: response => {
        if (response.status === 200) {
          this.router.navigate(['sign-in', 'password'])
        }
      },
      error: err => {
        if (err.status === 404) {
          this.router.navigate(['sign-in', 'register'])
        } else {
          this.router.navigate(['error'], {
            queryParams: { code: err.status }
          })
        }
      }
    })
  }
}
