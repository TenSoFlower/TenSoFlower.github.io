import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as i,e as n}from"./app-7e1b5726.js";const d="/assets/image-1696389745094-839fb5d8.png",l="/assets/image-1696389745216-1eb63259.png",a="/assets/image-1696389744894-95f3c5b8.png",s="/assets/image-1696389745032-10ba16d7.png",r="/assets/image-1696389745037-a45f29ae.png",u={},o=n(`<h1 id="html" tabindex="-1"><a class="header-anchor" href="#html" aria-hidden="true">#</a> HTML</h1><h2 id="模板" tabindex="-1"><a class="header-anchor" href="#模板" aria-hidden="true">#</a> 模板</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!DOCTYPE html&gt; //表示是HTML5版本
&lt;html&gt;

	&lt;head&gt;
		&lt;meta charset=&quot;utf-8&quot;&gt; //设置编码格式
		&lt;title&gt;&lt;/title&gt; //网页标题
	&lt;/head&gt;
	
	&lt;body&gt;
	
	&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="通用属性" tabindex="-1"><a class="header-anchor" href="#通用属性" aria-hidden="true">#</a> 通用属性</h2><p>id：用来给标签取一个唯一的名称。id名称在一个网页必须是唯一的。</p><p>class：用来给标签取一个类名。</p><p>style：用来设置该标签的行内样式。</p><p>title：当鼠标移到该标签，所显示的提示内容。</p><h2 id="注释" tabindex="-1"><a class="header-anchor" href="#注释" aria-hidden="true">#</a> 注释</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!-- 我是注释 --&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="特殊符号" tabindex="-1"><a class="header-anchor" href="#特殊符号" aria-hidden="true">#</a> 特殊符号</h2><table><thead><tr><th>&lt;</th><th>&lt;</th><th>小于号或显示标记</th></tr></thead><tbody><tr><td>&gt;</td><td>&gt;</td><td>大于号或显示标记</td></tr><tr><td>&amp;</td><td>&amp;</td><td>可用于显示其它特殊字符</td></tr><tr><td>&quot;</td><td>&quot;</td><td>引号</td></tr><tr><td>®</td><td>®</td><td>已注册</td></tr><tr><td>©</td><td>©</td><td>版权</td></tr><tr><td>™</td><td>™</td><td>商标</td></tr><tr><td></td><td> </td><td>半个空白位</td></tr><tr><td></td><td>&amp;emsp</td><td>一个空白位</td></tr><tr><td></td><td> </td><td>不断行的空白</td></tr></tbody></table><h2 id="目录-路径" tabindex="-1"><a class="header-anchor" href="#目录-路径" aria-hidden="true">#</a> 目录&amp;路径</h2><p>目录文件夹：就是普通文件夹，里面存放了我们做页面所需要的相关素材比如html文件，图片等。</p><p>根目录：打开目录文件夹的第一层就是根目录</p><p>相对路径</p><figure><img src="`+d+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>绝对路径</p><p>指目录下的绝对位置，通常从盘符开始的路径或完整的网络地址</p><h2 id="标签" tabindex="-1"><a class="header-anchor" href="#标签" aria-hidden="true">#</a> 标签</h2><h3 id="div标签和span标签" tabindex="-1"><a class="header-anchor" href="#div标签和span标签" aria-hidden="true">#</a> Div标签和Span标签</h3><p>一行只能放一个Div标签</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;div&gt;我是一个div标签一个人单独占一行&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>span一行可以放多个</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;span&gt;百度&lt;/span&gt;
&lt;span&gt;搜狐&lt;/span&gt;
&lt;span&gt;新浪&lt;/span&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="标题标签" tabindex="-1"><a class="header-anchor" href="#标题标签" aria-hidden="true">#</a> 标题标签</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;h1&gt;一号&lt;/h1&gt;
&lt;h2&gt;二号&lt;/h2&gt;
&lt;h3&gt;三号/h3&gt;
&lt;h4&gt;四号&lt;/h4&gt;
&lt;h5&gt;五号&lt;/h5&gt;
&lt;h6&gt;六号&lt;/h6&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="段落标签" tabindex="-1"><a class="header-anchor" href="#段落标签" aria-hidden="true">#</a> 段落标签</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;p&gt;这是一个段落&lt;/p&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="换行标签" tabindex="-1"><a class="header-anchor" href="#换行标签" aria-hidden="true">#</a> 换行标签</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;br/&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="水平线标签" tabindex="-1"><a class="header-anchor" href="#水平线标签" aria-hidden="true">#</a> 水平线标签</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;hr/&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="字体和字体样式标签" tabindex="-1"><a class="header-anchor" href="#字体和字体样式标签" aria-hidden="true">#</a> 字体和字体样式标签</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;font size=&quot;3&quot; face=&quot;微软雅黑&quot; color=&quot;red&quot;&gt;字体&lt;/font&gt;
&lt;b&gt;粗体&lt;/b&gt;
&lt;storng&gt;粗体&lt;/strong&gt;
&lt;i&gt;倾斜&lt;/i&gt;
&lt;em&gt;倾斜&lt;/em&gt;
&lt;del&gt;删除线&lt;/del&gt;
&lt;s&gt;删除线&lt;/s&gt;
&lt;ins&gt;下划线&lt;/ins&gt;
&lt;u&gt;下划线&lt;/u&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="图像标签" tabindex="-1"><a class="header-anchor" href="#图像标签" aria-hidden="true">#</a> 图像标签</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;img  src=&quot;图片的相对/绝对路径&quot;
      alt=&quot;图像的替代文字&quot; 
      title=&quot;鼠标悬停提示文字&quot;
      width=&quot;图像宽度&quot;
      height=&quot;图像高度&quot;
      border=&quot;图像边框粗细&quot;&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="链接标签" tabindex="-1"><a class="header-anchor" href="#链接标签" aria-hidden="true">#</a> 链接标签</h3><p>从一个页面链接到另外一个页面</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;a href=&quot;http://www.baidu.com&quot; alt=&quot;鼠标悬停提示文字&quot;
  target=&quot;_  self/_blank/_top/_parent&quot;&gt;图片/文字&lt;/a&gt;
&lt;a href=&quot;#&quot;&gt;空连接&lt;/a&gt;
&lt;a href=&quot;index.html&quot;&gt;内部连接&lt;/a&gt;
&lt;a href=&quot;img.zip&quot;&gt;下载文件&lt;/a&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th style="text-align:center;">打开方式</th><th style="text-align:center;">属性值</th></tr></thead><tbody><tr><td style="text-align:center;">当前窗口打开</td><td style="text-align:center;">_self</td></tr><tr><td style="text-align:center;">新窗口打开</td><td style="text-align:center;">_blank</td></tr></tbody></table><figure><img src="`+l+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="列表标签" tabindex="-1"><a class="header-anchor" href="#列表标签" aria-hidden="true">#</a> 列表标签</h3><p><b style="color:#3e547d;"><strong>无序列表</strong></b></p><p>ul里面不能放任何标签</p><p>li里面能放别的标签</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;ul type=&quot;disc/circle/square&quot;&gt;
  &lt;li&gt;语文&lt;/li&gt;
  &lt;li&gt;数学&lt;/li&gt;
  &lt;li&gt;英语&lt;/li&gt;
  &lt;li&gt;计算机&lt;/li&gt;
&lt;/ul&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th style="text-align:center;"><strong>值</strong></th><th style="text-align:center;"><strong>描述</strong></th></tr></thead><tbody><tr><td style="text-align:center;">disc</td><td style="text-align:center;">默认值。实心圆。</td></tr><tr><td style="text-align:center;">circle</td><td style="text-align:center;">空心圆。</td></tr><tr><td style="text-align:center;">square</td><td style="text-align:center;">实心方块。</td></tr></tbody></table><p><b style="color:#3e547d;"><strong>有序列表</strong></b></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;ol type=&quot;1/a/A/i/I&quot;&gt;
  &lt;li&gt;语文&lt;/li&gt;
  &lt;li&gt;数学&lt;/li&gt;
  &lt;li&gt;英语&lt;/li&gt;
  &lt;li&gt;计算机&lt;/li&gt;
&lt;/ol&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th style="text-align:center;"><strong>值</strong></th><th style="text-align:center;"><strong>描述</strong></th></tr></thead><tbody><tr><td style="text-align:center;">1</td><td style="text-align:center;">默认值。数字有序列表。（1、2、3、4）</td></tr><tr><td style="text-align:center;">a</td><td style="text-align:center;">按字母顺序排列的有序列表，小写。（a、b、c、d）</td></tr><tr><td style="text-align:center;">A</td><td style="text-align:center;">按字母顺序排列的有序列表，大写。（A、B、C、D）</td></tr><tr><td style="text-align:center;">i</td><td style="text-align:center;">罗马字母，小写。（i, ii, iii, iv）</td></tr><tr><td style="text-align:center;">I</td><td style="text-align:center;">罗马字母，大写。（I, II, III, IV）</td></tr></tbody></table><p><b style="color:#3e547d;"><strong>自定义列表</strong></b></p><figure><img src="`+a+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="表格标签" tabindex="-1"><a class="header-anchor" href="#表格标签" aria-hidden="true">#</a> 表格标签</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;table&gt;
  &lt;caption&gt;标题&lt;/caption&gt;
  &lt;thead&gt;&lt;/thead&gt;
  &lt;tbody&gt;&lt;/tbody&gt;
  &lt;tfoot&gt;&lt;/tfoot&gt; 
&lt;/table&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>table里面的标签</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>th   表头
tr   一行
td   一列
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>table常见属性 以下属性需要写到table标签中去</p><figure><img src="`+s+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+r+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="表单标签" tabindex="-1"><a class="header-anchor" href="#表单标签" aria-hidden="true">#</a> 表单标签</h3><p>使用表单目的是为了收集用户信息</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;form action=&quot;xxxx&quot; method=&quot;get/post&quot;&gt;
    
&lt;/form&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="表单元素" tabindex="-1"><a class="header-anchor" href="#表单元素" aria-hidden="true">#</a> 表单元素</h3><p>input类</p><table><thead><tr><th style="text-align:center;">属性</th><th style="text-align:center;">描述</th></tr></thead><tbody><tr><td style="text-align:center;">text</td><td style="text-align:center;">文本框</td></tr><tr><td style="text-align:center;">password</td><td style="text-align:center;">密码框</td></tr><tr><td style="text-align:center;">radio</td><td style="text-align:center;">单选框</td></tr><tr><td style="text-align:center;">checkbox</td><td style="text-align:center;">复选框</td></tr><tr><td style="text-align:center;">file</td><td style="text-align:center;">文件框</td></tr><tr><td style="text-align:center;">button</td><td style="text-align:center;">普通按钮</td></tr><tr><td style="text-align:center;">image</td><td style="text-align:center;">图片按钮</td></tr><tr><td style="text-align:center;">submit</td><td style="text-align:center;">提交按钮</td></tr><tr><td style="text-align:center;">reset</td><td style="text-align:center;">重置按钮</td></tr><tr><td style="text-align:center;">textarea</td><td style="text-align:center;">文本域</td></tr><tr><td style="text-align:center;">select</td><td style="text-align:center;">下拉框</td></tr></tbody></table><p><b style="color:#3e547d;"><strong>text【文本框】</strong></b></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>text:单行文本输入框  type=&quot;text&quot;可以不写， 默认值。
&lt;input type=&quot;text&quot; name=&quot;&quot; id=&quot;&quot;&gt;
自有属性：placeholder(提示）
/name（命名）
/minlength和maxlength（最少/多输入的字符个数）
/disabled（失效）
/readonly（只读）
value（默认值）
/pattern（正则匹配）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><b style="color:#3e547d;"><strong>password【密码框】</strong></b></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>password: 密码输入框  type=&quot;password&quot;
&lt;input type=&quot;password&quot; name=&quot;&quot; id=&quot;&quot;&gt;
属性与text一样
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><b style="color:#3e547d;"><strong>radio【单选钮】</strong></b></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>通常是两项以上。name必须保持一致
男:&lt;input type=&quot;radio&quot; name=&quot;sex&quot; id=&quot;&quot;&gt;
女：&lt;input type=&quot;radio&quot; name=&quot;sex&quot; id=&quot;&quot;&gt;
自有属性：
name（必须要有）name属性要相同
/value
/checked（选中）
/disabled（失效）
/readonly（只读）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><b style="color:#3e547d;"><strong>checkbox【复选框】</strong></b></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>阅读:&lt;input type=&quot;checkbox&quot; name=&quot;hobby&quot; value=&quot;1&quot; id=&quot;&quot;&gt;
打游戏：&lt;input type=&quot;checkbox&quot; name=&quot;hobby&quot;  value=&quot;2&quot; id=&quot;&quot;&gt;
可以用来选择0项、1项或多项。
常用属性有：name（必须要有）name属性要相同
/value
/checked（默认选中）
/disabled（失效)
/readonly（只读）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><b style="color:#3e547d;"><strong>file【文件上传按钮】</strong></b></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>使用单进行文件上传时，必须设置表单的enctype属性。enctype属性指定了表单数据在提交时的编码方式，对于文件上传，需要使用正确的编码方式来确保文件的正确传输。
对于文件上传，通常使用以下两种enctype值之一：
multipart/form-data：这是最常用的文件上传编码类型。当使用multipart/form-data编码类型时，表单数据被分割成多个部分（或称为&quot;part&quot;），每个部分包含特定的表单字段和其对应的值。在这种情况下，文件作为其中的一部分传输。
示例：
&lt;form enctype=&quot;multipart/form-data&quot; action=&quot;upload1&quot; method=&quot;post&quot;&gt;
  &lt;input type=&quot;file&quot; name=&quot;fileToUpload&quot; id=&quot;fileToUpload&quot;&gt;
  &lt;input type=&quot;submit&quot; value=&quot;Upload Image&quot; name=&quot;submit&quot;&gt;
&lt;/form&gt;
application/x-www-form-urlencoded：这是最常见的表单编码类型，用于传输简单的文本数据。然而，使用这种编码类型无法直接上传文件，因为文件本身被转换为URL编码的字符串，可能会导致文件损坏或无法正确解析。
示例：
&lt;form action=&quot;upload2&quot; method=&quot;post&quot;&gt;
  &lt;input type=&quot;text&quot; name=&quot;username&quot; value=&quot;John&quot;&gt;
  &lt;input type=&quot;password&quot; name=&quot;password&quot; value=&quot;password&quot;&gt;
  &lt;input type=&quot;submit&quot; value=&quot;Submit&quot;&gt;
&lt;/form&gt;
在大多数情况下，为了上传文件，您应该使用multipart/form-data编码类型，并确保在表单中包含一个文件输入字段（&lt;input type=&quot;file&quot;&gt;）。
自用属性列表：
accept: 可选属性，用于限制用户只能选择特定类型的文件。可以指定文件类型（如&quot;image/*&quot;）或多个文件类型，使用逗号分隔。
multiple: 可选属性，允许用户选择多个文件进行上传。
disabled: 可选属性，禁用输入字段，使其无法由用户进行交互。
required: 可选属性，指定输入字段是必填的。如果用户在提交表单之前没有选择文件，将引发验证错误。
capture: 可选属性，指定用于捕获图像或视频的设备（如摄像头、麦克风等）。适用于支持多媒体设备的浏览器。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><b style="color:#3e547d;"><strong>button【普通按钮】</strong></b></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>通常用它去调用脚本代码。
&lt;form action=&quot;upload2&quot; method=&quot;post&quot;&gt;
&lt;input type=&quot;button&quot; value=&quot;点击&quot; &gt;
&lt;/form&gt;
常用属性有：value（按钮的标题）/disabled（失效）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><b style="color:#3e547d;"><strong>image【图片按钮】</strong></b></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>用法与button一样。
&lt;form action=&quot;upload2&quot; method=&quot;post&quot;&gt;
&lt;input type=&quot;image&quot; src=&quot;图片路径&quot;&gt;
&lt;/form&gt;
有一个特殊属性：src(用来加载提示图片，用它替换了value)  它有提交功能，与submit功能一样。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><b style="color:#3e547d;"><strong>submit【提交按钮】</strong></b></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>用来将表单数据提交到后台。
&lt;form action=&quot;upload2&quot; method=&quot;post&quot;&gt;
&lt;input type=&quot;submit&quot; value=&quot;保存&quot;&gt;
&lt;/form&gt;
常用属性有：value（按钮的标题）/disabled（失效）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><b style="color:#3e547d;"><strong>reset【重置按钮】</strong></b></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>将表单所有组件输入的内容全部清空，还原为初始状态。
&lt;form action=&quot;upload2&quot; method=&quot;post&quot;&gt;
&lt;input type=&quot;reset&quot; value=&quot;重置&quot;&gt;
&lt;/form&gt;
常用属性有：value（按钮的标题）/disabled（失效）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><b style="color:#3e547d;"><strong>文本域</strong></b></p><p>文本域（也可以叫多行文本框），主要用于输入大批量的文本内容。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;form action=&quot;submit&quot; method=&quot;post&quot;&gt;
 &lt;label for=&quot;message&quot;&gt;留言：&lt;/label&gt;
 &lt;textarea name=&quot;message&quot; id=&quot;message&quot; rows=&quot;10&quot; cols=&quot;50&quot; placeholder=&quot;请在此留言...&quot;&gt;
 &lt;/textarea&gt;
 &lt;br&gt;
 &lt;input type=&quot;submit&quot; value=&quot;提交&quot;&gt;
 &lt;/form&gt;
常用属性：name/id/cols(列数)/rows(行数)/placeholder/minlength/maxlength/required(必须输入)/value
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><b style="color:#3e547d;"><strong>下拉框</strong></b></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;select name=&quot;select1&quot;&gt;
  &lt;option value=&quot;男&quot;&gt;男&lt;/option&gt;
  &lt;option value=&quot;女&quot;&gt;女&lt;/option&gt;
&lt;/select&gt;
下拉列表框，默认用于单项选择。用option呈现每个选项。
multiple属性：表示可以多选，这时的下拉列表框变成了列表框
size:最多显示的行数
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,89),c=[o];function v(g,m){return e(),i("div",null,c)}const h=t(u,[["render",v],["__file","HTML.html.vue"]]);export{h as default};
