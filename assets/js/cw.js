// <li>Створіть функцію, яка заповнюватиме масив 10-ма іксами за допомогою циклу.</li> 

function arr (data){
for(let i = 0; i < data.length; i++){
  data[i] = 'x';
}
}

const data = new Array(10);

arr(data);


// думки над ДЗ 3 завдання 15
// const infoArr = [];
// const studentInformation = function (infoArr){
// let studentName  = prompt('Введіть ваше імя:');
// let studentSurname  = prompt('Введіть ваше призвище:');
// let itLang  = prompt('Введіть мову програмування:');
// return infoArr.push(studentName,studentSurname,itLang);
// }
// studentInformation(infoArr);
// document.write(`
// <h2>Student Information</h2>
// <div><h3>Імʼя: ${infoArr[0]}</h3></div>
// <div><h3>Прізвище: ${infoArr[1]}</h3></div>
// <div><h3>Мова програмування: ${infoArr[2]}</h3></div>
// `);
// document.write('<button type="button" onclick=(studentInformation())>Додати студента</button>');
