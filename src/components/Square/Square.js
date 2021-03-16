import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import { ItemTypes } from '../../constants/ItemTypes';
import colors from '../../constants/colors';
require('./square.scss');

function Square(props) {

  const { color } = props;

  const[{isOver}, drop] = useDrop({
    accept: ItemTypes.SHIP,
    collect: monitor => ({
      isOver: !!monitor.isOver()
    })
  })

  return (
    <div className="square" style={{backgroundColor: isOver ? colors.mediumblue : color,}} ref={drop}>

    </div>
  )
}

export default Square;