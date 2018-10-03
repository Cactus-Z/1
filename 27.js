console.log('test');
var userName = prompt ( 'Kto prishel? ', "" ); 
if (userName == '') {
  var pass = prompt ('Пароль?', '');
  
  if (pass == 'Темная стрела'){
    alert ('Добро пожаловать!');
  } else if (pass == null){
    alert ( 'Вход отменён' );
  } else {
    alert ('Пароль неверен');
  }
} else if (userName == null) {
  alert ('Вход отменён');
} else {
  alert ('Я вас не знаю');
}	