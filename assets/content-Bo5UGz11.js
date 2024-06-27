import{j as s}from"./react-C1gJkM8a.js";const r={title:"Szczepienie kodu, czyli jak Typescript radzi sobie z Dependency Injection",description:"Dependency Injection (DI) to wzorzec projektowy stosowany w celu zwiększenia modularności i testowalności kodu. Umożliwia to oddzielenie tworzenia obiektów od ich używania, co prowadzi do lepszej separacji odpowiedzialności i łatwiejszego zarządzania zależnościami. W TypeScript, DI można zaimplementować na kilka sposobów, w tym za pomocą kontenerów IoC (Inversion of Control), które są odpowiedzialne za tworzenie i wstrzykiwanie zależności. Przyjrzyjmy się, jak można zaimplementować DI w TypeScript z wykorzystaniem prostych przykładów.",keywords:["typescript","wzorce","javascript"],categories:["typescript","wzorce"],createdAt:"2024-06-20",updatedAt:"2024-06-20"};function n(a){const e={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",...a.components};return s.jsxs(s.Fragment,{children:[s.jsx(e.p,{children:"Dependency Injection (DI) to wzorzec projektowy stosowany w celu zwiększenia modularności i testowalności kodu. Umożliwia to oddzielenie tworzenia obiektów od ich używania, co prowadzi do lepszej separacji odpowiedzialności i łatwiejszego zarządzania zależnościami."}),`
`,s.jsx(e.p,{children:"W TypeScript, DI można zaimplementować na kilka sposobów, w tym za pomocą kontenerów IoC (Inversion of Control), które są odpowiedzialne za tworzenie i wstrzykiwanie zależności. Przyjrzyjmy się, jak można zaimplementować DI w TypeScript z wykorzystaniem prostych przykładów."}),`
`,s.jsx(e.h2,{children:"Spis Treści"}),`
`,s.jsxs(e.ol,{children:[`
`,s.jsx(e.li,{children:"Podstawy Dependency Injection"}),`
`,s.jsx(e.li,{children:"Prosty przykład DI"}),`
`,s.jsx(e.li,{children:"Wstrzykiwanie zależności za pomocą kontenera IoC"}),`
`,s.jsx(e.li,{children:"Korzystanie z dekoratorów do wstrzykiwania zależności"}),`
`]}),`
`,s.jsx(e.h2,{children:"1. Podstawy Dependency Injection"}),`
`,s.jsx(e.p,{children:"W Dependency Injection chodzi o przekazywanie zależności do obiektu zamiast tworzenia ich bezpośrednio wewnątrz obiektu. Dzięki temu można łatwo wymieniać zależności, co ułatwia testowanie i modyfikowanie kodu."}),`
`,s.jsx(e.h2,{children:"2. Prosty przykład DI"}),`
`,s.jsxs(e.p,{children:["Rozważmy prosty przykład, w którym klasa ",s.jsx(e.code,{children:"UserService"})," potrzebuje instancji ",s.jsx(e.code,{children:"UserRepository"}),":"]}),`
`,s.jsx(e.pre,{children:s.jsxs(e.code,{className:"hljs language-typescript",children:[s.jsx(e.span,{className:"hljs-keyword",children:"class"})," ",s.jsx(e.span,{className:"hljs-title class_",children:"UserRepository"}),` {
  `,s.jsx(e.span,{className:"hljs-title function_",children:"getUser"}),"(",s.jsx(e.span,{className:"hljs-attr",children:"userId"}),": ",s.jsx(e.span,{className:"hljs-built_in",children:"number"}),"): ",s.jsx(e.span,{className:"hljs-built_in",children:"string"}),` {
    `,s.jsx(e.span,{className:"hljs-keyword",children:"return"})," ",s.jsxs(e.span,{className:"hljs-string",children:["`User ",s.jsx(e.span,{className:"hljs-subst",children:"${userId}"}),"`"]}),`;
  }
}

`,s.jsx(e.span,{className:"hljs-keyword",children:"class"})," ",s.jsx(e.span,{className:"hljs-title class_",children:"UserService"}),` {
  `,s.jsx(e.span,{className:"hljs-keyword",children:"private"})," ",s.jsx(e.span,{className:"hljs-attr",children:"userRepository"}),": ",s.jsx(e.span,{className:"hljs-title class_",children:"UserRepository"}),`;

  `,s.jsx(e.span,{className:"hljs-title function_",children:"constructor"}),"(",s.jsx(e.span,{className:"hljs-params",children:"userRepository: UserRepository"}),`) {
    `,s.jsx(e.span,{className:"hljs-variable language_",children:"this"}),".",s.jsx(e.span,{className:"hljs-property",children:"userRepository"}),` = userRepository;
  }

  `,s.jsx(e.span,{className:"hljs-title function_",children:"getUserName"}),"(",s.jsx(e.span,{className:"hljs-attr",children:"userId"}),": ",s.jsx(e.span,{className:"hljs-built_in",children:"number"}),"): ",s.jsx(e.span,{className:"hljs-built_in",children:"string"}),` {
    `,s.jsx(e.span,{className:"hljs-keyword",children:"return"})," ",s.jsx(e.span,{className:"hljs-variable language_",children:"this"}),".",s.jsx(e.span,{className:"hljs-property",children:"userRepository"}),".",s.jsx(e.span,{className:"hljs-title function_",children:"getUser"}),`(userId);
  }
}

`,s.jsx(e.span,{className:"hljs-keyword",children:"const"})," userRepository = ",s.jsx(e.span,{className:"hljs-keyword",children:"new"})," ",s.jsx(e.span,{className:"hljs-title class_",children:"UserRepository"}),`();
`,s.jsx(e.span,{className:"hljs-keyword",children:"const"})," userService = ",s.jsx(e.span,{className:"hljs-keyword",children:"new"})," ",s.jsx(e.span,{className:"hljs-title class_",children:"UserService"}),`(userRepository);

`,s.jsx(e.span,{className:"hljs-variable language_",children:"console"}),".",s.jsx(e.span,{className:"hljs-title function_",children:"log"}),"(userService.",s.jsx(e.span,{className:"hljs-title function_",children:"getUserName"}),"(",s.jsx(e.span,{className:"hljs-number",children:"1"}),")); ",s.jsx(e.span,{className:"hljs-comment",children:"// Output: User 1"}),`
`]})}),`
`,s.jsxs(e.p,{children:["W powyższym przykładzie ",s.jsx(e.code,{children:"UserRepository"})," jest wstrzykiwany do ",s.jsx(e.code,{children:"UserService"})," przez konstruktor."]}),`
`,s.jsx(e.h2,{children:"3. Wstrzykiwanie zależności za pomocą kontenera IoC"}),`
`,s.jsx(e.p,{children:"Aby lepiej zarządzać zależnościami, możemy użyć kontenera IoC. Przykład poniżej pokazuje, jak można to zrobić przy użyciu prostego kontenera DI:"}),`
`,s.jsx(e.pre,{children:s.jsxs(e.code,{className:"hljs language-typescript",children:[s.jsx(e.span,{className:"hljs-keyword",children:"class"})," ",s.jsx(e.span,{className:"hljs-title class_",children:"IoCContainer"}),` {
  `,s.jsx(e.span,{className:"hljs-keyword",children:"private"})," ",s.jsx(e.span,{className:"hljs-attr",children:"dependencies"}),": ",s.jsx(e.span,{className:"hljs-title class_",children:"Map"}),"<",s.jsx(e.span,{className:"hljs-built_in",children:"string"}),", ",s.jsx(e.span,{className:"hljs-built_in",children:"any"}),"> = ",s.jsx(e.span,{className:"hljs-keyword",children:"new"})," ",s.jsx(e.span,{className:"hljs-title class_",children:"Map"}),`();

  register<T>(`,s.jsx(e.span,{className:"hljs-attr",children:"key"}),": ",s.jsx(e.span,{className:"hljs-built_in",children:"string"}),", ",s.jsx(e.span,{className:"hljs-attr",children:"dependency"}),": T): ",s.jsx(e.span,{className:"hljs-built_in",children:"void"}),` {
    `,s.jsx(e.span,{className:"hljs-variable language_",children:"this"}),".",s.jsx(e.span,{className:"hljs-property",children:"dependencies"}),".",s.jsx(e.span,{className:"hljs-title function_",children:"set"}),`(key, dependency);
  }

  resolve<T>(`,s.jsx(e.span,{className:"hljs-attr",children:"key"}),": ",s.jsx(e.span,{className:"hljs-built_in",children:"string"}),`): T {
    `,s.jsx(e.span,{className:"hljs-keyword",children:"const"})," dependency = ",s.jsx(e.span,{className:"hljs-variable language_",children:"this"}),".",s.jsx(e.span,{className:"hljs-property",children:"dependencies"}),".",s.jsx(e.span,{className:"hljs-title function_",children:"get"}),`(key);
    `,s.jsx(e.span,{className:"hljs-keyword",children:"if"}),` (!dependency) {
      `,s.jsx(e.span,{className:"hljs-keyword",children:"throw"})," ",s.jsx(e.span,{className:"hljs-keyword",children:"new"})," ",s.jsx(e.span,{className:"hljs-title class_",children:"Error"}),"(",s.jsxs(e.span,{className:"hljs-string",children:["`Dependency not found: ",s.jsx(e.span,{className:"hljs-subst",children:"${key}"}),"`"]}),`);
    }
    `,s.jsx(e.span,{className:"hljs-keyword",children:"return"}),` dependency;
  }
}

`,s.jsx(e.span,{className:"hljs-keyword",children:"class"})," ",s.jsx(e.span,{className:"hljs-title class_",children:"UserRepository"}),` {
  `,s.jsx(e.span,{className:"hljs-title function_",children:"getUser"}),"(",s.jsx(e.span,{className:"hljs-attr",children:"userId"}),": ",s.jsx(e.span,{className:"hljs-built_in",children:"number"}),"): ",s.jsx(e.span,{className:"hljs-built_in",children:"string"}),` {
    `,s.jsx(e.span,{className:"hljs-keyword",children:"return"})," ",s.jsxs(e.span,{className:"hljs-string",children:["`User ",s.jsx(e.span,{className:"hljs-subst",children:"${userId}"}),"`"]}),`;
  }
}

`,s.jsx(e.span,{className:"hljs-keyword",children:"class"})," ",s.jsx(e.span,{className:"hljs-title class_",children:"UserService"}),` {
  `,s.jsx(e.span,{className:"hljs-keyword",children:"private"})," ",s.jsx(e.span,{className:"hljs-attr",children:"userRepository"}),": ",s.jsx(e.span,{className:"hljs-title class_",children:"UserRepository"}),`;

  `,s.jsx(e.span,{className:"hljs-title function_",children:"constructor"}),"(",s.jsx(e.span,{className:"hljs-params",children:"userRepository: UserRepository"}),`) {
    `,s.jsx(e.span,{className:"hljs-variable language_",children:"this"}),".",s.jsx(e.span,{className:"hljs-property",children:"userRepository"}),` = userRepository;
  }

  `,s.jsx(e.span,{className:"hljs-title function_",children:"getUserName"}),"(",s.jsx(e.span,{className:"hljs-attr",children:"userId"}),": ",s.jsx(e.span,{className:"hljs-built_in",children:"number"}),"): ",s.jsx(e.span,{className:"hljs-built_in",children:"string"}),` {
    `,s.jsx(e.span,{className:"hljs-keyword",children:"return"})," ",s.jsx(e.span,{className:"hljs-variable language_",children:"this"}),".",s.jsx(e.span,{className:"hljs-property",children:"userRepository"}),".",s.jsx(e.span,{className:"hljs-title function_",children:"getUser"}),`(userId);
  }
}

