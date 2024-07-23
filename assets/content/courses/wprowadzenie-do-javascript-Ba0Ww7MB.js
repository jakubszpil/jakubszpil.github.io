const s={id:"275807b3-07fc-4348-887b-32e4661eb788",slug:"wprowadzenie-do-javascript",content:`<p>JavaScript jest językiem programowania, który jest powszechnie stosowany do tworzenia dynamicznych i interaktywnych stron internetowych. W tym kursie omówimy podstawy JavaScript, w tym zmienne, typy danych, operatory, struktury kontrolne, funkcje oraz obiekty.</p>
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
<p>To tyle na temat podstaw JavaScript! Zachęcam do dalszego eksperymentowania i zgłębiania tego tematu, aby tworzyć bardziej zaawansowane i interaktywne aplikacje.</p>`,title:"Wprowadzenie do JavaScript",description:"JavaScript jest językiem programowania, który jest powszechnie stosowany do tworzenia dynamicznych i interaktywnych stron internetowych. W tym kursie omówimy podstawy JavaScript, w tym zmienne, typy danych, operatory, struktury kontrolne, funkcje oraz obiekty.",keywords:["javascript","kurs","wprowadzenie","przewodnik","web","frontend"],categories:["wprowadzenie","javascript"],createdAt:"2024-06-30T00:00:00.000Z"};export{s as default};
