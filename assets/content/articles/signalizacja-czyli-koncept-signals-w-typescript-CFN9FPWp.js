const s={id:"5382dd66-2da0-46f7-bbc5-24719a125475",slug:"signalizacja-czyli-koncept-signals-w-typescript",content:`<p>Signal to koncepcja pochodząca z programowania reaktywnego, której celem jest uproszczenie komunikacji między komponentami oraz zarządzania stanem aplikacji. W TypeScript, dzięki silnemu typowaniu, można zaimplementować sygnały w sposób bezpieczny i efektywny.</p>
<h2>Czym jest Signal?</h2>
<p>Signal (sygnał) jest obiektem, który reprezentuje strumień danych, który może być obserwowany i reagować na zmiany tych danych. W kontekście frontendu, sygnały mogą być używane do reagowania na zdarzenia użytkownika, zmiany stanu aplikacji, czy asynchroniczne operacje, takie jak żądania sieciowe.</p>
<h2>Korzyści z używania Signal</h2>
<ol>
<li><strong>Reaktywność:</strong> Umożliwiają budowanie aplikacji, które automatycznie reagują na zmiany danych.</li>
<li><strong>Czytelność:</strong> Poprawiają czytelność kodu poprzez eliminację złożonych zależności i ręcznego zarządzania stanem.</li>
<li><strong>Modularność:</strong> Ułatwiają zarządzanie stanem w skomplikowanych aplikacjach poprzez oddzielenie logiki zarządzania stanem od komponentów.</li>
</ol>
<h2>Implementacja Signal w TypeScript</h2>
<h3>Przykład 1: Prosty Signal</h3>
<p>Poniżej przedstawiono prostą implementację sygnału w TypeScript:</p>
<pre><code class="hljs language-typescript"><span class="hljs-keyword">type</span> <span class="hljs-title class_">Listener</span>&#x3C;T> = <span class="hljs-function">(<span class="hljs-params">value: T</span>) =></span> <span class="hljs-built_in">void</span>;

<span class="hljs-keyword">class</span> <span class="hljs-title class_">Signal</span>&#x3C;T> {
  <span class="hljs-keyword">private</span> <span class="hljs-attr">listeners</span>: <span class="hljs-title class_">Listener</span>&#x3C;T>[] = [];

  <span class="hljs-title function_">subscribe</span>(<span class="hljs-attr">listener</span>: <span class="hljs-title class_">Listener</span>&#x3C;T>): <span class="hljs-built_in">void</span> {
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">listeners</span>.<span class="hljs-title function_">push</span>(listener);
  }

  <span class="hljs-title function_">unsubscribe</span>(<span class="hljs-attr">listener</span>: <span class="hljs-title class_">Listener</span>&#x3C;T>): <span class="hljs-built_in">void</span> {
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">listeners</span> = <span class="hljs-variable language_">this</span>.<span class="hljs-property">listeners</span>.<span class="hljs-title function_">filter</span>(<span class="hljs-function">(<span class="hljs-params">l</span>) =></span> l !== listener);
  }

  <span class="hljs-title function_">emit</span>(<span class="hljs-attr">value</span>: T): <span class="hljs-built_in">void</span> {
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">listeners</span>.<span class="hljs-title function_">forEach</span>(<span class="hljs-function">(<span class="hljs-params">listener</span>) =></span> <span class="hljs-title function_">listener</span>(value));
  }
}

<span class="hljs-comment">// Użycie sygnału</span>
<span class="hljs-keyword">const</span> numberSignal = <span class="hljs-keyword">new</span> <span class="hljs-title class_">Signal</span>&#x3C;<span class="hljs-built_in">number</span>>();

numberSignal.<span class="hljs-title function_">subscribe</span>(<span class="hljs-function">(<span class="hljs-params">value</span>) =></span> {
  <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">\`Received value: <span class="hljs-subst">\${value}</span>\`</span>);
});

numberSignal.<span class="hljs-title function_">emit</span>(<span class="hljs-number">42</span>); <span class="hljs-comment">// Output: Received value: 42</span>
</code></pre>
<p>W tym przykładzie zdefiniowano klasę <code>Signal</code>, która umożliwia subskrybowanie, usuwanie subskrypcji oraz emitowanie wartości do wszystkich subskrybentów.</p>
<h3>Przykład 2: Zaawansowany Signal z Typowaniem</h3>
<p>Poniższy przykład przedstawia bardziej zaawansowaną implementację sygnału z wykorzystaniem typów generycznych:</p>
<pre><code class="hljs language-typescript"><span class="hljs-keyword">type</span> <span class="hljs-title class_">Listener</span>&#x3C;T> = <span class="hljs-function">(<span class="hljs-params">value: T</span>) =></span> <span class="hljs-built_in">void</span>;

<span class="hljs-keyword">class</span> <span class="hljs-title class_">Signal</span>&#x3C;T> {
  <span class="hljs-keyword">private</span> <span class="hljs-attr">listeners</span>: <span class="hljs-title class_">Set</span>&#x3C;<span class="hljs-title class_">Listener</span>&#x3C;T>> = <span class="hljs-keyword">new</span> <span class="hljs-title class_">Set</span>();

  <span class="hljs-title function_">subscribe</span>(<span class="hljs-attr">listener</span>: <span class="hljs-title class_">Listener</span>&#x3C;T>): <span class="hljs-built_in">void</span> {
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">listeners</span>.<span class="hljs-title function_">add</span>(listener);
  }

  <span class="hljs-title function_">unsubscribe</span>(<span class="hljs-attr">listener</span>: <span class="hljs-title class_">Listener</span>&#x3C;T>): <span class="hljs-built_in">void</span> {
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">listeners</span>.<span class="hljs-title function_">delete</span>(listener);
  }

  <span class="hljs-title function_">emit</span>(<span class="hljs-attr">value</span>: T): <span class="hljs-built_in">void</span> {
    <span class="hljs-keyword">for</span> (<span class="hljs-keyword">const</span> listener <span class="hljs-keyword">of</span> <span class="hljs-variable language_">this</span>.<span class="hljs-property">listeners</span>) {
      <span class="hljs-title function_">listener</span>(value);
    }
  }
}

<span class="hljs-comment">// Użycie sygnału z typem generycznym</span>
<span class="hljs-keyword">interface</span> <span class="hljs-title class_">User</span> {
  <span class="hljs-attr">name</span>: <span class="hljs-built_in">string</span>;
  <span class="hljs-attr">age</span>: <span class="hljs-built_in">number</span>;
}

<span class="hljs-keyword">const</span> userSignal = <span class="hljs-keyword">new</span> <span class="hljs-title class_">Signal</span>&#x3C;<span class="hljs-title class_">User</span>>();

userSignal.<span class="hljs-title function_">subscribe</span>(<span class="hljs-function">(<span class="hljs-params">user</span>) =></span> {
  <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">\`User: <span class="hljs-subst">\${user.name}</span>, Age: <span class="hljs-subst">\${user.age}</span>\`</span>);
});

userSignal.<span class="hljs-title function_">emit</span>({ <span class="hljs-attr">name</span>: <span class="hljs-string">"John Doe"</span>, <span class="hljs-attr">age</span>: <span class="hljs-number">30</span> }); <span class="hljs-comment">// Output: User: John Doe, Age: 30</span>
</code></pre>
<p>W tym przykładzie <code>Signal</code> używa <code>Set</code> do przechowywania subskrybentów, co zapobiega wielokrotnemu dodawaniu tego samego subskrybenta. Zastosowanie typów generycznych pozwala na tworzenie sygnałów obsługujących dowolne typy danych.</p>
<h2>Zakończenie</h2>
<p>Signal w TypeScript to potężne narzędzie do budowania reaktywnych aplikacji, które mogą automatycznie reagować na zmiany stanu. Dzięki silnemu typowaniu TypeScript, implementacja sygnałów jest bezpieczna i efektywna, co przyczynia się do tworzenia bardziej zrozumiałych i łatwiejszych w utrzymaniu kodów. Implementując sygnały, możemy znacząco uprościć zarządzanie stanem w naszych aplikacjach i poprawić ich architekturę.</p>`,title:"Signalizacja, czyli koncept Signals w Typescript",description:"Signal to koncepcja pochodząca z programowania reaktywnego, której celem jest uproszczenie komunikacji między komponentami oraz zarządzania stanem aplikacji. W TypeScript, dzięki silnemu typowaniu, można zaimplementować sygnały w sposób bezpieczny i efektywny.",keywords:["typescript","wzorce","signals"],categories:["typescript","wzorce"],createdAt:"2024-06-20T00:00:00.000Z"};export{s as default};
