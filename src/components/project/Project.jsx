import React from 'react';
import './project.css';
import WorkBox from '../workBox/WorkBox';

const Project = (props) => {
  return (
    <div class='project'>
      <h2 class='heading'>PROJECT: {props.projectTitle}</h2>
      <h3 class='sub-heading'>Project description: {props.description}</h3>
      <h3 class='sub-heading'>Part: {props.part}</h3>
      <h3 class='sub-heading'>Title: {props.title}</h3>
      <div className='snippet-grid sub-heading'>
        <h3>Snippet: {props.snippet}</h3>
        <h3>Snippet description: {props.snippetDescription}</h3>
      </div>
      <div className='workBox-grid'>
        <WorkBox />
        <WorkBox />
        <WorkBox />
      </div>
    </div>
  );
};

export default Project;
