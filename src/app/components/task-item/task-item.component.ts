import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TaskInterface } from 'src/app/TaskInterface';
@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {
  @Input() task?: any
  // @Input() task:TaskInterface
  // @Input() task?:TaskInterface
  @Output() deleteTask: EventEmitter<any> = new EventEmitter();
  @Output() toggleTask: any = new EventEmitter()


  removeTask(task: TaskInterface): void {
    this.deleteTask.emit(task)
  }

  toggleReminder(task: TaskInterface) {
    // console.log(1)
    // console.log(task)
    this.toggleTask.emit(task)
  }


}
