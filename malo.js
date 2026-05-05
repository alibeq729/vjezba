const dugme = document.getElementById('vrijemeBtn');
const ispis = document.getElementById('ispisVremena');

dugme.addEventListener('click', () => {
    const sada = new Date();
    ispis.innerText = "Trenutno vrijeme je: " + sada.toLocaleTimeString();
});
