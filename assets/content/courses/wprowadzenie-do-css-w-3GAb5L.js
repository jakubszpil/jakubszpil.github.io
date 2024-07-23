const s={id:"bb936894-9359-4428-8f9e-2876bea91d15",slug:"wprowadzenie-do-css",content:`<p>CSS (Cascading Style Sheets) to język służący do opisywania wyglądu i formatu dokumentu HTML. CSS pozwala na oddzielenie treści od prezentacji, co umożliwia tworzenie estetycznych i spójnych stron internetowych. W tym kursie omówimy podstawy CSS, w tym selektory, właściwości, sposoby załączania CSS do HTML oraz JavaScript, a także przedstawimy kilka zadań do wykonania.</p>
<h2>Sposoby załączania CSS do HTML</h2>
<h3>Inline CSS</h3>
<p>Inline CSS jest stosowany bezpośrednio w atrybucie <code>style</code> elementu HTML.</p>
<pre><code class="hljs language-html"><span class="hljs-meta">&#x3C;!DOCTYPE <span class="hljs-keyword">html</span>></span>
<span class="hljs-tag">&#x3C;<span class="hljs-name">html</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">"pl"</span>></span>
  <span class="hljs-tag">&#x3C;<span class="hljs-name">head</span>></span>
    <span class="hljs-tag">&#x3C;<span class="hljs-name">meta</span> <span class="hljs-attr">charset</span>=<span class="hljs-string">"UTF-8"</span> /></span>
    <span class="hljs-tag">&#x3C;<span class="hljs-name">meta</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"viewport"</span> <span class="hljs-attr">content</span>=<span class="hljs-string">"width=device-width, initial-scale=1.0"</span> /></span>
    <span class="hljs-tag">&#x3C;<span class="hljs-name">title</span>></span>Inline CSS<span class="hljs-tag">&#x3C;/<span class="hljs-name">title</span>></span>
  <span class="hljs-tag">&#x3C;/<span class="hljs-name">head</span>></span>
  <span class="hljs-tag">&#x3C;<span class="hljs-name">body</span>></span>
    <span class="hljs-tag">&#x3C;<span class="hljs-name">h1</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"color: blue;"</span>></span>Witaj, świecie!<span class="hljs-tag">&#x3C;/<span class="hljs-name">h1</span>></span>
  <span class="hljs-tag">&#x3C;/<span class="hljs-name">body</span>></span>
<span class="hljs-tag">&#x3C;/<span class="hljs-name">html</span>></span>
</code></pre>
<h3>Internal CSS</h3>
<p>Internal CSS jest umieszczony w sekcji <code>&#x3C;head></code> dokumentu HTML, wewnątrz elementu <code>&#x3C;style></code>.</p>
<pre><code class="hljs language-html"><span class="hljs-meta">&#x3C;!DOCTYPE <span class="hljs-keyword">html</span>></span>
<span class="hljs-tag">&#x3C;<span class="hljs-name">html</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">"pl"</span>></span>
  <span class="hljs-tag">&#x3C;<span class="hljs-name">head</span>></span>
    <span class="hljs-tag">&#x3C;<span class="hljs-name">meta</span> <span class="hljs-attr">charset</span>=<span class="hljs-string">"UTF-8"</span> /></span>
    <span class="hljs-tag">&#x3C;<span class="hljs-name">meta</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"viewport"</span> <span class="hljs-attr">content</span>=<span class="hljs-string">"width=device-width, initial-scale=1.0"</span> /></span>
    <span class="hljs-tag">&#x3C;<span class="hljs-name">title</span>></span>Internal CSS<span class="hljs-tag">&#x3C;/<span class="hljs-name">title</span>></span>
    <span class="hljs-tag">&#x3C;<span class="hljs-name">style</span>></span><span class="css">
      <span class="hljs-selector-tag">h1</span> {
        <span class="hljs-attribute">color</span>: blue;
      }
    </span><span class="hljs-tag">&#x3C;/<span class="hljs-name">style</span>></span>
  <span class="hljs-tag">&#x3C;/<span class="hljs-name">head</span>></span>
  <span class="hljs-tag">&#x3C;<span class="hljs-name">body</span>></span>
    <span class="hljs-tag">&#x3C;<span class="hljs-name">h1</span>></span>Witaj, świecie!<span class="hljs-tag">&#x3C;/<span class="hljs-name">h1</span>></span>
  <span class="hljs-tag">&#x3C;/<span class="hljs-name">body</span>></span>
<span class="hljs-tag">&#x3C;/<span class="hljs-name">html</span>></span>
</code></pre>
<h3>External CSS</h3>
<p>External CSS jest zapisany w osobnym pliku z rozszerzeniem <code>.css</code> i dołączony do dokumentu HTML za pomocą elementu <code>&#x3C;link></code>.</p>
<pre><code class="hljs language-html"><span class="hljs-comment">&#x3C;!-- index.html --></span>
<span class="hljs-meta">&#x3C;!DOCTYPE <span class="hljs-keyword">html</span>></span>
<span class="hljs-tag">&#x3C;<span class="hljs-name">html</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">"pl"</span>></span>
  <span class="hljs-tag">&#x3C;<span class="hljs-name">head</span>></span>
    <span class="hljs-tag">&#x3C;<span class="hljs-name">meta</span> <span class="hljs-attr">charset</span>=<span class="hljs-string">"UTF-8"</span> /></span>
    <span class="hljs-tag">&#x3C;<span class="hljs-name">meta</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"viewport"</span> <span class="hljs-attr">content</span>=<span class="hljs-string">"width=device-width, initial-scale=1.0"</span> /></span>
    <span class="hljs-tag">&#x3C;<span class="hljs-name">title</span>></span>External CSS<span class="hljs-tag">&#x3C;/<span class="hljs-name">title</span>></span>
    <span class="hljs-tag">&#x3C;<span class="hljs-name">link</span> <span class="hljs-attr">rel</span>=<span class="hljs-string">"stylesheet"</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"style.css"</span> /></span>
  <span class="hljs-tag">&#x3C;/<span class="hljs-name">head</span>></span>
  <span class="hljs-tag">&#x3C;<span class="hljs-name">body</span>></span>
    <span class="hljs-tag">&#x3C;<span class="hljs-name">h1</span>></span>Witaj, świecie!<span class="hljs-tag">&#x3C;/<span class="hljs-name">h1</span>></span>
  <span class="hljs-tag">&#x3C;/<span class="hljs-name">body</span>></span>
<span class="hljs-tag">&#x3C;/<span class="hljs-name">html</span>></span>
</code></pre>
<pre><code class="hljs language-css"><span class="hljs-comment">/* style.css */</span>
<span class="hljs-selector-tag">h1</span> {
  <span class="hljs-attribute">color</span>: blue;
}
</code></pre>
<h2>Podstawowe selektory CSS</h2>
<h3>Selektory elementów</h3>
<p>Selektor elementu stosuje style do wszystkich elementów danego typu.</p>
<pre><code class="hljs language-css"><span class="hljs-selector-tag">h1</span> {
  <span class="hljs-attribute">color</span>: blue;
}
</code></pre>
<h3>Selektory klas</h3>
<p>Selektor klasy stosuje style do elementów, które mają określoną klasę.</p>
<pre><code class="hljs language-html"><span class="hljs-tag">&#x3C;<span class="hljs-name">h1</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"naglowek"</span>></span>Witaj, świecie!<span class="hljs-tag">&#x3C;/<span class="hljs-name">h1</span>></span>
</code></pre>
<pre><code class="hljs language-css"><span class="hljs-selector-class">.naglowek</span> {
  <span class="hljs-attribute">color</span>: blue;
}
</code></pre>
<h3>Selektory identyfikatorów</h3>
<p>Selektor identyfikatora stosuje style do elementu z określonym identyfikatorem.</p>
<pre><code class="hljs language-html"><span class="hljs-tag">&#x3C;<span class="hljs-name">h1</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"naglowek-glowny"</span>></span>Witaj, świecie!<span class="hljs-tag">&#x3C;/<span class="hljs-name">h1</span>></span>
</code></pre>
<pre><code class="hljs language-css"><span class="hljs-selector-id">#naglowek-glowny</span> {
  <span class="hljs-attribute">color</span>: blue;
}
</code></pre>
<h2>Podstawowe właściwości CSS</h2>
<h3>Kolory</h3>
<p>Kolory można definiować za pomocą nazw kolorów, wartości szesnastkowych, RGB lub HSL.</p>
<pre><code class="hljs language-css"><span class="hljs-selector-tag">h1</span> {
  <span class="hljs-attribute">color</span>: red; <span class="hljs-comment">/* Nazwa koloru */</span>
  <span class="hljs-attribute">color</span>: <span class="hljs-number">#ff0000</span>; <span class="hljs-comment">/* Wartość szesnastkowa */</span>
  <span class="hljs-attribute">color</span>: <span class="hljs-built_in">rgb</span>(<span class="hljs-number">255</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>); <span class="hljs-comment">/* RGB */</span>
  <span class="hljs-attribute">color</span>: <span class="hljs-built_in">hsl</span>(<span class="hljs-number">0</span>, <span class="hljs-number">100%</span>, <span class="hljs-number">50%</span>); <span class="hljs-comment">/* HSL */</span>
}
</code></pre>
<h3>Tło</h3>
<p>Właściwości tła pozwalają na ustawienie koloru tła, obrazka tła, powtarzania obrazka tła, pozycji obrazka tła itp.</p>
<pre><code class="hljs language-css"><span class="hljs-selector-tag">body</span> {
  <span class="hljs-attribute">background-color</span>: lightgray; <span class="hljs-comment">/* Kolor tła */</span>
  <span class="hljs-attribute">background-image</span>: <span class="hljs-built_in">url</span>(<span class="hljs-string">"tlo.jpg"</span>); <span class="hljs-comment">/* Obrazek tła */</span>
  <span class="hljs-attribute">background-repeat</span>: no-repeat; <span class="hljs-comment">/* Brak powtarzania obrazka */</span>
  <span class="hljs-attribute">background-position</span>: center; <span class="hljs-comment">/* Pozycja obrazka */</span>
  <span class="hljs-attribute">background-size</span>: cover; <span class="hljs-comment">/* Rozmiar obrazka */</span>
}
</code></pre>
<h3>Marginesy i wypełnienia</h3>
<p>Marginesy (<code>margin</code>) i wypełnienia (<code>padding</code>) pozwalają na kontrolowanie odstępów wokół elementów.</p>
<pre><code class="hljs language-css"><span class="hljs-selector-tag">p</span> {
  <span class="hljs-attribute">margin</span>: <span class="hljs-number">20px</span>; <span class="hljs-comment">/* Margines wokół elementu */</span>
  <span class="hljs-attribute">padding</span>: <span class="hljs-number">10px</span>; <span class="hljs-comment">/* Wypełnienie wewnątrz elementu */</span>
}
</code></pre>
<h3>Ramki</h3>
<p>Właściwości ramek pozwalają na dodanie obramowania wokół elementów.</p>
<pre><code class="hljs language-css"><span class="hljs-selector-tag">div</span> {
  <span class="hljs-attribute">border</span>: <span class="hljs-number">1px</span> solid black; <span class="hljs-comment">/* Obramowanie */</span>
  <span class="hljs-attribute">border-radius</span>: <span class="hljs-number">10px</span>; <span class="hljs-comment">/* Zaokrąglone rogi */</span>
}
</code></pre>
<h2>Zadania do wykonania</h2>
<h3>Zadanie 1</h3>
<p>Stwórz stronę HTML z elementem <code>&#x3C;h1></code>, który ma kolor czerwony przy użyciu External CSS.</p>
<details>
  <summary>
    <span>Pokaż rozwiązanie</span>
  </summary>
<pre><code class="hljs language-html"><span class="hljs-comment">&#x3C;!-- index.html --></span>
<span class="hljs-meta">&#x3C;!DOCTYPE <span class="hljs-keyword">html</span>></span>
<span class="hljs-tag">&#x3C;<span class="hljs-name">html</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">"pl"</span>></span>
  <span class="hljs-tag">&#x3C;<span class="hljs-name">head</span>></span>
    <span class="hljs-tag">&#x3C;<span class="hljs-name">meta</span> <span class="hljs-attr">charset</span>=<span class="hljs-string">"UTF-8"</span> /></span>
    <span class="hljs-tag">&#x3C;<span class="hljs-name">meta</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"viewport"</span> <span class="hljs-attr">content</span>=<span class="hljs-string">"width=device-width, initial-scale=1.0"</span> /></span>
    <span class="hljs-tag">&#x3C;<span class="hljs-name">title</span>></span>Zadanie 1<span class="hljs-tag">&#x3C;/<span class="hljs-name">title</span>></span>
    <span class="hljs-tag">&#x3C;<span class="hljs-name">link</span> <span class="hljs-attr">rel</span>=<span class="hljs-string">"stylesheet"</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"style.css"</span> /></span>
  <span class="hljs-tag">&#x3C;/<span class="hljs-name">head</span>></span>
  <span class="hljs-tag">&#x3C;<span class="hljs-name">body</span>></span>
    <span class="hljs-tag">&#x3C;<span class="hljs-name">h1</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"red"</span>></span>Witaj, świecie!<span class="hljs-tag">&#x3C;/<span class="hljs-name">h1</span>></span>
  <span class="hljs-tag">&#x3C;/<span class="hljs-name">body</span>></span>
<span class="hljs-tag">&#x3C;/<span class="hljs-name">html</span>></span>
</code></pre>
<pre><code class="hljs language-css"><span class="hljs-comment">/* style.css */</span>
<span class="hljs-selector-class">.red</span> {
  <span class="hljs-attribute">color</span>: red;
}
</code></pre>
</details>
<h3>Zadanie 2</h3>
<p>Utwórz paragraf (<code>&#x3C;p></code>), który ma zielone tło, 20 pikseli wypełnienia i zaokrąglone rogi o promieniu 10 pikseli.</p>
<details>
  <summary>
    <span>Pokaż rozwiązanie</span>
  </summary>
<pre><code class="hljs language-html"><span class="hljs-comment">&#x3C;!-- index.html --></span>
<span class="hljs-meta">&#x3C;!DOCTYPE <span class="hljs-keyword">html</span>></span>
<span class="hljs-tag">&#x3C;<span class="hljs-name">html</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">"pl"</span>></span>
  <span class="hljs-tag">&#x3C;<span class="hljs-name">head</span>></span>
    <span class="hljs-tag">&#x3C;<span class="hljs-name">meta</span> <span class="hljs-attr">charset</span>=<span class="hljs-string">"UTF-8"</span> /></span>
    <span class="hljs-tag">&#x3C;<span class="hljs-name">meta</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"viewport"</span> <span class="hljs-attr">content</span>=<span class="hljs-string">"width=device-width, initial-scale=1.0"</span> /></span>
    <span class="hljs-tag">&#x3C;<span class="hljs-name">title</span>></span>Zadanie 2<span class="hljs-tag">&#x3C;/<span class="hljs-name">title</span>></span>
    <span class="hljs-tag">&#x3C;<span class="hljs-name">link</span> <span class="hljs-attr">rel</span>=<span class="hljs-string">"stylesheet"</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"style.css"</span> /></span>
  <span class="hljs-tag">&#x3C;/<span class="hljs-name">head</span>></span>
  <span class="hljs-tag">&#x3C;<span class="hljs-name">body</span>></span>
    <span class="hljs-tag">&#x3C;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"green-bg"</span>></span>To jest paragraf<span class="hljs-tag">&#x3C;/<span class="hljs-name">p</span>></span>
  <span class="hljs-tag">&#x3C;/<span class="hljs-name">body</span>></span>
<span class="hljs-tag">&#x3C;/<span class="hljs-name">html</span>></span>
</code></pre>
<pre><code class="hljs language-css"><span class="hljs-comment">/* style.css */</span>
<span class="hljs-selector-class">.green-bg</span> {
  <span class="hljs-attribute">background-color</span>: green;
  <span class="hljs-attribute">padding</span>: <span class="hljs-number">20px</span>;
  <span class="hljs-attribute">border-radius</span>: <span class="hljs-number">10px</span>;
}
</code></pre>
</details>
<h3>Zadanie 3</h3>
<p>Stwórz div, który ma niebieską ramkę o grubości 2 pikseli, a wewnątrz niego umieść tekst "To jest div".</p>
<details>
  <summary>
    <span>Pokaż rozwiązanie</span>
  </summary>
<pre><code class="hljs language-html"><span class="hljs-comment">&#x3C;!-- index.html --></span>
<span class="hljs-meta">&#x3C;!DOCTYPE <span class="hljs-keyword">html</span>></span>
<span class="hljs-tag">&#x3C;<span class="hljs-name">html</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">"pl"</span>></span>
  <span class="hljs-tag">&#x3C;<span class="hljs-name">head</span>></span>
    <span class="hljs-tag">&#x3C;<span class="hljs-name">meta</span> <span class="hljs-attr">charset</span>=<span class="hljs-string">"UTF-8"</span> /></span>
    <span class="hljs-tag">&#x3C;<span class="hljs-name">meta</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"viewport"</span> <span class="hljs-attr">content</span>=<span class="hljs-string">"width=device-width, initial-scale=1.0"</span> /></span>
    <span class="hljs-tag">&#x3C;<span class="hljs-name">title</span>></span>Zadanie 3<span class="hljs-tag">&#x3C;/<span class="hljs-name">title</span>></span>
    <span class="hljs-tag">&#x3C;<span class="hljs-name">link</span> <span class="hljs-attr">rel</span>=<span class="hljs-string">"stylesheet"</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"style.css"</span> /></span>
  <span class="hljs-tag">&#x3C;/<span class="hljs-name">head</span>></span>
  <span class="hljs-tag">&#x3C;<span class="hljs-name">body</span>></span>
    <span class="hljs-tag">&#x3C;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"blue-border"</span>></span>To jest div<span class="hljs-tag">&#x3C;/<span class="hljs-name">div</span>></span>
  <span class="hljs-tag">&#x3C;/<span class="hljs-name">body</span>></span>
<span class="hljs-tag">&#x3C;/<span class="hljs-name">html</span>></span>
</code></pre>
<pre><code class="hljs language-css"><span class="hljs-comment">/* style.css */</span>
<span class="hljs-selector-class">.blue-border</span> {
  <span class="hljs-attribute">border</span>: <span class="hljs-number">2px</span> solid blue;
}
</code></pre>
</details>
<h3>Zadanie 4</h3>
<p>Utwórz stronę HTML z trzema nagłówkami (<code>&#x3C;h1></code>, <code>&#x3C;h2></code>, <code>&#x3C;h3></code>) o różnych kolorach za pomocą selektorów klas.</p>
<details>
  <summary>
    <span>Pokaż rozwiązanie</span>
  </summary>
<pre><code class="hljs language-html"><span class="hljs-comment">&#x3C;!-- index.html --></span>
<span class="hljs-meta">&#x3C;!DOCTYPE <span class="hljs-keyword">html</span>></span>
<span class="hljs-tag">&#x3C;<span class="hljs-name">html</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">"pl"</span>></span>
  <span class="hljs-tag">&#x3C;<span class="hljs-name">head</span>></span>
    <span class="hljs-tag">&#x3C;<span class="hljs-name">meta</span> <span class="hljs-attr">charset</span>=<span class="hljs-string">"UTF-8"</span> /></span>
    <span class="hljs-tag">&#x3C;<span class="hljs-name">meta</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"viewport"</span> <span class="hljs-attr">content</span>=<span class="hljs-string">"width=device-width, initial-scale=1.0"</span> /></span>
    <span class="hljs-tag">&#x3C;<span class="hljs-name">title</span>></span>Zadanie 4<span class="hljs-tag">&#x3C;/<span class="hljs-name">title</span>></span>
    <span class="hljs-tag">&#x3C;<span class="hljs-name">link</span> <span class="hljs-attr">rel</span>=<span class="hljs-string">"stylesheet"</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"style.css"</span> /></span>
  <span class="hljs-tag">&#x3C;/<span class="hljs-name">head</span>></span>
  <span class="hljs-tag">&#x3C;<span class="hljs-name">body</span>></span>
    <span class="hljs-tag">&#x3C;<span class="hljs-name">h1</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"red"</span>></span>Nagłówek 1<span class="hljs-tag">&#x3C;/<span class="hljs-name">h1</span>></span>
    <span class="hljs-tag">&#x3C;<span class="hljs-name">h2</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"blue"</span>></span>Nagłówek 2<span class="hljs-tag">&#x3C;/<span class="hljs-name">h2</span>></span>
    <span class="hljs-tag">&#x3C;<span class="hljs-name">h3</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"green"</span>></span>Nagłówek 3<span class="hljs-tag">&#x3C;/<span class="hljs-name">h3</span>></span>
  <span class="hljs-tag">&#x3C;/<span class="hljs-name">body</span>></span>
<span class="hljs-tag">&#x3C;/<span class="hljs-name">html</span>></span>
</code></pre>
<pre><code class="hljs language-css"><span class="hljs-comment">/* style.css */</span>
<span class="hljs-selector-class">.red</span> {
  <span class="hljs-attribute">color</span>: red;
}

<span class="hljs-selector-class">.blue</span> {
  <span class="hljs-attribute">color</span>: blue;
}

<span class="hljs-selector-class">.green</span> {
  <span class="hljs-attribute">color</span>: green;
}
</code></pre>
</details>
<p>To tyle na temat podstaw CSS! Zachęcam do dalszego eksperymentowania i zgłębiania tego tematu, aby tworzyć bardziej zaawansowane i estetyczne strony internetowe.</p>`,title:"Wprowadzenie do CSS",description:"CSS (Cascading Style Sheets) to język służący do opisywania wyglądu i formatu dokumentu HTML. CSS pozwala na oddzielenie treści od prezentacji, co umożliwia tworzenie estetycznych i spójnych stron internetowych. W tym kursie omówimy podstawy CSS, w tym selektory, właściwości, sposoby załączania CSS do HTML oraz JavaScript, a także przedstawimy kilka zadań do wykonania.",keywords:["css","html","kurs","wprowadzenie","przewodnik","web","frontend"],categories:["wprowadzenie","css"],createdAt:"2024-06-30T00:00:00.000Z"};export{s as default};
