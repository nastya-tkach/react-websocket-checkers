import { connect } from 'react-redux'; 

import { Field } from './components/Field';
import { handleDrop, highlightTargets } from './store/actions';

function mapStateToProps(state){
    return {
      data: state.data,
      rules: state.rules
    }
  };
  
function mapDispatchToProps(dispatch){
    return {
      onHandleDrop: drop => dispatch(handleDrop(drop)),
      onHighlightTarget: (coordinate, data, isDeleteHighlight) => dispatch(highlightTargets(coordinate, data, isDeleteHighlight))
    }
};

const ContainerForState = connect(mapStateToProps, mapDispatchToProps)(Field);

export default ContainerForState;