`,s.jsx(e.span,{className:"hljs-keyword",children:"const"})," container = ",s.jsx(e.span,{className:"hljs-keyword",children:"new"})," ",s.jsx(e.span,{className:"hljs-title class_",children:"IoCContainer"}),`();
container.`,s.jsx(e.span,{className:"hljs-title function_",children:"register"}),"(",s.jsx(e.span,{className:"hljs-string",children:'"UserRepository"'}),", ",s.jsx(e.span,{className:"hljs-keyword",children:"new"})," ",s.jsx(e.span,{className:"hljs-title class_",children:"UserRepository"}),`());

`,s.jsx(e.span,{className:"hljs-keyword",children:"const"})," userRepository = container.",s.jsx(e.span,{className:"hljs-property",children:"resolve"}),"<",s.jsx(e.span,{className:"hljs-title class_",children:"UserRepository"}),">(",s.jsx(e.span,{className:"hljs-string",children:'"UserRepository"'}),`);
`,s.jsx(e.span,{className:"hljs-keyword",children:"const"})," userService = ",s.jsx(e.span,{className:"hljs-keyword",children:"new"})," ",s.jsx(e.span,{className:"hljs-title class_",children:"UserService"}),`(userRepository);

`,s.jsx(e.span,{className:"hljs-variable language_",children:"console"}),".",s.jsx(e.span,{className:"hljs-title function_",children:"log"}),"(userService.",s.jsx(e.span,{className:"hljs-title function_",children:"getUserName"}),"(",s.jsx(e.span,{className:"hljs-number",children:"1"}),")); ",s.jsx(e.span,{className:"hljs-comment",children:"// Output: User 1"}),`
`]})}),`
`,s.jsx(e.p,{children:"W tym przykładzie używamy kontenera IoC do rejestrowania i rozwiązywania zależności."}),`
`,s.jsx(e.h2,{children:"4. Korzystanie z dekoratorów do wstrzykiwania zależności"}),`
`,s.jsx(e.p,{children:"TypeScript pozwala na używanie dekoratorów, które mogą ułatwić wstrzykiwanie zależności. Przykład poniżej pokazuje, jak można to zrobić:"}),`
`,s.jsx(e.pre,{children:s.jsxs(e.code,{className:"hljs language-typescript",children:[s.jsx(e.span,{className:"hljs-keyword",children:"function"})," ",s.jsx(e.span,{className:"hljs-title function_",children:"Injectable"}),"(",s.jsxs(e.span,{className:"hljs-params",children:["target: ",s.jsx(e.span,{className:"hljs-built_in",children:"any"})]}),`) {
  `,s.jsx(e.span,{className:"hljs-comment",children:"// Rejestracja klasy jako zależności"}),`
  `,s.jsx(e.span,{className:"hljs-title class_",children:"IoCContainer"}),".",s.jsx(e.span,{className:"hljs-title function_",children:"getInstance"}),"().",s.jsx(e.span,{className:"hljs-title function_",children:"register"}),"(target.",s.jsx(e.span,{className:"hljs-property",children:"name"}),`, target);
}

`,s.jsx(e.span,{className:"hljs-keyword",children:"class"})," ",s.jsx(e.span,{className:"hljs-title class_",children:"IoCContainer"}),` {
  `,s.jsx(e.span,{className:"hljs-keyword",children:"private"})," ",s.jsx(e.span,{className:"hljs-keyword",children:"static"})," ",s.jsx(e.span,{className:"hljs-attr",children:"instance"}),": ",s.jsx(e.span,{className:"hljs-title class_",children:"IoCContainer"}),`;
  `,s.jsx(e.span,{className:"hljs-keyword",children:"private"})," ",s.jsx(e.span,{className:"hljs-attr",children:"dependencies"}),": ",s.jsx(e.span,{className:"hljs-title class_",children:"Map"}),"<",s.jsx(e.span,{className:"hljs-built_in",children:"string"}),", ",s.jsx(e.span,{className:"hljs-built_in",children:"any"}),"> = ",s.jsx(e.span,{className:"hljs-keyword",children:"new"})," ",s.jsx(e.span,{className:"hljs-title class_",children:"Map"}),`();

  `,s.jsx(e.span,{className:"hljs-keyword",children:"private"})," ",s.jsx(e.span,{className:"hljs-title function_",children:"constructor"}),"(",s.jsx(e.span,{className:"hljs-params"}),`) {}

  `,s.jsx(e.span,{className:"hljs-keyword",children:"public"})," ",s.jsx(e.span,{className:"hljs-keyword",children:"static"})," ",s.jsx(e.span,{className:"hljs-title function_",children:"getInstance"}),"(): ",s.jsx(e.span,{className:"hljs-title class_",children:"IoCContainer"}),` {
    `,s.jsx(e.span,{className:"hljs-keyword",children:"if"})," (!",s.jsx(e.span,{className:"hljs-title class_",children:"IoCContainer"}),".",s.jsx(e.span,{className:"hljs-property",children:"instance"}),`) {
      `,s.jsx(e.span,{className:"hljs-title class_",children:"IoCContainer"}),".",s.jsx(e.span,{className:"hljs-property",children:"instance"})," = ",s.jsx(e.span,{className:"hljs-keyword",children:"new"})," ",s.jsx(e.span,{className:"hljs-title class_",children:"IoCContainer"}),`();
    }
    `,s.jsx(e.span,{className:"hljs-keyword",children:"return"})," ",s.jsx(e.span,{className:"hljs-title class_",children:"IoCContainer"}),".",s.jsx(e.span,{className:"hljs-property",children:"instance"}),`;
  }

  register<T>(`,s.jsx(e.span,{className:"hljs-attr",children:"key"}),": ",s.jsx(e.span,{className:"hljs-built_in",children:"string"}),", ",s.jsx(e.span,{className:"hljs-attr",children:"dependency"}),": T): ",s.jsx(e.span,{className:"hljs-built_in",children:"void"}),` {
    `,s.jsx(e.span,{className:"hljs-variable language_",children:"this"}),".",s.jsx(e.span,{className:"hljs-property",children:"dependencies"}),".",s.jsx(e.span,{className:"hljs-title function_",children:"set"}),"(key, ",s.jsx(e.span,{className:"hljs-keyword",children:"new"})," ",s.jsx(e.span,{className:"hljs-title function_",children:"dependency"}),`());
  }

  resolve<T>(`,s.jsx(e.span,{className:"hljs-attr",children:"key"}),": ",s.jsx(e.span,{className:"hljs-built_in",children:"string"}),`): T {
    `,s.jsx(e.span,{className:"hljs-keyword",children:"const"})," dependency = ",s.jsx(e.span,{className:"hljs-variable language_",children:"this"}),".",s.jsx(e.span,{className:"hljs-property",children:"dependencies"}),".",s.jsx(e.span,{className:"hljs-title function_",children:"get"}),`(key);
    `,s.jsx(e.span,{className:"hljs-keyword",children:"if"}),` (!dependency) {
      `,s.jsx(e.span,{className:"hljs-keyword",children:"throw"})," ",s.jsx(e.span,{className:"hljs-keyword",children:"new"})," ",s.jsx(e.span,{className:"hljs-title class_",children:"Error"}),"(",s.jsxs(e.span,{className:"hljs-string",children:["`Dependency not found: ",s.jsx(e.span,{className:"hljs-subst",children:"${key}"}),"`"]}),`);
    }
    `,s.jsx(e.span,{className:"hljs-keyword",children:"return"}),` dependency;
  }
}

