"use strict";

function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
//messme es una libreria que te permite destruir y reconstruir elementos de texto HTML en tiempo real
//la libreria se usa mediante la clase MessManager
//chars.js
var BASIC_CHARS = "abcdefghijklmñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ0123456789";
var SPECIAL_CHARS = "áéíóúÁÉÍÓÚ";
var SYMBOL_CHARS = "¿?¡!()[]{}-_.,;:@#$%&/=+*";
var SINGLE_BOX_CHARS = "┌┐└┘─│";
var DOUBLE_BOX_CHARS = "╔╗╚╝═║";
var ROUND_BOX_CHARS = "╭╮╰╯─│";
var MUSIC_CHARS = "♩♪♫♬♭♮♯";
var CHESS_CHARS = "♔♕♖♗♘♙♚♛♜♝♞♟";
var CARDS_CHARS = "♠♣♥♦♤♧♡♢";
var BLOCKS_CHARS = "█▓▒░";
var ROUND_CHARS = '○◌◍◎●◐◑◒◓◔◕';
var ARROW_CHARS = '←↑→↓↔↕↖↗↘↙';
var MATH_CHARS = '±×÷√∞∫≈≠≡≤≥';
var GREEK_CHARS = 'αβγδεζηθικλμνξοπρστυφχψω';
var DICE_CHARS = '⚀⚁⚂⚃⚄⚅';
var ascii_chars = {
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
  dice: DICE_CHARS
};
/**
 * Devuelve un array a partir de varios strings
 * @param  {...string} sets sets: strings a unir en un array
 * @returns {array} array de caracteres
 */
