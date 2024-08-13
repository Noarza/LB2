document.addEventListener('DOMContentLoaded', () => {
    const tbody = document.querySelector('tbody');
    let rows = '';

    for (let i = 0; i < 50; i++) {
        const departureTime = new Date(2024, 7, 12, 10, i * 15 % 60).toLocaleTimeString('th-TH', { hour: '2-digit', minute: '2-digit' });
        const arrivalTime = new Date(2024, 7, 12, 13, i * 15 % 60).toLocaleTimeString('th-TH', { hour: '2-digit', minute: '2-digit' });

        rows += `<tr><td>${departureTime}</td><td>${arrivalTime}</td></tr>`;
    }

    tbody.innerHTML = rows;
});
