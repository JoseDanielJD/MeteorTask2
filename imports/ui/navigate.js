import { Template } from 'meteor/templating';
import './navigate.html';

Template.navigate.events({
  'click .next'(event) {
    console.log("in: "+ActualGroup.get()+" Go next");
    ActualGroupAux++;
    ActualGroup.set(ActualGroupAux);//select the group of question to render
  },
  'click .prev'(event) {
    console.log("in: "+ActualGroup.get()+" Go prev");
    ActualGroupAux--;
    ActualGroup.set(ActualGroupAux);//select the group of question to render
  },
});

