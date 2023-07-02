function showSubSection(id) {
    var subContent = document.getElementsByClassName('sub-content');
  
    for (var i = 0; i < subContent.length; i++) {
      subContent[i].classList.remove('active');
    }
  
    var buttons = document.getElementsByClassName('btn');
    for (var j = 0; j < buttons.length; j++) {
      if (buttons[j].id === id + 'Btn' && buttons[j].classList.contains('btn-active')) {
        buttons[j].classList.remove('btn-active');
        return; // Выходим из функции, если кнопка уже активна
      } else {
        buttons[j].classList.remove('btn-active');
      }
    }
    
  
    var content = document.getElementById(id);
    content.classList.add('active');
  
    var button = document.getElementById(id + 'Btn');
    button.classList.add('btn-active');
}
  