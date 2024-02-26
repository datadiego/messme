const { Repeater } = require('../messme.js')

test('Repeater #1', () => {
    let valor = 0;
    const repeater = new Repeater(4, 10, false, 
        () => valor++, 
        () => expect(valor).toBe(4));
    repeater.start();
});

test('Repeater #2', () => {
    let valor = 0;
    let lista = [];
    const repeater = new Repeater(4, 10, false, 
        () => {valor++; lista.push(valor);}, 
        () => {
            expect(valor).toBe(4)
            expect(lista).toEqual([1, 2, 3, 4]);
        });
    repeater.start();
});