`,s.jsx(e.span,{className:"hljs-meta",children:"@Injectable"}),`
`,s.jsx(e.span,{className:"hljs-keyword",children:"class"})," ",s.jsx(e.span,{className:"hljs-title class_",children:"UserRepository"}),` {
  `,s.jsx(e.span,{className:"hljs-title function_",children:"getUser"}),"(",s.jsx(e.span,{className:"hljs-attr",children:"userId"}),": ",s.jsx(e.span,{className:"hljs-built_in",children:"number"}),"): ",s.jsx(e.span,{className:"hljs-built_in",children:"string"}),` {
    `,s.jsx(e.span,{className:"hljs-keyword",children:"return"})," ",s.jsxs(e.span,{className:"hljs-string",children:["`User ",s.jsx(e.span,{className:"hljs-subst",children:"${userId}"}),"`"]}),`;
  }
}

`,s.jsx(e.span,{className:"hljs-meta",children:"@Injectable"}),`
`,s.jsx(e.span,{className:"hljs-keyword",children:"class"})," ",s.jsx(e.span,{className:"hljs-title class_",children:"UserService"}),` {
  `,s.jsx(e.span,{className:"hljs-keyword",children:"private"})," ",s.jsx(e.span,{className:"hljs-attr",children:"userRepository"}),": ",s.jsx(e.span,{className:"hljs-title class_",children:"UserRepository"}),`;

  `,s.jsx(e.span,{className:"hljs-title function_",children:"constructor"}),"(",s.jsx(e.span,{className:"hljs-params"}),`) {
    `,s.jsx(e.span,{className:"hljs-variable language_",children:"this"}),".",s.jsx(e.span,{className:"hljs-property",children:"userRepository"}),` =
      `,s.jsx(e.span,{className:"hljs-title class_",children:"IoCContainer"}),".",s.jsx(e.span,{className:"hljs-title function_",children:"getInstance"}),"().",s.jsx(e.span,{className:"hljs-property",children:"resolve"}),"<",s.jsx(e.span,{className:"hljs-title class_",children:"UserRepository"}),">(",s.jsx(e.span,{className:"hljs-string",children:'"UserRepository"'}),`);
  }

  `,s.jsx(e.span,{className:"hljs-title function_",children:"getUserName"}),"(",s.jsx(e.span,{className:"hljs-attr",children:"userId"}),": ",s.jsx(e.span,{className:"hljs-built_in",children:"number"}),"): ",s.jsx(e.span,{className:"hljs-built_in",children:"string"}),` {
    `,s.jsx(e.span,{className:"hljs-keyword",children:"return"})," ",s.jsx(e.span,{className:"hljs-variable language_",children:"this"}),".",s.jsx(e.span,{className:"hljs-property",children:"userRepository"}),".",s.jsx(e.span,{className:"hljs-title function_",children:"getUser"}),`(userId);
  }
}

`,s.jsx(e.span,{className:"hljs-keyword",children:"const"}),` userService =
  `,s.jsx(e.span,{className:"hljs-title class_",children:"IoCContainer"}),".",s.jsx(e.span,{className:"hljs-title function_",children:"getInstance"}),"().",s.jsx(e.span,{className:"hljs-property",children:"resolve"}),"<",s.jsx(e.span,{className:"hljs-title class_",children:"UserService"}),">(",s.jsx(e.span,{className:"hljs-string",children:'"UserService"'}),`);

`,s.jsx(e.span,{className:"hljs-variable language_",children:"console"}),".",s.jsx(e.span,{className:"hljs-title function_",children:"log"}),"(userService.",s.jsx(e.span,{className:"hljs-title function_",children:"getUserName"}),"(",s.jsx(e.span,{className:"hljs-number",children:"1"}),")); ",s.jsx(e.span,{className:"hljs-comment",children:"// Output: User 1"}),`
`]})}),`
`,s.jsx(e.p,{children:"W tym przykładzie używamy dekoratorów, aby rejestrować klasy jako zależności w kontenerze IoC i automatycznie wstrzykiwać je w klasach, które ich potrzebują."}),`
`,s.jsx(e.h2,{children:"Podsumowanie"}),`
`,s.jsx(e.p,{children:"Dependency Injection w TypeScript to potężna technika, która może znacznie ułatwić zarządzanie zależnościami i poprawić testowalność oraz modularność kodu. Przedstawione powyżej przykłady pokazują różne podejścia do implementacji DI, w tym bezpośrednie wstrzykiwanie przez konstruktor, korzystanie z kontenerów IoC oraz używanie dekoratorów. Dzięki tym technikom można tworzyć bardziej elastyczne i łatwe w utrzymaniu aplikacje."})]})}function i(a={}){const{wrapper:e}=a.components||{};return e?s.jsx(e,{...a,children:s.jsx(n,{...a})}):n(a)}const d=Object.freeze(Object.defineProperty({__proto__:null,default:i,frontmatter:r},Symbol.toStringTag,{value:"Module"})),t={title:"Obserwatorium, czyli wzorzec projektowy obserwatora",description:"Wzorzec projektowy Obserwator (ang. Observer) jest jednym z najważniejszych wzorców projektowych, szczególnie użytecznym w kontekście programowania reaktywnego i aplikacji, które muszą reagować na zmiany stanu. W TypeScript możemy zaimplementować ten wzorzec w sposób typowany, co dodatkowo zwiększa bezpieczeństwo i czytelność kodu.",keywords:["typescript","wzorce","programowanie"],categories:["typescript","wzorce"],createdAt:"2024-06-20",updatedAt:"2024-06-20"};function l(a){const e={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",strong:"strong",...a.components};return s.jsxs(s.Fragment,{children:[s.jsx(e.p,{children:"Wzorzec projektowy Obserwator (ang. Observer) jest jednym z najważniejszych wzorców projektowych, szczególnie użytecznym w kontekście programowania reaktywnego i aplikacji, które muszą reagować na zmiany stanu. W TypeScript możemy zaimplementować ten wzorzec w sposób typowany, co dodatkowo zwiększa bezpieczeństwo i czytelność kodu."}),`
`,s.jsx(e.h2,{children:"Czym jest Wzorzec Obserwatora?"}),`
`,s.jsx(e.p,{children:"Wzorzec Obserwatora polega na tym, że obiekt (obserwowany) zarządza listą zależnych obiektów (obserwatorów) i automatycznie powiadamia ich o zmianach swojego stanu. Jest to realizowane za pomocą metod do subskrybowania, odsubskrybowania oraz powiadamiania obserwatorów."}),`
`,s.jsx(e.h2,{children:"Korzyści z używania Wzorca Obserwatora"}),`
`,s.jsxs(e.ol,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Reaktywność:"})," Automatyczne powiadamianie obserwatorów o zmianach stanu."]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Luźne Powiązania:"})," Obserwatorzy nie muszą znać szczegółów implementacji obiektu, który obserwują."]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Elastyczność:"})," Łatwość dodawania nowych obserwatorów bez zmiany istniejącego kodu."]}),`
`]}),`
`,s.jsx(e.h2,{children:"Implementacja Wzorca Obserwatora w TypeScript"}),`
`,s.jsx(e.h3,{children:"Przykład 1: Prosta Implementacja"}),`
`,s.jsx(e.p,{children:"Poniżej znajduje się prosta implementacja wzorca Obserwatora w TypeScript:"}),`
`,s.jsx(e.pre,{children:s.jsxs(e.code,{className:"hljs language-typescript",children:[s.jsx(e.span,{className:"hljs-comment",children:"// Interfejs obserwatora"}),`
`,s.jsx(e.span,{className:"hljs-keyword",children:"interface"})," ",s.jsx(e.span,{className:"hljs-title class_",children:"Observer"}),` {
  `,s.jsx(e.span,{className:"hljs-title function_",children:"update"}),"(",s.jsx(e.span,{className:"hljs-attr",children:"message"}),": ",s.jsx(e.span,{className:"hljs-built_in",children:"string"}),"): ",s.jsx(e.span,{className:"hljs-built_in",children:"void"}),`;
}

