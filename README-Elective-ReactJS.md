# ReactJS

## 24.10.2023

#### Markdown

- Diese Datei wird in Markdown geschrieben, daher die Dateiendung .md
- Überschriften mit # einleiten
- Inline Code mit Backticks anführen, Bsp: `npm run dev`
- Block Code mit 3 Backticks je am Anfang und Ende darstellen, dabei die Programmiersprache nicht vergessen, damit das Syntax Highlighing korrekt ist, Bsp:

```js
function test() {
  return "test";
}
```

#### Projekttstruktur

- Die Datei package.json nicht löschen, dort befinden sich die packages, die für das Projekt benötigt werden.
- In der package-lock.json befinden sich alle packages und deren dependencies, die für dieses Projekt benötigt werden.
- Der Ordner node_modules enthält den Code zu allen benötigten packages
- Im Ordner src (= source) werden sich später all unsere Projekt Dateien befinden, also React Komponenten, CSS Stylings und ggf. Fotos für die Webseite

#### Entwicklung

- In VS Code links im Menü unter dem 5. Punkt Extensions können die Erweiterungen "Prettier" und "ESLint" hinzugefügt werden.
- Prettier formatiert den Code.
- ESLint weißt auf Fehler im Code hin.

#### ReactJS

- So kann eine einfache React Komponente mit sogenannten Props aussehen, "export" dabei nicht vergessen:

```js
export function Hello({ name }) {
  return <div>Hello {name}</div>;
}
```

- In einer anderen Komponente kann sie importiert werden:

```js
import { Hello } from "./Hello";
```

- Und dann wird sie so verwendet, der Code muss sich im "return" Block befinden:

```js
<Hello name={"World"} />
```

- `<div></div>` ist übrigens das gleiche, wie `<div />`. Letzteres nennt sich "self-closing tag"
