class KasutajaLiides {
    print(tunniplaan){
        const nadalaAlgus = tunniplaan.nadal;
        const nadalaKuupaevad = Object.values(this.nadalaKuupaevad(tunniplaan));
        const nadalaTunnid = tunniplaan.tunnid;
        const nadalaTooPaevad = Object.keys(nadalaTunnid);
        const nadalaPaevaNimetused = Object.keys(this.nadalaKuupaevad(tunniplaan));
        for (let i = 0; i < nadalaPaevaNimetused.length; i++){
            for (let j = 0; j < nadalaTooPaevad.length; j++){
                if(nadalaKuupaevad[i] === nadalaTooPaevad[j]) {
                    console.log(nadalaKuupaevad[i] + ' - tunnid on olemas');
                    const paevaTunnid = Object.values(nadalaTunnid)[j];
                    for(let t = 0; t < paevaTunnid.length; t++){
                        const tund = paevaTunnid[t];
                        const paev = nadalaPaevaNimetused[i];
                        console.log(tund);
                        console.log(paev);
                        console.log('------');
                    }
                }
            }
        }
    }

    printNadalaKuupaevad(nadalaAndmed) {
        const e = document.querySelector('#e');
        e.textContent = `E ${nadalaAndmed.e}`;
        const t = document.querySelector('#t');
        t.textContent = `T ${nadalaAndmed.t}`;
        const k = document.querySelector('#k');
        k.textContent = `K ${nadalaAndmed.k}`;
        const n = document.querySelector('#n');
        n.textContent = `N ${nadalaAndmed.n}`;
        const r = document.querySelector('#r');
        r.textContent = `R ${nadalaAndmed.r}`;
        const l = document.querySelector('#l');
        l.textContent = `L ${nadalaAndmed.l}`;
        const p = document.querySelector('#p');
        p.textContent = `P ${nadalaAndmed.p}`;
    }

    nadalaKuupaevad(tunniplaaniAndmed) {
        const nadalaAlgus = tunniplaaniAndmed.nadal;
        const nadalaPaevad = ['e','t', 'k', 'n', 'r', 'l', 'p'];
        const nadal = {}
        let tananePaev = new Date(nadalaAlgus);
        for(let i = 0; i < nadalaPaevad.length; i++){
            nadal[nadalaPaevad[i]] = tananePaev.toISOString().split('T')[0];
            const jargminePaev = new Date(tananePaev);
            jargminePaev.setDate(tananePaev.getDate() + 1);
            tananePaev = new Date(jargminePaev);
        }
        return nadal;
    }
}