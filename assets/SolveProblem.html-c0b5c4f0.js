import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e}from"./app-948cb496.js";const t={},o=e(`<h1 id="solveproblem" tabindex="-1"><a class="header-anchor" href="#solveproblem" aria-hidden="true">#</a> SolveProblem</h1><h2 id="文件类" tabindex="-1"><a class="header-anchor" href="#文件类" aria-hidden="true">#</a> 文件类</h2><h3 id="解决由于失误操作导致windows系统产生无限循环文件夹问题" tabindex="-1"><a class="header-anchor" href="#解决由于失误操作导致windows系统产生无限循环文件夹问题" aria-hidden="true">#</a> 解决由于失误操作导致Windows系统产生无限循环文件夹问题</h3><p><b style="color:#3e547d;"><strong>网上的解决方案</strong></b></p><p><b style="color:#6E8B74;"><strong>使用Windows自带的RoboCopy 命令方式</strong></b></p><ol><li>先进入cmd命令行</li><li>cd到该文件夹的上一层路径</li><li>然后建立一个空的文件夹，比如这里无限嵌套的文件夹名称为WrongFile,在同级目录建立一个文件夹随意命名为RFile,在cmd命令行中执行** Robocopy /MIR RFile WrongFile，**执行一段时间后，会发现无限嵌套的文件夹WrongFile已经被清空。</li></ol><p><b style="color:#6E8B74;"><strong>原理分析：</strong></b></p><p>RoboCopy是一个命令行的目录复制命令。<br> 使用命令：Robocopy /MIR source destination<br> 其中/MIR表示镜像目录树，意思为复制子目录，包括空的子目录和删除源中不再存在的目标文件/目录。这里source 定义一个空的文件夹，将其结构完全复制到destination中，也就可以清空destination里面的所有结构。</p><p><b style="color:#6E8B74;"><strong>结果</strong></b></p><p>但是令人生气的是这个解决方案对我不起作用，我一运行 Robocopy /MIR RFile 123 命令就出现了无限删除文件夹的窗口，一直运行了十分钟，终于停了，但是文件夹依然存在。又去网上找啊找，找到一哥们说没事，是嵌套太深了，多运行几次RoboCopy就好了，然后又等了3个十分钟，还是没删掉。事不过三，此时我已经意识到了事情的不对。</p><p><b style="color:#3e547d;"><strong>我的解决方案</strong></b></p><p>自己想着这个文件夹是由于递归拷贝产生的，那我能不能写个Java程序递归删除它呢？心动不如行动，于是敲了如下代码。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span>
<span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">delete</span><span class="token punctuation">(</span><span class="token class-name">File</span> file<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>file<span class="token punctuation">.</span><span class="token function">isDirectory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token class-name">File</span><span class="token punctuation">[</span><span class="token punctuation">]</span> listFiles <span class="token operator">=</span> file<span class="token punctuation">.</span><span class="token function">listFiles</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>listFiles <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">File</span> f <span class="token operator">:</span> listFiles<span class="token punctuation">)</span>
                <span class="token punctuation">{</span>
                    <span class="token function">delete</span><span class="token punctuation">(</span>f<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
            file<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">else</span>
        <span class="token punctuation">{</span>
            file<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">//换成你出问题文件夹的路径</span>
        <span class="token comment">//我的是E:\\\\Java_Projects\\\\tensoflow\\\\src\\\\MyNotes\\\\Images\\\\Docker下的E%5CJava_Projects%5Ctensoflow%5Csrc%5CMyNotes%5CImages%5CDocker文件夹出现了无限嵌套</span>
        <span class="token class-name">File</span> dir <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">&quot;E:\\\\Java_Projects\\\\tensoflow\\\\src\\\\MyNotes\\\\Images\\\\Docker\\\\E%5CJava_Projects%5Ctensoflow%5Csrc%5CMyNotes%5CImages%5CDocker&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;start delete...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">delete</span><span class="token punctuation">(</span>dir<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;delete success&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><b style="color:#6E8B74;"><strong>结果</strong></b></p><p>不到一秒钟运行结束，文件夹删除成功。</p><p>控制台输出：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>start delete<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
delete success
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,17),p=[o];function c(l,i){return s(),a("div",null,p)}const d=n(t,[["render",c],["__file","SolveProblem.html.vue"]]);export{d as default};
