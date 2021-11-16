import React from 'react';
import MiniScreen from '../miniScreen/MiniScreen';
import './workBox.css';

const WorkBox = (props) => {
  return (
    <div>
      <div className='work-box'>
        <div className='box-title'>{props.title}</div>
        <button class='button'>Hide</button>
        <MiniScreen />
      </div>
    </div>
  );
};

export default WorkBox;
