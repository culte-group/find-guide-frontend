import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('access-token')
    if (!token) {
      return next.handle(req)
    }

    const clonedReq = req.clone({
      headers: req.headers.append('Authorization', token)
    })
    return next.handle(clonedReq);
  }

}
