import { Template } from 'meteor/templating';
import './navigate.html';

Template.navigate.events({
  'click .next'(event) {
    console.log("in: "+ActualGroup+" Go next");
    ActualGroup++;
  },
  'click .prev'(event) {
    console.log("in: "+ActualGroup+" Go prev");
    ActualGroup--;
  },
});