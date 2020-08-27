import { LoaderService } from './../services/loader.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class LoadingInterceptorInterceptor implements HttpInterceptor {

  constructor(private loaderService: LoaderService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.loaderService.setLoading(true, request.url);
    return next.handle(request)
      .pipe(catchError((err) => {
        this.loaderService.setLoading(false, request.url);
        return err;
      }))
      .pipe(map((event: HttpEvent<any>) => {
        if(event instanceof HttpResponse) {
          this.loaderService.setLoading(false, request.url);
        }
        return event;
      }));
  }
}