`,s.jsx(e.span,{className:"hljs-comment",children:"// Klasa obserwowana"}),`
`,s.jsx(e.span,{className:"hljs-keyword",children:"class"})," ",s.jsx(e.span,{className:"hljs-title class_",children:"Subject"}),` {
  `,s.jsx(e.span,{className:"hljs-keyword",children:"private"})," ",s.jsx(e.span,{className:"hljs-attr",children:"observers"}),": ",s.jsx(e.span,{className:"hljs-title class_",children:"Observer"}),`[] = [];

  `,s.jsx(e.span,{className:"hljs-title function_",children:"subscribe"}),"(",s.jsx(e.span,{className:"hljs-attr",children:"observer"}),": ",s.jsx(e.span,{className:"hljs-title class_",children:"Observer"}),"): ",s.jsx(e.span,{className:"hljs-built_in",children:"void"}),` {
    `,s.jsx(e.span,{className:"hljs-variable language_",children:"this"}),".",s.jsx(e.span,{className:"hljs-property",children:"observers"}),".",s.jsx(e.span,{className:"hljs-title function_",children:"push"}),`(observer);
  }

  `,s.jsx(e.span,{className:"hljs-title function_",children:"unsubscribe"}),"(",s.jsx(e.span,{className:"hljs-attr",children:"observer"}),": ",s.jsx(e.span,{className:"hljs-title class_",children:"Observer"}),"): ",s.jsx(e.span,{className:"hljs-built_in",children:"void"}),` {
    `,s.jsx(e.span,{className:"hljs-variable language_",children:"this"}),".",s.jsx(e.span,{className:"hljs-property",children:"observers"})," = ",s.jsx(e.span,{className:"hljs-variable language_",children:"this"}),".",s.jsx(e.span,{className:"hljs-property",children:"observers"}),".",s.jsx(e.span,{className:"hljs-title function_",children:"filter"}),"(",s.jsxs(e.span,{className:"hljs-function",children:["(",s.jsx(e.span,{className:"hljs-params",children:"obs"}),") =>"]}),` obs !== observer);
  }

  `,s.jsx(e.span,{className:"hljs-title function_",children:"notify"}),"(",s.jsx(e.span,{className:"hljs-attr",children:"message"}),": ",s.jsx(e.span,{className:"hljs-built_in",children:"string"}),"): ",s.jsx(e.span,{className:"hljs-built_in",children:"void"}),` {
    `,s.jsx(e.span,{className:"hljs-variable language_",children:"this"}),".",s.jsx(e.span,{className:"hljs-property",children:"observers"}),".",s.jsx(e.span,{className:"hljs-title function_",children:"forEach"}),"(",s.jsxs(e.span,{className:"hljs-function",children:["(",s.jsx(e.span,{className:"hljs-params",children:"observer"}),") =>"]})," observer.",s.jsx(e.span,{className:"hljs-title function_",children:"update"}),`(message));
  }
}

`,s.jsx(e.span,{className:"hljs-comment",children:"// Implementacja obserwatora"}),`
`,s.jsx(e.span,{className:"hljs-keyword",children:"class"})," ",s.jsx(e.span,{className:"hljs-title class_",children:"ConcreteObserver"})," ",s.jsx(e.span,{className:"hljs-keyword",children:"implements"})," ",s.jsx(e.span,{className:"hljs-title class_",children:"Observer"}),` {
  `,s.jsx(e.span,{className:"hljs-title function_",children:"constructor"}),"(",s.jsxs(e.span,{className:"hljs-params",children:[s.jsx(e.span,{className:"hljs-keyword",children:"private"})," name: ",s.jsx(e.span,{className:"hljs-built_in",children:"string"})]}),`) {}

  `,s.jsx(e.span,{className:"hljs-title function_",children:"update"}),"(",s.jsx(e.span,{className:"hljs-attr",children:"message"}),": ",s.jsx(e.span,{className:"hljs-built_in",children:"string"}),"): ",s.jsx(e.span,{className:"hljs-built_in",children:"void"}),` {
    `,s.jsx(e.span,{className:"hljs-variable language_",children:"console"}),".",s.jsx(e.span,{className:"hljs-title function_",children:"log"}),"(",s.jsxs(e.span,{className:"hljs-string",children:["`",s.jsxs(e.span,{className:"hljs-subst",children:["${",s.jsx(e.span,{className:"hljs-variable language_",children:"this"}),".name}"]})," received message: ",s.jsx(e.span,{className:"hljs-subst",children:"${message}"}),"`"]}),`);
  }
}

`,s.jsx(e.span,{className:"hljs-comment",children:"// Użycie wzorca Obserwatora"}),`
`,s.jsx(e.span,{className:"hljs-keyword",children:"const"})," subject = ",s.jsx(e.span,{className:"hljs-keyword",children:"new"})," ",s.jsx(e.span,{className:"hljs-title class_",children:"Subject"}),`();

`,s.jsx(e.span,{className:"hljs-keyword",children:"const"})," observer1 = ",s.jsx(e.span,{className:"hljs-keyword",children:"new"})," ",s.jsx(e.span,{className:"hljs-title class_",children:"ConcreteObserver"}),"(",s.jsx(e.span,{className:"hljs-string",children:'"Observer 1"'}),`);
`,s.jsx(e.span,{className:"hljs-keyword",children:"const"})," observer2 = ",s.jsx(e.span,{className:"hljs-keyword",children:"new"})," ",s.jsx(e.span,{className:"hljs-title class_",children:"ConcreteObserver"}),"(",s.jsx(e.span,{className:"hljs-string",children:'"Observer 2"'}),`);

subject.`,s.jsx(e.span,{className:"hljs-title function_",children:"subscribe"}),`(observer1);
subject.`,s.jsx(e.span,{className:"hljs-title function_",children:"subscribe"}),`(observer2);

subject.`,s.jsx(e.span,{className:"hljs-title function_",children:"notify"}),"(",s.jsx(e.span,{className:"hljs-string",children:'"Hello, Observers!"'}),`);

`,s.jsx(e.span,{className:"hljs-comment",children:"// Output:"}),`
`,s.jsx(e.span,{className:"hljs-comment",children:"// Observer 1 received message: Hello, Observers!"}),`
`,s.jsx(e.span,{className:"hljs-comment",children:"// Observer 2 received message: Hello, Observers!"}),`
`]})}),`
`,s.jsxs(e.p,{children:["W tym przykładzie ",s.jsx(e.code,{children:"Subject"})," zarządza listą obserwatorów i powiadamia ich za pomocą metody ",s.jsx(e.code,{children:"notify"}),". Obserwatorzy implementują interfejs ",s.jsx(e.code,{children:"Observer"}),", który definiuje metodę ",s.jsx(e.code,{children:"update"}),"."]}),`
`,s.jsx(e.h3,{children:"Przykład 2: Rozbudowana Implementacja z Typowaniem"}),`
`,s.jsx(e.p,{children:"W bardziej zaawansowanej wersji możemy użyć typów generycznych do zarządzania różnymi typami danych:"}),`
`,s.jsx(e.pre,{children:s.jsxs(e.code,{className:"hljs language-typescript",children:[s.jsx(e.span,{className:"hljs-comment",children:"// Interfejs obserwatora z typem generycznym"}),`
`,s.jsx(e.span,{className:"hljs-keyword",children:"interface"})," ",s.jsx(e.span,{className:"hljs-title class_",children:"Observer"}),`<T> {
  `,s.jsx(e.span,{className:"hljs-title function_",children:"update"}),"(",s.jsx(e.span,{className:"hljs-attr",children:"data"}),": T): ",s.jsx(e.span,{className:"hljs-built_in",children:"void"}),`;
}

