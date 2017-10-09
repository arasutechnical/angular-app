package com.arasu.taskapp.service;

import java.util.List;

import com.arasu.taskapp.domain.Task;
/**
 * @author Adalarasu T
 *
 */
public interface TaskService {

	public List<Task> getAllTask();
	public Task saveTask(Task task);
	public Task modifyTask(Task task);
	public void removeTask(String id);
}
