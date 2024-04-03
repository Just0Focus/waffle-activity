import * as React from 'react';
import {Player} from './Player';
import {usePlayers} from '../hooks/usePlayers';
import './VoiceChannelActivity.css';
import {useAuthenticatedContext} from '../hooks/useAuthenticatedContext';


export function VoiceChannelActivity() {
  const players = usePlayers();
  const {room} = useAuthenticatedContext();

  const move = 0.1;
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


  return (
    <div className="voice__channel__container">
      {players.map((p) => (
        <Player key={p.userId} {...p} />
      ))}
    </div>

  );
}
