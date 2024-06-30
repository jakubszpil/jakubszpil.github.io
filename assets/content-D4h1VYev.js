import{j as s}from"./runtime-CavCKr85.js";const m={title:"Szczepienie kodu, czyli jak Typescript radzi sobie z Dependency Injection",description:"Dependency Injection (DI) to wzorzec projektowy stosowany w celu zwiększenia modularności i testowalności kodu. Umożliwia to oddzielenie tworzenia obiektów od ich używania, co prowadzi do lepszej separacji odpowiedzialności i łatwiejszego zarządzania zależnościami. W TypeScript, DI można zaimplementować na kilka sposobów, w tym za pomocą kontenerów IoC (Inversion of Control), które są odpowiedzialne za tworzenie i wstrzykiwanie zależności. Przyjrzyjmy się, jak można zaimplementować DI w TypeScript z wykorzystaniem prostych przykładów.",keywords:["typescript","wzorce","javascript"],categories:["typescript","wzorce"],createdAt:"2024-06-20",updatedAt:"2024-06-20"};function n(e){const a={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",...e.components};return s.jsxs(s.Fragment,{children:[s.jsx(a.p,{children:"Dependency Injection (DI) to wzorzec projektowy stosowany w celu zwiększenia modularności i testowalności kodu. Umożliwia to oddzielenie tworzenia obiektów od ich używania, co prowadzi do lepszej separacji odpowiedzialności i łatwiejszego zarządzania zależnościami."}),`
`,s.jsx(a.p,{children:"W TypeScript, DI można zaimplementować na kilka sposobów, w tym za pomocą kontenerów IoC (Inversion of Control), które są odpowiedzialne za tworzenie i wstrzykiwanie zależności. Przyjrzyjmy się, jak można zaimplementować DI w TypeScript z wykorzystaniem prostych przykładów."}),`
`,s.jsx(a.h2,{children:"Spis Treści"}),`
`,s.jsxs(a.ol,{children:[`
`,s.jsx(a.li,{children:"Podstawy Dependency Injection"}),`
`,s.jsx(a.li,{children:"Prosty przykład DI"}),`
`,s.jsx(a.li,{children:"Wstrzykiwanie zależności za pomocą kontenera IoC"}),`
`,s.jsx(a.li,{children:"Korzystanie z dekoratorów do wstrzykiwania zależności"}),`
`]}),`
`,s.jsx(a.h2,{children:"1. Podstawy Dependency Injection"}),`
`,s.jsx(a.p,{children:"W Dependency Injection chodzi o przekazywanie zależności do obiektu zamiast tworzenia ich bezpośrednio wewnątrz obiektu. Dzięki temu można łatwo wymieniać zależności, co ułatwia testowanie i modyfikowanie kodu."}),`
`,s.jsx(a.h2,{children:"2. Prosty przykład DI"}),`
`,s.jsxs(a.p,{children:["Rozważmy prosty przykład, w którym klasa ",s.jsx(a.code,{children:"UserService"})," potrzebuje instancji ",s.jsx(a.code,{children:"UserRepository"}),":"]}),`
`,s.jsx(a.pre,{children:s.jsxs(a.code,{className:"hljs language-typescript",children:[s.jsx(a.span,{className:"hljs-keyword",children:"class"})," ",s.jsx(a.span,{className:"hljs-title class_",children:"UserRepository"}),` {
  `,s.jsx(a.span,{className:"hljs-title function_",children:"getUser"}),"(",s.jsx(a.span,{className:"hljs-attr",children:"userId"}),": ",s.jsx(a.span,{className:"hljs-built_in",children:"number"}),"): ",s.jsx(a.span,{className:"hljs-built_in",children:"string"}),` {
    `,s.jsx(a.span,{className:"hljs-keyword",children:"return"})," ",s.jsxs(a.span,{className:"hljs-string",children:["`User ",s.jsx(a.span,{className:"hljs-subst",children:"${userId}"}),"`"]}),`;
  }
}

`,s.jsx(a.span,{className:"hljs-keyword",children:"class"})," ",s.jsx(a.span,{className:"hljs-title class_",children:"UserService"}),` {
  `,s.jsx(a.span,{className:"hljs-keyword",children:"private"})," ",s.jsx(a.span,{className:"hljs-attr",children:"userRepository"}),": ",s.jsx(a.span,{className:"hljs-title class_",children:"UserRepository"}),`;

  `,s.jsx(a.span,{className:"hljs-title function_",children:"constructor"}),"(",s.jsx(a.span,{className:"hljs-params",children:"userRepository: UserRepository"}),`) {
    `,s.jsx(a.span,{className:"hljs-variable language_",children:"this"}),".",s.jsx(a.span,{className:"hljs-property",children:"userRepository"}),` = userRepository;
  }

  `,s.jsx(a.span,{className:"hljs-title function_",children:"getUserName"}),"(",s.jsx(a.span,{className:"hljs-attr",children:"userId"}),": ",s.jsx(a.span,{className:"hljs-built_in",children:"number"}),"): ",s.jsx(a.span,{className:"hljs-built_in",children:"string"}),` {
    `,s.jsx(a.span,{className:"hljs-keyword",children:"return"})," ",s.jsx(a.span,{className:"hljs-variable language_",children:"this"}),".",s.jsx(a.span,{className:"hljs-property",children:"userRepository"}),".",s.jsx(a.span,{className:"hljs-title function_",children:"getUser"}),`(userId);
  }
}

`,s.jsx(a.span,{className:"hljs-keyword",children:"const"})," userRepository = ",s.jsx(a.span,{className:"hljs-keyword",children:"new"})," ",s.jsx(a.span,{className:"hljs-title class_",children:"UserRepository"}),`();
`,s.jsx(a.span,{className:"hljs-keyword",children:"const"})," userService = ",s.jsx(a.span,{className:"hljs-keyword",children:"new"})," ",s.jsx(a.span,{className:"hljs-title class_",children:"UserService"}),`(userRepository);

`,s.jsx(a.span,{className:"hljs-variable language_",children:"console"}),".",s.jsx(a.span,{className:"hljs-title function_",children:"log"}),"(userService.",s.jsx(a.span,{className:"hljs-title function_",children:"getUserName"}),"(",s.jsx(a.span,{className:"hljs-number",children:"1"}),")); ",s.jsx(a.span,{className:"hljs-comment",children:"// Output: User 1"}),`
`]})}),`
`,s.jsxs(a.p,{children:["W powyższym przykładzie ",s.jsx(a.code,{children:"UserRepository"})," jest wstrzykiwany do ",s.jsx(a.code,{children:"UserService"})," przez konstruktor."]}),`
`,s.jsx(a.h2,{children:"3. Wstrzykiwanie zależności za pomocą kontenera IoC"}),`
`,s.jsx(a.p,{children:"Aby lepiej zarządzać zależnościami, możemy użyć kontenera IoC. Przykład poniżej pokazuje, jak można to zrobić przy użyciu prostego kontenera DI:"}),`
`,s.jsx(a.pre,{children:s.jsxs(a.code,{className:"hljs language-typescript",children:[s.jsx(a.span,{className:"hljs-keyword",children:"class"})," ",s.jsx(a.span,{className:"hljs-title class_",children:"IoCContainer"}),` {
  `,s.jsx(a.span,{className:"hljs-keyword",children:"private"})," ",s.jsx(a.span,{className:"hljs-attr",children:"dependencies"}),": ",s.jsx(a.span,{className:"hljs-title class_",children:"Map"}),"<",s.jsx(a.span,{className:"hljs-built_in",children:"string"}),", ",s.jsx(a.span,{className:"hljs-built_in",children:"any"}),"> = ",s.jsx(a.span,{className:"hljs-keyword",children:"new"})," ",s.jsx(a.span,{className:"hljs-title class_",children:"Map"}),`();

  register<T>(`,s.jsx(a.span,{className:"hljs-attr",children:"key"}),": ",s.jsx(a.span,{className:"hljs-built_in",children:"string"}),", ",s.jsx(a.span,{className:"hljs-attr",children:"dependency"}),": T): ",s.jsx(a.span,{className:"hljs-built_in",children:"void"}),` {
    `,s.jsx(a.span,{className:"hljs-variable language_",children:"this"}),".",s.jsx(a.span,{className:"hljs-property",children:"dependencies"}),".",s.jsx(a.span,{className:"hljs-title function_",children:"set"}),`(key, dependency);
  }

  resolve<T>(`,s.jsx(a.span,{className:"hljs-attr",children:"key"}),": ",s.jsx(a.span,{className:"hljs-built_in",children:"string"}),`): T {
    `,s.jsx(a.span,{className:"hljs-keyword",children:"const"})," dependency = ",s.jsx(a.span,{className:"hljs-variable language_",children:"this"}),".",s.jsx(a.span,{className:"hljs-property",children:"dependencies"}),".",s.jsx(a.span,{className:"hljs-title function_",children:"get"}),`(key);
    `,s.jsx(a.span,{className:"hljs-keyword",children:"if"}),` (!dependency) {
      `,s.jsx(a.span,{className:"hljs-keyword",children:"throw"})," ",s.jsx(a.span,{className:"hljs-keyword",children:"new"})," ",s.jsx(a.span,{className:"hljs-title class_",children:"Error"}),"(",s.jsxs(a.span,{className:"hljs-string",children:["`Dependency not found: ",s.jsx(a.span,{className:"hljs-subst",children:"${key}"}),"`"]}),`);
    }
    `,s.jsx(a.span,{className:"hljs-keyword",children:"return"}),` dependency;
  }
}

`,s.jsx(a.span,{className:"hljs-keyword",children:"class"})," ",s.jsx(a.span,{className:"hljs-title class_",children:"UserRepository"}),` {
  `,s.jsx(a.span,{className:"hljs-title function_",children:"getUser"}),"(",s.jsx(a.span,{className:"hljs-attr",children:"userId"}),": ",s.jsx(a.span,{className:"hljs-built_in",children:"number"}),"): ",s.jsx(a.span,{className:"hljs-built_in",children:"string"}),` {
    `,s.jsx(a.span,{className:"hljs-keyword",children:"return"})," ",s.jsxs(a.span,{className:"hljs-string",children:["`User ",s.jsx(a.span,{className:"hljs-subst",children:"${userId}"}),"`"]}),`;
  }
}

`,s.jsx(a.span,{className:"hljs-keyword",children:"class"})," ",s.jsx(a.span,{className:"hljs-title class_",children:"UserService"}),` {
  `,s.jsx(a.span,{className:"hljs-keyword",children:"private"})," ",s.jsx(a.span,{className:"hljs-attr",children:"userRepository"}),": ",s.jsx(a.span,{className:"hljs-title class_",children:"UserRepository"}),`;

  `,s.jsx(a.span,{className:"hljs-title function_",children:"constructor"}),"(",s.jsx(a.span,{className:"hljs-params",children:"userRepository: UserRepository"}),`) {
    `,s.jsx(a.span,{className:"hljs-variable language_",children:"this"}),".",s.jsx(a.span,{className:"hljs-property",children:"userRepository"}),` = userRepository;
  }

  `,s.jsx(a.span,{className:"hljs-title function_",children:"getUserName"}),"(",s.jsx(a.span,{className:"hljs-attr",children:"userId"}),": ",s.jsx(a.span,{className:"hljs-built_in",children:"number"}),"): ",s.jsx(a.span,{className:"hljs-built_in",children:"string"}),` {
    `,s.jsx(a.span,{className:"hljs-keyword",children:"return"})," ",s.jsx(a.span,{className:"hljs-variable language_",children:"this"}),".",s.jsx(a.span,{className:"hljs-property",children:"userRepository"}),".",s.jsx(a.span,{className:"hljs-title function_",children:"getUser"}),`(userId);
  }
}

`,s.jsx(a.span,{className:"hljs-keyword",children:"const"})," container = ",s.jsx(a.span,{className:"hljs-keyword",children:"new"})," ",s.jsx(a.span,{className:"hljs-title class_",children:"IoCContainer"}),`();
container.`,s.jsx(a.span,{className:"hljs-title function_",children:"register"}),"(",s.jsx(a.span,{className:"hljs-string",children:'"UserRepository"'}),", ",s.jsx(a.span,{className:"hljs-keyword",children:"new"})," ",s.jsx(a.span,{className:"hljs-title class_",children:"UserRepository"}),`());

`,s.jsx(a.span,{className:"hljs-keyword",children:"const"})," userRepository = container.",s.jsx(a.span,{className:"hljs-property",children:"resolve"}),"<",s.jsx(a.span,{className:"hljs-title class_",children:"UserRepository"}),">(",s.jsx(a.span,{className:"hljs-string",children:'"UserRepository"'}),`);
`,s.jsx(a.span,{className:"hljs-keyword",children:"const"})," userService = ",s.jsx(a.span,{className:"hljs-keyword",children:"new"})," ",s.jsx(a.span,{className:"hljs-title class_",children:"UserService"}),`(userRepository);

`,s.jsx(a.span,{className:"hljs-variable language_",children:"console"}),".",s.jsx(a.span,{className:"hljs-title function_",children:"log"}),"(userService.",s.jsx(a.span,{className:"hljs-title function_",children:"getUserName"}),"(",s.jsx(a.span,{className:"hljs-number",children:"1"}),")); ",s.jsx(a.span,{className:"hljs-comment",children:"// Output: User 1"}),`
`]})}),`
`,s.jsx(a.p,{children:"W tym przykładzie używamy kontenera IoC do rejestrowania i rozwiązywania zależności."}),`
`,s.jsx(a.h2,{children:"4. Korzystanie z dekoratorów do wstrzykiwania zależności"}),`
`,s.jsx(a.p,{children:"TypeScript pozwala na używanie dekoratorów, które mogą ułatwić wstrzykiwanie zależności. Przykład poniżej pokazuje, jak można to zrobić:"}),`
`,s.jsx(a.pre,{children:s.jsxs(a.code,{className:"hljs language-typescript",children:[s.jsx(a.span,{className:"hljs-keyword",children:"function"})," ",s.jsx(a.span,{className:"hljs-title function_",children:"Injectable"}),"(",s.jsxs(a.span,{className:"hljs-params",children:["target: ",s.jsx(a.span,{className:"hljs-built_in",children:"any"})]}),`) {
  `,s.jsx(a.span,{className:"hljs-comment",children:"// Rejestracja klasy jako zależności"}),`
  `,s.jsx(a.span,{className:"hljs-title class_",children:"IoCContainer"}),".",s.jsx(a.span,{className:"hljs-title function_",children:"getInstance"}),"().",s.jsx(a.span,{className:"hljs-title function_",children:"register"}),"(target.",s.jsx(a.span,{className:"hljs-property",children:"name"}),`, target);
}

`,s.jsx(a.span,{className:"hljs-keyword",children:"class"})," ",s.jsx(a.span,{className:"hljs-title class_",children:"IoCContainer"}),` {
  `,s.jsx(a.span,{className:"hljs-keyword",children:"private"})," ",s.jsx(a.span,{className:"hljs-keyword",children:"static"})," ",s.jsx(a.span,{className:"hljs-attr",children:"instance"}),": ",s.jsx(a.span,{className:"hljs-title class_",children:"IoCContainer"}),`;
  `,s.jsx(a.span,{className:"hljs-keyword",children:"private"})," ",s.jsx(a.span,{className:"hljs-attr",children:"dependencies"}),": ",s.jsx(a.span,{className:"hljs-title class_",children:"Map"}),"<",s.jsx(a.span,{className:"hljs-built_in",children:"string"}),", ",s.jsx(a.span,{className:"hljs-built_in",children:"any"}),"> = ",s.jsx(a.span,{className:"hljs-keyword",children:"new"})," ",s.jsx(a.span,{className:"hljs-title class_",children:"Map"}),`();

  `,s.jsx(a.span,{className:"hljs-keyword",children:"private"})," ",s.jsx(a.span,{className:"hljs-title function_",children:"constructor"}),"(",s.jsx(a.span,{className:"hljs-params"}),`) {}

  `,s.jsx(a.span,{className:"hljs-keyword",children:"public"})," ",s.jsx(a.span,{className:"hljs-keyword",children:"static"})," ",s.jsx(a.span,{className:"hljs-title function_",children:"getInstance"}),"(): ",s.jsx(a.span,{className:"hljs-title class_",children:"IoCContainer"}),` {
    `,s.jsx(a.span,{className:"hljs-keyword",children:"if"})," (!",s.jsx(a.span,{className:"hljs-title class_",children:"IoCContainer"}),".",s.jsx(a.span,{className:"hljs-property",children:"instance"}),`) {
      `,s.jsx(a.span,{className:"hljs-title class_",children:"IoCContainer"}),".",s.jsx(a.span,{className:"hljs-property",children:"instance"})," = ",s.jsx(a.span,{className:"hljs-keyword",children:"new"})," ",s.jsx(a.span,{className:"hljs-title class_",children:"IoCContainer"}),`();
    }
    `,s.jsx(a.span,{className:"hljs-keyword",children:"return"})," ",s.jsx(a.span,{className:"hljs-title class_",children:"IoCContainer"}),".",s.jsx(a.span,{className:"hljs-property",children:"instance"}),`;
  }

  register<T>(`,s.jsx(a.span,{className:"hljs-attr",children:"key"}),": ",s.jsx(a.span,{className:"hljs-built_in",children:"string"}),", ",s.jsx(a.span,{className:"hljs-attr",children:"dependency"}),": T): ",s.jsx(a.span,{className:"hljs-built_in",children:"void"}),` {
    `,s.jsx(a.span,{className:"hljs-variable language_",children:"this"}),".",s.jsx(a.span,{className:"hljs-property",children:"dependencies"}),".",s.jsx(a.span,{className:"hljs-title function_",children:"set"}),"(key, ",s.jsx(a.span,{className:"hljs-keyword",children:"new"})," ",s.jsx(a.span,{className:"hljs-title function_",children:"dependency"}),`());
  }

  resolve<T>(`,s.jsx(a.span,{className:"hljs-attr",children:"key"}),": ",s.jsx(a.span,{className:"hljs-built_in",children:"string"}),`): T {
    `,s.jsx(a.span,{className:"hljs-keyword",children:"const"})," dependency = ",s.jsx(a.span,{className:"hljs-variable language_",children:"this"}),".",s.jsx(a.span,{className:"hljs-property",children:"dependencies"}),".",s.jsx(a.span,{className:"hljs-title function_",children:"get"}),`(key);
    `,s.jsx(a.span,{className:"hljs-keyword",children:"if"}),` (!dependency) {
      `,s.jsx(a.span,{className:"hljs-keyword",children:"throw"})," ",s.jsx(a.span,{className:"hljs-keyword",children:"new"})," ",s.jsx(a.span,{className:"hljs-title class_",children:"Error"}),"(",s.jsxs(a.span,{className:"hljs-string",children:["`Dependency not found: ",s.jsx(a.span,{className:"hljs-subst",children:"${key}"}),"`"]}),`);
    }
    `,s.jsx(a.span,{className:"hljs-keyword",children:"return"}),` dependency;
  }
}

`,s.jsx(a.span,{className:"hljs-meta",children:"@Injectable"}),`
`,s.jsx(a.span,{className:"hljs-keyword",children:"class"})," ",s.jsx(a.span,{className:"hljs-title class_",children:"UserRepository"}),` {
  `,s.jsx(a.span,{className:"hljs-title function_",children:"getUser"}),"(",s.jsx(a.span,{className:"hljs-attr",children:"userId"}),": ",s.jsx(a.span,{className:"hljs-built_in",children:"number"}),"): ",s.jsx(a.span,{className:"hljs-built_in",children:"string"}),` {
    `,s.jsx(a.span,{className:"hljs-keyword",children:"return"})," ",s.jsxs(a.span,{className:"hljs-string",children:["`User ",s.jsx(a.span,{className:"hljs-subst",children:"${userId}"}),"`"]}),`;
  }
}

`,s.jsx(a.span,{className:"hljs-meta",children:"@Injectable"}),`
`,s.jsx(a.span,{className:"hljs-keyword",children:"class"})," ",s.jsx(a.span,{className:"hljs-title class_",children:"UserService"}),` {
  `,s.jsx(a.span,{className:"hljs-keyword",children:"private"})," ",s.jsx(a.span,{className:"hljs-attr",children:"userRepository"}),": ",s.jsx(a.span,{className:"hljs-title class_",children:"UserRepository"}),`;

  `,s.jsx(a.span,{className:"hljs-title function_",children:"constructor"}),"(",s.jsx(a.span,{className:"hljs-params"}),`) {
    `,s.jsx(a.span,{className:"hljs-variable language_",children:"this"}),".",s.jsx(a.span,{className:"hljs-property",children:"userRepository"}),` =
      `,s.jsx(a.span,{className:"hljs-title class_",children:"IoCContainer"}),".",s.jsx(a.span,{className:"hljs-title function_",children:"getInstance"}),"().",s.jsx(a.span,{className:"hljs-property",children:"resolve"}),"<",s.jsx(a.span,{className:"hljs-title class_",children:"UserRepository"}),">(",s.jsx(a.span,{className:"hljs-string",children:'"UserRepository"'}),`);
  }

  `,s.jsx(a.span,{className:"hljs-title function_",children:"getUserName"}),"(",s.jsx(a.span,{className:"hljs-attr",children:"userId"}),": ",s.jsx(a.span,{className:"hljs-built_in",children:"number"}),"): ",s.jsx(a.span,{className:"hljs-built_in",children:"string"}),` {
    `,s.jsx(a.span,{className:"hljs-keyword",children:"return"})," ",s.jsx(a.span,{className:"hljs-variable language_",children:"this"}),".",s.jsx(a.span,{className:"hljs-property",children:"userRepository"}),".",s.jsx(a.span,{className:"hljs-title function_",children:"getUser"}),`(userId);
  }
}

`,s.jsx(a.span,{className:"hljs-keyword",children:"const"}),` userService =
  `,s.jsx(a.span,{className:"hljs-title class_",children:"IoCContainer"}),".",s.jsx(a.span,{className:"hljs-title function_",children:"getInstance"}),"().",s.jsx(a.span,{className:"hljs-property",children:"resolve"}),"<",s.jsx(a.span,{className:"hljs-title class_",children:"UserService"}),">(",s.jsx(a.span,{className:"hljs-string",children:'"UserService"'}),`);

`,s.jsx(a.span,{className:"hljs-variable language_",children:"console"}),".",s.jsx(a.span,{className:"hljs-title function_",children:"log"}),"(userService.",s.jsx(a.span,{className:"hljs-title function_",children:"getUserName"}),"(",s.jsx(a.span,{className:"hljs-number",children:"1"}),")); ",s.jsx(a.span,{className:"hljs-comment",children:"// Output: User 1"}),`
`]})}),`
`,s.jsx(a.p,{children:"W tym przykładzie używamy dekoratorów, aby rejestrować klasy jako zależności w kontenerze IoC i automatycznie wstrzykiwać je w klasach, które ich potrzebują."}),`
`,s.jsx(a.h2,{children:"Podsumowanie"}),`
`,s.jsx(a.p,{children:"Dependency Injection w TypeScript to potężna technika, która może znacznie ułatwić zarządzanie zależnościami i poprawić testowalność oraz modularność kodu. Przedstawione powyżej przykłady pokazują różne podejścia do implementacji DI, w tym bezpośrednie wstrzykiwanie przez konstruktor, korzystanie z kontenerów IoC oraz używanie dekoratorów. Dzięki tym technikom można tworzyć bardziej elastyczne i łatwe w utrzymaniu aplikacje."})]})}function p(e={}){const{wrapper:a}=e.components||{};return a?s.jsx(a,{...e,children:s.jsx(n,{...e})}):n(e)}const M=Object.freeze(Object.defineProperty({__proto__:null,default:p,frontmatter:m},Symbol.toStringTag,{value:"Module"})),o={title:"Obserwatorium, czyli wzorzec projektowy obserwatora",description:"Wzorzec projektowy Obserwator (ang. Observer) jest jednym z najważniejszych wzorców projektowych, szczególnie użytecznym w kontekście programowania reaktywnego i aplikacji, które muszą reagować na zmiany stanu. W TypeScript możemy zaimplementować ten wzorzec w sposób typowany, co dodatkowo zwiększa bezpieczeństwo i czytelność kodu.",keywords:["typescript","wzorce","programowanie"],categories:["typescript","wzorce"],createdAt:"2024-06-20",updatedAt:"2024-06-20"};function l(e){const a={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",strong:"strong",...e.components};return s.jsxs(s.Fragment,{children:[s.jsx(a.p,{children:"Wzorzec projektowy Obserwator (ang. Observer) jest jednym z najważniejszych wzorców projektowych, szczególnie użytecznym w kontekście programowania reaktywnego i aplikacji, które muszą reagować na zmiany stanu. W TypeScript możemy zaimplementować ten wzorzec w sposób typowany, co dodatkowo zwiększa bezpieczeństwo i czytelność kodu."}),`
`,s.jsx(a.h2,{children:"Czym jest Wzorzec Obserwatora?"}),`
`,s.jsx(a.p,{children:"Wzorzec Obserwatora polega na tym, że obiekt (obserwowany) zarządza listą zależnych obiektów (obserwatorów) i automatycznie powiadamia ich o zmianach swojego stanu. Jest to realizowane za pomocą metod do subskrybowania, odsubskrybowania oraz powiadamiania obserwatorów."}),`
`,s.jsx(a.h2,{children:"Korzyści z używania Wzorca Obserwatora"}),`
`,s.jsxs(a.ol,{children:[`
`,s.jsxs(a.li,{children:[s.jsx(a.strong,{children:"Reaktywność:"})," Automatyczne powiadamianie obserwatorów o zmianach stanu."]}),`
`,s.jsxs(a.li,{children:[s.jsx(a.strong,{children:"Luźne Powiązania:"})," Obserwatorzy nie muszą znać szczegółów implementacji obiektu, który obserwują."]}),`
`,s.jsxs(a.li,{children:[s.jsx(a.strong,{children:"Elastyczność:"})," Łatwość dodawania nowych obserwatorów bez zmiany istniejącego kodu."]}),`
`]}),`
`,s.jsx(a.h2,{children:"Implementacja Wzorca Obserwatora w TypeScript"}),`
`,s.jsx(a.h3,{children:"Przykład 1: Prosta Implementacja"}),`
`,s.jsx(a.p,{children:"Poniżej znajduje się prosta implementacja wzorca Obserwatora w TypeScript:"}),`
`,s.jsx(a.pre,{children:s.jsxs(a.code,{className:"hljs language-typescript",children:[s.jsx(a.span,{className:"hljs-comment",children:"// Interfejs obserwatora"}),`
`,s.jsx(a.span,{className:"hljs-keyword",children:"interface"})," ",s.jsx(a.span,{className:"hljs-title class_",children:"Observer"}),` {
  `,s.jsx(a.span,{className:"hljs-title function_",children:"update"}),"(",s.jsx(a.span,{className:"hljs-attr",children:"message"}),": ",s.jsx(a.span,{className:"hljs-built_in",children:"string"}),"): ",s.jsx(a.span,{className:"hljs-built_in",children:"void"}),`;
}

