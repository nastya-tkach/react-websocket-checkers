import { DragSource, DragPreviewImage } from 'react-dnd';

const cellSource = {
    beginDrag(props) {
        props.onHighlightTarget(props.cell.coordinate, props.data);
        return props.cell;
    }, 
    endDrag(props, monitor) {
        props.onHighlightTarget(props.cell.coordinate, props.data, true);
        if(!monitor.didDrop()) return;
    }
};
  
function collect(connect, monitor) {
    return {
      connectDragSource: connect.dragSource(),
      connectDragPreview: connect.dragPreview(),
      isDragging: monitor.isDragging()
    }
};

  
const DragCell = (props) => {
    const { isDragging, connectDragSource, connectDragPreview } = props;

    return connectDragSource(
        <div>
            <DragPreviewImage src={props.src} connect={connectDragPreview}/>
    	    <img className='field-img' src={props.src} alt={props.alt} />
        </div>
    )
}

export default DragSource('cell', cellSource, collect)(DragCell);