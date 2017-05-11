import { Template } from 'meteor/templating';
import './navigate.js'; 
import './body.html';

ActualGroup = 2;

Template.body.helpers({
  Titles: [
    { 
      TextT: 'How safe is my Drone Operation ?' 
    },
  ],
  Questions(){
    console.log("actualgroup: ",ActualGroup);
    return TextQuestions.find({group: ActualGroup});
  }
});

