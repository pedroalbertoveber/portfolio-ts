export interface IExperience {
  id: string,
  company: string,
  currentJob: boolean,
  job: string,
  description: string,
  year: {
    joined: string,
    quit: string,
  }
}