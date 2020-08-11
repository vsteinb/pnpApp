import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

import './Home.css';

export default class Home extends React.Component {

  render() {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Goren PnP</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <textarea id="demon-text"
          placeholder="das ist ein bisschen text, wie 'lorem ipsum' eben auch.
          Schreib doch auch was!"></textarea>
        </IonContent>
      </IonPage>
    );
  };
}
