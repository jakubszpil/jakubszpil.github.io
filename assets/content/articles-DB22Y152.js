const s={id:"ba427ebc-f4c3-4b0f-b012-dcebbc28a71c",slug:"dependency-injection-kontra-typescript",content:`<p>Dependency Injection (DI) to wzorzec projektowy stosowany w celu zwiększenia modularności i testowalności kodu. Umożliwia to oddzielenie tworzenia obiektów od ich używania, co prowadzi do lepszej separacji odpowiedzialności i łatwiejszego zarządzania zależnościami.</p>
<p>W TypeScript, DI można zaimplementować na kilka sposobów, w tym za pomocą kontenerów IoC (Inversion of Control), które są odpowiedzialne za tworzenie i wstrzykiwanie zależności. Przyjrzyjmy się, jak można zaimplementować DI w TypeScript z wykorzystaniem prostych przykładów.</p>
<h2>Spis Treści</h2>
<ol>
<li>Podstawy Dependency Injection</li>
<li>Prosty przykład DI</li>
<li>Wstrzykiwanie zależności za pomocą kontenera IoC</li>
<li>Korzystanie z dekoratorów do wstrzykiwania zależności</li>
</ol>
<h2>1. Podstawy Dependency Injection</h2>
<p>W Dependency Injection chodzi o przekazywanie zależności do obiektu zamiast tworzenia ich bezpośrednio wewnątrz obiektu. Dzięki temu można łatwo wymieniać zależności, co ułatwia testowanie i modyfikowanie kodu.</p>
<h2>2. Prosty przykład DI</h2>
<p>Rozważmy prosty przykład, w którym klasa <code>UserService</code> potrzebuje instancji <code>UserRepository</code>:</p>
<pre><code class="hljs language-typescript"><span class="hljs-keyword">class</span> <span class="hljs-title class_">UserRepository</span> {
  <span class="hljs-title function_">getUser</span>(<span class="hljs-attr">userId</span>: <span class="hljs-built_in">number</span>): <span class="hljs-built_in">string</span> {
    <span class="hljs-keyword">return</span> <span class="hljs-string">\`User <span class="hljs-subst">\${userId}</span>\`</span>;
  }
}

<span class="hljs-keyword">class</span> <span class="hljs-title class_">UserService</span> {
  <span class="hljs-keyword">private</span> <span class="hljs-attr">userRepository</span>: <span class="hljs-title class_">UserRepository</span>;

  <span class="hljs-title function_">constructor</span>(<span class="hljs-params">userRepository: UserRepository</span>) {
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">userRepository</span> = userRepository;
  }

  <span class="hljs-title function_">getUserName</span>(<span class="hljs-attr">userId</span>: <span class="hljs-built_in">number</span>): <span class="hljs-built_in">string</span> {
    <span class="hljs-keyword">return</span> <span class="hljs-variable language_">this</span>.<span class="hljs-property">userRepository</span>.<span class="hljs-title function_">getUser</span>(userId);
  }
}

<span class="hljs-keyword">const</span> userRepository = <span class="hljs-keyword">new</span> <span class="hljs-title class_">UserRepository</span>();
<span class="hljs-keyword">const</span> userService = <span class="hljs-keyword">new</span> <span class="hljs-title class_">UserService</span>(userRepository);

<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(userService.<span class="hljs-title function_">getUserName</span>(<span class="hljs-number">1</span>)); <span class="hljs-comment">// Output: User 1</span>
</code></pre>
<p>W powyższym przykładzie <code>UserRepository</code> jest wstrzykiwany do <code>UserService</code> przez konstruktor.</p>
<h2>3. Wstrzykiwanie zależności za pomocą kontenera IoC</h2>
<p>Aby lepiej zarządzać zależnościami, możemy użyć kontenera IoC. Przykład poniżej pokazuje, jak można to zrobić przy użyciu prostego kontenera DI:</p>
<pre><code class="hljs language-typescript"><span class="hljs-keyword">class</span> <span class="hljs-title class_">IoCContainer</span> {
  <span class="hljs-keyword">private</span> <span class="hljs-attr">dependencies</span>: <span class="hljs-title class_">Map</span>&#x3C;<span class="hljs-built_in">string</span>, <span class="hljs-built_in">any</span>> = <span class="hljs-keyword">new</span> <span class="hljs-title class_">Map</span>();

  register&#x3C;T>(<span class="hljs-attr">key</span>: <span class="hljs-built_in">string</span>, <span class="hljs-attr">dependency</span>: T): <span class="hljs-built_in">void</span> {
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">dependencies</span>.<span class="hljs-title function_">set</span>(key, dependency);
  }

  resolve&#x3C;T>(<span class="hljs-attr">key</span>: <span class="hljs-built_in">string</span>): T {
    <span class="hljs-keyword">const</span> dependency = <span class="hljs-variable language_">this</span>.<span class="hljs-property">dependencies</span>.<span class="hljs-title function_">get</span>(key);
    <span class="hljs-keyword">if</span> (!dependency) {
      <span class="hljs-keyword">throw</span> <span class="hljs-keyword">new</span> <span class="hljs-title class_">Error</span>(<span class="hljs-string">\`Dependency not found: <span class="hljs-subst">\${key}</span>\`</span>);
    }
    <span class="hljs-keyword">return</span> dependency;
  }
}

<span class="hljs-keyword">class</span> <span class="hljs-title class_">UserRepository</span> {
  <span class="hljs-title function_">getUser</span>(<span class="hljs-attr">userId</span>: <span class="hljs-built_in">number</span>): <span class="hljs-built_in">string</span> {
    <span class="hljs-keyword">return</span> <span class="hljs-string">\`User <span class="hljs-subst">\${userId}</span>\`</span>;
  }
}

<span class="hljs-keyword">class</span> <span class="hljs-title class_">UserService</span> {
  <span class="hljs-keyword">private</span> <span class="hljs-attr">userRepository</span>: <span class="hljs-title class_">UserRepository</span>;

  <span class="hljs-title function_">constructor</span>(<span class="hljs-params">userRepository: UserRepository</span>) {
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">userRepository</span> = userRepository;
  }

  <span class="hljs-title function_">getUserName</span>(<span class="hljs-attr">userId</span>: <span class="hljs-built_in">number</span>): <span class="hljs-built_in">string</span> {
    <span class="hljs-keyword">return</span> <span class="hljs-variable language_">this</span>.<span class="hljs-property">userRepository</span>.<span class="hljs-title function_">getUser</span>(userId);
  }
}

<span class="hljs-keyword">const</span> container = <span class="hljs-keyword">new</span> <span class="hljs-title class_">IoCContainer</span>();
container.<span class="hljs-title function_">register</span>(<span class="hljs-string">"UserRepository"</span>, <span class="hljs-keyword">new</span> <span class="hljs-title class_">UserRepository</span>());

<span class="hljs-keyword">const</span> userRepository = container.<span class="hljs-property">resolve</span>&#x3C;<span class="hljs-title class_">UserRepository</span>>(<span class="hljs-string">"UserRepository"</span>);
<span class="hljs-keyword">const</span> userService = <span class="hljs-keyword">new</span> <span class="hljs-title class_">UserService</span>(userRepository);

<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(userService.<span class="hljs-title function_">getUserName</span>(<span class="hljs-number">1</span>)); <span class="hljs-comment">// Output: User 1</span>
</code></pre>
<p>W tym przykładzie używamy kontenera IoC do rejestrowania i rozwiązywania zależności.</p>
<h2>4. Korzystanie z dekoratorów do wstrzykiwania zależności</h2>
<p>TypeScript pozwala na używanie dekoratorów, które mogą ułatwić wstrzykiwanie zależności. Przykład poniżej pokazuje, jak można to zrobić:</p>
<pre><code class="hljs language-typescript"><span class="hljs-keyword">function</span> <span class="hljs-title function_">Injectable</span>(<span class="hljs-params">target: <span class="hljs-built_in">any</span></span>) {
  <span class="hljs-comment">// Rejestracja klasy jako zależności</span>
  <span class="hljs-title class_">IoCContainer</span>.<span class="hljs-title function_">getInstance</span>().<span class="hljs-title function_">register</span>(target.<span class="hljs-property">name</span>, target);
}

<span class="hljs-keyword">class</span> <span class="hljs-title class_">IoCContainer</span> {
  <span class="hljs-keyword">private</span> <span class="hljs-keyword">static</span> <span class="hljs-attr">instance</span>: <span class="hljs-title class_">IoCContainer</span>;
  <span class="hljs-keyword">private</span> <span class="hljs-attr">dependencies</span>: <span class="hljs-title class_">Map</span>&#x3C;<span class="hljs-built_in">string</span>, <span class="hljs-built_in">any</span>> = <span class="hljs-keyword">new</span> <span class="hljs-title class_">Map</span>();

  <span class="hljs-keyword">private</span> <span class="hljs-title function_">constructor</span>(<span class="hljs-params"></span>) {}

  <span class="hljs-keyword">public</span> <span class="hljs-keyword">static</span> <span class="hljs-title function_">getInstance</span>(): <span class="hljs-title class_">IoCContainer</span> {
    <span class="hljs-keyword">if</span> (!<span class="hljs-title class_">IoCContainer</span>.<span class="hljs-property">instance</span>) {
      <span class="hljs-title class_">IoCContainer</span>.<span class="hljs-property">instance</span> = <span class="hljs-keyword">new</span> <span class="hljs-title class_">IoCContainer</span>();
    }
    <span class="hljs-keyword">return</span> <span class="hljs-title class_">IoCContainer</span>.<span class="hljs-property">instance</span>;
  }

  register&#x3C;T>(<span class="hljs-attr">key</span>: <span class="hljs-built_in">string</span>, <span class="hljs-attr">dependency</span>: T): <span class="hljs-built_in">void</span> {
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">dependencies</span>.<span class="hljs-title function_">set</span>(key, <span class="hljs-keyword">new</span> <span class="hljs-title function_">dependency</span>());
  }

  resolve&#x3C;T>(<span class="hljs-attr">key</span>: <span class="hljs-built_in">string</span>): T {
    <span class="hljs-keyword">const</span> dependency = <span class="hljs-variable language_">this</span>.<span class="hljs-property">dependencies</span>.<span class="hljs-title function_">get</span>(key);
    <span class="hljs-keyword">if</span> (!dependency) {
      <span class="hljs-keyword">throw</span> <span class="hljs-keyword">new</span> <span class="hljs-title class_">Error</span>(<span class="hljs-string">\`Dependency not found: <span class="hljs-subst">\${key}</span>\`</span>);
    }
    <span class="hljs-keyword">return</span> dependency;
  }
}

<span class="hljs-meta">@Injectable</span>
<span class="hljs-keyword">class</span> <span class="hljs-title class_">UserRepository</span> {
  <span class="hljs-title function_">getUser</span>(<span class="hljs-attr">userId</span>: <span class="hljs-built_in">number</span>): <span class="hljs-built_in">string</span> {
    <span class="hljs-keyword">return</span> <span class="hljs-string">\`User <span class="hljs-subst">\${userId}</span>\`</span>;
  }
}

<span class="hljs-meta">@Injectable</span>
<span class="hljs-keyword">class</span> <span class="hljs-title class_">UserService</span> {
  <span class="hljs-keyword">private</span> <span class="hljs-attr">userRepository</span>: <span class="hljs-title class_">UserRepository</span>;

  <span class="hljs-title function_">constructor</span>(<span class="hljs-params"></span>) {
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">userRepository</span> =
      <span class="hljs-title class_">IoCContainer</span>.<span class="hljs-title function_">getInstance</span>().<span class="hljs-property">resolve</span>&#x3C;<span class="hljs-title class_">UserRepository</span>>(<span class="hljs-string">"UserRepository"</span>);
  }

  <span class="hljs-title function_">getUserName</span>(<span class="hljs-attr">userId</span>: <span class="hljs-built_in">number</span>): <span class="hljs-built_in">string</span> {
    <span class="hljs-keyword">return</span> <span class="hljs-variable language_">this</span>.<span class="hljs-property">userRepository</span>.<span class="hljs-title function_">getUser</span>(userId);
  }
}

<span class="hljs-keyword">const</span> userService =
  <span class="hljs-title class_">IoCContainer</span>.<span class="hljs-title function_">getInstance</span>().<span class="hljs-property">resolve</span>&#x3C;<span class="hljs-title class_">UserService</span>>(<span class="hljs-string">"UserService"</span>);

<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(userService.<span class="hljs-title function_">getUserName</span>(<span class="hljs-number">1</span>)); <span class="hljs-comment">// Output: User 1</span>
</code></pre>
<p>W tym przykładzie używamy dekoratorów, aby rejestrować klasy jako zależności w kontenerze IoC i automatycznie wstrzykiwać je w klasach, które ich potrzebują.</p>
<h2>Podsumowanie</h2>
<p>Dependency Injection w TypeScript to potężna technika, która może znacznie ułatwić zarządzanie zależnościami i poprawić testowalność oraz modularność kodu. Przedstawione powyżej przykłady pokazują różne podejścia do implementacji DI, w tym bezpośrednie wstrzykiwanie przez konstruktor, korzystanie z kontenerów IoC oraz używanie dekoratorów. Dzięki tym technikom można tworzyć bardziej elastyczne i łatwe w utrzymaniu aplikacje.</p>`,title:"Szczepienie kodu, czyli jak Typescript radzi sobie z Dependency Injection",description:"Dependency Injection (DI) to wzorzec projektowy stosowany w celu zwiększenia modularności i testowalności kodu. Umożliwia to oddzielenie tworzenia obiektów od ich używania, co prowadzi do lepszej separacji odpowiedzialności i łatwiejszego zarządzania zależnościami. W TypeScript, DI można zaimplementować na kilka sposobów, w tym za pomocą kontenerów IoC (Inversion of Control), które są odpowiedzialne za tworzenie i wstrzykiwanie zależności. Przyjrzyjmy się, jak można zaimplementować DI w TypeScript z wykorzystaniem prostych przykładów.",keywords:["typescript","wzorce","javascript"],categories:["typescript","wzorce"],createdAt:"2024-06-20T00:00:00.000Z",updatedAt:"2024-06-20T00:00:00.000Z"},e=Object.freeze(Object.defineProperty({__proto__:null,default:s},Symbol.toStringTag,{value:"Module"})),a={id:"25edd50f-8cb3-4fdc-84f5-23f66dad98cd",slug:"obserwatorium-czyli-wzorzec-projektowy-obserwatora",content:`<p>Wzorzec projektowy Obserwator (ang. Observer) jest jednym z najważniejszych wzorców projektowych, szczególnie użytecznym w kontekście programowania reaktywnego i aplikacji, które muszą reagować na zmiany stanu. W TypeScript możemy zaimplementować ten wzorzec w sposób typowany, co dodatkowo zwiększa bezpieczeństwo i czytelność kodu.</p>
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
<p>Wzorzec projektowy Obserwatora jest jednym z fundamentów programowania reaktywnego, pozwalając na luźne powiązanie komponentów i lepszą organizację kodu. TypeScript, dzięki swoim możliwościom typowania, umożliwia bezpieczną i efektywną implementację tego wzorca. Niezależnie od skali projektu, warto rozważyć użycie wzorca Obserwatora, aby poprawić elastyczność i czytelność kodu.</p>`,title:"Obserwatorium, czyli wzorzec projektowy obserwatora",description:"Wzorzec projektowy Obserwator (ang. Observer) jest jednym z najważniejszych wzorców projektowych, szczególnie użytecznym w kontekście programowania reaktywnego i aplikacji, które muszą reagować na zmiany stanu. W TypeScript możemy zaimplementować ten wzorzec w sposób typowany, co dodatkowo zwiększa bezpieczeństwo i czytelność kodu.",keywords:["typescript","wzorce","programowanie"],categories:["typescript","wzorce"],createdAt:"2024-06-20T00:00:00.000Z",updatedAt:"2024-06-20T00:00:00.000Z"},l=Object.freeze(Object.defineProperty({__proto__:null,default:a},Symbol.toStringTag,{value:"Module"})),n={id:"96b2adc0-c574-4fb8-9a6d-752b695e64b8",slug:"signalizacja-czyli-koncept-signals-w-typescript",content:`<p>Signal to koncepcja pochodząca z programowania reaktywnego, której celem jest uproszczenie komunikacji między komponentami oraz zarządzania stanem aplikacji. W TypeScript, dzięki silnemu typowaniu, można zaimplementować sygnały w sposób bezpieczny i efektywny.</p>
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
<p>Signal w TypeScript to potężne narzędzie do budowania reaktywnych aplikacji, które mogą automatycznie reagować na zmiany stanu. Dzięki silnemu typowaniu TypeScript, implementacja sygnałów jest bezpieczna i efektywna, co przyczynia się do tworzenia bardziej zrozumiałych i łatwiejszych w utrzymaniu kodów. Implementując sygnały, możemy znacząco uprościć zarządzanie stanem w naszych aplikacjach i poprawić ich architekturę.</p>`,title:"Signalizacja, czyli koncept Signals w Typescript",description:"Signal to koncepcja pochodząca z programowania reaktywnego, której celem jest uproszczenie komunikacji między komponentami oraz zarządzania stanem aplikacji. W TypeScript, dzięki silnemu typowaniu, można zaimplementować sygnały w sposób bezpieczny i efektywny.",keywords:["typescript","wzorce","signals"],categories:["typescript","wzorce"],createdAt:"2024-06-20T00:00:00.000Z",updatedAt:"2024-06-20T00:00:00.000Z"},p=Object.freeze(Object.defineProperty({__proto__:null,default:n},Symbol.toStringTag,{value:"Module"}));export{e as _,l as a,p as b};
