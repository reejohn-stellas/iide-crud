import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor() { }

  getTask(){
    return JSON.parse(localStorage.getItem('task') || '[]');
  }
  postTask(task:any){
    let tasks=JSON.parse(localStorage.getItem('task') || '[]')
    tasks.push(task)
    localStorage.setItem('task',JSON.stringify(tasks))
  }
  deleteTask(task:any){
    let tasks=JSON.parse(localStorage.getItem('task') || '[]')
    for(let i=0;i<tasks.length;i++){
      if(tasks[i].name==task.name){
        tasks.splice(i,1)
      }
     
    }
    localStorage.setItem('task',JSON.stringify(tasks))
  }
}
