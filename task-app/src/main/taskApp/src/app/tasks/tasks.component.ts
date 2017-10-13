import { Component, OnInit, DoCheck } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService } from '../task.service';
import { Task } from '../task';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import {findIndex,clone} from 'lodash';


@Component({
  selector:'emp-comp',
    moduleId: module.id,
    templateUrl: 'tasks.component.html'
})

export class TaskComponent implements OnInit{

	taskForm : boolean = false;
	editedTaskForm : boolean = false;
	isNewForm : boolean;
	isModified : boolean =false;
	newTask: any ={};
	editedTask: any ={};
	statusTask: any = {};
	task: Task;
	tasks: Task[]=[];	
	taskStatus: boolean[]=[];
	taskStatusAll: boolean=false;
	completedTasks: Task[];	
	allTasks: Task[];	
	pendingTasks: Task[];	
	searchTaskForm: boolean = false;
	searchDetails: any ={};
	errorMessage:string;
	
	constructor(private _taskService : TaskService){}
	
	ngOnInit(){
		this.getTasks();
		//this.newTask._id="";
		//this.taksStatus[0]=false;
		//this.fillStatus();
		var i:number;
	for(i=0;i<3;i++){
		this.taskStatus[i]=  this.tasks[i].status==="completed"?  true:false;
		
	}
	}
	
		
getTasks(){	
	
	this._taskService.getTasksR()
					.subscribe(
					tasks=>this.tasks=tasks ,
					error=>this.errorMessage=<any>error,
()=>this.allTasks=this.tasks					
								)
								
								
	
	console.log(this.tasks);
}

showEditTaskForm(task:Task){
	if(!task){		
		this.taskForm= false;
		return;		
	}
	
	this.editedTaskForm = true;	
	this.taskForm= false;
	this.editedTask=clone(task);
	
}

showAddTaskForm(){
	if(this.tasks.length){
		this.newTask = {};
		
	}
	this.taskForm = true;
	this.isNewForm = true;
	this.editedTaskForm = false;
	
}

saveTask(task:Task){
	if(this.isNewForm){
		//add a new Task	
this._taskService.addTaskR(task).subscribe(res =>{(task._id=res),
		//this._taskService.addTaskR(task).subscribe(res =>{(console.log(res))});
		this.tasks.push(task);
		//console.log("=====>>>>"+this.task._id);
		//this.showAllTask();
		});
	}
	//this.getTasks();
	//this.showAllTask();
	this.taskForm=false
}

updateTask(task:Task){
	let taskeditindex=findIndex(this.tasks,(e:Task)=>{
		console.log("while edit the _id####"+task._id);
		return e._id===task._id
	});
	console.log("while edit the _id####"+task._id);
	this.tasks[taskeditindex]=task;
	this._taskService.updateTaskR(task).subscribe(res =>{(this.task=res)});
this.editedTaskForm=false;
this.editedTask={};

}
cancelEdit(){
	this.editedTask={};
	this.editedTaskForm=false;
}
cancelAdd(){
	this.newTask={};
	this.taskForm=false;
}
removeTask(task:Task){
	this.cancelAdd();
	this.cancelEdit();
	this._taskService.deleteTaskR(task).subscribe(res =>{(this.task=res)});
	this.tasks.splice(this.tasks.indexOf(task),1);
	
}
showCompletedTask(){
	this.tasks=this.tasks.filter( tas=> {	return (tas.status =='completed');});
}
showPendingTask(){
	this.tasks=this.tasks.filter( tas=> {	return (tas.status =='pending');});
}

showAllTask(){
	this.getTasks();	
	this.taskStatusAll=false;
}
changeStatus(statusIdx:number){
	this.tasks[statusIdx].status=this.taskStatus[statusIdx]?"completed":"pending";
	
}

changeAllStatus(){
	this.taskStatusAll?this.showCompletedTask():this.showPendingTask()
	
	
}

}
