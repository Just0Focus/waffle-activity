import './LoadingScreen.css';
import backPNG from "../images/mist.png";

export function LoadingScreen() {
  return (
    <div>
      <div className="loading__container">LOADING</div>
      <img className="map__container" src={backPNG} width="100%" alt="Waffle" />
    </div>
  );
}
