import { Component } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
title:string = 'Task Tracker';
showAddTask:boolean=false;
// subscription:Subscription;
subscription="";


constructor(private uiService:UiService){ 
}

ngOnInit():void{

}

  toggleAddTask(){
    this.showAddTask=!this.showAddTask
    this.uiService.toggleAddTask(this.showAddTask)
  }


}
