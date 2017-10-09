package com.arasu.taskapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.arasu.taskapp.domain.Task;
import com.arasu.taskapp.service.TaskService;

/**
 * @author Adalarasu T
 *
 */
@RestController
@RequestMapping("/task")
public class TaskController {

	@Autowired
	private TaskService taskService;
	
	/**
	 * @return List<Task> All tasks
	 */
	@GetMapping
	public List<Task> getAllTask(){
		return taskService.getAllTask();
	}
	
	/**
	 * @param task The Task to be saved
	 * @return the saved Task
	 */
	@PostMapping
	public Task saveTask(@RequestBody Task task){
		return taskService.saveTask(task);
	}
	
	/**
	 * @param task The Task to be modified
	 * @return the modified Task
	 */
	@PutMapping
	public Task modifyTask(@RequestBody Task task){
		return taskService.modifyTask(task);
	}
	
	/**
	 * @param id ID of the Task to be removed
	 */
	@DeleteMapping("/{id}")
	public void removeTask(@PathVariable String id){
		taskService.removeTask(id);
	}
}
