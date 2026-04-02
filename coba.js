const quote = document.getElementById('quote');
const character = document.getElementById('character');
const btn_klik = document.getElementById('btn_klik');

async function getQuote(){
    quote.innerText = "Sabar ya lagi loading soalnya laptop kentang...";
    try{
let response = await fetch("https://katanime.vercel.app/api/getbyanime?anime=D.Gray-man&page=1")
    let data = await response.json()
    console.log("Data Berhasil Masuk:", data)

    const hasilquote = data.result;
    const ambilacak = Math.floor(Math.random() * hasilquote.length);
    const quoteterpilih = hasilquote[ambilacak];

    quote.innerText = `"${quoteterpilih.indo}"`;
    character.innerText = `~${quoteterpilih.character} (${quoteterpilih.anime})`;
} catch(error){
    quote.innerText = "Gagal ambil data cik XD";
    console.error("Detail Error:", error);
}
}
btn_klik.addEventListener("click", getQuote);