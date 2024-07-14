const s={id:"9b8703cf-c357-425a-8c49-b484d4c0adbd",slug:"wprowadzenie-do-dom",content:`<h2>Wprowadzenie</h2>
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
<p>To tyle na temat podstaw DOM! Zachęcam do dalszego eksperymentowania i zgłębiania tego tematu.</p>`,title:"Czym jest DOM?",description:"Czym jest DOM? DOM (Document Object Model) to interfejs programistyczny dla dokumentów HTML i XML. Umożliwia dynamiczne manipulowanie strukturą, stylem i treścią dokumentów. DOM reprezentuje dokument jako drzewo obiektów, gdzie każdy element, atrybut i tekst w dokumencie jest węzłem drzewa.",keywords:["kurs","html","dom","struktura","wprowadzenie"],categories:["wprowadzenie","html"],createdAt:"2024-06-30T00:00:00.000Z"},a=Object.freeze(Object.defineProperty({__proto__:null,default:s},Symbol.toStringTag,{value:"Module"}));export{a as _};
