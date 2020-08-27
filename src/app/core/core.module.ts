import { LoadingInterceptorInterceptor } from './interceptors/loading-interceptor.interceptor';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingSpinnerModule } from './loading-spinner/loading-spinner.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LoadingSpinnerModule
  ],
  exports: [
    CommonModule,
    LoadingSpinnerModule
  ],
  providers:[
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptorInterceptor,
      multi: true
    }
  ]
})
export class CoreModule { }
