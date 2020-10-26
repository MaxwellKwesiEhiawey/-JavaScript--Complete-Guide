const sayHello = (name) => console.log('Hi ' + name);
const sayHello1 = (name, phrase) => console.log(phrase + ' ' + name);
const sayHello2 = () => console.log('Hello JavaScript !');
const sayHello3 = name => 'Hi' + name;

sayHello('Kwesi');
sayHello1('Kwesi','Hi');
sayHello2();
console.log(sayHello3('Kwesi'));

const sayHello4 = (name, phrase = 'Hey') => console.log(phrase + ' ' + name);

sayHello4('Kwesi');
sayHello4('Max', 'Hey');

function justTrying(by,...text) {
  let withoutTexts = false;
  for (const texts of text) { 
    if (!texts)  {
      withoutTexts = true;
  break ;
}
}

if (!withoutTexts) {
    by();
}
}   
    justTrying(
      () => { 
        console.log( 'All not Empty!');
  },

  'Hello',
  '12',
  'adsfa',
  'Not Empty');
