async function surah_text() {
    let inp = document.getElementById("inp");
    let response = await fetch(`https://alquran.vip/APIs/ayah?number=${inp.value}`);
    let data = await response.json();
    let test = document.getElementById('container');

  test.innerHTML=""

    data.forEach(ayah => {
       test.innerHTML += `
     
       <p>${ayah.text}</p>
       <div id="div"><p>  ﴿${ayah.number_in_surah}﴾</p></div>
       `; 
    });
    let response_surah = await fetch(`https://alquran.vip/APIs/surahs`)
let data_surah =await response_surah.json()
data_surah.forEach(surah => {
inp.innerHTML+= `
<option value="${surah.id}">${surah.name_ar}</option>
`

});

}
surah_text();
