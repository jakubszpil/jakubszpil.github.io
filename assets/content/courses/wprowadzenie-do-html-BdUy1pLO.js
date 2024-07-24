const s={id:"7a99e831-90ac-4669-9088-5f58febb2336",slug:"wprowadzenie-do-html",content:`<h2>Co to jest HTML?</h2>
<p>HTML (HyperText Markup Language) to podstawowy język wykorzystywany do tworzenia i strukturyzowania stron internetowych. HTML używa elementów, które definiują różne części dokumentu, takie jak nagłówki, akapity, linki, obrazy, i wiele innych.</p>
<h2>Podstawowa struktura dokumentu HTML</h2>
<p>Każdy dokument HTML ma określoną strukturę, która składa się z kilku kluczowych elementów:</p>
<pre><code class="hljs language-html"><span class="hljs-meta">&#x3C;!DOCTYPE <span class="hljs-keyword">html</span>></span>
<span class="hljs-tag">&#x3C;<span class="hljs-name">html</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">"pl"</span>></span>
  <span class="hljs-tag">&#x3C;<span class="hljs-name">head</span>></span>
    <span class="hljs-tag">&#x3C;<span class="hljs-name">meta</span> <span class="hljs-attr">charset</span>=<span class="hljs-string">"UTF-8"</span> /></span>
    <span class="hljs-tag">&#x3C;<span class="hljs-name">meta</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"viewport"</span> <span class="hljs-attr">content</span>=<span class="hljs-string">"width=device-width, initial-scale=1.0"</span> /></span>
    <span class="hljs-tag">&#x3C;<span class="hljs-name">title</span>></span>Tytuł strony<span class="hljs-tag">&#x3C;/<span class="hljs-name">title</span>></span>
  <span class="hljs-tag">&#x3C;/<span class="hljs-name">head</span>></span>
  <span class="hljs-tag">&#x3C;<span class="hljs-name">body</span>></span>
    <span class="hljs-tag">&#x3C;<span class="hljs-name">h1</span>></span>Witaj, świecie!<span class="hljs-tag">&#x3C;/<span class="hljs-name">h1</span>></span>
    <span class="hljs-tag">&#x3C;<span class="hljs-name">p</span>></span>To jest przykładowa strona HTML.<span class="hljs-tag">&#x3C;/<span class="hljs-name">p</span>></span>
  <span class="hljs-tag">&#x3C;/<span class="hljs-name">body</span>></span>
<span class="hljs-tag">&#x3C;/<span class="hljs-name">html</span>></span>
</code></pre>
<h3>Wyjaśnienie struktury</h3>
<ul>
<li><code>&#x3C;!DOCTYPE html></code>: Deklaracja typu dokumentu określająca, że dokument jest w HTML5.</li>
<li><code>&#x3C;html></code>: Korzeń dokumentu HTML.</li>
<li><code>&#x3C;head></code>: Zawiera meta informacje o dokumencie, takie jak kodowanie znaków i tytuł strony.</li>
<li><code>&#x3C;meta charset="UTF-8"></code>: Określa kodowanie znaków dokumentu.</li>
<li><code>&#x3C;meta name="viewport" content="width=device-width, initial-scale=1.0"></code>: Zapewnia poprawne wyświetlanie na urządzeniach mobilnych.</li>
<li><code>&#x3C;title></code>: Tytuł strony wyświetlany na karcie przeglądarki.</li>
<li><code>&#x3C;body></code>: Zawiera treść strony, która jest widoczna dla użytkownika.</li>
</ul>
<h2>Podstawowe elementy HTML</h2>
<h3>Nagłówki</h3>
<p>HTML posiada sześć poziomów nagłówków, od <code>&#x3C;h1></code> do <code>&#x3C;h6></code>, gdzie <code>&#x3C;h1></code> jest najważniejszym nagłówkiem, a <code>&#x3C;h6></code> najmniej ważnym.</p>
<pre><code class="hljs language-html"><span class="hljs-tag">&#x3C;<span class="hljs-name">h1</span>></span>Najważniejszy nagłówek<span class="hljs-tag">&#x3C;/<span class="hljs-name">h1</span>></span>
<span class="hljs-tag">&#x3C;<span class="hljs-name">h2</span>></span>Drugi poziom nagłówka<span class="hljs-tag">&#x3C;/<span class="hljs-name">h2</span>></span>
<span class="hljs-tag">&#x3C;<span class="hljs-name">h3</span>></span>Trzeci poziom nagłówka<span class="hljs-tag">&#x3C;/<span class="hljs-name">h3</span>></span>
</code></pre>
<h3>Akapity</h3>
<p>Akapity są tworzone za pomocą elementu <code>&#x3C;p></code>.</p>
<pre><code class="hljs language-html"><span class="hljs-tag">&#x3C;<span class="hljs-name">p</span>></span>To jest akapit tekstu.<span class="hljs-tag">&#x3C;/<span class="hljs-name">p</span>></span>
</code></pre>
<h3>Linki</h3>
<p>Linki są tworzone za pomocą elementu <code>&#x3C;a></code>, który zawiera atrybut <code>href</code> określający adres URL.</p>
<pre><code class="hljs language-html"><span class="hljs-tag">&#x3C;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"https://www.example.com"</span>></span>Kliknij tutaj, aby przejść do Example<span class="hljs-tag">&#x3C;/<span class="hljs-name">a</span>></span>
</code></pre>
<h3>Obrazy</h3>
<p>Obrazy są dodawane za pomocą elementu <code>&#x3C;img></code>, który zawiera atrybut <code>src</code> wskazujący na źródło obrazu oraz <code>alt</code> opisujący obraz.</p>
<pre><code class="hljs language-html"><span class="hljs-tag">&#x3C;<span class="hljs-name">img</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"obrazek.jpg"</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">"Opis obrazka"</span> /></span>
</code></pre>
<h3>Listy</h3>
<p>Listy nieuporządkowane (<code>&#x3C;ul></code>) i uporządkowane (<code>&#x3C;ol></code>) zawierają elementy listy (<code>&#x3C;li></code>).</p>
<pre><code class="hljs language-html"><span class="hljs-tag">&#x3C;<span class="hljs-name">ul</span>></span>
  <span class="hljs-tag">&#x3C;<span class="hljs-name">li</span>></span>Element listy 1<span class="hljs-tag">&#x3C;/<span class="hljs-name">li</span>></span>
  <span class="hljs-tag">&#x3C;<span class="hljs-name">li</span>></span>Element listy 2<span class="hljs-tag">&#x3C;/<span class="hljs-name">li</span>></span>
  <span class="hljs-tag">&#x3C;<span class="hljs-name">li</span>></span>Element listy 3<span class="hljs-tag">&#x3C;/<span class="hljs-name">li</span>></span>
<span class="hljs-tag">&#x3C;/<span class="hljs-name">ul</span>></span>

<span class="hljs-tag">&#x3C;<span class="hljs-name">ol</span>></span>
  <span class="hljs-tag">&#x3C;<span class="hljs-name">li</span>></span>Element listy 1<span class="hljs-tag">&#x3C;/<span class="hljs-name">li</span>></span>
  <span class="hljs-tag">&#x3C;<span class="hljs-name">li</span>></span>Element listy 2<span class="hljs-tag">&#x3C;/<span class="hljs-name">li</span>></span>
  <span class="hljs-tag">&#x3C;<span class="hljs-name">li</span>></span>Element listy 3<span class="hljs-tag">&#x3C;/<span class="hljs-name">li</span>></span>
<span class="hljs-tag">&#x3C;/<span class="hljs-name">ol</span>></span>
</code></pre>
<h2>Formularze</h2>
<p>Formularze są tworzone za pomocą elementu <code>&#x3C;form></code>, który zawiera różne elementy wejściowe, takie jak pola tekstowe (<code>&#x3C;input></code>), pola wyboru (<code>&#x3C;input type="checkbox"></code>), przyciski radio (<code>&#x3C;input type="radio"></code>), i przyciski (<code>&#x3C;button></code>).</p>
<pre><code class="hljs language-html"><span class="hljs-tag">&#x3C;<span class="hljs-name">form</span> <span class="hljs-attr">action</span>=<span class="hljs-string">"/submit-form"</span> <span class="hljs-attr">method</span>=<span class="hljs-string">"post"</span>></span>
  <span class="hljs-tag">&#x3C;<span class="hljs-name">label</span> <span class="hljs-attr">for</span>=<span class="hljs-string">"name"</span>></span>Nazwa:<span class="hljs-tag">&#x3C;/<span class="hljs-name">label</span>></span>
  <span class="hljs-tag">&#x3C;<span class="hljs-name">input</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"text"</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"name"</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"name"</span> /></span>
  <span class="hljs-tag">&#x3C;<span class="hljs-name">input</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"submit"</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"Wyślij"</span> /></span>
<span class="hljs-tag">&#x3C;/<span class="hljs-name">form</span>></span>
</code></pre>
<h2>Zadania do wykonania</h2>
<h3>Zadanie 1</h3>
<p>Utwórz stronę HTML, która zawiera:</p>
<ul>
<li>Nagłówek <code>&#x3C;h1></code> z tytułem "Moja pierwsza strona".</li>
<li>Akapit z krótkim opisem.</li>
<li>Link do dowolnej strony internetowej.</li>
</ul>
<details>
  <summary>
    <span>Pokaż rozwiązanie</span>
  </summary>
<pre><code class="hljs language-html"><span class="hljs-meta">&#x3C;!DOCTYPE <span class="hljs-keyword">html</span>></span>
<span class="hljs-tag">&#x3C;<span class="hljs-name">html</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">"pl"</span>></span>
  <span class="hljs-tag">&#x3C;<span class="hljs-name">head</span>></span>
    <span class="hljs-tag">&#x3C;<span class="hljs-name">meta</span> <span class="hljs-attr">charset</span>=<span class="hljs-string">"UTF-8"</span> /></span>
    <span class="hljs-tag">&#x3C;<span class="hljs-name">meta</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"viewport"</span> <span class="hljs-attr">content</span>=<span class="hljs-string">"width=device-width, initial-scale=1.0"</span> /></span>
    <span class="hljs-tag">&#x3C;<span class="hljs-name">title</span>></span>Moja pierwsza strona<span class="hljs-tag">&#x3C;/<span class="hljs-name">title</span>></span>
  <span class="hljs-tag">&#x3C;/<span class="hljs-name">head</span>></span>
  <span class="hljs-tag">&#x3C;<span class="hljs-name">body</span>></span>
    <span class="hljs-tag">&#x3C;<span class="hljs-name">h1</span>></span>Moja pierwsza strona<span class="hljs-tag">&#x3C;/<span class="hljs-name">h1</span>></span>
    <span class="hljs-tag">&#x3C;<span class="hljs-name">p</span>></span>To jest krótki opis mojej pierwszej strony internetowej.<span class="hljs-tag">&#x3C;/<span class="hljs-name">p</span>></span>
    <span class="hljs-tag">&#x3C;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"https://www.example.com"</span>></span>Kliknij tutaj, aby przejść do Example<span class="hljs-tag">&#x3C;/<span class="hljs-name">a</span>></span>
  <span class="hljs-tag">&#x3C;/<span class="hljs-name">body</span>></span>
<span class="hljs-tag">&#x3C;/<span class="hljs-name">html</span>></span>
</code></pre>
</details>
<h3>Zadanie 2</h3>
<p>Utwórz stronę HTML, która zawiera:</p>
<ul>
<li>Obrazek z atrybutem <code>src</code> wskazującym na dowolny obrazek z internetu.</li>
<li>Alternatywny tekst opisujący obrazek.</li>
</ul>
<details>
  <summary>
    <span>Pokaż rozwiązanie</span>
  </summary>
<pre><code class="hljs language-html"><span class="hljs-meta">&#x3C;!DOCTYPE <span class="hljs-keyword">html</span>></span>
<span class="hljs-tag">&#x3C;<span class="hljs-name">html</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">"pl"</span>></span>
  <span class="hljs-tag">&#x3C;<span class="hljs-name">head</span>></span>
    <span class="hljs-tag">&#x3C;<span class="hljs-name">meta</span> <span class="hljs-attr">charset</span>=<span class="hljs-string">"UTF-8"</span> /></span>
    <span class="hljs-tag">&#x3C;<span class="hljs-name">meta</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"viewport"</span> <span class="hljs-attr">content</span>=<span class="hljs-string">"width=device-width, initial-scale=1.0"</span> /></span>
    <span class="hljs-tag">&#x3C;<span class="hljs-name">title</span>></span>Strona z obrazkiem<span class="hljs-tag">&#x3C;/<span class="hljs-name">title</span>></span>
  <span class="hljs-tag">&#x3C;/<span class="hljs-name">head</span>></span>
  <span class="hljs-tag">&#x3C;<span class="hljs-name">body</span>></span>
    <span class="hljs-tag">&#x3C;<span class="hljs-name">img</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"https://via.placeholder.com/150"</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">"Przykładowy obrazek"</span> /></span>
  <span class="hljs-tag">&#x3C;/<span class="hljs-name">body</span>></span>
<span class="hljs-tag">&#x3C;/<span class="hljs-name">html</span>></span>
</code></pre>
</details>
<h3>Zadanie 3</h3>
<p>Utwórz stronę HTML, która zawiera:</p>
<ul>
<li>Listę nieuporządkowaną z trzema ulubionymi potrawami.</li>
<li>Listę uporządkowaną z trzema krokami do ugotowania jednego z tych potraw.</li>
</ul>
<details>
  <summary>
    <span>Pokaż rozwiązanie</span>
  </summary>
<pre><code class="hljs language-html"><span class="hljs-meta">&#x3C;!DOCTYPE <span class="hljs-keyword">html</span>></span>
<span class="hljs-tag">&#x3C;<span class="hljs-name">html</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">"pl"</span>></span>
  <span class="hljs-tag">&#x3C;<span class="hljs-name">head</span>></span>
    <span class="hljs-tag">&#x3C;<span class="hljs-name">meta</span> <span class="hljs-attr">charset</span>=<span class="hljs-string">"UTF-8"</span> /></span>
    <span class="hljs-tag">&#x3C;<span class="hljs-name">meta</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"viewport"</span> <span class="hljs-attr">content</span>=<span class="hljs-string">"width=device-width, initial-scale=1.0"</span> /></span>
    <span class="hljs-tag">&#x3C;<span class="hljs-name">title</span>></span>Lista potraw<span class="hljs-tag">&#x3C;/<span class="hljs-name">title</span>></span>
  <span class="hljs-tag">&#x3C;/<span class="hljs-name">head</span>></span>
  <span class="hljs-tag">&#x3C;<span class="hljs-name">body</span>></span>
    <span class="hljs-tag">&#x3C;<span class="hljs-name">h1</span>></span>Moje ulubione potrawy<span class="hljs-tag">&#x3C;/<span class="hljs-name">h1</span>></span>
    <span class="hljs-tag">&#x3C;<span class="hljs-name">ul</span>></span>
      <span class="hljs-tag">&#x3C;<span class="hljs-name">li</span>></span>Pizza<span class="hljs-tag">&#x3C;/<span class="hljs-name">li</span>></span>
      <span class="hljs-tag">&#x3C;<span class="hljs-name">li</span>></span>Sushi<span class="hljs-tag">&#x3C;/<span class="hljs-name">li</span>></span>
      <span class="hljs-tag">&#x3C;<span class="hljs-name">li</span>></span>Spaghetti<span class="hljs-tag">&#x3C;/<span class="hljs-name">li</span>></span>
    <span class="hljs-tag">&#x3C;/<span class="hljs-name">ul</span>></span>
    <span class="hljs-tag">&#x3C;<span class="hljs-name">h2</span>></span>Jak ugotować spaghetti<span class="hljs-tag">&#x3C;/<span class="hljs-name">h2</span>></span>
    <span class="hljs-tag">&#x3C;<span class="hljs-name">ol</span>></span>
      <span class="hljs-tag">&#x3C;<span class="hljs-name">li</span>></span>Ugotuj makaron.<span class="hljs-tag">&#x3C;/<span class="hljs-name">li</span>></span>
      <span class="hljs-tag">&#x3C;<span class="hljs-name">li</span>></span>Przygotuj sos pomidorowy.<span class="hljs-tag">&#x3C;/<span class="hljs-name">li</span>></span>
      <span class="hljs-tag">&#x3C;<span class="hljs-name">li</span>></span>Wymieszaj makaron z sosem.<span class="hljs-tag">&#x3C;/<span class="hljs-name">li</span>></span>
    <span class="hljs-tag">&#x3C;/<span class="hljs-name">ol</span>></span>
  <span class="hljs-tag">&#x3C;/<span class="hljs-name">body</span>></span>
<span class="hljs-tag">&#x3C;/<span class="hljs-name">html</span>></span>
</code></pre>
</details>
<h3>Zadanie 4</h3>
<p>Utwórz formularz HTML, który zawiera:</p>
<ul>
<li>Pole tekstowe do wprowadzenia imienia.</li>
<li>Pole typu radio do wyboru płci.</li>
<li>Pole typu checkbox do zaznaczenia zgody na przetwarzanie danych.</li>
<li>Przycisk do wysłania formularza.</li>
</ul>
<details>
  <summary>
    <span>Pokaż rozwiązanie</span>
  </summary>
<pre><code class="hljs language-html"><span class="hljs-meta">&#x3C;!DOCTYPE <span class="hljs-keyword">html</span>></span>
<span class="hljs-tag">&#x3C;<span class="hljs-name">html</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">"pl"</span>></span>
  <span class="hljs-tag">&#x3C;<span class="hljs-name">head</span>></span>
    <span class="hljs-tag">&#x3C;<span class="hljs-name">meta</span> <span class="hljs-attr">charset</span>=<span class="hljs-string">"UTF-8"</span> /></span>
    <span class="hljs-tag">&#x3C;<span class="hljs-name">meta</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"viewport"</span> <span class="hljs-attr">content</span>=<span class="hljs-string">"width=device-width, initial-scale=1.0"</span> /></span>
    <span class="hljs-tag">&#x3C;<span class="hljs-name">title</span>></span>Formularz<span class="hljs-tag">&#x3C;/<span class="hljs-name">title</span>></span>
  <span class="hljs-tag">&#x3C;/<span class="hljs-name">head</span>></span>
  <span class="hljs-tag">&#x3C;<span class="hljs-name">body</span>></span>
    <span class="hljs-tag">&#x3C;<span class="hljs-name">form</span> <span class="hljs-attr">action</span>=<span class="hljs-string">"/submit-form"</span> <span class="hljs-attr">method</span>=<span class="hljs-string">"post"</span>></span>
      <span class="hljs-tag">&#x3C;<span class="hljs-name">label</span> <span class="hljs-attr">for</span>=<span class="hljs-string">"name"</span>></span>Imię:<span class="hljs-tag">&#x3C;/<span class="hljs-name">label</span>></span>
      <span class="hljs-tag">&#x3C;<span class="hljs-name">input</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"text"</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"name"</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"name"</span> /></span><span class="hljs-tag">&#x3C;<span class="hljs-name">br</span> /></span><span class="hljs-tag">&#x3C;<span class="hljs-name">br</span> /></span>

      <span class="hljs-tag">&#x3C;<span class="hljs-name">label</span>></span>Płeć:<span class="hljs-tag">&#x3C;/<span class="hljs-name">label</span>></span>
      <span class="hljs-tag">&#x3C;<span class="hljs-name">input</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"radio"</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"male"</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"gender"</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"male"</span> /></span>
      <span class="hljs-tag">&#x3C;<span class="hljs-name">label</span> <span class="hljs-attr">for</span>=<span class="hljs-string">"male"</span>></span>Mężczyzna<span class="hljs-tag">&#x3C;/<span class="hljs-name">label</span>></span>
      <span class="hljs-tag">&#x3C;<span class="hljs-name">input</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"radio"</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"female"</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"gender"</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"female"</span> /></span>
      <span class="hljs-tag">&#x3C;<span class="hljs-name">label</span> <span class="hljs-attr">for</span>=<span class="hljs-string">"female"</span>></span>Kobieta<span class="hljs-tag">&#x3C;/<span class="hljs-name">label</span>></span><span class="hljs-tag">&#x3C;<span class="hljs-name">br</span> /></span><span class="hljs-tag">&#x3C;<span class="hljs-name">br</span> /></span>

      <span class="hljs-tag">&#x3C;<span class="hljs-name">input</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"checkbox"</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"consent"</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"consent"</span> /></span>
      <span class="hljs-tag">&#x3C;<span class="hljs-name">label</span> <span class="hljs-attr">for</span>=<span class="hljs-string">"consent"</span>></span>Zgadzam się na przetwarzanie danych osobowych&#x3C;/label
      ><span class="hljs-tag">&#x3C;<span class="hljs-name">br</span> /></span><span class="hljs-tag">&#x3C;<span class="hljs-name">br</span> /></span>

      <span class="hljs-tag">&#x3C;<span class="hljs-name">input</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"submit"</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"Wyślij"</span> /></span>
    <span class="hljs-tag">&#x3C;/<span class="hljs-name">form</span>></span>
  <span class="hljs-tag">&#x3C;/<span class="hljs-name">body</span>></span>
<span class="hljs-tag">&#x3C;/<span class="hljs-name">html</span>></span>
</code></pre>
</details>
<p>To tyle na temat podstaw HTML! Zachęcam do dalszego eksperymentowania i zgłębiania tego tematu, aby tworzyć bardziej złożone i interaktywne strony internetowe.</p>`,title:"Wprowadzenie do HTML",description:"Co to jest HTML? HTML (HyperText Markup Language) to podstawowy język wykorzystywany do tworzenia i strukturyzowania stron internetowych. HTML używa elementów, które definiują różne części dokumentu, takie jak nagłówki, akapity, linki, obrazy, i wiele innych.",keywords:["kurs","html","dom","struktura","wprowadzenie"],categories:["wprowadzenie","html"],createdAt:"2024-06-30T00:00:00.000Z"};export{s as default};