`,s.jsx(a.span,{className:"hljs-comment",children:"// Klasa obserwowana"}),`
`,s.jsx(a.span,{className:"hljs-keyword",children:"class"})," ",s.jsx(a.span,{className:"hljs-title class_",children:"Subject"}),` {
  `,s.jsx(a.span,{className:"hljs-keyword",children:"private"})," ",s.jsx(a.span,{className:"hljs-attr",children:"observers"}),": ",s.jsx(a.span,{className:"hljs-title class_",children:"Observer"}),`[] = [];

  `,s.jsx(a.span,{className:"hljs-title function_",children:"subscribe"}),"(",s.jsx(a.span,{className:"hljs-attr",children:"observer"}),": ",s.jsx(a.span,{className:"hljs-title class_",children:"Observer"}),"): ",s.jsx(a.span,{className:"hljs-built_in",children:"void"}),` {
    `,s.jsx(a.span,{className:"hljs-variable language_",children:"this"}),".",s.jsx(a.span,{className:"hljs-property",children:"observers"}),".",s.jsx(a.span,{className:"hljs-title function_",children:"push"}),`(observer);
  }

  `,s.jsx(a.span,{className:"hljs-title function_",children:"unsubscribe"}),"(",s.jsx(a.span,{className:"hljs-attr",children:"observer"}),": ",s.jsx(a.span,{className:"hljs-title class_",children:"Observer"}),"): ",s.jsx(a.span,{className:"hljs-built_in",children:"void"}),` {
    `,s.jsx(a.span,{className:"hljs-variable language_",children:"this"}),".",s.jsx(a.span,{className:"hljs-property",children:"observers"})," = ",s.jsx(a.span,{className:"hljs-variable language_",children:"this"}),".",s.jsx(a.span,{className:"hljs-property",children:"observers"}),".",s.jsx(a.span,{className:"hljs-title function_",children:"filter"}),"(",s.jsxs(a.span,{className:"hljs-function",children:["(",s.jsx(a.span,{className:"hljs-params",children:"obs"}),") =>"]}),` obs !== observer);
  }

  `,s.jsx(a.span,{className:"hljs-title function_",children:"notify"}),"(",s.jsx(a.span,{className:"hljs-attr",children:"message"}),": ",s.jsx(a.span,{className:"hljs-built_in",children:"string"}),"): ",s.jsx(a.span,{className:"hljs-built_in",children:"void"}),` {
    `,s.jsx(a.span,{className:"hljs-variable language_",children:"this"}),".",s.jsx(a.span,{className:"hljs-property",children:"observers"}),".",s.jsx(a.span,{className:"hljs-title function_",children:"forEach"}),"(",s.jsxs(a.span,{className:"hljs-function",children:["(",s.jsx(a.span,{className:"hljs-params",children:"observer"}),") =>"]})," observer.",s.jsx(a.span,{className:"hljs-title function_",children:"update"}),`(message));
  }
}

`,s.jsx(a.span,{className:"hljs-comment",children:"// Implementacja obserwatora"}),`
`,s.jsx(a.span,{className:"hljs-keyword",children:"class"})," ",s.jsx(a.span,{className:"hljs-title class_",children:"ConcreteObserver"})," ",s.jsx(a.span,{className:"hljs-keyword",children:"implements"})," ",s.jsx(a.span,{className:"hljs-title class_",children:"Observer"}),` {
  `,s.jsx(a.span,{className:"hljs-title function_",children:"constructor"}),"(",s.jsxs(a.span,{className:"hljs-params",children:[s.jsx(a.span,{className:"hljs-keyword",children:"private"})," name: ",s.jsx(a.span,{className:"hljs-built_in",children:"string"})]}),`) {}

  `,s.jsx(a.span,{className:"hljs-title function_",children:"update"}),"(",s.jsx(a.span,{className:"hljs-attr",children:"message"}),": ",s.jsx(a.span,{className:"hljs-built_in",children:"string"}),"): ",s.jsx(a.span,{className:"hljs-built_in",children:"void"}),` {
    `,s.jsx(a.span,{className:"hljs-variable language_",children:"console"}),".",s.jsx(a.span,{className:"hljs-title function_",children:"log"}),"(",s.jsxs(a.span,{className:"hljs-string",children:["`",s.jsxs(a.span,{className:"hljs-subst",children:["${",s.jsx(a.span,{className:"hljs-variable language_",children:"this"}),".name}"]})," received message: ",s.jsx(a.span,{className:"hljs-subst",children:"${message}"}),"`"]}),`);
  }
}

`,s.jsx(a.span,{className:"hljs-comment",children:"// Użycie wzorca Obserwatora"}),`
`,s.jsx(a.span,{className:"hljs-keyword",children:"const"})," subject = ",s.jsx(a.span,{className:"hljs-keyword",children:"new"})," ",s.jsx(a.span,{className:"hljs-title class_",children:"Subject"}),`();

`,s.jsx(a.span,{className:"hljs-keyword",children:"const"})," observer1 = ",s.jsx(a.span,{className:"hljs-keyword",children:"new"})," ",s.jsx(a.span,{className:"hljs-title class_",children:"ConcreteObserver"}),"(",s.jsx(a.span,{className:"hljs-string",children:'"Observer 1"'}),`);
`,s.jsx(a.span,{className:"hljs-keyword",children:"const"})," observer2 = ",s.jsx(a.span,{className:"hljs-keyword",children:"new"})," ",s.jsx(a.span,{className:"hljs-title class_",children:"ConcreteObserver"}),"(",s.jsx(a.span,{className:"hljs-string",children:'"Observer 2"'}),`);

subject.`,s.jsx(a.span,{className:"hljs-title function_",children:"subscribe"}),`(observer1);
subject.`,s.jsx(a.span,{className:"hljs-title function_",children:"subscribe"}),`(observer2);

subject.`,s.jsx(a.span,{className:"hljs-title function_",children:"notify"}),"(",s.jsx(a.span,{className:"hljs-string",children:'"Hello, Observers!"'}),`);

`,s.jsx(a.span,{className:"hljs-comment",children:"// Output:"}),`
`,s.jsx(a.span,{className:"hljs-comment",children:"// Observer 1 received message: Hello, Observers!"}),`
`,s.jsx(a.span,{className:"hljs-comment",children:"// Observer 2 received message: Hello, Observers!"}),`
`]})}),`
`,s.jsxs(a.p,{children:["W tym przykładzie ",s.jsx(a.code,{children:"Subject"})," zarządza listą obserwatorów i powiadamia ich za pomocą metody ",s.jsx(a.code,{children:"notify"}),". Obserwatorzy implementują interfejs ",s.jsx(a.code,{children:"Observer"}),", który definiuje metodę ",s.jsx(a.code,{children:"update"}),"."]}),`
`,s.jsx(a.h3,{children:"Przykład 2: Rozbudowana Implementacja z Typowaniem"}),`
`,s.jsx(a.p,{children:"W bardziej zaawansowanej wersji możemy użyć typów generycznych do zarządzania różnymi typami danych:"}),`
`,s.jsx(a.pre,{children:s.jsxs(a.code,{className:"hljs language-typescript",children:[s.jsx(a.span,{className:"hljs-comment",children:"// Interfejs obserwatora z typem generycznym"}),`
`,s.jsx(a.span,{className:"hljs-keyword",children:"interface"})," ",s.jsx(a.span,{className:"hljs-title class_",children:"Observer"}),`<T> {
  `,s.jsx(a.span,{className:"hljs-title function_",children:"update"}),"(",s.jsx(a.span,{className:"hljs-attr",children:"data"}),": T): ",s.jsx(a.span,{className:"hljs-built_in",children:"void"}),`;
}

`,s.jsx(a.span,{className:"hljs-comment",children:"// Klasa obserwowana z typem generycznym"}),`
`,s.jsx(a.span,{className:"hljs-keyword",children:"class"})," ",s.jsx(a.span,{className:"hljs-title class_",children:"Subject"}),`<T> {
  `,s.jsx(a.span,{className:"hljs-keyword",children:"private"})," ",s.jsx(a.span,{className:"hljs-attr",children:"observers"}),": ",s.jsx(a.span,{className:"hljs-title class_",children:"Observer"}),`<T>[] = [];

  `,s.jsx(a.span,{className:"hljs-title function_",children:"subscribe"}),"(",s.jsx(a.span,{className:"hljs-attr",children:"observer"}),": ",s.jsx(a.span,{className:"hljs-title class_",children:"Observer"}),"<T>): ",s.jsx(a.span,{className:"hljs-built_in",children:"void"}),` {
    `,s.jsx(a.span,{className:"hljs-variable language_",children:"this"}),".",s.jsx(a.span,{className:"hljs-property",children:"observers"}),".",s.jsx(a.span,{className:"hljs-title function_",children:"push"}),`(observer);
  }

  `,s.jsx(a.span,{className:"hljs-title function_",children:"unsubscribe"}),"(",s.jsx(a.span,{className:"hljs-attr",children:"observer"}),": ",s.jsx(a.span,{className:"hljs-title class_",children:"Observer"}),"<T>): ",s.jsx(a.span,{className:"hljs-built_in",children:"void"}),` {
    `,s.jsx(a.span,{className:"hljs-variable language_",children:"this"}),".",s.jsx(a.span,{className:"hljs-property",children:"observers"})," = ",s.jsx(a.span,{className:"hljs-variable language_",children:"this"}),".",s.jsx(a.span,{className:"hljs-property",children:"observers"}),".",s.jsx(a.span,{className:"hljs-title function_",children:"filter"}),"(",s.jsxs(a.span,{className:"hljs-function",children:["(",s.jsx(a.span,{className:"hljs-params",children:"obs"}),") =>"]}),` obs !== observer);
  }

  `,s.jsx(a.span,{className:"hljs-title function_",children:"notify"}),"(",s.jsx(a.span,{className:"hljs-attr",children:"data"}),": T): ",s.jsx(a.span,{className:"hljs-built_in",children:"void"}),` {
    `,s.jsx(a.span,{className:"hljs-variable language_",children:"this"}),".",s.jsx(a.span,{className:"hljs-property",children:"observers"}),".",s.jsx(a.span,{className:"hljs-title function_",children:"forEach"}),"(",s.jsxs(a.span,{className:"hljs-function",children:["(",s.jsx(a.span,{className:"hljs-params",children:"observer"}),") =>"]})," observer.",s.jsx(a.span,{className:"hljs-title function_",children:"update"}),`(data));
  }
}

`,s.jsx(a.span,{className:"hljs-comment",children:"// Implementacja obserwatora"}),`
`,s.jsx(a.span,{className:"hljs-keyword",children:"class"})," ",s.jsx(a.span,{className:"hljs-title class_",children:"ConcreteObserver"}),"<T> ",s.jsx(a.span,{className:"hljs-keyword",children:"implements"})," ",s.jsx(a.span,{className:"hljs-title class_",children:"Observer"}),`<T> {
  `,s.jsx(a.span,{className:"hljs-title function_",children:"constructor"}),"(",s.jsxs(a.span,{className:"hljs-params",children:[s.jsx(a.span,{className:"hljs-keyword",children:"private"})," name: ",s.jsx(a.span,{className:"hljs-built_in",children:"string"})]}),`) {}

  `,s.jsx(a.span,{className:"hljs-title function_",children:"update"}),"(",s.jsx(a.span,{className:"hljs-attr",children:"data"}),": T): ",s.jsx(a.span,{className:"hljs-built_in",children:"void"}),` {
    `,s.jsx(a.span,{className:"hljs-variable language_",children:"console"}),".",s.jsx(a.span,{className:"hljs-title function_",children:"log"}),"(",s.jsxs(a.span,{className:"hljs-string",children:["`",s.jsxs(a.span,{className:"hljs-subst",children:["${",s.jsx(a.span,{className:"hljs-variable language_",children:"this"}),".name}"]})," received data:`"]}),`, data);
  }
}

`,s.jsx(a.span,{className:"hljs-comment",children:"// Użycie wzorca Obserwatora z typem generycznym"}),`
`,s.jsx(a.span,{className:"hljs-keyword",children:"interface"})," ",s.jsx(a.span,{className:"hljs-title class_",children:"User"}),` {
  `,s.jsx(a.span,{className:"hljs-attr",children:"name"}),": ",s.jsx(a.span,{className:"hljs-built_in",children:"string"}),`;
  `,s.jsx(a.span,{className:"hljs-attr",children:"age"}),": ",s.jsx(a.span,{className:"hljs-built_in",children:"number"}),`;
}

`,s.jsx(a.span,{className:"hljs-keyword",children:"const"})," userSubject = ",s.jsx(a.span,{className:"hljs-keyword",children:"new"})," ",s.jsx(a.span,{className:"hljs-title class_",children:"Subject"}),"<",s.jsx(a.span,{className:"hljs-title class_",children:"User"}),`>();

`,s.jsx(a.span,{className:"hljs-keyword",children:"const"})," userObserver1 = ",s.jsx(a.span,{className:"hljs-keyword",children:"new"})," ",s.jsx(a.span,{className:"hljs-title class_",children:"ConcreteObserver"}),"<",s.jsx(a.span,{className:"hljs-title class_",children:"User"}),">(",s.jsx(a.span,{className:"hljs-string",children:'"User Observer 1"'}),`);
`,s.jsx(a.span,{className:"hljs-keyword",children:"const"})," userObserver2 = ",s.jsx(a.span,{className:"hljs-keyword",children:"new"})," ",s.jsx(a.span,{className:"hljs-title class_",children:"ConcreteObserver"}),"<",s.jsx(a.span,{className:"hljs-title class_",children:"User"}),">(",s.jsx(a.span,{className:"hljs-string",children:'"User Observer 2"'}),`);

userSubject.`,s.jsx(a.span,{className:"hljs-title function_",children:"subscribe"}),`(userObserver1);
userSubject.`,s.jsx(a.span,{className:"hljs-title function_",children:"subscribe"}),`(userObserver2);

userSubject.`,s.jsx(a.span,{className:"hljs-title function_",children:"notify"}),"({ ",s.jsx(a.span,{className:"hljs-attr",children:"name"}),": ",s.jsx(a.span,{className:"hljs-string",children:'"Alice"'}),", ",s.jsx(a.span,{className:"hljs-attr",children:"age"}),": ",s.jsx(a.span,{className:"hljs-number",children:"30"}),` });

`,s.jsx(a.span,{className:"hljs-comment",children:"// Output:"}),`
`,s.jsx(a.span,{className:"hljs-comment",children:"// User Observer 1 received data: { name: 'Alice', age: 30 }"}),`
`,s.jsx(a.span,{className:"hljs-comment",children:"// User Observer 2 received data: { name: 'Alice', age: 30 }"}),`
`]})}),`
`,s.jsxs(a.p,{children:["W tej wersji ",s.jsx(a.code,{children:"Subject"})," i ",s.jsx(a.code,{children:"Observer"})," są typowane generycznie, co pozwala na bardziej elastyczne i bezpieczne przekazywanie danych."]}),`
`,s.jsx(a.h2,{children:"Zakończenie"}),`
`,s.jsx(a.p,{children:"Wzorzec Obserwatora w TypeScript jest potężnym narzędziem, które pozwala na łatwe zarządzanie zmianami stanu i reaktywnością aplikacji. Dzięki silnemu typowaniu w TypeScript, implementacja tego wzorca jest jeszcze bardziej bezpieczna i czytelna. Implementując ten wzorzec, można znacząco poprawić strukturę i el"}),`
`,s.jsx(a.p,{children:"astyczność kodu, co jest szczególnie ważne w dużych i złożonych aplikacjach. Dzięki temu wzorcowi, komponenty mogą komunikować się ze sobą w sposób luźno powiązany, co ułatwia ich testowanie, modyfikowanie i rozbudowę."}),`
`,s.jsx(a.p,{children:"Wzorzec Obserwatora w TypeScript można łatwo zaimplementować na różne sposoby, dostosowując go do specyficznych potrzeb projektu. W powyższych przykładach pokazaliśmy zarówno podstawową implementację, jak i bardziej zaawansowaną wersję z typami generycznymi. Zachęcam do eksperymentowania z tym wzorcem w swoich projektach, aby lepiej zrozumieć jego potencjał i korzyści."}),`
`,s.jsx(a.h3,{children:"Przykładowy Projekt z Wykorzystaniem Wzorca Obserwatora"}),`
`,s.jsx(a.p,{children:"Aby zobaczyć, jak wzorzec Obserwatora może być użyty w bardziej realistycznym scenariuszu, rozważmy prostą aplikację monitorującą zmiany temperatury:"}),`
`,s.jsx(a.pre,{children:s.jsxs(a.code,{className:"hljs language-typescript",children:[s.jsx(a.span,{className:"hljs-comment",children:"// Interfejs obserwatora"}),`
`,s.jsx(a.span,{className:"hljs-keyword",children:"interface"})," ",s.jsx(a.span,{className:"hljs-title class_",children:"Observer"}),`<T> {
  `,s.jsx(a.span,{className:"hljs-title function_",children:"update"}),"(",s.jsx(a.span,{className:"hljs-attr",children:"data"}),": T): ",s.jsx(a.span,{className:"hljs-built_in",children:"void"}),`;
}

`,s.jsx(a.span,{className:"hljs-comment",children:"// Klasa obserwowana"}),`
`,s.jsx(a.span,{className:"hljs-keyword",children:"class"})," ",s.jsx(a.span,{className:"hljs-title class_",children:"TemperatureSensor"}),` {
  `,s.jsx(a.span,{className:"hljs-keyword",children:"private"})," ",s.jsx(a.span,{className:"hljs-attr",children:"observers"}),": ",s.jsx(a.span,{className:"hljs-title class_",children:"Observer"}),"<",s.jsx(a.span,{className:"hljs-built_in",children:"number"}),`>[] = [];
  `,s.jsx(a.span,{className:"hljs-keyword",children:"private"})," ",s.jsx(a.span,{className:"hljs-attr",children:"temperature"}),": ",s.jsx(a.span,{className:"hljs-built_in",children:"number"})," = ",s.jsx(a.span,{className:"hljs-number",children:"0"}),`;

  `,s.jsx(a.span,{className:"hljs-title function_",children:"subscribe"}),"(",s.jsx(a.span,{className:"hljs-attr",children:"observer"}),": ",s.jsx(a.span,{className:"hljs-title class_",children:"Observer"}),"<",s.jsx(a.span,{className:"hljs-built_in",children:"number"}),">): ",s.jsx(a.span,{className:"hljs-built_in",children:"void"}),` {
    `,s.jsx(a.span,{className:"hljs-variable language_",children:"this"}),".",s.jsx(a.span,{className:"hljs-property",children:"observers"}),".",s.jsx(a.span,{className:"hljs-title function_",children:"push"}),`(observer);
  }

  `,s.jsx(a.span,{className:"hljs-title function_",children:"unsubscribe"}),"(",s.jsx(a.span,{className:"hljs-attr",children:"observer"}),": ",s.jsx(a.span,{className:"hljs-title class_",children:"Observer"}),"<",s.jsx(a.span,{className:"hljs-built_in",children:"number"}),">): ",s.jsx(a.span,{className:"hljs-built_in",children:"void"}),` {
    `,s.jsx(a.span,{className:"hljs-variable language_",children:"this"}),".",s.jsx(a.span,{className:"hljs-property",children:"observers"})," = ",s.jsx(a.span,{className:"hljs-variable language_",children:"this"}),".",s.jsx(a.span,{className:"hljs-property",children:"observers"}),".",s.jsx(a.span,{className:"hljs-title function_",children:"filter"}),"(",s.jsxs(a.span,{className:"hljs-function",children:["(",s.jsx(a.span,{className:"hljs-params",children:"obs"}),") =>"]}),` obs !== observer);
  }

  `,s.jsx(a.span,{className:"hljs-title function_",children:"setTemperature"}),"(",s.jsx(a.span,{className:"hljs-attr",children:"temp"}),": ",s.jsx(a.span,{className:"hljs-built_in",children:"number"}),"): ",s.jsx(a.span,{className:"hljs-built_in",children:"void"}),` {
    `,s.jsx(a.span,{className:"hljs-variable language_",children:"console"}),".",s.jsx(a.span,{className:"hljs-title function_",children:"log"}),"(",s.jsxs(a.span,{className:"hljs-string",children:["`Setting temperature to ",s.jsx(a.span,{className:"hljs-subst",children:"${temp}"}),"`"]}),`);
    `,s.jsx(a.span,{className:"hljs-variable language_",children:"this"}),".",s.jsx(a.span,{className:"hljs-property",children:"temperature"}),` = temp;
    `,s.jsx(a.span,{className:"hljs-variable language_",children:"this"}),".",s.jsx(a.span,{className:"hljs-title function_",children:"notify"}),`(temp);
  }

  `,s.jsx(a.span,{className:"hljs-keyword",children:"private"})," ",s.jsx(a.span,{className:"hljs-title function_",children:"notify"}),"(",s.jsx(a.span,{className:"hljs-attr",children:"temp"}),": ",s.jsx(a.span,{className:"hljs-built_in",children:"number"}),"): ",s.jsx(a.span,{className:"hljs-built_in",children:"void"}),` {
    `,s.jsx(a.span,{className:"hljs-variable language_",children:"this"}),".",s.jsx(a.span,{className:"hljs-property",children:"observers"}),".",s.jsx(a.span,{className:"hljs-title function_",children:"forEach"}),"(",s.jsxs(a.span,{className:"hljs-function",children:["(",s.jsx(a.span,{className:"hljs-params",children:"observer"}),") =>"]})," observer.",s.jsx(a.span,{className:"hljs-title function_",children:"update"}),`(temp));
  }
}

`,s.jsx(a.span,{className:"hljs-comment",children:"// Implementacja obserwatora"}),`
`,s.jsx(a.span,{className:"hljs-keyword",children:"class"})," ",s.jsx(a.span,{className:"hljs-title class_",children:"TemperatureDisplay"})," ",s.jsx(a.span,{className:"hljs-keyword",children:"implements"})," ",s.jsx(a.span,{className:"hljs-title class_",children:"Observer"}),"<",s.jsx(a.span,{className:"hljs-built_in",children:"number"}),`> {
  `,s.jsx(a.span,{className:"hljs-title function_",children:"update"}),"(",s.jsx(a.span,{className:"hljs-attr",children:"temp"}),": ",s.jsx(a.span,{className:"hljs-built_in",children:"number"}),"): ",s.jsx(a.span,{className:"hljs-built_in",children:"void"}),` {
    `,s.jsx(a.span,{className:"hljs-variable language_",children:"console"}),".",s.jsx(a.span,{className:"hljs-title function_",children:"log"}),"(",s.jsxs(a.span,{className:"hljs-string",children:["`Temperature Display: ",s.jsx(a.span,{className:"hljs-subst",children:"${temp}"}),"°C`"]}),`);
  }
}

`,s.jsx(a.span,{className:"hljs-keyword",children:"class"})," ",s.jsx(a.span,{className:"hljs-title class_",children:"TemperatureLogger"})," ",s.jsx(a.span,{className:"hljs-keyword",children:"implements"})," ",s.jsx(a.span,{className:"hljs-title class_",children:"Observer"}),"<",s.jsx(a.span,{className:"hljs-built_in",children:"number"}),`> {
  `,s.jsx(a.span,{className:"hljs-title function_",children:"update"}),"(",s.jsx(a.span,{className:"hljs-attr",children:"temp"}),": ",s.jsx(a.span,{className:"hljs-built_in",children:"number"}),"): ",s.jsx(a.span,{className:"hljs-built_in",children:"void"}),` {
    `,s.jsx(a.span,{className:"hljs-variable language_",children:"console"}),".",s.jsx(a.span,{className:"hljs-title function_",children:"log"}),"(",s.jsxs(a.span,{className:"hljs-string",children:["`Logging temperature: ",s.jsx(a.span,{className:"hljs-subst",children:"${temp}"}),"°C`"]}),`);
  }
}

`,s.jsx(a.span,{className:"hljs-comment",children:"// Użycie wzorca Obserwatora"}),`
`,s.jsx(a.span,{className:"hljs-keyword",children:"const"})," sensor = ",s.jsx(a.span,{className:"hljs-keyword",children:"new"})," ",s.jsx(a.span,{className:"hljs-title class_",children:"TemperatureSensor"}),`();
`,s.jsx(a.span,{className:"hljs-keyword",children:"const"})," display = ",s.jsx(a.span,{className:"hljs-keyword",children:"new"})," ",s.jsx(a.span,{className:"hljs-title class_",children:"TemperatureDisplay"}),`();
`,s.jsx(a.span,{className:"hljs-keyword",children:"const"})," logger = ",s.jsx(a.span,{className:"hljs-keyword",children:"new"})," ",s.jsx(a.span,{className:"hljs-title class_",children:"TemperatureLogger"}),`();

sensor.`,s.jsx(a.span,{className:"hljs-title function_",children:"subscribe"}),`(display);
sensor.`,s.jsx(a.span,{className:"hljs-title function_",children:"subscribe"}),`(logger);

sensor.`,s.jsx(a.span,{className:"hljs-title function_",children:"setTemperature"}),"(",s.jsx(a.span,{className:"hljs-number",children:"25"}),"); ",s.jsx(a.span,{className:"hljs-comment",children:"// Output: Setting temperature to 25"}),`
`,s.jsx(a.span,{className:"hljs-comment",children:"//         Temperature Display: 25°C"}),`
`,s.jsx(a.span,{className:"hljs-comment",children:"//         Logging temperature: 25°C"}),`

