import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as t,c as l,b as e,d as a,a as o,e as n}from"./app-948cb496.js";const d="/assets/3444565-45d00915.png",c={},p=n('<h1 id="滑动窗口" tabindex="-1"><a class="header-anchor" href="#滑动窗口" aria-hidden="true">#</a> 滑动窗口</h1><h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2><p><b style="color:#3e547d;"><strong>介绍</strong></b></p><p>滑动窗口算法（Sliding Window Algorithm）是一种用于<strong>解决数组或字符串</strong>相关问题的常用算法。它通过维护一个滑动窗口（窗口大小可变）在数组或字符串上移动，并根据问题的要求进行相应的操作。滑动窗口算法的核心思想是利用窗口的移动来优化问题的求解过程，避免不必要的重复计算，从而提高算法的效率。该算法通常用于解决需要在线性时间内找到满足特定条件的子数组或子字符串的问题。总结起来，滑动窗口算法是一种通过维护一个滑动窗口在数组或字符串上移动，并根据问题的要求进行操作的算法。它通过优化计算过程，提高了问题的求解效率。</p><p><b style="color:#3e547d;"><strong>滑动窗口算法的一般步骤：</strong></b></p><ol><li>初始化窗口的起始位置和结束位置，可以是数组或字符串的开头或任意位置。</li><li>根据问题的要求，确定窗口的大小和滑动规则。窗口的大小可以是固定的或可变的，滑动规则可以是逐步移动一个元素或直接跳过一部分元素。</li><li>使用循环遍历数组或字符串，根据滑动规则逐步移动窗口，并在每个窗口位置上执行相应的操作（如判断条件、计算结果等）</li><li>根据问题的要求，更新结果或记录满足条件的子数组或子字符串。</li><li>当窗口的结束位置达到数组或字符串的末尾时，算法结束。</li></ol><p><b style="color:#3e547d;"><strong>算法关键</strong></b></p><p>滑动窗口算法的关键在于确定窗口的<strong>起始位置</strong>、<strong>结束位置</strong>和<strong>滑动规则</strong>。通过合理地选择这些参数，可以有效地在线性时间内解决许多数组或字符串相关的问题</p><p><b style="color:#3e547d;"><strong>注意事项</strong></b></p><p>需要注意的是，滑动窗口算法并非适用于所有问题，但在一些特定情况下，它可以提供一种高效的解决方案。因此，在解决问题时，需要考虑是否可以应用滑动窗口算法来优化算法的性能。</p><p><b style="color:#3e547d;"><strong>通常用来解决的问题</strong></b></p><p>子字符串匹配</p><p>连续子数组和</p><p>最小/最大子数组和</p><p>......</p><h2 id="例题" tabindex="-1"><a class="header-anchor" href="#例题" aria-hidden="true">#</a> 例题</h2><h3 id="最大连续1的个数" tabindex="-1"><a class="header-anchor" href="#最大连续1的个数" aria-hidden="true">#</a> 最大连续1的个数</h3><p><b style="color:#3e547d;"><strong>来源</strong></b></p>',18),b={href:"https://leetcode.cn/problems/max-consecutive-ones/",target:"_blank",rel:"noopener noreferrer"},g=n('<figure><img src="'+d+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><b style="color:#3e547d;"><strong>分析</strong></b></p><p>分析题目不难看出可以用滑动窗口解决，其目的是找最大的个数，其中K是资源数，我们可以只扩大窗口或者平移窗口，而不去缩小窗口。其中是否是扩大还是平移与K有关，只要K大于0就可以扩大窗口，否则就平移窗口。</p><p><b style="color:#3e547d;"><strong>代码</strong></b></p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>class Solution 
{
    public int longestOnes(int[] A, int K)
    {
        int l = 0, r = 0;
        while (r &lt; A.length) 
        {
            if (A[r++] == 0) K--;
            if (K &lt; 0 &amp;&amp; A[l++] == 0) K++;
        }
        return r - l;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5);function v(h,u){const r=i("ExternalLinkIcon");return t(),l("div",null,[p,e("p",null,[e("a",b,[a("485. 最大连续 1 的个数 - 力扣（LeetCode）"),o(r)])]),g])}const f=s(c,[["render",v],["__file","滑动窗口.html.vue"]]);export{f as default};
