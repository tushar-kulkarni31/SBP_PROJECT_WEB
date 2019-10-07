import { Project } from './project.model';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';


const BACKEND_URL = environment.apiURL;

@Injectable({ providedIn: 'root' })
export class ProjectService {
  private tasks: Project[] = [];
  private tasksUpdated = new Subject<Project[]>();

  constructor(private http: HttpClient) { }
  
  getTasks() {
    this.http.get<{ status: string, data: any }>(BACKEND_URL + 'tasks')
      .subscribe(response => {
        this.tasks = response.data;
        this.tasksUpdated.next([...this.tasks]);
      });
  }

  getTask(taskId: string) {
    return this.http.get<{ status: string, data: any }>(BACKEND_URL + 'tasks/' + taskId);
  }

  addTask(task: Project) {
    this.http.post<{message: string, data: any}>(BACKEND_URL + 'tasks', task)
      .subscribe((response) => {
        this.tasks.push(response.data);
        this.tasksUpdated.next([...this.tasks]);
      });
  }

  updateTask(task: Project) {
    this.http.put(BACKEND_URL + 'tasks/' + task.projectId, JSON.stringify(task))
      .subscribe(response => {
        const updatedTasks = [...this.tasks];
        const oldTaskIndex = updatedTasks.findIndex(t => t.projectId === task.projectId);
        updatedTasks[oldTaskIndex] = task;
        this.tasks = updatedTasks;
        this.tasksUpdated.next([...this.tasks]);
      });
  }

  deleteTask(projectId: number) {
    this.http.delete(BACKEND_URL + 'tasks/' + projectId)
      .subscribe(() => {
        const updatedTasks = this.tasks.filter(Project => Project.projectId !== projectId);
        this.tasks = updatedTasks;
        this.tasksUpdated.next([...this.tasks]);
      });
  }

  getTaskUpdateListener() {
    return this.tasksUpdated.asObservable();
  }

}
