import { IonCol, IonImg, IonRow } from "@ionic/react";
import React from "react";
import "./icons.css";
const icons1:any = {
  sunset:"assets/images/sunnyicon.jpg",
  sunrise:"assets/images/sunnyicon.jpg",
  humidity:"assets/images/humidity.webp",
  wind:"assets/images/windicon.png",
  pressure:"assets/images/pressure.png",

}

const Icons: React.FC<{name:string, value:string}> = (props) => {
  const{ name, value}=props;
  return (
    <IonCol className="col">
      <IonImg className="img" src={icons1[name]}></IonImg>

      <div className="div">
        <IonRow >{value}</IonRow>
        <IonRow>{name}</IonRow>
      </div>
    </IonCol>
  );
};
export default Icons;
