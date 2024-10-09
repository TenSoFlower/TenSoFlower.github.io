import{_ as d}from"./plugin-vue_export-helper-c27b6911.js";import{r as s,o as t,c as a,b as e,d as n,a as l,e as r}from"./app-0e6b4948.js";const c={},v=e("h1",{id:"redis",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#redis","aria-hidden":"true"},"#"),n(" Redis")],-1),u=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"center"}},"信息"),e("th",{style:{"text-align":"center"}},"描述")])],-1),m=e("tr",null,[e("td",{style:{"text-align":"center"}},"概念"),e("td",{style:{"text-align":"center"}},"Redis是一个基于内存的Key-Value结构数据库（非关系型数据库），其是基于内存存储，读写性能高。")],-1),o=e("td",{style:{"text-align":"center"}},"官网",-1),b={style:{"text-align":"center"}},h={href:"https://www.redis.net.cn/",target:"_blank",rel:"noopener noreferrer"},E=e("tr",null,[e("td",{style:{"text-align":"center"}},"五种数据类型"),e("td",{style:{"text-align":"center"}},"字符串 哈希列表集合有序集合")],-1),g=r(`<h2 id="所需依赖" tabindex="-1"><a class="header-anchor" href="#所需依赖" aria-hidden="true">#</a> 所需依赖</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;dependency&gt;
    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
    &lt;artifactId&gt;spring-boot-starter-data-redis&lt;/artifactId&gt;
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="打开方式" tabindex="-1"><a class="header-anchor" href="#打开方式" aria-hidden="true">#</a> 打开方式</h2><p>在redis目录下cmd 输入 redis-server.exe redis.windows.conf</p><h2 id="停止方式" tabindex="-1"><a class="header-anchor" href="#停止方式" aria-hidden="true">#</a> 停止方式</h2><p>在命令窗口 按下 ctrl+c</p><p>在命令窗口下输入 redis-cli.exe shutdown</p><h2 id="启动客户端" tabindex="-1"><a class="header-anchor" href="#启动客户端" aria-hidden="true">#</a> 启动客户端</h2><p>在redis目录下cmd 输入 redis-cli</p><h3 id="命令" tabindex="-1"><a class="header-anchor" href="#命令" aria-hidden="true">#</a> 命令</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//SET 设置键值对 SET name
//SETNX 当键不存在时才设置，存在不做任何动作 SETNX name
//GET 获取键对应的值 GET name
//DEL 删除键值对 DEL name
//EXISTS 判断键值对是否存在 EXISTS name
//KEYS * 查找所有的键
//KEYS *me 查找所有以me结尾的键
//FLUSHALL 删除所有的键
//键的值设置中文之后再GET，对应键的值是以二进制的方式显示的，想正常显示中文需先使用
quit命令 
然后使用 redis-cli --raw 命令
重新登录再使用GET命令获取键对应的值
//clear 清空屏幕
//TTL 查看键的过期时间 TTL name
//EXPIRE 设置键的过期时间 EXPIRE name 10 name键过期时间十秒
//SETEX 同时设置键的过期时间和内容 SETEX name 5 熊猫人

//列表
//LPUSH 设置列表从开头添加元素 LPUSH letter a 在letter列表的头部添加元素a
//RPUSH 设置列表从尾部添加元素 RPUSH letter a 在letter列表的尾部添加元素a
//RPOP 删除列表最后的元素 RPOP letter 2 删除列表最后两个元素
//LPOP 删除列表开头的元素 LPOP letter 2 删除列表开始两个元素
//LLEN 查看列表的长度 LLEN letter
//LRANGE 获取列表元素 LRANGE letter 0 -1 获取letter列表中从0开始到最后的所有元素
//LTRIM 保留列表指定位置的元素 LTRIM letter 1 3

//集合 不能有重复
//SADD 增加元素 SADD course Redis 向course集合中增加Redis元素
//SMEMBERS 查看集合中的元素 SMEMBERS course
//SISMEMBER 查看一个元素是否在集合中 SISMEMBER course Redis
//SREM 删除元素 SREM course Redis

127.0.0.1:6379&gt; SET name Cao
OK
127.0.0.1:6379&gt; GET name
&quot;Cao&quot;
127.0.0.1:6379&gt; DEL name
(integer) 1
127.0.0.1:6379&gt; GET name
(nil)
127.0.0.1:6379&gt; EXISTS name
(integer) 0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Redis区分大小写</strong>都是按照字符串的方式存储数据。正常不能存储中文。</p>`,12);function S(_,p){const i=s("ExternalLinkIcon");return t(),a("div",null,[v,e("table",null,[u,e("tbody",null,[m,e("tr",null,[o,e("td",b,[e("a",h,[n("https://www.redis.net.cn/"),l(i)])])]),E])]),g])}const T=d(c,[["render",S],["__file","Redis.html.vue"]]);export{T as default};
