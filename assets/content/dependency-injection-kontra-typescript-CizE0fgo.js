const s={id:"05033222-c739-4628-ab62-65c50b7b8c9a",slug:"dependency-injection-kontra-typescript",content:`<p>Dependency Injection (DI) to wzorzec projektowy stosowany w celu zwiększenia modularności i testowalności kodu. Umożliwia to oddzielenie tworzenia obiektów od ich używania, co prowadzi do lepszej separacji odpowiedzialności i łatwiejszego zarządzania zależnościami.</p>
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
<p>Dependency Injection w TypeScript to potężna technika, która może znacznie ułatwić zarządzanie zależnościami i poprawić testowalność oraz modularność kodu. Przedstawione powyżej przykłady pokazują różne podejścia do implementacji DI, w tym bezpośrednie wstrzykiwanie przez konstruktor, korzystanie z kontenerów IoC oraz używanie dekoratorów. Dzięki tym technikom można tworzyć bardziej elastyczne i łatwe w utrzymaniu aplikacje.</p>`,title:"Szczepienie kodu, czyli jak Typescript radzi sobie z Dependency Injection",description:"Dependency Injection (DI) to wzorzec projektowy stosowany w celu zwiększenia modularności i testowalności kodu. Umożliwia to oddzielenie tworzenia obiektów od ich używania, co prowadzi do lepszej separacji odpowiedzialności i łatwiejszego zarządzania zależnościami. W TypeScript, DI można zaimplementować na kilka sposobów, w tym za pomocą kontenerów IoC (Inversion of Control), które są odpowiedzialne za tworzenie i wstrzykiwanie zależności. Przyjrzyjmy się, jak można zaimplementować DI w TypeScript z wykorzystaniem prostych przykładów.",keywords:["typescript","wzorce","javascript"],categories:["typescript","wzorce"],createdAt:"2024-06-20T00:00:00.000Z"};export{s as default};
