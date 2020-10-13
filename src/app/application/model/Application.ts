export class Application {
  codeApplication: string;
  shortDescription: string;
  longDescription: string;
  responsable: Responsable;
  cycleLife: CycleLife;
  itSolution: ItSolution;
  criticity: Criticity;
  organizationIdent: OrganizationIdent;
  notes: Note[];


  constructor(codeApplication: string, shortDescription: string, longDescription: string, responsable: Responsable,
              cycleLife: CycleLife, itSolution: ItSolution, criticity: Criticity, organizationIdent: OrganizationIdent, notes: Note[]) {
    this.codeApplication = codeApplication;
    this.shortDescription = shortDescription;
    this.longDescription = longDescription;
    this.responsable = responsable;
    this.cycleLife = cycleLife;
    this.itSolution = itSolution;
    this.criticity = criticity;
    this.organizationIdent = organizationIdent;
    this.notes = notes;
  }

  isAnonymous()
    :
    boolean {
    return this.codeApplication.length === 0;
  }

}

export class Responsable {
  uid: string;
  firstName: string;
  lastName: string;

  constructor(uid: string, firstName: string, lastName: string) {
    this.uid = uid;
    this.firstName = firstName;
    this.lastName = lastName;
  }
}


export class CycleLife {
  state: string;
  dateOfCreation: Date;
  dateOfLastUpdate: Date;
  dateEndInReality: Date;

  constructor(state: string, dateOfCreation: Date, dateOfLastUpdate: Date, dateEndInReality: Date) {
    this.state = state;
    this.dateOfCreation = dateOfCreation;
    this.dateOfLastUpdate = dateOfLastUpdate;
    this.dateEndInReality = dateEndInReality;
  }
}

export class ItSolution {
  typeOfSolution: string;
  nameOfFirmware: string;
  labelOfSourcingMode: string;

  constructor(typeOfSolution: string, nameOfFirmware: string, labelOfSourcingMode: string) {
    this.typeOfSolution = typeOfSolution;
    this.nameOfFirmware = nameOfFirmware;
    this.labelOfSourcingMode = labelOfSourcingMode;
  }
}

export class Criticity {
  privilegeInformation: string;
  personalData: string;
  serviceClass: string;
  aviability: string;
  rpo: string;
  rto: string;

  constructor(privilegeInformation: string, personalData: string, serviceClass: string, aviability: string, rpo: string, rto: string) {
    this.privilegeInformation = privilegeInformation;
    this.personalData = personalData;
    this.serviceClass = serviceClass;
    this.aviability = aviability;
    this.rpo = rpo;
    this.rto = rto;
  }
}

export class OrganizationIdent {
  idRefog: string;
  name: string;


  constructor(idRefog: string, name: string) {
    this.idRefog = idRefog;
    this.name = name;
  }
}

export interface NoteContent {
  noteTitle: string;
  noteContent: string;
}

export class Note {
  noteTitle: string;
  noteContent: string;
  noteCreationDate: Date;

  constructor(noteTitle: string, noteContent: string, noteCreationDate: Date) {
    this.noteTitle = noteTitle;
    this.noteContent = noteContent;
    this.noteCreationDate = noteCreationDate;
  }
}