`,s.jsx(e.span,{className:"hljs-comment",children:"// Klasa obserwowana z typem generycznym"}),`
`,s.jsx(e.span,{className:"hljs-keyword",children:"class"})," ",s.jsx(e.span,{className:"hljs-title class_",children:"Subject"}),`<T> {
  `,s.jsx(e.span,{className:"hljs-keyword",children:"private"})," ",s.jsx(e.span,{className:"hljs-attr",children:"observers"}),": ",s.jsx(e.span,{className:"hljs-title class_",children:"Observer"}),`<T>[] = [];

  `,s.jsx(e.span,{className:"hljs-title function_",children:"subscribe"}),"(",s.jsx(e.span,{className:"hljs-attr",children:"observer"}),": ",s.jsx(e.span,{className:"hljs-title class_",children:"Observer"}),"<T>): ",s.jsx(e.span,{className:"hljs-built_in",children:"void"}),` {
    `,s.jsx(e.span,{className:"hljs-variable language_",children:"this"}),".",s.jsx(e.span,{className:"hljs-property",children:"observers"}),".",s.jsx(e.span,{className:"hljs-title function_",children:"push"}),`(observer);
  }

  `,s.jsx(e.span,{className:"hljs-title function_",children:"unsubscribe"}),"(",s.jsx(e.span,{className:"hljs-attr",children:"observer"}),": ",s.jsx(e.span,{className:"hljs-title class_",children:"Observer"}),"<T>): ",s.jsx(e.span,{className:"hljs-built_in",children:"void"}),` {
    `,s.jsx(e.span,{className:"hljs-variable language_",children:"this"}),".",s.jsx(e.span,{className:"hljs-property",children:"observers"})," = ",s.jsx(e.span,{className:"hljs-variable language_",children:"this"}),".",s.jsx(e.span,{className:"hljs-property",children:"observers"}),".",s.jsx(e.span,{className:"hljs-title function_",children:"filter"}),"(",s.jsxs(e.span,{className:"hljs-function",children:["(",s.jsx(e.span,{className:"hljs-params",children:"obs"}),") =>"]}),` obs !== observer);
  }

  `,s.jsx(e.span,{className:"hljs-title function_",children:"notify"}),"(",s.jsx(e.span,{className:"hljs-attr",children:"data"}),": T): ",s.jsx(e.span,{className:"hljs-built_in",children:"void"}),` {
    `,s.jsx(e.span,{className:"hljs-variable language_",children:"this"}),".",s.jsx(e.span,{className:"hljs-property",children:"observers"}),".",s.jsx(e.span,{className:"hljs-title function_",children:"forEach"}),"(",s.jsxs(e.span,{className:"hljs-function",children:["(",s.jsx(e.span,{className:"hljs-params",children:"observer"}),") =>"]})," observer.",s.jsx(e.span,{className:"hljs-title function_",children:"update"}),`(data));
  }
}

`,s.jsx(e.span,{className:"hljs-comment",children:"// Implementacja obserwatora"}),`
`,s.jsx(e.span,{className:"hljs-keyword",children:"class"})," ",s.jsx(e.span,{className:"hljs-title class_",children:"ConcreteObserver"}),"<T> ",s.jsx(e.span,{className:"hljs-keyword",children:"implements"})," ",s.jsx(e.span,{className:"hljs-title class_",children:"Observer"}),`<T> {
  `,s.jsx(e.span,{className:"hljs-title function_",children:"constructor"}),"(",s.jsxs(e.span,{className:"hljs-params",children:[s.jsx(e.span,{className:"hljs-keyword",children:"private"})," name: ",s.jsx(e.span,{className:"hljs-built_in",children:"string"})]}),`) {}

  `,s.jsx(e.span,{className:"hljs-title function_",children:"update"}),"(",s.jsx(e.span,{className:"hljs-attr",children:"data"}),": T): ",s.jsx(e.span,{className:"hljs-built_in",children:"void"}),` {
    `,s.jsx(e.span,{className:"hljs-variable language_",children:"console"}),".",s.jsx(e.span,{className:"hljs-title function_",children:"log"}),"(",s.jsxs(e.span,{className:"hljs-string",children:["`",s.jsxs(e.span,{className:"hljs-subst",children:["${",s.jsx(e.span,{className:"hljs-variable language_",children:"this"}),".name}"]})," received data:`"]}),`, data);
  }
}

`,s.jsx(e.span,{className:"hljs-comment",children:"// Użycie wzorca Obserwatora z typem generycznym"}),`
`,s.jsx(e.span,{className:"hljs-keyword",children:"interface"})," ",s.jsx(e.span,{className:"hljs-title class_",children:"User"}),` {
  `,s.jsx(e.span,{className:"hljs-attr",children:"name"}),": ",s.jsx(e.span,{className:"hljs-built_in",children:"string"}),`;
  `,s.jsx(e.span,{className:"hljs-attr",children:"age"}),": ",s.jsx(e.span,{className:"hljs-built_in",children:"number"}),`;
}

`,s.jsx(e.span,{className:"hljs-keyword",children:"const"})," userSubject = ",s.jsx(e.span,{className:"hljs-keyword",children:"new"})," ",s.jsx(e.span,{className:"hljs-title class_",children:"Subject"}),"<",s.jsx(e.span,{className:"hljs-title class_",children:"User"}),`>();

`,s.jsx(e.span,{className:"hljs-keyword",children:"const"})," userObserver1 = ",s.jsx(e.span,{className:"hljs-keyword",children:"new"})," ",s.jsx(e.span,{className:"hljs-title class_",children:"ConcreteObserver"}),"<",s.jsx(e.span,{className:"hljs-title class_",children:"User"}),">(",s.jsx(e.span,{className:"hljs-string",children:'"User Observer 1"'}),`);
`,s.jsx(e.span,{className:"hljs-keyword",children:"const"})," userObserver2 = ",s.jsx(e.span,{className:"hljs-keyword",children:"new"})," ",s.jsx(e.span,{className:"hljs-title class_",children:"ConcreteObserver"}),"<",s.jsx(e.span,{className:"hljs-title class_",children:"User"}),">(",s.jsx(e.span,{className:"hljs-string",children:'"User Observer 2"'}),`);

userSubject.`,s.jsx(e.span,{className:"hljs-title function_",children:"subscribe"}),`(userObserver1);
userSubject.`,s.jsx(e.span,{className:"hljs-title function_",children:"subscribe"}),`(userObserver2);

userSubject.`,s.jsx(e.span,{className:"hljs-title function_",children:"notify"}),"({ ",s.jsx(e.span,{className:"hljs-attr",children:"name"}),": ",s.jsx(e.span,{className:"hljs-string",children:'"Alice"'}),", ",s.jsx(e.span,{className:"hljs-attr",children:"age"}),": ",s.jsx(e.span,{className:"hljs-number",children:"30"}),` });

`,s.jsx(e.span,{className:"hljs-comment",children:"// Output:"}),`
`,s.jsx(e.span,{className:"hljs-comment",children:"// User Observer 1 received data: { name: 'Alice', age: 30 }"}),`
`,s.jsx(e.span,{className:"hljs-comment",children:"// User Observer 2 received data: { name: 'Alice', age: 30 }"}),`
`]})}),`
`,s.jsxs(e.p,{children:["W tej wersji ",s.jsx(e.code,{children:"Subject"})," i ",s.jsx(e.code,{children:"Observer"})," są typowane generycznie, co pozwala na bardziej elastyczne i bezpieczne przekazywanie danych."]}),`
`,s.jsx(e.h2,{children:"Zakończenie"}),`
`,s.jsx(e.p,{children:"Wzorzec Obserwatora w TypeScript jest potężnym narzędziem, które pozwala na łatwe zarządzanie zmianami stanu i reaktywnością aplikacji. Dzięki silnemu typowaniu w TypeScript, implementacja tego wzorca jest jeszcze bardziej bezpieczna i czytelna. Implementując ten wzorzec, można znacząco poprawić strukturę i el"}),`
`,s.jsx(e.p,{children:"astyczność kodu, co jest szczególnie ważne w dużych i złożonych aplikacjach. Dzięki temu wzorcowi, komponenty mogą komunikować się ze sobą w sposób luźno powiązany, co ułatwia ich testowanie, modyfikowanie i rozbudowę."}),`
`,s.jsx(e.p,{children:"Wzorzec Obserwatora w TypeScript można łatwo zaimplementować na różne sposoby, dostosowując go do specyficznych potrzeb projektu. W powyższych przykładach pokazaliśmy zarówno podstawową implementację, jak i bardziej zaawansowaną wersję z typami generycznymi. Zachęcam do eksperymentowania z tym wzorcem w swoich projektach, aby lepiej zrozumieć jego potencjał i korzyści."}),`
`,s.jsx(e.h3,{children:"Przykładowy Projekt z Wykorzystaniem Wzorca Obserwatora"}),`
`,s.jsx(e.p,{children:"Aby zobaczyć, jak wzorzec Obserwatora może być użyty w bardziej realistycznym scenariuszu, rozważmy prostą aplikację monitorującą zmiany temperatury:"}),`
`,s.jsx(e.pre,{children:s.jsxs(e.code,{className:"hljs language-typescript",children:[s.jsx(e.span,{className:"hljs-comment",children:"// Interfejs obserwatora"}),`
`,s.jsx(e.span,{className:"hljs-keyword",children:"interface"})," ",s.jsx(e.span,{className:"hljs-title class_",children:"Observer"}),`<T> {
  `,s.jsx(e.span,{className:"hljs-title function_",children:"update"}),"(",s.jsx(e.span,{className:"hljs-attr",children:"data"}),": T): ",s.jsx(e.span,{className:"hljs-built_in",children:"void"}),`;
}

