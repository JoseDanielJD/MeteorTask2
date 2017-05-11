//TextQuestions.remove({});//while test

if (TextQuestions.find().count() === 0) {
  TextQuestions.insert({
    TextQ: 'question 0',
    value: 0,
    group: 0    
  }); 
  TextQuestions.insert({
    TextQ: 'question 1',
    value: 1,
    group: 1
  });  
  TextQuestions.insert({
    TextQ: 'question 2',
    value: 1,
    group: 1
  });  
  TextQuestions.insert({
    TextQ: 'question 3',
    value: 1,
    group: 1
  }); 
  TextQuestions.insert({
    TextQ: 'question 4',
    value: 1,
    group: 1
  });  
  TextQuestions.insert({
    TextQ: 'question 5',
    value: 1,
    group: 2
  });  
  TextQuestions.insert({
    TextQ: 'question 6',
    value: 1,
    group: 2    
  });  
  TextQuestions.insert({
    TextQ: 'question 7',
    value: 1,
    group: 2   
  }); 
  TextQuestions.insert({
    TextQ: 'question 8',
    value: 1,
    group: 2    
  });
}
