const SHEET_ID = '1jTGXD8JBtUyQj8Oos28cNBEx8p7LHQLpX5Axxl2bBxQ'; // Вставте свій ID таблиці
const API_KEY = 'AIzaSyDuOC02gvBWcfln_TrBxcAUleoHZAyjDLk'; // Вставте свій API-ключ
const SHEET_NAME = 'Sheet1'; // Назва аркуша

const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${SHEET_NAME}?key=${API_KEY}`;

axios.get(url)
    .then(response => {
        const rows = response.data.values;
        console.log('Отримані дані:', rows);

        let html = '<table border="1">';
        rows.forEach(row => {
            html += '<tr>';
            row.forEach(cell => {
                html += `<td>${cell}</td>`;
            });
            html += '</tr>';
        });
        html += '</table>';

        document.getElementById('data').innerHTML = html;
    })
    .catch(error => {
        console.error('Помилка при отриманні даних:', error);
    });

// Вибір всіх елементів dropdown
let dropdownButtons = document.querySelectorAll('.dropdown');

dropdownButtons.forEach((dropdown) => {
    const dropdownContent = dropdown.querySelector('.dropdown-menu');

    // Показуємо меню при наведенні
    dropdown.addEventListener('mouseover', () => {
        dropdownContent.style.display = 'block';
    });

    // Прибираємо меню, коли миша залишає область меню
    dropdownContent.addEventListener('mouseleave', () => {
        dropdownContent.style.display = 'none';
    });
});