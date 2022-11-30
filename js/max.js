let itemText = `
<h1>Додаткову взаємодія з користувачем завершено.</h1>
<br>
<button type="button" onclick="import('./js/max.js')">Продовжити</button>
<button type="button" onclick="closeTab()">Вихід</button>
`;

document.body.innerHTML = itemText;

const userChoice = prompt("Введіть радіус кола у сантиметрах", 0);
alert(
    "Площа кола дорівнює " +
    (Math.pow(userChoice, 2) * Math.PI).toFixed(2) +
    " кв. см!"
);

let secondUserChoice = prompt(
    "Введіть відстань від вашого міста до сусіднього у кілометрах",
    "10"
);

let userTime = prompt(
    "За який час у годинах хочете дістатися до міста?",
    "1"
);
alert(
    "Вам потрібно рухатись зі швидкістю " +
    Math.round(secondUserChoice / userTime) +
    " км/год!"
);

let thirdUserChoice = prompt("Введіть суму в USD", "200");
const crossRate = 0.953238;
alert(
    `Обмін ${Number(thirdUserChoice).toFixed(2)} USD принесе 
    ${(thirdUserChoice * crossRate).toFixed(2)} EUR!`
);