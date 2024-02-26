
const BASIC_CHARS = "abcdefghijklmñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ0123456789";
const SPECIAL_CHARS = "áéíóúÁÉÍÓÚ";
const SYMBOL_CHARS = "¿?¡!()[]{}-_.,;:@#$%&/=+*";
const SINGLE_BOX_CHARS = "┌┐└┘─│";
const DOUBLE_BOX_CHARS = "╔╗╚╝═║";
const ROUND_BOX_CHARS = "╭╮╰╯─│";
const MUSIC_CHARS = "♩♪♫♬♭♮♯";
const CHESS_CHARS = "♔♕♖♗♘♙♚♛♜♝♞♟";
const CARDS_CHARS = "♠♣♥♦♤♧♡♢";
const BLOCKS_CHARS = "█▓▒░";
const ROUND_CHARS = '○◌◍◎●◐◑◒◓◔◕'
const ARROW_CHARS = '←↑→↓↔↕↖↗↘↙'
const MATH_CHARS = '±×÷√∞∫≈≠≡≤≥'
const GREEK_CHARS = 'αβγδεζηθικλμνξοπρστυφχψω';
const DICE_CHARS = '⚀⚁⚂⚃⚄⚅'

/**Objeto con varios sets de caracteres ascii
 * @type {object} 
 * @property {string} basic abcdefghijklmñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ0123456789
 * @property {string} special áéíóúÁÉÍÓÚ
 * @property {string} symbol ¿?¡!()[]{}-_.,;:@#$%&/=+*
 * @property {string} single_box ┌┐└┘─│
 * @property {string} double_box ╔╗╚╝═║
 * @property {string} round_box ╭╮╰╯─│
 * @property {string} music ♩♪♫♬♭♮♯
 * @property {string} chess ♔♕♖♗♘♙♚♛♜♝♞♟
 * @property {string} cards ♠♣♥♦♤♧♡♢
 * @property {string} blocks █▓▒░
 * @property {string} round ○◌◍◎●◐◑◒◓◔◕
 * @property {string} arrow ←↑→↓↔↕↖↗↘↙
 * @property {string} math ±×÷√∞∫≈≠≡≤≥
 * @property {string} greek αβγδεζηθικλμνξοπρστυφχψω
 * @property {string} dice ⚀⚁⚂⚃⚄⚅
 * 
 */
const ascii_chars = {
    basic: BASIC_CHARS,
    special: SPECIAL_CHARS,
    symbol: SYMBOL_CHARS,
    single_box: SINGLE_BOX_CHARS,
    double_box: DOUBLE_BOX_CHARS,
    round_box: ROUND_BOX_CHARS,
    music: MUSIC_CHARS,
    chess: CHESS_CHARS,
    cards: CARDS_CHARS,
    blocks: BLOCKS_CHARS,
    round: ROUND_CHARS,
    arrow: ARROW_CHARS,
    math: MATH_CHARS,
    greek: GREEK_CHARS,
    dice: DICE_CHARS,
}
/**
 * Devuelve un array a partir de varios strings
 * @param  {...string} sets sets: strings a unir en un array
 * @returns {array} array de caracteres
 */
function createSet(...sets) {
    return sets.join('').split('');
}

const CHARACTERS = createSet(ascii_chars.basic, ascii_chars.special, ascii_chars.symbol, ascii_chars.block,ascii_chars.greek, ascii_chars.math);

/**
 * Objeto con metodos aleatorios
 * @type {object}
 * @property {function} getRandomElement(array) devuelve un elemento aleatorio de un array
 * @property {function} getRandomCharacter() devuelve un caracter aleatorio
 */
const randomMethods = {
    getRandomElement: function(array){
        return array[Math.floor(Math.random() * array.length)];
    },
    getRandomCharacter: function(){
        return this.getRandomElement(CHARACTERS);
    }
}

class Repeater{
    /**
     * Repeater es una clase que repite un callback hasta alcanzar una meta
     * @param {int} goal goal: meta a alcanzar (default: 10)
     * @param {int} delay delay: tiempo entre cada iteracion (default: 100)
     * @param {boolean} autoreset autoreset: reiniciar automaticamente al alcanzar la meta (default: false)
     * @param {function} repeat_action repeat_action: callback a repetir
     * @param {function} end_action end_action: callback que se ejecuta al alcanzar la meta
     * 
     * @example
     * const repeater = new Repeater(10, 100, true, () => console.log('hola'), () => console.log('adios'));
     * repeater.start();
     * 
    */
    constructor(goal=10, delay=100, autoreset=false, repeat_action, end_action){
        this.goal = goal;
        this.delay = delay;
        this.repeat_action = repeat_action;
        this.callback = end_action;
        this.current = 0;
        this.interval = null;
        this.autoreset = autoreset;
        this.finished = false;
    }