sensor.`,s.jsx(a.span,{className:"hljs-title function_",children:"setTemperature"}),"(",s.jsx(a.span,{className:"hljs-number",children:"30"}),"); ",s.jsx(a.span,{className:"hljs-comment",children:"// Output: Setting temperature to 30"}),`
`,s.jsx(a.span,{className:"hljs-comment",children:"//         Temperature Display: 30°C"}),`
`,s.jsx(a.span,{className:"hljs-comment",children:"//         Logging temperature: 30°C"}),`
`]})}),`
`,s.jsxs(a.p,{children:["W tym przykładzie ",s.jsx(a.code,{children:"TemperatureSensor"})," pełni rolę obiektu obserwowanego, który powiadamia swoich obserwatorów (",s.jsx(a.code,{children:"TemperatureDisplay"})," i ",s.jsx(a.code,{children:"TemperatureLogger"}),") o zmianach temperatury. W praktycznym scenariuszu można by zastosować ten wzorzec do monitorowania różnych parametrów i reagowania na zmiany w czasie rzeczywistym."]}),`
`,s.jsx(a.h2,{children:"Zakończenie"}),`
`,s.jsx(a.p,{children:"Wzorzec projektowy Obserwatora jest jednym z fundamentów programowania reaktywnego, pozwalając na luźne powiązanie komponentów i lepszą organizację kodu. TypeScript, dzięki swoim możliwościom typowania, umożliwia bezpieczną i efektywną implementację tego wzorca. Niezależnie od skali projektu, warto rozważyć użycie wzorca Obserwatora, aby poprawić elastyczność i czytelność kodu."})]})}function x(e={}){const{wrapper:a}=e.components||{};return a?s.jsx(a,{...e,children:s.jsx(l,{...e})}):l(e)}const P=Object.freeze(Object.defineProperty({__proto__:null,default:x,frontmatter:o},Symbol.toStringTag,{value:"Module"})),N={title:"Signalizacja, czyli koncept Signals w Typescript",description:"Signal to koncepcja pochodząca z programowania reaktywnego, której celem jest uproszczenie komunikacji między komponentami oraz zarządzania stanem aplikacji. W TypeScript, dzięki silnemu typowaniu, można zaimplementować sygnały w sposób bezpieczny i efektywny.",keywords:["typescript","wzorce","signals"],categories:["typescript","wzorce"],createdAt:"2024-06-20",updatedAt:"2024-06-20"};function c(e){const a={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",strong:"strong",...e.components};return s.jsxs(s.Fragment,{children:[s.jsx(a.p,{children:"Signal to koncepcja pochodząca z programowania reaktywnego, której celem jest uproszczenie komunikacji między komponentami oraz zarządzania stanem aplikacji. W TypeScript, dzięki silnemu typowaniu, można zaimplementować sygnały w sposób bezpieczny i efektywny."}),`
`,s.jsx(a.h2,{children:"Czym jest Signal?"}),`
`,s.jsx(a.p,{children:"Signal (sygnał) jest obiektem, który reprezentuje strumień danych, który może być obserwowany i reagować na zmiany tych danych. W kontekście frontendu, sygnały mogą być używane do reagowania na zdarzenia użytkownika, zmiany stanu aplikacji, czy asynchroniczne operacje, takie jak żądania sieciowe."}),`
`,s.jsx(a.h2,{children:"Korzyści z używania Signal"}),`
`,s.jsxs(a.ol,{children:[`
`,s.jsxs(a.li,{children:[s.jsx(a.strong,{children:"Reaktywność:"})," Umożliwiają budowanie aplikacji, które automatycznie reagują na zmiany danych."]}),`
`,s.jsxs(a.li,{children:[s.jsx(a.strong,{children:"Czytelność:"})," Poprawiają czytelność kodu poprzez eliminację złożonych zależności i ręcznego zarządzania stanem."]}),`
`,s.jsxs(a.li,{children:[s.jsx(a.strong,{children:"Modularność:"})," Ułatwiają zarządzanie stanem w skomplikowanych aplikacjach poprzez oddzielenie logiki zarządzania stanem od komponentów."]}),`
`]}),`
`,s.jsx(a.h2,{children:"Implementacja Signal w TypeScript"}),`
`,s.jsx(a.h3,{children:"Przykład 1: Prosty Signal"}),`
`,s.jsx(a.p,{children:"Poniżej przedstawiono prostą implementację sygnału w TypeScript:"}),`
`,s.jsx(a.pre,{children:s.jsxs(a.code,{className:"hljs language-typescript",children:[s.jsx(a.span,{className:"hljs-keyword",children:"type"})," ",s.jsx(a.span,{className:"hljs-title class_",children:"Listener"}),"<T> = ",s.jsxs(a.span,{className:"hljs-function",children:["(",s.jsx(a.span,{className:"hljs-params",children:"value: T"}),") =>"]})," ",s.jsx(a.span,{className:"hljs-built_in",children:"void"}),`;

`,s.jsx(a.span,{className:"hljs-keyword",children:"class"})," ",s.jsx(a.span,{className:"hljs-title class_",children:"Signal"}),`<T> {
  `,s.jsx(a.span,{className:"hljs-keyword",children:"private"})," ",s.jsx(a.span,{className:"hljs-attr",children:"listeners"}),": ",s.jsx(a.span,{className:"hljs-title class_",children:"Listener"}),`<T>[] = [];

  `,s.jsx(a.span,{className:"hljs-title function_",children:"subscribe"}),"(",s.jsx(a.span,{className:"hljs-attr",children:"listener"}),": ",s.jsx(a.span,{className:"hljs-title class_",children:"Listener"}),"<T>): ",s.jsx(a.span,{className:"hljs-built_in",children:"void"}),` {
    `,s.jsx(a.span,{className:"hljs-variable language_",children:"this"}),".",s.jsx(a.span,{className:"hljs-property",children:"listeners"}),".",s.jsx(a.span,{className:"hljs-title function_",children:"push"}),`(listener);
  }

  `,s.jsx(a.span,{className:"hljs-title function_",children:"unsubscribe"}),"(",s.jsx(a.span,{className:"hljs-attr",children:"listener"}),": ",s.jsx(a.span,{className:"hljs-title class_",children:"Listener"}),"<T>): ",s.jsx(a.span,{className:"hljs-built_in",children:"void"}),` {
    `,s.jsx(a.span,{className:"hljs-variable language_",children:"this"}),".",s.jsx(a.span,{className:"hljs-property",children:"listeners"})," = ",s.jsx(a.span,{className:"hljs-variable language_",children:"this"}),".",s.jsx(a.span,{className:"hljs-property",children:"listeners"}),".",s.jsx(a.span,{className:"hljs-title function_",children:"filter"}),"(",s.jsxs(a.span,{className:"hljs-function",children:["(",s.jsx(a.span,{className:"hljs-params",children:"l"}),") =>"]}),` l !== listener);
  }

  `,s.jsx(a.span,{className:"hljs-title function_",children:"emit"}),"(",s.jsx(a.span,{className:"hljs-attr",children:"value"}),": T): ",s.jsx(a.span,{className:"hljs-built_in",children:"void"}),` {
    `,s.jsx(a.span,{className:"hljs-variable language_",children:"this"}),".",s.jsx(a.span,{className:"hljs-property",children:"listeners"}),".",s.jsx(a.span,{className:"hljs-title function_",children:"forEach"}),"(",s.jsxs(a.span,{className:"hljs-function",children:["(",s.jsx(a.span,{className:"hljs-params",children:"listener"}),") =>"]})," ",s.jsx(a.span,{className:"hljs-title function_",children:"listener"}),`(value));
  }
}

`,s.jsx(a.span,{className:"hljs-comment",children:"// Użycie sygnału"}),`
`,s.jsx(a.span,{className:"hljs-keyword",children:"const"})," numberSignal = ",s.jsx(a.span,{className:"hljs-keyword",children:"new"})," ",s.jsx(a.span,{className:"hljs-title class_",children:"Signal"}),"<",s.jsx(a.span,{className:"hljs-built_in",children:"number"}),`>();

numberSignal.`,s.jsx(a.span,{className:"hljs-title function_",children:"subscribe"}),"(",s.jsxs(a.span,{className:"hljs-function",children:["(",s.jsx(a.span,{className:"hljs-params",children:"value"}),") =>"]}),` {
  `,s.jsx(a.span,{className:"hljs-variable language_",children:"console"}),".",s.jsx(a.span,{className:"hljs-title function_",children:"log"}),"(",s.jsxs(a.span,{className:"hljs-string",children:["`Received value: ",s.jsx(a.span,{className:"hljs-subst",children:"${value}"}),"`"]}),`);
});

numberSignal.`,s.jsx(a.span,{className:"hljs-title function_",children:"emit"}),"(",s.jsx(a.span,{className:"hljs-number",children:"42"}),"); ",s.jsx(a.span,{className:"hljs-comment",children:"// Output: Received value: 42"}),`
`]})}),`
`,s.jsxs(a.p,{children:["W tym przykładzie zdefiniowano klasę ",s.jsx(a.code,{children:"Signal"}),", która umożliwia subskrybowanie, usuwanie subskrypcji oraz emitowanie wartości do wszystkich subskrybentów."]}),`
`,s.jsx(a.h3,{children:"Przykład 2: Zaawansowany Signal z Typowaniem"}),`
`,s.jsx(a.p,{children:"Poniższy przykład przedstawia bardziej zaawansowaną implementację sygnału z wykorzystaniem typów generycznych:"}),`
`,s.jsx(a.pre,{children:s.jsxs(a.code,{className:"hljs language-typescript",children:[s.jsx(a.span,{className:"hljs-keyword",children:"type"})," ",s.jsx(a.span,{className:"hljs-title class_",children:"Listener"}),"<T> = ",s.jsxs(a.span,{className:"hljs-function",children:["(",s.jsx(a.span,{className:"hljs-params",children:"value: T"}),") =>"]})," ",s.jsx(a.span,{className:"hljs-built_in",children:"void"}),`;

`,s.jsx(a.span,{className:"hljs-keyword",children:"class"})," ",s.jsx(a.span,{className:"hljs-title class_",children:"Signal"}),`<T> {
  `,s.jsx(a.span,{className:"hljs-keyword",children:"private"})," ",s.jsx(a.span,{className:"hljs-attr",children:"listeners"}),": ",s.jsx(a.span,{className:"hljs-title class_",children:"Set"}),"<",s.jsx(a.span,{className:"hljs-title class_",children:"Listener"}),"<T>> = ",s.jsx(a.span,{className:"hljs-keyword",children:"new"})," ",s.jsx(a.span,{className:"hljs-title class_",children:"Set"}),`();

  `,s.jsx(a.span,{className:"hljs-title function_",children:"subscribe"}),"(",s.jsx(a.span,{className:"hljs-attr",children:"listener"}),": ",s.jsx(a.span,{className:"hljs-title class_",children:"Listener"}),"<T>): ",s.jsx(a.span,{className:"hljs-built_in",children:"void"}),` {
    `,s.jsx(a.span,{className:"hljs-variable language_",children:"this"}),".",s.jsx(a.span,{className:"hljs-property",children:"listeners"}),".",s.jsx(a.span,{className:"hljs-title function_",children:"add"}),`(listener);
  }

  `,s.jsx(a.span,{className:"hljs-title function_",children:"unsubscribe"}),"(",s.jsx(a.span,{className:"hljs-attr",children:"listener"}),": ",s.jsx(a.span,{className:"hljs-title class_",children:"Listener"}),"<T>): ",s.jsx(a.span,{className:"hljs-built_in",children:"void"}),` {
    `,s.jsx(a.span,{className:"hljs-variable language_",children:"this"}),".",s.jsx(a.span,{className:"hljs-property",children:"listeners"}),".",s.jsx(a.span,{className:"hljs-title function_",children:"delete"}),`(listener);
  }

  `,s.jsx(a.span,{className:"hljs-title function_",children:"emit"}),"(",s.jsx(a.span,{className:"hljs-attr",children:"value"}),": T): ",s.jsx(a.span,{className:"hljs-built_in",children:"void"}),` {
    `,s.jsx(a.span,{className:"hljs-keyword",children:"for"})," (",s.jsx(a.span,{className:"hljs-keyword",children:"const"})," listener ",s.jsx(a.span,{className:"hljs-keyword",children:"of"})," ",s.jsx(a.span,{className:"hljs-variable language_",children:"this"}),".",s.jsx(a.span,{className:"hljs-property",children:"listeners"}),`) {
      `,s.jsx(a.span,{className:"hljs-title function_",children:"listener"}),`(value);
    }
  }
}

`,s.jsx(a.span,{className:"hljs-comment",children:"// Użycie sygnału z typem generycznym"}),`
`,s.jsx(a.span,{className:"hljs-keyword",children:"interface"})," ",s.jsx(a.span,{className:"hljs-title class_",children:"User"}),` {
  `,s.jsx(a.span,{className:"hljs-attr",children:"name"}),": ",s.jsx(a.span,{className:"hljs-built_in",children:"string"}),`;
  `,s.jsx(a.span,{className:"hljs-attr",children:"age"}),": ",s.jsx(a.span,{className:"hljs-built_in",children:"number"}),`;
}

`,s.jsx(a.span,{className:"hljs-keyword",children:"const"})," userSignal = ",s.jsx(a.span,{className:"hljs-keyword",children:"new"})," ",s.jsx(a.span,{className:"hljs-title class_",children:"Signal"}),"<",s.jsx(a.span,{className:"hljs-title class_",children:"User"}),`>();

userSignal.`,s.jsx(a.span,{className:"hljs-title function_",children:"subscribe"}),"(",s.jsxs(a.span,{className:"hljs-function",children:["(",s.jsx(a.span,{className:"hljs-params",children:"user"}),") =>"]}),` {
  `,s.jsx(a.span,{className:"hljs-variable language_",children:"console"}),".",s.jsx(a.span,{className:"hljs-title function_",children:"log"}),"(",s.jsxs(a.span,{className:"hljs-string",children:["`User: ",s.jsx(a.span,{className:"hljs-subst",children:"${user.name}"}),", Age: ",s.jsx(a.span,{className:"hljs-subst",children:"${user.age}"}),"`"]}),`);
});

userSignal.`,s.jsx(a.span,{className:"hljs-title function_",children:"emit"}),"({ ",s.jsx(a.span,{className:"hljs-attr",children:"name"}),": ",s.jsx(a.span,{className:"hljs-string",children:'"John Doe"'}),", ",s.jsx(a.span,{className:"hljs-attr",children:"age"}),": ",s.jsx(a.span,{className:"hljs-number",children:"30"})," }); ",s.jsx(a.span,{className:"hljs-comment",children:"// Output: User: John Doe, Age: 30"}),`
`]})}),`
`,s.jsxs(a.p,{children:["W tym przykładzie ",s.jsx(a.code,{children:"Signal"})," używa ",s.jsx(a.code,{children:"Set"})," do przechowywania subskrybentów, co zapobiega wielokrotnemu dodawaniu tego samego subskrybenta. Zastosowanie typów generycznych pozwala na tworzenie sygnałów obsługujących dowolne typy danych."]}),`
`,s.jsx(a.h2,{children:"Zakończenie"}),`
`,s.jsx(a.p,{children:"Signal w TypeScript to potężne narzędzie do budowania reaktywnych aplikacji, które mogą automatycznie reagować na zmiany stanu. Dzięki silnemu typowaniu TypeScript, implementacja sygnałów jest bezpieczna i efektywna, co przyczynia się do tworzenia bardziej zrozumiałych i łatwiejszych w utrzymaniu kodów. Implementując sygnały, możemy znacząco uprościć zarządzanie stanem w naszych aplikacjach i poprawić ich architekturę."})]})}function u(e={}){const{wrapper:a}=e.components||{};return a?s.jsx(a,{...e,children:s.jsx(c,{...e})}):c(e)}const D=Object.freeze(Object.defineProperty({__proto__:null,default:u,frontmatter:N},Symbol.toStringTag,{value:"Module"})),g={title:"Renesans w JS, czyli wprowadzenie do nowoczesnego JavaScript",description:"JavaScript jest językiem programowania, który jest powszechnie stosowany do tworzenia dynamicznych i interaktywnych stron internetowych. W ciągu ostatnich lat JavaScript znacznie ewoluował, wprowadzając nowe funkcje i poprawiając istniejące mechanizmy. W tym kursie omówimy najważniejsze elementy nowoczesnego JavaScript, w tym ES6 i nowsze.",keywords:["javascript","kurs","wprowadzenie","przewodnik","web","frontend"],categories:["wprowadzenie","javascript"],createdAt:"2024-06-30"};function r(e){const a={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",span:"span",ul:"ul",...e.components};return s.jsxs(s.Fragment,{children:[s.jsx(a.p,{children:"JavaScript jest językiem programowania, który jest powszechnie stosowany do tworzenia dynamicznych i interaktywnych stron internetowych. W ciągu ostatnich lat JavaScript znacznie ewoluował, wprowadzając nowe funkcje i poprawiając istniejące mechanizmy. W tym kursie omówimy najważniejsze elementy nowoczesnego JavaScript, w tym ES6 i nowsze."}),`
`,s.jsxs(a.h2,{children:["Zmienne: ",s.jsx(a.code,{children:"let"})," i ",s.jsx(a.code,{children:"const"})]}),`
`,s.jsxs(a.p,{children:["W nowoczesnym JavaScript zmienne są definiowane za pomocą ",s.jsx(a.code,{children:"let"})," i ",s.jsx(a.code,{children:"const"})," zamiast ",s.jsx(a.code,{children:"var"}),"."]}),`
`,s.jsxs(a.ul,{children:[`
`,s.jsxs(a.li,{children:[s.jsx(a.code,{children:"let"})," pozwala na deklarację zmiennych, które mogą być zmieniane."]}),`
`,s.jsxs(a.li,{children:[s.jsx(a.code,{children:"const"})," pozwala na deklarację zmiennych, które są stałe i nie mogą być zmieniane."]}),`
`]}),`
`,s.jsx(a.h3,{children:"Przykłady:"}),`
`,s.jsx(a.pre,{children:s.jsxs(a.code,{className:"hljs language-javascript",children:[s.jsx(a.span,{className:"hljs-keyword",children:"let"})," zmienna = ",s.jsx(a.span,{className:"hljs-string",children:'"To jest zmienna"'}),`;
zmienna = `,s.jsx(a.span,{className:"hljs-string",children:'"Zmieniona wartość"'}),`;

`,s.jsx(a.span,{className:"hljs-keyword",children:"const"})," stala = ",s.jsx(a.span,{className:"hljs-string",children:'"To jest stała"'}),`;
`,s.jsx(a.span,{className:"hljs-comment",children:"// stala = 'Zmieniona wartość'; // Spowoduje błąd"}),`
`]})}),`
`,s.jsx(a.h2,{children:"Funkcje strzałkowe"}),`
`,s.jsxs(a.p,{children:["Funkcje strzałkowe to skrócony zapis funkcji, który również pozwala na lepsze zrozumienie kontekstu ",s.jsx(a.code,{children:"this"}),"."]}),`
`,s.jsx(a.h3,{children:"Przykład:"}),`
`,s.jsx(a.pre,{children:s.jsxs(a.code,{className:"hljs language-javascript",children:[s.jsx(a.span,{className:"hljs-comment",children:"// Standardowa funkcja"}),`
`,s.jsx(a.span,{className:"hljs-keyword",children:"function"})," ",s.jsx(a.span,{className:"hljs-title function_",children:"dodaj"}),"(",s.jsx(a.span,{className:"hljs-params",children:"a, b"}),`) {
  `,s.jsx(a.span,{className:"hljs-keyword",children:"return"}),` a + b;
}

`,s.jsx(a.span,{className:"hljs-comment",children:"// Funkcja strzałkowa"}),`
`,s.jsx(a.span,{className:"hljs-keyword",children:"const"})," ",s.jsx(a.span,{className:"hljs-title function_",children:"dodaj"})," = (",s.jsx(a.span,{className:"hljs-params",children:"a, b"}),`) => a + b;
`]})}),`
`,s.jsx(a.h2,{children:"Szablony stringów (Template Literals)"}),`
`,s.jsxs(a.p,{children:["Szablony stringów umożliwiają interpolację zmiennych i wyrażenia w łańcuchach znaków za pomocą backticków (",s.jsx(a.code,{children:"`"}),")."]}),`
`,s.jsx(a.h3,{children:"Przykład:"}),`
`,s.jsx(a.pre,{children:s.jsxs(a.code,{className:"hljs language-javascript",children:[s.jsx(a.span,{className:"hljs-keyword",children:"const"})," name = ",s.jsx(a.span,{className:"hljs-string",children:'"Jan"'}),`;
`,s.jsx(a.span,{className:"hljs-keyword",children:"const"})," greeting = ",s.jsxs(a.span,{className:"hljs-string",children:["`Cześć, ",s.jsx(a.span,{className:"hljs-subst",children:"${name}"}),"! Jak się masz?`"]}),`;
`,s.jsx(a.span,{className:"hljs-variable language_",children:"console"}),".",s.jsx(a.span,{className:"hljs-title function_",children:"log"}),"(greeting); ",s.jsx(a.span,{className:"hljs-comment",children:'// "Cześć, Jan! Jak się masz?"'}),`
`]})}),`
`,s.jsx(a.h2,{children:"Destrukturyzacja"}),`
`,s.jsx(a.p,{children:"Destrukturyzacja pozwala na wyodrębnienie wartości z tablic lub obiektów i przypisanie ich do zmiennych."}),`
`,s.jsx(a.h3,{children:"Przykład z tablicą:"}),`
`,s.jsx(a.pre,{children:s.jsxs(a.code,{className:"hljs language-javascript",children:[s.jsx(a.span,{className:"hljs-keyword",children:"const"})," liczby = [",s.jsx(a.span,{className:"hljs-number",children:"1"}),", ",s.jsx(a.span,{className:"hljs-number",children:"2"}),", ",s.jsx(a.span,{className:"hljs-number",children:"3"}),`];
`,s.jsx(a.span,{className:"hljs-keyword",children:"const"}),` [jeden, dwa, trzy] = liczby;
`,s.jsx(a.span,{className:"hljs-variable language_",children:"console"}),".",s.jsx(a.span,{className:"hljs-title function_",children:"log"}),"(jeden, dwa, trzy); ",s.jsx(a.span,{className:"hljs-comment",children:"// 1 2 3"}),`
`]})}),`
`,s.jsx(a.h3,{children:"Przykład z obiektem:"}),`
`,s.jsx(a.pre,{children:s.jsxs(a.code,{className:"hljs language-javascript",children:[s.jsx(a.span,{className:"hljs-keyword",children:"const"})," osoba = { ",s.jsx(a.span,{className:"hljs-attr",children:"imie"}),": ",s.jsx(a.span,{className:"hljs-string",children:'"Jan"'}),", ",s.jsx(a.span,{className:"hljs-attr",children:"wiek"}),": ",s.jsx(a.span,{className:"hljs-number",children:"30"}),` };
`,s.jsx(a.span,{className:"hljs-keyword",children:"const"}),` { imie, wiek } = osoba;
`,s.jsx(a.span,{className:"hljs-variable language_",children:"console"}),".",s.jsx(a.span,{className:"hljs-title function_",children:"log"}),"(imie, wiek); ",s.jsx(a.span,{className:"hljs-comment",children:"// Jan 30"}),`
`]})}),`
`,s.jsxs(a.h2,{children:["Spread operator (",s.jsx(a.code,{children:"..."}),")"]}),`
`,s.jsx(a.p,{children:"Spread operator pozwala na rozwinięcie elementów tablicy lub obiektu."}),`
`,s.jsx(a.h3,{children:"Przykład z tablicą:"}),`
`,s.jsx(a.pre,{children:s.jsxs(a.code,{className:"hljs language-javascript",children:[s.jsx(a.span,{className:"hljs-keyword",children:"const"})," liczby = [",s.jsx(a.span,{className:"hljs-number",children:"1"}),", ",s.jsx(a.span,{className:"hljs-number",children:"2"}),", ",s.jsx(a.span,{className:"hljs-number",children:"3"}),`];
`,s.jsx(a.span,{className:"hljs-keyword",children:"const"})," wiecejLiczb = [...liczby, ",s.jsx(a.span,{className:"hljs-number",children:"4"}),", ",s.jsx(a.span,{className:"hljs-number",children:"5"}),", ",s.jsx(a.span,{className:"hljs-number",children:"6"}),`];
`,s.jsx(a.span,{className:"hljs-variable language_",children:"console"}),".",s.jsx(a.span,{className:"hljs-title function_",children:"log"}),"(wiecejLiczb); ",s.jsx(a.span,{className:"hljs-comment",children:"// [1, 2, 3, 4, 5, 6]"}),`
`]})}),`
`,s.jsx(a.h3,{children:"Przykład z obiektem:"}),`
`,s.jsx(a.pre,{children:s.jsxs(a.code,{className:"hljs language-javascript",children:[s.jsx(a.span,{className:"hljs-keyword",children:"const"})," osoba = { ",s.jsx(a.span,{className:"hljs-attr",children:"imie"}),": ",s.jsx(a.span,{className:"hljs-string",children:'"Jan"'}),", ",s.jsx(a.span,{className:"hljs-attr",children:"wiek"}),": ",s.jsx(a.span,{className:"hljs-number",children:"30"}),` };
`,s.jsx(a.span,{className:"hljs-keyword",children:"const"})," nowaOsoba = { ...osoba, ",s.jsx(a.span,{className:"hljs-attr",children:"miasto"}),": ",s.jsx(a.span,{className:"hljs-string",children:'"Warszawa"'}),` };
`,s.jsx(a.span,{className:"hljs-variable language_",children:"console"}),".",s.jsx(a.span,{className:"hljs-title function_",children:"log"}),"(nowaOsoba); ",s.jsx(a.span,{className:"hljs-comment",children:"// { imie: 'Jan', wiek: 30, miasto: 'Warszawa' }"}),`
`]})}),`
`,s.jsx(a.h2,{children:"Promisy"}),`
`,s.jsx(a.p,{children:"Promisy są używane do obsługi operacji asynchronicznych."}),`
`,s.jsx(a.h3,{children:"Przykład:"}),`
`,s.jsx(a.pre,{children:s.jsxs(a.code,{className:"hljs language-javascript",children:[s.jsx(a.span,{className:"hljs-keyword",children:"const"})," obietnica = ",s.jsx(a.span,{className:"hljs-keyword",children:"new"})," ",s.jsx(a.span,{className:"hljs-title class_",children:"Promise"}),"(",s.jsxs(a.span,{className:"hljs-function",children:["(",s.jsx(a.span,{className:"hljs-params",children:"resolve, reject"}),") =>"]}),` {
  `,s.jsx(a.span,{className:"hljs-keyword",children:"const"})," sukces = ",s.jsx(a.span,{className:"hljs-literal",children:"true"}),`;

  `,s.jsx(a.span,{className:"hljs-keyword",children:"if"}),` (sukces) {
    `,s.jsx(a.span,{className:"hljs-title function_",children:"resolve"}),"(",s.jsx(a.span,{className:"hljs-string",children:'"Operacja zakończona sukcesem!"'}),`);
  } `,s.jsx(a.span,{className:"hljs-keyword",children:"else"}),` {
    `,s.jsx(a.span,{className:"hljs-title function_",children:"reject"}),"(",s.jsx(a.span,{className:"hljs-string",children:'"Operacja zakończona niepowodzeniem."'}),`);
  }
});

