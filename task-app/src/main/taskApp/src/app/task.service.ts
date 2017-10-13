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
	private taskurl ='http://localhost:8089/api/tasks/';

	/* getTasksR():Observable<Task[]>{
		return this.__http.get(this.taskurl)
		 .map((res=><Task[]> res.json())
		);
		} */
		
		//
		
		getTasksR():Observable<Task[]>{
    return this.__http.get(this.taskurl)
    .map((res:Response)=><Task[]>res.json())
    .do(data=>console.log(data))
   
    }
		//

	addTaskR(task:Task):Observable<string>{
		//let bodyString = JSON.stringify(task); // Stringify payload
        let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options       = new RequestOptions({ headers: headers }); 
		return this.__http.post(this.taskurl,task,options)
		.map((res=><string>res.json())
		
	)
		
			} 
	updateTaskR(task:Task):Observable<Task>{
		//let bodyString = JSON.stringify(task); // Stringify payload
		let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
		let options       = new RequestOptions({ headers: headers }); 
		let urlUpdate = `${this.taskurl}${task._id}`;		
		return this.__http.put(urlUpdate,task,options)
		.map((res=><Task>res.json()))
		
			} 
	
	deleteTaskR(task:Task):Observable<Task>{		
		return this.__http.delete(`${this.taskurl}${task._id}`)
		.map((res:Response) => res.json())	
		
		
	}
	
	
}