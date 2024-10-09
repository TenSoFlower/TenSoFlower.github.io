import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e}from"./app-d6cea1c0.js";const t={},o=e(`<h1 id="解决跨域问题" tabindex="-1"><a class="header-anchor" href="#解决跨域问题" aria-hidden="true">#</a> 解决跨域问题</h1><h2 id="什么是本域" tabindex="-1"><a class="header-anchor" href="#什么是本域" aria-hidden="true">#</a> 什么是本域</h2><p>本域就是<strong>同协议，同域名，同端口</strong>的就叫本域。必须要三个都一样。</p><h2 id="什么是跨域" tabindex="-1"><a class="header-anchor" href="#什么是跨域" aria-hidden="true">#</a> 什么是跨域</h2><p>在了解什么是跨域的时候，我们首先要了解一个概念，叫<strong>同源策略</strong>，什么是同源策略呢，就是我们的浏览器出于安全考虑，只允许与<strong>本域</strong><a href="%E6%9C%AC%E5%9F%9F%E5%B0%B1%E6%98%AF**%E5%90%8C%E5%8D%8F%E8%AE%AE%EF%BC%8C%E5%90%8C%E5%9F%9F%E5%90%8D%EF%BC%8C%E5%90%8C%E7%AB%AF%E5%8F%A3**%E7%9A%84%E5%B0%B1%E5%8F%AB%E6%9C%AC%E5%9F%9F%E3%80%82%E5%BF%85%E9%A1%BB%E8%A6%81%E4%B8%89%E4%B8%AA%E9%83%BD%E4%B8%80%E6%A0%B7%E3%80%82">^ 1</a>下的接口交互。不同源的客户端脚本在没有明确授权的情况下，不能读写对方的资源。是什么意思呢，比如淘宝和京东两个域名不同，如果允许跨域的话，那么我就可以在淘宝上发送一个请求给京东，并且京东会回应我数据，这么做是不符合实际的。</p><h2 id="什么是session" tabindex="-1"><a class="header-anchor" href="#什么是session" aria-hidden="true">#</a> 什么是session</h2><p>session你可以理解为就是一个小型数据库（有点牵强）,它可以存放用户存入的键值对的值，但是session又将这些值存放在哪里呢？有人可能会说是存放在服务器中，当然，存放在服务器中固然是对的，那它又存放在服务器的什么地方呢？估计有不少人说是在内存中，其实，session真正的数据并不是存放在内存中的，就是本地存储，然后通过sessionId来标识键值对数据的唯一性（有点像redis了，但是信息的存放却是有本质性的区别）。</p><h2 id="问题描述" tabindex="-1"><a class="header-anchor" href="#问题描述" aria-hidden="true">#</a> 问题描述</h2><p>前端控制台报错信息</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>Access to XMLHttpRequest at <span class="token string">&#39;http://localhost:8080/login/verify?captcha=123&#39;</span> from origin <span class="token string">&#39;http://localhost:63342&#39;</span> has been blocked by <span class="token constant">CORS</span> <span class="token literal-property property">policy</span><span class="token operator">:</span> No <span class="token string">&#39;Access-Control-Allow-Origin&#39;</span> header is present on the requested resource<span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>注意此时我的前端是http://localhost:63342后端是http://localhost:8080可以看出前端和后端的端口号不一样。</p><h2 id="跨域解决方案" tabindex="-1"><a class="header-anchor" href="#跨域解决方案" aria-hidden="true">#</a> 跨域解决方案</h2><h3 id="后端" tabindex="-1"><a class="header-anchor" href="#后端" aria-hidden="true">#</a> 后端</h3><p>如同我们上面说的，每发送一次链接，后端都会以为是一台新的主机来访问，所以我们就需要针对每一次请求来进行处理。处理每一次请求就需要用到<strong>拦截器</strong>。</p><p><b style="color:#3e547d;"><strong>在controller包同级目录下建一个配置包，创建一个配置类(包名 类名随意)</strong></b></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>tensoflow<span class="token punctuation">.</span></span><span class="token class-name">Config</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Configuration</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span>config<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">CorsRegistry</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span>config<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">WebMvcConfigurer</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * 1. @ClassDescription: 跨域问题的配置类
 * 2. @author: TenSoFlow
 * 3. @date: 2023年10月13日 17:03
 */</span>
<span class="token comment">// CorsConfig 类用于配置跨源资源共享 (CORS) 规则</span>
<span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CorsConfig</span> <span class="token keyword">implements</span> <span class="token class-name">WebMvcConfigurer</span>
<span class="token punctuation">{</span>
    <span class="token comment">// 重写 addCorsMappings 方法来配置 CORS 规则</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">addCorsMappings</span><span class="token punctuation">(</span><span class="token class-name">CorsRegistry</span> registry<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// 允许所有路径的跨域访问</span>
        registry<span class="token punctuation">.</span><span class="token function">addMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/**&quot;</span><span class="token punctuation">)</span>
                <span class="token comment">// 允许所有来源的跨域请求</span>
                <span class="token punctuation">.</span><span class="token function">allowedOriginPatterns</span><span class="token punctuation">(</span><span class="token string">&quot;*&quot;</span><span class="token punctuation">)</span>
                <span class="token comment">// 允许的请求方法包括 GET、POST、PUT、DELETE、HEAD 和 OPTIONS</span>
                <span class="token punctuation">.</span><span class="token function">allowedMethods</span><span class="token punctuation">(</span><span class="token string">&quot;GET&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;POST&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;PUT&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;DELETE&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;HEAD&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;OPTIONS&quot;</span><span class="token punctuation">)</span>
                <span class="token comment">// 允许携带身份凭证如token</span>
                <span class="token punctuation">.</span><span class="token function">allowCredentials</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
                <span class="token comment">// 预检请求的有效期为 3600 秒</span>
                <span class="token punctuation">.</span><span class="token function">maxAge</span><span class="token punctuation">(</span><span class="token number">3600</span><span class="token punctuation">)</span>
                <span class="token comment">// 允许请求携带的自定义头信息</span>
                <span class="token punctuation">.</span><span class="token function">allowedHeaders</span><span class="token punctuation">(</span><span class="token string">&quot;*&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="跨域时session为null解决方案" tabindex="-1"><a class="header-anchor" href="#跨域时session为null解决方案" aria-hidden="true">#</a> 跨域时session为null解决方案</h2><p>在SpringBoot项目中跨域问题的出现往往是前后端使用的端口号不一样。如果没有跨域的问题，session是可以确定的，但是在跨域的时候，我每次访问，都会<strong>像是新的一台主机访问我的服务器</strong>，就会造成<strong>session的新建</strong>，话说都新建一个session了，那我还能访问到原来的session数据吗？那是不可能的。</p><h2 id="前端" tabindex="-1"><a class="header-anchor" href="#前端" aria-hidden="true">#</a> 前端</h2><p><b style="color:#8f71e0;"><strong>解决跨域时session为null当然要先解决跨域问题。所以后端您需要先按照上文的方式先配置。然后再配置前端。</strong></b></p><p>设置axios允许跨域携带cookie</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>axios.defaults.withCredentials = true;// 允许跨域携带cookie
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><b style="color:#8f71e0;"><strong>此种方法只能解决前后端端口号不一样时session为空的问题，至于IP地址不同时session为空需要用到Nginx反向代理。</strong></b></p>`,23),p=[o];function i(c,l){return s(),a("div",null,p)}const d=n(t,[["render",i],["__file","解决跨域问题.html.vue"]]);export{d as default};
