import React, { Component } from 'react';

export default class ProjectList extends Component {
	state = {
		projects: []
	};

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<h2>Projects List</h2>
				{this.state.projects.map(project => (
					<li key={project.id}>{project.name}</li>
				))}
			</div>
		);
	}
}
