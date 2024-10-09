import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{r as d,o as r,c as i,b as e,d as a,a as l,e as t}from"./app-3b1ccbc2.js";const c="/assets/1717741684503-d23fbc84.png",o={},h=e("h1",{id:"达梦数据库",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#达梦数据库","aria-hidden":"true"},"#"),a(" 达梦数据库")],-1),p=e("h2",{id:"官网",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#官网","aria-hidden":"true"},"#"),a(" 官网")],-1),u={href:"https://www.dameng.com/list_103.html",target:"_blank",rel:"noopener noreferrer"},m=t('<h2 id="下载" tabindex="-1"><a class="header-anchor" href="#下载" aria-hidden="true">#</a> 下载</h2><p>如果是个人使用则选择下图中的方框进行下载，可免费使用一年。</p><figure><img src="'+c+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="默认用户名和密码" tabindex="-1"><a class="header-anchor" href="#默认用户名和密码" aria-hidden="true">#</a> 默认用户名和密码</h2><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>username: SYSDBA
password: SYSDBA
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="用户操作" tabindex="-1"><a class="header-anchor" href="#用户操作" aria-hidden="true">#</a> 用户操作</h2><h3 id="查看所有用户" tabindex="-1"><a class="header-anchor" href="#查看所有用户" aria-hidden="true">#</a> 查看所有用户</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> dba_users<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="数据库操作" tabindex="-1"><a class="header-anchor" href="#数据库操作" aria-hidden="true">#</a> 数据库操作</h2><h3 id="查看数据库版本" tabindex="-1"><a class="header-anchor" href="#查看数据库版本" aria-hidden="true">#</a> 查看数据库版本</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> v$version<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="查看所有数据库列表" tabindex="-1"><a class="header-anchor" href="#查看所有数据库列表" aria-hidden="true">#</a> 查看所有数据库列表</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> name <span class="token keyword">from</span> v$<span class="token keyword">database</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="表操作" tabindex="-1"><a class="header-anchor" href="#表操作" aria-hidden="true">#</a> 表操作</h2><h3 id="查看当前用户下的所有表" tabindex="-1"><a class="header-anchor" href="#查看当前用户下的所有表" aria-hidden="true">#</a> 查看当前用户下的所有表</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> table_name <span class="token keyword">from</span> user_tables<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="查看所有用户下的所有表" tabindex="-1"><a class="header-anchor" href="#查看所有用户下的所有表" aria-hidden="true">#</a> 查看所有用户下的所有表</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> owner<span class="token punctuation">,</span> table_name <span class="token keyword">from</span> all_tables<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,18);function v(b,_){const s=d("ExternalLinkIcon");return r(),i("div",null,[h,p,e("p",null,[e("a",u,[a("https://www.dameng.com/list_103.html"),l(s)])]),m])}const f=n(o,[["render",v],["__file","达梦数据库.html.vue"]]);export{f as default};
