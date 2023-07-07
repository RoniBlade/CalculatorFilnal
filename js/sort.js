function save() {
    // Получение всех input-элементов на странице
    var inputs = document.getElementsByTagName('input');
  
    // Проход по всем элементам и сохранение значений в localStorage
    for (var i = 0; i < inputs.length; i++) {
      var input = inputs[i];
      var key = input.id; // Используем id элемента как ключ
      var value = input.value; // Получение значения из input-поля
  

        // console.log(key + " " + value)
      // Сохранение значения в localStorage
      localStorage.setItem(key, value);
    }
  }
  
  // Вызов функции save() при изменении значений input-полей
  document.addEventListener('DOMContentLoaded', function() {
    var inputs = document.getElementsByTagName('input');
    for (var i = 0; i < inputs.length; i++) {
      inputs[i].addEventListener('input', save);
    }
  });
  
  // Восстановление значений input-полей из localStorage при загрузке страницы
  document.addEventListener('DOMContentLoaded', function() {
    var inputs = document.getElementsByTagName('input');
    for (var i = 0; i < inputs.length; i++) {
      var input = inputs[i];
      var inputId = input.id;
  
      if (localStorage.getItem(inputId)) {
        var storedValue = localStorage.getItem(inputId);
        input.value = storedValue;
      }
    }
    reCalcSet();
  });