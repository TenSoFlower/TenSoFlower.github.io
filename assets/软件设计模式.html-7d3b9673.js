import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,b as e}from"./app-aaac123c.js";const t="/assets/1696297343658-249b9fd8.png",p="/assets/1696297282499-12894935.png",o={},c=e('<h1 id="软件设计模式" tabindex="-1"><a class="header-anchor" href="#软件设计模式" aria-hidden="true">#</a> 软件设计模式</h1><p><b style="color:#3e547d;"><strong>简介</strong></b></p><p>设计模式(Design Pattern)是一套面向对象的代码设计经验总结，是在编程领域被反复使用，被多人知晓，而且经过分类整理的代码设计方法。设计模式的奠基人GoF又称&quot;四人帮&quot;。设计模式是一种思想也是一种技术，其思想上的成分要占大多数，一种设计模式就是一种解决方案。设计模式是一种理论与实践相融合的知识，好比修理电路的人需要掌握与电路有关的理论知识，还要会使用专业的电气工具。设计模式就是开发软件的专业工具。</p><p>​</p><h2 id="为什么要学设计模式" tabindex="-1"><a class="header-anchor" href="#为什么要学设计模式" aria-hidden="true">#</a> 为什么要学设计模式</h2><p><strong>个人觉得设计模式传授的是一种思想，是一类而不是一种解决方案，是一种脱离语言的编程习惯。<strong>如何写出</strong>简洁优雅，可复用性高，可扩展性强，高内聚低耦合</strong>的代码至关重要。你用毫无逻辑无规则的代码解决了某个问题，看似你成功了，但我认为这没什么了不起，我们需要的是解决这类问题的通解以及最优解，这是我所追求的，相信您也一样。学习别人的设计模式就是为了在没有经验的情况下写出一手不错的代码，只看不写并不能深刻体验到设计模式的巧妙之处。<strong>设计模式讲的是别人千锤百炼出来的精华</strong>，如果有那么一天你再次看设计模式觉得，这些没什么特别的，那么说明你已经走上正轨，你的编程习惯已经向设计模式靠拢了。</p><h2 id="前提条件" tabindex="-1"><a class="header-anchor" href="#前提条件" aria-hidden="true">#</a> 前提条件</h2><p>学习软件设计模式之前我们首先需要<strong>了解UML类图</strong>，至少要能看懂，有个别的设计模式是很难懂的，需要我们借助类图来帮助我们更好的分析其思想。当然我相信您也可以只通过繁琐的代码看懂，但是我想说的是人和动物最本质的区别就是人会使用工具去解决问题。具体UML类图的介绍我放在了<strong>博文</strong>笔记中。</p><h2 id="六大基本原则" tabindex="-1"><a class="header-anchor" href="#六大基本原则" aria-hidden="true">#</a> 六大基本原则</h2><h3 id="单一职责原则" tabindex="-1"><a class="header-anchor" href="#单一职责原则" aria-hidden="true">#</a> 单一职责原则</h3><p><b style="color:#3e547d;"><strong>问题</strong></b></p><p>让一个类非常强大，使其变得像超人一样，看起来固然很好。什么问题都能解决，听起来也不错。但是事情没有那么容易，如果有一天我们发现这个超人类中有一项功能设计的看起来似乎不是很完美，需要对其进行改造，那么在其改造期间，其它需要用到超人类的地方就会跟着停止。如此一来会造成很多功能不能使用，甚至整个项目不能运行。</p><p><b style="color:#3e547d;"><strong>理念</strong></b></p><p>如何解决上述问题呢？答案显而易见就是不要使其功能特别强大，既然是超人职责就是维护世界和平就好了，至于帮别人除草等工作应该给相应的人去做。</p><p><b style="color:#3e547d;"><strong>定义</strong></b></p><p>对于一个类，应该只有一个引起它变化的原因。比如一个类如果既负责接受用户发来的信息也能对用户发来的信息进行记录。那么这就有两个能引起它变化的原因，一个是用户发来信息的结构改变一个是数据库的表结构改变。这就不满足单一职责原则。</p><div class="hint-container warning"><p class="hint-container-title">注意</p><p><b style="color:#8f71e0;">有时候可能业务需求有改动，使得类不满足单一职责原则。有一种原则就是类中方法数量足够少，有足够简单的逻辑，就可以在代码上违反单一职责原则。否则就不要违反。</b></p></div><h3 id="里氏替换原则" tabindex="-1"><a class="header-anchor" href="#里氏替换原则" aria-hidden="true">#</a> 里氏替换原则</h3><p><b style="color:#3e547d;"><strong>简介</strong></b></p><p>里氏替换原则(Liskov Substitution Principle , LSP)反映了父类和子类的关系，是面向对象设计中最重要也是最基本的原则之一，是对实现类的抽象化的实施步骤的规范。其使得使用父类类型的模块在无需修改的情况下，就可以通过使用不同的子类得到扩展。</p><p><b style="color:#3e547d;"><strong>定义</strong></b></p><p>子类型必须能够替换掉它们的父类型。既子类型拥有父类型所有的属性和方法同时还有自己特别的属性和方法。</p><p><b style="color:#3e547d;"><strong>比喻</strong></b></p><p>你有的我都有，我有的你没有。</p><h3 id="开放封闭原则" tabindex="-1"><a class="header-anchor" href="#开放封闭原则" aria-hidden="true">#</a> 开放封闭原则</h3><p><b style="color:#3e547d;"><strong>简介</strong></b></p><p>开放封闭原则是面向对象开发中所有设计原则的核心。</p><p><b style="color:#3e547d;"><strong>思想</strong></b></p><p>如果要实现一个新的功能，添加一个新类来完成往往要比修改现有的类更加方便和安全。</p><p><b style="color:#3e547d;"><strong>定义</strong></b></p><p>程序的实体对象(模块，类，函数等)应该可以进行扩展，但不应该可以修改。</p><p><b style="color:#3e547d;"><strong>特征</strong></b></p><p>对于扩展是开放的，对于修改是封闭的。</p><h3 id="依赖倒转原则" tabindex="-1"><a class="header-anchor" href="#依赖倒转原则" aria-hidden="true">#</a> 依赖倒转原则</h3><p><b style="color:#3e547d;"><strong>简介</strong></b></p><p>依赖倒转原则就是面向对象设计的主要机制，会给系统带来可以灵活扩展的好处。</p><p><b style="color:#3e547d;"><strong>定义</strong></b></p><p>程序的高层模块不应该依赖于底层模块，但两者都应依赖于抽象，抽象不应该依赖于具体细节，而细节应该依赖于抽象。表达的意思是面向接口编程，而不是针对实现编程。</p><p><b style="color:#3e547d;"><strong>本质</strong></b></p><p>通过抽象使各个类或模块的实现彼此独立不会互相影响从而实现模块间的松散耦合。</p><p><b style="color:#3e547d;"><strong>规范</strong></b></p><p>每个类尽量都继承自接口或抽象类，或者抽象类和接口两者都具备。</p><p>变量的显示类型尽量是接口或者抽象类。</p><p>尽量不要覆盖基类的方法。如果基类是一个抽象类，而且这个方法已经实现，子类就尽量不要覆盖。</p><h3 id="合成复用原则" tabindex="-1"><a class="header-anchor" href="#合成复用原则" aria-hidden="true">#</a> 合成复用原则</h3><p><b style="color:#3e547d;"><strong>简介</strong></b></p><p>合成和聚合都是关联关系的特殊种类，合成本质上是值的聚合，而我们所说的聚合是引用的聚合。有两种方法可以实现复用，一是通过合成聚合，第二种是继承。</p><p><b style="color:#3e547d;"><strong>定义</strong></b></p><p>尽量不使用类继承，而尽量使用合成聚合</p><p><b style="color:#3e547d;"><strong>基础</strong></b></p><p><b style="color:#6E8B74;">聚合：</b></p><p>聚合关系是一种Has-a关系，假设有两个类A与B，A包含B，B是A的成员变量，聚合关系和关联关系都体现在成员变量，它们的区别在于，关联关系双方是平级的，是个体和个体的关系，聚合关系双方不是平级的，是整体和部分的关系。</p><p>在UML中聚合关系用下边的符号表示：</p><figure><img src="'+t+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><b style="color:#6E8B74;"><strong>组合：</strong></b></p><p>组合关系是一种强聚合的关系，组合关系与聚合关系的区别在于：聚合关系中部分离开整体仍存活，组合关系中部分离开整体没有意义，比如：人由身体，四肢等部分组成，他们的关系为组合关系。</p><p>在UML中组合关系用下边的符号表示：</p><figure><img src="'+p+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="迪米特法则" tabindex="-1"><a class="header-anchor" href="#迪米特法则" aria-hidden="true">#</a> 迪米特法则</h3><p><b style="color:#3e547d;"><strong>简介</strong></b></p><p>迪米特原则也被称作最少知识原则，就是说一个对象应当尽可能少地了解其他对象-不和陌生人说话。</p><p><b style="color:#3e547d;"><strong>定义</strong></b></p><p>如果两个类之间不必直接通信，则这两个类不应该发生直接的相互作用。如果其中的一个类需要调用另一个类的某个方法，可以通过第三方来转发这个调用。</p><h2 id="_23种设计模式" tabindex="-1"><a class="header-anchor" href="#_23种设计模式" aria-hidden="true">#</a> 23种设计模式</h2><h3 id="创建型模式" tabindex="-1"><a class="header-anchor" href="#创建型模式" aria-hidden="true">#</a> 创建型模式</h3><p><b style="color:#3e547d;"><strong>单例模式</strong></b></p><p>单例模式确保类只有一个实例，并提供全局访问点以访问该实例。这种模式的目的是控制类的实例化过程，确保一个类只有一个实例，并提供一种访问该实例的方法</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>ctg</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * 1. @ClassDescription:
 * 2. @author: TenSoFlow
 * 3. @date: 2024年03月05日 21:29
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Singleton</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">Singleton</span> instance<span class="token punctuation">;</span>

    <span class="token comment">// 私有构造函数，防止外部实例化</span>
    <span class="token keyword">private</span> <span class="token class-name">Singleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

    <span class="token comment">// 公共静态方法，用于获取单例实例</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Singleton</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>instance <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            instance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Singleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> instance<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 示例方法</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">showMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Hello, I am a singleton instance!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 获取单例实例</span>
        <span class="token class-name">Singleton</span> singleton <span class="token operator">=</span> <span class="token class-name">Singleton</span><span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 调用示例方法</span>
        singleton<span class="token punctuation">.</span><span class="token function">showMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><b style="color:#3e547d;"><strong>工厂方法模式</strong></b></p><p><b style="color:#6E8B74;"><strong>引言</strong></b></p><p>18世纪60年代起源于英国的工业革命，是技术发展史上的一次巨大革命，它开创了以机器人代替手工劳动的时代。<strong>这不仅是一次技术改革，更是一场深刻的社会变革</strong>。在软件开发领域，面向对象技术的出现也算是对代码的工业革命，写出可以复用的代码常常被程序员们挂在嘴边。然而复用并不等于复制。</p><h3 id="结构型模式" tabindex="-1"><a class="header-anchor" href="#结构型模式" aria-hidden="true">#</a> 结构型模式</h3><h3 id="行为型模式" tabindex="-1"><a class="header-anchor" href="#行为型模式" aria-hidden="true">#</a> 行为型模式</h3>`,73),i=[c];function l(r,d){return s(),a("div",null,i)}const k=n(o,[["render",l],["__file","软件设计模式.html.vue"]]);export{k as default};
