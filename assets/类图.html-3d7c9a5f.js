import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as s,e}from"./app-0e6b4948.js";const i="/assets/1696855999953-717e6a19.png",t="/assets/1696856535557-7717fefc.png",c="/assets/1696910658925-42b2767f.png",d={},r=e('<h1 id="uml类图" tabindex="-1"><a class="header-anchor" href="#uml类图" aria-hidden="true">#</a> UML类图</h1><h2 id="作用" tabindex="-1"><a class="header-anchor" href="#作用" aria-hidden="true">#</a> 作用</h2><p>可以简洁明了的帮助我们理解项目中类之间的关系。在软件工程中，类图是一种静态的结构图，描述了系统的类的集合，类的属性和类之间的关系，可以简化了人们对系统的理解。类图是系统分析和设计阶段的重要产物，是系统编码和测试的重要模型。</p><h2 id="基本单元类" tabindex="-1"><a class="header-anchor" href="#基本单元类" aria-hidden="true">#</a> 基本单元类</h2><p><b style="color:#3e547d;"><strong>表示类</strong></b></p><p>描述的是类与类之间的关系，所有基本单元就是类，那该如何用图表示呢？如下。</p><figure><img src="'+i+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>类名：填类的名称</p><p>属性：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+ 表示public 
- 表示private
# 表示protected
属性类型写在前，参数名称写在后
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>方法：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+ 表示public 
- 表示private
# 表示protected
方法传递参数，参数名写在前，类型写在后。
方法返回值写在方法签名的后面
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><b style="color:#3e547d;">例子</b></p><p>如下有一个Student类</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Student</span> 
<span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 
    <span class="token punctuation">{</span>
		<span class="token keyword">return</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">takeExam</span><span class="token punctuation">(</span><span class="token class-name">Course</span> course<span class="token punctuation">)</span> 
    <span class="token punctuation">{</span>
        course<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>用类图表示为</p><figure><img src="`+t+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><b style="color:#3e547d;"><strong>表示接口</strong></b></p><figure><img src="'+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="类与类之间的关系" tabindex="-1"><a class="header-anchor" href="#类与类之间的关系" aria-hidden="true">#</a> 类与类之间的关系</h2><p>在Java或其它面向对象设计模式中，类与类之间的关系有6种。</p><h3 id="依赖" tabindex="-1"><a class="header-anchor" href="#依赖" aria-hidden="true">#</a> 依赖</h3><h3 id="关联" tabindex="-1"><a class="header-anchor" href="#关联" aria-hidden="true">#</a> 关联</h3><h3 id="聚合" tabindex="-1"><a class="header-anchor" href="#聚合" aria-hidden="true">#</a> 聚合</h3><h3 id="组合" tabindex="-1"><a class="header-anchor" href="#组合" aria-hidden="true">#</a> 组合</h3><h3 id="继承" tabindex="-1"><a class="header-anchor" href="#继承" aria-hidden="true">#</a> 继承</h3><h3 id="实现" tabindex="-1"><a class="header-anchor" href="#实现" aria-hidden="true">#</a> 实现</h3>',27),l=[r];function p(o,u){return n(),s("div",null,l)}const m=a(d,[["render",p],["__file","类图.html.vue"]]);export{m as default};
