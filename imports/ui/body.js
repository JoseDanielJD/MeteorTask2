import { Template } from 'meteor/templating';
import './navigate.js'; 
import './body.html';

ActualGroupAux = 0;
ActualGroup = new ReactiveVar(0); //make a reactive var, to refresh the helper Every time it change
Template.body.helpers({
  Titles: [
    { 
      TextT: 'How safe is my Drone Operation ?' 
    },
  ],
  Questions(){
      console.log("actualgroup: ",ActualGroup);
      CambioPreguntas=false;
      return TextQuestions.find({group: ActualGroup.get()}); //make a reactive var, to refresh the helper Every time it change
  }
});