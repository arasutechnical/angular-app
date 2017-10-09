package com.arasu.taskapp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.arasu.taskapp.dao.TaskRepository;
import com.arasu.taskapp.domain.Task;
/**
 * @author Adalarasu T
 *
 */
@Service
public class TaskServiceImpl implements TaskService{

	@Autowired
	private TaskRepository taskRepository;
	
	@Override
	public List<Task> getAllTask() {
		return taskRepository.findAll();
	}

	@Override
	public Task saveTask(Task task) {
		return taskRepository.save(task);
	}

	@Override
	public Task modifyTask(Task task) {
		return taskRepository.save(task);
	}

	@Override
	public void removeTask(String id) {
		taskRepository.delete(id);
	}

}
