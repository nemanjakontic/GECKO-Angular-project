import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  loadingSub: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  loadingMap: Map<string, boolean> = new Map<string, boolean>();

  setLoading(loadingState: boolean, url: string) {
    if (loadingState === true) {
      this.loadingMap.set(url, loadingState);
      this.loadingSub.next(true);
    } else if (loadingState === false && this.loadingMap.has(url)) {
      this.loadingMap.delete(url);
    }
    if(this.loadingMap.size === 0) {
      this.loadingSub.next(false);
    }
  }
}
