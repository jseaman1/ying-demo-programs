import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonInput, IonLabel, IonButton, IonCol, IonRow} from '@ionic/react';
import InputContainer from '../components/InputContainer';
import React, { useState } from 'react';
import styled from 'styled-components'
import { Controller, useForm } from 'react-hook-form';
import { State } from 'ionicons/dist/types/stencil-public-runtime';

import Input, { InputProps } from "../components/Input";


const Tab1: React.FC = () => {


  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([] as string[]);

  const MyPage = styled(IonPage)`
    .header {
      background-color: darkorchid;
    }
    .title {
      color: white;
      font-size: 24px;
      text-align: center;
    }
    .FieldAndButton {
      width: 80%;
      
    }

  `;

  const EntryField = styled(IonInput)`
    width: 80%;
    border: 1px solid black;
    background-color: white;
  
  `;

  function HandleNewTaskInput(newInput: string){
    setInput(newInput);
    console.log(input);
  } 

  function HandleNewTask(){
    setTasks(tasks.concat(input));
    console.log(tasks);
  }


  return (
    <MyPage>
      <IonHeader >
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
    
      <IonContent fullscreen>
        <div className="header">
          <IonCol class="ion-text-center" className="title" >
            My To Do List
          </IonCol> 

          <IonCol>
            <IonRow className="FieldAndButton">
                <EntryField type="text" value={input} onInput={(e: any) => HandleNewTaskInput(input)}></EntryField>
                <IonButton onClick={() => HandleNewTask()}>Add To List</IonButton>
            </IonRow>
          </IonCol>
        </div>

        <div className="body">
          <IonCol>
            
          </IonCol>
        </div>

          
          
        
      </IonContent>
    </MyPage>
  );
};

export default Tab1;

// onIonChange={e => setText(e.detail.value!)}
        {/* <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader> */}