obietnica
  .`,s.jsx(a.span,{className:"hljs-title function_",children:"then"}),"(",s.jsxs(a.span,{className:"hljs-function",children:["(",s.jsx(a.span,{className:"hljs-params",children:"result"}),") =>"]})," ",s.jsx(a.span,{className:"hljs-variable language_",children:"console"}),".",s.jsx(a.span,{className:"hljs-title function_",children:"log"}),`(result))
  .`,s.jsx(a.span,{className:"hljs-title function_",children:"catch"}),"(",s.jsxs(a.span,{className:"hljs-function",children:["(",s.jsx(a.span,{className:"hljs-params",children:"error"}),") =>"]})," ",s.jsx(a.span,{className:"hljs-variable language_",children:"console"}),".",s.jsx(a.span,{className:"hljs-title function_",children:"log"}),`(error));
`]})}),`
`,s.jsx(a.h2,{children:"Async/Await"}),`
`,s.jsx(a.p,{children:"Async/Await to składnia, która upraszcza pracę z promisami i sprawia, że kod asynchroniczny wygląda jak kod synchroniczny."}),`
`,s.jsx(a.h3,{children:"Przykład:"}),`
`,s.jsx(a.pre,{children:s.jsxs(a.code,{className:"hljs language-javascript",children:[s.jsx(a.span,{className:"hljs-keyword",children:"const"})," ",s.jsx(a.span,{className:"hljs-title function_",children:"asyncFunction"})," = ",s.jsx(a.span,{className:"hljs-keyword",children:"async"})," (",s.jsx(a.span,{className:"hljs-params"}),`) => {
  `,s.jsx(a.span,{className:"hljs-keyword",children:"try"}),` {
    `,s.jsx(a.span,{className:"hljs-keyword",children:"const"})," result = ",s.jsx(a.span,{className:"hljs-keyword",children:"await"}),` obietnica;
    `,s.jsx(a.span,{className:"hljs-variable language_",children:"console"}),".",s.jsx(a.span,{className:"hljs-title function_",children:"log"}),`(result);
  } `,s.jsx(a.span,{className:"hljs-keyword",children:"catch"}),` (error) {
    `,s.jsx(a.span,{className:"hljs-variable language_",children:"console"}),".",s.jsx(a.span,{className:"hljs-title function_",children:"log"}),`(error);
  }
};

`,s.jsx(a.span,{className:"hljs-title function_",children:"asyncFunction"}),`();
`]})}),`
`,s.jsx(a.h2,{children:"Zadania do wykonania"}),`
`,s.jsx(a.h3,{children:"Zadanie 1"}),`
`,s.jsx(a.p,{children:"Napisz funkcję strzałkową, która przyjmuje dwa argumenty i zwraca ich sumę."}),`
`,s.jsxs("details",{children:[s.jsx("summary",{children:s.jsx("span",{children:"Pokaż rozwiązanie"})}),s.jsx(a.pre,{children:s.jsxs(a.code,{className:"hljs language-javascript",children:[s.jsx(a.span,{className:"hljs-keyword",children:"const"})," ",s.jsx(a.span,{className:"hljs-title function_",children:"dodaj"})," = (",s.jsx(a.span,{className:"hljs-params",children:"a, b"}),`) => a + b;
`,s.jsx(a.span,{className:"hljs-variable language_",children:"console"}),".",s.jsx(a.span,{className:"hljs-title function_",children:"log"}),"(",s.jsx(a.span,{className:"hljs-title function_",children:"dodaj"}),"(",s.jsx(a.span,{className:"hljs-number",children:"2"}),", ",s.jsx(a.span,{className:"hljs-number",children:"3"}),")); ",s.jsx(a.span,{className:"hljs-comment",children:"// 5"}),`
`]})})]}),`
`,s.jsx(a.h3,{children:"Zadanie 2"}),`
`,s.jsxs(a.p,{children:["Utwórz obiekt reprezentujący samochód, z atrybutami ",s.jsx(a.code,{children:"marka"}),", ",s.jsx(a.code,{children:"model"})," i ",s.jsx(a.code,{children:"rok"}),". Następnie użyj destrukturyzacji, aby wyodrębnić te wartości i wyświetlić je w konsoli."]}),`
`,s.jsxs("details",{children:[s.jsx("summary",{children:s.jsx("span",{children:"Pokaż rozwiązanie"})}),s.jsx(a.pre,{children:s.jsxs(a.code,{className:"hljs language-javascript",children:[s.jsx(a.span,{className:"hljs-keyword",children:"const"})," samochod = { ",s.jsx(a.span,{className:"hljs-attr",children:"marka"}),": ",s.jsx(a.span,{className:"hljs-string",children:'"Toyota"'}),", ",s.jsx(a.span,{className:"hljs-attr",children:"model"}),": ",s.jsx(a.span,{className:"hljs-string",children:'"Corolla"'}),", ",s.jsx(a.span,{className:"hljs-attr",children:"rok"}),": ",s.jsx(a.span,{className:"hljs-number",children:"2020"}),` };
`,s.jsx(a.span,{className:"hljs-keyword",children:"const"}),` { marka, model, rok } = samochod;
`,s.jsx(a.span,{className:"hljs-variable language_",children:"console"}),".",s.jsx(a.span,{className:"hljs-title function_",children:"log"}),"(marka, model, rok); ",s.jsx(a.span,{className:"hljs-comment",children:"// Toyota Corolla 2020"}),`
`]})})]}),`
`,s.jsx(a.h3,{children:"Zadanie 3"}),`
`,s.jsx(a.p,{children:"Stwórz tablicę liczb od 1 do 5. Następnie użyj operatora spread, aby dodać liczby 6 i 7 do tej tablicy."}),`
`,s.jsxs("details",{children:[s.jsx("summary",{children:s.jsx("span",{children:"Pokaż rozwiązanie"})}),s.jsx(a.pre,{children:s.jsxs(a.code,{className:"hljs language-javascript",children:[s.jsx(a.span,{className:"hljs-keyword",children:"const"})," liczby = [",s.jsx(a.span,{className:"hljs-number",children:"1"}),", ",s.jsx(a.span,{className:"hljs-number",children:"2"}),", ",s.jsx(a.span,{className:"hljs-number",children:"3"}),", ",s.jsx(a.span,{className:"hljs-number",children:"4"}),", ",s.jsx(a.span,{className:"hljs-number",children:"5"}),`];

`,s.jsx(a.span,{className:"hljs-keyword",children:"const"})," wiecejLiczb = [...liczby, ",s.jsx(a.span,{className:"hljs-number",children:"6"}),", ",s.jsx(a.span,{className:"hljs-number",children:"7"}),`];

`,s.jsx(a.span,{className:"hljs-variable language_",children:"console"}),".",s.jsx(a.span,{className:"hljs-title function_",children:"log"}),"(wiecejLiczb); ",s.jsx(a.span,{className:"hljs-comment",children:"// [1, 2, 3, 4, 5, 6, 7]"}),`
`]})})]}),`
`,s.jsx(a.h3,{children:"Zadanie 4"}),`
`,s.jsxs(a.p,{children:["Napisz funkcję asynchroniczną, która używa promisów do symulacji opóźnienia (np. za pomocą ",s.jsx(a.code,{children:"setTimeout"}),"). Funkcja powinna zwracać wynik po 2 sekundach."]}),`
`,s.jsxs("details",{children:[s.jsx("summary",{children:s.jsx("span",{children:"Pokaż rozwiązanie"})}),s.jsx(a.pre,{children:s.jsxs(a.code,{className:"hljs language-javascript",children:[s.jsx(a.span,{className:"hljs-keyword",children:"const"})," ",s.jsx(a.span,{className:"hljs-title function_",children:"delay"})," = (",s.jsx(a.span,{className:"hljs-params",children:"ms"}),") => ",s.jsx(a.span,{className:"hljs-keyword",children:"new"})," ",s.jsx(a.span,{className:"hljs-title class_",children:"Promise"}),"(",s.jsxs(a.span,{className:"hljs-function",children:["(",s.jsx(a.span,{className:"hljs-params",children:"resolve"}),") =>"]})," ",s.jsx(a.span,{className:"hljs-built_in",children:"setTimeout"}),`(resolve, ms));

`,s.jsx(a.span,{className:"hljs-keyword",children:"const"})," ",s.jsx(a.span,{className:"hljs-title function_",children:"asyncFunction"})," = ",s.jsx(a.span,{className:"hljs-keyword",children:"async"})," (",s.jsx(a.span,{className:"hljs-params"}),`) => {
  `,s.jsx(a.span,{className:"hljs-variable language_",children:"console"}),".",s.jsx(a.span,{className:"hljs-title function_",children:"log"}),"(",s.jsx(a.span,{className:"hljs-string",children:'"Czekam 2 sekundy..."'}),`);
  `,s.jsx(a.span,{className:"hljs-keyword",children:"await"})," ",s.jsx(a.span,{className:"hljs-title function_",children:"delay"}),"(",s.jsx(a.span,{className:"hljs-number",children:"2000"}),`);
  `,s.jsx(a.span,{className:"hljs-variable language_",children:"console"}),".",s.jsx(a.span,{className:"hljs-title function_",children:"log"}),"(",s.jsx(a.span,{className:"hljs-string",children:'"2 sekundy minęły!"'}),`);
};

`,s.jsx(a.span,{className:"hljs-title function_",children:"asyncFunction"}),`();
`]})})]}),`
`,s.jsx(a.p,{children:"To tyle na temat podstaw nowoczesnego JavaScript! Zachęcam do dalszego eksperymentowania i zgłębiania tego tematu, aby tworzyć bardziej zaawansowane i interaktywne aplikacje."})]})}function y(e={}){const{wrapper:a}=e.components||{};return a?s.jsx(a,{...e,children:s.jsx(r,{...e})}):r(e)}const I=Object.freeze(Object.defineProperty({__proto__:null,default:y,frontmatter:g},Symbol.toStringTag,{value:"Module"})),w={title:"Wprowadzenie do metodyki BEM",description:"Czym jest BEM? BEM (Block, Element, Modifier) to metodyka nazewnictwa klas CSS, która pomaga tworzyć komponenty interfejsu użytkownika w sposób modularny i łatwy do utrzymania. BEM dzieli interfejs na bloki, elementy i modyfikatory, co pozwala na lepszą organizację kodu CSS.",keywords:["kurs","css","bem","metodyka","metodyki","stylowanie","html"],categories:["wprowadzenie","css","html"],createdAt:"2024-06-30"};function i(e){const a={code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",strong:"strong",...e.components};return s.jsxs(s.Fragment,{children:[s.jsx(a.h2,{children:"Czym jest BEM?"}),`
`,s.jsx(a.p,{children:"BEM (Block, Element, Modifier) to metodyka nazewnictwa klas CSS, która pomaga tworzyć komponenty interfejsu użytkownika w sposób modularny i łatwy do utrzymania. BEM dzieli interfejs na bloki, elementy i modyfikatory, co pozwala na lepszą organizację kodu CSS."}),`
`,s.jsx(a.h2,{children:"Struktura BEM"}),`
`,s.jsx(a.h3,{children:"Blok"}),`
`,s.jsx(a.p,{children:"Blok jest samodzielnym komponentem, który może istnieć niezależnie. Może to być przycisk, nagłówek, formularz itp. Blok jest reprezentowany przez klasę główną."}),`
`,s.jsx(a.pre,{children:s.jsxs(a.code,{className:"hljs language-html",children:[s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"div"})," ",s.jsx(a.span,{className:"hljs-attr",children:"class"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"block"'}),">"]}),"Treść bloku",s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"div"}),">"]}),`
`]})}),`
`,s.jsx(a.h3,{children:"Element"}),`
`,s.jsxs(a.p,{children:["Element jest częścią bloku, która nie może istnieć bez niego. Elementy są reprezentowane przez klasę bloku, po której następuje podwójny podkreślnik (",s.jsx(a.code,{children:"__"}),")."]}),`
`,s.jsx(a.pre,{children:s.jsxs(a.code,{className:"hljs language-html",children:[s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"div"})," ",s.jsx(a.span,{className:"hljs-attr",children:"class"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"block"'}),">"]}),`
  `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"div"})," ",s.jsx(a.span,{className:"hljs-attr",children:"class"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"block__element"'}),">"]}),"Treść elementu",s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"div"}),">"]}),`
`,s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"div"}),">"]}),`
`]})}),`
`,s.jsx(a.h3,{children:"Modyfikator"}),`
`,s.jsxs(a.p,{children:["Modyfikator zmienia wygląd lub zachowanie bloku lub elementu. Modyfikatory są reprezentowane przez pojedynczy podkreślnik (",s.jsx(a.code,{children:"_"}),")."]}),`
`,s.jsx(a.pre,{children:s.jsxs(a.code,{className:"hljs language-html",children:[s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"div"})," ",s.jsx(a.span,{className:"hljs-attr",children:"class"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"block block--modifier"'}),">"]}),"Treść zmodyfikowanego bloku",s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"div"}),">"]}),`
`,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"div"})," ",s.jsx(a.span,{className:"hljs-attr",children:"class"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"block__element block__element--modifier"'}),">"]}),`
  Treść zmodyfikowanego elementu
`,s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"div"}),">"]}),`
`]})}),`
`,s.jsx(a.h2,{children:"Przykład"}),`
`,s.jsx(a.p,{children:"Przykładowy kod HTML z zastosowaniem BEM:"}),`
`,s.jsx(a.pre,{children:s.jsxs(a.code,{className:"hljs language-html",children:[s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"div"})," ",s.jsx(a.span,{className:"hljs-attr",children:"class"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"button button--primary"'}),">"]}),`
  `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"span"})," ",s.jsx(a.span,{className:"hljs-attr",children:"class"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"button__text"'}),">"]}),"Kliknij mnie",s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"span"}),">"]}),`
`,s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"div"}),">"]}),`
`]})}),`
`,s.jsx(a.p,{children:"Odpowiadający kod CSS:"}),`
`,s.jsx(a.pre,{children:s.jsxs(a.code,{className:"hljs language-css",children:[s.jsx(a.span,{className:"hljs-selector-class",children:".button"}),` {
  `,s.jsx(a.span,{className:"hljs-attribute",children:"padding"}),": ",s.jsx(a.span,{className:"hljs-number",children:"10px"})," ",s.jsx(a.span,{className:"hljs-number",children:"20px"}),`;
  `,s.jsx(a.span,{className:"hljs-attribute",children:"border"}),`: none;
  `,s.jsx(a.span,{className:"hljs-attribute",children:"cursor"}),`: pointer;
}

`,s.jsx(a.span,{className:"hljs-selector-class",children:".button--primary"}),` {
  `,s.jsx(a.span,{className:"hljs-attribute",children:"background-color"}),`: blue;
  `,s.jsx(a.span,{className:"hljs-attribute",children:"color"}),`: white;
}

`,s.jsx(a.span,{className:"hljs-selector-class",children:".button__text"}),` {
  `,s.jsx(a.span,{className:"hljs-attribute",children:"font-size"}),": ",s.jsx(a.span,{className:"hljs-number",children:"16px"}),`;
}
`]})}),`
`,s.jsx(a.h2,{children:"Zasady BEM"}),`
`,s.jsxs(a.ol,{children:[`
`,s.jsxs(a.li,{children:[s.jsx(a.strong,{children:"Nazwa bloku:"})," Powinna być krótka i jednoznaczna, opisująca funkcję lub zawartość komponentu."]}),`
`,s.jsxs(a.li,{children:[s.jsx(a.strong,{children:"Nazwa elementu:"})," Powinna jasno określać, co robi element w kontekście bloku."]}),`
`,s.jsxs(a.li,{children:[s.jsx(a.strong,{children:"Nazwa modyfikatora:"})," Powinna opisywać, jak zmienia się blok lub element."]}),`
`]}),`
`,s.jsx(a.h2,{children:"Przykłady"}),`
`,s.jsx(a.h3,{children:"Formularz logowania"}),`
`,s.jsx(a.p,{children:"HTML:"}),`
`,s.jsx(a.pre,{children:s.jsxs(a.code,{className:"hljs language-html",children:[s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"form"})," ",s.jsx(a.span,{className:"hljs-attr",children:"class"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"form form--login"'}),">"]}),`
  `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"div"})," ",s.jsx(a.span,{className:"hljs-attr",children:"class"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"form__group"'}),">"]}),`
    `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"label"})," ",s.jsx(a.span,{className:"hljs-attr",children:"class"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"form__label"'})," ",s.jsx(a.span,{className:"hljs-attr",children:"for"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"username"'}),">"]}),"Nazwa użytkownika",s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"label"}),">"]}),`
    `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"input"})," ",s.jsx(a.span,{className:"hljs-attr",children:"class"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"form__input"'})," ",s.jsx(a.span,{className:"hljs-attr",children:"type"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"text"'})," ",s.jsx(a.span,{className:"hljs-attr",children:"id"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"username"'})," ",s.jsx(a.span,{className:"hljs-attr",children:"name"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"username"'})," />"]}),`
  `,s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"div"}),">"]}),`
  `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"div"})," ",s.jsx(a.span,{className:"hljs-attr",children:"class"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"form__group"'}),">"]}),`
    `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"label"})," ",s.jsx(a.span,{className:"hljs-attr",children:"class"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"form__label"'})," ",s.jsx(a.span,{className:"hljs-attr",children:"for"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"password"'}),">"]}),"Hasło",s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"label"}),">"]}),`
    `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"input"})," ",s.jsx(a.span,{className:"hljs-attr",children:"class"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"form__input"'})," ",s.jsx(a.span,{className:"hljs-attr",children:"type"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"password"'})," ",s.jsx(a.span,{className:"hljs-attr",children:"id"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"password"'})," ",s.jsx(a.span,{className:"hljs-attr",children:"name"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"password"'})," />"]}),`
  `,s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"div"}),">"]}),`
  `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"button"})," ",s.jsx(a.span,{className:"hljs-attr",children:"class"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"form__button form__button--submit"'}),">"]}),"Zaloguj się",s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"button"}),">"]}),`
`,s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"form"}),">"]}),`
`]})}),`
`,s.jsx(a.p,{children:"CSS:"}),`
`,s.jsx(a.pre,{children:s.jsxs(a.code,{className:"hljs language-css",children:[s.jsx(a.span,{className:"hljs-selector-class",children:".form"}),` {
  `,s.jsx(a.span,{className:"hljs-attribute",children:"max-width"}),": ",s.jsx(a.span,{className:"hljs-number",children:"300px"}),`;
  `,s.jsx(a.span,{className:"hljs-attribute",children:"margin"}),": ",s.jsx(a.span,{className:"hljs-number",children:"0"}),` auto;
  `,s.jsx(a.span,{className:"hljs-attribute",children:"padding"}),": ",s.jsx(a.span,{className:"hljs-number",children:"20px"}),`;
  `,s.jsx(a.span,{className:"hljs-attribute",children:"border"}),": ",s.jsx(a.span,{className:"hljs-number",children:"1px"})," solid ",s.jsx(a.span,{className:"hljs-number",children:"#ccc"}),`;
  `,s.jsx(a.span,{className:"hljs-attribute",children:"border-radius"}),": ",s.jsx(a.span,{className:"hljs-number",children:"5px"}),`;
}

`,s.jsx(a.span,{className:"hljs-selector-class",children:".form--login"}),` {
  `,s.jsx(a.span,{className:"hljs-attribute",children:"background-color"}),": ",s.jsx(a.span,{className:"hljs-number",children:"#f9f9f9"}),`;
}

`,s.jsx(a.span,{className:"hljs-selector-class",children:".form__group"}),` {
  `,s.jsx(a.span,{className:"hljs-attribute",children:"margin-bottom"}),": ",s.jsx(a.span,{className:"hljs-number",children:"15px"}),`;
}

`,s.jsx(a.span,{className:"hljs-selector-class",children:".form__label"}),` {
  `,s.jsx(a.span,{className:"hljs-attribute",children:"display"}),`: block;
  `,s.jsx(a.span,{className:"hljs-attribute",children:"margin-bottom"}),": ",s.jsx(a.span,{className:"hljs-number",children:"5px"}),`;
  `,s.jsx(a.span,{className:"hljs-attribute",children:"font-weight"}),`: bold;
}

`,s.jsx(a.span,{className:"hljs-selector-class",children:".form__input"}),` {
  `,s.jsx(a.span,{className:"hljs-attribute",children:"width"}),": ",s.jsx(a.span,{className:"hljs-number",children:"100%"}),`;
  `,s.jsx(a.span,{className:"hljs-attribute",children:"padding"}),": ",s.jsx(a.span,{className:"hljs-number",children:"8px"}),`;
  `,s.jsx(a.span,{className:"hljs-attribute",children:"box-sizing"}),`: border-box;
}

`,s.jsx(a.span,{className:"hljs-selector-class",children:".form__button"}),` {
  `,s.jsx(a.span,{className:"hljs-attribute",children:"display"}),`: inline-block;
  `,s.jsx(a.span,{className:"hljs-attribute",children:"padding"}),": ",s.jsx(a.span,{className:"hljs-number",children:"10px"})," ",s.jsx(a.span,{className:"hljs-number",children:"20px"}),`;
  `,s.jsx(a.span,{className:"hljs-attribute",children:"border"}),`: none;
  `,s.jsx(a.span,{className:"hljs-attribute",children:"cursor"}),`: pointer;
}

`,s.jsx(a.span,{className:"hljs-selector-class",children:".form__button--submit"}),` {
  `,s.jsx(a.span,{className:"hljs-attribute",children:"background-color"}),`: blue;
  `,s.jsx(a.span,{className:"hljs-attribute",children:"color"}),`: white;
}
`]})}),`
`,s.jsx(a.h3,{children:"Zadania do wykonania"}),`
`,s.jsx(a.h4,{children:"Zadanie 1"}),`
`,s.jsxs(a.p,{children:["Utwórz komponent karty produktu (",s.jsx(a.code,{children:"product-card"}),") z elementami dla tytułu (",s.jsx(a.code,{children:"product-card__title"}),"), opisu (",s.jsx(a.code,{children:"product-card__description"}),") i ceny (",s.jsx(a.code,{children:"product-card__price"}),"). Dodaj modyfikator dla karty wyróżnionej (",s.jsx(a.code,{children:"product-card--featured"}),")."]}),`
`,s.jsxs("details",{children:[s.jsx("summary",{children:s.jsx("span",{children:"Pokaż rozwiązanie"})}),s.jsx(a.p,{children:"HTML:"}),s.jsx(a.pre,{children:s.jsxs(a.code,{className:"hljs language-html",children:[s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"div"})," ",s.jsx(a.span,{className:"hljs-attr",children:"class"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"product-card product-card--featured"'}),">"]}),`
  `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"h2"})," ",s.jsx(a.span,{className:"hljs-attr",children:"class"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"product-card__title"'}),">"]}),"Nazwa produktu",s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"h2"}),">"]}),`
  `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"p"})," ",s.jsx(a.span,{className:"hljs-attr",children:"class"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"product-card__description"'}),">"]}),"Opis produktu",s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"p"}),">"]}),`
  `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"span"})," ",s.jsx(a.span,{className:"hljs-attr",children:"class"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"product-card__price"'}),">"]}),"99,99 zł",s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"span"}),">"]}),`
`,s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"div"}),">"]}),`
`]})}),s.jsx(a.p,{children:"CSS:"}),s.jsx(a.pre,{children:s.jsxs(a.code,{className:"hljs language-css",children:[s.jsx(a.span,{className:"hljs-selector-class",children:".product-card"}),` {
  `,s.jsx(a.span,{className:"hljs-attribute",children:"border"}),": ",s.jsx(a.span,{className:"hljs-number",children:"1px"})," solid ",s.jsx(a.span,{className:"hljs-number",children:"#ccc"}),`;
  `,s.jsx(a.span,{className:"hljs-attribute",children:"padding"}),": ",s.jsx(a.span,{className:"hljs-number",children:"15px"}),`;
  `,s.jsx(a.span,{className:"hljs-attribute",children:"border-radius"}),": ",s.jsx(a.span,{className:"hljs-number",children:"5px"}),`;
}

`,s.jsx(a.span,{className:"hljs-selector-class",children:".product-card--featured"}),` {
  `,s.jsx(a.span,{className:"hljs-attribute",children:"border-color"}),`: gold;
  `,s.jsx(a.span,{className:"hljs-attribute",children:"background-color"}),": ",s.jsx(a.span,{className:"hljs-number",children:"#fffbf0"}),`;
}

`,s.jsx(a.span,{className:"hljs-selector-class",children:".product-card__title"}),` {
  `,s.jsx(a.span,{className:"hljs-attribute",children:"font-size"}),": ",s.jsx(a.span,{className:"hljs-number",children:"18px"}),`;
  `,s.jsx(a.span,{className:"hljs-attribute",children:"margin-bottom"}),": ",s.jsx(a.span,{className:"hljs-number",children:"10px"}),`;
}

`,s.jsx(a.span,{className:"hljs-selector-class",children:".product-card__description"}),` {
  `,s.jsx(a.span,{className:"hljs-attribute",children:"font-size"}),": ",s.jsx(a.span,{className:"hljs-number",children:"14px"}),`;
  `,s.jsx(a.span,{className:"hljs-attribute",children:"margin-bottom"}),": ",s.jsx(a.span,{className:"hljs-number",children:"15px"}),`;
}

`,s.jsx(a.span,{className:"hljs-selector-class",children:".product-card__price"}),` {
  `,s.jsx(a.span,{className:"hljs-attribute",children:"font-size"}),": ",s.jsx(a.span,{className:"hljs-number",children:"16px"}),`;
  `,s.jsx(a.span,{className:"hljs-attribute",children:"font-weight"}),`: bold;
}
`]})})]}),`
`,s.jsx(a.h4,{children:"Zadanie 2"}),`
`,s.jsxs(a.p,{children:["Stwórz nawigację (",s.jsx(a.code,{children:"nav"}),") z elementami dla pozycji nawigacji (",s.jsx(a.code,{children:"nav__item"}),") i linków (",s.jsx(a.code,{children:"nav__link"}),"). Dodaj modyfikator dla aktywnego linku (",s.jsx(a.code,{children:"nav__link--active"}),")."]}),`
`,s.jsxs("details",{children:[s.jsx("summary",{children:s.jsx("span",{children:"Pokaż rozwiązanie"})}),s.jsx(a.p,{children:"HTML:"}),s.jsx(a.pre,{children:s.jsxs(a.code,{className:"hljs language-html",children:[s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"nav"})," ",s.jsx(a.span,{className:"hljs-attr",children:"class"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"nav"'}),">"]}),`
  `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"ul"}),">"]}),`
    `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"li"})," ",s.jsx(a.span,{className:"hljs-attr",children:"class"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"nav__item"'}),">"]}),`
      `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"a"})," ",s.jsx(a.span,{className:"hljs-attr",children:"href"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"#"'})," ",s.jsx(a.span,{className:"hljs-attr",children:"class"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"nav__link nav__link--active"'}),">"]}),"Home",s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"a"}),">"]}),`
    `,s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"li"}),">"]}),`
    `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"li"})," ",s.jsx(a.span,{className:"hljs-attr",children:"class"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"nav__item"'}),">"]}),s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"a"})," ",s.jsx(a.span,{className:"hljs-attr",children:"href"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"#"'})," ",s.jsx(a.span,{className:"hljs-attr",children:"class"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"nav__link"'}),">"]}),"O nas",s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"a"}),">"]}),s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"li"}),">"]}),`
    `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"li"})," ",s.jsx(a.span,{className:"hljs-attr",children:"class"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"nav__item"'}),">"]}),s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"a"})," ",s.jsx(a.span,{className:"hljs-attr",children:"href"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"#"'})," ",s.jsx(a.span,{className:"hljs-attr",children:"class"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"nav__link"'}),">"]}),"Kontakt",s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"a"}),">"]}),s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"li"}),">"]}),`
  `,s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"ul"}),">"]}),`
