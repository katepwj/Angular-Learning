import { Component, EventEmitter, Output } from '@angular/core';
import { TaskInterface } from 'src/app/TaskInterface';
import { UiService } from 'src/app/services/ui.service';


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  // @Output() addTask:any=new EventEmitter()
  @Output() addTask: EventEmitter<TaskInterface> = new EventEmitter()

  showAddTask: boolean = false
  task: TaskInterface = {
    text: "",
    day: "",
    reminder: false
  }

  constructor(private uiService: UiService) { }

  ngOnInit(): void {
    this.uiService.onToggle().subscribe(res=>this.showAddTask=res)
   }

  onSubmit() {

    // step1:check if input is empty
    if (!this.task.text) {
      alert("pls input a text")
      return
    }

    if (!this.task.day) {
      alert("pls input a day")
      return
    }

    // step2: event emit : taskservice
    this.addTask.emit(this.task)
    // step3: empty the task
    this.task = {
      text: "",
      day: "",
      reminder: false
    }
  }

}
