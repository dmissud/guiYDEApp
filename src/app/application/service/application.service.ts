import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Application, Criticity, CycleLife, ItSolution, Note, Personne} from '../model/Application';
import {map} from 'rxjs/operators';
import {ApiService} from '../../common/service/api.service';


@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  private applicationSubject: BehaviorSubject<Application> = new BehaviorSubject<Application>(new Application('', '',
    '', null, null, null, null, []));
  public applicationObservable: Observable<Application> = this.applicationSubject.asObservable();
  private applicationUrl = '/applications/';

  constructor(private api: ApiService) {
    this.loadApplicationBidon();
  }

  // tslint:disable-next-line:typedef
  loadApplication(codeApplication: string) {
    this.api.get(this.applicationUrl + codeApplication)
      .pipe(map(applicationResponse => applicationResponse as Application))
      .subscribe((application: Application) => this.applicationSubject.next(application));
  }

  private buildApplication(applicationResponse: Application): Application {
    const personne = new Personne(applicationResponse.personne.uid,
      applicationResponse.personne.firstName,
      applicationResponse.personne.lastName);
    const cycleLife = new CycleLife(applicationResponse.cycleLife.state, applicationResponse.cycleLife.dateOfCreation,
      applicationResponse.cycleLife.dateOfLastUpdate,
      applicationResponse.cycleLife.dateEndInReality);
    const itSolution = new ItSolution(applicationResponse.itSolution.typeOfSolution,
      applicationResponse.itSolution.labelSourcingMode,
      applicationResponse.itSolution.nameOfFirware);
    const criticity = new Criticity(applicationResponse.criticity.privilegeInformation,
      applicationResponse.criticity.personalData,
      applicationResponse.criticity.serviceClass,
      applicationResponse.criticity.aviability,
      applicationResponse.criticity.rpo,
      applicationResponse.criticity.rto);

    applicationResponse.notes.forEach((note: Note) => new Note(note.noteTitle, note.noteContent, note.noteCreationDate));
    const notes: Note[] = applicationResponse.notes;
    /*a revoir
    */
    return new Application(applicationResponse.codeApplication,
      applicationResponse.shortDescription,
      applicationResponse.longDescription,
      personne,
      cycleLife,
      itSolution,
      criticity,
      notes);
  }

  // tslint:disable-next-line:typedef
  loadApplicationBidon() {
    const dateb = new Date('01-01-2020');
    const dateup = new Date('01-05-2020');
    const cyclelifeBidon: CycleLife = new CycleLife('active', dateb, dateup, null);
    const criticityBidon: Criticity = new Criticity('oui', 'non', 'C3', 'h24', '1j:01h:25min', '5j:5h:5min');
    const itSolutionBidon: ItSolution = new ItSolution('maison', 'easy', 'ibm');
    const personneBidon: Personne = new Personne('123123', 'John', 'Doe');
    const note1: Note = new Note('note1', 'blablabla1', dateb);
    const note2: Note = new Note('note2', 'encore plus blabla', dateup );
    const notesBidon = [note1 , note2] ;
    const applicationBidon: Application = new Application('Ap000001', 'appliTest',
      'application Test', personneBidon, cyclelifeBidon, itSolutionBidon, criticityBidon, notesBidon);
    this.applicationSubject.next(applicationBidon);
  }


}