`,s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"nav"}),">"]}),`
`]})}),s.jsx(a.p,{children:"CSS:"}),s.jsx(a.pre,{children:s.jsxs(a.code,{className:"hljs language-css",children:[s.jsx(a.span,{className:"hljs-selector-class",children:".nav"}),` {
  `,s.jsx(a.span,{className:"hljs-attribute",children:"background-color"}),": ",s.jsx(a.span,{className:"hljs-number",children:"#333"}),`;
  `,s.jsx(a.span,{className:"hljs-attribute",children:"padding"}),": ",s.jsx(a.span,{className:"hljs-number",children:"10px"}),`;
}

`,s.jsx(a.span,{className:"hljs-selector-class",children:".nav__item"}),` {
  `,s.jsx(a.span,{className:"hljs-attribute",children:"display"}),`: inline;
  `,s.jsx(a.span,{className:"hljs-attribute",children:"margin-right"}),": ",s.jsx(a.span,{className:"hljs-number",children:"15px"}),`;
}

`,s.jsx(a.span,{className:"hljs-selector-class",children:".nav__link"}),` {
  `,s.jsx(a.span,{className:"hljs-attribute",children:"color"}),`: white;
  `,s.jsx(a.span,{className:"hljs-attribute",children:"text-decoration"}),`: none;
}

`,s.jsx(a.span,{className:"hljs-selector-class",children:".nav__link--active"}),` {
  `,s.jsx(a.span,{className:"hljs-attribute",children:"font-weight"}),`: bold;
  `,s.jsx(a.span,{className:"hljs-attribute",children:"text-decoration"}),`: underline;
}
`]})})]}),`
`,s.jsx(a.h4,{children:"Zadanie 3"}),`
`,s.jsxs(a.p,{children:["Utwórz sekcję artykułu (",s.jsx(a.code,{children:"article"}),") z elementami dla nagłówka (",s.jsx(a.code,{children:"article__header"}),"), treści (",s.jsx(a.code,{children:"article__content"}),") i stopki (",s.jsx(a.code,{children:"article__footer"}),"). Dodaj modyfikator dla nagłówka z obrazkiem (",s.jsx(a.code,{children:"article__header--with-image"}),")."]}),`
`,s.jsxs("details",{children:[s.jsx("summary",{children:s.jsx("span",{children:"Pokaż rozwiązanie"})}),s.jsx(a.p,{children:"HTML:"}),s.jsx(a.pre,{children:s.jsxs(a.code,{className:"hljs language-html",children:[s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"article"})," ",s.jsx(a.span,{className:"hljs-attr",children:"class"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"article"'}),">"]}),`
  `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"header"})," ",s.jsx(a.span,{className:"hljs-attr",children:"class"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"article__header article__header--with-image"'}),">"]}),`
    `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"h1"}),">"]}),"Tytuł artykułu",s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"h1"}),">"]}),`
    `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"img"})," ",s.jsx(a.span,{className:"hljs-attr",children:"src"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"image.jpg"'})," ",s.jsx(a.span,{className:"hljs-attr",children:"alt"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"Obrazek w nagłówku"'})," />"]}),`
  `,s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"header"}),">"]}),`
  `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"section"})," ",s.jsx(a.span,{className:"hljs-attr",children:"class"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"article__content"'}),">"]}),`
    `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"p"}),">"]}),"Treść artykułu...",s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"p"}),">"]}),`
  `,s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"section"}),">"]}),`
  `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"footer"})," ",s.jsx(a.span,{className:"hljs-attr",children:"class"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"article__footer"'}),">"]}),`
    `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"p"}),">"]}),"Stopka artykułu",s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"p"}),">"]}),`
  `,s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"footer"}),">"]}),`
`,s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"article"}),">"]}),`
`]})}),s.jsx(a.p,{children:"CSS:"}),s.jsx(a.pre,{children:s.jsxs(a.code,{className:"hljs language-css",children:[s.jsx(a.span,{className:"hljs-selector-class",children:".article"}),` {
  `,s.jsx(a.span,{className:"hljs-attribute",children:"border"}),": ",s.jsx(a.span,{className:"hljs-number",children:"1px"})," solid ",s.jsx(a.span,{className:"hljs-number",children:"#ddd"}),`;
  `,s.jsx(a.span,{className:"hljs-attribute",children:"padding"}),": ",s.jsx(a.span,{className:"hljs-number",children:"20px"}),`;
  `,s.jsx(a.span,{className:"hljs-attribute",children:"border-radius"}),": ",s.jsx(a.span,{className:"hljs-number",children:"5px"}),`;
}

`,s.jsx(a.span,{className:"hljs-selector-class",children:".article__header"}),` {
  `,s.jsx(a.span,{className:"hljs-attribute",children:"margin-bottom"}),": ",s.jsx(a.span,{className:"hljs-number",children:"15px"}),`;
}

`,s.jsx(a.span,{className:"hljs-selector-class",children:".article__header--with-image"})," ",s.jsx(a.span,{className:"hljs-selector-tag",children:"img"}),` {
  `,s.jsx(a.span,{className:"hljs-attribute",children:"display"}),`: block;
  `,s.jsx(a.span,{className:"hljs-attribute",children:"max-width"}),": ",s.jsx(a.span,{className:"hljs-number",children:"100%"}),`;
  `,s.jsx(a.span,{className:"hljs-attribute",children:"height"}),`: auto;
}

`,s.jsx(a.span,{className:"hljs-selector-class",children:".article__content"}),` {
  `,s.jsx(a.span,{className:"hljs-attribute",children:"margin-bottom"}),": ",s.jsx(a.span,{className:"hljs-number",children:"15px"}),`;
}

`,s.jsx(a.span,{className:"hljs-selector-class",children:".article__footer"}),` {
  `,s.jsx(a.span,{className:"hljs-attribute",children:"font-size"}),": ",s.jsx(a.span,{className:"hljs-number",children:"14px"}),`;
  `,s.jsx(a.span,{className:"hljs-attribute",children:"color"}),": ",s.jsx(a.span,{className:"hljs-number",children:"#777"}),`;
}
`]})})]}),`
`,s.jsx(a.p,{children:"To tyle na temat podstaw metodyki BEM! Zachęcam do dalszego eksperymentowania i zgłębiania tego tematu, aby tworzyć bardziej modularne i łatwe do utrzymania style CSS."})]})}function k(e={}){const{wrapper:a}=e.components||{};return a?s.jsx(a,{...e,children:s.jsx(i,{...e})}):i(e)}const U=Object.freeze(Object.defineProperty({__proto__:null,default:k,frontmatter:w},Symbol.toStringTag,{value:"Module"})),z={title:"Wprowadzenie do CSS",description:"CSS (Cascading Style Sheets) to język służący do opisywania wyglądu i formatu dokumentu HTML. CSS pozwala na oddzielenie treści od prezentacji, co umożliwia tworzenie estetycznych i spójnych stron internetowych. W tym kursie omówimy podstawy CSS, w tym selektory, właściwości, sposoby załączania CSS do HTML oraz JavaScript, a także przedstawimy kilka zadań do wykonania.",keywords:["css","html","kurs","wprowadzenie","przewodnik","web","frontend"],categories:["wprowadzenie","css"],createdAt:"2024-06-30"};function h(e){const a={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",span:"span",...e.components};return s.jsxs(s.Fragment,{children:[s.jsx(a.p,{children:"CSS (Cascading Style Sheets) to język służący do opisywania wyglądu i formatu dokumentu HTML. CSS pozwala na oddzielenie treści od prezentacji, co umożliwia tworzenie estetycznych i spójnych stron internetowych. W tym kursie omówimy podstawy CSS, w tym selektory, właściwości, sposoby załączania CSS do HTML oraz JavaScript, a także przedstawimy kilka zadań do wykonania."}),`
`,s.jsx(a.h2,{children:"Sposoby załączania CSS do HTML"}),`
`,s.jsx(a.h3,{children:"Inline CSS"}),`
`,s.jsxs(a.p,{children:["Inline CSS jest stosowany bezpośrednio w atrybucie ",s.jsx(a.code,{children:"style"})," elementu HTML."]}),`
`,s.jsx(a.pre,{children:s.jsxs(a.code,{className:"hljs language-html",children:[s.jsxs(a.span,{className:"hljs-meta",children:["<!DOCTYPE ",s.jsx(a.span,{className:"hljs-keyword",children:"html"}),">"]}),`
`,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"html"})," ",s.jsx(a.span,{className:"hljs-attr",children:"lang"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"pl"'}),">"]}),`
  `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"head"}),">"]}),`
    `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"meta"})," ",s.jsx(a.span,{className:"hljs-attr",children:"charset"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"UTF-8"'})," />"]}),`
    `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"meta"})," ",s.jsx(a.span,{className:"hljs-attr",children:"name"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"viewport"'})," ",s.jsx(a.span,{className:"hljs-attr",children:"content"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"width=device-width, initial-scale=1.0"'})," />"]}),`
    `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"title"}),">"]}),"Inline CSS",s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"title"}),">"]}),`
  `,s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"head"}),">"]}),`
  `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"body"}),">"]}),`
    `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"h1"})," ",s.jsx(a.span,{className:"hljs-attr",children:"style"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"color: blue;"'}),">"]}),"Witaj, świecie!",s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"h1"}),">"]}),`
  `,s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"body"}),">"]}),`
`,s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"html"}),">"]}),`
`]})}),`
`,s.jsx(a.h3,{children:"Internal CSS"}),`
`,s.jsxs(a.p,{children:["Internal CSS jest umieszczony w sekcji ",s.jsx(a.code,{children:"<head>"})," dokumentu HTML, wewnątrz elementu ",s.jsx(a.code,{children:"<style>"}),"."]}),`
`,s.jsx(a.pre,{children:s.jsxs(a.code,{className:"hljs language-html",children:[s.jsxs(a.span,{className:"hljs-meta",children:["<!DOCTYPE ",s.jsx(a.span,{className:"hljs-keyword",children:"html"}),">"]}),`
`,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"html"})," ",s.jsx(a.span,{className:"hljs-attr",children:"lang"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"pl"'}),">"]}),`
  `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"head"}),">"]}),`
    `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"meta"})," ",s.jsx(a.span,{className:"hljs-attr",children:"charset"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"UTF-8"'})," />"]}),`
    `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"meta"})," ",s.jsx(a.span,{className:"hljs-attr",children:"name"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"viewport"'})," ",s.jsx(a.span,{className:"hljs-attr",children:"content"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"width=device-width, initial-scale=1.0"'})," />"]}),`
    `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"title"}),">"]}),"Internal CSS",s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"title"}),">"]}),`
    `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"style"}),">"]}),s.jsxs(a.span,{className:"css",children:[`
      `,s.jsx(a.span,{className:"hljs-selector-tag",children:"h1"}),` {
        `,s.jsx(a.span,{className:"hljs-attribute",children:"color"}),`: blue;
      }
    `]}),s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"style"}),">"]}),`
  `,s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"head"}),">"]}),`
  `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"body"}),">"]}),`
    `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"h1"}),">"]}),"Witaj, świecie!",s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"h1"}),">"]}),`
  `,s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"body"}),">"]}),`
`,s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"html"}),">"]}),`
`]})}),`
`,s.jsx(a.h3,{children:"External CSS"}),`
`,s.jsxs(a.p,{children:["External CSS jest zapisany w osobnym pliku z rozszerzeniem ",s.jsx(a.code,{children:".css"})," i dołączony do dokumentu HTML za pomocą elementu ",s.jsx(a.code,{children:"<link>"}),"."]}),`
`,s.jsx(a.pre,{children:s.jsxs(a.code,{className:"hljs language-html",children:[s.jsx(a.span,{className:"hljs-comment",children:"<!-- index.html -->"}),`
`,s.jsxs(a.span,{className:"hljs-meta",children:["<!DOCTYPE ",s.jsx(a.span,{className:"hljs-keyword",children:"html"}),">"]}),`
`,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"html"})," ",s.jsx(a.span,{className:"hljs-attr",children:"lang"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"pl"'}),">"]}),`
  `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"head"}),">"]}),`
    `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"meta"})," ",s.jsx(a.span,{className:"hljs-attr",children:"charset"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"UTF-8"'})," />"]}),`
    `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"meta"})," ",s.jsx(a.span,{className:"hljs-attr",children:"name"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"viewport"'})," ",s.jsx(a.span,{className:"hljs-attr",children:"content"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"width=device-width, initial-scale=1.0"'})," />"]}),`
    `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"title"}),">"]}),"External CSS",s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"title"}),">"]}),`
    `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"link"})," ",s.jsx(a.span,{className:"hljs-attr",children:"rel"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"stylesheet"'})," ",s.jsx(a.span,{className:"hljs-attr",children:"href"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"style.css"'})," />"]}),`
  `,s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"head"}),">"]}),`
  `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"body"}),">"]}),`
    `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"h1"}),">"]}),"Witaj, świecie!",s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"h1"}),">"]}),`
  `,s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"body"}),">"]}),`
`,s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"html"}),">"]}),`
`]})}),`
`,s.jsx(a.pre,{children:s.jsxs(a.code,{className:"hljs language-css",children:[s.jsx(a.span,{className:"hljs-comment",children:"/* style.css */"}),`
`,s.jsx(a.span,{className:"hljs-selector-tag",children:"h1"}),` {
  `,s.jsx(a.span,{className:"hljs-attribute",children:"color"}),`: blue;
}
`]})}),`
`,s.jsx(a.h2,{children:"Podstawowe selektory CSS"}),`
`,s.jsx(a.h3,{children:"Selektory elementów"}),`
`,s.jsx(a.p,{children:"Selektor elementu stosuje style do wszystkich elementów danego typu."}),`
`,s.jsx(a.pre,{children:s.jsxs(a.code,{className:"hljs language-css",children:[s.jsx(a.span,{className:"hljs-selector-tag",children:"h1"}),` {
  `,s.jsx(a.span,{className:"hljs-attribute",children:"color"}),`: blue;
}
`]})}),`
`,s.jsx(a.h3,{children:"Selektory klas"}),`
`,s.jsx(a.p,{children:"Selektor klasy stosuje style do elementów, które mają określoną klasę."}),`
`,s.jsx(a.pre,{children:s.jsxs(a.code,{className:"hljs language-html",children:[s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"h1"})," ",s.jsx(a.span,{className:"hljs-attr",children:"class"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"naglowek"'}),">"]}),"Witaj, świecie!",s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"h1"}),">"]}),`
`]})}),`
`,s.jsx(a.pre,{children:s.jsxs(a.code,{className:"hljs language-css",children:[s.jsx(a.span,{className:"hljs-selector-class",children:".naglowek"}),` {
  `,s.jsx(a.span,{className:"hljs-attribute",children:"color"}),`: blue;
}
`]})}),`
`,s.jsx(a.h3,{children:"Selektory identyfikatorów"}),`
`,s.jsx(a.p,{children:"Selektor identyfikatora stosuje style do elementu z określonym identyfikatorem."}),`
`,s.jsx(a.pre,{children:s.jsxs(a.code,{className:"hljs language-html",children:[s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"h1"})," ",s.jsx(a.span,{className:"hljs-attr",children:"id"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"naglowek-glowny"'}),">"]}),"Witaj, świecie!",s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"h1"}),">"]}),`
`]})}),`
`,s.jsx(a.pre,{children:s.jsxs(a.code,{className:"hljs language-css",children:[s.jsx(a.span,{className:"hljs-selector-id",children:"#naglowek-glowny"}),` {
  `,s.jsx(a.span,{className:"hljs-attribute",children:"color"}),`: blue;
}
`]})}),`
`,s.jsx(a.h2,{children:"Podstawowe właściwości CSS"}),`
`,s.jsx(a.h3,{children:"Kolory"}),`
`,s.jsx(a.p,{children:"Kolory można definiować za pomocą nazw kolorów, wartości szesnastkowych, RGB lub HSL."}),`
`,s.jsx(a.pre,{children:s.jsxs(a.code,{className:"hljs language-css",children:[s.jsx(a.span,{className:"hljs-selector-tag",children:"h1"}),` {
  `,s.jsx(a.span,{className:"hljs-attribute",children:"color"}),": red; ",s.jsx(a.span,{className:"hljs-comment",children:"/* Nazwa koloru */"}),`
  `,s.jsx(a.span,{className:"hljs-attribute",children:"color"}),": ",s.jsx(a.span,{className:"hljs-number",children:"#ff0000"}),"; ",s.jsx(a.span,{className:"hljs-comment",children:"/* Wartość szesnastkowa */"}),`
  `,s.jsx(a.span,{className:"hljs-attribute",children:"color"}),": ",s.jsx(a.span,{className:"hljs-built_in",children:"rgb"}),"(",s.jsx(a.span,{className:"hljs-number",children:"255"}),", ",s.jsx(a.span,{className:"hljs-number",children:"0"}),", ",s.jsx(a.span,{className:"hljs-number",children:"0"}),"); ",s.jsx(a.span,{className:"hljs-comment",children:"/* RGB */"}),`
  `,s.jsx(a.span,{className:"hljs-attribute",children:"color"}),": ",s.jsx(a.span,{className:"hljs-built_in",children:"hsl"}),"(",s.jsx(a.span,{className:"hljs-number",children:"0"}),", ",s.jsx(a.span,{className:"hljs-number",children:"100%"}),", ",s.jsx(a.span,{className:"hljs-number",children:"50%"}),"); ",s.jsx(a.span,{className:"hljs-comment",children:"/* HSL */"}),`
}
`]})}),`
`,s.jsx(a.h3,{children:"Tło"}),`
`,s.jsx(a.p,{children:"Właściwości tła pozwalają na ustawienie koloru tła, obrazka tła, powtarzania obrazka tła, pozycji obrazka tła itp."}),`
`,s.jsx(a.pre,{children:s.jsxs(a.code,{className:"hljs language-css",children:[s.jsx(a.span,{className:"hljs-selector-tag",children:"body"}),` {
  `,s.jsx(a.span,{className:"hljs-attribute",children:"background-color"}),": lightgray; ",s.jsx(a.span,{className:"hljs-comment",children:"/* Kolor tła */"}),`
  `,s.jsx(a.span,{className:"hljs-attribute",children:"background-image"}),": ",s.jsx(a.span,{className:"hljs-built_in",children:"url"}),"(",s.jsx(a.span,{className:"hljs-string",children:'"tlo.jpg"'}),"); ",s.jsx(a.span,{className:"hljs-comment",children:"/* Obrazek tła */"}),`
  `,s.jsx(a.span,{className:"hljs-attribute",children:"background-repeat"}),": no-repeat; ",s.jsx(a.span,{className:"hljs-comment",children:"/* Brak powtarzania obrazka */"}),`
  `,s.jsx(a.span,{className:"hljs-attribute",children:"background-position"}),": center; ",s.jsx(a.span,{className:"hljs-comment",children:"/* Pozycja obrazka */"}),`
  `,s.jsx(a.span,{className:"hljs-attribute",children:"background-size"}),": cover; ",s.jsx(a.span,{className:"hljs-comment",children:"/* Rozmiar obrazka */"}),`
}
`]})}),`
`,s.jsx(a.h3,{children:"Marginesy i wypełnienia"}),`
`,s.jsxs(a.p,{children:["Marginesy (",s.jsx(a.code,{children:"margin"}),") i wypełnienia (",s.jsx(a.code,{children:"padding"}),") pozwalają na kontrolowanie odstępów wokół elementów."]}),`
`,s.jsx(a.pre,{children:s.jsxs(a.code,{className:"hljs language-css",children:[s.jsx(a.span,{className:"hljs-selector-tag",children:"p"}),` {
  `,s.jsx(a.span,{className:"hljs-attribute",children:"margin"}),": ",s.jsx(a.span,{className:"hljs-number",children:"20px"}),"; ",s.jsx(a.span,{className:"hljs-comment",children:"/* Margines wokół elementu */"}),`
  `,s.jsx(a.span,{className:"hljs-attribute",children:"padding"}),": ",s.jsx(a.span,{className:"hljs-number",children:"10px"}),"; ",s.jsx(a.span,{className:"hljs-comment",children:"/* Wypełnienie wewnątrz elementu */"}),`
}
`]})}),`
`,s.jsx(a.h3,{children:"Ramki"}),`
`,s.jsx(a.p,{children:"Właściwości ramek pozwalają na dodanie obramowania wokół elementów."}),`
`,s.jsx(a.pre,{children:s.jsxs(a.code,{className:"hljs language-css",children:[s.jsx(a.span,{className:"hljs-selector-tag",children:"div"}),` {
  `,s.jsx(a.span,{className:"hljs-attribute",children:"border"}),": ",s.jsx(a.span,{className:"hljs-number",children:"1px"})," solid black; ",s.jsx(a.span,{className:"hljs-comment",children:"/* Obramowanie */"}),`
  `,s.jsx(a.span,{className:"hljs-attribute",children:"border-radius"}),": ",s.jsx(a.span,{className:"hljs-number",children:"10px"}),"; ",s.jsx(a.span,{className:"hljs-comment",children:"/* Zaokrąglone rogi */"}),`
}
`]})}),`
`,s.jsx(a.h2,{children:"Zadania do wykonania"}),`
`,s.jsx(a.h3,{children:"Zadanie 1"}),`
`,s.jsxs(a.p,{children:["Stwórz stronę HTML z elementem ",s.jsx(a.code,{children:"<h1>"}),", który ma kolor czerwony przy użyciu External CSS."]}),`
`,s.jsxs("details",{children:[s.jsx("summary",{children:s.jsx("span",{children:"Pokaż rozwiązanie"})}),s.jsx(a.pre,{children:s.jsxs(a.code,{className:"hljs language-html",children:[s.jsx(a.span,{className:"hljs-comment",children:"<!-- index.html -->"}),`
`,s.jsxs(a.span,{className:"hljs-meta",children:["<!DOCTYPE ",s.jsx(a.span,{className:"hljs-keyword",children:"html"}),">"]}),`
`,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"html"})," ",s.jsx(a.span,{className:"hljs-attr",children:"lang"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"pl"'}),">"]}),`
  `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"head"}),">"]}),`
    `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"meta"})," ",s.jsx(a.span,{className:"hljs-attr",children:"charset"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"UTF-8"'})," />"]}),`
    `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"meta"})," ",s.jsx(a.span,{className:"hljs-attr",children:"name"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"viewport"'})," ",s.jsx(a.span,{className:"hljs-attr",children:"content"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"width=device-width, initial-scale=1.0"'})," />"]}),`
    `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"title"}),">"]}),"Zadanie 1",s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"title"}),">"]}),`
    `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"link"})," ",s.jsx(a.span,{className:"hljs-attr",children:"rel"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"stylesheet"'})," ",s.jsx(a.span,{className:"hljs-attr",children:"href"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"style.css"'})," />"]}),`
  `,s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"head"}),">"]}),`
  `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"body"}),">"]}),`
    `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"h1"})," ",s.jsx(a.span,{className:"hljs-attr",children:"class"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"red"'}),">"]}),"Witaj, świecie!",s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"h1"}),">"]}),`
  `,s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"body"}),">"]}),`
`,s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"html"}),">"]}),`
`]})}),s.jsx(a.pre,{children:s.jsxs(a.code,{className:"hljs language-css",children:[s.jsx(a.span,{className:"hljs-comment",children:"/* style.css */"}),`
`,s.jsx(a.span,{className:"hljs-selector-class",children:".red"}),` {
  `,s.jsx(a.span,{className:"hljs-attribute",children:"color"}),`: red;
}
`]})})]}),`
`,s.jsx(a.h3,{children:"Zadanie 2"}),`
`,s.jsxs(a.p,{children:["Utwórz paragraf (",s.jsx(a.code,{children:"<p>"}),"), który ma zielone tło, 20 pikseli wypełnienia i zaokrąglone rogi o promieniu 10 pikseli."]}),`
`,s.jsxs("details",{children:[s.jsx("summary",{children:s.jsx("span",{children:"Pokaż rozwiązanie"})}),s.jsx(a.pre,{children:s.jsxs(a.code,{className:"hljs language-html",children:[s.jsx(a.span,{className:"hljs-comment",children:"<!-- index.html -->"}),`
`,s.jsxs(a.span,{className:"hljs-meta",children:["<!DOCTYPE ",s.jsx(a.span,{className:"hljs-keyword",children:"html"}),">"]}),`
`,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"html"})," ",s.jsx(a.span,{className:"hljs-attr",children:"lang"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"pl"'}),">"]}),`
  `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"head"}),">"]}),`
    `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"meta"})," ",s.jsx(a.span,{className:"hljs-attr",children:"charset"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"UTF-8"'})," />"]}),`
    `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"meta"})," ",s.jsx(a.span,{className:"hljs-attr",children:"name"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"viewport"'})," ",s.jsx(a.span,{className:"hljs-attr",children:"content"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"width=device-width, initial-scale=1.0"'})," />"]}),`
    `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"title"}),">"]}),"Zadanie 2",s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"title"}),">"]}),`
    `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"link"})," ",s.jsx(a.span,{className:"hljs-attr",children:"rel"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"stylesheet"'})," ",s.jsx(a.span,{className:"hljs-attr",children:"href"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"style.css"'})," />"]}),`
  `,s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"head"}),">"]}),`
  `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"body"}),">"]}),`
    `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"p"})," ",s.jsx(a.span,{className:"hljs-attr",children:"class"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"green-bg"'}),">"]}),"To jest paragraf",s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"p"}),">"]}),`
  `,s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"body"}),">"]}),`
