/* eslint-disable @typescript-eslint/no-redeclare */
import {
  IonCard,
  IonCol,
  IonContent,
  IonHeader,
  IonIcon,
  IonImg,
  IonLabel,
  IonPage,
  IonRow,
} from "@ionic/react";
import React from "react";
import Icons from "./icons";
import Video from "./video";
import "./weather.css";
const WeatherIcons: any = {
  "01d": "assets/images/sunny.svg",
  "01n": "assets/images/night.svg",
  "02d": "assets/images/day.svg",
  "02n": "assets/images/cloudy-night.svg",
  "03d": "assets/images/cloudy.svg",
  "03n": "assets/images/cloudy.svg",
  "04d": "assets/images/perfect-day.svg",
  "04n": "assets/images/cloudy-night.svg",
  "09d": "assets/images/rain.svg",
  "09n": "assets/images/rain-night.svg",
  "10d": "assets/images/rain.svg",
  "10n": "assets/images/rain-night.svg",
  "11d": "assets/images/storm.svg",
  "11n": "assets/images/storm.svg",
};

const Weather: React.FC<{ weather: any }> = (props) => {
  const { weather } = props;
  const isDay = weather.weather[0].icon.includes("d");
  const getTime = (timeStamp: any) => {
    return `${new Date(timeStamp * 1000).getHours()} : ${new Date(
      timeStamp * 1000
    ).getMinutes()}`;
  };
  return (
    <IonPage>
      <IonHeader></IonHeader>
      <IonContent className="body1">
        <Video />
        <IonCard className="card1">
          <IonLabel className="class11">React Weather app</IonLabel>
          <IonRow className="row1">
            <IonCol className="col11">
              <IonLabel className="class21">
                {" "}
                <h2>{`${Math.floor(weather.main.temp - 273)}°C`}</h2>{" "}
                {`${weather.weather[0].description}`}
              </IonLabel>
            </IonCol>
            <IonCol className="col21">
              <div className="img1">
                <IonImg
                  className="image1"
                  src={WeatherIcons[weather.weather[0].icon]}
                ></IonImg>
              </div>
            </IonCol>
          </IonRow>

          <strong className="city1">{`${weather?.name}, ${weather.sys.country}`}</strong>
          {/* <IonGrid className="grid"> */}
          <IonRow className="grid1">
            <Icons
              name={isDay ? "sunset" : "sunrise"}
              value={`${getTime(weather?.sys[isDay ? "sunset" : "sunrise"])}`}
            />

            <Icons name={"humidity"} value={`${weather.main.humidity}%`} />
          </IonRow>
          <IonRow className="grid11">
            <Icons name={"wind"} value={`${weather.wind.speed}m/s`} />

            <Icons name={"pressure"} value={`${weather.main.pressure} hPa`} />
          </IonRow>
          {/* </IonGrid> */}

          <IonIcon className="icon1" size="small"></IonIcon>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};
export default Weather;
