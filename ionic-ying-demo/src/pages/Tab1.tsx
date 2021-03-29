import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import InputField from '../components/InputField';
import List from '../components/List';
import ListItem from '../components/ListItem';
import './Tab1.css';
import React, { useState, Component } from 'react';

class Tab1 extends Component {
  getInitialState: any
  state = {
    list: [],
    pendingItem: ""
  };

  lastItemId = 0;

  newItemId = () => {
    const id = this.lastItemId;
    this.lastItemId += 1;
    return id;
  };

  // Flips isEditing bool
  toggleIsEditingAt = (id: string) => {
    console.log("isEditingAt", id);
    this.setState({
      list: this.state.list.map(item => {
        if (id === item.id) {
          return {
            ...item,
            isEditing: !item["isEditing"]
          };
        }
        return item;
      })
    });
  };

  removeItemAt = (id: any) => {
    this.setState({ list: this.state.list.filter(item => id !== item.id) });
  };

  handleItemInput = e => this.setState({ pendingItem: e.target.value });

  // handle editing items
  setNameAt = (name, id) => {
    this.setState({
      list: this.state.list.map(item => {
        if (id === item.id) {
          return {
            ...item,
            name
          };
        }
        return item;
      })
    });
  };

  newItemSubmitHandler = e => {
    e.preventDefault();
    const id = this.newItemId();
    this.setState({
      list: [
        {
          name: this.state.pendingItem,
          isEditing: false,
          id
        },
        ...this.state.list
      ],
      pendingItem: ""
    });
  };

  render() {
    return (
      <div >
        <IonPage>
          <IonHeader>
            <IonToolbar>
              <IonTitle>Tab 1</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent fullscreen>
            <IonHeader collapse="condense">
              <IonToolbar>
                <IonTitle size="large">Tab 1</IonTitle>
              </IonToolbar>
            </IonHeader>
            <InputField
            newItemSubmitHandler={this.newItemSubmitHandler}
            handleItemInput={this.handleItemInput}
            pendingItem={this.state.pendingItem}
          />
          </IonContent>
        </IonPage>
      </div>
    );
  }
}
export default Tab1;


// function newItemSubmitHandler(e: { preventDefault: () => void; }){
//   e.preventDefault();
//   const id = this.newItemId();
//   setState({
//     list: [
//       {
//         name: state.pendingItem,
//         isEditing: false,
//         id
//       },
//       ...this.state.list
//     ],
//     pendingItem: ""
//   });
// };

// const Tab1: React.FC = () => {
  // return (
  //   <div >
  //     <IonPage>
  //       <IonHeader>
  //         <IonToolbar>
  //           <IonTitle>Tab 1</IonTitle>
  //         </IonToolbar>
  //       </IonHeader>
  //       <IonContent fullscreen>
  //         <IonHeader collapse="condense">
  //           <IonToolbar>
  //             <IonTitle size="large">Tab 1</IonTitle>
  //           </IonToolbar>
  //         </IonHeader>
  //         <InputForm
  //         newItemSubmitHandler={this.newItemSubmitHandler}
  //         handleItemInput={this.handleItemInput}
  //         pendingItem={this.state.pendingItem}
  //       />
  //       </IonContent>
  //     </IonPage>
  //   </div>
  // );
// };


