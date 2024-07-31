const s={id:"8f8e6ec6-61e4-454d-83c7-c95bf5e0b621",slug:"szybszy-css-czyli-wprowadzenie-do-bem",content:`<h2>Czym jest BEM?</h2>
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
<p>To tyle na temat podstaw metodyki BEM! Zachęcam do dalszego eksperymentowania i zgłębiania tego tematu, aby tworzyć bardziej modularne i łatwe do utrzymania style CSS.</p>`,title:"Wprowadzenie do metodyki BEM",description:"Czym jest BEM? BEM (Block, Element, Modifier) to metodyka nazewnictwa klas CSS, która pomaga tworzyć komponenty interfejsu użytkownika w sposób modularny i łatwy do utrzymania. BEM dzieli interfejs na bloki, elementy i modyfikatory, co pozwala na lepszą organizację kodu CSS.",keywords:["kurs","css","bem","metodyka","metodyki","stylowanie","html"],categories:["wprowadzenie","css","html"],createdAt:"2024-06-30T00:00:00.000Z"};export{s as default};
