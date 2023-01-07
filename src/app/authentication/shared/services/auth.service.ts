import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {EmailDTO, UserInfoDTO} from "../../../shared/interfaces";
import {Observable} from "rxjs";

const URL_EXISTENCE = 'http://localhost:8080/api/v1/auth/existence'
const URL_SIGNIN = 'http://localhost:8080/api/v1/auth/sign-in'
const URL_SIGNUP = 'http://localhost:8080/api/v1/auth/sign-up'

@Injectable()
export class AuthService {
  constructor(private client: HttpClient) {}

  checkExistence(dto: EmailDTO): Observable<any> {
    return this.client.post(URL_EXISTENCE, dto, {
      observe: "response"
    })
  }

  findUser(user: UserInfoDTO): Observable<any> {
    return this.client.post(URL_SIGNIN, user, {
      observe: "response"
    })
  }

  registerUser(user: UserInfoDTO): Observable<any> {
    return this.client.post(URL_SIGNUP, user, {
      observe: "response"
    })
  }
}
