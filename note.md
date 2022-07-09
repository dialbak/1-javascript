###### Un moteur JavaScript

- Est un programme informatique auquel vous donnez du code JavaScript et il indique à l'ordinateur comment l'exécuter.
- Il existe de nombreux moteurs JavaScript et ils sont généralement créés par des fournisseurs de navigateurs web. V8
  engine

###### V8 Engine

- Est un moteur JavaScript écris en C++ et utilisé dans le navigateur Chrome et alimente Node JS. Il combine 2 parties,
  interpreter et compiler

###### Interpreter

- Consiste à prendre un bout de code ou un ensemble d'instruction et à l'exécuter

###### Compiler (traducteur)

- Un language compiler est traduit le code en language machine de bas niveau
- Typescript est un sur-ensemble de Javascript qui se compile en Javascript.
- Babel est un compilateur Js qui prend le code JS moderne et renvoie du JS compatible avec le navigateur (ancien code
  JS).

###### Parser

- Est le processus d'analyse du code source, de vérification des erreurs et de décomposition en parties.

###### À éviter d'utiliser

• eval()
• arguments • for in • with • delete

###### Gestion des arguments

- Il existe de nombreuses façons d'utiliser des arguments qui peuvent rendre un function non optimisable. Soyez très
  prudent lorsque vous utilisez des arguments et rappelez-vous :

Moyens sûrs d'utiliser les arguments

• arguments.length • arguments[i] lorsque i est un entier valide • N'utilisez JAMAIS d'arguments directement
sans `.length` ou [i]
• STRICTEMENT fn.apply(y, arguments) est correct

###### Garbage Collection

- Dans Javascript c'est automatique, pas besoin de s'en occuper, les languages comme le "C" on le gère manuellement, on
  peut donc l'optimiser et avoir une exécution très rapide,

###### Synchronous

- Dans un langage synchrone, une seule chose peut être faite à la fois.
  `concurrency` et `event loop` répondent à ce problème pour ne pas bloquer l'application le temps d'une requête par
  exemple

###### Event Loop and Callback Queue

- Le rôle de event loop est de déplacer les éléments de la callback queue dans la pile d'exécution JS
- lorsque cette dernière est vide. ça permet d'ajouter de l'asynchrone a javascript qui est single thread

###### Le Hoisting

- Fait référence au processus par lequel l'interpréteur déplace les déclarations de fonctions, de variables ou de
  classes vers le haut de leur portée, avant l'exécution du code. Ça permet d'utiliser les fonctions en toute sécurité
  dans le code avant d'être déclarées.

###### Un environnement lexical

- Est essentiellement la portée ou l'environnement dans lequel le moteur lit actuellement le code. Un nouvel
  environnement lexical est créé lorsque des crochets `{}, {{...}}` sont utilisés, Le champ d'application lexical
  détermine les variables disponibles.

###### let const var

- Lorsqu'on rentre dans un scope lexicale, le contexte d'exécution est créé, le moteur alloue de la mémoire pour
  n'importe quelle variable `var` de cette étendue et l'initialise à `undefined`.
- Les variables `let, const` ne sont initialisé que sur la ligne sur laquelle elles sont exécutées et sont
  allouées `undefined` que s'il n'y a pas de valeur

###### console.log(this)

Si j'exécute un fichier avec seulement cette ligne ça va me retourner l'objet global `Window {}`

###### Undefined vs Null

- Undefined est l'absence de definition, il n'a pas encore été défini, et null est l'absence de valeur, il n'y a pas de
  valeur.

###### Objects

- Les objets sont l'un des types les plus larges en JavaScript, presque "tout" est un objet.

###### Primitives vs Non primitives

- Les valeurs de Primitives sont définies en étant immuables, elles ne peuvent pas être modifiées.
- Les Primitives sont passées par valeur, ce qui signifie que leurs valeurs sont copiées puis placées ailleurs dans la
  mémoire. Ils sont également comparés en valeur.

` string number bigint boolean null undefined symbol`

###### Objects

- Les objets peuvent être mutés et leurs propriétés sont passés par référence, ce qui signifie que leurs propriétés ne
  sont pas stockés séparément en mémoire.
- Une nouvelle variable pointant vers un objet ne créera pas de copie, mais fera référence à l'emplacement mémoire de l'
  objet original.

###### Shallow copy

- Une copie en bits d'un objet. Un nouvel objet est créé qui a une copie exacte des valeurs de l'objet d'origine. Si
  l'un des champs de l'objet est une référence à d'autres objets, seules les adresses de référence sont copiées,
  c'est-à-dire que seule l'adresse mémoire est copiée.

