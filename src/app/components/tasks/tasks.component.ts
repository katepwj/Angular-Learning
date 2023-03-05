import { Component } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { TaskInterface } from 'src/app/TaskInterface';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {

  tasks: TaskInterface[] = [];
  // tasks?: TaskInterface[];


  constructor(private taskService: TaskService) {

  }
  ngOnInit(): void {
    this.getTasks()
  }

  getTasks() {
    this.taskService.getTasks().subscribe(res => { this.tasks = res })
  }

  deleteTask(task: TaskInterface) {
    // console.log(task)
    this.taskService.deleteTask(task).subscribe(res => this.getTasks())
  }

  toggleTask(task: TaskInterface) {
    this.taskService.updateTask(task.id!, !task.reminder).subscribe(res => this.getTasks())
  }

  addTask(task: TaskInterface) {
    // console.log(task)
    this.taskService.addTask(task).subscribe(res => this.getTasks())
    // this.taskService.addTask(task).subscribe(res => console.log(res))

  }

  // retrieveTutorials(): void {
  //   this.tutorialService.getAll()
  //     .subscribe({
  //       next: (data) => {
  //         this.tutorials = data;
  //         console.log(data);
  //       },
  //       error: (e) => console.error(e)
  //     });
  // }

}