function createSet() {
  for (var _len = arguments.length, sets = new Array(_len), _key = 0; _key < _len; _key++) {
    sets[_key] = arguments[_key];
  }
  return sets.join('').split('');
}
var CHARACTERS = createSet(ascii_chars.basic, ascii_chars.special, ascii_chars.symbol, ascii_chars.block, ascii_chars.greek, ascii_chars.math);
var randomMethods = {
  /**
   * 
   * @param {array} array el array del que extraer un elemento
   * @returns un elemento aleatorio del array
   */
  getRandomElement: function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  },
  /**
   * 
   * @returns un elemento de CHARACTERS
   * 
  */
  getRandomCharacter: function getRandomCharacter() {
    return this.getRandomElement(CHARACTERS);
  }
};
var Repeater = /*#__PURE__*/function () {
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
  function Repeater() {
    var goal = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
    var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
    var autoreset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var repeat_action = arguments.length > 3 ? arguments[3] : undefined;
    var end_action = arguments.length > 4 ? arguments[4] : undefined;
    _classCallCheck(this, Repeater);
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
  _createClass(Repeater, [{
    key: "stop",
    value: function stop() {
      this.reset();
      clearInterval(this.interval);
    }

    /**
     * Inicia el repeater
     */
  }, {
    key: "start",
    value: function start() {
      this.interval = setInterval(this.update.bind(this), this.delay);
    }

    /**
     * Reinicia el repeater
     */
  }, {
    key: "reset",
    value: function reset() {
      this.current = 0;
      this.finished = false;
    }

    /**
     * Actualiza el estado del repeater
     */
  }, {
    key: "update",
    value: function update() {
      this.repeat_action();
      this.current += 1;
      if (this.current >= this.goal) {
        clearInterval(this.interval);
        if (this.autoreset) {
          this.reset();
          this.start();
        } else {
          this.finished = true;
          if (this.callback) {
            this.callback();
          }
        }
      }
    }
  }]);
  return Repeater;
}();
var Manipulator = /*#__PURE__*/function () {
  /**
   * 
   * @param {DynamicText} dynamicText Clase que contiene el texto a manipular
   */
  function Manipulator(dynamicText) {
    _classCallCheck(this, Manipulator);
    this.dynamicText = dynamicText;
    this.repeater = null;
    this.createRepeater();
  }
  _createClass(Manipulator, [{
    key: "createRepeater",
    value: function createRepeater() {
      var goal = this.dynamicText.split_text.length;
      var step = 1;
      var speed = this.dynamicText.mess_speed;
      var play_mode = this.dynamicText.play_mode;
      var autoreset = this.dynamicText.autoreset;
      if (play_mode == "loop") {
        this.repeater = new Repeater(goal, step, speed, autoreset, this.mess.bind(this), this.dynamicText.fix.bind(this.dynamicText));
      } else if (play_mode == "manual") {
        this.repeater = new Repeater(goal, step, speed, autoreset, this.mess.bind(this));
      }
    }
  }, {
    key: "idle",
    value: function idle() {
      return;
    }
  }, {
    key: "mess",
    value: function mess() {
      var index = this.repeater.current;
      if (this.filter(index)) {
        return;
      }
      var randomCharacter = this.getRandomCharacter(); // obten un caracter aleatorio
      this.dynamicText.split_text[index] = randomCharacter; //asigna el caracter aleatorio a la posicion actual
      this.dynamicText.element.innerHTML = this.dynamicText.split_text.join('');
    }
  }, {
    key: "fix",
    value: function fix() {
      var index = this.repeater.current;
      if (this.filter(index)) {
        return;
      }
      this.dynamicText.split_text[index] = this.dynamicText.text[index];
      this.dynamicText.element.innerHTML = this.dynamicText.split_text.join('');
    }
  }, {
    key: "getRandomCharacter",
    value: function getRandomCharacter() {
      return this.dynamicText.characters[Math.floor(Math.random() * this.dynamicText.characters.length)];
    }
  }, {
    key: "stop",
    value: function stop() {
      this.repeater.stop();
    }
  }, {
    key: "start",
    value: function start() {
      this.repeater.start();
    }
  }, {
    key: "filter",
    value: function filter(index) {
      return this.dynamicText.ignoredCharacters.includes(this.dynamicText.split_text[index]);
    }
  }]);
  return Manipulator;
}(); //Messer.js
var Messer = /*#__PURE__*/function (_Manipulator) {
  _inherits(Messer, _Manipulator);
  function Messer(dynamicText) {
    _classCallCheck(this, Messer);
    return _callSuper(this, Messer, [dynamicText]);
  }
  _createClass(Messer, [{
    key: "createRepeater",
    value: function createRepeater() {
      var goal = this.dynamicText.split_text.length;
      var step = 1;
      var delay = this.dynamicText.mess_delay;
      var play_mode = this.dynamicText.play_mode; // oneShot, loop or mouseover
      var autoreset = this.dynamicText.autoreset;
      if (play_mode == "loop") {
        this.repeater = new Repeater(goal, delay, autoreset, this.mess.bind(this), this.dynamicText.fix.bind(this.dynamicText));
      } else if (play_mode == "oneshot") {
        this.repeater = new Repeater(goal, delay, false, this.mess.bind(this));
      }
    }
  }, {
    key: "mess",
    value: function mess() {
      var index = this.repeater.current;
      if (this.filter(index)) {
        return;
      }
      var randomCharacter = this.getRandomCharacter(); // obten un caracter aleatorio
      this.dynamicText.split_text[index] = randomCharacter; //asigna el caracter aleatorio a la posicion actual
      this.dynamicText.element.innerHTML = this.dynamicText.split_text.join('');
    }
  }]);
  return Messer;
}(Manipulator); //Fixer.js
var Fixer = /*#__PURE__*/function (_Manipulator2) {
  _inherits(Fixer, _Manipulator2);
  function Fixer(dynamicText) {
    _classCallCheck(this, Fixer);
    return _callSuper(this, Fixer, [dynamicText]);
  }
  _createClass(Fixer, [{
    key: "createRepeater",
    value: function createRepeater() {
      var goal = this.dynamicText.split_text.length;
      var step = 1;
      var delay = this.dynamicText.mess_delay;
      var play_mode = this.dynamicText.play_mode;
      if (play_mode == "loop") {
        this.repeater = new Repeater(goal, delay, false, this.fix.bind(this), this.dynamicText.idle.bind(this.dynamicText));
      } else if (play_mode == "oneshot") {
        this.repeater = new Repeater(goal, delay, false, this.fix.bind(this));
      }
    }
  }, {
    key: "fix",
    value: function fix() {
      var index = this.repeater.current;
      this.dynamicText.split_text[index] = this.dynamicText.text[index];
      this.dynamicText.element.innerHTML = this.dynamicText.split_text.join('');
    }
  }]);
  return Fixer;
}(Manipulator); //string mess
var DynamicText = /*#__PURE__*/function () {
  /**
   * DynamicText es una clase que permite manipular el texto de un elemento HTML, consiste en un texto que se descompone en caracteres y se manipula para crear efectos visuales
   * @param {HTML element} element Elemento HTML que contiene el texto
   * @param {*} play_mode  Opcional, loop o oneshot
   * @param {*} autoreset  Opcional, permite reiniciar automaticamente
   */
  function DynamicText(element) {
    var play_mode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "loop";
    var autoreset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    _classCallCheck(this, DynamicText);
    this.element = element;
    this.text = element.innerHTML;
    this.split_text = this.text.split('');
    this.ignoredCharacters = " ,.¿?!¡()".split('');
    this.mess_delay = 100;
    this.fix_delay = 100;
    this.idle_time = 2000;
    this.autoreset = autoreset;
    this.play_mode = play_mode; // oneshot, loop
    this.messer = new Messer(this);
    this.fixer = new Fixer(this);
    this.characters = CHARACTERS;
  }
  _createClass(DynamicText, [{
    key: "idle",
    value: function idle() {
      this.messer.stop();
      this.fixer.stop();
      setTimeout(this.mess.bind(this), this.idle_time);
    }
  }, {
    key: "fix",
    value: function fix() {
      this.messer.stop();
      this.fixer.start();
    }
  }, {
    key: "mess",
    value: function mess() {
      this.fixer.stop();
      this.messer.start();
    }
  }, {
    key: "setIgnoredCharacters",
    value: function setIgnoredCharacters(array) {
      this.ignoredCharacters = array;
    }
  }, {
    key: "setMessDelay",
    value: function setMessDelay(delay) {
      this.mess_delay = delay;
      this.messer.repeater.delay = delay;
    }
  }, {
    key: "setFixDelay",
    value: function setFixDelay(delay) {
      this.fix_delay = delay;
      this.fixer.repeater.delay = delay;
    }
  }, {
    key: "setIdleTime",
    value: function setIdleTime(time) {
      this.idle_time = time;
    }
  }, {
    key: "setPlayMode",
    value: function setPlayMode(mode) {
      this.play_mode = mode;
      this.messer.createRepeater();
      this.fixer.createRepeater();
    }
  }]);
  return DynamicText;
}();
var MessManager = /*#__PURE__*/function () {
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
  function MessManager(selector) {
    var _this = this;
    var play_mode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "loop";
    var autoreset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    _classCallCheck(this, MessManager);
    this.elements = document.querySelectorAll(selector);
    this.dynamicTexts = [];
    this.elements.forEach(function (element) {
      _this.dynamicTexts.push(new DynamicText(element, play_mode, autoreset));
      console.log(element.innerHTML);
    });
  }
  _createClass(MessManager, [{
    key: "idle",
    value: function idle() {
      this.dynamicTexts.forEach(function (dynamicText) {
        dynamicText.idle();
      });
    }
  }, {
    key: "fix",
    value: function fix() {
      this.dynamicTexts.forEach(function (dynamicText) {
        dynamicText.fix();
      });
    }
  }, {
    key: "mess",
    value: function mess() {
      this.dynamicTexts.forEach(function (dynamicText) {
        dynamicText.mess();
      });
    }
  }, {
    key: "setCharacters",
    value: function setCharacters(array) {
      this.dynamicTexts.forEach(function (dynamicText) {
        dynamicText.characters = array;
      });
    }
  }, {
    key: "setMessDelay",
    value: function setMessDelay(delay) {
      this.dynamicTexts.forEach(function (dynamicText) {
        dynamicText.setMessDelay(delay);
      });
    }
  }, {
    key: "setFixDelay",
    value: function setFixDelay(delay) {
      this.dynamicTexts.forEach(function (dynamicText) {
        dynamicText.setFixDelay(delay);
      });
    }
  }, {
    key: "setIdleTime",
    value: function setIdleTime(time) {
      this.dynamicTexts.forEach(function (dynamicText) {
        dynamicText.setIdleTime(time);
      });
    }
  }]);
  return MessManager;
}();
/*
module.exports = {
    MessManager,
    DynamicText,
    Messer,
    Fixer,
    Repeater
}
*/