`,s.jsx(e.span,{className:"hljs-comment",children:"// Klasa obserwowana"}),`
`,s.jsx(e.span,{className:"hljs-keyword",children:"class"})," ",s.jsx(e.span,{className:"hljs-title class_",children:"TemperatureSensor"}),` {
  `,s.jsx(e.span,{className:"hljs-keyword",children:"private"})," ",s.jsx(e.span,{className:"hljs-attr",children:"observers"}),": ",s.jsx(e.span,{className:"hljs-title class_",children:"Observer"}),"<",s.jsx(e.span,{className:"hljs-built_in",children:"number"}),`>[] = [];
  `,s.jsx(e.span,{className:"hljs-keyword",children:"private"})," ",s.jsx(e.span,{className:"hljs-attr",children:"temperature"}),": ",s.jsx(e.span,{className:"hljs-built_in",children:"number"})," = ",s.jsx(e.span,{className:"hljs-number",children:"0"}),`;

  `,s.jsx(e.span,{className:"hljs-title function_",children:"subscribe"}),"(",s.jsx(e.span,{className:"hljs-attr",children:"observer"}),": ",s.jsx(e.span,{className:"hljs-title class_",children:"Observer"}),"<",s.jsx(e.span,{className:"hljs-built_in",children:"number"}),">): ",s.jsx(e.span,{className:"hljs-built_in",children:"void"}),` {
    `,s.jsx(e.span,{className:"hljs-variable language_",children:"this"}),".",s.jsx(e.span,{className:"hljs-property",children:"observers"}),".",s.jsx(e.span,{className:"hljs-title function_",children:"push"}),`(observer);
  }

  `,s.jsx(e.span,{className:"hljs-title function_",children:"unsubscribe"}),"(",s.jsx(e.span,{className:"hljs-attr",children:"observer"}),": ",s.jsx(e.span,{className:"hljs-title class_",children:"Observer"}),"<",s.jsx(e.span,{className:"hljs-built_in",children:"number"}),">): ",s.jsx(e.span,{className:"hljs-built_in",children:"void"}),` {
    `,s.jsx(e.span,{className:"hljs-variable language_",children:"this"}),".",s.jsx(e.span,{className:"hljs-property",children:"observers"})," = ",s.jsx(e.span,{className:"hljs-variable language_",children:"this"}),".",s.jsx(e.span,{className:"hljs-property",children:"observers"}),".",s.jsx(e.span,{className:"hljs-title function_",children:"filter"}),"(",s.jsxs(e.span,{className:"hljs-function",children:["(",s.jsx(e.span,{className:"hljs-params",children:"obs"}),") =>"]}),` obs !== observer);
  }

  `,s.jsx(e.span,{className:"hljs-title function_",children:"setTemperature"}),"(",s.jsx(e.span,{className:"hljs-attr",children:"temp"}),": ",s.jsx(e.span,{className:"hljs-built_in",children:"number"}),"): ",s.jsx(e.span,{className:"hljs-built_in",children:"void"}),` {
    `,s.jsx(e.span,{className:"hljs-variable language_",children:"console"}),".",s.jsx(e.span,{className:"hljs-title function_",children:"log"}),"(",s.jsxs(e.span,{className:"hljs-string",children:["`Setting temperature to ",s.jsx(e.span,{className:"hljs-subst",children:"${temp}"}),"`"]}),`);
    `,s.jsx(e.span,{className:"hljs-variable language_",children:"this"}),".",s.jsx(e.span,{className:"hljs-property",children:"temperature"}),` = temp;
    `,s.jsx(e.span,{className:"hljs-variable language_",children:"this"}),".",s.jsx(e.span,{className:"hljs-title function_",children:"notify"}),`(temp);
  }

  `,s.jsx(e.span,{className:"hljs-keyword",children:"private"})," ",s.jsx(e.span,{className:"hljs-title function_",children:"notify"}),"(",s.jsx(e.span,{className:"hljs-attr",children:"temp"}),": ",s.jsx(e.span,{className:"hljs-built_in",children:"number"}),"): ",s.jsx(e.span,{className:"hljs-built_in",children:"void"}),` {
    `,s.jsx(e.span,{className:"hljs-variable language_",children:"this"}),".",s.jsx(e.span,{className:"hljs-property",children:"observers"}),".",s.jsx(e.span,{className:"hljs-title function_",children:"forEach"}),"(",s.jsxs(e.span,{className:"hljs-function",children:["(",s.jsx(e.span,{className:"hljs-params",children:"observer"}),") =>"]})," observer.",s.jsx(e.span,{className:"hljs-title function_",children:"update"}),`(temp));
  }
}

`,s.jsx(e.span,{className:"hljs-comment",children:"// Implementacja obserwatora"}),`
`,s.jsx(e.span,{className:"hljs-keyword",children:"class"})," ",s.jsx(e.span,{className:"hljs-title class_",children:"TemperatureDisplay"})," ",s.jsx(e.span,{className:"hljs-keyword",children:"implements"})," ",s.jsx(e.span,{className:"hljs-title class_",children:"Observer"}),"<",s.jsx(e.span,{className:"hljs-built_in",children:"number"}),`> {
  `,s.jsx(e.span,{className:"hljs-title function_",children:"update"}),"(",s.jsx(e.span,{className:"hljs-attr",children:"temp"}),": ",s.jsx(e.span,{className:"hljs-built_in",children:"number"}),"): ",s.jsx(e.span,{className:"hljs-built_in",children:"void"}),` {
    `,s.jsx(e.span,{className:"hljs-variable language_",children:"console"}),".",s.jsx(e.span,{className:"hljs-title function_",children:"log"}),"(",s.jsxs(e.span,{className:"hljs-string",children:["`Temperature Display: ",s.jsx(e.span,{className:"hljs-subst",children:"${temp}"}),"°C`"]}),`);
  }
}

`,s.jsx(e.span,{className:"hljs-keyword",children:"class"})," ",s.jsx(e.span,{className:"hljs-title class_",children:"TemperatureLogger"})," ",s.jsx(e.span,{className:"hljs-keyword",children:"implements"})," ",s.jsx(e.span,{className:"hljs-title class_",children:"Observer"}),"<",s.jsx(e.span,{className:"hljs-built_in",children:"number"}),`> {
  `,s.jsx(e.span,{className:"hljs-title function_",children:"update"}),"(",s.jsx(e.span,{className:"hljs-attr",children:"temp"}),": ",s.jsx(e.span,{className:"hljs-built_in",children:"number"}),"): ",s.jsx(e.span,{className:"hljs-built_in",children:"void"}),` {
    `,s.jsx(e.span,{className:"hljs-variable language_",children:"console"}),".",s.jsx(e.span,{className:"hljs-title function_",children:"log"}),"(",s.jsxs(e.span,{className:"hljs-string",children:["`Logging temperature: ",s.jsx(e.span,{className:"hljs-subst",children:"${temp}"}),"°C`"]}),`);
  }
}

