import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as e,e as l}from"./app-8517dc48.js";const d="/assets/image-1696389388318-fcedce47.png",s={},r=l(`<h1 id="排序" tabindex="-1"><a class="header-anchor" href="#排序" aria-hidden="true">#</a> 排序</h1><h2 id="堆排序-优先队列" tabindex="-1"><a class="header-anchor" href="#堆排序-优先队列" aria-hidden="true">#</a> 堆排序(优先队列)</h2><h3 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h3><p><b style="color:#3e547d;"><strong>稳定性</strong></b></p><p>不稳定</p><p><b style="color:#3e547d;"><strong>时间复杂度</strong></b></p><p>时间复杂度为O(nlogn)</p><p><b style="color:#3e547d;"><strong>空间复杂度</strong></b></p><p>空间复杂度为O(1)。</p><p>大(小)顶堆(Max Heap)是一种特殊的二叉堆数据结构</p><table><thead><tr><th></th><th>性质</th><th>主要操作</th></tr></thead><tbody><tr><td>大顶堆</td><td>对于任意节点 i，父节点的值大于等于其子节点的值（即 A[i] &gt;= A[2i] 和 A[i] &gt;= A[2i+1]）。堆中根节点的值是最大值。大顶堆通常用数组表示，数组的第一个元素（索引为 0）是根节点。对于任意节点 i，它的左子节点的索引为 2i，右子节点的索引为 2i+1。</td><td>大顶堆的主要操作包括插入和删除操作。插入操作将一个元素插入堆中，并保持大顶堆的性质。删除操作将堆中的根节点（即最大值）删除，并保持大顶堆的性质。</td></tr><tr><td>小顶堆</td><td>对于任意节点 i，父节点的值小于等于其子节点的值（即 A[i] &lt;= A[2i] 和 A[i] &lt;= A[2i+1]）。堆中根节点的值是最小值。小顶堆通常用数组表示，数组的第一个元素（索引为 0）是根节点。对于任意节点 i，它的左子节点的索引为 2i，右子节点的索引为 2i+1。</td><td>小顶堆的主要操作包括插入和删除操作。插入操作将一个元素插入堆中，并保持小顶堆的性质。删除操作将堆中的根节点（即最小值）删除，并保持小顶堆的性质。</td></tr></tbody></table><h3 id="源码" tabindex="-1"><a class="header-anchor" href="#源码" aria-hidden="true">#</a> 源码</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package Algorithm_32.HeapSort;
import MyFunction.MyAllFunction;
public class HeapSort
{
    //交换数组内容
    public static void swap(int[] arr,int i,int j)
    {
        int temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    
    //按照二叉树的方式打印数组内容
    public static void print(int[] arr)
    {
        int n = arr.length;
        int h = 0;
        while(n != 0)
        {
            n /= 2;
            h++;
        }
        int num = h;
        int quan = 0;
        for(int i=0;i&lt;h;i++)
        {
            for(int j=0;j&lt;num;j++)
            {
                System.out.print(&quot;   &quot;);
            }
            for(int k=0;k&lt;Math.pow(2,i);k++)
            {
                if(quan&gt;arr.length-1) break;
                System.out.printf(&quot;%d&quot;,arr[quan++]);
                for(int j=0;j&lt;num;j++)
                {
                    System.out.print(&quot; &quot;);
                }
            }
            System.out.println();
            num--;
        }
    }
    
    //对于给定的数组构造大顶堆
    public static void buildMaxHeap(int[] arr,int n)
    {
        for(int i=n/2-1;i&gt;=0;i--)
        {
            maxHeapify(arr,n,i);
        }
    }
    
    //维护大顶堆
    public static void maxHeapify(int[] arr,int n,int i)
    {
        int j = i;
        int left = 2*i;
        int right = 2*i+1;
        if(left&lt;n &amp;&amp; arr[left]&gt;arr[j]) j = left;
        if(right&lt;n &amp;&amp; arr[right]&gt;arr[j]) j = right;
        if(j != i)
        {
            swap(arr,i,j);
            maxHeapify(arr,n,j);
        }
    }
    
    public static void maxHeapSort(int[] arr)
    {
        int n = arr.length;
        buildMaxHeap(arr,n);
        for(int i=n-1;i&gt;=0;i--)
        {
            swap(arr,i,0);
            maxHeapify(arr,i,0);
        }
    }
    
    //对于给定的数组构造小顶堆
    public static void buildMinHeap(int[] arr,int n)
    {
        for(int i=n/2-1;i&gt;=0;i--)
        {
            minHeapify(arr,n,i);
        }
    }
    
    //维护小顶堆
    public static void minHeapify(int[] arr,int n,int i)
    {
        int j = i;
        int left = 2*i;
        int right = 2*i+1;
        if(left&lt;n &amp;&amp; arr[left]&lt;arr[j]) j = left;
        if(right&lt;n &amp;&amp; arr[right]&lt;arr[j]) j = right;
        if(j != i)
        {
            swap(arr,i,j);
            minHeapify(arr,n,j);
        }
    }
    
    public static void minHeapSort(int[] arr)
    {
        int n = arr.length;
        buildMinHeap(arr,n);
        for(int i=n-1;i&gt;=0;i--)
        {
            swap(arr,i,0);
            minHeapify(arr,i,0);
        }
    }
    
    public static void main(String[] args)
    {
        int[] arr = {23,42,1,5,3,6,4,9,34,56};
        maxHeapSort(arr);
        MyAllFunction.Print(arr);
        minHeapSort(arr);
        MyAllFunction.Print(arr);
    }
    
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="例题" tabindex="-1"><a class="header-anchor" href="#例题" aria-hidden="true">#</a> 例题</h3><p><b style="color:#3e547d;"><strong>例题一</strong></b></p><figure><img src="`+d+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import java.util.*;
class Solution
{
    public int[] topKFrequent(int[] nums, int k)
    {
        //用Map记录数组中的元素及其对应的元素
        Map&lt;Integer, Integer&gt; map = new HashMap&lt;&gt;();
        for (int num : nums)
        {
            map.put(num, map.getOrDefault(num, 0) + 1);
        }
        //java中的优先队列可以替代堆 定义优先队列的比较器为按照频率从小到大排序
        PriorityQueue&lt;Integer&gt; minHeap = new PriorityQueue&lt;&gt;(Comparator.comparingInt(map::get));
        for (int num : map.keySet())
        {
            //对于任何元素先放入优先队列 会自动从小到大排序
            minHeap.offer(num);
            //如果优先队列大于要求的长度K 则弹出频率最小的元素即队顶元素
            if (minHeap.size() &gt; k)
            {
                minHeap.poll();
            }
        }
        //循环结束后队列中的K个元素即是频率最大的元素 用res数组接受并返回
        int[] res = new int[k];
        for (int i = k - 1; i &gt;= 0; i--)
        {
            res[i] = minHeap.poll();
        }
        return res;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由此可以看出堆(优先队列)可以解决查找前K个高频或者低频元素的一类问题</p>`,18),a=[r];function v(t,c){return n(),e("div",null,a)}const b=i(s,[["render",v],["__file","排序.html.vue"]]);export{b as default};
