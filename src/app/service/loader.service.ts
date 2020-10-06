import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private isLoadingSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  readonly isLoading: Observable<boolean> = this.isLoadingSubject.asObservable();
  private numberOfRequest: number;

  constructor() {
    this.numberOfRequest = 0;
  }

  showLoader(): void {
    if (this.numberOfRequest === 0) {
      this.isLoadingSubject.next(true);
    }
    this.numberOfRequest++;
  }

  hideLoader(): void {
    this.numberOfRequest--;
    if (this.numberOfRequest === 0) {
      this.isLoadingSubject.next(false);
    }
  }
}
