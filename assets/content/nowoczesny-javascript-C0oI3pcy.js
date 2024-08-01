const s={id:"dd43ff8d-6133-46ab-90a1-2443e6a4ce7e",slug:"nowoczesny-javascript",content:`<p>JavaScript jest językiem programowania, który jest powszechnie stosowany do tworzenia dynamicznych i interaktywnych stron internetowych. W ciągu ostatnich lat JavaScript znacznie ewoluował, wprowadzając nowe funkcje i poprawiając istniejące mechanizmy. W tym kursie omówimy najważniejsze elementy nowoczesnego JavaScript, w tym ES6 i nowsze.</p>
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
<p>To tyle na temat podstaw nowoczesnego JavaScript! Zachęcam do dalszego eksperymentowania i zgłębiania tego tematu, aby tworzyć bardziej zaawansowane i interaktywne aplikacje.</p>`,title:"Renesans w JS, czyli nowoczesny JavaScript",description:"JavaScript jest językiem programowania, który jest powszechnie stosowany do tworzenia dynamicznych i interaktywnych stron internetowych. W ciągu ostatnich lat JavaScript znacznie ewoluował, wprowadzając nowe funkcje i poprawiając istniejące mechanizmy. W tym kursie omówimy najważniejsze elementy nowoczesnego JavaScript, w tym ES6 i nowsze.",keywords:["javascript","kurs","wprowadzenie","przewodnik","web","frontend"],categories:["wprowadzenie","javascript"],createdAt:"2024-06-30T00:00:00.000Z"};export{s as default};
