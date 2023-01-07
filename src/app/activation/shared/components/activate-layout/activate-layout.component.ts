import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {ActivateService} from "../../services/activate.service";
import {EmailDTO} from "../../../../shared/interfaces";

@Component({
  selector: 'app-activate-layout',
  templateUrl: './activate-layout.component.html',
  styleUrls: ['./activate-layout.component.scss']
})
export class ActivateLayoutComponent implements OnInit {
  email: string
  isLoaded = false

  constructor(
    private router: Router,
    private service: ActivateService,
    private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.service.activateUser({token: params['token']})
        .subscribe({
          next: (response) => {
            if (response.status === 200) {
              this.email = (<EmailDTO> response.body).email
              this.isLoaded = true
            }
          },
          error: err => {
            console.log(err)
            this.router.navigate(['error'], {
              queryParams: { code: err.status }
            })
          }
        })
    })
  }

}
