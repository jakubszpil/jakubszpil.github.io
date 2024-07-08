const s={id:"87151a60-cfd9-47aa-819f-223100343f72",slug:"nowoczesny-javascript",content:`<p>JavaScript jest językiem programowania, który jest powszechnie stosowany do tworzenia dynamicznych i interaktywnych stron internetowych. W ciągu ostatnich lat JavaScript znacznie ewoluował, wprowadzając nowe funkcje i poprawiając istniejące mechanizmy. W tym kursie omówimy najważniejsze elementy nowoczesnego JavaScript, w tym ES6 i nowsze.</p>
<h2>Zmienne: <code>let</code> i <code>const</code></h2>
<p>W nowoczesnym JavaScript zmienne są definiowane za pomocą <code>let</code> i <code>const</code> zamiast <code>var</code>.</p>
<ul>
<li><code>let</code> pozwala na deklarację zmiennych, które mogą być zmieniane.</li>
<li><code>const</code> pozwala na deklarację zmiennych, które są stałe i nie mogą być zmieniane.</li>
</ul>
<h3>Przykłady:</h3>
<pre><code class="hljs language-javascript"><span class="hljs-keyword">let</span> zmienna = <span class="hljs-string">"To jest zmienna"</span>;
zmienna = <span class="hljs-string">"Zmieniona wartość"</span>;

<span class="hljs-keyword">const</span> stala = <span class="hljs-string">"To jest stała"</span>;
<span class="hljs-comment">// stala = 'Zmieniona wartość'; // Spowoduje błąd</span>
</code></pre>
<h2>Funkcje strzałkowe</h2>
<p>Funkcje strzałkowe to skrócony zapis funkcji, który również pozwala na lepsze zrozumienie kontekstu <code>this</code>.</p>
<h3>Przykład:</h3>
<pre><code class="hljs language-javascript"><span class="hljs-comment">// Standardowa funkcja</span>
<span class="hljs-keyword">function</span> <span class="hljs-title function_">dodaj</span>(<span class="hljs-params">a, b</span>) {
  <span class="hljs-keyword">return</span> a + b;
}

<span class="hljs-comment">// Funkcja strzałkowa</span>
<span class="hljs-keyword">const</span> <span class="hljs-title function_">dodaj</span> = (<span class="hljs-params">a, b</span>) => a + b;
</code></pre>
<h2>Szablony stringów (Template Literals)</h2>
<p>Szablony stringów umożliwiają interpolację zmiennych i wyrażenia w łańcuchach znaków za pomocą backticków (<code>\`</code>).</p>
<h3>Przykład:</h3>
<pre><code class="hljs language-javascript"><span class="hljs-keyword">const</span> name = <span class="hljs-string">"Jan"</span>;
<span class="hljs-keyword">const</span> greeting = <span class="hljs-string">\`Cześć, <span class="hljs-subst">\${name}</span>! Jak się masz?\`</span>;
<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(greeting); <span class="hljs-comment">// "Cześć, Jan! Jak się masz?"</span>
</code></pre>
<h2>Destrukturyzacja</h2>
<p>Destrukturyzacja pozwala na wyodrębnienie wartości z tablic lub obiektów i przypisanie ich do zmiennych.</p>
<h3>Przykład z tablicą:</h3>
<pre><code class="hljs language-javascript"><span class="hljs-keyword">const</span> liczby = [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>];
<span class="hljs-keyword">const</span> [jeden, dwa, trzy] = liczby;
<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(jeden, dwa, trzy); <span class="hljs-comment">// 1 2 3</span>
</code></pre>
<h3>Przykład z obiektem:</h3>
<pre><code class="hljs language-javascript"><span class="hljs-keyword">const</span> osoba = { <span class="hljs-attr">imie</span>: <span class="hljs-string">"Jan"</span>, <span class="hljs-attr">wiek</span>: <span class="hljs-number">30</span> };
<span class="hljs-keyword">const</span> { imie, wiek } = osoba;
<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(imie, wiek); <span class="hljs-comment">// Jan 30</span>
</code></pre>
<h2>Spread operator (<code>...</code>)</h2>
<p>Spread operator pozwala na rozwinięcie elementów tablicy lub obiektu.</p>
<h3>Przykład z tablicą:</h3>
<pre><code class="hljs language-javascript"><span class="hljs-keyword">const</span> liczby = [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>];
<span class="hljs-keyword">const</span> wiecejLiczb = [...liczby, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>, <span class="hljs-number">6</span>];
<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(wiecejLiczb); <span class="hljs-comment">// [1, 2, 3, 4, 5, 6]</span>
</code></pre>
<h3>Przykład z obiektem:</h3>
<pre><code class="hljs language-javascript"><span class="hljs-keyword">const</span> osoba = { <span class="hljs-attr">imie</span>: <span class="hljs-string">"Jan"</span>, <span class="hljs-attr">wiek</span>: <span class="hljs-number">30</span> };
<span class="hljs-keyword">const</span> nowaOsoba = { ...osoba, <span class="hljs-attr">miasto</span>: <span class="hljs-string">"Warszawa"</span> };
<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(nowaOsoba); <span class="hljs-comment">// { imie: 'Jan', wiek: 30, miasto: 'Warszawa' }</span>
</code></pre>
<h2>Promisy</h2>
<p>Promisy są używane do obsługi operacji asynchronicznych.</p>
<h3>Przykład:</h3>
<pre><code class="hljs language-javascript"><span class="hljs-keyword">const</span> obietnica = <span class="hljs-keyword">new</span> <span class="hljs-title class_">Promise</span>(<span class="hljs-function">(<span class="hljs-params">resolve, reject</span>) =></span> {
  <span class="hljs-keyword">const</span> sukces = <span class="hljs-literal">true</span>;

  <span class="hljs-keyword">if</span> (sukces) {
    <span class="hljs-title function_">resolve</span>(<span class="hljs-string">"Operacja zakończona sukcesem!"</span>);
  } <span class="hljs-keyword">else</span> {
    <span class="hljs-title function_">reject</span>(<span class="hljs-string">"Operacja zakończona niepowodzeniem."</span>);
  }
});

obietnica
  .<span class="hljs-title function_">then</span>(<span class="hljs-function">(<span class="hljs-params">result</span>) =></span> <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(result))
  .<span class="hljs-title function_">catch</span>(<span class="hljs-function">(<span class="hljs-params">error</span>) =></span> <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(error));
</code></pre>
<h2>Async/Await</h2>
<p>Async/Await to składnia, która upraszcza pracę z promisami i sprawia, że kod asynchroniczny wygląda jak kod synchroniczny.</p>
<h3>Przykład:</h3>
<pre><code class="hljs language-javascript"><span class="hljs-keyword">const</span> <span class="hljs-title function_">asyncFunction</span> = <span class="hljs-keyword">async</span> (<span class="hljs-params"></span>) => {
  <span class="hljs-keyword">try</span> {
    <span class="hljs-keyword">const</span> result = <span class="hljs-keyword">await</span> obietnica;
    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(result);
  } <span class="hljs-keyword">catch</span> (error) {
    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(error);
  }
};

<span class="hljs-title function_">asyncFunction</span>();
</code></pre>
<h2>Zadania do wykonania</h2>
<h3>Zadanie 1</h3>
<p>Napisz funkcję strzałkową, która przyjmuje dwa argumenty i zwraca ich sumę.</p>
<details>
  <summary>
    <span>Pokaż rozwiązanie</span>
  </summary>
<pre><code class="hljs language-javascript"><span class="hljs-keyword">const</span> <span class="hljs-title function_">dodaj</span> = (<span class="hljs-params">a, b</span>) => a + b;
<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-title function_">dodaj</span>(<span class="hljs-number">2</span>, <span class="hljs-number">3</span>)); <span class="hljs-comment">// 5</span>
</code></pre>
</details>
<h3>Zadanie 2</h3>
<p>Utwórz obiekt reprezentujący samochód, z atrybutami <code>marka</code>, <code>model</code> i <code>rok</code>. Następnie użyj destrukturyzacji, aby wyodrębnić te wartości i wyświetlić je w konsoli.</p>
<details>
  <summary>
    <span>Pokaż rozwiązanie</span>
  </summary>
<pre><code class="hljs language-javascript"><span class="hljs-keyword">const</span> samochod = { <span class="hljs-attr">marka</span>: <span class="hljs-string">"Toyota"</span>, <span class="hljs-attr">model</span>: <span class="hljs-string">"Corolla"</span>, <span class="hljs-attr">rok</span>: <span class="hljs-number">2020</span> };
<span class="hljs-keyword">const</span> { marka, model, rok } = samochod;
<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(marka, model, rok); <span class="hljs-comment">// Toyota Corolla 2020</span>
</code></pre>
</details>
<h3>Zadanie 3</h3>
<p>Stwórz tablicę liczb od 1 do 5. Następnie użyj operatora spread, aby dodać liczby 6 i 7 do tej tablicy.</p>
<details>
  <summary>
    <span>Pokaż rozwiązanie</span>
  </summary>
<pre><code class="hljs language-javascript"><span class="hljs-keyword">const</span> liczby = [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>];

<span class="hljs-keyword">const</span> wiecejLiczb = [...liczby, <span class="hljs-number">6</span>, <span class="hljs-number">7</span>];

<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(wiecejLiczb); <span class="hljs-comment">// [1, 2, 3, 4, 5, 6, 7]</span>
</code></pre>
</details>
<h3>Zadanie 4</h3>
<p>Napisz funkcję asynchroniczną, która używa promisów do symulacji opóźnienia (np. za pomocą <code>setTimeout</code>). Funkcja powinna zwracać wynik po 2 sekundach.</p>
<details>
  <summary>
    <span>Pokaż rozwiązanie</span>
  </summary>
<pre><code class="hljs language-javascript"><span class="hljs-keyword">const</span> <span class="hljs-title function_">delay</span> = (<span class="hljs-params">ms</span>) => <span class="hljs-keyword">new</span> <span class="hljs-title class_">Promise</span>(<span class="hljs-function">(<span class="hljs-params">resolve</span>) =></span> <span class="hljs-built_in">setTimeout</span>(resolve, ms));

<span class="hljs-keyword">const</span> <span class="hljs-title function_">asyncFunction</span> = <span class="hljs-keyword">async</span> (<span class="hljs-params"></span>) => {
  <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">"Czekam 2 sekundy..."</span>);
  <span class="hljs-keyword">await</span> <span class="hljs-title function_">delay</span>(<span class="hljs-number">2000</span>);
  <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">"2 sekundy minęły!"</span>);
};

<span class="hljs-title function_">asyncFunction</span>();
</code></pre>
</details>
<p>To tyle na temat podstaw nowoczesnego JavaScript! Zachęcam do dalszego eksperymentowania i zgłębiania tego tematu, aby tworzyć bardziej zaawansowane i interaktywne aplikacje.</p>`,title:"Renesans w JS, czyli nowoczesny JavaScript",description:"JavaScript jest językiem programowania, który jest powszechnie stosowany do tworzenia dynamicznych i interaktywnych stron internetowych. W ciągu ostatnich lat JavaScript znacznie ewoluował, wprowadzając nowe funkcje i poprawiając istniejące mechanizmy. W tym kursie omówimy najważniejsze elementy nowoczesnego JavaScript, w tym ES6 i nowsze.",keywords:["javascript","kurs","wprowadzenie","przewodnik","web","frontend"],categories:["wprowadzenie","javascript"],createdAt:"2024-06-30T00:00:00.000Z"},t=Object.freeze(Object.defineProperty({__proto__:null,default:s},Symbol.toStringTag,{value:"Module"})),a={id:"daedfb4f-f3ba-4f8b-80df-168a3bc5259f",slug:"semantyczny-html",content:`<h2>Czym jest semantyczny HTML?</h2>
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
    <span class="hljs-tag">&#x3C;<span class="hljs-name">meta</span>
      <span class="hljs-attr">name</span>=<span class="hljs-string">"viewport"</span>
      <span class="hljs-attr">content</span>=<span class="hljs-string">"width=device-width, initial-scale=1.0

"</span>
    /></span>
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
<p>To tyle na temat semantycznego HTML! Zachęcam do dalszego zgłębiania tematu i praktycznego zastosowania zdobytej wiedzy.</p>`,title:"Wprowadzenie do Semantycznego HTML",description:"Semantyczny HTML polega na używaniu elementów HTML, które jednoznacznie opisują swoje znaczenie i cel. Elementy semantyczne nie tylko definiują strukturę dokumentu, ale również pomagają w interpretacji jego zawartości zarówno przez przeglądarki, jak i przez wyszukiwarki internetowe oraz technologie wspomagające (np. czytniki ekranowe).",keywords:["html","semantyka","seo","dostępność"],categories:["html","seo"],createdAt:"2024-07-05T00:00:00.000Z"},h=Object.freeze(Object.defineProperty({__proto__:null,default:a},Symbol.toStringTag,{value:"Module"})),n={id:"d6f46801-71b2-45ed-a383-4a5719e5018e",slug:"szybszy-css-czyli-wprowadzenie-do-bem",content:`<h2>Czym jest BEM?</h2>
<p>BEM (Block, Element, Modifier) to metodyka nazewnictwa klas CSS, która pomaga tworzyć komponenty interfejsu użytkownika w sposób modularny i łatwy do utrzymania. BEM dzieli interfejs na bloki, elementy i modyfikatory, co pozwala na lepszą organizację kodu CSS.</p>
<h2>Struktura BEM</h2>
<h3>Blok</h3>
<p>Blok jest samodzielnym komponentem, który może istnieć niezależnie. Może to być przycisk, nagłówek, formularz itp. Blok jest reprezentowany przez klasę główną.</p>
<pre><code class="hljs language-html"><span class="hljs-tag">&#x3C;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"block"</span>></span>Treść bloku<span class="hljs-tag">&#x3C;/<span class="hljs-name">div</span>></span>
</code></pre>
<h3>Element</h3>
<p>Element jest częścią bloku, która nie może istnieć bez niego. Elementy są reprezentowane przez klasę bloku, po której następuje podwójny podkreślnik (<code>__</code>).</p>
<pre><code class="hljs language-html"><span class="hljs-tag">&#x3C;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"block"</span>></span>
  <span class="hljs-tag">&#x3C;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"block__element"</span>></span>Treść elementu<span class="hljs-tag">&#x3C;/<span class="hljs-name">div</span>></span>
<span class="hljs-tag">&#x3C;/<span class="hljs-name">div</span>></span>
</code></pre>
<h3>Modyfikator</h3>
<p>Modyfikator zmienia wygląd lub zachowanie bloku lub elementu. Modyfikatory są reprezentowane przez pojedynczy podkreślnik (<code>_</code>).</p>
<pre><code class="hljs language-html"><span class="hljs-tag">&#x3C;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"block block--modifier"</span>></span>Treść zmodyfikowanego bloku<span class="hljs-tag">&#x3C;/<span class="hljs-name">div</span>></span>
<span class="hljs-tag">&#x3C;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"block__element block__element--modifier"</span>></span>
  Treść zmodyfikowanego elementu
<span class="hljs-tag">&#x3C;/<span class="hljs-name">div</span>></span>
</code></pre>
<h2>Przykład</h2>
<p>Przykładowy kod HTML z zastosowaniem BEM:</p>
<pre><code class="hljs language-html"><span class="hljs-tag">&#x3C;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"button button--primary"</span>></span>
  <span class="hljs-tag">&#x3C;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"button__text"</span>></span>Kliknij mnie<span class="hljs-tag">&#x3C;/<span class="hljs-name">span</span>></span>
<span class="hljs-tag">&#x3C;/<span class="hljs-name">div</span>></span>
</code></pre>
<p>Odpowiadający kod CSS:</p>
<pre><code class="hljs language-css"><span class="hljs-selector-class">.button</span> {
  <span class="hljs-attribute">padding</span>: <span class="hljs-number">10px</span> <span class="hljs-number">20px</span>;
  <span class="hljs-attribute">border</span>: none;
  <span class="hljs-attribute">cursor</span>: pointer;
}

<span class="hljs-selector-class">.button--primary</span> {
  <span class="hljs-attribute">background-color</span>: blue;
  <span class="hljs-attribute">color</span>: white;
}

<span class="hljs-selector-class">.button__text</span> {
  <span class="hljs-attribute">font-size</span>: <span class="hljs-number">16px</span>;
}
</code></pre>
<h2>Zasady BEM</h2>
<ol>
<li><strong>Nazwa bloku:</strong> Powinna być krótka i jednoznaczna, opisująca funkcję lub zawartość komponentu.</li>
<li><strong>Nazwa elementu:</strong> Powinna jasno określać, co robi element w kontekście bloku.</li>
<li><strong>Nazwa modyfikatora:</strong> Powinna opisywać, jak zmienia się blok lub element.</li>
</ol>
<h2>Przykłady</h2>
<h3>Formularz logowania</h3>
<p>HTML:</p>
<pre><code class="hljs language-html"><span class="hljs-tag">&#x3C;<span class="hljs-name">form</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"form form--login"</span>></span>
  <span class="hljs-tag">&#x3C;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"form__group"</span>></span>
    <span class="hljs-tag">&#x3C;<span class="hljs-name">label</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"form__label"</span> <span class="hljs-attr">for</span>=<span class="hljs-string">"username"</span>></span>Nazwa użytkownika<span class="hljs-tag">&#x3C;/<span class="hljs-name">label</span>></span>
    <span class="hljs-tag">&#x3C;<span class="hljs-name">input</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"form__input"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"text"</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"username"</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"username"</span> /></span>
  <span class="hljs-tag">&#x3C;/<span class="hljs-name">div</span>></span>
  <span class="hljs-tag">&#x3C;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"form__group"</span>></span>
    <span class="hljs-tag">&#x3C;<span class="hljs-name">label</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"form__label"</span> <span class="hljs-attr">for</span>=<span class="hljs-string">"password"</span>></span>Hasło<span class="hljs-tag">&#x3C;/<span class="hljs-name">label</span>></span>
    <span class="hljs-tag">&#x3C;<span class="hljs-name">input</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"form__input"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"password"</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"password"</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"password"</span> /></span>
  <span class="hljs-tag">&#x3C;/<span class="hljs-name">div</span>></span>
  <span class="hljs-tag">&#x3C;<span class="hljs-name">button</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"form__button form__button--submit"</span>></span>Zaloguj się<span class="hljs-tag">&#x3C;/<span class="hljs-name">button</span>></span>
<span class="hljs-tag">&#x3C;/<span class="hljs-name">form</span>></span>
</code></pre>
<p>CSS:</p>
<pre><code class="hljs language-css"><span class="hljs-selector-class">.form</span> {
  <span class="hljs-attribute">max-width</span>: <span class="hljs-number">300px</span>;
  <span class="hljs-attribute">margin</span>: <span class="hljs-number">0</span> auto;
  <span class="hljs-attribute">padding</span>: <span class="hljs-number">20px</span>;
  <span class="hljs-attribute">border</span>: <span class="hljs-number">1px</span> solid <span class="hljs-number">#ccc</span>;
  <span class="hljs-attribute">border-radius</span>: <span class="hljs-number">5px</span>;
}

<span class="hljs-selector-class">.form--login</span> {
  <span class="hljs-attribute">background-color</span>: <span class="hljs-number">#f9f9f9</span>;
}

<span class="hljs-selector-class">.form__group</span> {
  <span class="hljs-attribute">margin-bottom</span>: <span class="hljs-number">15px</span>;
}

<span class="hljs-selector-class">.form__label</span> {
  <span class="hljs-attribute">display</span>: block;
  <span class="hljs-attribute">margin-bottom</span>: <span class="hljs-number">5px</span>;
  <span class="hljs-attribute">font-weight</span>: bold;
}

<span class="hljs-selector-class">.form__input</span> {
  <span class="hljs-attribute">width</span>: <span class="hljs-number">100%</span>;
  <span class="hljs-attribute">padding</span>: <span class="hljs-number">8px</span>;
  <span class="hljs-attribute">box-sizing</span>: border-box;
}

<span class="hljs-selector-class">.form__button</span> {
  <span class="hljs-attribute">display</span>: inline-block;
  <span class="hljs-attribute">padding</span>: <span class="hljs-number">10px</span> <span class="hljs-number">20px</span>;
  <span class="hljs-attribute">border</span>: none;
  <span class="hljs-attribute">cursor</span>: pointer;
}

<span class="hljs-selector-class">.form__button--submit</span> {
  <span class="hljs-attribute">background-color</span>: blue;
  <span class="hljs-attribute">color</span>: white;
}
</code></pre>
<h3>Zadania do wykonania</h3>
<h4>Zadanie 1</h4>
<p>Utwórz komponent karty produktu (<code>product-card</code>) z elementami dla tytułu (<code>product-card__title</code>), opisu (<code>product-card__description</code>) i ceny (<code>product-card__price</code>). Dodaj modyfikator dla karty wyróżnionej (<code>product-card--featured</code>).</p>
<details>
  <summary>
    <span>Pokaż rozwiązanie</span>
  </summary>
<p>HTML:</p>
<pre><code class="hljs language-html"><span class="hljs-tag">&#x3C;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"product-card product-card--featured"</span>></span>
  <span class="hljs-tag">&#x3C;<span class="hljs-name">h2</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"product-card__title"</span>></span>Nazwa produktu<span class="hljs-tag">&#x3C;/<span class="hljs-name">h2</span>></span>
  <span class="hljs-tag">&#x3C;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"product-card__description"</span>></span>Opis produktu<span class="hljs-tag">&#x3C;/<span class="hljs-name">p</span>></span>
  <span class="hljs-tag">&#x3C;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"product-card__price"</span>></span>99,99 zł<span class="hljs-tag">&#x3C;/<span class="hljs-name">span</span>></span>
<span class="hljs-tag">&#x3C;/<span class="hljs-name">div</span>></span>
</code></pre>
<p>CSS:</p>
<pre><code class="hljs language-css"><span class="hljs-selector-class">.product-card</span> {
  <span class="hljs-attribute">border</span>: <span class="hljs-number">1px</span> solid <span class="hljs-number">#ccc</span>;
  <span class="hljs-attribute">padding</span>: <span class="hljs-number">15px</span>;
  <span class="hljs-attribute">border-radius</span>: <span class="hljs-number">5px</span>;
}

<span class="hljs-selector-class">.product-card--featured</span> {
  <span class="hljs-attribute">border-color</span>: gold;
  <span class="hljs-attribute">background-color</span>: <span class="hljs-number">#fffbf0</span>;
}

<span class="hljs-selector-class">.product-card__title</span> {
  <span class="hljs-attribute">font-size</span>: <span class="hljs-number">18px</span>;
  <span class="hljs-attribute">margin-bottom</span>: <span class="hljs-number">10px</span>;
}

<span class="hljs-selector-class">.product-card__description</span> {
  <span class="hljs-attribute">font-size</span>: <span class="hljs-number">14px</span>;
  <span class="hljs-attribute">margin-bottom</span>: <span class="hljs-number">15px</span>;
}

<span class="hljs-selector-class">.product-card__price</span> {
  <span class="hljs-attribute">font-size</span>: <span class="hljs-number">16px</span>;
  <span class="hljs-attribute">font-weight</span>: bold;
}
</code></pre>
</details>
<h4>Zadanie 2</h4>
<p>Stwórz nawigację (<code>nav</code>) z elementami dla pozycji nawigacji (<code>nav__item</code>) i linków (<code>nav__link</code>). Dodaj modyfikator dla aktywnego linku (<code>nav__link--active</code>).</p>
<details>
  <summary>
    <span>Pokaż rozwiązanie</span>
  </summary>
  HTML:
<pre><code class="hljs language-html"><span class="hljs-tag">&#x3C;<span class="hljs-name">nav</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"nav"</span>></span>
  <span class="hljs-tag">&#x3C;<span class="hljs-name">ul</span>></span>
    <span class="hljs-tag">&#x3C;<span class="hljs-name">li</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"nav__item"</span>></span>
      <span class="hljs-tag">&#x3C;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"#"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"nav__link nav__link--active"</span>></span>Home<span class="hljs-tag">&#x3C;/<span class="hljs-name">a</span>></span>
    <span class="hljs-tag">&#x3C;/<span class="hljs-name">li</span>></span>
    <span class="hljs-tag">&#x3C;<span class="hljs-name">li</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"nav__item"</span>></span><span class="hljs-tag">&#x3C;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"#"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"nav__link"</span>></span>O nas<span class="hljs-tag">&#x3C;/<span class="hljs-name">a</span>></span><span class="hljs-tag">&#x3C;/<span class="hljs-name">li</span>></span>
    <span class="hljs-tag">&#x3C;<span class="hljs-name">li</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"nav__item"</span>></span><span class="hljs-tag">&#x3C;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"#"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"nav__link"</span>></span>Kontakt<span class="hljs-tag">&#x3C;/<span class="hljs-name">a</span>></span><span class="hljs-tag">&#x3C;/<span class="hljs-name">li</span>></span>
  <span class="hljs-tag">&#x3C;/<span class="hljs-name">ul</span>></span>
<span class="hljs-tag">&#x3C;/<span class="hljs-name">nav</span>></span>
</code></pre>
<p>CSS:</p>
<pre><code class="hljs language-css"><span class="hljs-selector-class">.nav</span> {
  <span class="hljs-attribute">background-color</span>: <span class="hljs-number">#333</span>;
  <span class="hljs-attribute">padding</span>: <span class="hljs-number">10px</span>;
}

<span class="hljs-selector-class">.nav__item</span> {
  <span class="hljs-attribute">display</span>: inline;
  <span class="hljs-attribute">margin-right</span>: <span class="hljs-number">15px</span>;
}

<span class="hljs-selector-class">.nav__link</span> {
  <span class="hljs-attribute">color</span>: white;
  <span class="hljs-attribute">text-decoration</span>: none;
}

<span class="hljs-selector-class">.nav__link--active</span> {
  <span class="hljs-attribute">font-weight</span>: bold;
  <span class="hljs-attribute">text-decoration</span>: underline;
}
</code></pre>
</details>
<h4>Zadanie 3</h4>
<p>Utwórz sekcję artykułu (<code>article</code>) z elementami dla nagłówka (<code>article__header</code>), treści (<code>article__content</code>) i stopki (<code>article__footer</code>). Dodaj modyfikator dla nagłówka z obrazkiem (<code>article__header--with-image</code>).</p>
<details>
  <summary>
    <span>Pokaż rozwiązanie</span>
  </summary>
  HTML:
<pre><code class="hljs language-html"><span class="hljs-tag">&#x3C;<span class="hljs-name">article</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"article"</span>></span>
  <span class="hljs-tag">&#x3C;<span class="hljs-name">header</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"article__header article__header--with-image"</span>></span>
    <span class="hljs-tag">&#x3C;<span class="hljs-name">h1</span>></span>Tytuł artykułu<span class="hljs-tag">&#x3C;/<span class="hljs-name">h1</span>></span>
    <span class="hljs-tag">&#x3C;<span class="hljs-name">img</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"image.jpg"</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">"Obrazek w nagłówku"</span> /></span>
  <span class="hljs-tag">&#x3C;/<span class="hljs-name">header</span>></span>
  <span class="hljs-tag">&#x3C;<span class="hljs-name">section</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"article__content"</span>></span>
    <span class="hljs-tag">&#x3C;<span class="hljs-name">p</span>></span>Treść artykułu...<span class="hljs-tag">&#x3C;/<span class="hljs-name">p</span>></span>
  <span class="hljs-tag">&#x3C;/<span class="hljs-name">section</span>></span>
  <span class="hljs-tag">&#x3C;<span class="hljs-name">footer</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"article__footer"</span>></span>
    <span class="hljs-tag">&#x3C;<span class="hljs-name">p</span>></span>Stopka artykułu<span class="hljs-tag">&#x3C;/<span class="hljs-name">p</span>></span>
  <span class="hljs-tag">&#x3C;/<span class="hljs-name">footer</span>></span>
<span class="hljs-tag">&#x3C;/<span class="hljs-name">article</span>></span>
</code></pre>
<p>CSS:</p>
<pre><code class="hljs language-css"><span class="hljs-selector-class">.article</span> {
  <span class="hljs-attribute">border</span>: <span class="hljs-number">1px</span> solid <span class="hljs-number">#ddd</span>;
  <span class="hljs-attribute">padding</span>: <span class="hljs-number">20px</span>;
  <span class="hljs-attribute">border-radius</span>: <span class="hljs-number">5px</span>;
}

<span class="hljs-selector-class">.article__header</span> {
  <span class="hljs-attribute">margin-bottom</span>: <span class="hljs-number">15px</span>;
}

<span class="hljs-selector-class">.article__header--with-image</span> <span class="hljs-selector-tag">img</span> {
  <span class="hljs-attribute">display</span>: block;
  <span class="hljs-attribute">max-width</span>: <span class="hljs-number">100%</span>;
  <span class="hljs-attribute">height</span>: auto;
}

<span class="hljs-selector-class">.article__content</span> {
  <span class="hljs-attribute">margin-bottom</span>: <span class="hljs-number">15px</span>;
}

<span class="hljs-selector-class">.article__footer</span> {
  <span class="hljs-attribute">font-size</span>: <span class="hljs-number">14px</span>;
  <span class="hljs-attribute">color</span>: <span class="hljs-number">#777</span>;
}
</code></pre>
</details>
<p>To tyle na temat podstaw metodyki BEM! Zachęcam do dalszego eksperymentowania i zgłębiania tego tematu, aby tworzyć bardziej modularne i łatwe do utrzymania style CSS.</p>`,title:"Wprowadzenie do metodyki BEM",description:"Czym jest BEM? BEM (Block, Element, Modifier) to metodyka nazewnictwa klas CSS, która pomaga tworzyć komponenty interfejsu użytkownika w sposób modularny i łatwy do utrzymania. BEM dzieli interfejs na bloki, elementy i modyfikatory, co pozwala na lepszą organizację kodu CSS.",keywords:["kurs","css","bem","metodyka","metodyki","stylowanie","html"],categories:["wprowadzenie","css","html"],createdAt:"2024-06-30T00:00:00.000Z"},j=Object.freeze(Object.defineProperty({__proto__:null,default:n},Symbol.toStringTag,{value:"Module"})),l={id:"ee1e728e-529a-43ed-bb3a-ad1099ffd546",slug:"wprowadzenie-do-css",content:`<p>CSS (Cascading Style Sheets) to język służący do opisywania wyglądu i formatu dokumentu HTML. CSS pozwala na oddzielenie treści od prezentacji, co umożliwia tworzenie estetycznych i spójnych stron internetowych. W tym kursie omówimy podstawy CSS, w tym selektory, właściwości, sposoby załączania CSS do HTML oraz JavaScript, a także przedstawimy kilka zadań do wykonania.</p>
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
<p>To tyle na temat podstaw CSS! Zachęcam do dalszego eksperymentowania i zgłębiania tego tematu, aby tworzyć bardziej zaawansowane i estetyczne strony internetowe.</p>`,title:"Wprowadzenie do CSS",description:"CSS (Cascading Style Sheets) to język służący do opisywania wyglądu i formatu dokumentu HTML. CSS pozwala na oddzielenie treści od prezentacji, co umożliwia tworzenie estetycznych i spójnych stron internetowych. W tym kursie omówimy podstawy CSS, w tym selektory, właściwości, sposoby załączania CSS do HTML oraz JavaScript, a także przedstawimy kilka zadań do wykonania.",keywords:["css","html","kurs","wprowadzenie","przewodnik","web","frontend"],categories:["wprowadzenie","css"],createdAt:"2024-06-30T00:00:00.000Z"},o=Object.freeze(Object.defineProperty({__proto__:null,default:l},Symbol.toStringTag,{value:"Module"})),p={id:"439b881c-c8b0-45d2-adcf-20853c9d6d32",slug:"wprowadzenie-do-dom",content:`<h2>Wprowadzenie</h2>
<p>DOM (Document Object Model) to interfejs programistyczny dla dokumentów HTML i XML. Umożliwia dynamiczne manipulowanie strukturą, stylem i treścią dokumentów. DOM reprezentuje dokument jako drzewo obiektów, gdzie każdy element, atrybut i tekst w dokumencie jest węzłem drzewa.</p>
<h2>Struktura DOM</h2>
<p>DOM przedstawia dokument HTML jako drzewo hierarchiczne:</p>
<pre><code class="hljs language-html"><span class="hljs-meta">&#x3C;!DOCTYPE <span class="hljs-keyword">html</span>></span>
<span class="hljs-tag">&#x3C;<span class="hljs-name">html</span>></span>
  <span class="hljs-tag">&#x3C;<span class="hljs-name">head</span>></span>
    <span class="hljs-tag">&#x3C;<span class="hljs-name">title</span>></span>Przykład DOM<span class="hljs-tag">&#x3C;/<span class="hljs-name">title</span>></span>
  <span class="hljs-tag">&#x3C;/<span class="hljs-name">head</span>></span>
  <span class="hljs-tag">&#x3C;<span class="hljs-name">body</span>></span>
    <span class="hljs-tag">&#x3C;<span class="hljs-name">h1</span>></span>Witaj, świecie!<span class="hljs-tag">&#x3C;/<span class="hljs-name">h1</span>></span>
    <span class="hljs-tag">&#x3C;<span class="hljs-name">p</span>></span>To jest akapit.<span class="hljs-tag">&#x3C;/<span class="hljs-name">p</span>></span>
  <span class="hljs-tag">&#x3C;/<span class="hljs-name">body</span>></span>
<span class="hljs-tag">&#x3C;/<span class="hljs-name">html</span>></span>
</code></pre>
<p>Powyższy dokument HTML jest reprezentowany w DOM jako:</p>
<pre><code>#document
   |
   +-- html
        |
        +-- head
        |     |
        |     +-- title
        |            |
        |            +-- "Przykład DOM"
        |
        +-- body
              |
              +-- h1
              |     |
              |     +-- "Witaj, świecie!"
              |
              +-- p
                    |
                    +-- "To jest akapit."
</code></pre>
<h2>Podstawowe operacje na DOM</h2>
<p>DOM udostępnia wiele metod do manipulacji dokumentem. Oto kilka przykładów:</p>
<h3>Wybieranie elementów</h3>
<h4><code>getElementById</code></h4>
<p>Wybiera element na podstawie jego identyfikatora (ID):</p>
<pre><code class="hljs language-html"><span class="hljs-tag">&#x3C;<span class="hljs-name">p</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"myParagraph"</span>></span>To jest akapit.<span class="hljs-tag">&#x3C;/<span class="hljs-name">p</span>></span>

<span class="hljs-tag">&#x3C;<span class="hljs-name">script</span>></span><span class="javascript">
  <span class="hljs-keyword">const</span> para = <span class="hljs-variable language_">document</span>.<span class="hljs-title function_">getElementById</span>(<span class="hljs-string">"myParagraph"</span>);
  <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(para.<span class="hljs-property">textContent</span>); <span class="hljs-comment">// "To jest akapit."</span>
</span><span class="hljs-tag">&#x3C;/<span class="hljs-name">script</span>></span>
</code></pre>
<h4><code>getElementsByClassName</code></h4>
<p>Wybiera wszystkie elementy z określoną klasą:</p>
<pre><code class="hljs language-html"><span class="hljs-tag">&#x3C;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"myClass"</span>></span>Akapit 1<span class="hljs-tag">&#x3C;/<span class="hljs-name">p</span>></span>
<span class="hljs-tag">&#x3C;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"myClass"</span>></span>Akapit 2<span class="hljs-tag">&#x3C;/<span class="hljs-name">p</span>></span>

<span class="hljs-tag">&#x3C;<span class="hljs-name">script</span>></span><span class="javascript">
  <span class="hljs-keyword">const</span> paras = <span class="hljs-variable language_">document</span>.<span class="hljs-title function_">getElementsByClassName</span>(<span class="hljs-string">"myClass"</span>);
  <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(paras.<span class="hljs-property">length</span>); <span class="hljs-comment">// 2</span>
</span><span class="hljs-tag">&#x3C;/<span class="hljs-name">script</span>></span>
</code></pre>
<h4><code>querySelector</code> i <code>querySelectorAll</code></h4>
<p>Wybiera elementy za pomocą selektorów CSS:</p>
<pre><code class="hljs language-html"><span class="hljs-tag">&#x3C;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"myClass"</span>></span>Akapit 1<span class="hljs-tag">&#x3C;/<span class="hljs-name">p</span>></span>
<span class="hljs-tag">&#x3C;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"myClass"</span>></span>Akapit 2<span class="hljs-tag">&#x3C;/<span class="hljs-name">p</span>></span>

<span class="hljs-tag">&#x3C;<span class="hljs-name">script</span>></span><span class="javascript">
  <span class="hljs-keyword">const</span> firstPara = <span class="hljs-variable language_">document</span>.<span class="hljs-title function_">querySelector</span>(<span class="hljs-string">".myClass"</span>);
  <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(firstPara.<span class="hljs-property">textContent</span>); <span class="hljs-comment">// "Akapit 1"</span>

  <span class="hljs-keyword">const</span> allParas = <span class="hljs-variable language_">document</span>.<span class="hljs-title function_">querySelectorAll</span>(<span class="hljs-string">".myClass"</span>);
  <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(allParas.<span class="hljs-property">length</span>); <span class="hljs-comment">// 2</span>
</span><span class="hljs-tag">&#x3C;/<span class="hljs-name">script</span>></span>
</code></pre>
<h3>Manipulacja elementami</h3>
<h4>Zmiana tekstu</h4>
<pre><code class="hljs language-html"><span class="hljs-tag">&#x3C;<span class="hljs-name">p</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"myParagraph"</span>></span>To jest akapit.<span class="hljs-tag">&#x3C;/<span class="hljs-name">p</span>></span>

<span class="hljs-tag">&#x3C;<span class="hljs-name">script</span>></span><span class="javascript">
  <span class="hljs-keyword">const</span> para = <span class="hljs-variable language_">document</span>.<span class="hljs-title function_">getElementById</span>(<span class="hljs-string">"myParagraph"</span>);
  para.<span class="hljs-property">textContent</span> = <span class="hljs-string">"Zmieniony tekst akapitu."</span>;
</span><span class="hljs-tag">&#x3C;/<span class="hljs-name">script</span>></span>
</code></pre>
<h4>Zmiana atrybutów</h4>
<pre><code class="hljs language-html"><span class="hljs-tag">&#x3C;<span class="hljs-name">img</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"myImage"</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"image.jpg"</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">"Obrazek"</span> /></span>

<span class="hljs-tag">&#x3C;<span class="hljs-name">script</span>></span><span class="javascript">
  <span class="hljs-keyword">const</span> img = <span class="hljs-variable language_">document</span>.<span class="hljs-title function_">getElementById</span>(<span class="hljs-string">"myImage"</span>);
  img.<span class="hljs-property">src</span> = <span class="hljs-string">"newImage.jpg"</span>;
  img.<span class="hljs-property">alt</span> = <span class="hljs-string">"Nowy obrazek"</span>;
</span><span class="hljs-tag">&#x3C;/<span class="hljs-name">script</span>></span>
</code></pre>
<h4>Dodawanie elementów</h4>
<pre><code class="hljs language-html"><span class="hljs-tag">&#x3C;<span class="hljs-name">ul</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"myList"</span>></span>
  <span class="hljs-tag">&#x3C;<span class="hljs-name">li</span>></span>Element 1<span class="hljs-tag">&#x3C;/<span class="hljs-name">li</span>></span>
<span class="hljs-tag">&#x3C;/<span class="hljs-name">ul</span>></span>

<span class="hljs-tag">&#x3C;<span class="hljs-name">script</span>></span><span class="javascript">
  <span class="hljs-keyword">const</span> list = <span class="hljs-variable language_">document</span>.<span class="hljs-title function_">getElementById</span>(<span class="hljs-string">"myList"</span>);
  <span class="hljs-keyword">const</span> newItem = <span class="hljs-variable language_">document</span>.<span class="hljs-title function_">createElement</span>(<span class="hljs-string">"li"</span>);
  newItem.<span class="hljs-property">textContent</span> = <span class="hljs-string">"Element 2"</span>;
  list.<span class="hljs-title function_">appendChild</span>(newItem);
</span><span class="hljs-tag">&#x3C;/<span class="hljs-name">script</span>></span>
</code></pre>
<h4>Usuwanie elementów</h4>
<pre><code class="hljs language-html"><span class="hljs-tag">&#x3C;<span class="hljs-name">p</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"myParagraph"</span>></span>To jest akapit.<span class="hljs-tag">&#x3C;/<span class="hljs-name">p</span>></span>

<span class="hljs-tag">&#x3C;<span class="hljs-name">script</span>></span><span class="javascript">
  <span class="hljs-keyword">const</span> para = <span class="hljs-variable language_">document</span>.<span class="hljs-title function_">getElementById</span>(<span class="hljs-string">"myParagraph"</span>);
  para.<span class="hljs-title function_">remove</span>();
</span><span class="hljs-tag">&#x3C;/<span class="hljs-name">script</span>></span>
</code></pre>
<h2>Zadania do wykonania</h2>
<h3>Zadanie 1</h3>
<p>Napisz kod HTML z listą (<code>ul</code>) i trzema elementami (<code>li</code>). Następnie za pomocą JavaScript dodaj czwarty element do listy.</p>
<details>
  <summary>
    <span>Pokaż rozwiązanie</span>
  </summary>
<pre><code class="hljs language-html"><span class="hljs-meta">&#x3C;!DOCTYPE <span class="hljs-keyword">html</span>></span>
<span class="hljs-tag">&#x3C;<span class="hljs-name">html</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">"pl"</span>></span>
  <span class="hljs-tag">&#x3C;<span class="hljs-name">head</span>></span>
    <span class="hljs-tag">&#x3C;<span class="hljs-name">meta</span> <span class="hljs-attr">charset</span>=<span class="hljs-string">"UTF-8"</span> /></span>
    <span class="hljs-tag">&#x3C;<span class="hljs-name">meta</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"viewport"</span> <span class="hljs-attr">content</span>=<span class="hljs-string">"width=device-width, initial-scale=1.0"</span> /></span>
    <span class="hljs-tag">&#x3C;<span class="hljs-name">title</span>></span>Lista<span class="hljs-tag">&#x3C;/<span class="hljs-name">title</span>></span>
  <span class="hljs-tag">&#x3C;/<span class="hljs-name">head</span>></span>
  <span class="hljs-tag">&#x3C;<span class="hljs-name">body</span>></span>
    <span class="hljs-tag">&#x3C;<span class="hljs-name">ul</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"myList"</span>></span>
      <span class="hljs-tag">&#x3C;<span class="hljs-name">li</span>></span>Element 1<span class="hljs-tag">&#x3C;/<span class="hljs-name">li</span>></span>
      <span class="hljs-tag">&#x3C;<span class="hljs-name">li</span>></span>Element 2<span class="hljs-tag">&#x3C;/<span class="hljs-name">li</span>></span>
      <span class="hljs-tag">&#x3C;<span class="hljs-name">li</span>></span>Element 3<span class="hljs-tag">&#x3C;/<span class="hljs-name">li</span>></span>
    <span class="hljs-tag">&#x3C;/<span class="hljs-name">ul</span>></span>
    <span class="hljs-tag">&#x3C;<span class="hljs-name">script</span>></span><span class="javascript">
      <span class="hljs-keyword">const</span> list = <span class="hljs-variable language_">document</span>.<span class="hljs-title function_">getElementById</span>(<span class="hljs-string">"myList"</span>);
      <span class="hljs-keyword">const</span> newItem = <span class="hljs-variable language_">document</span>.<span class="hljs-title function_">createElement</span>(<span class="hljs-string">"li"</span>);
      newItem.<span class="hljs-property">textContent</span> = <span class="hljs-string">"Element 4"</span>;
      list.<span class="hljs-title function_">appendChild</span>(newItem);
    </span><span class="hljs-tag">&#x3C;/<span class="hljs-name">script</span>></span>
  <span class="hljs-tag">&#x3C;/<span class="hljs-name">body</span>></span>
<span class="hljs-tag">&#x3C;/<span class="hljs-name">html</span>></span>
</code></pre>
</details>
<h3>Zadanie 2</h3>
<p>Utwórz formularz z polem tekstowym i przyciskiem. Po kliknięciu przycisku zmień tekst przycisku na "Wysłano".</p>
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
    <span class="hljs-tag">&#x3C;<span class="hljs-name">form</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"myForm"</span>></span>
      <span class="hljs-tag">&#x3C;<span class="hljs-name">input</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"text"</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"myInput"</span> /></span>
      <span class="hljs-tag">&#x3C;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"myButton"</span>></span>Wyślij<span class="hljs-tag">&#x3C;/<span class="hljs-name">button</span>></span>
    <span class="hljs-tag">&#x3C;/<span class="hljs-name">form</span>></span>
    <span class="hljs-tag">&#x3C;<span class="hljs-name">script</span>></span><span class="javascript">
      <span class="hljs-keyword">const</span> button = <span class="hljs-variable language_">document</span>.<span class="hljs-title function_">getElementById</span>(<span class="hljs-string">"myButton"</span>);
      button.<span class="hljs-title function_">addEventListener</span>(<span class="hljs-string">"click"</span>, <span class="hljs-function">() =></span> {
        button.<span class="hljs-property">textContent</span> = <span class="hljs-string">"Wysłano"</span>;
      });
    </span><span class="hljs-tag">&#x3C;/<span class="hljs-name">script</span>></span>
  <span class="hljs-tag">&#x3C;/<span class="hljs-name">body</span>></span>
<span class="hljs-tag">&#x3C;/<span class="hljs-name">html</span>></span>
</code></pre>
</details>
<h3>Zadanie 3</h3>
<p>Napisz kod HTML z obrazkiem. Za pomocą JavaScript zmień źródło obrazka na nowe po kliknięciu na niego.</p>
<details>
  <summary>
    <span>Pokaż rozwiązanie</span>
  </summary>
<pre><code class="hljs language-html"><span class="hljs-meta">&#x3C;!DOCTYPE <span class="hljs-keyword">html</span>></span>
<span class="hljs-tag">&#x3C;<span class="hljs-name">html</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">"pl"</span>></span>
  <span class="hljs-tag">&#x3C;<span class="hljs-name">head</span>></span>
    <span class="hljs-tag">&#x3C;<span class="hljs-name">meta</span> <span class="hljs-attr">charset</span>=<span class="hljs-string">"UTF-8"</span> /></span>
    <span class="hljs-tag">&#x3C;<span class="hljs-name">meta</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"viewport"</span> <span class="hljs-attr">content</span>=<span class="hljs-string">"width=device-width, initial-scale=1.0"</span> /></span>
    <span class="hljs-tag">&#x3C;<span class="hljs-name">title</span>></span>Obrazek<span class="hljs-tag">&#x3C;/<span class="hljs-name">title</span>></span>
  <span class="hljs-tag">&#x3C;/<span class="hljs-name">head</span>></span>
  <span class="hljs-tag">&#x3C;<span class="hljs-name">body</span>></span>
    <span class="hljs-tag">&#x3C;<span class="hljs-name">img</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"myImage"</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"image.jpg"</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">"Obrazek"</span> /></span>
    <span class="hljs-tag">&#x3C;<span class="hljs-name">script</span>></span><span class="javascript">
      <span class="hljs-keyword">const</span> img = <span class="hljs-variable language_">document</span>.<span class="hljs-title function_">getElementById</span>(<span class="hljs-string">"myImage"</span>);
      img.<span class="hljs-title function_">addEventListener</span>(<span class="hljs-string">"click"</span>, <span class="hljs-function">() =></span> {
        img.<span class="hljs-property">src</span> = <span class="hljs-string">"newImage.jpg"</span>;
      });
    </span><span class="hljs-tag">&#x3C;/<span class="hljs-name">script</span>></span>
  <span class="hljs-tag">&#x3C;/<span class="hljs-name">body</span>></span>
<span class="hljs-tag">&#x3C;/<span class="hljs-name">html</span>></span>
</code></pre>
</details>
<h3>Zadanie 4</h3>
<p>Utwórz stronę HTML z trzema akapitami. Użyj JavaScript, aby zmienić kolor tekstu wszystkich akapitów na niebieski.</p>
<details>
  <summary>
    <span>Pokaż rozwiązanie</span>
  </summary>
<pre><code class="hljs language-html"><span class="hljs-meta">&#x3C;!DOCTYPE <span class="hljs-keyword">html</span>></span>
<span class="hljs-tag">&#x3C;<span class="hljs-name">html</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">"pl"</span>></span>
  <span class="hljs-tag">&#x3C;<span class="hljs-name">head</span>></span>
    <span class="hljs-tag">&#x3C;<span class="hljs-name">meta</span> <span class="hljs-attr">charset</span>=<span class="hljs-string">"UTF-8"</span> /></span>
    <span class="hljs-tag">&#x3C;<span class="hljs-name">meta</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"viewport"</span> <span class="hljs-attr">content</span>=<span class="hljs-string">"width=device-width, initial-scale=1.0"</span> /></span>
    <span class="hljs-tag">&#x3C;<span class="hljs-name">title</span>></span>Kolor tekstu<span class="hljs-tag">&#x3C;/<span class="hljs-name">title</span>></span>
  <span class="hljs-tag">&#x3C;/<span class="hljs-name">head</span>></span>
  <span class="hljs-tag">&#x3C;<span class="hljs-name">body</span>></span>
    <span class="hljs-tag">&#x3C;<span class="hljs-name">p</span>></span>Akapit 1<span class="hljs-tag">&#x3C;/<span class="hljs-name">p</span>></span>
    <span class="hljs-tag">&#x3C;<span class="hljs-name">p</span>></span>Akapit 2<span class="hljs-tag">&#x3C;/<span class="hljs-name">p</span>></span>
    <span class="hljs-tag">&#x3C;<span class="hljs-name">p</span>></span>Akapit 3<span class="hljs-tag">&#x3C;/<span class="hljs-name">p</span>></span>
    <span class="hljs-tag">&#x3C;<span class="hljs-name">script</span>></span><span class="javascript">
      <span class="hljs-keyword">const</span> paragraphs = <span class="hljs-variable language_">document</span>.<span class="hljs-title function_">querySelectorAll</span>(<span class="hljs-string">"p"</span>);
      paragraphs.<span class="hljs-title function_">forEach</span>(<span class="hljs-function">(<span class="hljs-params">p</span>) =></span> {
        p.<span class="hljs-property">style</span>.<span class="hljs-property">color</span> = <span class="hljs-string">"blue"</span>;
      });
    </span><span class="hljs-tag">&#x3C;/<span class="hljs-name">script</span>></span>
  <span class="hljs-tag">&#x3C;/<span class="hljs-name">body</span>></span>
<span class="hljs-tag">&#x3C;/<span class="hljs-name">html</span>></span>
</code></pre>
</details>
<p>To tyle na temat podstaw DOM! Zachęcam do dalszego eksperymentowania i zgłębiania tego tematu.</p>`,title:"Czym jest DOM?",description:"Czym jest DOM? DOM (Document Object Model) to interfejs programistyczny dla dokumentów HTML i XML. Umożliwia dynamiczne manipulowanie strukturą, stylem i treścią dokumentów. DOM reprezentuje dokument jako drzewo obiektów, gdzie każdy element, atrybut i tekst w dokumencie jest węzłem drzewa.",keywords:["kurs","html","dom","struktura","wprowadzenie"],categories:["wprowadzenie","html"],createdAt:"2024-06-30T00:00:00.000Z"},r=Object.freeze(Object.defineProperty({__proto__:null,default:p},Symbol.toStringTag,{value:"Module"})),e={id:"d9ba0e4a-f19b-442c-b05c-e37b0bb03cae",slug:"wprowadzenie-do-html",content:`<h2>Co to jest HTML?</h2>
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
<p>To tyle na temat podstaw HTML! Zachęcam do dalszego eksperymentowania i zgłębiania tego tematu, aby tworzyć bardziej złożone i interaktywne strony internetowe.</p>`,title:"Wprowadzenie do HTML",description:"Co to jest HTML? HTML (HyperText Markup Language) to podstawowy język wykorzystywany do tworzenia i strukturyzowania stron internetowych. HTML używa elementów, które definiują różne części dokumentu, takie jak nagłówki, akapity, linki, obrazy, i wiele innych.",keywords:["kurs","html","dom","struktura","wprowadzenie"],categories:["wprowadzenie","html"],createdAt:"2024-06-30T00:00:00.000Z"},i=Object.freeze(Object.defineProperty({__proto__:null,default:e},Symbol.toStringTag,{value:"Module"})),c={id:"b49e3ca6-f823-4eb8-bb8e-b3a6c6d3a434",slug:"wprowadzenie-do-javascript",content:`<p>JavaScript jest językiem programowania, który jest powszechnie stosowany do tworzenia dynamicznych i interaktywnych stron internetowych. W tym kursie omówimy podstawy JavaScript, w tym zmienne, typy danych, operatory, struktury kontrolne, funkcje oraz obiekty.</p>
<h2>Zmienne</h2>
<p>Zmienne w JavaScript mogą być deklarowane za pomocą <code>var</code>, <code>let</code> i <code>const</code>.</p>
<h3>Przykłady:</h3>
<pre><code class="hljs language-javascript"><span class="hljs-keyword">var</span> x = <span class="hljs-number">5</span>; <span class="hljs-comment">// Deklaracja zmiennej za pomocą var</span>
<span class="hljs-keyword">let</span> y = <span class="hljs-number">10</span>; <span class="hljs-comment">// Deklaracja zmiennej za pomocą let</span>
<span class="hljs-keyword">const</span> z = <span class="hljs-number">15</span>; <span class="hljs-comment">// Deklaracja stałej za pomocą const</span>
</code></pre>
<h2>Typy danych</h2>
<p>JavaScript obsługuje różne typy danych, w tym liczby, łańcuchy znaków (string), boolean, obiekty i tablice.</p>
<h3>Przykłady:</h3>
<pre><code class="hljs language-javascript"><span class="hljs-keyword">let</span> liczba = <span class="hljs-number">42</span>; <span class="hljs-comment">// Typ danych: Number</span>
<span class="hljs-keyword">let</span> tekst = <span class="hljs-string">"Hello, World!"</span>; <span class="hljs-comment">// Typ danych: String</span>
<span class="hljs-keyword">let</span> prawda = <span class="hljs-literal">true</span>; <span class="hljs-comment">// Typ danych: Boolean</span>
<span class="hljs-keyword">let</span> obiekt = { <span class="hljs-attr">imie</span>: <span class="hljs-string">"Jan"</span>, <span class="hljs-attr">wiek</span>: <span class="hljs-number">30</span> }; <span class="hljs-comment">// Typ danych: Object</span>
<span class="hljs-keyword">let</span> tablica = [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>]; <span class="hljs-comment">// Typ danych: Array</span>
</code></pre>
<h2>Operatory</h2>
<p>Operatory w JavaScript obejmują arytmetyczne, porównania, logiczne i przypisania.</p>
<h3>Przykłady:</h3>
<pre><code class="hljs language-javascript"><span class="hljs-comment">// Operatory arytmetyczne</span>
<span class="hljs-keyword">let</span> suma = <span class="hljs-number">10</span> + <span class="hljs-number">5</span>; <span class="hljs-comment">// Dodawanie</span>
<span class="hljs-keyword">let</span> roznica = <span class="hljs-number">10</span> - <span class="hljs-number">5</span>; <span class="hljs-comment">// Odejmowanie</span>
<span class="hljs-keyword">let</span> iloczyn = <span class="hljs-number">10</span> * <span class="hljs-number">5</span>; <span class="hljs-comment">// Mnożenie</span>
<span class="hljs-keyword">let</span> iloraz = <span class="hljs-number">10</span> / <span class="hljs-number">5</span>; <span class="hljs-comment">// Dzielenie</span>

<span class="hljs-comment">// Operatory porównania</span>
<span class="hljs-keyword">let</span> rowne = <span class="hljs-number">10</span> == <span class="hljs-number">10</span>; <span class="hljs-comment">// Porównanie wartości</span>
<span class="hljs-keyword">let</span> identyczne = <span class="hljs-number">10</span> === <span class="hljs-number">10</span>; <span class="hljs-comment">// Porównanie wartości i typu</span>
<span class="hljs-keyword">let</span> nierowne = <span class="hljs-number">10</span> != <span class="hljs-number">5</span>; <span class="hljs-comment">// Nierówność</span>

<span class="hljs-comment">// Operatory logiczne</span>
<span class="hljs-keyword">let</span> iOperator = <span class="hljs-literal">true</span> &#x26;&#x26; <span class="hljs-literal">false</span>; <span class="hljs-comment">// Operator logiczny AND</span>
<span class="hljs-keyword">let</span> lubOperator = <span class="hljs-literal">true</span> || <span class="hljs-literal">false</span>; <span class="hljs-comment">// Operator logiczny OR</span>
<span class="hljs-keyword">let</span> nieOperator = !<span class="hljs-literal">true</span>; <span class="hljs-comment">// Operator logiczny NOT</span>

<span class="hljs-comment">// Operatory przypisania</span>
<span class="hljs-keyword">let</span> a = <span class="hljs-number">10</span>;
a += <span class="hljs-number">5</span>; <span class="hljs-comment">// Dodanie i przypisanie</span>
a -= <span class="hljs-number">5</span>; <span class="hljs-comment">// Odejmowanie i przypisanie</span>
</code></pre>
<h2>Struktury kontrolne</h2>
<h3>Instrukcja warunkowa <code>if</code></h3>
<p>Instrukcja <code>if</code> służy do wykonywania kodu warunkowo.</p>
<pre><code class="hljs language-javascript"><span class="hljs-keyword">let</span> wiek = <span class="hljs-number">18</span>;

<span class="hljs-keyword">if</span> (wiek >= <span class="hljs-number">18</span>) {
  <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">"Jesteś pełnoletni"</span>);
} <span class="hljs-keyword">else</span> {
  <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">"Jesteś niepełnoletni"</span>);
}
</code></pre>
<h3>Pętla <code>for</code></h3>
<p>Pętla <code>for</code> służy do wykonywania kodu wielokrotnie.</p>
<pre><code class="hljs language-javascript"><span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> i = <span class="hljs-number">0</span>; i &#x3C; <span class="hljs-number">5</span>; i++) {
  <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(i);
}
</code></pre>
<h3>Pętla <code>while</code></h3>
<p>Pętla <code>while</code> służy do wykonywania kodu, dopóki warunek jest prawdziwy.</p>
<pre><code class="hljs language-javascript"><span class="hljs-keyword">let</span> i = <span class="hljs-number">0</span>;

<span class="hljs-keyword">while</span> (i &#x3C; <span class="hljs-number">5</span>) {
  <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(i);
  i++;
}
</code></pre>
<h2>Funkcje</h2>
<p>Funkcje pozwalają na grupowanie kodu, który może być wykonywany wielokrotnie.</p>
<h3>Deklaracja funkcji</h3>
<pre><code class="hljs language-javascript"><span class="hljs-keyword">function</span> <span class="hljs-title function_">dodaj</span>(<span class="hljs-params">a, b</span>) {
  <span class="hljs-keyword">return</span> a + b;
}

<span class="hljs-keyword">let</span> wynik = <span class="hljs-title function_">dodaj</span>(<span class="hljs-number">5</span>, <span class="hljs-number">10</span>);
<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(wynik); <span class="hljs-comment">// 15</span>
</code></pre>
<h3>Funkcje strzałkowe</h3>
<p>Funkcje strzałkowe to krótszy zapis funkcji.</p>
<pre><code class="hljs language-javascript"><span class="hljs-keyword">const</span> <span class="hljs-title function_">dodaj</span> = (<span class="hljs-params">a, b</span>) => a + b;
<span class="hljs-keyword">let</span> wynik = <span class="hljs-title function_">dodaj</span>(<span class="hljs-number">5</span>, <span class="hljs-number">10</span>);
<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(wynik); <span class="hljs-comment">// 15</span>
</code></pre>
<h2>Obiekty</h2>
<p>Obiekty pozwalają na grupowanie powiązanych wartości i funkcji.</p>
<h3>Tworzenie obiektu</h3>
<pre><code class="hljs language-javascript"><span class="hljs-keyword">let</span> osoba = {
  <span class="hljs-attr">imie</span>: <span class="hljs-string">"Jan"</span>,
  <span class="hljs-attr">wiek</span>: <span class="hljs-number">30</span>,
  <span class="hljs-attr">przedstawSie</span>: <span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) {
    <span class="hljs-keyword">return</span> <span class="hljs-string">\`Cześć, mam na imię <span class="hljs-subst">\${<span class="hljs-variable language_">this</span>.imie}</span> i mam <span class="hljs-subst">\${<span class="hljs-variable language_">this</span>.wiek}</span> lat.\`</span>;
  },
};

<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(osoba.<span class="hljs-title function_">przedstawSie</span>()); <span class="hljs-comment">// Cześć, mam na imię Jan i mam 30 lat.</span>
</code></pre>
<h2>Tablice</h2>
<p>Tablice to struktury danych, które przechowują listę elementów.</p>
<h3>Tworzenie i manipulacja tablicami</h3>
<pre><code class="hljs language-javascript"><span class="hljs-keyword">let</span> liczby = [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>];
<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(liczby[<span class="hljs-number">0</span>]); <span class="hljs-comment">// 1</span>

liczby.<span class="hljs-title function_">push</span>(<span class="hljs-number">6</span>); <span class="hljs-comment">// Dodanie elementu na końcu tablicy</span>
<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(liczby); <span class="hljs-comment">// [1, 2, 3, 4, 5, 6]</span>

liczby.<span class="hljs-title function_">pop</span>(); <span class="hljs-comment">// Usunięcie ostatniego elementu z tablicy</span>
<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(liczby); <span class="hljs-comment">// [1, 2, 3, 4, 5]</span>
</code></pre>
<h2>Zadania do wykonania</h2>
<h3>Zadanie 1</h3>
<p>Napisz funkcję, która przyjmuje dwie liczby jako argumenty i zwraca ich iloczyn.</p>
<details>
  <summary>
    <span>Pokaż rozwiązanie</span>
  </summary>
<pre><code class="hljs language-javascript"><span class="hljs-keyword">function</span> <span class="hljs-title function_">iloczyn</span>(<span class="hljs-params">a, b</span>) {
  <span class="hljs-keyword">return</span> a * b;
}

<span class="hljs-keyword">let</span> wynik = <span class="hljs-title function_">iloczyn</span>(<span class="hljs-number">5</span>, <span class="hljs-number">10</span>);
<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(wynik); <span class="hljs-comment">// 50</span>
</code></pre>
</details>
<h3>Zadanie 2</h3>
<p>Utwórz obiekt reprezentujący książkę z atrybutami <code>tytul</code>, <code>autor</code> i <code>rok</code>. Następnie dodaj metodę, która zwraca opis książki.</p>
<details>
  <summary>
    <span>Pokaż rozwiązanie</span>
  </summary>
<pre><code class="hljs language-javascript"><span class="hljs-keyword">let</span> ksiazka = {
  <span class="hljs-attr">tytul</span>: <span class="hljs-string">"W pustyni i w puszczy"</span>,
  <span class="hljs-attr">autor</span>: <span class="hljs-string">"Henryk Sienkiewicz"</span>,
  <span class="hljs-attr">rok</span>: <span class="hljs-number">1911</span>,
  <span class="hljs-attr">opis</span>: <span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) {
    <span class="hljs-keyword">return</span> <span class="hljs-string">\`<span class="hljs-subst">\${<span class="hljs-variable language_">this</span>.tytul}</span> to książka napisana przez <span class="hljs-subst">\${<span class="hljs-variable language_">this</span>.autor}</span> w roku <span class="hljs-subst">\${<span class="hljs-variable language_">this</span>.rok}</span>.\`</span>;
  },
};

<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(ksiazka.<span class="hljs-title function_">opis</span>()); <span class="hljs-comment">// W pustyni i w puszczy to książka napisana przez Henryk Sienkiewicz w roku 1911.</span>
</code></pre>
</details>
<h3>Zadanie 3</h3>
<p>Napisz funkcję, która przyjmuje tablicę liczb i zwraca największą liczbę z tej tablicy.</p>
<details>
  <summary>
    <span>Pokaż rozwiązanie</span>
  </summary>
<pre><code class="hljs language-javascript"><span class="hljs-keyword">function</span> <span class="hljs-title function_">znajdzNajwieksza</span>(<span class="hljs-params">tablica</span>) {
  <span class="hljs-keyword">let</span> najwieksza = tablica[<span class="hljs-number">0</span>];
  <span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> i = <span class="hljs-number">1</span>; i &#x3C; tablica.<span class="hljs-property">length</span>; i++) {
    <span class="hljs-keyword">if</span> (tablica[i] > najwieksza) {
      najwieksza = tablica[i];
    }
  }
  <span class="hljs-keyword">return</span> najwieksza;
}

<span class="hljs-keyword">let</span> liczby = [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>];
<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-title function_">znajdzNajwieksza</span>(liczby)); <span class="hljs-comment">// 5</span>
</code></pre>
</details>
<h3>Zadanie 4</h3>
<p>Utwórz tablicę, która zawiera kilka imion. Następnie użyj pętli <code>for</code>, aby wyświetlić każde imię w konsoli.</p>
<details>
  <summary>
    <span>Pokaż rozwiązanie</span>
  </summary>
<pre><code class="hljs language-javascript"><span class="hljs-keyword">let</span> imiona = [<span class="hljs-string">"Jan"</span>, <span class="hljs-string">"Anna"</span>, <span class="hljs-string">"Krzysztof"</span>, <span class="hljs-string">"Maria"</span>];

<span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> i = <span class="hljs-number">0</span>; i &#x3C; imiona.<span class="hljs-property">length</span>; i++) {
  <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(imiona[i]);
}
<span class="hljs-comment">// Jan</span>
<span class="hljs-comment">// Anna</span>
<span class="hljs-comment">// Krzysztof</span>
<span class="hljs-comment">// Maria</span>
</code></pre>
</details>
<p>To tyle na temat podstaw JavaScript! Zachęcam do dalszego eksperymentowania i zgłębiania tego tematu, aby tworzyć bardziej zaawansowane i interaktywne aplikacje.</p>`,title:"Wprowadzenie do JavaScript",description:"JavaScript jest językiem programowania, który jest powszechnie stosowany do tworzenia dynamicznych i interaktywnych stron internetowych. W tym kursie omówimy podstawy JavaScript, w tym zmienne, typy danych, operatory, struktury kontrolne, funkcje oraz obiekty.",keywords:["javascript","kurs","wprowadzenie","przewodnik","web","frontend"],categories:["wprowadzenie","javascript"],createdAt:"2024-06-30T00:00:00.000Z"},m=Object.freeze(Object.defineProperty({__proto__:null,default:c},Symbol.toStringTag,{value:"Module"}));export{t as _,h as a,j as b,o as c,r as d,i as e,m as f};
