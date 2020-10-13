import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {FluxRefi} from '../model/flux-refi';
import {ApiService} from '../../main/service/api.service';
import {map} from 'rxjs/operators';
import {HttpResponse} from '@angular/common/http';
import {FluxRefiDetail} from '../model/flux-refi-detail';
import {NotificationService} from '../../main/service/notification.service';

@Injectable({
  providedIn: 'root'
})
export class RefiService {

  readonly fluxRefiUrl = '/uploadBatchRefi';
  private lstFluxSuject: BehaviorSubject<FluxRefi[]> = new BehaviorSubject<FluxRefi[]>([]);
  lstFluxObservable: Observable<FluxRefi[]> = this.lstFluxSuject.asObservable();
  private fluxSuject: BehaviorSubject<FluxRefiDetail> = new BehaviorSubject<FluxRefiDetail>(RefiService.buildDummyFlux());
  fluxObservable: Observable<FluxRefiDetail> = this.fluxSuject.asObservable();
  private isLoadingSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  readonly isLoading: Observable<boolean> = this.isLoadingSubject.asObservable();
  private numberOfRequest: number;

  constructor(private api: ApiService,
              private messageService: NotificationService) {
    this.numberOfRequest = 0;
  }

  private static buildDummyFlux(): FluxRefiDetail {
    return {
      fluxId: 0,
      originalName: '',
      fluxState: '',
      createDate: '',
      location: '',
      job: {
        existStatus: '',
        jobStatus: '',
        readCount: 0,
        resultDescription: '',
        startDate: '',
        duration: 0
      },
      statUpdateApplication: {
        ignoreCounter: 0,
        noMoreUpdated: 0,
        referenceCounter: 0,
        updateCounter: 0
      }
    };
  }

  loadAllRefiFlux(): void {
    this.api.get(this.fluxRefiUrl)
      .pipe(map((reponse: any) => {
        return reponse as FluxRefi[];
      }))
      .subscribe(lstFluxRefi => this.lstFluxSuject.next(lstFluxRefi));
  }

  loadRefiFlux(id: number): void {
    this.api.get(this.fluxRefiUrl + '/' + id)
      .pipe(map((reponse: any) => {
        return reponse as FluxRefiDetail;
      }))
      .subscribe(fluxRefi => this.fluxSuject.next(fluxRefi));
  }

  upLoad(fluxRefi: File): void {
    this.api.uploadFile(this.fluxRefiUrl, fluxRefi, 'fluxRefi')
      .subscribe(event => {
        if (event instanceof HttpResponse) {
          this.supervise(event.headers.get('Location'));
        }
      });
  }

  deleteFluxrefi(selectedFlux: FluxRefi): void {
    this.api.delete(this.fluxRefiUrl + '/' + selectedFlux.fluxId)
      .subscribe(() => {
        this.messageService.notify('success', 'Successful', 'Flux du ' + selectedFlux.createDate + ' supprimé');
        this.loadAllRefiFlux();
      });
  }

  unSelectFlux(): void {
    this.fluxSuject.next(RefiService.buildDummyFlux());
  }

  private supervise(location: string): void {
    const fluxId: string = location.slice(location.indexOf(this.fluxRefiUrl) + this.fluxRefiUrl.length + 1);
    console.log('-----', fluxId);
    this.doSuperviseById(fluxId);
  }

  private doSuperviseById(fluxId: string): void {
    this.api.get(this.fluxRefiUrl + '/' + fluxId)
      .pipe(map((reponse: any) => {
        return reponse as FluxRefiDetail;
      }))
      .subscribe(fluxRefi => {
        this.isLoadingSubject.next(true);
        this.fluxSuject.next(fluxRefi);
        if (fluxRefi.job.jobStatus === 'none') {
          setTimeout(() => this.doSuperviseById(fluxId), 500);
        } else {
          this.isLoadingSubject.next(false);
          this.loadAllRefiFlux();
        }
      });
  }
}
