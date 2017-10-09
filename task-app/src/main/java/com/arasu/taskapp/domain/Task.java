package com.arasu.taskapp.domain;

import org.springframework.data.annotation.Id;

/**
 * @author Adalarasu T
 *
 */
public class Task {

    @Id
    public String _id;
    public String taskDesc;
    public String status;
    
    public Task() {}

    public Task(String taskDesc, String status) {
        this.taskDesc = taskDesc;
        this.status = status;
    }

	/**
	 * @return the _id
	 */
	public String get_id() {
		return _id;
	}

	/**
	 * @param _id the _id to set
	 */
	public void set_id(String _id) {
		this._id = _id;
	}

	/**
	 * @return the taskDesc
	 */
	public String getTaskDesc() {
		return taskDesc;
	}

	/**
	 * @param taskDesc the taskDesc to set
	 */
	public void setTaskDesc(String taskDesc) {
		this.taskDesc = taskDesc;
	}

	/**
	 * @return the status
	 */
	public String getStatus() {
		return status;
	}

	/**
	 * @param status the status to set
	 */
	public void setStatus(String status) {
		this.status = status;
	}

}

