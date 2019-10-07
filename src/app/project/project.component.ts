import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Project } from './project.model';
import { ProjectService } from './project.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  @ViewChild('addForm',{static: false}) addNewProjectForm: NgForm;
  newProject: Project;
  projectToEdit: Project;
  private mode = 'add';
  private projectId: number;
  private projectAdded;
  private showProjects;


  constructor(private projectService: ProjectService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.mode = 'add';
    this.showProjects= true;
  }

  onSaveTask() {
    if (this.addNewProjectForm.invalid) { return; }

    if (this.mode === 'add') {
      const projectPriority =
        (this.addNewProjectForm.value.priority === null) ? 15 : this.addNewProjectForm.value.priority;
      this.newProject = new Project(null,
        this.addNewProjectForm.value.projectName,
        this.addNewProjectForm.value.manager,
        this.addNewProjectForm.value.start_date,
        this.addNewProjectForm.value.end_date,
        projectPriority, 'Initial');

      //this.taskService.addTask(this.newProject);

    } else {
      this.projectToEdit.project = this.addNewProjectForm.value.project;
      this.projectToEdit.manager = this.addNewProjectForm.value.manager;
      this.projectToEdit.startDate = this.addNewProjectForm.value.start_date;
      this.projectToEdit.endDate = this.addNewProjectForm.value.end_date;
      this.projectToEdit.priority = this.addNewProjectForm.value.task_priority;

     // this.taskService.updateTask(this.projectToEdit);
    }



    this.addNewProjectForm.reset();
    this.projectAdded = true;
    this.router.navigate(['/view_task']);
  }
  onUserSearch(){
    alert("Searched users");
  }

  onReset() {
    this.addNewProjectForm.reset();
  }

}
