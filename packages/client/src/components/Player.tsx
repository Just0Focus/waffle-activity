import * as React from 'react';
import {TPlayerOptions} from '../../../server/src/entities/Player';
import './Player.css';






export function Player({avatarUri, name, talking, x, y}: TPlayerOptions) {

  console.log('X:', x, 'Y:', y)

  x = Number(x.toFixed(1))
  y = Number(y.toFixed(1))

  console.log('newX:', x, 'newY:', y)


  return (
      <div className="player__container">
        <div className={`player__avatar ${talking ? 'player__avatar__talking' : ''}`}>
          <img className="player__avatar__img" src={avatarUri} width="100%" height="100%" />
        </div>
        <div>
          {x}, {y}, {name}
        </div>
      </div>
  );
}
