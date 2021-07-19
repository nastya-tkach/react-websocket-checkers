import React from 'react';
import { DropTarget } from 'react-dnd';

import './Cell.css';
import DragCell from './DragCell';
import WhiteChecker from '../images/w.png';
import WhiteQueenChecker from '../images/wq.png'
import BlackChecker from '../images/b.png';
import BlackQueenChecker from '../images/bq.png';

function collect(connect) {
  return {
    connectDropTarget: connect.dropTarget()
  }
};

const fieldTarget = {
  drop(props, monitor) {
    props.data.field.moves.forEach(elem => {
      if((elem[0] === monitor.getItem().coordinate) && (elem[1].indexOf(props.cell.coordinate) !== -1)) {
        const move = [monitor.getItem().coordinate, props.cell.coordinate];
        const gameId = props.data.field.gameId;

        props.onHandleDrop({
          move,
          gameId
        });
      }
    })
  }
};


function Cell(props) {
  const { connectDropTarget } = props;
      
    return connectDropTarget(
        <li className={`field-li ${props.data.user === 2 ? 'rotate180' : ''}`}>
            <div className={`field-li-in
                ${typeof props.cell === 'string' ? ' white-cell' : ' black-cell'}
                ${props.cell.highlight ? 'cell-highlight' : ''}`
            }
            >
                {props.cell.checker === 1 ? !props.cell.queen ? <DragCell src={WhiteChecker} cell={props.cell} data={props.data} onHighlightTarget={props.onHighlightTarget} /> : <DragCell src={WhiteQueenChecker} cell={props.cell} data={props.data} onHighlightTarget={props.onHighlightTarget} />  : '' }
                {props.cell.checker === 2 ? !props.cell.queen ? <DragCell src={BlackChecker} cell={props.cell} data={props.data} onHighlightTarget={props.onHighlightTarget} /> : <DragCell src={BlackQueenChecker} cell={props.cell} data={props.data} onHighlightTarget={props.onHighlightTarget} /> : '' }
            </div>
        </li>
    )
}

export default DropTarget('cell', fieldTarget, collect)(Cell);