`,s.jsx(e.span,{className:"hljs-comment",children:"// Użycie wzorca Obserwatora"}),`
`,s.jsx(e.span,{className:"hljs-keyword",children:"const"})," sensor = ",s.jsx(e.span,{className:"hljs-keyword",children:"new"})," ",s.jsx(e.span,{className:"hljs-title class_",children:"TemperatureSensor"}),`();
`,s.jsx(e.span,{className:"hljs-keyword",children:"const"})," display = ",s.jsx(e.span,{className:"hljs-keyword",children:"new"})," ",s.jsx(e.span,{className:"hljs-title class_",children:"TemperatureDisplay"}),`();
`,s.jsx(e.span,{className:"hljs-keyword",children:"const"})," logger = ",s.jsx(e.span,{className:"hljs-keyword",children:"new"})," ",s.jsx(e.span,{className:"hljs-title class_",children:"TemperatureLogger"}),`();

sensor.`,s.jsx(e.span,{className:"hljs-title function_",children:"subscribe"}),`(display);
sensor.`,s.jsx(e.span,{className:"hljs-title function_",children:"subscribe"}),`(logger);

sensor.`,s.jsx(e.span,{className:"hljs-title function_",children:"setTemperature"}),"(",s.jsx(e.span,{className:"hljs-number",children:"25"}),"); ",s.jsx(e.span,{className:"hljs-comment",children:"// Output: Setting temperature to 25"}),`
`,s.jsx(e.span,{className:"hljs-comment",children:"//         Temperature Display: 25°C"}),`
`,s.jsx(e.span,{className:"hljs-comment",children:"//         Logging temperature: 25°C"}),`

sensor.`,s.jsx(e.span,{className:"hljs-title function_",children:"setTemperature"}),"(",s.jsx(e.span,{className:"hljs-number",children:"30"}),"); ",s.jsx(e.span,{className:"hljs-comment",children:"// Output: Setting temperature to 30"}),`
`,s.jsx(e.span,{className:"hljs-comment",children:"//         Temperature Display: 30°C"}),`
`,s.jsx(e.span,{className:"hljs-comment",children:"//         Logging temperature: 30°C"}),`
`]})}),`
`,s.jsxs(e.p,{children:["W tym przykładzie ",s.jsx(e.code,{children:"TemperatureSensor"})," pełni rolę obiektu obserwowanego, który powiadamia swoich obserwatorów (",s.jsx(e.code,{children:"TemperatureDisplay"})," i ",s.jsx(e.code,{children:"TemperatureLogger"}),") o zmianach temperatury. W praktycznym scenariuszu można by zastosować ten wzorzec do monitorowania różnych parametrów i reagowania na zmiany w czasie rzeczywistym."]}),`
`,s.jsx(e.h2,{children:"Zakończenie"}),`
`,s.jsx(e.p,{children:"Wzorzec projektowy Obserwatora jest jednym z fundamentów programowania reaktywnego, pozwalając na luźne powiązanie komponentów i lepszą organizację kodu. TypeScript, dzięki swoim możliwościom typowania, umożliwia bezpieczną i efektywną implementację tego wzorca. Niezależnie od skali projektu, warto rozważyć użycie wzorca Obserwatora, aby poprawić elastyczność i czytelność kodu."})]})}function j(a={}){const{wrapper:e}=a.components||{};return e?s.jsx(e,{...a,children:s.jsx(l,{...a})}):l(a)}const m=Object.freeze(Object.defineProperty({__proto__:null,default:j,frontmatter:t},Symbol.toStringTag,{value:"Module"})),h={title:"Signalizacja, czyli koncept Signals w Typescript",description:"Signal to koncepcja pochodząca z programowania reaktywnego, której celem jest uproszczenie komunikacji między komponentami oraz zarządzania stanem aplikacji. W TypeScript, dzięki silnemu typowaniu, można zaimplementować sygnały w sposób bezpieczny i efektywny.",keywords:["typescript","wzorce","signals"],categories:["typescript","wzorce"],createdAt:"2024-06-20",updatedAt:"2024-06-20"};function c(a){const e={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",strong:"strong",...a.components};return s.jsxs(s.Fragment,{children:[s.jsx(e.p,{children:"Signal to koncepcja pochodząca z programowania reaktywnego, której celem jest uproszczenie komunikacji między komponentami oraz zarządzania stanem aplikacji. W TypeScript, dzięki silnemu typowaniu, można zaimplementować sygnały w sposób bezpieczny i efektywny."}),`
`,s.jsx(e.h2,{children:"Czym jest Signal?"}),`
`,s.jsx(e.p,{children:"Signal (sygnał) jest obiektem, który reprezentuje strumień danych, który może być obserwowany i reagować na zmiany tych danych. W kontekście frontendu, sygnały mogą być używane do reagowania na zdarzenia użytkownika, zmiany stanu aplikacji, czy asynchroniczne operacje, takie jak żądania sieciowe."}),`
`,s.jsx(e.h2,{children:"Korzyści z używania Signal"}),`
`,s.jsxs(e.ol,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Reaktywność:"})," Umożliwiają budowanie aplikacji, które automatycznie reagują na zmiany danych."]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Czytelność:"})," Poprawiają czytelność kodu poprzez eliminację złożonych zależności i ręcznego zarządzania stanem."]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Modularność:"})," Ułatwiają zarządzanie stanem w skomplikowanych aplikacjach poprzez oddzielenie logiki zarządzania stanem od komponentów."]}),`
`]}),`
`,s.jsx(e.h2,{children:"Implementacja Signal w TypeScript"}),`
`,s.jsx(e.h3,{children:"Przykład 1: Prosty Signal"}),`
`,s.jsx(e.p,{children:"Poniżej przedstawiono prostą implementację sygnału w TypeScript:"}),`
`,s.jsx(e.pre,{children:s.jsxs(e.code,{className:"hljs language-typescript",children:[s.jsx(e.span,{className:"hljs-keyword",children:"type"})," ",s.jsx(e.span,{className:"hljs-title class_",children:"Listener"}),"<T> = ",s.jsxs(e.span,{className:"hljs-function",children:["(",s.jsx(e.span,{className:"hljs-params",children:"value: T"}),") =>"]})," ",s.jsx(e.span,{className:"hljs-built_in",children:"void"}),`;

`,s.jsx(e.span,{className:"hljs-keyword",children:"class"})," ",s.jsx(e.span,{className:"hljs-title class_",children:"Signal"}),`<T> {
  `,s.jsx(e.span,{className:"hljs-keyword",children:"private"})," ",s.jsx(e.span,{className:"hljs-attr",children:"listeners"}),": ",s.jsx(e.span,{className:"hljs-title class_",children:"Listener"}),`<T>[] = [];

  `,s.jsx(e.span,{className:"hljs-title function_",children:"subscribe"}),"(",s.jsx(e.span,{className:"hljs-attr",children:"listener"}),": ",s.jsx(e.span,{className:"hljs-title class_",children:"Listener"}),"<T>): ",s.jsx(e.span,{className:"hljs-built_in",children:"void"}),` {
    `,s.jsx(e.span,{className:"hljs-variable language_",children:"this"}),".",s.jsx(e.span,{className:"hljs-property",children:"listeners"}),".",s.jsx(e.span,{className:"hljs-title function_",children:"push"}),`(listener);
  }

  `,s.jsx(e.span,{className:"hljs-title function_",children:"unsubscribe"}),"(",s.jsx(e.span,{className:"hljs-attr",children:"listener"}),": ",s.jsx(e.span,{className:"hljs-title class_",children:"Listener"}),"<T>): ",s.jsx(e.span,{className:"hljs-built_in",children:"void"}),` {
    `,s.jsx(e.span,{className:"hljs-variable language_",children:"this"}),".",s.jsx(e.span,{className:"hljs-property",children:"listeners"})," = ",s.jsx(e.span,{className:"hljs-variable language_",children:"this"}),".",s.jsx(e.span,{className:"hljs-property",children:"listeners"}),".",s.jsx(e.span,{className:"hljs-title function_",children:"filter"}),"(",s.jsxs(e.span,{className:"hljs-function",children:["(",s.jsx(e.span,{className:"hljs-params",children:"l"}),") =>"]}),` l !== listener);
  }

  `,s.jsx(e.span,{className:"hljs-title function_",children:"emit"}),"(",s.jsx(e.span,{className:"hljs-attr",children:"value"}),": T): ",s.jsx(e.span,{className:"hljs-built_in",children:"void"}),` {
    `,s.jsx(e.span,{className:"hljs-variable language_",children:"this"}),".",s.jsx(e.span,{className:"hljs-property",children:"listeners"}),".",s.jsx(e.span,{className:"hljs-title function_",children:"forEach"}),"(",s.jsxs(e.span,{className:"hljs-function",children:["(",s.jsx(e.span,{className:"hljs-params",children:"listener"}),") =>"]})," ",s.jsx(e.span,{className:"hljs-title function_",children:"listener"}),`(value));
  }
}

