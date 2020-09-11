import React, { Component } from 'react';

export default class TasksList extends Component {
	state = {
		tasks: []
	};

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<h2>Tasks List</h2>
				{this.state.tasks.map(task => <li key={task.id}>{task.subject}</li>)}
			</div>
		);
	}
}
