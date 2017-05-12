//TextQuestions.remove({});//while test

if (TextQuestions.find().count() === 0) {
  TextQuestions.insert({
    TextT: 'Tittle 1',
    TextST:'Subtitulo 1',
    TextQ: 'question 0',
    value: 0,
    group: 0    
  }); 
  TextQuestions.insert({
    TextT: 'Tittle 2',
    TextST:'Subtitulo 2',
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
    TextT: 'Tittle 3', 
    TextST:'Subtitulo 3',
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
    TextQuestions.insert({
    TextT: 'Tittle 4',  
    TextST:'Subtitulo 4',   
    TextQ: 'question 9',
    value: 1,
    group: 3
  });  
  TextQuestions.insert({
    TextQ: 'question 10',
    value: 1,
    group: 3   
  });  
  TextQuestions.insert({
    TextQ: 'question 11',
    value: 1,
    group: 3  
  }); 
  TextQuestions.insert({ 
    TextQ: 'question 12',
    value: 1,
    group: 3    
  });
    TextQuestions.insert({
    TextT: 'Tittle 5',
    TextST:'Subtitulo 5',    
    TextQ: 'question 13',
    value: 1,
    group: 4
  });  
  TextQuestions.insert({ 
    TextQ: 'question 14',
    value: 1,
    group: 4    
  });  
  TextQuestions.insert({
    TextQ: 'question 15',
    value: 1,
    group: 4   
  }); 
  TextQuestions.insert({
    TextQ: 'question 16',
    value: 1,
    group: 4   
  });
}