`,s.jsx(e.span,{className:"hljs-comment",children:"// Użycie sygnału"}),`
`,s.jsx(e.span,{className:"hljs-keyword",children:"const"})," numberSignal = ",s.jsx(e.span,{className:"hljs-keyword",children:"new"})," ",s.jsx(e.span,{className:"hljs-title class_",children:"Signal"}),"<",s.jsx(e.span,{className:"hljs-built_in",children:"number"}),`>();

numberSignal.`,s.jsx(e.span,{className:"hljs-title function_",children:"subscribe"}),"(",s.jsxs(e.span,{className:"hljs-function",children:["(",s.jsx(e.span,{className:"hljs-params",children:"value"}),") =>"]}),` {
  `,s.jsx(e.span,{className:"hljs-variable language_",children:"console"}),".",s.jsx(e.span,{className:"hljs-title function_",children:"log"}),"(",s.jsxs(e.span,{className:"hljs-string",children:["`Received value: ",s.jsx(e.span,{className:"hljs-subst",children:"${value}"}),"`"]}),`);
});

numberSignal.`,s.jsx(e.span,{className:"hljs-title function_",children:"emit"}),"(",s.jsx(e.span,{className:"hljs-number",children:"42"}),"); ",s.jsx(e.span,{className:"hljs-comment",children:"// Output: Received value: 42"}),`
`]})}),`
`,s.jsxs(e.p,{children:["W tym przykładzie zdefiniowano klasę ",s.jsx(e.code,{children:"Signal"}),", która umożliwia subskrybowanie, usuwanie subskrypcji oraz emitowanie wartości do wszystkich subskrybentów."]}),`
`,s.jsx(e.h3,{children:"Przykład 2: Zaawansowany Signal z Typowaniem"}),`
`,s.jsx(e.p,{children:"Poniższy przykład przedstawia bardziej zaawansowaną implementację sygnału z wykorzystaniem typów generycznych:"}),`
`,s.jsx(e.pre,{children:s.jsxs(e.code,{className:"hljs language-typescript",children:[s.jsx(e.span,{className:"hljs-keyword",children:"type"})," ",s.jsx(e.span,{className:"hljs-title class_",children:"Listener"}),"<T> = ",s.jsxs(e.span,{className:"hljs-function",children:["(",s.jsx(e.span,{className:"hljs-params",children:"value: T"}),") =>"]})," ",s.jsx(e.span,{className:"hljs-built_in",children:"void"}),`;

`,s.jsx(e.span,{className:"hljs-keyword",children:"class"})," ",s.jsx(e.span,{className:"hljs-title class_",children:"Signal"}),`<T> {
  `,s.jsx(e.span,{className:"hljs-keyword",children:"private"})," ",s.jsx(e.span,{className:"hljs-attr",children:"listeners"}),": ",s.jsx(e.span,{className:"hljs-title class_",children:"Set"}),"<",s.jsx(e.span,{className:"hljs-title class_",children:"Listener"}),"<T>> = ",s.jsx(e.span,{className:"hljs-keyword",children:"new"})," ",s.jsx(e.span,{className:"hljs-title class_",children:"Set"}),`();

  `,s.jsx(e.span,{className:"hljs-title function_",children:"subscribe"}),"(",s.jsx(e.span,{className:"hljs-attr",children:"listener"}),": ",s.jsx(e.span,{className:"hljs-title class_",children:"Listener"}),"<T>): ",s.jsx(e.span,{className:"hljs-built_in",children:"void"}),` {
    `,s.jsx(e.span,{className:"hljs-variable language_",children:"this"}),".",s.jsx(e.span,{className:"hljs-property",children:"listeners"}),".",s.jsx(e.span,{className:"hljs-title function_",children:"add"}),`(listener);
  }

  `,s.jsx(e.span,{className:"hljs-title function_",children:"unsubscribe"}),"(",s.jsx(e.span,{className:"hljs-attr",children:"listener"}),": ",s.jsx(e.span,{className:"hljs-title class_",children:"Listener"}),"<T>): ",s.jsx(e.span,{className:"hljs-built_in",children:"void"}),` {
    `,s.jsx(e.span,{className:"hljs-variable language_",children:"this"}),".",s.jsx(e.span,{className:"hljs-property",children:"listeners"}),".",s.jsx(e.span,{className:"hljs-title function_",children:"delete"}),`(listener);
  }

  `,s.jsx(e.span,{className:"hljs-title function_",children:"emit"}),"(",s.jsx(e.span,{className:"hljs-attr",children:"value"}),": T): ",s.jsx(e.span,{className:"hljs-built_in",children:"void"}),` {
    `,s.jsx(e.span,{className:"hljs-keyword",children:"for"})," (",s.jsx(e.span,{className:"hljs-keyword",children:"const"})," listener ",s.jsx(e.span,{className:"hljs-keyword",children:"of"})," ",s.jsx(e.span,{className:"hljs-variable language_",children:"this"}),".",s.jsx(e.span,{className:"hljs-property",children:"listeners"}),`) {
      `,s.jsx(e.span,{className:"hljs-title function_",children:"listener"}),`(value);
    }
  }
}

`,s.jsx(e.span,{className:"hljs-comment",children:"// Użycie sygnału z typem generycznym"}),`
`,s.jsx(e.span,{className:"hljs-keyword",children:"interface"})," ",s.jsx(e.span,{className:"hljs-title class_",children:"User"}),` {
  `,s.jsx(e.span,{className:"hljs-attr",children:"name"}),": ",s.jsx(e.span,{className:"hljs-built_in",children:"string"}),`;
  `,s.jsx(e.span,{className:"hljs-attr",children:"age"}),": ",s.jsx(e.span,{className:"hljs-built_in",children:"number"}),`;
}

`,s.jsx(e.span,{className:"hljs-keyword",children:"const"})," userSignal = ",s.jsx(e.span,{className:"hljs-keyword",children:"new"})," ",s.jsx(e.span,{className:"hljs-title class_",children:"Signal"}),"<",s.jsx(e.span,{className:"hljs-title class_",children:"User"}),`>();

userSignal.`,s.jsx(e.span,{className:"hljs-title function_",children:"subscribe"}),"(",s.jsxs(e.span,{className:"hljs-function",children:["(",s.jsx(e.span,{className:"hljs-params",children:"user"}),") =>"]}),` {
  `,s.jsx(e.span,{className:"hljs-variable language_",children:"console"}),".",s.jsx(e.span,{className:"hljs-title function_",children:"log"}),"(",s.jsxs(e.span,{className:"hljs-string",children:["`User: ",s.jsx(e.span,{className:"hljs-subst",children:"${user.name}"}),", Age: ",s.jsx(e.span,{className:"hljs-subst",children:"${user.age}"}),"`"]}),`);
});

userSignal.`,s.jsx(e.span,{className:"hljs-title function_",children:"emit"}),"({ ",s.jsx(e.span,{className:"hljs-attr",children:"name"}),": ",s.jsx(e.span,{className:"hljs-string",children:'"John Doe"'}),", ",s.jsx(e.span,{className:"hljs-attr",children:"age"}),": ",s.jsx(e.span,{className:"hljs-number",children:"30"})," }); ",s.jsx(e.span,{className:"hljs-comment",children:"// Output: User: John Doe, Age: 30"}),`
`]})}),`
`,s.jsxs(e.p,{children:["W tym przykładzie ",s.jsx(e.code,{children:"Signal"})," używa ",s.jsx(e.code,{children:"Set"})," do przechowywania subskrybentów, co zapobiega wielokrotnemu dodawaniu tego samego subskrybenta. Zastosowanie typów generycznych pozwala na tworzenie sygnałów obsługujących dowolne typy danych."]}),`
`,s.jsx(e.h2,{children:"Zakończenie"}),`
`,s.jsx(e.p,{children:"Signal w TypeScript to potężne narzędzie do budowania reaktywnych aplikacji, które mogą automatycznie reagować na zmiany stanu. Dzięki silnemu typowaniu TypeScript, implementacja sygnałów jest bezpieczna i efektywna, co przyczynia się do tworzenia bardziej zrozumiałych i łatwiejszych w utrzymaniu kodów. Implementując sygnały, możemy znacząco uprościć zarządzanie stanem w naszych aplikacjach i poprawić ich architekturę."})]})}function o(a={}){const{wrapper:e}=a.components||{};return e?s.jsx(e,{...a,children:s.jsx(c,{...a})}):c(a)}const x=Object.freeze(Object.defineProperty({__proto__:null,default:o,frontmatter:h},Symbol.toStringTag,{value:"Module"}));export{d as _,m as a,x as b};
