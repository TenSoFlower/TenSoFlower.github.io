import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r as a,o as r,c as i,b as t,d as e,a as d,e as n}from"./app-2e2af31c.js";const c={},o=n('<h1 id="编程相关知识" tabindex="-1"><a class="header-anchor" href="#编程相关知识" aria-hidden="true">#</a> 编程相关知识</h1><h2 id="dos命令" tabindex="-1"><a class="header-anchor" href="#dos命令" aria-hidden="true">#</a> DOS命令</h2><h3 id="常用dos命令-cmd" tabindex="-1"><a class="header-anchor" href="#常用dos命令-cmd" aria-hidden="true">#</a> 常用DOS命令(cmd)</h3>',3),x=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"功能"),t("th",{style:{"text-align":"center"}},"命令")])],-1),h=t("tr",null,[t("td",{style:{"text-align":"center"}},"进入D盘"),t("td",{style:{"text-align":"center"}},"直接 d：")],-1),g=t("tr",null,[t("td",{style:{"text-align":"center"}},"查看当前路径下的内容"),t("td",{style:{"text-align":"center"}},"dir")],-1),_=t("tr",null,[t("td",{style:{"text-align":"center"}},"进入单级目录"),t("td",{style:{"text-align":"center"}},"cd 目录")],-1),u=t("tr",null,[t("td",{style:{"text-align":"center"}},"回退到上一级目录"),t("td",{style:{"text-align":"center"}},"cd ..")],-1),y=t("tr",null,[t("td",{style:{"text-align":"center"}},"进入到多级目录"),t("td",{style:{"text-align":"center"}},"cd 目录1\\目录2\\")],-1),m=t("tr",null,[t("td",{style:{"text-align":"center"}},"回退到盘符目录"),t("td",{style:{"text-align":"center"}},"cd \\")],-1),b=t("tr",null,[t("td",{style:{"text-align":"center"}},"打开远程桌面"),t("td",{style:{"text-align":"center"}},"mstsc")],-1),p=t("tr",null,[t("td",{style:{"text-align":"center"}},"清屏"),t("td",{style:{"text-align":"center"}},"cls")],-1),v=t("tr",null,[t("td",{style:{"text-align":"center"}},"退出命令提示符窗口"),t("td",{style:{"text-align":"center"}},"exit")],-1),f=t("tr",null,[t("td",{style:{"text-align":"center"}},"自定义cmd的左上角标题"),t("td",{style:{"text-align":"center"}},"title xxx")],-1),U=t("tr",null,[t("td",{style:{"text-align":"center"}},"改变cmd窗口的长宽"),t("td",{style:{"text-align":"center"}},"mode 100,80")],-1),F=t("tr",null,[t("td",{style:{"text-align":"center"}},"改变cmd窗口的背景颜色以及文字颜色"),t("td",{style:{"text-align":"center"}},"color 09 将背景颜色改为黑色文字颜色改为淡蓝色")],-1),T=t("tr",null,[t("td",{style:{"text-align":"center"}},"命令 /?"),t("td",{style:{"text-align":"center"}},"命令说明书 如 color /? 显示color命令的一些用法")],-1),w=t("tr",null,[t("td",{style:{"text-align":"center"}},"ipconfig"),t("td",{style:{"text-align":"center"}},"查看网络信息 如IPv4地址")],-1),M=t("tr",null,[t("td",{style:{"text-align":"center"}},"services.msc"),t("td",{style:{"text-align":"center"}},"打开服务")],-1),B={style:{"text-align":"center"}},D={href:"https://www.baidu.com",target:"_blank",rel:"noopener noreferrer"},S=t("td",{style:{"text-align":"center"}},"显示d盘下的目录以最大(最小)窗口方式打开d盘打开d盘下的1.txt文件打开百度网址",-1),P=t("tr",null,[t("td",{style:{"text-align":"center"}},"md d:\\a"),t("td",{style:{"text-align":"center"}},"在d盘下创建a目录")],-1),k=t("tr",null,[t("td",{style:{"text-align":"center"}},"type file.txt"),t("td",{style:{"text-align":"center"}},"查看文本文件内容")],-1),I=t("tr",null,[t("td",{style:{"text-align":"center"}},"start notepad file.txt"),t("td",{style:{"text-align":"center"}},"用记事本打开文本文件")],-1),A=n(`<p>cd命令只能切换当前目录(文件夹)而不能用来进入或打开文本文件</p><p>cmd命令窗口使用 ↑ 可以快捷显示前一次输入的内容</p><h3 id="使用cmd定时关机" tabindex="-1"><a class="header-anchor" href="#使用cmd定时关机" aria-hidden="true">#</a> 使用cmd定时关机</h3><p>需要以管理员权限运行</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>shutdown /s /t 1800 //三十分钟后关机
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="生成树状目录结构" tabindex="-1"><a class="header-anchor" href="#生成树状目录结构" aria-hidden="true">#</a> 生成树状目录结构</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>命令模板：tree Path [/F] [/A]
Path:文件夹位置 如 D:Desktop
[/F]:显示所有目录及目录下的所有文件，省略时只显示目录，不显示目录下的文件
[/A]:使用ASCII字符，而不是用扩展字符

例子：把D盘nodejs目录下的目录树输出到D盘的result.txt文件
tree D:\\nodejs &gt; D:result.txt

例子：把D盘nodejs目录下的目录及文件目录树输出到D盘的result.txt文件
tree D:\\nodejs /f &gt; D:result.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p><b style="color:#8f71e0;">tree 命令涉及的文件名不能有空格</b></p></div><h2 id="bat" tabindex="-1"><a class="header-anchor" href="#bat" aria-hidden="true">#</a> Bat</h2>`,9),N=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"命令"),t("th",{style:{"text-align":"center"}},"例子"),t("th",{style:{"text-align":"center"}},"解释")])],-1),j=t("tr",null,[t("td",{style:{"text-align":"center"}},"echo"),t("td",{style:{"text-align":"center"}},"echo Hello World"),t("td",{style:{"text-align":"center"}},"打印Hello World")],-1),J=t("tr",null,[t("td",{style:{"text-align":"center"}},"pause"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"center"}},"暂停 一般最后都要使用")],-1),O=t("tr",null,[t("td",{style:{"text-align":"center"}},"@echo off"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"center"}},"关闭回显 一般写在开头")],-1),V=t("tr",null,[t("td",{style:{"text-align":"center"}},"rem or ：："),t("td",{style:{"text-align":"center"}},"rem 这是注释：： 这也是注释"),t("td",{style:{"text-align":"center"}},"注释")],-1),C=t("tr",null,[t("td",{style:{"text-align":"center"}},"exit"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"center"}},"退出")],-1),E=t("tr",null,[t("td",{style:{"text-align":"center"}},"goto"),t("td",{style:{"text-align":"center"}},"goto xxx"),t("td",{style:{"text-align":"center"}})],-1),L=t("tr",null,[t("td",{style:{"text-align":"center"}},"call demo.bat"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"center"}},"调用demo.bat脚本两个文件要在同一路径下")],-1),H=t("tr",null,[t("td",{style:{"text-align":"center"}},"sort demo.txtsort demo.txt /o cao.txt"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"center"}},"对这个文件的内容按行进行排序sort demo.txt /o cao.txt对这个文件的内容进行排序并且生成排序后的文件cao.txt")],-1),W=t("td",{style:{"text-align":"center"}},">",-1),q={style:{"text-align":"center"}},K={href:"https://www.baidu.com",target:"_blank",rel:"noopener noreferrer"},Q=t("td",{style:{"text-align":"center"}},"将ping的结果写在d盘下的cao.txt文件中去，如果没有cao.txt文件则自动创建",-1),R=n('<h2 id="utf-8-与-utf-8mb4" tabindex="-1"><a class="header-anchor" href="#utf-8-与-utf-8mb4" aria-hidden="true">#</a> UTF-8 与 UTF-8MB4</h2><p>相同点：UTF-8 和 UTF-8MB4 都是字符编码方案，用于表示文本中的字符。</p><p><strong>UTF-8</strong></p><ul><li>UTF-8 是一种可变长度的字符编码方案，最早由Ken Thompson和Rob Pike在Plan 9操作系统中开发。</li><li>UTF-8 可以表示 Unicode 字符集中的所有字符，包括基本多文种平面 (BMP) 和补充多文种平面 (SMP) 中的字符。</li><li>UTF-8 使用1到4个字节来表示字符，根据字符的 Unicode 码点而变化。常见的ASCII字符使用一个字节表示，而较大的字符则使用多个字节。</li><li>utf-8编码在txt文件中一个英文字符占一个字节，一个汉字占三个字节</li></ul><p><strong>UTF-8MB4</strong></p><ul><li>UTF-8MB4 也是 UTF-8 的一种扩展，它是 MySQL 数据库中引入的一个字符集，用于存储包括表情符号在内的一些特殊字符。</li><li>UTF-8MB4 可以表示 Unicode 字符集中的所有字符，包括基本多文种平面 (BMP)、补充多文种平面 (SMP) 和辅助平面 (Astral Plane) 中的字符。</li><li>UTF-8MB4 使用1到4个字节来表示字符，与普通的 UTF-8 相同，但它还可以表示 SMP 和 Astral Plane 中的字符，这些字符需要4个字节来编码。</li></ul><p>两者之间的区别：UTF-8MB4主要用于MySql数据库中，其能存储表情包，而UTF-8不行</p><h2 id="名词解释" tabindex="-1"><a class="header-anchor" href="#名词解释" aria-hidden="true">#</a> 名词解释</h2><table><thead><tr><th style="text-align:center;">名词</th><th style="text-align:center;">解释</th></tr></thead><tbody><tr><td style="text-align:center;">序列化</td><td style="text-align:center;">将Java对象转为JSON对象</td></tr><tr><td style="text-align:center;">反序列化</td><td style="text-align:center;">将JSON对象解析为Java对象</td></tr><tr><td style="text-align:center;">脚手架(Scaffold）</td><td style="text-align:center;">是一个用于快速构建项目结构和生成初始代码的工具或模板。它可以帮助开发人员避免从头开始创建项目，而是提供了一个预定义的项目结构、文件和配置，使项目启动更加迅速和一致。</td></tr><tr><td style="text-align:center;">关系型数据库</td><td style="text-align:center;">是指采用了关系模型来组织数据的数据库，简单来说就是二维表格模型。</td></tr></tbody></table>',9);function z(G,X){const l=a("ExternalLinkIcon");return r(),i("div",null,[o,t("table",null,[x,t("tbody",null,[h,g,_,u,y,m,b,p,v,f,U,F,T,w,M,t("tr",null,[t("td",B,[e("start d:start /max(min) d:start d:\\1.txtstart "),t("a",D,[e("www.baidu.com"),d(l)])]),S]),P,k,I])]),A,t("table",null,[N,t("tbody",null,[j,J,O,V,C,E,L,H,t("tr",null,[W,t("td",q,[e("ping "),t("a",K,[e("www.baidu.com"),d(l)]),e(" > d:\\cao.txt")]),Q])])]),R])}const $=s(c,[["render",z],["__file","编程相关知识.html.vue"]]);export{$ as default};
