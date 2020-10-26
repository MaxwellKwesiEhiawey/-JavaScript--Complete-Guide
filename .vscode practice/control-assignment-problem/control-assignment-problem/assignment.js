const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)
if (randomNumber >= 0.7) {
  alert( 'Warning! number greater than or equal to 0.7 ');}
  else { alert('Alright! number not too great.'); 
  }

  const arrayNumbs = [2, 4, 6, 8, 10]
  for (let i = 0; i < arrayNumbs.length; i ++) {
    console.log(arrayNumbs[i]);
  }

  for (const arrayNum of arrayNumbs) {
    console.log(arrayNum);
  }

  let counts = 0;
  while (counts < arrayNumbs.length) {
    console.log (numbers[counts]); counts ++;
  }

  for (let i = arrayNumbs.length - 1;
    i >= 0; i--) { console.log(arrayNumbs[i]);}

    const randomNumber2 = math.random();

    console.log(randomNumber2);
if( 
(randomNumber > 0.7 && randomNumber2 > 0.7) || randomNumber <= 0.2 || randomNumber2 <= 0.2 ) { 
  alert('Greater than 0.7 or smaller than 0.2');
}