import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Application, Criticity, CycleLife, ItSolution, Note, NoteContent, OrganizationIdent, Responsable} from '../model/Application';
import {map} from 'rxjs/operators';
import {ApiService} from '../../main/service/api.service';
import {NotificationService} from '../../main/service/notification.service';


@Injectable({
  providedIn: 'root'
})
export class ApplicationService {


  // @ts-ignore
  private applicationSubject: BehaviorSubject<Application> = new BehaviorSubject<Application>(ApplicationService.buildApplicationEmpty());
  public applicationObservable: Observable<Application> = this.applicationSubject.asObservable();
  private applicationUrl = '/applications/';
  private codeApplication: string;

  constructor(private api: ApiService, private messageService: NotificationService) {
  }

  private static buildApplicationEmpty(): Application {
    const cycleLife: CycleLife = new CycleLife('', null, null, null);
    const criticity: Criticity = new Criticity('', '', '', '', '', '');
    const itSolution: ItSolution = new ItSolution('', '', '');
    const responsable: Responsable = new Responsable('', '', '');

    const organizationIdent: OrganizationIdent = new OrganizationIdent('', '');

    const notes: Note[] = [];

    return new Application('',
      '',
      '',
      responsable,
      cycleLife,
      itSolution,
      criticity,
      organizationIdent,
      notes);
  }

  // tslint:disable-next-line:typedef
  loadApplication(codeApplication: string) {

    this.codeApplication = codeApplication;
    console.log('code app in' + codeApplication);
    this.api.get(this.applicationUrl + codeApplication)
      .pipe(map(applicationResponse => applicationResponse as Application))
      .subscribe((application: Application) => {
        console.log(application.notes === null);
        this.applicationSubject.next(application);
      });
  }

  // tslint:disable-next-line:typedef
  loadApplicationBidon() {
    const dateb = new Date('01-01-2020');
    const dateup = new Date('01-05-2020');
    const cyclelifeBidon: CycleLife = new CycleLife('active', dateb, dateup, null);
    const criticityBidon: Criticity = new Criticity('oui', 'non', 'C3', 'h24', '1j:01h:25min', '5j:5h:5min');
    const itSolutionBidon: ItSolution = new ItSolution('maison', 'easy', 'ibm');
    const personneBidon: Responsable = new Responsable('123123', 'John', 'Doe');
    const note1: Note = new Note('note1', 'blablabla1', dateb);
    const note2: Note = new Note('note2', 'encore plus blabla', dateup);
    const note3: Note = new Note('note1', 'blablabla1', dateb);
    const note4: Note = new Note('note2', 'encore plus blabla', dateup);
    const note5: Note = new Note('note1', 'blablabla1', dateb);
    const note6: Note = new Note('note2', 'encore plus blabla', dateup);
    const note7: Note = new Note('note1', 'blablabla1', dateb);
    const note8: Note = new Note('note2', 'encore plus blabla blalalalalbabababababababbaba' +
      'uiouuupuououoiuuoupupuouoiuoupuupoupouoiu' +
      'ruoiurououupuopup', dateup);
    const organizationIdentBidon: OrganizationIdent = new OrganizationIdent('121245', 'test orga');
    const notesBidon = [note1, note2, note3, note4, note5, note6, note7, note8];
    const applicationBidon: Application = new Application('Ap000001', 'appliTest',
      'application Test', personneBidon, cyclelifeBidon, itSolutionBidon, criticityBidon, organizationIdentBidon, notesBidon);
    this.applicationSubject.next(applicationBidon);
  }


  createNote(note: Note): void {
    console.log('creation Note service');
    console.log('creation Note service' + note.noteTitle + ' ' + note.noteCreationDate);
    const dateCreate: Date = new Date();
    dateCreate.getDate();
    if (note.noteCreationDate == null) {
      console.log('creation');
      note.noteCreationDate = dateCreate;
      this.api.post(this.applicationUrl + this.codeApplication + '/notes/', note)
        .subscribe(() => {
            this.messageService.notify('success', 'Note', 'Création de la note' + note.noteTitle);
            this.loadApplication(this.codeApplication);
          }
        );
    } else {
      console.log('update');
      const content: NoteContent = {noteTitle: note.noteTitle, noteContent: note.noteContent};
      this.api.put(this.applicationUrl + this.codeApplication + '/notes', content)
        .subscribe(() =>
          this.loadApplication(this.codeApplication)
        );
    }
  }

  // tslint:disable-next-line:typedef
  deleteNote(note: Note) {
    console.log('delete' + note.noteTitle);
    this.api.delete(this.applicationUrl + this.codeApplication + '/notes/' + note.noteTitle)
      .subscribe(() => this.loadApplication(this.codeApplication));
  }


}
