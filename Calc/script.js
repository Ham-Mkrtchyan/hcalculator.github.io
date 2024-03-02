one.addEventListener('click', () => {
    results.innerHTML += one.value
})

two.addEventListener('click', () => {
    results.innerHTML += two.value
})

three.addEventListener('click', () => {
    results.innerHTML += three.value
})

four.addEventListener('click', () => {
    results.innerHTML += four.value
})

five.addEventListener('click', () => {
    results.innerHTML += five.value
})

six.addEventListener('click', () => {
    results.innerHTML += six.value
})

seven.addEventListener('click', () => {
    results.innerHTML += seven.value
})

eight.addEventListener('click', () => {
    results.innerHTML += eight.value
})

nine.addEventListener('click', () => {
    results.innerHTML += nine.value
})

zero.addEventListener('click', () => {
    results.innerHTML += zero.value
})

C.addEventListener('click', () => {
    results.innerHTML = ''
})

AC.addEventListener('click', () => {
    let res = results.innerHTML;
    if (res.length > 0) {
        res = res.slice(0, -1);
        results.innerHTML = res;
    }
});

minus.addEventListener('click', () => {
    results.innerHTML += minus.value
})

plus.addEventListener('click', () => {
    results.innerHTML += plus.value
})

decimal.addEventListener('click', () => {
    results.innerHTML += decimal.value
})

multiply.addEventListener('click', () => {
    results.innerHTML += multiply.value
})

divide.addEventListener('click', () => {
    results.innerHTML += divide.value
})

modulo.addEventListener('click', () => {
    results.innerHTML += modulo.value
})

equal.addEventListener('click', () => {
    results.innerHTML = eval(results.innerHTML)
})