const s={id:"69f3c0c2-9956-4fa7-8318-1b60cecfb420",slug:"obserwatorium-czyli-wzorzec-projektowy-obserwatora",content:`<p>Wzorzec projektowy Obserwator (ang. Observer) jest jednym z najważniejszych wzorców projektowych, szczególnie użytecznym w kontekście programowania reaktywnego i aplikacji, które muszą reagować na zmiany stanu. W TypeScript możemy zaimplementować ten wzorzec w sposób typowany, co dodatkowo zwiększa bezpieczeństwo i czytelność kodu.</p>
<h2>Czym jest Wzorzec Obserwatora?</h2>
<p>Wzorzec Obserwatora polega na tym, że obiekt (obserwowany) zarządza listą zależnych obiektów (obserwatorów) i automatycznie powiadamia ich o zmianach swojego stanu. Jest to realizowane za pomocą metod do subskrybowania, odsubskrybowania oraz powiadamiania obserwatorów.</p>
<h2>Korzyści z używania Wzorca Obserwatora</h2>
<ol>
<li><strong>Reaktywność:</strong> Automatyczne powiadamianie obserwatorów o zmianach stanu.</li>
<li><strong>Luźne Powiązania:</strong> Obserwatorzy nie muszą znać szczegółów implementacji obiektu, który obserwują.</li>
<li><strong>Elastyczność:</strong> Łatwość dodawania nowych obserwatorów bez zmiany istniejącego kodu.</li>
</ol>
<h2>Implementacja Wzorca Obserwatora w TypeScript</h2>
<h3>Przykład 1: Prosta Implementacja</h3>
<p>Poniżej znajduje się prosta implementacja wzorca Obserwatora w TypeScript:</p>
<pre><code class="hljs language-typescript"><span class="hljs-comment">// Interfejs obserwatora</span>
<span class="hljs-keyword">interface</span> <span class="hljs-title class_">Observer</span> {
  <span class="hljs-title function_">update</span>(<span class="hljs-attr">message</span>: <span class="hljs-built_in">string</span>): <span class="hljs-built_in">void</span>;
}

<span class="hljs-comment">// Klasa obserwowana</span>
<span class="hljs-keyword">class</span> <span class="hljs-title class_">Subject</span> {
  <span class="hljs-keyword">private</span> <span class="hljs-attr">observers</span>: <span class="hljs-title class_">Observer</span>[] = [];

  <span class="hljs-title function_">subscribe</span>(<span class="hljs-attr">observer</span>: <span class="hljs-title class_">Observer</span>): <span class="hljs-built_in">void</span> {
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">observers</span>.<span class="hljs-title function_">push</span>(observer);
  }

  <span class="hljs-title function_">unsubscribe</span>(<span class="hljs-attr">observer</span>: <span class="hljs-title class_">Observer</span>): <span class="hljs-built_in">void</span> {
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">observers</span> = <span class="hljs-variable language_">this</span>.<span class="hljs-property">observers</span>.<span class="hljs-title function_">filter</span>(<span class="hljs-function">(<span class="hljs-params">obs</span>) =></span> obs !== observer);
  }

  <span class="hljs-title function_">notify</span>(<span class="hljs-attr">message</span>: <span class="hljs-built_in">string</span>): <span class="hljs-built_in">void</span> {
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">observers</span>.<span class="hljs-title function_">forEach</span>(<span class="hljs-function">(<span class="hljs-params">observer</span>) =></span> observer.<span class="hljs-title function_">update</span>(message));
  }
}

<span class="hljs-comment">// Implementacja obserwatora</span>
<span class="hljs-keyword">class</span> <span class="hljs-title class_">ConcreteObserver</span> <span class="hljs-keyword">implements</span> <span class="hljs-title class_">Observer</span> {
  <span class="hljs-title function_">constructor</span>(<span class="hljs-params"><span class="hljs-keyword">private</span> name: <span class="hljs-built_in">string</span></span>) {}

  <span class="hljs-title function_">update</span>(<span class="hljs-attr">message</span>: <span class="hljs-built_in">string</span>): <span class="hljs-built_in">void</span> {
    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">\`<span class="hljs-subst">\${<span class="hljs-variable language_">this</span>.name}</span> received message: <span class="hljs-subst">\${message}</span>\`</span>);
  }
}

<span class="hljs-comment">// Użycie wzorca Obserwatora</span>
<span class="hljs-keyword">const</span> subject = <span class="hljs-keyword">new</span> <span class="hljs-title class_">Subject</span>();

<span class="hljs-keyword">const</span> observer1 = <span class="hljs-keyword">new</span> <span class="hljs-title class_">ConcreteObserver</span>(<span class="hljs-string">"Observer 1"</span>);
<span class="hljs-keyword">const</span> observer2 = <span class="hljs-keyword">new</span> <span class="hljs-title class_">ConcreteObserver</span>(<span class="hljs-string">"Observer 2"</span>);

subject.<span class="hljs-title function_">subscribe</span>(observer1);
subject.<span class="hljs-title function_">subscribe</span>(observer2);

subject.<span class="hljs-title function_">notify</span>(<span class="hljs-string">"Hello, Observers!"</span>);

<span class="hljs-comment">// Output:</span>
<span class="hljs-comment">// Observer 1 received message: Hello, Observers!</span>
<span class="hljs-comment">// Observer 2 received message: Hello, Observers!</span>
</code></pre>
<p>W tym przykładzie <code>Subject</code> zarządza listą obserwatorów i powiadamia ich za pomocą metody <code>notify</code>. Obserwatorzy implementują interfejs <code>Observer</code>, który definiuje metodę <code>update</code>.</p>
<h3>Przykład 2: Rozbudowana Implementacja z Typowaniem</h3>
<p>W bardziej zaawansowanej wersji możemy użyć typów generycznych do zarządzania różnymi typami danych:</p>
<pre><code class="hljs language-typescript"><span class="hljs-comment">// Interfejs obserwatora z typem generycznym</span>
<span class="hljs-keyword">interface</span> <span class="hljs-title class_">Observer</span>&#x3C;T> {
  <span class="hljs-title function_">update</span>(<span class="hljs-attr">data</span>: T): <span class="hljs-built_in">void</span>;
}

<span class="hljs-comment">// Klasa obserwowana z typem generycznym</span>
<span class="hljs-keyword">class</span> <span class="hljs-title class_">Subject</span>&#x3C;T> {
  <span class="hljs-keyword">private</span> <span class="hljs-attr">observers</span>: <span class="hljs-title class_">Observer</span>&#x3C;T>[] = [];

  <span class="hljs-title function_">subscribe</span>(<span class="hljs-attr">observer</span>: <span class="hljs-title class_">Observer</span>&#x3C;T>): <span class="hljs-built_in">void</span> {
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">observers</span>.<span class="hljs-title function_">push</span>(observer);
  }

  <span class="hljs-title function_">unsubscribe</span>(<span class="hljs-attr">observer</span>: <span class="hljs-title class_">Observer</span>&#x3C;T>): <span class="hljs-built_in">void</span> {
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">observers</span> = <span class="hljs-variable language_">this</span>.<span class="hljs-property">observers</span>.<span class="hljs-title function_">filter</span>(<span class="hljs-function">(<span class="hljs-params">obs</span>) =></span> obs !== observer);
  }

  <span class="hljs-title function_">notify</span>(<span class="hljs-attr">data</span>: T): <span class="hljs-built_in">void</span> {
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">observers</span>.<span class="hljs-title function_">forEach</span>(<span class="hljs-function">(<span class="hljs-params">observer</span>) =></span> observer.<span class="hljs-title function_">update</span>(data));
  }
}

<span class="hljs-comment">// Implementacja obserwatora</span>
<span class="hljs-keyword">class</span> <span class="hljs-title class_">ConcreteObserver</span>&#x3C;T> <span class="hljs-keyword">implements</span> <span class="hljs-title class_">Observer</span>&#x3C;T> {
  <span class="hljs-title function_">constructor</span>(<span class="hljs-params"><span class="hljs-keyword">private</span> name: <span class="hljs-built_in">string</span></span>) {}

  <span class="hljs-title function_">update</span>(<span class="hljs-attr">data</span>: T): <span class="hljs-built_in">void</span> {
    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">\`<span class="hljs-subst">\${<span class="hljs-variable language_">this</span>.name}</span> received data:\`</span>, data);
  }
}

<span class="hljs-comment">// Użycie wzorca Obserwatora z typem generycznym</span>
<span class="hljs-keyword">interface</span> <span class="hljs-title class_">User</span> {
  <span class="hljs-attr">name</span>: <span class="hljs-built_in">string</span>;
  <span class="hljs-attr">age</span>: <span class="hljs-built_in">number</span>;
}

<span class="hljs-keyword">const</span> userSubject = <span class="hljs-keyword">new</span> <span class="hljs-title class_">Subject</span>&#x3C;<span class="hljs-title class_">User</span>>();

<span class="hljs-keyword">const</span> userObserver1 = <span class="hljs-keyword">new</span> <span class="hljs-title class_">ConcreteObserver</span>&#x3C;<span class="hljs-title class_">User</span>>(<span class="hljs-string">"User Observer 1"</span>);
<span class="hljs-keyword">const</span> userObserver2 = <span class="hljs-keyword">new</span> <span class="hljs-title class_">ConcreteObserver</span>&#x3C;<span class="hljs-title class_">User</span>>(<span class="hljs-string">"User Observer 2"</span>);

userSubject.<span class="hljs-title function_">subscribe</span>(userObserver1);
userSubject.<span class="hljs-title function_">subscribe</span>(userObserver2);

userSubject.<span class="hljs-title function_">notify</span>({ <span class="hljs-attr">name</span>: <span class="hljs-string">"Alice"</span>, <span class="hljs-attr">age</span>: <span class="hljs-number">30</span> });

<span class="hljs-comment">// Output:</span>
<span class="hljs-comment">// User Observer 1 received data: { name: 'Alice', age: 30 }</span>
<span class="hljs-comment">// User Observer 2 received data: { name: 'Alice', age: 30 }</span>
</code></pre>
<p>W tej wersji <code>Subject</code> i <code>Observer</code> są typowane generycznie, co pozwala na bardziej elastyczne i bezpieczne przekazywanie danych.</p>
<h2>Zakończenie</h2>
<p>Wzorzec Obserwatora w TypeScript jest potężnym narzędziem, które pozwala na łatwe zarządzanie zmianami stanu i reaktywnością aplikacji. Dzięki silnemu typowaniu w TypeScript, implementacja tego wzorca jest jeszcze bardziej bezpieczna i czytelna. Implementując ten wzorzec, można znacząco poprawić strukturę i el</p>
<p>astyczność kodu, co jest szczególnie ważne w dużych i złożonych aplikacjach. Dzięki temu wzorcowi, komponenty mogą komunikować się ze sobą w sposób luźno powiązany, co ułatwia ich testowanie, modyfikowanie i rozbudowę.</p>
<p>Wzorzec Obserwatora w TypeScript można łatwo zaimplementować na różne sposoby, dostosowując go do specyficznych potrzeb projektu. W powyższych przykładach pokazaliśmy zarówno podstawową implementację, jak i bardziej zaawansowaną wersję z typami generycznymi. Zachęcam do eksperymentowania z tym wzorcem w swoich projektach, aby lepiej zrozumieć jego potencjał i korzyści.</p>
<h3>Przykładowy Projekt z Wykorzystaniem Wzorca Obserwatora</h3>
<p>Aby zobaczyć, jak wzorzec Obserwatora może być użyty w bardziej realistycznym scenariuszu, rozważmy prostą aplikację monitorującą zmiany temperatury:</p>
<pre><code class="hljs language-typescript"><span class="hljs-comment">// Interfejs obserwatora</span>
<span class="hljs-keyword">interface</span> <span class="hljs-title class_">Observer</span>&#x3C;T> {
  <span class="hljs-title function_">update</span>(<span class="hljs-attr">data</span>: T): <span class="hljs-built_in">void</span>;
}

<span class="hljs-comment">// Klasa obserwowana</span>
<span class="hljs-keyword">class</span> <span class="hljs-title class_">TemperatureSensor</span> {
  <span class="hljs-keyword">private</span> <span class="hljs-attr">observers</span>: <span class="hljs-title class_">Observer</span>&#x3C;<span class="hljs-built_in">number</span>>[] = [];
  <span class="hljs-keyword">private</span> <span class="hljs-attr">temperature</span>: <span class="hljs-built_in">number</span> = <span class="hljs-number">0</span>;

  <span class="hljs-title function_">subscribe</span>(<span class="hljs-attr">observer</span>: <span class="hljs-title class_">Observer</span>&#x3C;<span class="hljs-built_in">number</span>>): <span class="hljs-built_in">void</span> {
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">observers</span>.<span class="hljs-title function_">push</span>(observer);
  }

  <span class="hljs-title function_">unsubscribe</span>(<span class="hljs-attr">observer</span>: <span class="hljs-title class_">Observer</span>&#x3C;<span class="hljs-built_in">number</span>>): <span class="hljs-built_in">void</span> {
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">observers</span> = <span class="hljs-variable language_">this</span>.<span class="hljs-property">observers</span>.<span class="hljs-title function_">filter</span>(<span class="hljs-function">(<span class="hljs-params">obs</span>) =></span> obs !== observer);
  }

  <span class="hljs-title function_">setTemperature</span>(<span class="hljs-attr">temp</span>: <span class="hljs-built_in">number</span>): <span class="hljs-built_in">void</span> {
    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">\`Setting temperature to <span class="hljs-subst">\${temp}</span>\`</span>);
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">temperature</span> = temp;
    <span class="hljs-variable language_">this</span>.<span class="hljs-title function_">notify</span>(temp);
  }

  <span class="hljs-keyword">private</span> <span class="hljs-title function_">notify</span>(<span class="hljs-attr">temp</span>: <span class="hljs-built_in">number</span>): <span class="hljs-built_in">void</span> {
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">observers</span>.<span class="hljs-title function_">forEach</span>(<span class="hljs-function">(<span class="hljs-params">observer</span>) =></span> observer.<span class="hljs-title function_">update</span>(temp));
  }
}

<span class="hljs-comment">// Implementacja obserwatora</span>
<span class="hljs-keyword">class</span> <span class="hljs-title class_">TemperatureDisplay</span> <span class="hljs-keyword">implements</span> <span class="hljs-title class_">Observer</span>&#x3C;<span class="hljs-built_in">number</span>> {
  <span class="hljs-title function_">update</span>(<span class="hljs-attr">temp</span>: <span class="hljs-built_in">number</span>): <span class="hljs-built_in">void</span> {
    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">\`Temperature Display: <span class="hljs-subst">\${temp}</span>°C\`</span>);
  }
}

<span class="hljs-keyword">class</span> <span class="hljs-title class_">TemperatureLogger</span> <span class="hljs-keyword">implements</span> <span class="hljs-title class_">Observer</span>&#x3C;<span class="hljs-built_in">number</span>> {
  <span class="hljs-title function_">update</span>(<span class="hljs-attr">temp</span>: <span class="hljs-built_in">number</span>): <span class="hljs-built_in">void</span> {
    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">\`Logging temperature: <span class="hljs-subst">\${temp}</span>°C\`</span>);
  }
}

<span class="hljs-comment">// Użycie wzorca Obserwatora</span>
<span class="hljs-keyword">const</span> sensor = <span class="hljs-keyword">new</span> <span class="hljs-title class_">TemperatureSensor</span>();
<span class="hljs-keyword">const</span> display = <span class="hljs-keyword">new</span> <span class="hljs-title class_">TemperatureDisplay</span>();
<span class="hljs-keyword">const</span> logger = <span class="hljs-keyword">new</span> <span class="hljs-title class_">TemperatureLogger</span>();

sensor.<span class="hljs-title function_">subscribe</span>(display);
sensor.<span class="hljs-title function_">subscribe</span>(logger);

sensor.<span class="hljs-title function_">setTemperature</span>(<span class="hljs-number">25</span>); <span class="hljs-comment">// Output: Setting temperature to 25</span>
<span class="hljs-comment">//         Temperature Display: 25°C</span>
<span class="hljs-comment">//         Logging temperature: 25°C</span>

sensor.<span class="hljs-title function_">setTemperature</span>(<span class="hljs-number">30</span>); <span class="hljs-comment">// Output: Setting temperature to 30</span>
<span class="hljs-comment">//         Temperature Display: 30°C</span>
<span class="hljs-comment">//         Logging temperature: 30°C</span>
</code></pre>
<p>W tym przykładzie <code>TemperatureSensor</code> pełni rolę obiektu obserwowanego, który powiadamia swoich obserwatorów (<code>TemperatureDisplay</code> i <code>TemperatureLogger</code>) o zmianach temperatury. W praktycznym scenariuszu można by zastosować ten wzorzec do monitorowania różnych parametrów i reagowania na zmiany w czasie rzeczywistym.</p>
<h2>Zakończenie</h2>
<p>Wzorzec projektowy Obserwatora jest jednym z fundamentów programowania reaktywnego, pozwalając na luźne powiązanie komponentów i lepszą organizację kodu. TypeScript, dzięki swoim możliwościom typowania, umożliwia bezpieczną i efektywną implementację tego wzorca. Niezależnie od skali projektu, warto rozważyć użycie wzorca Obserwatora, aby poprawić elastyczność i czytelność kodu.</p>`,title:"Obserwatorium, czyli wzorzec projektowy obserwatora",description:"Wzorzec projektowy Obserwator (ang. Observer) jest jednym z najważniejszych wzorców projektowych, szczególnie użytecznym w kontekście programowania reaktywnego i aplikacji, które muszą reagować na zmiany stanu. W TypeScript możemy zaimplementować ten wzorzec w sposób typowany, co dodatkowo zwiększa bezpieczeństwo i czytelność kodu.",keywords:["typescript","wzorce","programowanie"],categories:["typescript","wzorce"],createdAt:"2024-06-20T00:00:00.000Z",updatedAt:"2024-06-20T00:00:00.000Z"},a=Object.freeze(Object.defineProperty({__proto__:null,default:s},Symbol.toStringTag,{value:"Module"}));export{a as _};
