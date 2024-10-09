import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as p,c as o,d as n,e as c,a as l,b as s}from"./app-5c94b284.js";const i={},u=s('<h1 id="tess4j光学识别" tabindex="-1"><a class="header-anchor" href="#tess4j光学识别" aria-hidden="true">#</a> Tess4j光学识别</h1><h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2><p>先了解下概念，<code>ORC</code>即光学字符识别,简单讲就是对图片文件中的文字进行分析识别，获取的过程。在很多生活场景中都用到，如车牌的扫描识别、身份证扫描识别、图片文本内容识别等。Tesseract-OCR支持中文识别，由惠普实验室研发，并且开源和提供全套的训练工具，是快速低成本开发的首选。而Tess4J则是Tesseract在Java PC上的应用。在英文和数字识别中性能还是不错的，但是在中文识别中，无论速度还是识别率还是较弱，建议有条件的话，针对场景进行训练，会获得较好结果。</p><h2 id="数据集下载地址" tabindex="-1"><a class="header-anchor" href="#数据集下载地址" aria-hidden="true">#</a> 数据集下载地址</h2>',4),r={href:"https://github.com/tesseract-ocr/tessdata",target:"_blank",rel:"noopener noreferrer"},k=s(`<p>下载名字为以下二个的文件</p><blockquote><p>chi_sim.traineddata</p><p>eng.traineddata</p></blockquote><p>chi_sim表示中文数据集 训练之后能识别中文</p><p>eng表示英语数据集 训练之后能识别英文字母以及数字</p><h2 id="所需依赖" tabindex="-1"><a class="header-anchor" href="#所需依赖" aria-hidden="true">#</a> 所需依赖</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token generics"><span class="token punctuation">&lt;</span>dependency<span class="token punctuation">&gt;</span></span>
	<span class="token generics"><span class="token punctuation">&lt;</span>groupId<span class="token punctuation">&gt;</span></span>net<span class="token punctuation">.</span>sourceforge<span class="token punctuation">.</span>tess4j<span class="token operator">&lt;</span><span class="token operator">/</span>groupId<span class="token operator">&gt;</span>
	<span class="token generics"><span class="token punctuation">&lt;</span>artifactId<span class="token punctuation">&gt;</span></span>tess4j<span class="token operator">&lt;</span><span class="token operator">/</span>artifactId<span class="token operator">&gt;</span>
	<span class="token generics"><span class="token punctuation">&lt;</span>version<span class="token punctuation">&gt;</span></span><span class="token number">4.5</span><span class="token number">.4</span><span class="token operator">&lt;</span><span class="token operator">/</span>version<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>dependency<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法" aria-hidden="true">#</a> 使用方法</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>ctg<span class="token punctuation">.</span></span><span class="token class-name">MyAllClass<span class="token punctuation">.</span>LittleTools</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">net<span class="token punctuation">.</span>sourceforge<span class="token punctuation">.</span>tess4j<span class="token punctuation">.</span></span><span class="token class-name">ITesseract</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">net<span class="token punctuation">.</span>sourceforge<span class="token punctuation">.</span>tess4j<span class="token punctuation">.</span></span><span class="token class-name">Tesseract</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">net<span class="token punctuation">.</span>sourceforge<span class="token punctuation">.</span>tess4j<span class="token punctuation">.</span></span><span class="token class-name">TesseractException</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">File</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Objects</span></span><span class="token punctuation">;</span>
<span class="token doc-comment comment">/**
 * 1. @ClassDescription:对图片进行自动识别内容
 * 2. @author: TenSoFlow
 * 3. @date: 2023年10月12日 16:33
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Tess4j</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">TesseractException</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// 得到对象</span>
        <span class="token class-name">ITesseract</span> instance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Tesseract</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 设置下载的数据集存放路径</span>
        instance<span class="token punctuation">.</span><span class="token function">setDatapath</span><span class="token punctuation">(</span><span class="token string">&quot;D:\\\\Desktop\\\\tessdata&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 设置训练的语言 就是数据集的前缀</span>
        instance<span class="token punctuation">.</span><span class="token function">setLanguage</span><span class="token punctuation">(</span><span class="token string">&quot;eng&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 设置存放图片的路径 最好不要存放不是图片的文件</span>
        <span class="token class-name">File</span> imageLocation <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">&quot;D:\\\\Desktop\\\\image&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token class-name">File</span> image <span class="token operator">:</span> <span class="token class-name">Objects</span><span class="token punctuation">.</span><span class="token function">requireNonNull</span><span class="token punctuation">(</span>imageLocation<span class="token punctuation">.</span><span class="token function">listFiles</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token comment">// 循环打印出每张图片识别出来的内容</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>image<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;---&gt;&quot;</span> <span class="token operator">+</span> instance<span class="token punctuation">.</span><span class="token function">doOCR</span><span class="token punctuation">(</span>image<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8);function d(m,v){const a=t("ExternalLinkIcon");return p(),o("div",null,[u,n("p",null,[n("a",r,[c("数据集下载地址"),l(a)])]),k])}const h=e(i,[["render",d],["__file","Tess4j光学识别.html.vue"]]);export{h as default};
