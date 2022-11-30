let firstItemText = `
<h1>Java Script може відображати дані різними способами:</h1>
<ol>
    <li>Запис в HTML елемент, використовуючи innerHTML .</li>
    <li>Запис в HTML виведення, використовуючи document. write() .</li>
    <li>Запис в вікно попередження (оповіщення), використовуючи window. alert().</li>
    <li>Запис в консоль браузера, використовуючи console. log() .</li>
</ol>
<br>
<button type="button" onclick="document.write(document.body.innerHTML = secondItemText)">Далі</button>
`;

let secondItemText = `
<h1>Приклади іменування змінних - коректні та некоректні:</h1>
<p>Коректні: firstName, middleName, lastName, surName</p>
<p>Некоректні: FirstName, middle name, Last_Name, sur-name</p>
<br>
<button type="button" onclick="document.write(document.body.innerHTML = thirdItemText)">Далі</button>
`

let thirdItemText = `
<h1>Коментувати код можна:</h1>
<ol>
<li>Починаючи з // (для однорядкових коментарів).</li>
<li>Починаючи з /* і закінчуючи */ (для багаторядкових коментарів)</li>
</ol>
<br>
<button type="button" onclick="document.write(document.body.innerHTML = fourthItemText)">Далі</button>
`

let fourthItemText = `
<h1>Стилі написання імен змінних:</h1>
<ol>
<li>camelCase</li>
<li>snake_case</li>
<li>Train-Case</li>
<li>flatcase</li>
<li>PascalCase</li>
</ol>
<br>
<button type="button" onclick="import('./js/norm.js')">Продовжити</button>
<button type="button" onclick="closeTab()">Вихід</button>
`
document.body.innerHTML = firstItemText;

function closeTab() {
    if (confirm("Бажаєте закрити вкладку?")) {
        window.close();
    }
}