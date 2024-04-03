import * as React from 'react';
import {Player} from './Player';
import {Sprite} from './Sprite';
import {usePlayers} from '../hooks/usePlayers';
import './VoiceChannelActivity.css';
import {useAuthenticatedContext} from '../hooks/useAuthenticatedContext';
import backPNG from "../images/mist.png";

import {IState} from '../../../server/src/entities/State';

export function VoiceChannelActivity({nodeColor}: IState) {
  const players = usePlayers();
  const {room} = useAuthenticatedContext();

  const move = 1;
  const moveNeg = 0 - move;

  React.useEffect(() => {
    function handleKeyDown(ev: KeyboardEvent) {
      switch (ev.key) {
        case 'ArrowUp':
        case 'KeyW':
          room.send('move', {x: 0, y: moveNeg});
          break;
        case 'ArrowDown':
        case 'KeyS':
          room.send('move', {x: 0, y: move});
          break;
        case 'ArrowLeft':
        case 'KeyA':
          room.send('move', {x: moveNeg, y: 0});
          break;
        case 'ArrowRight':
        case 'KeyD':
          room.send('move', {x: move, y: 0});
          break;
        default:
          break;
      }
    }

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [room]);


  React.useEffect(() => {

    function handleNodeClick(ev: MouseEvent) {
      const selElement = ev.target as HTMLElement;
      // Check `classNmae`
      const selClassName = selElement.className;
      if (selClassName == 'node') {
        room.send('nodeClick', {nodeColor})
      }
    }
    
    document.addEventListener('click', handleNodeClick);
    return () => {
      document.removeEventListener('click', handleNodeClick);
    };
  }, [room]);




  return (
    <div>
      <div className="voice__channel__container">
        {players.map((p) => (
          <Player key={p.userId} {...p} />
        ))}
      </div>

      <img className="map__container" src={backPNG} width="100%" alt="Waffle" />

      <div className="node" style={{ backgroundColor: `${nodeColor}` }}></div>

      <div className="sprites">
        {players.map((p) => (
          <Sprite key={p.userId} {...p} />
        ))}
      </div>
        
    </div>

  );
}
