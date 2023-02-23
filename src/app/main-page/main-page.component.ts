import { Component } from '@angular/core';
import {FormGroup,FormControl,Validators,ReactiveFormsModule} from '@angular/forms'
import { LocalstorageService } from '../services/localstorage.service';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  constructor(private service:LocalstorageService){}
  ngOnInit(){
    this.task=this.service.getTask()
    this.display()
  }
  task:any;
  mainform=new FormGroup({
    task_name:new FormControl('',[Validators.required]),
    task_time:new FormControl('',[Validators.required])
  })
  name:any;
  time:any;
  data:any=[];
  create(){
    let task={
      name:this.mainform.value.task_name,
      time:this.mainform.value.task_time
    }
    // this.task.push(task)
    this.service.postTask(task)
    this.display()
  }
  display(){
    this.data=this.service.getTask()
    console.log(this.data)
  }
  delete(task:any){
    this.service.deleteTask(task)
    this.display()
  }
}
