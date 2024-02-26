# messme.js

Libreria para la destrucción creativa de elementos del DOM.

[Demo](https://messme.neocities.org/)

[Docs](https://messme.neocities.org/docs/)

[Ejemplos](https://github.com/datadiego/messme/tree/main/ejemplos)

## Instalación

Descarga messme.js y añade el siguiente código en tu `<head>`:

```html
<script src="messme.js"></script>
```

O usalo directamente desde el CDN:

```html
  <script src="https://cdn.jsdelivr.net/gh/datadiego/messme/messme.js"></script>
```

## Uso

Utiliza la clase `MessManager` para crear un nuevo gestor de desorden:

```javascript
    const mess = new MessManager(".mess", "loop", false);
    mess.setIdleTime(1000);
    mess.setMessDelay(20);
    mess.setFixDelay(100);
    mess.setCharacters("¿?¡!()[]{}-_.,;:@#$%&/=+*".split(""));
    mess.mess();
```

Cualquier elemento con texto con la clase `mess` será destruido y recompuesto por messme.js.

## Opciones

- `mess()`: Inicia el desordenado.
- `setIdleTime(time)`: Establece el tiempo de inactividad para el desordenado.
- `setMessDelay(time)`: Velocidad de desordenado.
- `setFixDelay(time)`: Velocidad de la recomposición.
- `setCharacters(array)`: Caracteres que se utilizarán para el desordenado.
