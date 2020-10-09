export class Application {
  codeApplication: string;
  shortDescription: string;
  longDescription: string;
  personne: Personne;
  cycleLife: CycleLife;
  itSolution: ItSolution;
  criticity: Criticity;
  notes: Note[];


  constructor(codeApplication: string, shortDescription: string, longDescription: string, personne: Personne,
              cycleLife: CycleLife, itSolution: ItSolution, criticity: Criticity, notes: Note[]) {
    this.codeApplication = codeApplication;
    this.shortDescription = shortDescription;
    this.longDescription = longDescription;
    this.personne = personne;
    this.cycleLife = cycleLife;
    this.itSolution = itSolution;
    this.criticity = criticity;
    this.notes = notes;
  }

  isAnonymous()
    :
    boolean {
    return this.codeApplication.length === 0;
  }

}

export class Personne {
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

export class  ItSolution {
  typeOfSolution: string;
  nameOfFirware: string;
  labelSourcingMode: string;

  constructor(typeOfSolution: string, nameOfFirware: string, labelSourcingMode: string) {
    this.typeOfSolution = typeOfSolution;
    this.nameOfFirware = nameOfFirware;
    this.labelSourcingMode = labelSourcingMode;
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

