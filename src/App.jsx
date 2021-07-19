import './App.css';
import io from 'socket.io-client';
import ContainerForState from './ContainerForState';
import { DndProvider } from 'react-dnd';
import {HTML5Backend} from 'react-dnd-html5-backend';

export const socket = io('http://localhost:3003');

export default function  App() {
  socket.on('connection');

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <h1>Checkers</h1>

        <ContainerForState />

        <span style={{height:'50px', width:'50px'}}>&#9898;</span>
        <span style={{height:'50px', width:'50px'}}>&#9899;</span>

        
      </div>
    </DndProvider>
  );
}
