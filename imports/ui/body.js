import { Template } from 'meteor/templating';
import './navigate.js'; 
import './body.html';

ActualGroupAux = 0;
ActualGroup = new ReactiveVar(0); //make a reactive var, to refresh the helper Every time it change
Accum = 0;
preValue = 0;

Template.body.helpers({
  Questions(){
      console.log("actual group: ",ActualGroup.get());
      CambioPreguntas=false;
      return TextQuestions.find({group: ActualGroup.get()}); //make a reactive var, to refresh the helper Every time it change
  }
});

Template.body.events({
  'submit .new-questions'(event, template) {
    event.preventDefault();
    var element = template.find('input:radio[name=singleQuestion]:checked');
    preValue = parseInt($(element).val());
    Accum = Accum + preValue; //get value of radioButton
    ActualGroupAux++;
    ActualGroup.set(ActualGroupAux);//select the group of question to render
    console.log("Next Accumulate: ",Accum);
  },  
  
  'click .pre-questions'(event) {
    Accum = Accum - preValue; //remove preValue of accumulate
    ActualGroupAux--;
    ActualGroup.set(ActualGroupAux);//select the group of question to render
    console.log("Previus Accumulate: ",Accum);
  }
});