const t=JSON.parse('{"key":"v-206df2d9","path":"/MyNotes/Java%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86.html","title":"Java基础知识","lang":"zh-CN","frontmatter":{"icon":"/icon/java-light.svg","date":"2023-10-02T00:00:00.000Z","category":["计算机语言"],"footer":"下雨能躲，机智如我。","tag":["Java"],"description":"Java基础知识 static 简介 static叫静态可以修饰成员变量，成员方法，有static修饰，属于类，会被类的全部对象共享，会随类的加载而加载。没有被static修饰的变量叫实例变量。实例变量是属于对象的，每个对象的实例变量都不同，会随对象的加载而加载。被static修饰的方法，可以通过 类名.方法名 调用。没有被修饰的方法只能通过 对象名.方法名 调用。如果某个类中的所有方法都是static修饰的我们叫该类为工具类。 问：为什么静态方法中不能引用实例变量？ 答:因为实例变量属于对象，而类中还没有实例化对象，所以找不到该变量。","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/MyNotes/Java%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86.html"}],["meta",{"property":"og:site_name","content":"TenSoFlowBlog"}],["meta",{"property":"og:title","content":"Java基础知识"}],["meta",{"property":"og:description","content":"Java基础知识 static 简介 static叫静态可以修饰成员变量，成员方法，有static修饰，属于类，会被类的全部对象共享，会随类的加载而加载。没有被static修饰的变量叫实例变量。实例变量是属于对象的，每个对象的实例变量都不同，会随对象的加载而加载。被static修饰的方法，可以通过 类名.方法名 调用。没有被修饰的方法只能通过 对象名.方法名 调用。如果某个类中的所有方法都是static修饰的我们叫该类为工具类。 问：为什么静态方法中不能引用实例变量？ 答:因为实例变量属于对象，而类中还没有实例化对象，所以找不到该变量。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://mister-hope.github.io/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-10-17T05:56:00.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"Java基础知识"}],["meta",{"property":"article:author","content":"TenSoFlow"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:published_time","content":"2023-10-02T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-10-17T05:56:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java基础知识\\",\\"image\\":[\\"https://mister-hope.github.io/\\"],\\"datePublished\\":\\"2023-10-02T00:00:00.000Z\\",\\"dateModified\\":\\"2023-10-17T05:56:00.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"TenSoFlow\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"static","slug":"static","link":"#static","children":[]},{"level":2,"title":"修饰符","slug":"修饰符","link":"#修饰符","children":[]},{"level":2,"title":"面向对象三大特征","slug":"面向对象三大特征","link":"#面向对象三大特征","children":[]},{"level":2,"title":"静态代码块","slug":"静态代码块","link":"#静态代码块","children":[]},{"level":2,"title":"Java == 和 equals()","slug":"java-和-equals","link":"#java-和-equals","children":[]},{"level":2,"title":"Java hashCode()方法","slug":"java-hashcode-方法","link":"#java-hashcode-方法","children":[]},{"level":2,"title":"Java 枚举","slug":"java-枚举","link":"#java-枚举","children":[]},{"level":2,"title":"Java 异常","slug":"java-异常","link":"#java-异常","children":[{"level":3,"title":"处理方式","slug":"处理方式","link":"#处理方式","children":[]},{"level":3,"title":"throw","slug":"throw","link":"#throw","children":[]},{"level":3,"title":"throws","slug":"throws","link":"#throws","children":[]},{"level":3,"title":"自定义异常类","slug":"自定义异常类","link":"#自定义异常类","children":[]}]},{"level":2,"title":"Java 集合","slug":"java-集合","link":"#java-集合","children":[{"level":3,"title":"单列集合","slug":"单列集合","link":"#单列集合","children":[]},{"level":3,"title":"双列集合","slug":"双列集合","link":"#双列集合","children":[]}]},{"level":2,"title":"Java UUID","slug":"java-uuid","link":"#java-uuid","children":[]},{"level":2,"title":"Java 正则表达式","slug":"java-正则表达式","link":"#java-正则表达式","children":[]},{"level":2,"title":"Java Stream","slug":"java-stream","link":"#java-stream","children":[]},{"level":2,"title":"Java 创建不可变集合","slug":"java-创建不可变集合","link":"#java-创建不可变集合","children":[]},{"level":2,"title":"Java Optional","slug":"java-optional","link":"#java-optional","children":[]},{"level":2,"title":"Java 泛型","slug":"java-泛型","link":"#java-泛型","children":[]},{"level":2,"title":"Java 位运算与位移运算","slug":"java-位运算与位移运算","link":"#java-位运算与位移运算","children":[]},{"level":2,"title":"Other","slug":"other","link":"#other","children":[]}],"git":{"createdTime":1697522160000,"updatedTime":1697522160000,"contributors":[{"name":"TenSoFlow","email":"1413468037@qq.com","commits":1}]},"readingTime":{"minutes":14.67,"words":4401},"filePathRelative":"MyNotes/Java基础知识.md","localizedDate":"2023年10月2日","excerpt":"<h1> Java基础知识</h1>\\n<h2> static</h2>\\n<p><b style=\\"color:#3e547d\\"><strong>简介</strong></b></p>\\n<p>static叫静态可以修饰成员变量，成员方法，有static修饰，属于类，会被类的全部对象共享，会随类的加载而加载。没有被static修饰的变量叫实例变量。实例变量是属于对象的，每个对象的实例变量都不同，会随对象的加载而加载。被static修饰的方法，可以通过 类名.方法名 调用。没有被修饰的方法只能通过 对象名.方法名 调用。如果某个类中的所有方法都是static修饰的我们叫该类为工具类。</p>\\n<details class=\\"hint-container details\\"><summary><b style=\\"color:#bf3e73\\">问：为什么静态方法中不能引用实例变量？</b></summary>\\n<p><b style=\\"color:#f19977\\"><strong>答:因为实例变量属于对象，而类中还没有实例化对象，所以找不到该变量。</strong></b></p>\\n</details>","copyright":{"author":"TenSoFlower","license":"MIT协议"},"autoDesc":true}');export{t as data};
