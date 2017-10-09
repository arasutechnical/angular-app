import {Injectable} from '@angular/core';
import {Task} from './task';
import {Http, Response,RequestOptions,Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class TaskService {
	constructor(private __http : Http){}	
	private taskurl ='http://localhost:8080/task/';
	
	//Retrieve Tasks
	getTasksR():Observable<Task[]>{
    return this.__http.get(this.taskurl)
    .map((res:Response)=><Task[]>res.json())
    }

	//Create TAsk
	addTaskR(task:Task):Observable<Task>{
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); 
		return this.__http.post(this.taskurl, task, options)
		.map((res=><Task>res.json())
		)}
	
	//Modify Task
	updateTaskR(task:Task):Observable<Task>{
		//let bodyString = JSON.stringify(task); // Stringify payload
		let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
		let options = new RequestOptions({ headers: headers }); 
		return this.__http.put(this.taskurl,task,options)
		.map((res=><Task>res.json()))
		} 
	
	//Remove a Task
	deleteTaskR(task:Task):Observable<Response>{		
		return this.__http.delete(`${this.taskurl}${task._id}`)
		.map((res:Response) => res.json())	
	}
}