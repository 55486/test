async function salah() {
    let response = await fetch(`https://alquran.vip/APIs/getPrayerTimes`);
    let data = await response.json();

    let Fajr = document.getElementById("Fajr");
    let Sunrise = document.getElementById("Sunrise");
    let Dhuhr = document.getElementById("Dhuhr");
    let Asr = document.getElementById("Asr");
    let Maghrib = document.getElementById("Maghrib");
    let Isha = document.getElementById("Isha");
    let date_en = document.getElementById('date_en');

    date_en.innerHTML = `<h4 id="date_en">${data.date.date_en}</h4>`;
/*
   function formatTimeTo12Hour(time) {
        let [hours, minutes] = time.split(':').map(Number);
        let period = hours >= 12 ? 'PM' : 'AM';
        hours = hours > 12 ? hours - 12 : (hours === 0 ? 12 : hours);
        return `${hours}:${minutes} ${period}`;
    }
*/
    Fajr.innerHTML = `<P> ${(data.prayer_times.Fajr)} </p>`;
    Sunrise.innerHTML = `<P> ${(data.prayer_times.Sunrise)} </p>`;
    Dhuhr.innerHTML = `<P> ${(data.prayer_times.Dhuhr)} </p>`;
    Asr.innerHTML = `<P> ${(data.prayer_times.Asr)} </p>`;
    Maghrib.innerHTML = `<P> ${(data.prayer_times.Maghrib)} </p>`;
    Isha.innerHTML = `<P> ${(data.prayer_times.Isha)} </p>`;




}
salah()