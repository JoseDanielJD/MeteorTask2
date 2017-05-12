import { Template } from 'meteor/templating';
import './navigate.html';

Template.navigate.events({
  'click .next'(event) {
    ActualGroupAux++;
    ActualGroup.set(ActualGroupAux);//select the group of question to render
  },
  'click .prev'(event) {
    Accum = Accum - preValue; //remove preValue of accumulate
    ActualGroupAux--;
    ActualGroup.set(ActualGroupAux);//select the group of question to render
    console.log("Previus Accumulate: ",Accum);  
  },
});

