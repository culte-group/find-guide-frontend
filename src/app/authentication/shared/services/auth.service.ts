import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {EmailDTO, TokenDTO, UpdatedToken, UserInfoDTO} from "../../../shared/interfaces";
import {interval, Observable} from "rxjs";

const URL_EXISTENCE = 'http://localhost:8080/api/v1/auth/existence'
const URL_SIGNIN = 'http://localhost:8080/api/v1/auth/sign-in'
const URL_SIGNUP = 'http://localhost:8080/api/v1/auth/sign-up'
const URL_REFRESH = 'http://localhost:8080/api/v1/auth/refresh'
const URL_UPDATE = 'http://localhost:8080/api/v1/auth/update'

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

  update(): void {
    interval(4 * 60 * 1000).subscribe(() => {
      const tokens: TokenDTO = {
        accessToken: null,
        refreshToken: localStorage.getItem('refresh-token')
      }
      this.client.post(URL_UPDATE, tokens, {
        observe: "response"
      }).subscribe({
        next: response => {
          if (response.status === 200) {
            const token: string = (<UpdatedToken> response.body).accessToken
            localStorage.setItem('access-token', token)
          }
        },
        error: err => {
          localStorage.removeItem('access-token')
          localStorage.removeItem('refresh-token')
          // TODO LOGOUT
        }
      })
    })
  }

  refresh(): void {
    interval(28 * 3600 * 1000).subscribe(() => {
      const tokens: TokenDTO = {
        accessToken: localStorage.getItem('access-token'),
        refreshToken: localStorage.getItem('refresh-token')
      }
      this.client.post(URL_REFRESH, tokens, {
        observe: "response"
      }).subscribe({
        next: response => {
          if (response.status === 200) {
            const tokens: TokenDTO = <TokenDTO> response.body
            localStorage.setItem('access-token', tokens.accessToken!)
            localStorage.setItem('refresh-token', tokens.refreshToken!)
          }
        },
        error: err => {
          localStorage.removeItem('access-token')
          localStorage.removeItem('refresh-token')
          // TODO LOGOUT
        }
      })
    })
  }
}