    /**
     * Detiene el repeater
     */
    stop(){
        this.reset();
        clearInterval(this.interval);
    }

    /**
     * Inicia el repeater
     */
    start(){
        this.interval = setInterval(this.update.bind(this), this.delay);
    }

    /**
     * Reinicia el repeater
     */
    reset(){
        this.current = 0;
        this.finished = false;
    }
    
    /**
     * Actualiza el estado del repeater
     */
    update(){
        this.repeat_action();
        this.current += 1;
        if(this.current >= this.goal){
            clearInterval(this.interval);
            if(this.autoreset){
                this.reset();
                this.start();
            }
            else{
                this.finished = true;
                if(this.callback){
                this.callback();
                }
            }
        }
    }
}

class Manipulator{
    /** Esta clase utiliza un dynamicText para manipular su texto
     * 
     * @param {DynamicText} dynamicText Clase que contiene el texto a manipular
     */
    constructor(dynamicText){
        this.dynamicText = dynamicText
        this.repeater = null;
        this.createRepeater();
    }
    /**
     * Crea un repeater para manipular el texto, el objetivo es la longitud del texto, el paso es 1, la velocidad es la velocidad de escritura y el modo de juego puede ser loop o manual. La accion a repetir es mess y la accion final es fix, excepto en el modo manual, que debe ser especificado por el usuario.
     */
    createRepeater(){
        const goal = this.dynamicText.split_text.length;
        const step = 1
        const speed = this.dynamicText.mess_speed;
        const play_mode = this.dynamicText.play_mode;
        const autoreset = this.dynamicText.autoreset;
        if(play_mode == "loop"){
            this.repeater = new Repeater(goal, step, speed, autoreset, this.mess.bind(this), this.dynamicText.fix.bind(this.dynamicText));
        }
        else if (play_mode == "manual"){
            this.repeater = new Repeater(goal, step, speed, autoreset, this.mess.bind(this));
        }
    }
    /**
     * 
     * @returns {void} Sale de la funcion 
     */
    idle(){
        return;
    }
    /**
     * Pone un caracter aleatorio en la posicion actual del texto
     * @returns {void} Sale de la funcion
     */
    mess(){
        const index = this.repeater.current;
        if(this.filter(index)){
            return;
        }
        const randomCharacter = this.getRandomCharacter(); // obten un caracter aleatorio
        this.dynamicText.split_text[index] = randomCharacter; //asigna el caracter aleatorio a la posicion actual
        this.dynamicText.element.innerHTML = this.dynamicText.split_text.join('');
    }
    /**
     * Pone el caracter original en la posicion actual del texto
     * @returns {void} Sale de la funcion
     */
    fix(){
        const index = this.repeater.current;
        if(this.filter(index)){
            return;
        }
        this.dynamicText.split_text[index] = this.dynamicText.text[index];
        this.dynamicText.element.innerHTML = this.dynamicText.split_text.join('');
    }
    /**
     * 
     * @returns {string} Caracter aleatorio de dynamicText.characters
     */
    getRandomCharacter(){
        return this.dynamicText.characters[Math.floor(Math.random() * this.dynamicText.characters.length)];
    }
    /**
     * Detiene el repeater
     * @returns {void} Sale de la funcion
     */

    stop(){
        this.repeater.stop();
    }

    start(){
        this.repeater.start();
    }

    filter(index){
        return this.dynamicText.ignoredCharacters.includes(this.dynamicText.split_text[index])        
    }
}

class Messer extends Manipulator{
    constructor(dynamicText){
        super(dynamicText);
    }
    createRepeater(){
        const goal = this.dynamicText.split_text.length;
        const step = 1
        const delay = this.dynamicText.mess_delay;
        const play_mode = this.dynamicText.play_mode; // oneShot, loop or mouseover
        const autoreset = this.dynamicText.autoreset;
        if(play_mode == "loop"){
            this.repeater = new Repeater(goal, delay, autoreset, this.mess.bind(this), this.dynamicText.fix.bind(this.dynamicText));
        }
        else if (play_mode == "oneshot"){
            this.repeater = new Repeater(goal, delay, false, this.mess.bind(this));
        }
    }
    mess(){
        const index = this.repeater.current;
        if(this.filter(index)){
            return;
        }
        const randomCharacter = this.getRandomCharacter(); // obten un caracter aleatorio
        this.dynamicText.split_text[index] = randomCharacter; //asigna el caracter aleatorio a la posicion actual
        this.dynamicText.element.innerHTML = this.dynamicText.split_text.join('');
    }
}

