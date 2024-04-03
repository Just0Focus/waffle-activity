import * as React from 'react';
import {TPlayerOptions} from '../../../server/src/entities/Player';
import './Sprite.css';

export function Sprite({x, y, color, isColliding}: TPlayerOptions) {
  return (
    <div className="sprite__container" style={{ left: `${x}px`, top: `${y}px`}}>
      <div className="sprite__button" style={{ backgroundColor: `${color}` }}></div>
    </div>
  );
}
