let cel = document.getElementById('cel');
let fahr = document.getElementById('fahr');
let kel = document.getElementById('kel');
let clear = document.getElementById('clear');

clear.addEventListener('click', () => {
    cel.value = '';
    kel.value = '';
    fahr.value = '';
})

cel.addEventListener('input', () => {
    let c = cel.value;



    // cel to fahr temp conv
    let f = (c * 9 / 5) + 32;
    if (!Number.isInteger(f)) {
        f = f.toFixed(4);
    }
    fahr.value = f;


    // cel to kel

    let k = c - (-273.15);
    kel.value = k;

    if (cel.value === '') {
        kel.value = '';
        fahr.value = '';
    }

});

// fahr to cel
fahr.addEventListener('input', () => {
    // fahr to cel
    let f = fahr.value;
    let c = (f - 32) * 5 / 9;
    if (!Number.isInteger(c)) {
        c = c.toFixed(4);
    }
    cel.value = c;

    // fahr to kel 
    let k = (f - 32) * 5 / 9 + 273.15;
    if (!Number.isInteger(k)) {
        k = k.toFixed(4);
    }
    kel.value = k;

    if (fahr.value === '') {
        kel.value = '';
        cel.value = '';
    }

});



kel.addEventListener('input', () => {

    // kel to cel
    let k = kel.value;
    let c = k - 273.15;
    if (!Number.isInteger(c)) {
        c = c.toFixed(4);
    }
    cel.value = c;

    // kel to fahr
    let f = (k - 273.15) * 9 / 5 + 32;
    if (!Number.isInteger(f)) {
        f = f.toFixed(4);
    }
    fahr.value = f;

    if (kel.value === '') {
        cel.value = '';
        fahr.value = '';
    }

});