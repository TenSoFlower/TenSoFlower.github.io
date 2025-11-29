import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e}from"./app-bf286fca.js";const i={},d=e(`<h1 id="bat" tabindex="-1"><a class="header-anchor" href="#bat" aria-hidden="true">#</a> Bat</h1><p><strong>Bat脚本</strong>(Batch Script，也叫批处理脚本)是windows系统下一种以<code>.bat</code>或<code>.cmd</code>为扩展名的脚本文件，用于<strong>自动化执行一系列命令</strong>。是基于Windows命令行(CMD)的一种脚本语言。</p><h2 id="cmd-命令提示符" tabindex="-1"><a class="header-anchor" href="#cmd-命令提示符" aria-hidden="true">#</a> CMD(命令提示符)</h2><h3 id="cd-切换目录" tabindex="-1"><a class="header-anchor" href="#cd-切换目录" aria-hidden="true">#</a> cd 切换目录</h3><p>主要用于显示或切换当前目录</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>// 不带参数时会显示当前所在的工作目录
<span class="token builtin class-name">cd</span>

// 返回上一级目录
<span class="token builtin class-name">cd</span> <span class="token punctuation">..</span>

// 返回根目录
<span class="token builtin class-name">cd</span> <span class="token punctuation">\\</span>

// 切换盘符直接用盘符名加:
D:

// /d 表示同时切换盘符和目录
<span class="token builtin class-name">cd</span> /d D:<span class="token punctuation">\\</span>Desktop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="dir-查看目录" tabindex="-1"><a class="header-anchor" href="#dir-查看目录" aria-hidden="true">#</a> dir 查看目录</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">dir</span> <span class="token punctuation">[</span>路径<span class="token punctuation">]</span> <span class="token punctuation">[</span>参数<span class="token punctuation">]</span>
路径：要查看的目录<span class="token punctuation">(</span>默认是当前目录<span class="token punctuation">)</span>
参数：控制输出格式、显示内容等

// 查看当前目录内容
<span class="token function">dir</span>

// 查看指定目录内容
<span class="token function">dir</span> D:<span class="token punctuation">\\</span>Desktop

// 分页显示<span class="token punctuation">(</span>按空格翻页<span class="token punctuation">)</span>
<span class="token function">dir</span> /p

// 宽列表显示<span class="token punctuation">(</span>多列排列<span class="token punctuation">)</span>
<span class="token function">dir</span> /w

// 显示所有文件<span class="token punctuation">(</span>包含隐藏、系统文件<span class="token punctuation">)</span>
<span class="token function">dir</span> /a

// 按名称排序
<span class="token function">dir</span> /o:n

// 按时间倒序排序
<span class="token function">dir</span> /o:-d

// 显示子目录下所有文件<span class="token punctuation">(</span>递归<span class="token punctuation">)</span>
<span class="token function">dir</span> /s

// 简洁模式<span class="token punctuation">(</span>只显示文件名，适合导出<span class="token punctuation">)</span>
<span class="token function">dir</span> /b

// 组合参数：显示所有文件 + 递归子目录 + 分页
<span class="token function">dir</span> /a /s /p

// 查找当前目录及子目录下所有 txt 文件
<span class="token function">dir</span> /s *.txt

// 导出目录下的文件名到 list.txt
<span class="token function">dir</span> D:<span class="token punctuation">\\</span>Desktop /b <span class="token operator">&gt;</span> list.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="cls-清屏" tabindex="-1"><a class="header-anchor" href="#cls-清屏" aria-hidden="true">#</a> cls 清屏</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>// 清空屏幕内容
cls
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="exit-退出" tabindex="-1"><a class="header-anchor" href="#exit-退出" aria-hidden="true">#</a> exit 退出</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>// 退出
<span class="token builtin class-name">exit</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="netstat-网络状态查看" tabindex="-1"><a class="header-anchor" href="#netstat-网络状态查看" aria-hidden="true">#</a> netstat 网络状态查看</h3><p><strong>PID</strong>(Process ID)进程编号。每个正在运行的程序(进程)在操作系统中都会分配一个唯一的PID用来标识它、</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>// 查看某个端口是谁占用了
<span class="token function">netstat</span> <span class="token parameter variable">-ano</span> <span class="token operator">|</span> findstr <span class="token number">8080</span>

// 显示所有连接和监听端口
<span class="token function">netstat</span> <span class="token parameter variable">-a</span>

// 常用组合命令: 查询端口占用 + 找出具体进程 + 杀进程
<span class="token function">netstat</span> <span class="token parameter variable">-ano</span> <span class="token operator">|</span> findstr <span class="token number">8080</span> // 查询端口占用
tasklist <span class="token operator">|</span> findstr <span class="token punctuation">[</span>PID<span class="token punctuation">]</span>    // 找出具体进程
taskkill /PID <span class="token number">18456</span> /F      // 杀死PID为18456的进程
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15),l=[d];function c(t,r){return s(),a("div",null,l)}const o=n(i,[["render",c],["__file","Bat.html.vue"]]);export{o as default};