`,s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"html"}),">"]}),`
`]})}),s.jsx(a.pre,{children:s.jsxs(a.code,{className:"hljs language-css",children:[s.jsx(a.span,{className:"hljs-comment",children:"/* style.css */"}),`
`,s.jsx(a.span,{className:"hljs-selector-class",children:".green-bg"}),` {
  `,s.jsx(a.span,{className:"hljs-attribute",children:"background-color"}),`: green;
  `,s.jsx(a.span,{className:"hljs-attribute",children:"padding"}),": ",s.jsx(a.span,{className:"hljs-number",children:"20px"}),`;
  `,s.jsx(a.span,{className:"hljs-attribute",children:"border-radius"}),": ",s.jsx(a.span,{className:"hljs-number",children:"10px"}),`;
}
`]})})]}),`
`,s.jsx(a.h3,{children:"Zadanie 3"}),`
`,s.jsx(a.p,{children:'Stwórz div, który ma niebieską ramkę o grubości 2 pikseli, a wewnątrz niego umieść tekst "To jest div".'}),`
`,s.jsxs("details",{children:[s.jsx("summary",{children:s.jsx("span",{children:"Pokaż rozwiązanie"})}),s.jsx(a.pre,{children:s.jsxs(a.code,{className:"hljs language-html",children:[s.jsx(a.span,{className:"hljs-comment",children:"<!-- index.html -->"}),`
`,s.jsxs(a.span,{className:"hljs-meta",children:["<!DOCTYPE ",s.jsx(a.span,{className:"hljs-keyword",children:"html"}),">"]}),`
`,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"html"})," ",s.jsx(a.span,{className:"hljs-attr",children:"lang"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"pl"'}),">"]}),`
  `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"head"}),">"]}),`
    `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"meta"})," ",s.jsx(a.span,{className:"hljs-attr",children:"charset"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"UTF-8"'})," />"]}),`
    `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"meta"})," ",s.jsx(a.span,{className:"hljs-attr",children:"name"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"viewport"'})," ",s.jsx(a.span,{className:"hljs-attr",children:"content"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"width=device-width, initial-scale=1.0"'})," />"]}),`
    `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"title"}),">"]}),"Zadanie 3",s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"title"}),">"]}),`
    `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"link"})," ",s.jsx(a.span,{className:"hljs-attr",children:"rel"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"stylesheet"'})," ",s.jsx(a.span,{className:"hljs-attr",children:"href"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"style.css"'})," />"]}),`
  `,s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"head"}),">"]}),`
  `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"body"}),">"]}),`
    `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"div"})," ",s.jsx(a.span,{className:"hljs-attr",children:"class"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"blue-border"'}),">"]}),"To jest div",s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"div"}),">"]}),`
  `,s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"body"}),">"]}),`
`,s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"html"}),">"]}),`
`]})}),s.jsx(a.pre,{children:s.jsxs(a.code,{className:"hljs language-css",children:[s.jsx(a.span,{className:"hljs-comment",children:"/* style.css */"}),`
`,s.jsx(a.span,{className:"hljs-selector-class",children:".blue-border"}),` {
  `,s.jsx(a.span,{className:"hljs-attribute",children:"border"}),": ",s.jsx(a.span,{className:"hljs-number",children:"2px"}),` solid blue;
}
`]})})]}),`
`,s.jsx(a.h3,{children:"Zadanie 4"}),`
`,s.jsxs(a.p,{children:["Utwórz stronę HTML z trzema nagłówkami (",s.jsx(a.code,{children:"<h1>"}),", ",s.jsx(a.code,{children:"<h2>"}),", ",s.jsx(a.code,{children:"<h3>"}),") o różnych kolorach za pomocą selektorów klas."]}),`
`,s.jsxs("details",{children:[s.jsx("summary",{children:s.jsx("span",{children:"Pokaż rozwiązanie"})}),s.jsx(a.pre,{children:s.jsxs(a.code,{className:"hljs language-html",children:[s.jsx(a.span,{className:"hljs-comment",children:"<!-- index.html -->"}),`
`,s.jsxs(a.span,{className:"hljs-meta",children:["<!DOCTYPE ",s.jsx(a.span,{className:"hljs-keyword",children:"html"}),">"]}),`
`,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"html"})," ",s.jsx(a.span,{className:"hljs-attr",children:"lang"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"pl"'}),">"]}),`
  `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"head"}),">"]}),`
    `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"meta"})," ",s.jsx(a.span,{className:"hljs-attr",children:"charset"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"UTF-8"'})," />"]}),`
    `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"meta"})," ",s.jsx(a.span,{className:"hljs-attr",children:"name"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"viewport"'})," ",s.jsx(a.span,{className:"hljs-attr",children:"content"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"width=device-width, initial-scale=1.0"'})," />"]}),`
    `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"title"}),">"]}),"Zadanie 4",s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"title"}),">"]}),`
    `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"link"})," ",s.jsx(a.span,{className:"hljs-attr",children:"rel"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"stylesheet"'})," ",s.jsx(a.span,{className:"hljs-attr",children:"href"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"style.css"'})," />"]}),`
  `,s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"head"}),">"]}),`
  `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"body"}),">"]}),`
    `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"h1"})," ",s.jsx(a.span,{className:"hljs-attr",children:"class"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"red"'}),">"]}),"Nagłówek 1",s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"h1"}),">"]}),`
    `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"h2"})," ",s.jsx(a.span,{className:"hljs-attr",children:"class"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"blue"'}),">"]}),"Nagłówek 2",s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"h2"}),">"]}),`
    `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"h3"})," ",s.jsx(a.span,{className:"hljs-attr",children:"class"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"green"'}),">"]}),"Nagłówek 3",s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"h3"}),">"]}),`
  `,s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"body"}),">"]}),`
`,s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"html"}),">"]}),`
`]})}),s.jsx(a.pre,{children:s.jsxs(a.code,{className:"hljs language-css",children:[s.jsx(a.span,{className:"hljs-comment",children:"/* style.css */"}),`
`,s.jsx(a.span,{className:"hljs-selector-class",children:".red"}),` {
  `,s.jsx(a.span,{className:"hljs-attribute",children:"color"}),`: red;
}

`,s.jsx(a.span,{className:"hljs-selector-class",children:".blue"}),` {
  `,s.jsx(a.span,{className:"hljs-attribute",children:"color"}),`: blue;
}

`,s.jsx(a.span,{className:"hljs-selector-class",children:".green"}),` {
  `,s.jsx(a.span,{className:"hljs-attribute",children:"color"}),`: green;
}
`]})})]}),`
`,s.jsx(a.p,{children:"To tyle na temat podstaw CSS! Zachęcam do dalszego eksperymentowania i zgłębiania tego tematu, aby tworzyć bardziej zaawansowane i estetyczne strony internetowe."})]})}function b(e={}){const{wrapper:a}=e.components||{};return a?s.jsx(a,{...e,children:s.jsx(h,{...e})}):h(e)}const L=Object.freeze(Object.defineProperty({__proto__:null,default:b,frontmatter:z},Symbol.toStringTag,{value:"Module"})),_={title:"Czym jest DOM (Document Object Model)?",description:"Czym jest DOM (Document Object Model)? DOM (Document Object Model) to interfejs programistyczny dla dokumentów HTML i XML. Umożliwia dynamiczne manipulowanie strukturą, stylem i treścią dokumentów. DOM reprezentuje dokument jako drzewo obiektów, gdzie każdy element, atrybut i tekst w dokumencie jest węzłem drzewa.",keywords:["kurs","html","dom","struktura","wprowadzenie"],categories:["wprowadzenie","html"],createdAt:"2024-06-30"};function j(e){const a={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",span:"span",...e.components};return s.jsxs(s.Fragment,{children:[s.jsx(a.h2,{children:"Wprowadzenie"}),`
`,s.jsx(a.p,{children:"DOM (Document Object Model) to interfejs programistyczny dla dokumentów HTML i XML. Umożliwia dynamiczne manipulowanie strukturą, stylem i treścią dokumentów. DOM reprezentuje dokument jako drzewo obiektów, gdzie każdy element, atrybut i tekst w dokumencie jest węzłem drzewa."}),`
`,s.jsx(a.h2,{children:"Struktura DOM"}),`
`,s.jsx(a.p,{children:"DOM przedstawia dokument HTML jako drzewo hierarchiczne:"}),`
`,s.jsx(a.pre,{children:s.jsxs(a.code,{className:"hljs language-html",children:[s.jsxs(a.span,{className:"hljs-meta",children:["<!DOCTYPE ",s.jsx(a.span,{className:"hljs-keyword",children:"html"}),">"]}),`
`,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"html"}),">"]}),`
  `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"head"}),">"]}),`
    `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"title"}),">"]}),"Przykład DOM",s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"title"}),">"]}),`
  `,s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"head"}),">"]}),`
  `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"body"}),">"]}),`
    `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"h1"}),">"]}),"Witaj, świecie!",s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"h1"}),">"]}),`
    `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"p"}),">"]}),"To jest akapit.",s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"p"}),">"]}),`
  `,s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"body"}),">"]}),`
`,s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"html"}),">"]}),`
`]})}),`
`,s.jsx(a.p,{children:"Powyższy dokument HTML jest reprezentowany w DOM jako:"}),`
`,s.jsx(a.pre,{children:s.jsx(a.code,{children:`#document
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
`})}),`
`,s.jsx(a.h2,{children:"Podstawowe operacje na DOM"}),`
`,s.jsx(a.p,{children:"DOM udostępnia wiele metod do manipulacji dokumentem. Oto kilka przykładów:"}),`
`,s.jsx(a.h3,{children:"Wybieranie elementów"}),`
`,s.jsx(a.h4,{children:s.jsx(a.code,{children:"getElementById"})}),`
`,s.jsx(a.p,{children:"Wybiera element na podstawie jego identyfikatora (ID):"}),`
`,s.jsx(a.pre,{children:s.jsxs(a.code,{className:"hljs language-html",children:[s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"p"})," ",s.jsx(a.span,{className:"hljs-attr",children:"id"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"myParagraph"'}),">"]}),"To jest akapit.",s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"p"}),">"]}),`

`,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"script"}),">"]}),s.jsxs(a.span,{className:"javascript",children:[`
  `,s.jsx(a.span,{className:"hljs-keyword",children:"const"})," para = ",s.jsx(a.span,{className:"hljs-variable language_",children:"document"}),".",s.jsx(a.span,{className:"hljs-title function_",children:"getElementById"}),"(",s.jsx(a.span,{className:"hljs-string",children:'"myParagraph"'}),`);
  `,s.jsx(a.span,{className:"hljs-variable language_",children:"console"}),".",s.jsx(a.span,{className:"hljs-title function_",children:"log"}),"(para.",s.jsx(a.span,{className:"hljs-property",children:"textContent"}),"); ",s.jsx(a.span,{className:"hljs-comment",children:'// "To jest akapit."'}),`
`]}),s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"script"}),">"]}),`
`]})}),`
`,s.jsx(a.h4,{children:s.jsx(a.code,{children:"getElementsByClassName"})}),`
`,s.jsx(a.p,{children:"Wybiera wszystkie elementy z określoną klasą:"}),`
`,s.jsx(a.pre,{children:s.jsxs(a.code,{className:"hljs language-html",children:[s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"p"})," ",s.jsx(a.span,{className:"hljs-attr",children:"class"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"myClass"'}),">"]}),"Akapit 1",s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"p"}),">"]}),`
`,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"p"})," ",s.jsx(a.span,{className:"hljs-attr",children:"class"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"myClass"'}),">"]}),"Akapit 2",s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"p"}),">"]}),`

`,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"script"}),">"]}),s.jsxs(a.span,{className:"javascript",children:[`
  `,s.jsx(a.span,{className:"hljs-keyword",children:"const"})," paras = ",s.jsx(a.span,{className:"hljs-variable language_",children:"document"}),".",s.jsx(a.span,{className:"hljs-title function_",children:"getElementsByClassName"}),"(",s.jsx(a.span,{className:"hljs-string",children:'"myClass"'}),`);
  `,s.jsx(a.span,{className:"hljs-variable language_",children:"console"}),".",s.jsx(a.span,{className:"hljs-title function_",children:"log"}),"(paras.",s.jsx(a.span,{className:"hljs-property",children:"length"}),"); ",s.jsx(a.span,{className:"hljs-comment",children:"// 2"}),`
`]}),s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"script"}),">"]}),`
`]})}),`
`,s.jsxs(a.h4,{children:[s.jsx(a.code,{children:"querySelector"})," i ",s.jsx(a.code,{children:"querySelectorAll"})]}),`
`,s.jsx(a.p,{children:"Wybiera elementy za pomocą selektorów CSS:"}),`
`,s.jsx(a.pre,{children:s.jsxs(a.code,{className:"hljs language-html",children:[s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"p"})," ",s.jsx(a.span,{className:"hljs-attr",children:"class"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"myClass"'}),">"]}),"Akapit 1",s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"p"}),">"]}),`
`,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"p"})," ",s.jsx(a.span,{className:"hljs-attr",children:"class"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"myClass"'}),">"]}),"Akapit 2",s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"p"}),">"]}),`

`,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"script"}),">"]}),s.jsxs(a.span,{className:"javascript",children:[`
  `,s.jsx(a.span,{className:"hljs-keyword",children:"const"})," firstPara = ",s.jsx(a.span,{className:"hljs-variable language_",children:"document"}),".",s.jsx(a.span,{className:"hljs-title function_",children:"querySelector"}),"(",s.jsx(a.span,{className:"hljs-string",children:'".myClass"'}),`);
  `,s.jsx(a.span,{className:"hljs-variable language_",children:"console"}),".",s.jsx(a.span,{className:"hljs-title function_",children:"log"}),"(firstPara.",s.jsx(a.span,{className:"hljs-property",children:"textContent"}),"); ",s.jsx(a.span,{className:"hljs-comment",children:'// "Akapit 1"'}),`

  `,s.jsx(a.span,{className:"hljs-keyword",children:"const"})," allParas = ",s.jsx(a.span,{className:"hljs-variable language_",children:"document"}),".",s.jsx(a.span,{className:"hljs-title function_",children:"querySelectorAll"}),"(",s.jsx(a.span,{className:"hljs-string",children:'".myClass"'}),`);
  `,s.jsx(a.span,{className:"hljs-variable language_",children:"console"}),".",s.jsx(a.span,{className:"hljs-title function_",children:"log"}),"(allParas.",s.jsx(a.span,{className:"hljs-property",children:"length"}),"); ",s.jsx(a.span,{className:"hljs-comment",children:"// 2"}),`
`]}),s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"script"}),">"]}),`
`]})}),`
`,s.jsx(a.h3,{children:"Manipulacja elementami"}),`
`,s.jsx(a.h4,{children:"Zmiana tekstu"}),`
`,s.jsx(a.pre,{children:s.jsxs(a.code,{className:"hljs language-html",children:[s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"p"})," ",s.jsx(a.span,{className:"hljs-attr",children:"id"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"myParagraph"'}),">"]}),"To jest akapit.",s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"p"}),">"]}),`

`,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"script"}),">"]}),s.jsxs(a.span,{className:"javascript",children:[`
  `,s.jsx(a.span,{className:"hljs-keyword",children:"const"})," para = ",s.jsx(a.span,{className:"hljs-variable language_",children:"document"}),".",s.jsx(a.span,{className:"hljs-title function_",children:"getElementById"}),"(",s.jsx(a.span,{className:"hljs-string",children:'"myParagraph"'}),`);
  para.`,s.jsx(a.span,{className:"hljs-property",children:"textContent"})," = ",s.jsx(a.span,{className:"hljs-string",children:'"Zmieniony tekst akapitu."'}),`;
`]}),s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"script"}),">"]}),`
`]})}),`
`,s.jsx(a.h4,{children:"Zmiana atrybutów"}),`
`,s.jsx(a.pre,{children:s.jsxs(a.code,{className:"hljs language-html",children:[s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"img"})," ",s.jsx(a.span,{className:"hljs-attr",children:"id"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"myImage"'})," ",s.jsx(a.span,{className:"hljs-attr",children:"src"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"image.jpg"'})," ",s.jsx(a.span,{className:"hljs-attr",children:"alt"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"Obrazek"'})," />"]}),`

`,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"script"}),">"]}),s.jsxs(a.span,{className:"javascript",children:[`
  `,s.jsx(a.span,{className:"hljs-keyword",children:"const"})," img = ",s.jsx(a.span,{className:"hljs-variable language_",children:"document"}),".",s.jsx(a.span,{className:"hljs-title function_",children:"getElementById"}),"(",s.jsx(a.span,{className:"hljs-string",children:'"myImage"'}),`);
  img.`,s.jsx(a.span,{className:"hljs-property",children:"src"})," = ",s.jsx(a.span,{className:"hljs-string",children:'"newImage.jpg"'}),`;
  img.`,s.jsx(a.span,{className:"hljs-property",children:"alt"})," = ",s.jsx(a.span,{className:"hljs-string",children:'"Nowy obrazek"'}),`;
`]}),s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"script"}),">"]}),`
`]})}),`
`,s.jsx(a.h4,{children:"Dodawanie elementów"}),`
`,s.jsx(a.pre,{children:s.jsxs(a.code,{className:"hljs language-html",children:[s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"ul"})," ",s.jsx(a.span,{className:"hljs-attr",children:"id"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"myList"'}),">"]}),`
  `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"li"}),">"]}),"Element 1",s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"li"}),">"]}),`
`,s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"ul"}),">"]}),`

`,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"script"}),">"]}),s.jsxs(a.span,{className:"javascript",children:[`
  `,s.jsx(a.span,{className:"hljs-keyword",children:"const"})," list = ",s.jsx(a.span,{className:"hljs-variable language_",children:"document"}),".",s.jsx(a.span,{className:"hljs-title function_",children:"getElementById"}),"(",s.jsx(a.span,{className:"hljs-string",children:'"myList"'}),`);
  `,s.jsx(a.span,{className:"hljs-keyword",children:"const"})," newItem = ",s.jsx(a.span,{className:"hljs-variable language_",children:"document"}),".",s.jsx(a.span,{className:"hljs-title function_",children:"createElement"}),"(",s.jsx(a.span,{className:"hljs-string",children:'"li"'}),`);
  newItem.`,s.jsx(a.span,{className:"hljs-property",children:"textContent"})," = ",s.jsx(a.span,{className:"hljs-string",children:'"Element 2"'}),`;
  list.`,s.jsx(a.span,{className:"hljs-title function_",children:"appendChild"}),`(newItem);
`]}),s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"script"}),">"]}),`
`]})}),`
`,s.jsx(a.h4,{children:"Usuwanie elementów"}),`
`,s.jsx(a.pre,{children:s.jsxs(a.code,{className:"hljs language-html",children:[s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"p"})," ",s.jsx(a.span,{className:"hljs-attr",children:"id"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"myParagraph"'}),">"]}),"To jest akapit.",s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"p"}),">"]}),`

`,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"script"}),">"]}),s.jsxs(a.span,{className:"javascript",children:[`
  `,s.jsx(a.span,{className:"hljs-keyword",children:"const"})," para = ",s.jsx(a.span,{className:"hljs-variable language_",children:"document"}),".",s.jsx(a.span,{className:"hljs-title function_",children:"getElementById"}),"(",s.jsx(a.span,{className:"hljs-string",children:'"myParagraph"'}),`);
  para.`,s.jsx(a.span,{className:"hljs-title function_",children:"remove"}),`();
`]}),s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"script"}),">"]}),`
`]})}),`
`,s.jsx(a.h2,{children:"Zadania do wykonania"}),`
`,s.jsx(a.h3,{children:"Zadanie 1"}),`
`,s.jsxs(a.p,{children:["Napisz kod HTML z listą (",s.jsx(a.code,{children:"ul"}),") i trzema elementami (",s.jsx(a.code,{children:"li"}),"). Następnie za pomocą JavaScript dodaj czwarty element do listy."]}),`
`,s.jsxs("details",{children:[s.jsx("summary",{children:s.jsx("span",{children:"Pokaż rozwiązanie"})}),s.jsx(a.pre,{children:s.jsxs(a.code,{className:"hljs language-html",children:[s.jsxs(a.span,{className:"hljs-meta",children:["<!DOCTYPE ",s.jsx(a.span,{className:"hljs-keyword",children:"html"}),">"]}),`
`,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"html"})," ",s.jsx(a.span,{className:"hljs-attr",children:"lang"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"pl"'}),">"]}),`
  `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"head"}),">"]}),`
    `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"meta"})," ",s.jsx(a.span,{className:"hljs-attr",children:"charset"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"UTF-8"'})," />"]}),`
    `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"meta"})," ",s.jsx(a.span,{className:"hljs-attr",children:"name"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"viewport"'})," ",s.jsx(a.span,{className:"hljs-attr",children:"content"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"width=device-width, initial-scale=1.0"'})," />"]}),`
    `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"title"}),">"]}),"Lista",s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"title"}),">"]}),`
  `,s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"head"}),">"]}),`
  `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"body"}),">"]}),`
    `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"ul"})," ",s.jsx(a.span,{className:"hljs-attr",children:"id"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"myList"'}),">"]}),`
      `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"li"}),">"]}),"Element 1",s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"li"}),">"]}),`
      `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"li"}),">"]}),"Element 2",s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"li"}),">"]}),`
      `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"li"}),">"]}),"Element 3",s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"li"}),">"]}),`
    `,s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"ul"}),">"]}),`
    `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"script"}),">"]}),s.jsxs(a.span,{className:"javascript",children:[`
      `,s.jsx(a.span,{className:"hljs-keyword",children:"const"})," list = ",s.jsx(a.span,{className:"hljs-variable language_",children:"document"}),".",s.jsx(a.span,{className:"hljs-title function_",children:"getElementById"}),"(",s.jsx(a.span,{className:"hljs-string",children:'"myList"'}),`);
      `,s.jsx(a.span,{className:"hljs-keyword",children:"const"})," newItem = ",s.jsx(a.span,{className:"hljs-variable language_",children:"document"}),".",s.jsx(a.span,{className:"hljs-title function_",children:"createElement"}),"(",s.jsx(a.span,{className:"hljs-string",children:'"li"'}),`);
      newItem.`,s.jsx(a.span,{className:"hljs-property",children:"textContent"})," = ",s.jsx(a.span,{className:"hljs-string",children:'"Element 4"'}),`;
      list.`,s.jsx(a.span,{className:"hljs-title function_",children:"appendChild"}),`(newItem);
    `]}),s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"script"}),">"]}),`
  `,s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"body"}),">"]}),`
`,s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"html"}),">"]}),`
`]})})]}),`
`,s.jsx(a.h3,{children:"Zadanie 2"}),`
`,s.jsx(a.p,{children:'Utwórz formularz z polem tekstowym i przyciskiem. Po kliknięciu przycisku zmień tekst przycisku na "Wysłano".'}),`
`,s.jsxs("details",{children:[s.jsx("summary",{children:s.jsx("span",{children:"Pokaż rozwiązanie"})}),s.jsx(a.pre,{children:s.jsxs(a.code,{className:"hljs language-html",children:[s.jsxs(a.span,{className:"hljs-meta",children:["<!DOCTYPE ",s.jsx(a.span,{className:"hljs-keyword",children:"html"}),">"]}),`
`,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"html"})," ",s.jsx(a.span,{className:"hljs-attr",children:"lang"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"pl"'}),">"]}),`
  `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"head"}),">"]}),`
    `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"meta"})," ",s.jsx(a.span,{className:"hljs-attr",children:"charset"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"UTF-8"'})," />"]}),`
    `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"meta"})," ",s.jsx(a.span,{className:"hljs-attr",children:"name"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"viewport"'})," ",s.jsx(a.span,{className:"hljs-attr",children:"content"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"width=device-width, initial-scale=1.0"'})," />"]}),`
    `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"title"}),">"]}),"Formularz",s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"title"}),">"]}),`
  `,s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"head"}),">"]}),`
  `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"body"}),">"]}),`
    `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"form"})," ",s.jsx(a.span,{className:"hljs-attr",children:"id"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"myForm"'}),">"]}),`
      `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"input"})," ",s.jsx(a.span,{className:"hljs-attr",children:"type"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"text"'})," ",s.jsx(a.span,{className:"hljs-attr",children:"id"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"myInput"'})," />"]}),`
      `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"button"})," ",s.jsx(a.span,{className:"hljs-attr",children:"type"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"button"'})," ",s.jsx(a.span,{className:"hljs-attr",children:"id"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"myButton"'}),">"]}),"Wyślij",s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"button"}),">"]}),`
    `,s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"form"}),">"]}),`
    `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"script"}),">"]}),s.jsxs(a.span,{className:"javascript",children:[`
      `,s.jsx(a.span,{className:"hljs-keyword",children:"const"})," button = ",s.jsx(a.span,{className:"hljs-variable language_",children:"document"}),".",s.jsx(a.span,{className:"hljs-title function_",children:"getElementById"}),"(",s.jsx(a.span,{className:"hljs-string",children:'"myButton"'}),`);
      button.`,s.jsx(a.span,{className:"hljs-title function_",children:"addEventListener"}),"(",s.jsx(a.span,{className:"hljs-string",children:'"click"'}),", ",s.jsx(a.span,{className:"hljs-function",children:"() =>"}),` {
        button.`,s.jsx(a.span,{className:"hljs-property",children:"textContent"})," = ",s.jsx(a.span,{className:"hljs-string",children:'"Wysłano"'}),`;
      });
    `]}),s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"script"}),">"]}),`
  `,s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"body"}),">"]}),`
`,s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"html"}),">"]}),`
`]})})]}),`
`,s.jsx(a.h3,{children:"Zadanie 3"}),`
`,s.jsx(a.p,{children:"Napisz kod HTML z obrazkiem. Za pomocą JavaScript zmień źródło obrazka na nowe po kliknięciu na niego."}),`
`,s.jsxs("details",{children:[s.jsx("summary",{children:s.jsx("span",{children:"Pokaż rozwiązanie"})}),s.jsx(a.pre,{children:s.jsxs(a.code,{className:"hljs language-html",children:[s.jsxs(a.span,{className:"hljs-meta",children:["<!DOCTYPE ",s.jsx(a.span,{className:"hljs-keyword",children:"html"}),">"]}),`
`,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"html"})," ",s.jsx(a.span,{className:"hljs-attr",children:"lang"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"pl"'}),">"]}),`
  `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"head"}),">"]}),`
    `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"meta"})," ",s.jsx(a.span,{className:"hljs-attr",children:"charset"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"UTF-8"'})," />"]}),`
    `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"meta"})," ",s.jsx(a.span,{className:"hljs-attr",children:"name"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"viewport"'})," ",s.jsx(a.span,{className:"hljs-attr",children:"content"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"width=device-width, initial-scale=1.0"'})," />"]}),`
    `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"title"}),">"]}),"Obrazek",s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"title"}),">"]}),`
  `,s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"head"}),">"]}),`
  `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"body"}),">"]}),`
    `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"img"})," ",s.jsx(a.span,{className:"hljs-attr",children:"id"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"myImage"'})," ",s.jsx(a.span,{className:"hljs-attr",children:"src"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"image.jpg"'})," ",s.jsx(a.span,{className:"hljs-attr",children:"alt"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"Obrazek"'})," />"]}),`
    `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"script"}),">"]}),s.jsxs(a.span,{className:"javascript",children:[`
      `,s.jsx(a.span,{className:"hljs-keyword",children:"const"})," img = ",s.jsx(a.span,{className:"hljs-variable language_",children:"document"}),".",s.jsx(a.span,{className:"hljs-title function_",children:"getElementById"}),"(",s.jsx(a.span,{className:"hljs-string",children:'"myImage"'}),`);
      img.`,s.jsx(a.span,{className:"hljs-title function_",children:"addEventListener"}),"(",s.jsx(a.span,{className:"hljs-string",children:'"click"'}),", ",s.jsx(a.span,{className:"hljs-function",children:"() =>"}),` {
        img.`,s.jsx(a.span,{className:"hljs-property",children:"src"})," = ",s.jsx(a.span,{className:"hljs-string",children:'"newImage.jpg"'}),`;
      });
    `]}),s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"script"}),">"]}),`
  `,s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"body"}),">"]}),`
