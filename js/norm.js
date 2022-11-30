let itemText = `
<h1>Взаємодію з користувачем завершено.</h1>
<button type="button" onclick="import('./js/max.js')">Продовжити</button>
<button type="button" onclick="closeTab()">Вихід</button>
`;

document.body.innerHTML = itemText;

const userName = prompt("Введіть Ваше ім'я", "Houston");
alert("Привіт," + userName + "!");

const birthYear = prompt(userName + ", введіть рік Вашого народження.", 2000);
alert(
    "Вам " +
    (new Date().getFullYear() - birthYear) +
    ", " +
    userName +
    "!"
);

const userChoice = promt(
    userName + ", введіть довжину сторони квадрата у сантиметрах",
    "0"
)
alert("Периметр квадрата дорівнює " + Math.round(userChoice * 4) + " см!");