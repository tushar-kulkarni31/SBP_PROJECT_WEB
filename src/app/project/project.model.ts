import { User } from '../user/user.model';

export class Project {
  public projectId: number;
  public project  : string;
  public manager: string;
  public startDate: Date;
  public endDate: Date;
  public priority: number;
  public status: string;
  

  constructor(projectId: number, project: string, manager: string, startDate: Date, endDate: Date, priority: number, status: string) {
    this.projectId = projectId;
    this.project = project;
    this.manager = manager;
    this.startDate = startDate;
    this.endDate = endDate;
    this.priority = priority;
    this.status = status;
  }
}