`,s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"html"}),">"]}),`
`]})})]}),`
`,s.jsx(a.h3,{children:"Zadanie 4"}),`
`,s.jsx(a.p,{children:"Utwórz stronę HTML z trzema akapitami. Użyj JavaScript, aby zmienić kolor tekstu wszystkich akapitów na niebieski."}),`
`,s.jsxs("details",{children:[s.jsx("summary",{children:s.jsx("span",{children:"Pokaż rozwiązanie"})}),s.jsx(a.pre,{children:s.jsxs(a.code,{className:"hljs language-html",children:[s.jsxs(a.span,{className:"hljs-meta",children:["<!DOCTYPE ",s.jsx(a.span,{className:"hljs-keyword",children:"html"}),">"]}),`
`,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"html"})," ",s.jsx(a.span,{className:"hljs-attr",children:"lang"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"pl"'}),">"]}),`
  `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"head"}),">"]}),`
    `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"meta"})," ",s.jsx(a.span,{className:"hljs-attr",children:"charset"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"UTF-8"'})," />"]}),`
    `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"meta"})," ",s.jsx(a.span,{className:"hljs-attr",children:"name"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"viewport"'})," ",s.jsx(a.span,{className:"hljs-attr",children:"content"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"width=device-width, initial-scale=1.0"'})," />"]}),`
    `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"title"}),">"]}),"Kolor tekstu",s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"title"}),">"]}),`
  `,s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"head"}),">"]}),`
  `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"body"}),">"]}),`
    `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"p"}),">"]}),"Akapit 1",s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"p"}),">"]}),`
    `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"p"}),">"]}),"Akapit 2",s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"p"}),">"]}),`
    `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"p"}),">"]}),"Akapit 3",s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"p"}),">"]}),`
    `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"script"}),">"]}),s.jsxs(a.span,{className:"javascript",children:[`
      `,s.jsx(a.span,{className:"hljs-keyword",children:"const"})," paragraphs = ",s.jsx(a.span,{className:"hljs-variable language_",children:"document"}),".",s.jsx(a.span,{className:"hljs-title function_",children:"querySelectorAll"}),"(",s.jsx(a.span,{className:"hljs-string",children:'"p"'}),`);
      paragraphs.`,s.jsx(a.span,{className:"hljs-title function_",children:"forEach"}),"(",s.jsxs(a.span,{className:"hljs-function",children:["(",s.jsx(a.span,{className:"hljs-params",children:"p"}),") =>"]}),` {
        p.`,s.jsx(a.span,{className:"hljs-property",children:"style"}),".",s.jsx(a.span,{className:"hljs-property",children:"color"})," = ",s.jsx(a.span,{className:"hljs-string",children:'"blue"'}),`;
      });
    `]}),s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"script"}),">"]}),`
  `,s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"body"}),">"]}),`
`,s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"html"}),">"]}),`
`]})})]}),`
`,s.jsx(a.p,{children:"To tyle na temat podstaw DOM! Zachęcam do dalszego eksperymentowania i zgłębiania tego tematu."})]})}function f(e={}){const{wrapper:a}=e.components||{};return a?s.jsx(a,{...e,children:s.jsx(j,{...e})}):j(e)}const E=Object.freeze(Object.defineProperty({__proto__:null,default:f,frontmatter:_},Symbol.toStringTag,{value:"Module"})),v={title:"Wprowadzenie do HTML",description:"Co to jest HTML? HTML (HyperText Markup Language) to podstawowy język wykorzystywany do tworzenia i strukturyzowania stron internetowych. HTML używa elementów, które definiują różne części dokumentu, takie jak nagłówki, akapity, linki, obrazy, i wiele innych.",keywords:["kurs","html","dom","struktura","wprowadzenie"],categories:["wprowadzenie","html"],createdAt:"2024-06-30"};function t(e){const a={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",span:"span",ul:"ul",...e.components};return s.jsxs(s.Fragment,{children:[s.jsx(a.h2,{children:"Co to jest HTML?"}),`
`,s.jsx(a.p,{children:"HTML (HyperText Markup Language) to podstawowy język wykorzystywany do tworzenia i strukturyzowania stron internetowych. HTML używa elementów, które definiują różne części dokumentu, takie jak nagłówki, akapity, linki, obrazy, i wiele innych."}),`
`,s.jsx(a.h2,{children:"Podstawowa struktura dokumentu HTML"}),`
`,s.jsx(a.p,{children:"Każdy dokument HTML ma określoną strukturę, która składa się z kilku kluczowych elementów:"}),`
`,s.jsx(a.pre,{children:s.jsxs(a.code,{className:"hljs language-html",children:[s.jsxs(a.span,{className:"hljs-meta",children:["<!DOCTYPE ",s.jsx(a.span,{className:"hljs-keyword",children:"html"}),">"]}),`
`,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"html"})," ",s.jsx(a.span,{className:"hljs-attr",children:"lang"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"pl"'}),">"]}),`
  `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"head"}),">"]}),`
    `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"meta"})," ",s.jsx(a.span,{className:"hljs-attr",children:"charset"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"UTF-8"'})," />"]}),`
    `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"meta"})," ",s.jsx(a.span,{className:"hljs-attr",children:"name"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"viewport"'})," ",s.jsx(a.span,{className:"hljs-attr",children:"content"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"width=device-width, initial-scale=1.0"'})," />"]}),`
    `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"title"}),">"]}),"Tytuł strony",s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"title"}),">"]}),`
  `,s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"head"}),">"]}),`
  `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"body"}),">"]}),`
    `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"h1"}),">"]}),"Witaj, świecie!",s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"h1"}),">"]}),`
    `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"p"}),">"]}),"To jest przykładowa strona HTML.",s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"p"}),">"]}),`
  `,s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"body"}),">"]}),`
`,s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"html"}),">"]}),`
`]})}),`
`,s.jsx(a.h3,{children:"Wyjaśnienie struktury"}),`
`,s.jsxs(a.ul,{children:[`
`,s.jsxs(a.li,{children:[s.jsx(a.code,{children:"<!DOCTYPE html>"}),": Deklaracja typu dokumentu określająca, że dokument jest w HTML5."]}),`
`,s.jsxs(a.li,{children:[s.jsx(a.code,{children:"<html>"}),": Korzeń dokumentu HTML."]}),`
`,s.jsxs(a.li,{children:[s.jsx(a.code,{children:"<head>"}),": Zawiera meta informacje o dokumencie, takie jak kodowanie znaków i tytuł strony."]}),`
`,s.jsxs(a.li,{children:[s.jsx(a.code,{children:'<meta charset="UTF-8">'}),": Określa kodowanie znaków dokumentu."]}),`
`,s.jsxs(a.li,{children:[s.jsx(a.code,{children:'<meta name="viewport" content="width=device-width, initial-scale=1.0">'}),": Zapewnia poprawne wyświetlanie na urządzeniach mobilnych."]}),`
`,s.jsxs(a.li,{children:[s.jsx(a.code,{children:"<title>"}),": Tytuł strony wyświetlany na karcie przeglądarki."]}),`
`,s.jsxs(a.li,{children:[s.jsx(a.code,{children:"<body>"}),": Zawiera treść strony, która jest widoczna dla użytkownika."]}),`
`]}),`
`,s.jsx(a.h2,{children:"Podstawowe elementy HTML"}),`
`,s.jsx(a.h3,{children:"Nagłówki"}),`
`,s.jsxs(a.p,{children:["HTML posiada sześć poziomów nagłówków, od ",s.jsx(a.code,{children:"<h1>"})," do ",s.jsx(a.code,{children:"<h6>"}),", gdzie ",s.jsx(a.code,{children:"<h1>"})," jest najważniejszym nagłówkiem, a ",s.jsx(a.code,{children:"<h6>"})," najmniej ważnym."]}),`
`,s.jsx(a.pre,{children:s.jsxs(a.code,{className:"hljs language-html",children:[s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"h1"}),">"]}),"Najważniejszy nagłówek",s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"h1"}),">"]}),`
`,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"h2"}),">"]}),"Drugi poziom nagłówka",s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"h2"}),">"]}),`
`,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"h3"}),">"]}),"Trzeci poziom nagłówka",s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"h3"}),">"]}),`
`]})}),`
`,s.jsx(a.h3,{children:"Akapity"}),`
`,s.jsxs(a.p,{children:["Akapity są tworzone za pomocą elementu ",s.jsx(a.code,{children:"<p>"}),"."]}),`
`,s.jsx(a.pre,{children:s.jsxs(a.code,{className:"hljs language-html",children:[s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"p"}),">"]}),"To jest akapit tekstu.",s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"p"}),">"]}),`
`]})}),`
`,s.jsx(a.h3,{children:"Linki"}),`
`,s.jsxs(a.p,{children:["Linki są tworzone za pomocą elementu ",s.jsx(a.code,{children:"<a>"}),", który zawiera atrybut ",s.jsx(a.code,{children:"href"})," określający adres URL."]}),`
`,s.jsx(a.pre,{children:s.jsxs(a.code,{className:"hljs language-html",children:[s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"a"})," ",s.jsx(a.span,{className:"hljs-attr",children:"href"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"https://www.example.com"'}),">"]}),"Kliknij tutaj, aby przejść do Example",s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"a"}),">"]}),`
`]})}),`
`,s.jsx(a.h3,{children:"Obrazy"}),`
`,s.jsxs(a.p,{children:["Obrazy są dodawane za pomocą elementu ",s.jsx(a.code,{children:"<img>"}),", który zawiera atrybut ",s.jsx(a.code,{children:"src"})," wskazujący na źródło obrazu oraz ",s.jsx(a.code,{children:"alt"})," opisujący obraz."]}),`
`,s.jsx(a.pre,{children:s.jsxs(a.code,{className:"hljs language-html",children:[s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"img"})," ",s.jsx(a.span,{className:"hljs-attr",children:"src"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"obrazek.jpg"'})," ",s.jsx(a.span,{className:"hljs-attr",children:"alt"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"Opis obrazka"'})," />"]}),`
`]})}),`
`,s.jsx(a.h3,{children:"Listy"}),`
`,s.jsxs(a.p,{children:["Listy nieuporządkowane (",s.jsx(a.code,{children:"<ul>"}),") i uporządkowane (",s.jsx(a.code,{children:"<ol>"}),") zawierają elementy listy (",s.jsx(a.code,{children:"<li>"}),")."]}),`
`,s.jsx(a.pre,{children:s.jsxs(a.code,{className:"hljs language-html",children:[s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"ul"}),">"]}),`
  `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"li"}),">"]}),"Element listy 1",s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"li"}),">"]}),`
  `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"li"}),">"]}),"Element listy 2",s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"li"}),">"]}),`
  `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"li"}),">"]}),"Element listy 3",s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"li"}),">"]}),`
`,s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"ul"}),">"]}),`

`,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"ol"}),">"]}),`
  `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"li"}),">"]}),"Element listy 1",s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"li"}),">"]}),`
  `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"li"}),">"]}),"Element listy 2",s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"li"}),">"]}),`
  `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"li"}),">"]}),"Element listy 3",s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"li"}),">"]}),`
`,s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"ol"}),">"]}),`
`]})}),`
`,s.jsx(a.h2,{children:"Formularze"}),`
`,s.jsxs(a.p,{children:["Formularze są tworzone za pomocą elementu ",s.jsx(a.code,{children:"<form>"}),", który zawiera różne elementy wejściowe, takie jak pola tekstowe (",s.jsx(a.code,{children:"<input>"}),"), pola wyboru (",s.jsx(a.code,{children:'<input type="checkbox">'}),"), przyciski radio (",s.jsx(a.code,{children:'<input type="radio">'}),"), i przyciski (",s.jsx(a.code,{children:"<button>"}),")."]}),`
`,s.jsx(a.pre,{children:s.jsxs(a.code,{className:"hljs language-html",children:[s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"form"})," ",s.jsx(a.span,{className:"hljs-attr",children:"action"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"/submit-form"'})," ",s.jsx(a.span,{className:"hljs-attr",children:"method"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"post"'}),">"]}),`
  `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"label"})," ",s.jsx(a.span,{className:"hljs-attr",children:"for"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"name"'}),">"]}),"Nazwa:",s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"label"}),">"]}),`
  `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"input"})," ",s.jsx(a.span,{className:"hljs-attr",children:"type"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"text"'})," ",s.jsx(a.span,{className:"hljs-attr",children:"id"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"name"'})," ",s.jsx(a.span,{className:"hljs-attr",children:"name"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"name"'})," />"]}),`
  `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"input"})," ",s.jsx(a.span,{className:"hljs-attr",children:"type"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"submit"'})," ",s.jsx(a.span,{className:"hljs-attr",children:"value"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"Wyślij"'})," />"]}),`
`,s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"form"}),">"]}),`
`]})}),`
`,s.jsx(a.h2,{children:"Zadania do wykonania"}),`
`,s.jsx(a.h3,{children:"Zadanie 1"}),`
`,s.jsx(a.p,{children:"Utwórz stronę HTML, która zawiera:"}),`
`,s.jsxs(a.ul,{children:[`
`,s.jsxs(a.li,{children:["Nagłówek ",s.jsx(a.code,{children:"<h1>"}),' z tytułem "Moja pierwsza strona".']}),`
`,s.jsx(a.li,{children:"Akapit z krótkim opisem."}),`
`,s.jsx(a.li,{children:"Link do dowolnej strony internetowej."}),`
`]}),`
`,s.jsxs("details",{children:[s.jsx("summary",{children:s.jsx("span",{children:"Pokaż rozwiązanie"})}),s.jsx(a.pre,{children:s.jsxs(a.code,{className:"hljs language-html",children:[s.jsxs(a.span,{className:"hljs-meta",children:["<!DOCTYPE ",s.jsx(a.span,{className:"hljs-keyword",children:"html"}),">"]}),`
`,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"html"})," ",s.jsx(a.span,{className:"hljs-attr",children:"lang"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"pl"'}),">"]}),`
  `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"head"}),">"]}),`
    `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"meta"})," ",s.jsx(a.span,{className:"hljs-attr",children:"charset"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"UTF-8"'})," />"]}),`
    `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"meta"})," ",s.jsx(a.span,{className:"hljs-attr",children:"name"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"viewport"'})," ",s.jsx(a.span,{className:"hljs-attr",children:"content"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"width=device-width, initial-scale=1.0"'})," />"]}),`
    `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"title"}),">"]}),"Moja pierwsza strona",s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"title"}),">"]}),`
  `,s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"head"}),">"]}),`
  `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"body"}),">"]}),`
    `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"h1"}),">"]}),"Moja pierwsza strona",s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"h1"}),">"]}),`
    `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"p"}),">"]}),"To jest krótki opis mojej pierwszej strony internetowej.",s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"p"}),">"]}),`
    `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"a"})," ",s.jsx(a.span,{className:"hljs-attr",children:"href"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"https://www.example.com"'}),">"]}),"Kliknij tutaj, aby przejść do Example",s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"a"}),">"]}),`
  `,s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"body"}),">"]}),`
`,s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"html"}),">"]}),`
`]})})]}),`
`,s.jsx(a.h3,{children:"Zadanie 2"}),`
`,s.jsx(a.p,{children:"Utwórz stronę HTML, która zawiera:"}),`
`,s.jsxs(a.ul,{children:[`
`,s.jsxs(a.li,{children:["Obrazek z atrybutem ",s.jsx(a.code,{children:"src"})," wskazującym na dowolny obrazek z internetu."]}),`
`,s.jsx(a.li,{children:"Alternatywny tekst opisujący obrazek."}),`
`]}),`
`,s.jsxs("details",{children:[s.jsx("summary",{children:s.jsx("span",{children:"Pokaż rozwiązanie"})}),s.jsx(a.pre,{children:s.jsxs(a.code,{className:"hljs language-html",children:[s.jsxs(a.span,{className:"hljs-meta",children:["<!DOCTYPE ",s.jsx(a.span,{className:"hljs-keyword",children:"html"}),">"]}),`
`,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"html"})," ",s.jsx(a.span,{className:"hljs-attr",children:"lang"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"pl"'}),">"]}),`
  `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"head"}),">"]}),`
    `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"meta"})," ",s.jsx(a.span,{className:"hljs-attr",children:"charset"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"UTF-8"'})," />"]}),`
    `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"meta"})," ",s.jsx(a.span,{className:"hljs-attr",children:"name"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"viewport"'})," ",s.jsx(a.span,{className:"hljs-attr",children:"content"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"width=device-width, initial-scale=1.0"'})," />"]}),`
    `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"title"}),">"]}),"Strona z obrazkiem",s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"title"}),">"]}),`
  `,s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"head"}),">"]}),`
  `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"body"}),">"]}),`
    `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"img"})," ",s.jsx(a.span,{className:"hljs-attr",children:"src"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"https://via.placeholder.com/150"'})," ",s.jsx(a.span,{className:"hljs-attr",children:"alt"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"Przykładowy obrazek"'})," />"]}),`
  `,s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"body"}),">"]}),`
`,s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"html"}),">"]}),`
`]})})]}),`
`,s.jsx(a.h3,{children:"Zadanie 3"}),`
`,s.jsx(a.p,{children:"Utwórz stronę HTML, która zawiera:"}),`
`,s.jsxs(a.ul,{children:[`
`,s.jsx(a.li,{children:"Listę nieuporządkowaną z trzema ulubionymi potrawami."}),`
`,s.jsx(a.li,{children:"Listę uporządkowaną z trzema krokami do ugotowania jednego z tych potraw."}),`
`]}),`
`,s.jsxs("details",{children:[s.jsx("summary",{children:s.jsx("span",{children:"Pokaż rozwiązanie"})}),s.jsx(a.pre,{children:s.jsxs(a.code,{className:"hljs language-html",children:[s.jsxs(a.span,{className:"hljs-meta",children:["<!DOCTYPE ",s.jsx(a.span,{className:"hljs-keyword",children:"html"}),">"]}),`
`,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"html"})," ",s.jsx(a.span,{className:"hljs-attr",children:"lang"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"pl"'}),">"]}),`
  `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"head"}),">"]}),`
    `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"meta"})," ",s.jsx(a.span,{className:"hljs-attr",children:"charset"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"UTF-8"'})," />"]}),`
    `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"meta"})," ",s.jsx(a.span,{className:"hljs-attr",children:"name"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"viewport"'})," ",s.jsx(a.span,{className:"hljs-attr",children:"content"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"width=device-width, initial-scale=1.0"'})," />"]}),`
    `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"title"}),">"]}),"Lista potraw",s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"title"}),">"]}),`
  `,s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"head"}),">"]}),`
  `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"body"}),">"]}),`
    `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"h1"}),">"]}),"Moje ulubione potrawy",s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"h1"}),">"]}),`
    `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"ul"}),">"]}),`
      `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"li"}),">"]}),"Pizza",s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"li"}),">"]}),`
      `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"li"}),">"]}),"Sushi",s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"li"}),">"]}),`
      `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"li"}),">"]}),"Spaghetti",s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"li"}),">"]}),`
    `,s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"ul"}),">"]}),`
    `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"h2"}),">"]}),"Jak ugotować spaghetti",s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"h2"}),">"]}),`
    `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"ol"}),">"]}),`
      `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"li"}),">"]}),"Ugotuj makaron.",s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"li"}),">"]}),`
      `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"li"}),">"]}),"Przygotuj sos pomidorowy.",s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"li"}),">"]}),`
      `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"li"}),">"]}),"Wymieszaj makaron z sosem.",s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"li"}),">"]}),`
    `,s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"ol"}),">"]}),`
  `,s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"body"}),">"]}),`
`,s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"html"}),">"]}),`
`]})})]}),`
`,s.jsx(a.h3,{children:"Zadanie 4"}),`
`,s.jsx(a.p,{children:"Utwórz formularz HTML, który zawiera:"}),`
`,s.jsxs(a.ul,{children:[`
`,s.jsx(a.li,{children:"Pole tekstowe do wprowadzenia imienia."}),`
`,s.jsx(a.li,{children:"Pole typu radio do wyboru płci."}),`
`,s.jsx(a.li,{children:"Pole typu checkbox do zaznaczenia zgody na przetwarzanie danych."}),`
`,s.jsx(a.li,{children:"Przycisk do wysłania formularza."}),`
`]}),`
`,s.jsxs("details",{children:[s.jsx("summary",{children:s.jsx("span",{children:"Pokaż rozwiązanie"})}),s.jsx(a.pre,{children:s.jsxs(a.code,{className:"hljs language-html",children:[s.jsxs(a.span,{className:"hljs-meta",children:["<!DOCTYPE ",s.jsx(a.span,{className:"hljs-keyword",children:"html"}),">"]}),`
`,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"html"})," ",s.jsx(a.span,{className:"hljs-attr",children:"lang"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"pl"'}),">"]}),`
  `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"head"}),">"]}),`
    `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"meta"})," ",s.jsx(a.span,{className:"hljs-attr",children:"charset"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"UTF-8"'})," />"]}),`
    `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"meta"})," ",s.jsx(a.span,{className:"hljs-attr",children:"name"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"viewport"'})," ",s.jsx(a.span,{className:"hljs-attr",children:"content"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"width=device-width, initial-scale=1.0"'})," />"]}),`
    `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"title"}),">"]}),"Formularz",s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"title"}),">"]}),`
  `,s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"head"}),">"]}),`
  `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"body"}),">"]}),`
    `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"form"})," ",s.jsx(a.span,{className:"hljs-attr",children:"action"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"/submit-form"'})," ",s.jsx(a.span,{className:"hljs-attr",children:"method"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"post"'}),">"]}),`
      `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"label"})," ",s.jsx(a.span,{className:"hljs-attr",children:"for"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"name"'}),">"]}),"Imię:",s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"label"}),">"]}),`
      `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"input"})," ",s.jsx(a.span,{className:"hljs-attr",children:"type"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"text"'})," ",s.jsx(a.span,{className:"hljs-attr",children:"id"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"name"'})," ",s.jsx(a.span,{className:"hljs-attr",children:"name"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"name"'})," />"]}),s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"br"})," />"]}),s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"br"})," />"]}),`

      `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"label"}),">"]}),"Płeć:",s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"label"}),">"]}),`
      `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"input"})," ",s.jsx(a.span,{className:"hljs-attr",children:"type"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"radio"'})," ",s.jsx(a.span,{className:"hljs-attr",children:"id"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"male"'})," ",s.jsx(a.span,{className:"hljs-attr",children:"name"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"gender"'})," ",s.jsx(a.span,{className:"hljs-attr",children:"value"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"male"'})," />"]}),`
      `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"label"})," ",s.jsx(a.span,{className:"hljs-attr",children:"for"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"male"'}),">"]}),"Mężczyzna",s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"label"}),">"]}),`
      `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"input"})," ",s.jsx(a.span,{className:"hljs-attr",children:"type"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"radio"'})," ",s.jsx(a.span,{className:"hljs-attr",children:"id"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"female"'})," ",s.jsx(a.span,{className:"hljs-attr",children:"name"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"gender"'})," ",s.jsx(a.span,{className:"hljs-attr",children:"value"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"female"'})," />"]}),`
      `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"label"})," ",s.jsx(a.span,{className:"hljs-attr",children:"for"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"female"'}),">"]}),"Kobieta",s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"label"}),">"]}),s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"br"})," />"]}),s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"br"})," />"]}),`

      `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"input"})," ",s.jsx(a.span,{className:"hljs-attr",children:"type"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"checkbox"'})," ",s.jsx(a.span,{className:"hljs-attr",children:"id"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"consent"'})," ",s.jsx(a.span,{className:"hljs-attr",children:"name"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"consent"'})," />"]}),`
      `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"label"})," ",s.jsx(a.span,{className:"hljs-attr",children:"for"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"consent"'}),">"]}),`Zgadzam się na przetwarzanie danych osobowych</label
      >`,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"br"})," />"]}),s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"br"})," />"]}),`

      `,s.jsxs(a.span,{className:"hljs-tag",children:["<",s.jsx(a.span,{className:"hljs-name",children:"input"})," ",s.jsx(a.span,{className:"hljs-attr",children:"type"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"submit"'})," ",s.jsx(a.span,{className:"hljs-attr",children:"value"}),"=",s.jsx(a.span,{className:"hljs-string",children:'"Wyślij"'})," />"]}),`
    `,s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"form"}),">"]}),`
  `,s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"body"}),">"]}),`
