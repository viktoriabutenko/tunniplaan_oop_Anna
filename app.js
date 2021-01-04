// tunniplaani objekt
const tunniplaan = new Tunniplaan(1218, '2019-04-01');
// kasutaja liidese objekt
const kl = new KasutajaLiides();

// tunniplaani valjastamine
document.addEventListener('DOMContentLoaded', valjastaTunniplaan);
function valjastaTunniplaan(){
    tunniplaan.opetajaTunniplaaniAndmed().then(tunnid => {
        kl.printNadalaKuupaevad(kl.nadalaKuupaevad(tunnid));
        kl.print(tunnid);
    }).catch(viga => console.log(viga));
}