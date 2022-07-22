import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonIcon,
  IonImg,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import Video from "../component/video";
// import ExploreContainer from '../components/ExploreContainer';
import "./Home.css";

const Home: React.FC<{ fetchWeather: any; updateCity: any }> = (props) => {
  return (
    <IonPage>
      <Video />
      <IonHeader></IonHeader>
      <IonContent  className="body2">
        <IonCard class="card2">
          <div className="img2">
            <IonLabel className="class12">React Weather app</IonLabel>
            <IonImg className="image2" src="assets/images/storm.svg"></IonImg>
          </div>

          <IonCardTitle class="cardtitle2">
            Find weather of your City
          </IonCardTitle>

          <IonInput
            className="input2"
            type="text"
            onIonChange={(e) => props.updateCity(e.detail.value)}
            placeholder="Enter Your city"
          >
            <IonIcon className="icon2" size="small"></IonIcon>
          </IonInput>

          <IonButton
            type="submit"
            color="light"
            id="button"
            onClick={props.fetchWeather}
            className="loginbtn2"
          >
            Search
          </IonButton>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Home;
