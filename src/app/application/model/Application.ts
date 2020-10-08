export interface Application {
  codeApplication: string;
  shortDescription: string;
  longDescription: string;
  personne: Personne;
  cycleLife: CycleLife;
  itSolution: ItSolution;
  criticity: Criticity;
  notes: Note[];
}
export interface Personne{
  uid: string;
  firstName: string;
  lastName: string;
}
export interface CycleLife{
  state: string;
  dateOfCreation: Date;
  dateOfLastUpdate: Date;
  dateEndInReality: Date;

}
export interface ItSolution{
  typeOfSolution: string;
  nameOfFirware: string;
  labelSourcingMode: string;
}

export interface Criticity {
  privilegeInformation: string;
  personalData: string;
  serviceClass: string;
  aviability: string;
  rpo: string;
  rto: string;
}

export interface Note{
  noteTitle: string;
  noteContent: string;
  noteCreationDate: Date;
}
