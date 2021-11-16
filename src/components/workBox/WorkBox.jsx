import React from 'react';
import MiniScreen from '../miniScreen/MiniScreen';
import './workBox.css';

const WorkBox = (props) => {
  return (
    <div>
      <div className='work-box'>
        <div className='box-title'>{props.title}</div>
        <button className='button'>Hide</button>
        <h3 className='box-title'>{props.boxTitle}</h3>
        <MiniScreen style={{ backgroundColor: 'red' }} />
      </div>
    </div>
  );
};

export default WorkBox;
