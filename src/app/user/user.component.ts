import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { User } from "./user.model";
import { UserService } from "./user.service";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { Subscription } from 'rxjs';
//import { Observable } from 'rxjs';
//import { Store } from '@ngrx/store';
//import { AppState } from './../app.state';
//import * as UserActions from './../actions/user.actions';

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent implements OnInit {
  @ViewChild("addForm",{static:false}) addNewUserForm: NgForm;
  newUser: User;
  userToEdit: User;
  userAdded = false;
  private mode = "add";
  users: User[] = new Array();
  private showUserDetails = false;
  private userId: number;
  private usersStub: Subscription;


  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    var self = this;
   
    this.mode = "add";
    this.showUserDetails = false;
    this.userService.getUsers();
    this.usersStub = this.userService.getTaskUpdateListener()
      .subscribe((users: User[]) => {
        this.users = users;
        if(this.users && this.users.length>0){
          this.showUserDetails = true;
        }
      });
    
  }
  getUserToEdit() {
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].userId == this.userId) {
        if (this.mode == "edit") {
          this.userToEdit = this.users[i];
        } else if (this.mode == "delete") {
          //this.users.splice(i, 1);
          this.userService.deleteUser(this.userId);
        }
      }
    }
    if(this.users.length == 0){
      this.showUserDetails = false;
    }
  }
  onSaveUser() {
    if (this.addNewUserForm.invalid) {
      return;
    }

    if (this.mode === "add") {
      this.newUser = new User(
        this.addNewUserForm.value.empId,
        this.addNewUserForm.value.firstName,
        this.addNewUserForm.value.lastName,
        null
      );
      //this._store.dispatch(new UserActions.AddUser(this.newUser));
      this.showUserDetails = true;
      this.users.push(this.newUser);
      this.userService.addUser(this.newUser);

    } else {
      this.userToEdit.empId = this.addNewUserForm.value.empId;
      this.userToEdit.firstName = this.addNewUserForm.value.firstName;
      this.userToEdit.lastName = this.addNewUserForm.value.lastName;

       this.userService.updateUser(this.userToEdit);

    }
    this.onReset();
  }
  sortByFirstName() {

    this.users.sort(function (a, b) {
      var x = a.firstName.toLowerCase();
      var y = b.firstName.toLowerCase();
      if (x < y) { return -1; }
      if (x > y) { return 1; }
      return 0;
    });
  }
  sortByLastName() {

    this.users.sort(function (a, b) {
      var x = a.lastName.toLowerCase();
      var y = b.lastName.toLowerCase();
      if (x < y) { return -1; }
      if (x > y) { return 1; }
      return 0;
    });
  }
  sortByEmpId() {

    this.users.sort(function (a, b) {
      var x = a.empId;
      var y = b.empId;
      if (x < y) { return -1; }
      if (x > y) { return 1; }
      return 0;
    });
  }
  deleteUser(userId) {
    this.userId = userId;
    this.mode = "delete";
    this.getUserToEdit();
    this.onReset();
    
  }
  editUser(userId) {
    this.userId = userId;
    this.mode = "edit";
    this.getUserToEdit();
  }

  onReset() {
    this.addNewUserForm.reset();
    this.mode = "add";
  }
}
