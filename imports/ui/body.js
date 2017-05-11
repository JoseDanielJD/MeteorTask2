import { Template } from 'meteor/templating';
import './body.html';

 
Template.body.helpers({
  Titles: [
    { TextT: 'How safe is my Drone Operation ?' },
  ],
  Questions: [
    { TextQ: 'Powered by IDRONECT - The Drone Management Platform that makes it easy to fly safe and legal' },
  ],
});