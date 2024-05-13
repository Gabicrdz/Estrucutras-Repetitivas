for (let i = 1; i <= 15; i++) {
    let multiplo = '';
    if (i % 3 == 0) {
        multiplo += 'Fizz';
    }
    if (i % 5 == 0) {
        multiplo += 'Buzz';
    }
    if (multiplo == '') {
        multiplo = i.toString();
    }
    console.log(multiplo);
}