`,s.jsxs(a.span,{className:"hljs-tag",children:["</",s.jsx(a.span,{className:"hljs-name",children:"html"}),">"]}),`
`]})})]}),`
`,s.jsx(a.p,{children:"To tyle na temat podstaw HTML! Zachęcam do dalszego eksperymentowania i zgłębiania tego tematu, aby tworzyć bardziej złożone i interaktywne strony internetowe."})]})}function S(e={}){const{wrapper:a}=e.components||{};return a?s.jsx(a,{...e,children:s.jsx(t,{...e})}):t(e)}const W=Object.freeze(Object.defineProperty({__proto__:null,default:S,frontmatter:v},Symbol.toStringTag,{value:"Module"})),T={title:"Wprowadzenie do JavaScript",description:"JavaScript jest językiem programowania, który jest powszechnie stosowany do tworzenia dynamicznych i interaktywnych stron internetowych. W tym kursie omówimy podstawy JavaScript, w tym zmienne, typy danych, operatory, struktury kontrolne, funkcje oraz obiekty.",keywords:["javascript","kurs","wprowadzenie","przewodnik","web","frontend"],categories:["wprowadzenie","javascript"],createdAt:"2024-06-30"};function d(e){const a={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",span:"span",...e.components};return s.jsxs(s.Fragment,{children:[s.jsx(a.p,{children:"JavaScript jest językiem programowania, który jest powszechnie stosowany do tworzenia dynamicznych i interaktywnych stron internetowych. W tym kursie omówimy podstawy JavaScript, w tym zmienne, typy danych, operatory, struktury kontrolne, funkcje oraz obiekty."}),`
`,s.jsx(a.h2,{children:"Zmienne"}),`
`,s.jsxs(a.p,{children:["Zmienne w JavaScript mogą być deklarowane za pomocą ",s.jsx(a.code,{children:"var"}),", ",s.jsx(a.code,{children:"let"})," i ",s.jsx(a.code,{children:"const"}),"."]}),`
`,s.jsx(a.h3,{children:"Przykłady:"}),`
`,s.jsx(a.pre,{children:s.jsxs(a.code,{className:"hljs language-javascript",children:[s.jsx(a.span,{className:"hljs-keyword",children:"var"})," x = ",s.jsx(a.span,{className:"hljs-number",children:"5"}),"; ",s.jsx(a.span,{className:"hljs-comment",children:"// Deklaracja zmiennej za pomocą var"}),`
`,s.jsx(a.span,{className:"hljs-keyword",children:"let"})," y = ",s.jsx(a.span,{className:"hljs-number",children:"10"}),"; ",s.jsx(a.span,{className:"hljs-comment",children:"// Deklaracja zmiennej za pomocą let"}),`
`,s.jsx(a.span,{className:"hljs-keyword",children:"const"})," z = ",s.jsx(a.span,{className:"hljs-number",children:"15"}),"; ",s.jsx(a.span,{className:"hljs-comment",children:"// Deklaracja stałej za pomocą const"}),`
`]})}),`
`,s.jsx(a.h2,{children:"Typy danych"}),`
`,s.jsx(a.p,{children:"JavaScript obsługuje różne typy danych, w tym liczby, łańcuchy znaków (string), boolean, obiekty i tablice."}),`
`,s.jsx(a.h3,{children:"Przykłady:"}),`
`,s.jsx(a.pre,{children:s.jsxs(a.code,{className:"hljs language-javascript",children:[s.jsx(a.span,{className:"hljs-keyword",children:"let"})," liczba = ",s.jsx(a.span,{className:"hljs-number",children:"42"}),"; ",s.jsx(a.span,{className:"hljs-comment",children:"// Typ danych: Number"}),`
`,s.jsx(a.span,{className:"hljs-keyword",children:"let"})," tekst = ",s.jsx(a.span,{className:"hljs-string",children:'"Hello, World!"'}),"; ",s.jsx(a.span,{className:"hljs-comment",children:"// Typ danych: String"}),`
`,s.jsx(a.span,{className:"hljs-keyword",children:"let"})," prawda = ",s.jsx(a.span,{className:"hljs-literal",children:"true"}),"; ",s.jsx(a.span,{className:"hljs-comment",children:"// Typ danych: Boolean"}),`
`,s.jsx(a.span,{className:"hljs-keyword",children:"let"})," obiekt = { ",s.jsx(a.span,{className:"hljs-attr",children:"imie"}),": ",s.jsx(a.span,{className:"hljs-string",children:'"Jan"'}),", ",s.jsx(a.span,{className:"hljs-attr",children:"wiek"}),": ",s.jsx(a.span,{className:"hljs-number",children:"30"})," }; ",s.jsx(a.span,{className:"hljs-comment",children:"// Typ danych: Object"}),`
`,s.jsx(a.span,{className:"hljs-keyword",children:"let"})," tablica = [",s.jsx(a.span,{className:"hljs-number",children:"1"}),", ",s.jsx(a.span,{className:"hljs-number",children:"2"}),", ",s.jsx(a.span,{className:"hljs-number",children:"3"}),", ",s.jsx(a.span,{className:"hljs-number",children:"4"}),", ",s.jsx(a.span,{className:"hljs-number",children:"5"}),"]; ",s.jsx(a.span,{className:"hljs-comment",children:"// Typ danych: Array"}),`
`]})}),`
`,s.jsx(a.h2,{children:"Operatory"}),`
`,s.jsx(a.p,{children:"Operatory w JavaScript obejmują arytmetyczne, porównania, logiczne i przypisania."}),`
`,s.jsx(a.h3,{children:"Przykłady:"}),`
`,s.jsx(a.pre,{children:s.jsxs(a.code,{className:"hljs language-javascript",children:[s.jsx(a.span,{className:"hljs-comment",children:"// Operatory arytmetyczne"}),`
`,s.jsx(a.span,{className:"hljs-keyword",children:"let"})," suma = ",s.jsx(a.span,{className:"hljs-number",children:"10"})," + ",s.jsx(a.span,{className:"hljs-number",children:"5"}),"; ",s.jsx(a.span,{className:"hljs-comment",children:"// Dodawanie"}),`
`,s.jsx(a.span,{className:"hljs-keyword",children:"let"})," roznica = ",s.jsx(a.span,{className:"hljs-number",children:"10"})," - ",s.jsx(a.span,{className:"hljs-number",children:"5"}),"; ",s.jsx(a.span,{className:"hljs-comment",children:"// Odejmowanie"}),`
`,s.jsx(a.span,{className:"hljs-keyword",children:"let"})," iloczyn = ",s.jsx(a.span,{className:"hljs-number",children:"10"})," * ",s.jsx(a.span,{className:"hljs-number",children:"5"}),"; ",s.jsx(a.span,{className:"hljs-comment",children:"// Mnożenie"}),`
`,s.jsx(a.span,{className:"hljs-keyword",children:"let"})," iloraz = ",s.jsx(a.span,{className:"hljs-number",children:"10"})," / ",s.jsx(a.span,{className:"hljs-number",children:"5"}),"; ",s.jsx(a.span,{className:"hljs-comment",children:"// Dzielenie"}),`

`,s.jsx(a.span,{className:"hljs-comment",children:"// Operatory porównania"}),`
`,s.jsx(a.span,{className:"hljs-keyword",children:"let"})," rowne = ",s.jsx(a.span,{className:"hljs-number",children:"10"})," == ",s.jsx(a.span,{className:"hljs-number",children:"10"}),"; ",s.jsx(a.span,{className:"hljs-comment",children:"// Porównanie wartości"}),`
`,s.jsx(a.span,{className:"hljs-keyword",children:"let"})," identyczne = ",s.jsx(a.span,{className:"hljs-number",children:"10"})," === ",s.jsx(a.span,{className:"hljs-number",children:"10"}),"; ",s.jsx(a.span,{className:"hljs-comment",children:"// Porównanie wartości i typu"}),`
`,s.jsx(a.span,{className:"hljs-keyword",children:"let"})," nierowne = ",s.jsx(a.span,{className:"hljs-number",children:"10"})," != ",s.jsx(a.span,{className:"hljs-number",children:"5"}),"; ",s.jsx(a.span,{className:"hljs-comment",children:"// Nierówność"}),`

`,s.jsx(a.span,{className:"hljs-comment",children:"// Operatory logiczne"}),`
`,s.jsx(a.span,{className:"hljs-keyword",children:"let"})," iOperator = ",s.jsx(a.span,{className:"hljs-literal",children:"true"})," && ",s.jsx(a.span,{className:"hljs-literal",children:"false"}),"; ",s.jsx(a.span,{className:"hljs-comment",children:"// Operator logiczny AND"}),`
`,s.jsx(a.span,{className:"hljs-keyword",children:"let"})," lubOperator = ",s.jsx(a.span,{className:"hljs-literal",children:"true"})," || ",s.jsx(a.span,{className:"hljs-literal",children:"false"}),"; ",s.jsx(a.span,{className:"hljs-comment",children:"// Operator logiczny OR"}),`
`,s.jsx(a.span,{className:"hljs-keyword",children:"let"})," nieOperator = !",s.jsx(a.span,{className:"hljs-literal",children:"true"}),"; ",s.jsx(a.span,{className:"hljs-comment",children:"// Operator logiczny NOT"}),`

`,s.jsx(a.span,{className:"hljs-comment",children:"// Operatory przypisania"}),`
`,s.jsx(a.span,{className:"hljs-keyword",children:"let"})," a = ",s.jsx(a.span,{className:"hljs-number",children:"10"}),`;
a += `,s.jsx(a.span,{className:"hljs-number",children:"5"}),"; ",s.jsx(a.span,{className:"hljs-comment",children:"// Dodanie i przypisanie"}),`
a -= `,s.jsx(a.span,{className:"hljs-number",children:"5"}),"; ",s.jsx(a.span,{className:"hljs-comment",children:"// Odejmowanie i przypisanie"}),`
`]})}),`
`,s.jsx(a.h2,{children:"Struktury kontrolne"}),`
`,s.jsxs(a.h3,{children:["Instrukcja warunkowa ",s.jsx(a.code,{children:"if"})]}),`
`,s.jsxs(a.p,{children:["Instrukcja ",s.jsx(a.code,{children:"if"})," służy do wykonywania kodu warunkowo."]}),`
`,s.jsx(a.pre,{children:s.jsxs(a.code,{className:"hljs language-javascript",children:[s.jsx(a.span,{className:"hljs-keyword",children:"let"})," wiek = ",s.jsx(a.span,{className:"hljs-number",children:"18"}),`;

`,s.jsx(a.span,{className:"hljs-keyword",children:"if"})," (wiek >= ",s.jsx(a.span,{className:"hljs-number",children:"18"}),`) {
  `,s.jsx(a.span,{className:"hljs-variable language_",children:"console"}),".",s.jsx(a.span,{className:"hljs-title function_",children:"log"}),"(",s.jsx(a.span,{className:"hljs-string",children:'"Jesteś pełnoletni"'}),`);
} `,s.jsx(a.span,{className:"hljs-keyword",children:"else"}),` {
  `,s.jsx(a.span,{className:"hljs-variable language_",children:"console"}),".",s.jsx(a.span,{className:"hljs-title function_",children:"log"}),"(",s.jsx(a.span,{className:"hljs-string",children:'"Jesteś niepełnoletni"'}),`);
}
`]})}),`
`,s.jsxs(a.h3,{children:["Pętla ",s.jsx(a.code,{children:"for"})]}),`
`,s.jsxs(a.p,{children:["Pętla ",s.jsx(a.code,{children:"for"})," służy do wykonywania kodu wielokrotnie."]}),`
`,s.jsx(a.pre,{children:s.jsxs(a.code,{className:"hljs language-javascript",children:[s.jsx(a.span,{className:"hljs-keyword",children:"for"})," (",s.jsx(a.span,{className:"hljs-keyword",children:"let"})," i = ",s.jsx(a.span,{className:"hljs-number",children:"0"}),"; i < ",s.jsx(a.span,{className:"hljs-number",children:"5"}),`; i++) {
  `,s.jsx(a.span,{className:"hljs-variable language_",children:"console"}),".",s.jsx(a.span,{className:"hljs-title function_",children:"log"}),`(i);
}
`]})}),`
`,s.jsxs(a.h3,{children:["Pętla ",s.jsx(a.code,{children:"while"})]}),`
`,s.jsxs(a.p,{children:["Pętla ",s.jsx(a.code,{children:"while"})," służy do wykonywania kodu, dopóki warunek jest prawdziwy."]}),`
`,s.jsx(a.pre,{children:s.jsxs(a.code,{className:"hljs language-javascript",children:[s.jsx(a.span,{className:"hljs-keyword",children:"let"})," i = ",s.jsx(a.span,{className:"hljs-number",children:"0"}),`;

`,s.jsx(a.span,{className:"hljs-keyword",children:"while"})," (i < ",s.jsx(a.span,{className:"hljs-number",children:"5"}),`) {
  `,s.jsx(a.span,{className:"hljs-variable language_",children:"console"}),".",s.jsx(a.span,{className:"hljs-title function_",children:"log"}),`(i);
  i++;
}
`]})}),`
`,s.jsx(a.h2,{children:"Funkcje"}),`
`,s.jsx(a.p,{children:"Funkcje pozwalają na grupowanie kodu, który może być wykonywany wielokrotnie."}),`
`,s.jsx(a.h3,{children:"Deklaracja funkcji"}),`
`,s.jsx(a.pre,{children:s.jsxs(a.code,{className:"hljs language-javascript",children:[s.jsx(a.span,{className:"hljs-keyword",children:"function"})," ",s.jsx(a.span,{className:"hljs-title function_",children:"dodaj"}),"(",s.jsx(a.span,{className:"hljs-params",children:"a, b"}),`) {
  `,s.jsx(a.span,{className:"hljs-keyword",children:"return"}),` a + b;
}

`,s.jsx(a.span,{className:"hljs-keyword",children:"let"})," wynik = ",s.jsx(a.span,{className:"hljs-title function_",children:"dodaj"}),"(",s.jsx(a.span,{className:"hljs-number",children:"5"}),", ",s.jsx(a.span,{className:"hljs-number",children:"10"}),`);
`,s.jsx(a.span,{className:"hljs-variable language_",children:"console"}),".",s.jsx(a.span,{className:"hljs-title function_",children:"log"}),"(wynik); ",s.jsx(a.span,{className:"hljs-comment",children:"// 15"}),`
`]})}),`
`,s.jsx(a.h3,{children:"Funkcje strzałkowe"}),`
`,s.jsx(a.p,{children:"Funkcje strzałkowe to krótszy zapis funkcji."}),`
`,s.jsx(a.pre,{children:s.jsxs(a.code,{className:"hljs language-javascript",children:[s.jsx(a.span,{className:"hljs-keyword",children:"const"})," ",s.jsx(a.span,{className:"hljs-title function_",children:"dodaj"})," = (",s.jsx(a.span,{className:"hljs-params",children:"a, b"}),`) => a + b;
`,s.jsx(a.span,{className:"hljs-keyword",children:"let"})," wynik = ",s.jsx(a.span,{className:"hljs-title function_",children:"dodaj"}),"(",s.jsx(a.span,{className:"hljs-number",children:"5"}),", ",s.jsx(a.span,{className:"hljs-number",children:"10"}),`);
`,s.jsx(a.span,{className:"hljs-variable language_",children:"console"}),".",s.jsx(a.span,{className:"hljs-title function_",children:"log"}),"(wynik); ",s.jsx(a.span,{className:"hljs-comment",children:"// 15"}),`
`]})}),`
`,s.jsx(a.h2,{children:"Obiekty"}),`
`,s.jsx(a.p,{children:"Obiekty pozwalają na grupowanie powiązanych wartości i funkcji."}),`
`,s.jsx(a.h3,{children:"Tworzenie obiektu"}),`
`,s.jsx(a.pre,{children:s.jsxs(a.code,{className:"hljs language-javascript",children:[s.jsx(a.span,{className:"hljs-keyword",children:"let"}),` osoba = {
  `,s.jsx(a.span,{className:"hljs-attr",children:"imie"}),": ",s.jsx(a.span,{className:"hljs-string",children:'"Jan"'}),`,
  `,s.jsx(a.span,{className:"hljs-attr",children:"wiek"}),": ",s.jsx(a.span,{className:"hljs-number",children:"30"}),`,
  `,s.jsx(a.span,{className:"hljs-attr",children:"przedstawSie"}),": ",s.jsx(a.span,{className:"hljs-keyword",children:"function"})," (",s.jsx(a.span,{className:"hljs-params"}),`) {
    `,s.jsx(a.span,{className:"hljs-keyword",children:"return"})," ",s.jsxs(a.span,{className:"hljs-string",children:["`Cześć, mam na imię ",s.jsxs(a.span,{className:"hljs-subst",children:["${",s.jsx(a.span,{className:"hljs-variable language_",children:"this"}),".imie}"]})," i mam ",s.jsxs(a.span,{className:"hljs-subst",children:["${",s.jsx(a.span,{className:"hljs-variable language_",children:"this"}),".wiek}"]})," lat.`"]}),`;
  },
};

`,s.jsx(a.span,{className:"hljs-variable language_",children:"console"}),".",s.jsx(a.span,{className:"hljs-title function_",children:"log"}),"(osoba.",s.jsx(a.span,{className:"hljs-title function_",children:"przedstawSie"}),"()); ",s.jsx(a.span,{className:"hljs-comment",children:"// Cześć, mam na imię Jan i mam 30 lat."}),`
`]})}),`
`,s.jsx(a.h2,{children:"Tablice"}),`
`,s.jsx(a.p,{children:"Tablice to struktury danych, które przechowują listę elementów."}),`
`,s.jsx(a.h3,{children:"Tworzenie i manipulacja tablicami"}),`
`,s.jsx(a.pre,{children:s.jsxs(a.code,{className:"hljs language-javascript",children:[s.jsx(a.span,{className:"hljs-keyword",children:"let"})," liczby = [",s.jsx(a.span,{className:"hljs-number",children:"1"}),", ",s.jsx(a.span,{className:"hljs-number",children:"2"}),", ",s.jsx(a.span,{className:"hljs-number",children:"3"}),", ",s.jsx(a.span,{className:"hljs-number",children:"4"}),", ",s.jsx(a.span,{className:"hljs-number",children:"5"}),`];
`,s.jsx(a.span,{className:"hljs-variable language_",children:"console"}),".",s.jsx(a.span,{className:"hljs-title function_",children:"log"}),"(liczby[",s.jsx(a.span,{className:"hljs-number",children:"0"}),"]); ",s.jsx(a.span,{className:"hljs-comment",children:"// 1"}),`

liczby.`,s.jsx(a.span,{className:"hljs-title function_",children:"push"}),"(",s.jsx(a.span,{className:"hljs-number",children:"6"}),"); ",s.jsx(a.span,{className:"hljs-comment",children:"// Dodanie elementu na końcu tablicy"}),`
`,s.jsx(a.span,{className:"hljs-variable language_",children:"console"}),".",s.jsx(a.span,{className:"hljs-title function_",children:"log"}),"(liczby); ",s.jsx(a.span,{className:"hljs-comment",children:"// [1, 2, 3, 4, 5, 6]"}),`

liczby.`,s.jsx(a.span,{className:"hljs-title function_",children:"pop"}),"(); ",s.jsx(a.span,{className:"hljs-comment",children:"// Usunięcie ostatniego elementu z tablicy"}),`
`,s.jsx(a.span,{className:"hljs-variable language_",children:"console"}),".",s.jsx(a.span,{className:"hljs-title function_",children:"log"}),"(liczby); ",s.jsx(a.span,{className:"hljs-comment",children:"// [1, 2, 3, 4, 5]"}),`
`]})}),`
`,s.jsx(a.h2,{children:"Zadania do wykonania"}),`
`,s.jsx(a.h3,{children:"Zadanie 1"}),`
`,s.jsx(a.p,{children:"Napisz funkcję, która przyjmuje dwie liczby jako argumenty i zwraca ich iloczyn."}),`
`,s.jsxs("details",{children:[s.jsx("summary",{children:s.jsx("span",{children:"Pokaż rozwiązanie"})}),s.jsx(a.pre,{children:s.jsxs(a.code,{className:"hljs language-javascript",children:[s.jsx(a.span,{className:"hljs-keyword",children:"function"})," ",s.jsx(a.span,{className:"hljs-title function_",children:"iloczyn"}),"(",s.jsx(a.span,{className:"hljs-params",children:"a, b"}),`) {
  `,s.jsx(a.span,{className:"hljs-keyword",children:"return"}),` a * b;
}

`,s.jsx(a.span,{className:"hljs-keyword",children:"let"})," wynik = ",s.jsx(a.span,{className:"hljs-title function_",children:"iloczyn"}),"(",s.jsx(a.span,{className:"hljs-number",children:"5"}),", ",s.jsx(a.span,{className:"hljs-number",children:"10"}),`);
`,s.jsx(a.span,{className:"hljs-variable language_",children:"console"}),".",s.jsx(a.span,{className:"hljs-title function_",children:"log"}),"(wynik); ",s.jsx(a.span,{className:"hljs-comment",children:"// 50"}),`
`]})})]}),`
`,s.jsx(a.h3,{children:"Zadanie 2"}),`
`,s.jsxs(a.p,{children:["Utwórz obiekt reprezentujący książkę z atrybutami ",s.jsx(a.code,{children:"tytul"}),", ",s.jsx(a.code,{children:"autor"})," i ",s.jsx(a.code,{children:"rok"}),". Następnie dodaj metodę, która zwraca opis książki."]}),`
`,s.jsxs("details",{children:[s.jsx("summary",{children:s.jsx("span",{children:"Pokaż rozwiązanie"})}),s.jsx(a.pre,{children:s.jsxs(a.code,{className:"hljs language-javascript",children:[s.jsx(a.span,{className:"hljs-keyword",children:"let"}),` ksiazka = {
  `,s.jsx(a.span,{className:"hljs-attr",children:"tytul"}),": ",s.jsx(a.span,{className:"hljs-string",children:'"W pustyni i w puszczy"'}),`,
  `,s.jsx(a.span,{className:"hljs-attr",children:"autor"}),": ",s.jsx(a.span,{className:"hljs-string",children:'"Henryk Sienkiewicz"'}),`,
  `,s.jsx(a.span,{className:"hljs-attr",children:"rok"}),": ",s.jsx(a.span,{className:"hljs-number",children:"1911"}),`,
  `,s.jsx(a.span,{className:"hljs-attr",children:"opis"}),": ",s.jsx(a.span,{className:"hljs-keyword",children:"function"})," (",s.jsx(a.span,{className:"hljs-params"}),`) {
    `,s.jsx(a.span,{className:"hljs-keyword",children:"return"})," ",s.jsxs(a.span,{className:"hljs-string",children:["`",s.jsxs(a.span,{className:"hljs-subst",children:["${",s.jsx(a.span,{className:"hljs-variable language_",children:"this"}),".tytul}"]})," to książka napisana przez ",s.jsxs(a.span,{className:"hljs-subst",children:["${",s.jsx(a.span,{className:"hljs-variable language_",children:"this"}),".autor}"]})," w roku ",s.jsxs(a.span,{className:"hljs-subst",children:["${",s.jsx(a.span,{className:"hljs-variable language_",children:"this"}),".rok}"]}),".`"]}),`;
  },
};

`,s.jsx(a.span,{className:"hljs-variable language_",children:"console"}),".",s.jsx(a.span,{className:"hljs-title function_",children:"log"}),"(ksiazka.",s.jsx(a.span,{className:"hljs-title function_",children:"opis"}),"()); ",s.jsx(a.span,{className:"hljs-comment",children:"// W pustyni i w puszczy to książka napisana przez Henryk Sienkiewicz w roku 1911."}),`
`]})})]}),`
`,s.jsx(a.h3,{children:"Zadanie 3"}),`
`,s.jsx(a.p,{children:"Napisz funkcję, która przyjmuje tablicę liczb i zwraca największą liczbę z tej tablicy."}),`
`,s.jsxs("details",{children:[s.jsx("summary",{children:s.jsx("span",{children:"Pokaż rozwiązanie"})}),s.jsx(a.pre,{children:s.jsxs(a.code,{className:"hljs language-javascript",children:[s.jsx(a.span,{className:"hljs-keyword",children:"function"})," ",s.jsx(a.span,{className:"hljs-title function_",children:"znajdzNajwieksza"}),"(",s.jsx(a.span,{className:"hljs-params",children:"tablica"}),`) {
  `,s.jsx(a.span,{className:"hljs-keyword",children:"let"})," najwieksza = tablica[",s.jsx(a.span,{className:"hljs-number",children:"0"}),`];
  `,s.jsx(a.span,{className:"hljs-keyword",children:"for"})," (",s.jsx(a.span,{className:"hljs-keyword",children:"let"})," i = ",s.jsx(a.span,{className:"hljs-number",children:"1"}),"; i < tablica.",s.jsx(a.span,{className:"hljs-property",children:"length"}),`; i++) {
    `,s.jsx(a.span,{className:"hljs-keyword",children:"if"}),` (tablica[i] > najwieksza) {
      najwieksza = tablica[i];
    }
  }
  `,s.jsx(a.span,{className:"hljs-keyword",children:"return"}),` najwieksza;
}

`,s.jsx(a.span,{className:"hljs-keyword",children:"let"})," liczby = [",s.jsx(a.span,{className:"hljs-number",children:"1"}),", ",s.jsx(a.span,{className:"hljs-number",children:"2"}),", ",s.jsx(a.span,{className:"hljs-number",children:"3"}),", ",s.jsx(a.span,{className:"hljs-number",children:"4"}),", ",s.jsx(a.span,{className:"hljs-number",children:"5"}),`];
`,s.jsx(a.span,{className:"hljs-variable language_",children:"console"}),".",s.jsx(a.span,{className:"hljs-title function_",children:"log"}),"(",s.jsx(a.span,{className:"hljs-title function_",children:"znajdzNajwieksza"}),"(liczby)); ",s.jsx(a.span,{className:"hljs-comment",children:"// 5"}),`
`]})})]}),`
`,s.jsx(a.h3,{children:"Zadanie 4"}),`
`,s.jsxs(a.p,{children:["Utwórz tablicę, która zawiera kilka imion. Następnie użyj pętli ",s.jsx(a.code,{children:"for"}),", aby wyświetlić każde imię w konsoli."]}),`
`,s.jsxs("details",{children:[s.jsx("summary",{children:s.jsx("span",{children:"Pokaż rozwiązanie"})}),s.jsx(a.pre,{children:s.jsxs(a.code,{className:"hljs language-javascript",children:[s.jsx(a.span,{className:"hljs-keyword",children:"let"})," imiona = [",s.jsx(a.span,{className:"hljs-string",children:'"Jan"'}),", ",s.jsx(a.span,{className:"hljs-string",children:'"Anna"'}),", ",s.jsx(a.span,{className:"hljs-string",children:'"Krzysztof"'}),", ",s.jsx(a.span,{className:"hljs-string",children:'"Maria"'}),`];

`,s.jsx(a.span,{className:"hljs-keyword",children:"for"})," (",s.jsx(a.span,{className:"hljs-keyword",children:"let"})," i = ",s.jsx(a.span,{className:"hljs-number",children:"0"}),"; i < imiona.",s.jsx(a.span,{className:"hljs-property",children:"length"}),`; i++) {
  `,s.jsx(a.span,{className:"hljs-variable language_",children:"console"}),".",s.jsx(a.span,{className:"hljs-title function_",children:"log"}),`(imiona[i]);
}
`,s.jsx(a.span,{className:"hljs-comment",children:"// Jan"}),`
`,s.jsx(a.span,{className:"hljs-comment",children:"// Anna"}),`
`,s.jsx(a.span,{className:"hljs-comment",children:"// Krzysztof"}),`
`,s.jsx(a.span,{className:"hljs-comment",children:"// Maria"}),`
`]})})]}),`
`,s.jsx(a.p,{children:"To tyle na temat podstaw JavaScript! Zachęcam do dalszego eksperymentowania i zgłębiania tego tematu, aby tworzyć bardziej zaawansowane i interaktywne aplikacje."})]})}function O(e={}){const{wrapper:a}=e.components||{};return a?s.jsx(a,{...e,children:s.jsx(d,{...e})}):d(e)}const Z=Object.freeze(Object.defineProperty({__proto__:null,default:O,frontmatter:T},Symbol.toStringTag,{value:"Module"}));export{M as _,P as a,D as b,I as c,U as d,L as e,E as f,W as g,Z as h};
