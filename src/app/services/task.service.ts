import { Injectable } from '@angular/core';
import { TaskInterface } from '../TaskInterface';
import { Observable } from 'rxjs'
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private baseURL = "http://localhost:3000/tasks"


  constructor(private httpClient: HttpClient) { }


  getTasks(): Observable<TaskInterface[]> {
    return this.httpClient.get<TaskInterface[]>(this.baseURL)
  }


  // deleteTask(task: TaskInterface)  {
  //   return this.httpClient.delete(`${this.baseURL}/${task.id}`)
  // }

  deleteTask(task: TaskInterface): Observable<TaskInterface> {
     return this.httpClient.delete<TaskInterface>(`${this.baseURL}/${task.id}`)
  }
  addTask(task: TaskInterface): Observable<TaskInterface> {
    // console.log(44,task)
    return this.httpClient.post<TaskInterface>(this.baseURL, task)
  }
  getTask(id: number): Observable<TaskInterface> {
    return this.httpClient.get<TaskInterface>(`${this.baseURL}/${id}`)

  }
  updateTask(id:number, task:any): Observable<TaskInterface> {
    console.log(task)
    return this.httpClient.put<TaskInterface>(`${this.baseURL}/${id}`,task)
  }
}