###### Deep copy

- Copie tous les champs et fait des copies de la mémoire allouée dynamiquement pointée par les champs. Une copie
  profonde se produit lorsqu'un objet est copié avec les objets auxquels il fait référence.

  `Il faut faire attention quand on copie des objets`

###### Type Coercion

- La coercition de type est le processus de conversion d'un type de valeur en un autre. Il existe 3 types de conversion
  en JavaScript.

  `• to stringx • to boolean • to number`

```javascript
let num = 1;
let str = "1";
num == str; // true

// Utilisez toujours 3 égaux sauf si vous avez une bonne raison d'utiliser 2.
```

###### Prototype vs __proto__

- Prototype est une propriété d'un objet Function. C'est le prototype d'objets construits par cette fonction. __proto__
  est une propriété interne d'un objet, pointant vers son prototype. Les normes actuelles fournissent un objet
  équivalent.

###### Higher Order Functions

A Higher Order FuncBon (HOF) Est un function qui prend un funcBon comme argument ou renvoie un autre function. Il existe
3 types de functions en JavaScript. • function ()
• function (a,b)
• function hof() { return function () {} }

###### DRY

- Don't repeat your self

###### Closjure

- On appelle closure (ou « fermeture » en français) une fonction interne qui va pouvoir continuer d’accéder à des
  variables définies dans la fonction externe à laquelle elle appartient même après que cette fonction externe ait été
  exécutée

###### Encapsulation

- Signifie le restriction de l'accès direct à certains composants d'un objet. Il cache autant que possible les parties
  internes d'un objet et n'expose que les parties nécessaires pour fonctionner.

  Sécurité - Accès contrôlé Masquer ImplementaBon et exposer les comportements Couplage faible - Modifier
  l'implementaBon à n'importe quel moment

###### PILIERS DE OOP

- Organise le code en containers qui se rapportent les uns aux autres et le rend plus facile à entretenir et à
  réutiliser.

- Abstraction - Cache la complexité à l'utilisateur en faisant la méthode calculaBons dans les coulisses.

- Héritage - Donne les propriétés d'une classe à une autre classe, en gardant le code DRY et en économisant de l'espace
  mémoire.

- Polymorphisme - La capacité d'un objet à prendre de nombreuses formes permettant aux méthodes d'être utilisées
  différemment par différentes classes.

###### Inconvenients OOP

- Fort couplage du code, (ce à quoi répond spring, injection de dépendance et Inversion de control )

###### Pure functions

- Pas d'effet de bord secondaire sur quoi que ce soit en dehors de celui-ci
- Il affichera toujours la même valeur.
- Il n'est pas possible d'avoir 100% de function purs
- Construisez beaucoup de fongBons purs très petits, réutilisables et prévisibles qui font ce qui suit :
- Effectuez 1 tâche par funcBon. • Ne muter pas à l'état.
- Ne partagez pas state.
- Retournez quelque chose.

###### Idempotence

- Idempotence est un autre élément important de la programmation functionnel. C'est l'idée qu'en étant donné la même
  entrée à un function, vous retournerez toujours la même sortie. Le function pourrait être utilisé encore et encore et
  rien ne change. C'est ainsi que vous rendez votre code prévisible (predictable).

###### Imperative vs Declarative

- La programmation imperative indique à l'ordinateur ce qu'il doit faire et comment le terminer.
- La programmation Declarative dit à l'ordinateur quoi faire mais pas comment faire

###### Immutability

- L'immutabilité est tout simplement ne pas modifier la donnée ou son état d'origine.
- Nous devrions créer des copies du state à l'intérieur de nos functions et retournent une nouvelle version de l'état.

###### Modules

Sont des morceaux de code, regroupés, qui peuvent être combinés pour créer un programme extensible qui peut s'agrandir au besoin.

##### Errors handling 

- Apprendre à gérer les erreurs fait de vous un programmeur plus important. 
- En prenant vos programmes, vous avez la possibilité d'utiliser le mot-clé `throw` pour arrêter le programme et gérer 
une erreur en utilisant un bloc `try/catch` qui a un bloc optional `finally` ou la méthode `.catch()` pour le code 
asynchrone. Lancer une nouvelle erreur dans le code asynchrone permet ce qu'on appelle un échec silencieux 
- S'il n'y a pas d'instruction catch placée dans le code, runtime créera  `onerror()` et nous verrons le message 
d'erreur JavaScript intégré en rouge.





