import React from 'react';
import './project.css';
import WorkBox from '../workBox/WorkBox';

const Project = (props) => {
  return (
    <div className='project'>
      <h2 className='heading'>PROJECT: {props.projectTitle}</h2>
      <h3 className='sub-heading'>Project description: {props.description}</h3>
      <h3 className='sub-heading'>Part: {props.part}</h3>
      <h3 className='sub-heading'>Title: {props.title}</h3>
      <div className='snippet-grid sub-heading'>
        <h3>Snippet: {props.snippet}</h3>
        <h3>Snippet description: {props.snippetDescription}</h3>
      </div>
      <div className='workBox-grid'>
        {/* <div className='screen1 screen'></div>
        <div className='screen2 screen'></div>
        <div className='screen3 screen'></div> */}
        <WorkBox boxTitle='Code' />
        <WorkBox boxTitle='Bubbles' />
        <WorkBox boxTitle='Notes' />
      </div>
    </div>
  );
};

export default Project;
