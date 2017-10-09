package com.arasu.taskapp.dao;


import org.springframework.data.mongodb.repository.MongoRepository;

import com.arasu.taskapp.domain.Task;
/**
 * @author Adalarasu T
 *
 */
public interface TaskRepository extends MongoRepository<Task, String> {
}
