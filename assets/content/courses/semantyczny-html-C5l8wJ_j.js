const s={id:"23d4934a-de04-4bd6-bf78-984256ed6684",slug:"semantyczny-html",content:`<h2>Czym jest semantyczny HTML?</h2>
<p>Semantyczny HTML polega na używaniu elementów HTML, które jednoznacznie opisują swoje znaczenie i cel. Elementy semantyczne nie tylko definiują strukturę dokumentu, ale również pomagają w interpretacji jego zawartości zarówno przez przeglądarki, jak i przez wyszukiwarki internetowe oraz technologie wspomagające (np. czytniki ekranowe).</p>
<h2>Zalety używania semantycznego HTML</h2>
<ol>
<li><strong>Lepsza czytelność kodu:</strong> Semantyczne elementy HTML sprawiają, że kod jest bardziej zrozumiały zarówno dla programistów, jak i dla narzędzi analitycznych.</li>
<li><strong>SEO:</strong> Wyszukiwarki internetowe lepiej rozumieją i indeksują semantyczny HTML, co może pozytywnie wpłynąć na pozycjonowanie strony.</li>
<li><strong>Dostępność:</strong> Technologie wspomagające, takie jak czytniki ekranowe, mogą lepiej interpretować i nawigować po treści semantycznie oznaczonej.</li>
<li><strong>Łatwiejsza konserwacja:</strong> Strony z semantycznym HTML są bardziej uporządkowane, co ułatwia ich modyfikację i utrzymanie.</li>
</ol>
<h2>Semantyczne elementy HTML</h2>
<h3><code>&#x3C;!DOCTYPE html></code></h3>
<p>Deklaracja typu dokumentu HTML5, która informuje przeglądarkę o wersji HTML używanej w dokumencie.</p>
<pre><code class="hljs language-html"><span class="hljs-meta">&#x3C;!DOCTYPE <span class="hljs-keyword">html</span>></span>
<span class="hljs-tag">&#x3C;<span class="hljs-name">html</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">"pl"</span>></span>
  <span class="hljs-tag">&#x3C;<span class="hljs-name">head</span>></span>
    <span class="hljs-tag">&#x3C;<span class="hljs-name">meta</span> <span class="hljs-attr">charset</span>=<span class="hljs-string">"UTF-8"</span> /></span>
    <span class="hljs-tag">&#x3C;<span class="hljs-name">meta</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"viewport"</span> <span class="hljs-attr">content</span>=<span class="hljs-string">"width=device-width, initial-scale=1.0"</span> /></span>
    <span class="hljs-tag">&#x3C;<span class="hljs-name">title</span>></span>Semantyczny HTML<span class="hljs-tag">&#x3C;/<span class="hljs-name">title</span>></span>
  <span class="hljs-tag">&#x3C;/<span class="hljs-name">head</span>></span>
  <span class="hljs-tag">&#x3C;<span class="hljs-name">body</span>></span>
    <span class="hljs-comment">&#x3C;!-- Zawartość strony --></span>
  <span class="hljs-tag">&#x3C;/<span class="hljs-name">body</span>></span>
<span class="hljs-tag">&#x3C;/<span class="hljs-name">html</span>></span>
</code></pre>
<h3><code>&#x3C;header></code></h3>
<p>Zawiera wprowadzenie lub zestaw linków nawigacyjnych.</p>
<pre><code class="hljs language-html"><span class="hljs-tag">&#x3C;<span class="hljs-name">header</span>></span>
  <span class="hljs-tag">&#x3C;<span class="hljs-name">h1</span>></span>Tytuł strony<span class="hljs-tag">&#x3C;/<span class="hljs-name">h1</span>></span>
  <span class="hljs-tag">&#x3C;<span class="hljs-name">nav</span>></span>
    <span class="hljs-tag">&#x3C;<span class="hljs-name">ul</span>></span>
      <span class="hljs-tag">&#x3C;<span class="hljs-name">li</span>></span><span class="hljs-tag">&#x3C;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"#home"</span>></span>Home<span class="hljs-tag">&#x3C;/<span class="hljs-name">a</span>></span><span class="hljs-tag">&#x3C;/<span class="hljs-name">li</span>></span>
      <span class="hljs-tag">&#x3C;<span class="hljs-name">li</span>></span><span class="hljs-tag">&#x3C;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"#about"</span>></span>About<span class="hljs-tag">&#x3C;/<span class="hljs-name">a</span>></span><span class="hljs-tag">&#x3C;/<span class="hljs-name">li</span>></span>
      <span class="hljs-tag">&#x3C;<span class="hljs-name">li</span>></span><span class="hljs-tag">&#x3C;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"#contact"</span>></span>Contact<span class="hljs-tag">&#x3C;/<span class="hljs-name">a</span>></span><span class="hljs-tag">&#x3C;/<span class="hljs-name">li</span>></span>
    <span class="hljs-tag">&#x3C;/<span class="hljs-name">ul</span>></span>
  <span class="hljs-tag">&#x3C;/<span class="hljs-name">nav</span>></span>
<span class="hljs-tag">&#x3C;/<span class="hljs-name">header</span>></span>
</code></pre>
<h3><code>&#x3C;nav></code></h3>
<p>Definiuje blok nawigacyjny, zawierający linki do innych części strony lub do innych stron.</p>
<pre><code class="hljs language-html"><span class="hljs-tag">&#x3C;<span class="hljs-name">nav</span>></span>
  <span class="hljs-tag">&#x3C;<span class="hljs-name">ul</span>></span>
    <span class="hljs-tag">&#x3C;<span class="hljs-name">li</span>></span><span class="hljs-tag">&#x3C;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"#home"</span>></span>Home<span class="hljs-tag">&#x3C;/<span class="hljs-name">a</span>></span><span class="hljs-tag">&#x3C;/<span class="hljs-name">li</span>></span>
    <span class="hljs-tag">&#x3C;<span class="hljs-name">li</span>></span><span class="hljs-tag">&#x3C;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"#about"</span>></span>About<span class="hljs-tag">&#x3C;/<span class="hljs-name">a</span>></span><span class="hljs-tag">&#x3C;/<span class="hljs-name">li</span>></span>
    <span class="hljs-tag">&#x3C;<span class="hljs-name">li</span>></span><span class="hljs-tag">&#x3C;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"#contact"</span>></span>Contact<span class="hljs-tag">&#x3C;/<span class="hljs-name">a</span>></span><span class="hljs-tag">&#x3C;/<span class="hljs-name">li</span>></span>
  <span class="hljs-tag">&#x3C;/<span class="hljs-name">ul</span>></span>
<span class="hljs-tag">&#x3C;/<span class="hljs-name">nav</span>></span>
</code></pre>
<h3><code>&#x3C;main></code></h3>
<p>Reprezentuje główną zawartość dokumentu. Powinien być unikalny i zawierać główny temat strony.</p>
<pre><code class="hljs language-html"><span class="hljs-tag">&#x3C;<span class="hljs-name">main</span>></span>
  <span class="hljs-tag">&#x3C;<span class="hljs-name">article</span>></span>
    <span class="hljs-tag">&#x3C;<span class="hljs-name">h2</span>></span>Artykuł<span class="hljs-tag">&#x3C;/<span class="hljs-name">h2</span>></span>
    <span class="hljs-tag">&#x3C;<span class="hljs-name">p</span>></span>Treść artykułu...<span class="hljs-tag">&#x3C;/<span class="hljs-name">p</span>></span>
  <span class="hljs-tag">&#x3C;/<span class="hljs-name">article</span>></span>
<span class="hljs-tag">&#x3C;/<span class="hljs-name">main</span>></span>
</code></pre>
<h3><code>&#x3C;article></code></h3>
<p>Oznacza samodzielną jednostkę treści, która mogłaby być dystrybuowana niezależnie.</p>
<pre><code class="hljs language-html"><span class="hljs-tag">&#x3C;<span class="hljs-name">article</span>></span>
  <span class="hljs-tag">&#x3C;<span class="hljs-name">h2</span>></span>Artykuł<span class="hljs-tag">&#x3C;/<span class="hljs-name">h2</span>></span>
  <span class="hljs-tag">&#x3C;<span class="hljs-name">p</span>></span>Treść artykułu...<span class="hljs-tag">&#x3C;/<span class="hljs-name">p</span>></span>
<span class="hljs-tag">&#x3C;/<span class="hljs-name">article</span>></span>
</code></pre>
<h3><code>&#x3C;section></code></h3>
<p>Reprezentuje sekcję dokumentu, która zawiera grupę treści o podobnym temacie.</p>
<pre><code class="hljs language-html"><span class="hljs-tag">&#x3C;<span class="hljs-name">section</span>></span>
  <span class="hljs-tag">&#x3C;<span class="hljs-name">h2</span>></span>Sekcja<span class="hljs-tag">&#x3C;/<span class="hljs-name">h2</span>></span>
  <span class="hljs-tag">&#x3C;<span class="hljs-name">p</span>></span>Treść sekcji...<span class="hljs-tag">&#x3C;/<span class="hljs-name">p</span>></span>
<span class="hljs-tag">&#x3C;/<span class="hljs-name">section</span>></span>
</code></pre>
<h3><code>&#x3C;aside></code></h3>
<p>Oznacza sekcję, która zawiera treści mniej istotne lub dodatkowe w stosunku do głównej treści.</p>
<pre><code class="hljs language-html"><span class="hljs-tag">&#x3C;<span class="hljs-name">aside</span>></span>
  <span class="hljs-tag">&#x3C;<span class="hljs-name">h2</span>></span>Sidebar<span class="hljs-tag">&#x3C;/<span class="hljs-name">h2</span>></span>
  <span class="hljs-tag">&#x3C;<span class="hljs-name">p</span>></span>Informacje poboczne...<span class="hljs-tag">&#x3C;/<span class="hljs-name">p</span>></span>
<span class="hljs-tag">&#x3C;/<span class="hljs-name">aside</span>></span>
</code></pre>
<h3><code>&#x3C;footer></code></h3>
<p>Zawiera informacje o autorze, prawa autorskie, linki do polityki prywatności itp.</p>
<pre><code class="hljs language-html"><span class="hljs-tag">&#x3C;<span class="hljs-name">footer</span>></span>
  <span class="hljs-tag">&#x3C;<span class="hljs-name">p</span>></span><span class="hljs-symbol">&#x26;copy;</span> 2023 Moja Strona. Wszelkie prawa zastrzeżone.<span class="hljs-tag">&#x3C;/<span class="hljs-name">p</span>></span>
<span class="hljs-tag">&#x3C;/<span class="hljs-name">footer</span>></span>
</code></pre>
<h3><code>&#x3C;figure></code> i <code>&#x3C;figcaption></code></h3>
<p>Używane do oznaczenia ilustracji, diagramów lub innych elementów graficznych oraz ich opisów.</p>
<pre><code class="hljs language-html"><span class="hljs-tag">&#x3C;<span class="hljs-name">figure</span>></span>
  <span class="hljs-tag">&#x3C;<span class="hljs-name">img</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"obrazek.jpg"</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">"Opis obrazka"</span> /></span>
  <span class="hljs-tag">&#x3C;<span class="hljs-name">figcaption</span>></span>Opis obrazka<span class="hljs-tag">&#x3C;/<span class="hljs-name">figcaption</span>></span>
<span class="hljs-tag">&#x3C;/<span class="hljs-name">figure</span>></span>
</code></pre>
<h3><code>&#x3C;time></code></h3>
<p>Reprezentuje określony czas, datę lub oba.</p>
<pre><code class="hljs language-html"><span class="hljs-tag">&#x3C;<span class="hljs-name">time</span> <span class="hljs-attr">datetime</span>=<span class="hljs-string">"2023-06-29"</span>></span>29 czerwca 2023<span class="hljs-tag">&#x3C;/<span class="hljs-name">time</span>></span>
</code></pre>
<h3><code>&#x3C;mark></code></h3>
<p>Oznacza tekst, który jest wyróżniony ze względu na kontekst.</p>
<pre><code class="hljs language-html"><span class="hljs-tag">&#x3C;<span class="hljs-name">p</span>></span>To jest <span class="hljs-tag">&#x3C;<span class="hljs-name">mark</span>></span>ważne<span class="hljs-tag">&#x3C;/<span class="hljs-name">mark</span>></span> słowo.<span class="hljs-tag">&#x3C;/<span class="hljs-name">p</span>></span>
</code></pre>
<h3><code>&#x3C;address></code></h3>
<p>Oznacza informacje kontaktowe.</p>
<pre><code class="hljs language-html"><span class="hljs-tag">&#x3C;<span class="hljs-name">address</span>></span>
  <span class="hljs-tag">&#x3C;<span class="hljs-name">p</span>></span>Jan Kowalski<span class="hljs-tag">&#x3C;/<span class="hljs-name">p</span>></span>
  <span class="hljs-tag">&#x3C;<span class="hljs-name">p</span>></span>ul. Przykładowa 1<span class="hljs-tag">&#x3C;/<span class="hljs-name">p</span>></span>
  <span class="hljs-tag">&#x3C;<span class="hljs-name">p</span>></span>00-000 Warszawa<span class="hljs-tag">&#x3C;/<span class="hljs-name">p</span>></span>
<span class="hljs-tag">&#x3C;/<span class="hljs-name">address</span>></span>
</code></pre>
<h2>Ograniczenia i wyzwania</h2>
<ul>
<li><strong>Niewłaściwe użycie:</strong> Używanie elementów semantycznych w niewłaściwy sposób może prowadzić do zamieszania i problemów z dostępnością.</li>
<li><strong>Starsze przeglądarki:</strong> Starsze przeglądarki mogą nie obsługiwać wszystkich semantycznych elementów HTML5.</li>
<li><strong>Większa dokładność:</strong> Tworzenie semantycznego HTML wymaga większej dbałości o szczegóły i zrozumienia struktury dokumentu.</li>
</ul>
<h2>Podsumowanie</h2>
<p>Używanie semantycznego HTML przynosi wiele korzyści, takich jak lepsza czytelność kodu, lepsze pozycjonowanie w wyszukiwarkach i większa dostępność dla osób niepełnosprawnych. Dzięki semantycznym elementom HTML możemy tworzyć bardziej strukturalne i zrozumiałe strony internetowe.</p>
<h2>Zadania do wykonania</h2>
<h3>Zadanie 1</h3>
<p>Stwórz prostą stronę HTML z nagłówkiem (<code>&#x3C;header></code>), główną treścią (<code>&#x3C;main></code>), sekcją nawigacyjną (<code>&#x3C;nav></code>) i stopką (<code>&#x3C;footer></code>).</p>
<details>
  <summary>
    <span>Pokaż rozwiązanie</span>
  </summary>
<pre><code class="hljs language-html"><span class="hljs-meta">&#x3C;!DOCTYPE <span class="hljs-keyword">html</span>></span>
<span class="hljs-tag">&#x3C;<span class="hljs-name">html</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">"pl"</span>></span>
  <span class="hljs-tag">&#x3C;<span class="hljs-name">head</span>></span>
    <span class="hljs-tag">&#x3C;<span class="hljs-name">meta</span> <span class="hljs-attr">charset</span>=<span class="hljs-string">"UTF-8"</span> /></span>
    <span class="hljs-tag">&#x3C;<span class="hljs-name">meta</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"viewport"</span> <span class="hljs-attr">content</span>=<span class="hljs-string">"width=device-width, initial-scale=1.0"</span> /></span>
    <span class="hljs-tag">&#x3C;<span class="hljs-name">title</span>></span>Zadanie 1<span class="hljs-tag">&#x3C;/<span class="hljs-name">title</span>></span>
  <span class="hljs-tag">&#x3C;/<span class="hljs-name">head</span>></span>
  <span class="hljs-tag">&#x3C;<span class="hljs-name">body</span>></span>
    <span class="hljs-tag">&#x3C;<span class="hljs-name">header</span>></span>
      <span class="hljs-tag">&#x3C;<span class="hljs-name">h1</span>></span>Moja Strona<span class="hljs-tag">&#x3C;/<span class="hljs-name">h1</span>></span>
    <span class="hljs-tag">&#x3C;/<span class="hljs-name">header</span>></span>
    <span class="hljs-tag">&#x3C;<span class="hljs-name">nav</span>></span>
      <span class="hljs-tag">&#x3C;<span class="hljs-name">ul</span>></span>
        <span class="hljs-tag">&#x3C;<span class="hljs-name">li</span>></span><span class="hljs-tag">&#x3C;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"#home"</span>></span>Home<span class="hljs-tag">&#x3C;/<span class="hljs-name">a</span>></span><span class="hljs-tag">&#x3C;/<span class="hljs-name">li</span>></span>
        <span class="hljs-tag">&#x3C;<span class="hljs-name">li</span>></span><span class="hljs-tag">&#x3C;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"#about"</span>></span>About<span class="hljs-tag">&#x3C;/<span class="hljs-name">a</span>></span><span class="hljs-tag">&#x3C;/<span class="hljs-name">li</span>></span>
        <span class="hljs-tag">&#x3C;<span class="hljs-name">li</span>></span><span class="hljs-tag">&#x3C;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"#contact"</span>></span>Contact<span class="hljs-tag">&#x3C;/<span class="hljs-name">a</span>></span><span class="hljs-tag">&#x3C;/<span class="hljs-name">li</span>></span>
      <span class="hljs-tag">&#x3C;/<span class="hljs-name">ul</span>></span>
    <span class="hljs-tag">&#x3C;/<span class="hljs-name">nav</span>></span>
    <span class="hljs-tag">&#x3C;<span class="hljs-name">main</span>></span>
      <span class="hljs-tag">&#x3C;<span class="hljs-name">p</span>></span>Główna treść strony...<span class="hljs-tag">&#x3C;/<span class="hljs-name">p</span>></span>
    <span class="hljs-tag">&#x3C;/<span class="hljs-name">main</span>></span>
    <span class="hljs-tag">&#x3C;<span class="hljs-name">footer</span>></span>
      <span class="hljs-tag">&#x3C;<span class="hljs-name">p</span>></span><span class="hljs-symbol">&#x26;copy;</span> 2023 Moja Strona. Wszelkie prawa zastrzeżone.<span class="hljs-tag">&#x3C;/<span class="hljs-name">p</span>></span>
    <span class="hljs-tag">&#x3C;/<span class="hljs-name">footer</span>></span>
  <span class="hljs-tag">&#x3C;/<span class="hljs-name">body</span>></span>
<span class="hljs-tag">&#x3C;/<span class="hljs-name">html</span>></span>
</code></pre>
</details>
<h3>Zadanie 2</h3>
<p>Dodaj do strony z Zadania 1 sekcję (<code>&#x3C;section></code>), która zawiera artykuł (<code>&#x3C;article></code>) oraz blok poboczny (<code>&#x3C;aside></code>).</p>
<details>
  <summary>
    <span>Pokaż rozwiązanie</span>
  </summary>
<pre><code class="hljs language-html"><span class="hljs-meta">&#x3C;!DOCTYPE <span class="hljs-keyword">html</span>></span>
<span class="hljs-tag">&#x3C;<span class="hljs-name">html</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">"pl"</span>></span>
  <span class="hljs-tag">&#x3C;<span class="hljs-name">head</span>></span>
    <span class="hljs-tag">&#x3C;<span class="hljs-name">meta</span> <span class="hljs-attr">charset</span>=<span class="hljs-string">"UTF-8"</span> /></span>
    <span class="hljs-tag">&#x3C;<span class="hljs-name">meta</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"viewport"</span> <span class="hljs-attr">content</span>=<span class="hljs-string">"width=device-width, initial-scale=1.0"</span> /></span>
    <span class="hljs-tag">&#x3C;<span class="hljs-name">title</span>></span>Zadanie 2<span class="hljs-tag">&#x3C;/<span class="hljs-name">title</span>></span>
  <span class="hljs-tag">&#x3C;/<span class="hljs-name">head</span>></span>
  <span class="hljs-tag">&#x3C;<span class="hljs-name">body</span>></span>
    <span class="hljs-tag">&#x3C;<span class="hljs-name">header</span>></span>
      <span class="hljs-tag">&#x3C;<span class="hljs-name">h1</span>></span>Moja Strona<span class="hljs-tag">&#x3C;/<span class="hljs-name">h1</span>></span>
    <span class="hljs-tag">&#x3C;/<span class="hljs-name">header</span>></span>
    <span class="hljs-tag">&#x3C;<span class="hljs-name">nav</span>></span>
      <span class="hljs-tag">&#x3C;<span class="hljs-name">ul</span>></span>
        <span class="hljs-tag">&#x3C;<span class="hljs-name">li</span>></span><span class="hljs-tag">&#x3C;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"#home"</span>></span>Home<span class="hljs-tag">&#x3C;/<span class="hljs-name">a</span>></span><span class="hljs-tag">&#x3C;/<span class="hljs-name">li</span>></span>
        <span class="hljs-tag">&#x3C;<span class="hljs-name">li</span>></span><span class="hljs-tag">&#x3C;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"#about"</span>></span>About<span class="hljs-tag">&#x3C;/<span class="hljs-name">a</span>></span><span class="hljs-tag">&#x3C;/<span class="hljs-name">li</span>></span>
        <span class="hljs-tag">&#x3C;<span class="hljs-name">li</span>></span><span class="hljs-tag">&#x3C;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"#contact"</span>></span>Contact<span class="hljs-tag">&#x3C;/<span class="hljs-name">a</span>></span><span class="hljs-tag">&#x3C;/<span class="hljs-name">li</span>></span>
      <span class="hljs-tag">&#x3C;/<span class="hljs-name">ul</span>></span>
    <span class="hljs-tag">&#x3C;/<span class="hljs-name">nav</span>></span>
    <span class="hljs-tag">&#x3C;<span class="hljs-name">main</span>></span>
      <span class="hljs-tag">&#x3C;<span class="hljs-name">section</span>></span>
        <span class="hljs-tag">&#x3C;<span class="hljs-name">article</span>></span>
          <span class="hljs-tag">&#x3C;<span class="hljs-name">h2</span>></span>Artykuł<span class="hljs-tag">&#x3C;/<span class="hljs-name">h2</span>></span>
          <span class="hljs-tag">&#x3C;<span class="hljs-name">p</span>></span>Treść artykułu...<span class="hljs-tag">&#x3C;/<span class="hljs-name">p</span>></span>
        <span class="hljs-tag">&#x3C;/<span class="hljs-name">article</span>></span>
        <span class="hljs-tag">&#x3C;<span class="hljs-name">aside</span>></span>
          <span class="hljs-tag">&#x3C;<span class="hljs-name">h2</span>></span>Blok poboczny<span class="hljs-tag">&#x3C;/<span class="hljs-name">h2</span>></span>
          <span class="hljs-tag">&#x3C;<span class="hljs-name">p</span>></span>Informacje poboczne...<span class="hljs-tag">&#x3C;/<span class="hljs-name">p</span>></span>
        <span class="hljs-tag">&#x3C;/<span class="hljs-name">aside</span>></span>
      <span class="hljs-tag">&#x3C;/<span class="hljs-name">section</span>></span>
    <span class="hljs-tag">&#x3C;/<span class="hljs-name">main</span>></span>
    <span class="hljs-tag">&#x3C;<span class="hljs-name">footer</span>></span>
      <span class="hljs-tag">&#x3C;<span class="hljs-name">p</span>></span><span class="hljs-symbol">&#x26;copy;</span> 2023 Moja Strona. Wszelkie prawa zastrzeżone.<span class="hljs-tag">&#x3C;/<span class="hljs-name">p</span>></span>
    <span class="hljs-tag">&#x3C;/<span class="hljs-name">footer</span>></span>
  <span class="hljs-tag">&#x3C;/<span class="hljs-name">body</span>></span>
<span class="hljs-tag">&#x3C;/<span class="hljs-name">html</span>></span>
</code></pre>
</details>
<h3>Zadanie 3</h3>
<p>Umieść na stronie obrazek z podpisem, używając elementów <code>&#x3C;figure></code> i <code>&#x3C;figcaption></code>.</p>
<details>
  <summary>
    <span>Pokaż rozwiązanie</span>
  </summary>
<pre><code class="hljs language-html"><span class="hljs-meta">&#x3C;!DOCTYPE <span class="hljs-keyword">html</span>></span>
<span class="hljs-tag">&#x3C;<span class="hljs-name">html</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">"pl"</span>></span>
  <span class="hljs-tag">&#x3C;<span class="hljs-name">head</span>></span>
    <span class="hljs-tag">&#x3C;<span class="hljs-name">meta</span> <span class="hljs-attr">charset</span>=<span class="hljs-string">"UTF-8"</span> /></span>
    <span class="hljs-tag">&#x3C;<span class="hljs-name">meta</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"viewport"</span> <span class="hljs-attr">content</span>=<span class="hljs-string">"width=device-width, initial-scale=1.0"</span> /></span>
    <span class="hljs-tag">&#x3C;<span class="hljs-name">title</span>></span>Zadanie 3<span class="hljs-tag">&#x3C;/<span class="hljs-name">title</span>></span>
  <span class="hljs-tag">&#x3C;/<span class="hljs-name">head</span>></span>
  <span class="hljs-tag">&#x3C;<span class="hljs-name">body</span>></span>
    <span class="hljs-tag">&#x3C;<span class="hljs-name">header</span>></span>
      <span class="hljs-tag">&#x3C;<span class="hljs-name">h1</span>></span>Moja Strona<span class="hljs-tag">&#x3C;/<span class="hljs-name">h1</span>></span>
    <span class="hljs-tag">&#x3C;/<span class="hljs-name">header</span>></span>
    <span class="hljs-tag">&#x3C;<span class="hljs-name">nav</span>></span>
      <span class="hljs-tag">&#x3C;<span class="hljs-name">ul</span>></span>
        <span class="hljs-tag">&#x3C;<span class="hljs-name">li</span>></span><span class="hljs-tag">&#x3C;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"#home"</span>></span>Home<span class="hljs-tag">&#x3C;/<span class="hljs-name">a</span>></span><span class="hljs-tag">&#x3C;/<span class="hljs-name">li</span>></span>
        <span class="hljs-tag">&#x3C;<span class="hljs-name">li</span>></span><span class="hljs-tag">&#x3C;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"#about"</span>></span>About<span class="hljs-tag">&#x3C;/<span class="hljs-name">a</span>></span><span class="hljs-tag">&#x3C;/<span class="hljs-name">li</span>></span>
        <span class="hljs-tag">&#x3C;<span class="hljs-name">li</span>></span><span class="hljs-tag">&#x3C;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"#contact"</span>></span>Contact<span class="hljs-tag">&#x3C;/<span class="hljs-name">a</span>></span><span class="hljs-tag">&#x3C;/<span class="hljs-name">li</span>></span>
      <span class="hljs-tag">&#x3C;/<span class="hljs-name">ul</span>></span>
    <span class="hljs-tag">&#x3C;/<span class="hljs-name">nav</span>></span>
    <span class="hljs-tag">&#x3C;<span class="hljs-name">main</span>></span>
      <span class="hljs-tag">&#x3C;<span class="hljs-name">section</span>></span>
        <span class="hljs-tag">&#x3C;<span class="hljs-name">article</span>></span>
          <span class="hljs-tag">&#x3C;<span class="hljs-name">h2</span>></span>Artykuł<span class="hljs-tag">&#x3C;/<span class="hljs-name">h2</span>></span>
          <span class="hljs-tag">&#x3C;<span class="hljs-name">p</span>></span>Treść artykułu...<span class="hljs-tag">&#x3C;/<span class="hljs-name">p</span>></span>
        <span class="hljs-tag">&#x3C;/<span class="hljs-name">article</span>></span>
        <span class="hljs-tag">&#x3C;<span class="hljs-name">aside</span>></span>
          <span class="hljs-tag">&#x3C;<span class="hljs-name">h2</span>></span>Blok poboczny<span class="hljs-tag">&#x3C;/<span class="hljs-name">h2</span>></span>
          <span class="hljs-tag">&#x3C;<span class="hljs-name">p</span>></span>Informacje poboczne...<span class="hljs-tag">&#x3C;/<span class="hljs-name">p</span>></span>
        <span class="hljs-tag">&#x3C;/<span class="hljs-name">aside</span>></span>
        <span class="hljs-tag">&#x3C;<span class="hljs-name">figure</span>></span>
          <span class="hljs-tag">&#x3C;<span class="hljs-name">img</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"obrazek.jpg"</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">"Opis obrazka"</span> /></span>
          <span class="hljs-tag">&#x3C;<span class="hljs-name">figcaption</span>></span>Opis obrazka<span class="hljs-tag">&#x3C;/<span class="hljs-name">figcaption</span>></span>
        <span class="hljs-tag">&#x3C;/<span class="hljs-name">figure</span>></span>
      <span class="hljs-tag">&#x3C;/<span class="hljs-name">section</span>></span>
    <span class="hljs-tag">&#x3C;/<span class="hljs-name">main</span>></span>
    <span class="hljs-tag">&#x3C;<span class="hljs-name">footer</span>></span>
      <span class="hljs-tag">&#x3C;<span class="hljs-name">p</span>></span><span class="hljs-symbol">&#x26;copy;</span> 2023 Moja Strona. Wszelkie prawa zastrzeżone.<span class="hljs-tag">&#x3C;/<span class="hljs-name">p</span>></span>
    <span class="hljs-tag">&#x3C;/<span class="hljs-name">footer</span>></span>
  <span class="hljs-tag">&#x3C;/<span class="hljs-name">body</span>></span>
<span class="hljs-tag">&#x3C;/<span class="hljs-name">html</span>></span>
</code></pre>
</details>
<p>To tyle na temat semantycznego HTML! Zachęcam do dalszego zgłębiania tematu i praktycznego zastosowania zdobytej wiedzy.</p>`,title:"Wprowadzenie do Semantycznego HTML",description:"Semantyczny HTML polega na używaniu elementów HTML, które jednoznacznie opisują swoje znaczenie i cel. Elementy semantyczne nie tylko definiują strukturę dokumentu, ale również pomagają w interpretacji jego zawartości zarówno przez przeglądarki, jak i przez wyszukiwarki internetowe oraz technologie wspomagające (np. czytniki ekranowe).",keywords:["html","semantyka","seo","dostępność"],categories:["html","seo"],createdAt:"2024-07-05T00:00:00.000Z"};export{s as default};
