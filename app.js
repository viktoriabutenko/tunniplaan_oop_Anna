// tunniplaani objekt
const tunniplaan = new Tunniplaan(1218, '2019-04-01');

// tunniplaani valjastamine
document.addEventListener('DOMContentLoaded', valjastaTunniplaan);
function valjastaTunniplaan(){
    tunniplaan.opetajaTunniplaaniAndmed().then(tunnid => {
        console.log(tunnid);
    }).catch(viga => console.log(viga));
}