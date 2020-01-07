# JQuery Library to make a Tournament

### How to Install

Cambiar los estilos en **jquery_brackets.styl**:

Es probable que se necesite usar la palabra clave __!important__

```bash
.team ==> widh: 100%;
.teamContainer ==> widh: 100%;
```
Size of the Team Boxes:

```bash
.round ==> ajustar width
```

Rounds separation (height):

```bash
.bracket ==> ajustar height
```

Rounds separation (width) / Ajustar responsive con media queries:

```bash

x = 80px

//Esta clase aparece 2 veces
.finals {
  .rounds {
    margin-left: x / 2; ==> (40px)
    margin-right: 0
  }
}

//Esta clase aparece 2 veces
.rounds {
  margin-right: x; ==> 80px
}

.connector {
  width: x - 20px; ==> (60px)
  right: x*(-1) + 20px; ==> (-60px)
}


```

URL de la librería: http://www.aropupu.fi/bracket/
.
.
.

### EXAMPLE: Ver imagen
