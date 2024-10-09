import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as p,c as o,d as n,e,a as i,b as s}from"./app-aaac123c.js";const d="/assets/1696908716195-bfb49e52.png",r="/assets/1696918776527-e17f8c86.png",c="/assets/1696919803704-447de3ae.png",u="/assets/1696919835488-cee66ca9.png",v="/assets/1697373045207-520ceca3.png",b={},m=s('<h1 id="数据结构" tabindex="-1"><a class="header-anchor" href="#数据结构" aria-hidden="true">#</a> 数据结构</h1><h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2><p>程序 = 数据结构(Data Structure) + 算法</p><p>这个公式对计算机科学的影响程度足以类似于物理学中爱因斯坦的质能方程。<br> 数据结构是一种组织和存储数据的方式。以便能够有效地访问和修改数据。数据结构是计算机科学中的一个重要概念，它关注如何组织和管理数据，以便能够高效地执行各种操作，如搜索、排序、插入和删除等。</p><h2 id="基本结构" tabindex="-1"><a class="header-anchor" href="#基本结构" aria-hidden="true">#</a> 基本结构</h2><p>数据元素不是孤立存在的，他们之间存在着某种关系，数据元素相互之间的关系称为结构。数据结构是带结构的数据元素的集合。</p><p>数据结构分为线性结构和非线性结构。<br> 线性结构：线性表，栈和队列，串，数组和广义表<br> 非线性结构：树，图</p><h2 id="基本概念和术语" tabindex="-1"><a class="header-anchor" href="#基本概念和术语" aria-hidden="true">#</a> 基本概念和术语</h2><p><b style="color:#3e547d;"><strong>数据</strong></b><br> 是能够输入计算机且能被计算机处理的各种符号的集合。包括数值型的数据如整数实数等以及非数值型的数据如文字图像图形声音等。<br><b style="color:#3e547d;"><strong>数据元素</strong></b><br> 是数据的基本单位，在计算机程序中通常作为一个整体进行考虑和处理。也简称为元素，或记录，结点或顶点。如一名学生的基本信息包括姓名，性别，年龄，住址，出生日期。由这五项组成的一个整体就叫做数据元素。<br><b style="color:#3e547d;"><strong>数据项</strong></b><br> 构成数据元素的不可分割的最小单位<br> 如学生基本信息中的姓名，性别，年龄，住址，出生日期中的性别这项就叫数据项。<br><b style="color:#3e547d;"><strong>数据对象</strong></b><br> 是性质相同的数据元素的集合，是数据的一个子集。<br> 例如整数的数据对象是集合N = 0 1 -1 2 -2 ......</p><h2 id="算法和算法分析" tabindex="-1"><a class="header-anchor" href="#算法和算法分析" aria-hidden="true">#</a> 算法和算法分析</h2><p>算法就是对特定问题求解方法和步骤的一种描述，它是指令的有限序列。</p><p>算法的五个特性：输入 输出 有穷性 确定性 可行性</p><p>算法的设计要求：正确性 可读性 健壮性 高效性</p><h2 id="链表" tabindex="-1"><a class="header-anchor" href="#链表" aria-hidden="true">#</a> 链表</h2><h3 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h3><p>链表是一种物理存储结构上<strong>非连续、非顺序</strong>的<strong>存储结构</strong>，数据元素的逻辑顺序是通过链表中的指针链接次序实现的。只根据文字描述还是比较抽象的，直接上图来观察：</p><figure><img src="'+d+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="运行方式" tabindex="-1"><a class="header-anchor" href="#运行方式" aria-hidden="true">#</a> 运行方式</h3><p>图中的phead指针中存放的是第一个结点的地址，那么根据指着地址我们就可以找到这个结构体，又因为这个结构体中存放了下一个结构体的地址，所以又可以找到第二个结构体，循环往复就可以找到所有的结点，直到存放空地址的结构体。图中的箭头实际上是不存在的，这里只是为了能够方便理解。</p><h3 id="java标准库中的链表" tabindex="-1"><a class="header-anchor" href="#java标准库中的链表" aria-hidden="true">#</a> Java标准库中的链表</h3><p>Java标准库中内置了一个双向链表LinkedList类</p><h3 id="java手写链表" tabindex="-1"><a class="header-anchor" href="#java手写链表" aria-hidden="true">#</a> Java手写链表</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package com;

import com.ctg.Init.PreMain;

// 代表链表的节点
class ListNode
{
    // 链表中的数据
    int val;
    // 链表的下一个节点
    ListNode next;
    // 构造方法为数据赋值
    public ListNode(int val)
    {
        this.val = val;
    }
}

public class Main
{
    // 通过数组构造链表
    public static ListNode getListNodeByArray(int[] arr)
    {
        if (arr == null || arr.length == 0)
        {
            return null;
        }
        ListNode head = new ListNode(arr[0]);
        ListNode temp = head;
        for (int i = 1; i &lt; arr.length; i++)
        {
            temp.next = new ListNode(arr[i]);
            temp = temp.next;
        }
        return head;
    }
    // 打印链表数据
    public static void printListNode(ListNode head)
    {
        ListNode current = head;
        while (current != null)
        {
            System.out.printf(&quot;%d &quot;,current.val);
            current = current.next;
        }
    }
    // 得到链表的长度
    public static int getListNodeLength(ListNode head)
    {
        ListNode current = head;
        int res = 0;
        while(current != null)
        {
            res++;
            current = current.next;
        }
        return res;
    }
    public static void main(String[] args)
    {
        int[] arr = {1,2,3,4,5,6,7,8,9};
        ListNode head = getListNodeByArray(arr);

        printListNode(head);
        System.out.println();

        System.out.println(getListNodeLength(head));
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="例题" tabindex="-1"><a class="header-anchor" href="#例题" aria-hidden="true">#</a> 例题</h3><p><b style="color:#3e547d;"><strong>相交链表</strong></b></p>`,25),k={href:"https://leetcode.cn/problems/intersection-of-two-linked-lists/",target:"_blank",rel:"noopener noreferrer"},h=s('<figure><img src="'+r+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><b style="color:#3e547d;"><strong>题解</strong></b></p><p>我们需要做的事情是让两个链表同时从较短链表的头结点位置。 为此，我们必须消除两个链表的长度差。</p><ol><li>指针 pA 指向 A 链表，指针 pB 指向 B 链表，依次往后遍历</li><li>如果 pA 到了末尾，则 pA = headB 继续遍历</li><li>如果 pB 到了末尾，则 pB = headA 继续遍历</li><li>比较长的链表指针指向较短链表head时，长度差就消除了</li><li>如此，只需要将最短链表遍历两次即可找到位置</li></ol><p>怎么理解呢？</p><blockquote><p>假设长的链表为A长度为a短的为B长度为b</p><p>PA开始指向A ，PB开始指向B</p><p>先同时走b步PB到达尾部把PB指向A的开头此时PA在A链表的a-b处的位置</p><p>然后继续走a-b步PA走到尾部把PA指向B的开头此时PB在A中距离尾部的位置是a-(a-b)=b</p><p>那么此时就消除了两个链表的长度差</p></blockquote><p>如果还不明白则通过下图理解</p><figure><img src="'+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+u+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><b style="color:#3e547d;"><strong>代码</strong></b></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">ListNode</span> <span class="token function">getIntersectionNode</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> headA<span class="token punctuation">,</span> <span class="token class-name">ListNode</span> headB<span class="token punctuation">)</span> 
<span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>headA <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">||</span> headB <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token class-name">ListNode</span> pA <span class="token operator">=</span> headA<span class="token punctuation">,</span> pB <span class="token operator">=</span> headB<span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>pA <span class="token operator">!=</span> pB<span class="token punctuation">)</span> 
    <span class="token punctuation">{</span>
        pA <span class="token operator">=</span> pA <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">?</span> headB <span class="token operator">:</span> pA<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        pB <span class="token operator">=</span> pB <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">?</span> headA <span class="token operator">:</span> pB<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> pA<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>走到尽头见不到你，于是走过你来时的路，等到相遇时才发现，你也走过我来时的路。</p></blockquote><p><b style="color:#3e547d;"><strong>删除链表的中间节点</strong></b></p>`,13),g={href:"https://leetcode.cn/problems/delete-the-middle-node-of-a-linked-list/?envType=study-plan-v2&envId=leetcode-75",target:"_blank",rel:"noopener noreferrer"},f=s('<figure><img src="'+v+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><b style="color:#3e547d;"><strong>题解</strong></b></p><p>可以采用快慢指针的方法。慢指针一次移动一位，快指针一次移动二位，这样当快指针走到尾时。慢指针刚好走到链表的中间。</p><p><b style="color:#3e547d;"><strong>代码</strong></b></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">ListNode</span> <span class="token function">deleteMiddle</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> head<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>head<span class="token punctuation">.</span>next <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            head <span class="token operator">=</span> head<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
            <span class="token keyword">return</span> head<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">ListNode</span> slow <span class="token operator">=</span> head<span class="token punctuation">;</span>
        <span class="token class-name">ListNode</span> fast <span class="token operator">=</span> head<span class="token punctuation">;</span>
        <span class="token class-name">ListNode</span> temp <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span>fast <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> fast<span class="token punctuation">.</span>next <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            temp <span class="token operator">=</span> slow<span class="token punctuation">;</span>
            slow <span class="token operator">=</span> slow<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
            fast <span class="token operator">=</span> fast<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        temp<span class="token punctuation">.</span>next <span class="token operator">=</span> temp<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token keyword">return</span> head<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5);function x(y,_){const a=l("ExternalLinkIcon");return p(),o("div",null,[m,n("p",null,[n("a",k,[e("160. 相交链表 - 力扣"),i(a)])]),h,n("p",null,[n("a",g,[e("2095. 删除链表的中间节点）"),i(a)])]),f])}const w=t(b,[["render",x],["__file","数据结构.html.vue"]]);export{w as default};