class Fixer extends Manipulator{
    constructor(dynamicText){
        super(dynamicText);
    }
    createRepeater(){
        const goal = this.dynamicText.split_text.length;
        const step = 1
        const delay = this.dynamicText.mess_delay;
        const play_mode = this.dynamicText.play_mode;
        if(play_mode == "loop"){
            this.repeater = new Repeater(goal, delay, false, this.fix.bind(this), this.dynamicText.idle.bind(this.dynamicText));
        }
        else if (play_mode == "oneshot"){
            this.repeater = new Repeater(goal, delay, false, this.fix.bind(this));
        }
    }
    
    fix(){
        const index = this.repeater.current;
        this.dynamicText.split_text[index] = this.dynamicText.text[index];
        this.dynamicText.element.innerHTML = this.dynamicText.split_text.join('');
    }
}

class DynamicText{
    /**
     * DynamicText es una clase que permite manipular el texto de un elemento HTML, consiste en un texto que se descompone en caracteres y se manipula para crear efectos visuales
     * @param {*} element Elemento HTML que contiene el texto
     * @param {*} play_mode  Opcional, loop o oneshot
     * @param {*} autoreset  Opcional, permite reiniciar automaticamente
     */
    constructor(element, play_mode="loop", autoreset=false){
        this.element = element;
        this.text = element.innerHTML;
        this.split_text = this.text.split('');
        this.ignoredCharacters = " ,.¿?!¡()".split('');
        this.mess_delay = 100;
        this.fix_delay = 100;
        this.idle_time = 2000;
        this.autoreset = autoreset;
        this.play_mode = play_mode // oneshot, loop
        this.messer = new Messer(this);
        this.fixer = new Fixer(this);
        this.characters = CHARACTERS;
    }
    idle(){
        this.messer.stop();
        this.fixer.stop();
        setTimeout(this.mess.bind(this), this.idle_time);
    }
    fix(){
        this.messer.stop();
        this.fixer.start();
    }
    mess(){
        this.fixer.stop();
        this.messer.start();
    }

    setIgnoredCharacters(array){
        this.ignoredCharacters = array;
    }
    setMessDelay(delay){
        this.mess_delay = delay;
        this.messer.repeater.delay = delay;
    }
    setFixDelay(delay){
        this.fix_delay = delay;
        this.fixer.repeater.delay = delay;
    }
    setIdleTime(time){
        this.idle_time = time;
    }
    setPlayMode(mode){
        this.play_mode = mode;
        this.messer.createRepeater();
        this.fixer.createRepeater();
    }
}

class MessManager{
    /**
     * MessManager
     * @param {string} selector id, clase o selector css
     * @param {string} play_mode Opcional, loop o oneshot (Default: loop)
     * @param {boolean} autoreset Opcional, controla si se reinicia automaticamente 
     * 
     * @example
     * const messManager = new MessManager('.mess-me', 'loop', false);
     * messManager.mess();
     * 
     * @example
     * const messManager = new MessManager('.mess-me', 'oneshot', false);
     * messManager.setMessDelay(100);
     * messManager.setFixDelay(100);
     * messManager.setIdleTime(2000);
     * messManager.mess();
     */
    constructor(selector, play_mode="loop", autoreset=false){
        this.elements = document.querySelectorAll(selector);
        this.dynamicTexts = [];
        this.elements.forEach(element => {
            this.dynamicTexts.push(new DynamicText(element, play_mode, autoreset));
            console.log(element.innerHTML);
        });
    }
    /**
     * lanza el efecto idle
     */
    idle(){
        this.dynamicTexts.forEach(dynamicText => {
            dynamicText.idle();
        });
    }
    /**
     * lanza el efecto fix
     */
    fix(){
        this.dynamicTexts.forEach(dynamicText => {
            dynamicText.fix();
        });
    }
    /**
     * lanza el efecto mess
     */
    mess(){
        this.dynamicTexts.forEach(dynamicText => {
            dynamicText.mess();
        });
    }
    /**
     * Configura los caracteres a introducir
     * @param {array} array El array de caracteres a usar
     */
    setCharacters(array){
        this.dynamicTexts.forEach(dynamicText => {
            dynamicText.characters = array;
        });
    }
    /**
     * Configura la velocidad a la que se destruye el texto
     * @param {int} delay Velocidad en ms
     */
    setMessDelay(delay){
        this.dynamicTexts.forEach(dynamicText => {
            dynamicText.setMessDelay(delay);
        });
    }

    /**
     * Configura la velocidad a la que se reconstruye el texto
     * @param {*} delay Velocidad en ms
     */

    setFixDelay(delay){
        this.dynamicTexts.forEach(dynamicText => {
            dynamicText.setFixDelay(delay);
        });
    }

    /**
     * Configura el tiempo de espera
     * @param {int} time Tiempo en ms
     */
    setIdleTime(time){
        this.dynamicTexts.forEach(dynamicText => {
            dynamicText.setIdleTime(time);
        });
    }
    
}

module.exports = { Repeater }

