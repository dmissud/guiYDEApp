export interface FluxRefiDetail {
  fluxId: number;
  originalName: string;
  fluxState: string;
  createDate: string;
  location: string;
  job: Job;
  statUpdateApplication: StatUpdateApplication;
}


export interface Job {
  existStatus: string;
  jobStatus: string;
  readCount: number;
  resultDescription: string;
  startDate: string;
  duration: number;
}


export interface StatUpdateApplication {
  ignoreCounter: number;
  noMoreUpdated: number;
  referenceCounter: number;
  updateCounter: number;
}

