import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivateDTO} from "../../../shared/interfaces";
import {Observable} from "rxjs";

const URL = 'http://localhost:8080/api/v1/activate'

@Injectable()
export class ActivateService {
  constructor(private client: HttpClient) { }

  activateUser(dto: ActivateDTO): Observable<any> {
    console.log(dto.token)
    return this.client.post(URL, dto, {
      observe: "response"
    })
  }
}
