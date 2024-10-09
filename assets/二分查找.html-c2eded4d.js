import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o as e,c as o,b as n,d as l,a as c,e as s}from"./app-e82472af.js";const i="/assets/1696920566049-5e4b638b.png",r={},u=s(`<h1 id="二分查找" tabindex="-1"><a class="header-anchor" href="#二分查找" aria-hidden="true">#</a> 二分查找</h1><h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2><p><b style="color:#3e547d;"><strong>介绍</strong></b></p><p>二分查找（Binary Search），也称为折半查找，是一种高效的查找算法，用于在<strong>有序数组</strong>或列表中查找特定元素的位置或判断其是否存在。它是一种简单而高效的查找算法，可以在大规模数据集上提供快速搜索和定位的能力。</p><p><b style="color:#3e547d;"><strong>基本思想</strong></b></p><p>二分查找的基本思想是通过不断缩小搜索范围来逼近目标元素。</p><p><b style="color:#3e547d;"><strong>核心步骤</strong></b></p><ol><li>将目标元素与有序数组或列表的中间元素进行比较。</li><li>如果目标元素等于中间元素，则找到了目标元素，返回其位置。</li><li>如果目标元素小于中间元素，则在数组或列表的左半部分继续进行二分查找。</li><li>如果目标元素大于中间元素，则在数组或列表的右半部分继续进行二分查找。</li><li>重复上述步骤，不断缩小搜索范围，直到找到目标元素或确定目标元素不存在。</li></ol><p><b style="color:#3e547d;"><strong>限制条件</strong></b></p><p>数组或列表必须是<strong>有序</strong>的。</p><p>数组或列表<strong>没有重复元素</strong>。</p><p>二分查找<strong>适用于静态数据集</strong>，即不会频繁插入或删除元素的情况。</p><p>对于链表等非连续存储结构，无法直接使用二分查找。</p><p><b style="color:#3e547d;"><strong>用处</strong></b></p><p>在有序数组中查找特定元素、确定元素的插入位置、查找出现次数等。</p><p><b style="color:#3e547d;"><strong>基本信息</strong></b></p><p>输入：一个整数数组，一个目标值</p><p>输出：目标值在整数数组中的下标</p><p>使用前提：数组要是有序数组且不重复</p><p>空间复杂度：O(1)</p><p>时间复杂度：O(log n)</p><h2 id="代码实现" tabindex="-1"><a class="header-anchor" href="#代码实现" aria-hidden="true">#</a> 代码实现</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">binarySearch</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr<span class="token punctuation">,</span><span class="token keyword">int</span> target<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> right <span class="token operator">=</span> arr<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>left <span class="token operator">&lt;=</span> right<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">int</span> mid <span class="token operator">=</span> <span class="token punctuation">(</span>left<span class="token operator">+</span>right<span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">==</span> target<span class="token punctuation">)</span> <span class="token keyword">return</span> mid<span class="token punctuation">;</span>
        <span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">&gt;</span> target<span class="token punctuation">)</span> right <span class="token operator">=</span> mid <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">else</span> left <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="另外可以调用api实现" tabindex="-1"><a class="header-anchor" href="#另外可以调用api实现" aria-hidden="true">#</a> 另外可以调用API实现</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token number">9</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">11</span><span class="token punctuation">,</span><span class="token number">12</span><span class="token punctuation">,</span><span class="token number">13</span><span class="token punctuation">,</span><span class="token number">14</span><span class="token punctuation">,</span><span class="token number">34</span><span class="token punctuation">,</span><span class="token number">234</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> target <span class="token operator">=</span> <span class="token number">8</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> res <span class="token operator">=</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">binarySearch</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span>target<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="例题" tabindex="-1"><a class="header-anchor" href="#例题" aria-hidden="true">#</a> 例题</h2><h3 id="x的平方根" tabindex="-1"><a class="header-anchor" href="#x的平方根" aria-hidden="true">#</a> x的平方根</h3><p><b style="color:#3e547d;"><strong>来源</strong></b></p>`,28),k={href:"https://leetcode.cn/problems/sqrtx/solutions/238553/x-de-ping-fang-gen-by-leetcode-solution/",target:"_blank",rel:"noopener noreferrer"},d=n("figure",null,[n("img",{src:i,alt:"",tabindex:"0",loading:"lazy"}),n("figcaption")],-1),m=n("p",null,[n("b",{style:{color:"#3e547d"}},[n("strong",null,"题解")])],-1),b=n("p",null,"由于x平方根的整数部分ans满足",-1),v=n("p",{class:"katex-block"},[n("span",{class:"katex-display"},[n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[n("semantics",null,[n("mrow",null,[n("msup",null,[n("mi",null,"k"),n("mn",null,"2")]),n("mo",null,"≤"),n("mi",null,"x")]),n("annotation",{encoding:"application/x-tex"}," k^{2}\\leq x ")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"1.0001em","vertical-align":"-0.136em"}}),n("span",{class:"mord"},[n("span",{class:"mord mathnormal",style:{"margin-right":"0.03148em"}},"k"),n("span",{class:"msupsub"},[n("span",{class:"vlist-t"},[n("span",{class:"vlist-r"},[n("span",{class:"vlist",style:{height:"0.8641em"}},[n("span",{style:{top:"-3.113em","margin-right":"0.05em"}},[n("span",{class:"pstrut",style:{height:"2.7em"}}),n("span",{class:"sizing reset-size6 size3 mtight"},[n("span",{class:"mord mtight"},[n("span",{class:"mord mtight"},"2")])])])])])])])]),n("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),n("span",{class:"mrel"},"≤"),n("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.4306em"}}),n("span",{class:"mord mathnormal"},"x")])])])])],-1),h=s(`<p>的最大K值，因此我们可以对K进行二分查找</p><p><b style="color:#3e547d;"><strong>代码</strong></b></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">mySqrt</span><span class="token punctuation">(</span><span class="token keyword">int</span> x<span class="token punctuation">)</span> 
    <span class="token punctuation">{</span>
        <span class="token keyword">int</span> l <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> r <span class="token operator">=</span> x<span class="token punctuation">,</span> ans <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>l <span class="token operator">&lt;=</span> r<span class="token punctuation">)</span> 
        <span class="token punctuation">{</span>
            <span class="token keyword">int</span> mid <span class="token operator">=</span> l <span class="token operator">+</span> <span class="token punctuation">(</span>r <span class="token operator">-</span> l<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">long</span><span class="token punctuation">)</span> mid <span class="token operator">*</span> mid <span class="token operator">&lt;=</span> x<span class="token punctuation">)</span> 
            <span class="token punctuation">{</span>
                ans <span class="token operator">=</span> mid<span class="token punctuation">;</span>
                l <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> 
            <span class="token punctuation">{</span>
                r <span class="token operator">=</span> mid <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> ans<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function g(y,x){const a=p("ExternalLinkIcon");return e(),o("div",null,[u,n("p",null,[n("a",k,[l("69. x 的平方根 - 力扣（LeetCode）"),c(a)])]),d,m,b,v,h])}const f=t(r,[["render",g],["__file","二分查找.html.vue"]]);export{f as default};
