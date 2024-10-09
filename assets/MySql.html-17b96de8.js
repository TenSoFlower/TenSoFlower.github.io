import{_ as r}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as l,c as d,b as e,d as t,a as s,e as a}from"./app-4da6c02f.js";const o="/assets/1696299126057-493ae66a.png",c="/assets/image-1696034259992-34b88550.png",p="/assets/image-1696034288880-f5b3e578.png",g="/assets/image-1696034306124-b9b6df66.png",b="/assets/image-1696034314518-adb12d83.png",u="/assets/image-1696034321363-85dbc267.png",v="/assets/image-1696034336787-1e9feb87.png",m="/assets/image-1696034353680-0bd3c388.png",h="/assets/image-1696034360778-7b338a24.png",x="/assets/image-1696034367850-74a27022.png",y="/assets/image-1696034382308-f4a155ea.png",f="/assets/image-1696034392048-341bcde7.png",_="/assets/image-1696034399689-11ec33cf.png",E="/assets/image-1696034408654-063a75d5.png",B="/assets/image-1696034418472-199f6dc8.png",L="/assets/1696235026865-be994290.png",M="/assets/1696235131345-20d55d7e.png",k="/assets/1696237165533-dfbb06a3.png",S={},C=a('<h1 id="mysql" tabindex="-1"><a class="header-anchor" href="#mysql" aria-hidden="true">#</a> MySql</h1><h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> <strong>简介</strong></h2><p>MySQL是一个<strong>关系型数据库管理系统</strong>，由瑞典<strong>MySQL AB</strong>公司开发，属于 <strong>Oracle</strong>旗下产品。MySQL 是最流行的关系型数据管理系统之一，在 WEB应用方面，MySQL是最好的 RDBMS (Relational Database Management System，关系数据库管理系统) 应用软件之一。MySQL是一种关系型数据库管理系统，关系数据库将数据保存在不同的表中，而不是将所有数据放在一个大仓库内，这样就增加了速度并提高了灵活性。MySQL所使用的 SQL 语言是用于访问数据库的最常用标准化语言。MySQL 软件采用了双授权政策，分为社区版和商业版，由于其体积小、速度快、总体拥有成本低，尤其是开放源码这一特点，一般中小型和大型网站的开发都选择 MySQL 作为<strong>网站数据库。</strong></p><h2 id="作用" tabindex="-1"><a class="header-anchor" href="#作用" aria-hidden="true">#</a> <strong>作用</strong></h2><table><thead><tr><th style="text-align:left;">作用</th><th style="text-align:left;">解释</th></tr></thead><tbody><tr><td style="text-align:left;">数据共享</td><td style="text-align:left;">数据共享包含所有用户可同时存取数据库中的数据，也包括用户可以用各种方式通过接口使用数据库，并提供数据共享。</td></tr><tr><td style="text-align:left;">减少数据的冗余度</td><td style="text-align:left;">同文件系统相比，由于数据库实现了数据共享，从而避免了用户各自建立应用文件。减少了大量重复数据，减少了数据冗余，维护了数据的一致性。</td></tr><tr><td style="text-align:left;">数据的独立性</td><td style="text-align:left;">数据的独立性包括逻辑独立性（数据库中数据库的逻辑结构和应用程序相互独立）和物理独立性（数据物理结构的变化不影响数据的逻辑结构）。</td></tr><tr><td style="text-align:left;">数据实现集中控制</td><td style="text-align:left;">文件管理方式中，数据处于一种分散的状态，不同的用户或同一用户在不同处理中其文件之间毫无关系。利用数据库可对数据进行集中控制和管理，并通过数据模型表示各种数据的组织以及数据间的联系。</td></tr><tr><td style="text-align:left;">数据一致性和可维护性，以确保数据的安全性和可靠性</td><td style="text-align:left;">主要包括：①安全性控制：以防止数据丢失、错误更新和越权使用；②完整性控制：保证数据的正确性、有效性和相容性；③并发控制：使在同一时间周期内，允许对数据实现多路存取，又能防止用户之间的不正常交互作用。</td></tr><tr><td style="text-align:left;">故障恢复</td><td style="text-align:left;">由数据库管理系统提供一套方法，可及时发现故障和修复故障，从而防止数据被破坏。数据库系统能尽快恢复数据库系统运行时出现的故障，可能是物理上或是逻辑上的错误。比如对系统的误操作造成的数据错误等</td></tr></tbody></table><h2 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h2><figure><img src="'+o+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="关系型数据库" tabindex="-1"><a class="header-anchor" href="#关系型数据库" aria-hidden="true">#</a> 关系型数据库</h2><p><b style="color:#3e547d;">主流的关系型数据库</b></p><p><b style="color:#8f71e0;">关系型数据库实际就是二维表结构</b></p><figure><img src="'+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="官网" tabindex="-1"><a class="header-anchor" href="#官网" aria-hidden="true">#</a> 官网</h2>',12),T={href:"https://dev.mysql.com/downloads/installer/",target:"_blank",rel:"noopener noreferrer"},j=e("h2",{id:"安装",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#安装","aria-hidden":"true"},"#"),t(" 安装")],-1),N=e("p",null,[e("b",{style:{color:"#3e547d"}},[e("strong",null,"版本")])],-1),q=e("p",null,"社区版-免费",-1),w=e("p",null,"商业版",-1),A=e("p",null,[e("b",{style:{color:"#3e547d"}},[e("strong",null,"下载视频教程")])],-1),I={href:"https://www.bilibili.com/video/BV1Kr4y1i7ru/?p=3&spm_id_from=pageDriver&vd_source=549482551e5288f70f4ac8e71f20781e",target:"_blank",rel:"noopener noreferrer"},Q=a('<h2 id="基础篇" tabindex="-1"><a class="header-anchor" href="#基础篇" aria-hidden="true">#</a> 基础篇</h2><h3 id="mysql服务的启动和停止命令" tabindex="-1"><a class="header-anchor" href="#mysql服务的启动和停止命令" aria-hidden="true">#</a> MySQL服务的启动和停止命令</h3><div class="hint-container warning"><p class="hint-container-title">注意</p><p><b style="color:#8f71e0;">cmd要以管理员权限运行</b></p></div><table><thead><tr><th style="text-align:center;">动作</th><th style="text-align:center;">命令</th></tr></thead><tbody><tr><td style="text-align:center;">启动</td><td style="text-align:center;">net start mysql80</td></tr><tr><td style="text-align:center;">停止</td><td style="text-align:center;">net stop mysql80</td></tr></tbody></table><h3 id="通用语法" tabindex="-1"><a class="header-anchor" href="#通用语法" aria-hidden="true">#</a> 通用语法</h3><p>SQL语句可以单行或多行书写，以分号结尾</p><p>SQL语句可以使用空格缩进来增强语句的可读性</p><p>MySQL数据库的SQL语句不区分大小写，关键字建议使用大写</p><p>单行注释 -- 或者 #</p><p>多行注释 /* */</p><p><b style="color:#3e547d;"><strong>分类</strong></b></p><figure><img src="'+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="数据库操作" tabindex="-1"><a class="header-anchor" href="#数据库操作" aria-hidden="true">#</a> 数据库操作</h3><p><b style="color:#3e547d;"><strong>创建数据库</strong></b></p><p>普通创建：create database xxx;</p><p>如果没有则创建：create database if not exists xxx;</p><p>创建数据库并且指定字符集为utf8mb4：create database xxx default charset utf8mb4</p><p><b style="color:#3e547d;"><strong>使用数据库</strong></b></p><p>use xxx;</p><p><b style="color:#3e547d;"><strong>删除数据库</strong></b></p><p>普通删除：drop database xxx;</p><p>如果存在则删除：drop database if exists xxx;</p><p><b style="color:#3e547d;"><strong>显示所有数据库：</strong></b></p><p>show databases;</p><p><b style="color:#3e547d;"><strong>显示当前使用的数据库</strong></b></p><p>select database();</p><h3 id="表操作" tabindex="-1"><a class="header-anchor" href="#表操作" aria-hidden="true">#</a> 表操作</h3><p><b style="color:#3e547d;"><strong>创建表</strong></b></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>DROP TABLE IF EXISTS `sys_role`;\nCREATE TABLE `sys_role` \n(\n    `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT &#39;角色编号&#39;,\n    `role_code` varchar(50) NOT NULL COMMENT &#39;角色编码&#39;,\n    `role_name` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT &#39;角色名称&#39;,\n    `create_user` bigint(20) DEFAULT NULL COMMENT &#39;创建人&#39;,\n    `create_time` datetime DEFAULT NULL COMMENT &#39;创建时间&#39;,\n    `update_time` datetime DEFAULT NULL COMMENT &#39;修改时间&#39;,\n    `remark` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT &#39;备注&#39;,\n    `is_delete` tinyint(4) DEFAULT &#39;0&#39; COMMENT &#39;是否删除(0-未删除，1-已删除)&#39;,\n    PRIMARY KEY (`id`)\n) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>COMMENT 注释</p><p>ENGINE 存储引擎</p><p>CHARSET 字符集</p><p>COLLATE 排序顺序</p><p><b style="color:#3e547d;"><strong>删除表</strong></b></p><p>普通删除：drop table xxx;</p><p>如果存在则删除：drop table if exists xxx;</p><p>删除指定表，并重新创建该表，此时表中就没有数据了：truncate table 表名;</p><p><b style="color:#3e547d;"><strong>修改表名</strong></b></p><p>alter table 表名 rename to 新的表名;</p><p><b style="color:#3e547d;"><strong>表中增加字段</strong></b></p><p>alter table 表名 add 字段 类型(长度) 注释 约束;</p><p><b style="color:#3e547d;"> 修改表中字段的数据类型</b></p><p>修改数据类型：alter table 表名 modify 字段名 新数据类型(长度);</p><p>修改字段名和字段类型：alter table 表名 change 旧字段名 新字段名 类型(长度) 注释 约束;</p><p><b style="color:#3e547d;"><strong>删除字段</strong></b></p><p>alter table 表名 drop 字段名;</p><p><b style="color:#3e547d;"><strong>查询表结构</strong></b></p><p>desc xxx;</p><p><b style="color:#3e547d;"><strong>查询指定表的建表语句</strong></b></p><p>show create table xxx;</p><p><b style="color:#3e547d;"><strong>查询当前数据库所有表</strong></b></p><p>show tables;</p><p><b style="color:#3e547d;"><strong>表中的数据类型</strong></b></p><figure><img src="'+g+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>age TINYINT UNSIGNED //定义age为无符号</strong></p><p><strong>score double(4,1) //总长度最长为4，有一位小数点 如85.6</strong></p><figure><img src="'+b+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+u+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="增加数据" tabindex="-1"><a class="header-anchor" href="#增加数据" aria-hidden="true">#</a> 增加数据</h3><p><b style="color:#3e547d;"><strong>给指定字段添加数据</strong></b></p><p>Insert into 表名(字段1，字段2.....) values(值1，值2.....);</p><p><b style="color:#3e547d;"><strong>给全部字段添加数据</strong></b></p><p>Insert into 表名 values(值1，值2.....);</p><h3 id="删除数据" tabindex="-1"><a class="header-anchor" href="#删除数据" aria-hidden="true">#</a> 删除数据</h3><p>delete from 表名 where 条件;</p><h3 id="修改数据" tabindex="-1"><a class="header-anchor" href="#修改数据" aria-hidden="true">#</a> 修改数据</h3><p>update 表名 set 字段名1=值1，字段名2=值2 ..... where 条件;</p><h3 id="查询数据" tabindex="-1"><a class="header-anchor" href="#查询数据" aria-hidden="true">#</a> 查询数据</h3><p><b style="color:#3e547d;"><strong>查询表中的所有数据</strong></b></p><p>select * from 表名</p><p><b style="color:#3e547d;"><strong>查询表中指定字段名的数据</strong></b></p><p>select 字段1 as 别名1，字段2.... from 表名</p><p><b style="color:#3e547d;"><strong>去重查找</strong></b></p><p>select distinct 字段列表 from 表名;</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>select
  字段列表
from
  表名列表
where
  条件列表
group by
  分组字段列表
having
  分组后条件列表
order by
  排序字段列表
limit
  分页参数
 
聚合函数 count max min avg sum
select 聚合函数(字段列表) from 表名;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><b style="color:#3e547d;"><strong>条件查询</strong></b></p><figure><img src="`+v+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><b style="color:#3e547d;"><strong>分组查询</strong></b></p><p>select 字段列表 from 表名 where 条件 group by 分组字段名 having 分组后过滤条件;</p><p>where与having区别</p><p>执行时机不同：where是分组前进行过滤，不满足where条件不参与分组，having是分组之后对结果进行过滤</p><p>判断条件不同：where不能对聚合函数进行判断，而having可以</p><p><b style="color:#3e547d;"><strong>排序查询</strong></b></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>select 字段列表 from 表名 order by 字段1 排序方式1，字段2 排序方式2;
asc 升序-默认值
desc 降序
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><b style="color:#3e547d;"><strong>分页查询</strong></b></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>select 字段列表 from 表名 limit 起始索引，查询记录数;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><b style="color:#3e547d;"><strong>多表查询</strong></b></p><p><b style="color:#6E8B74;"><strong>多表关系</strong></b></p><table><thead><tr><th>关系</th><th>建立表的规则</th></tr></thead><tbody><tr><td>一对一</td><td>任意选取一方建立外键</td></tr><tr><td>一对多</td><td>在多的一方建立外键</td></tr><tr><td>多对多</td><td>建立第三张中间表，中间表至少包含两个外键，分别关联两方主键</td></tr></tbody></table><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//笛卡尔积
select * from emp,dept;   //产生的数据为emp的数量乘以dept的数量
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><b style="color:#6E8B74;"><strong>连接方式</strong></b></p><table><thead><tr><th style="text-align:center;">连接方式</th><th style="text-align:center;">解释</th></tr></thead><tbody><tr><td style="text-align:center;">内连接</td><td style="text-align:center;">相当于查询A B交集的部分数据</td></tr><tr><td style="text-align:center;">左外连接</td><td style="text-align:center;">查询左表所有数据，以及两张表交集部分数据</td></tr><tr><td style="text-align:center;">右外连接</td><td style="text-align:center;">查询右表所有数据，以及两张表交集部分数据</td></tr><tr><td style="text-align:center;">自连接</td><td style="text-align:center;">当前表与自身的连接查询，自连接必须使用表别名</td></tr></tbody></table><p><b style="color:#5CB3CC;"><strong>内连接</strong></b></p><figure><img src="`+m+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><b style="color:#F8BFB5;"><strong>隐式内连接</strong></b></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>select 字段列表 from 表1，表2 where 条件；
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><b style="color:#F8BFB5;"><strong>显式内连接</strong></b></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>select 字段列表 from 表1 inner join 表2 on 条件；
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><b style="color:#5CB3CC;"><strong>左外连接</strong></b></p><figure><img src="`+h+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>select 字段列表 from 表1 left join 表2 on 条件;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><b style="color:#5CB3CC;"><strong>右外连接</strong></b></p><figure><img src="`+x+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>select 字段列表 from 表1 right join 表2 on 条件;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><b style="color:#5CB3CC;"><strong>自连接</strong></b></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>select 字段列表 from 表A 别名A join 表A 别名B on 条;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr><p><b style="color:#3e547d;"><strong>联合查询</strong></b></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>select 字段列表 from 表A ...
union [all]
select 字段列表 from 表B ...

单独的union会去重
union all 不会去重
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><p><b style="color:#3e547d;"><strong>子查询</strong></b></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>select * from t1 where column1 = (select column1 from t2);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="管理用户" tabindex="-1"><a class="header-anchor" href="#管理用户" aria-hidden="true">#</a> 管理用户</h3><p><b style="color:#3e547d;"><strong>查询用户</strong></b></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>use mysql;
select * 
from user;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><b style="color:#3e547d;"><strong>创建用户</strong></b></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>create user ‘用户名’@‘主机名’ identified by ‘密码’；
主机名为localhost则只能在当前主机访问
主机名为%则可以在任意主机访问该数据库
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><b style="color:#3e547d;"><strong>修改用户密码</strong></b></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>alter user ‘用户名’@‘主机名’ identified with mysql_native_password by ‘新密码’；
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><b style="color:#3e547d;"><strong>删除用户</strong></b></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>drop user ‘用户名’@‘主机名’；
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="权限控制" tabindex="-1"><a class="header-anchor" href="#权限控制" aria-hidden="true">#</a> 权限控制</h3><p><b style="color:#3e547d;"><strong>查询权限</strong></b></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>show grants for &#39;用户名&#39;@&#39;主机名&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><b style="color:#3e547d;"><strong>授予权限</strong></b></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>grant 权限列表 on 数据库.表名 to &#39;用户名&#39;@&#39;主机名&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><b style="color:#3e547d;"><strong>撤销权限</strong></b></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>revoke 权限列表 on 数据库名.表名 from &#39;用户名&#39;@&#39;主机名&#39;
数据库.*表示所有表
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="函数" tabindex="-1"><a class="header-anchor" href="#函数" aria-hidden="true">#</a> 函数</h3><p><b style="color:#3e547d;"><strong>字符串函数</strong></b></p><figure><img src="`+y+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>例子</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>将企业员工的工号不足五位的在前面补0,
update emp set workno = lpad(workno,5,&#39;0&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><b style="color:#3e547d;"><strong>数值函数</strong></b></p><figure><img src="`+f+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><b style="color:#3e547d;"><strong>日期函数</strong></b></p><figure><img src="'+_+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><b style="color:#3e547d;"><strong>流程控制函数</strong></b></p><figure><img src="'+E+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="约束" tabindex="-1"><a class="header-anchor" href="#约束" aria-hidden="true">#</a> 约束</h3><figure><img src="'+B+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="事务" tabindex="-1"><a class="header-anchor" href="#事务" aria-hidden="true">#</a> 事务</h3><p><b style="color:#3e547d;"><strong>简介</strong></b></p><p>事物是一组操作的集合，它是一个不可分割的工作单位，事物会把所有的操作作为一个整体一起向系统提交或撤销操作请求，既这些操作要么同时成功，要么同时失败。</p><p><b style="color:#3e547d;"><strong>案例</strong></b></p><p>转账业务中的A向B转账，需要A账户的余额减的同时B账户的余额加，这是捆绑操作，要么同时失败，要么同时成功。</p><p><b style="color:#3e547d;"><strong>查看事务提交方式</strong></b></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>select @@autocommit;
结果为1则是自动提交 为0则是手动提交
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><b style="color:#3e547d;"><strong>设置事务提交方式</strong></b></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>set @@autocommit = 0;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><b style="color:#3e547d;"><strong>开始事务</strong></b></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>start transactiono； 或 begin；
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><b style="color:#3e547d;"><strong>提交事务</strong></b></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>commit;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><b style="color:#3e547d;"><strong>回滚事务</strong></b></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>rollback;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><b style="color:#3e547d;"><strong>事务四大特性</strong></b></p><table><thead><tr><th style="text-align:center;">特性</th><th style="text-align:center;">解释</th></tr></thead><tbody><tr><td style="text-align:center;">原子性</td><td style="text-align:center;">事务是不可分割的最小单元，要么全部成功要么全部失败</td></tr><tr><td style="text-align:center;">一致性</td><td style="text-align:center;">事务完成时，必须是所有的数据都保持一致状态</td></tr><tr><td style="text-align:center;">隔离性</td><td style="text-align:center;">数据库系统提供的隔离机制，保证事务在不受外部并发操作影响的独立环境下运行</td></tr><tr><td style="text-align:center;">持久性</td><td style="text-align:center;">事务一旦提交或回滚，它对数据库中的数据的改变就是永久的</td></tr></tbody></table><p><b style="color:#3e547d;"><strong>并发事务问题</strong></b></p><table><thead><tr><th>问题</th><th style="text-align:center;">解释</th></tr></thead><tbody><tr><td>脏读</td><td style="text-align:center;">一个事务读到另外一个事务还没有提交的数据</td></tr><tr><td>不可重复读</td><td style="text-align:center;">一个事务先后读取同一条记录，但两次读取的数据不同，称之为不可重复读。</td></tr><tr><td>幻读</td><td style="text-align:center;">一个事务按照条件查询数据时，没有对应的数据行，但是在插入数据时，又发现这行数据已经存在，好像出现了幻影。</td></tr></tbody></table><p><b style="color:#3e547d;"><strong>事务隔离级别</strong></b></p><p><b style="color:#6E8B74;"><strong>作用</strong></b></p><p>解决三种并发事务问题</p><p><b style="color:#6E8B74;"><strong>四种隔离级别</strong></b></p><table><thead><tr><th><strong>隔离级别</strong></th><th><strong>脏读</strong></th><th><strong>不可重复读</strong></th><th><strong>幻读</strong></th></tr></thead><tbody><tr><td>读未提交</td><td>√</td><td>√</td><td>√</td></tr><tr><td>读已提交 (Oracle默认)</td><td>×</td><td>√</td><td>√</td></tr><tr><td>可重复读 (MySql默认)</td><td>×</td><td>×</td><td>√</td></tr><tr><td>串行化</td><td>×</td><td>×</td><td>×</td></tr></tbody></table><p>√ 表示存在问题</p><p><b style="color:#6E8B74;"><strong>查看事务的隔离级别</strong></b></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>select @@transaction_isolation;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><b style="color:#6E8B74;"><strong>设置事务的隔离级别</strong></b></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>set [session | global] transaction isolation level
{read uncommitted|read committed|repeatable read|serializable}
//session 当前会话窗口
//global 全部会话窗口
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="进阶篇" tabindex="-1"><a class="header-anchor" href="#进阶篇" aria-hidden="true">#</a> 进阶篇</h2><h3 id="存储引擎" tabindex="-1"><a class="header-anchor" href="#存储引擎" aria-hidden="true">#</a> 存储引擎</h3><p><b style="color:#3e547d;"><strong>MySql默认存储引擎InnoDB</strong></b></p><p><b style="color:#6E8B74;"><strong>介绍</strong></b></p><p>MySql默认存储引擎：InnoDB</p><p>InnoDB是一种兼顾高可靠性和高性能的通用存储引擎，在MySql 5.5之后，InnoBD是默认的MySql存储引擎。之前是MyISAM存储引擎。</p><p><b style="color:#6E8B74;"><strong>特点</strong></b></p><ol><li>DML(增删改查)操作遵循ACID(原子性 一致性 隔离性 持久性)模型，<strong>支持事务</strong></li><li><strong>行级锁</strong>，提高并发访问性能</li><li><strong>支持外键</strong> foreign key 约束，保证数据的完整性和正确性</li></ol><p><b style="color:#6E8B74;"><strong>文件</strong></b></p><p>xxx.ibd：xxx表示表名</p><p>InnoDB引擎的每张表都会对应这样一个表空间文件，存储该表的表结构(frm，sdi)、数据和索引</p><p><b style="color:#3e547d;"><strong>存储引擎简介</strong></b></p><p><strong>引擎就是发动机</strong>，不同的事物使用的引擎不同就比如坦克用不了战斗机的引擎。存储引擎就是储存数据，建立索引，更新查询数据等技术的实现方式。不同的存储引擎对于这些技术的实现是不同的。存储引擎是基于表的，而不是库，所有存储引擎也可被称为表类型。</p><p><b style="color:#6E8B74;"><strong>在创建表时，指定存储引擎</strong></b></p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>create table 表名(
	...
    ...
)engine=InnoDB
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><b style="color:#6E8B74;"><strong>查看当前数据库支持的存储引擎</strong></b></p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>show engines;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><b style="color:#3e547d;"><strong>MySql体系结构</strong></b></p><p><b style="color:#6E8B74;"><strong>连接层</strong></b></p><p>最上层是一些客户端和链接服务，主要完成一些类似于连接处理，授权认证及相关的安全方案。服务器也会为安全接入的每个客户端 验证它所具有的操作权限。</p><p><b style="color:#6E8B74;"><strong>服务层</strong></b></p><p>第二层架构主要完成大多数的核心服务功能，如SQL接口，并完成缓存的查询，SQL的分析和优化，部分内置函数的执行。所有跨存储引擎的功能也在这一层实现，如过程，函数等。</p><p><b style="color:#6E8B74;"><strong>引擎层</strong></b></p><p>存储引擎真正的负责了MySql中数据的存储和提取，服务器通过API和存储引擎进行通信。不同的存储引擎具有不同的功能，可以根据需要选取合适的存储引擎。</p><p><b style="color:#6E8B74;"><strong>存储层</strong></b></p><p>主要是将数据存储在文件系统之上，并完成与存储引擎的交互。</p><h3 id="索引" tabindex="-1"><a class="header-anchor" href="#索引" aria-hidden="true">#</a> 索引</h3><p><b style="color:#3e547d;"><strong>介绍</strong></b></p><p>索引(index) 是帮助MySql<strong>高效获取数据的数据结构</strong>(有序)。在数据之外，数据库系统还维护着满足特定查找算法的数据结构，这些数据结构以某种方式引用数据，这样就可以在这些数据结构上实现高级查找算法，这种数据结构就是索引。</p><p><b style="color:#3e547d;"><strong>优缺点</strong></b></p><p><b style="color:#6E8B74;"><strong>优点</strong></b></p><p>提高数据检索的效率，降低数据库的IO成本。通过索引列对数据进行排序，，降低数据排序成本，降低CPU的消耗。</p><p><b style="color:#6E8B74;"><strong>缺点</strong></b></p><p>索引列需要占据空间，索引大大提高了查询效率，同时也降低更新表的速度，如对表进行insert，update，delete时，效率降低。</p><p><b style="color:#3e547d;"><strong>索引结构</strong></b></p><figure><img src="`+L+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+M+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><b style="color:#6E8B74;"><strong>思考</strong></b></p><p><b style="color:#5CB3CC;"><strong>问：为什么InnoDB存储引擎选择使用B+tree索引结构</strong></b></p><p><strong>答：</strong></p><p>相对于二叉树，层级更少，搜索效率高。</p><p>对于B-tree树，无论是叶子节点，还是非叶子节点，都会保存数据，这样导致一页中存储的键值减少，要同样保存大量数据，只能增加树的高度，导致性能降低。</p><p>相对于Hash索引，B+tree支持范围匹配及排序操作。</p><p><b style="color:#3e547d;"><strong>索引分类</strong></b></p><figure><img src="'+k+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><b style="color:#3e547d;"><strong>索引语法</strong></b></p><p><b style="color:#6E8B74;"><strong>创建索引</strong></b></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>create <span class="token punctuation">[</span>unique<span class="token operator">|</span>fulltext<span class="token punctuation">]</span> index index_name on <span class="token function">table_name</span><span class="token punctuation">(</span>index_col_name<span class="token punctuation">,</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
unique <span class="token operator">|</span> fulltext 选择索引类型
index_name 为索引起名
table_name 表名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><b style="color:#6E8B74;"><strong>查看索引</strong></b></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>show index from table_name<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><b style="color:#6E8B74;"><strong>删除索引</strong></b></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>drop index index_name on table_name<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="sql性能分析" tabindex="-1"><a class="header-anchor" href="#sql性能分析" aria-hidden="true">#</a> SQL性能分析</h3><p><b style="color:#3e547d;"><strong>SQL执行频率</strong></b></p><p>MySql客户端连接成功之后，通过命令可以提供服务器状态信息。通过如下指令，可以查看当前数据库的insert，update，delete，select的访问频次</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>show <span class="token punctuation">[</span>global<span class="token operator">|</span>session<span class="token punctuation">]</span> status like &#39;com_______&#39;<span class="token punctuation">;</span> <span class="token comment">//com后面七个下划线</span>
global<span class="token operator">|</span>session 全局或者是当前会话
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><b style="color:#3e547d;"><strong>慢查询日志</strong></b></p><p>慢查询日志记录了所有执行时间超过指定参数(long_query_time,单位：秒,默认10秒)的所有SQL语句的日志。MySql的慢查询日志默认没有开启，需要在MySql的配置文件(/etc/my.cnf)中配置如下信息:</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 开启MySQL慢日志查询开关</span>
slow_query_log <span class="token operator">=</span> <span class="token number">1</span>
<span class="token comment">// 设置慢日志的时间为2秒，SQL语句执行时间超过2秒，就会视为慢查询，记录慢查询日志</span>
long_query_time <span class="token operator">=</span> <span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><b style="color:#6E8B74;"><strong>查看慢日志是否开启</strong></b></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>show variables like &#39;slow_query_log&#39;<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><b style="color:#3e547d;"><strong>profile</strong></b></p><p>帮助我们了解执行SQL语句时的时间都耗费到哪里去了。</p><p><b style="color:#6E8B74;"><strong>查看当前数据库是否支持profile</strong></b></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>select @<span class="token annotation punctuation">@have_profiling</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><b style="color:#6E8B74;"><strong>查看是否开启profile</strong></b></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>select @<span class="token annotation punctuation">@profiling</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><b style="color:#6E8B74;"><strong>开启profile</strong></b></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>set profiling <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><b style="color:#6E8B74;"><strong>查看所有SQL语句的耗时情况</strong></b></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>show profiles<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><b style="color:#3e547d;"><strong>explain执行计划</strong></b></p><p>explain或者desc命令获取MySql如何执行select语句的信息，包括在select语句执行过程中表如何连接和连接的顺序。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>explain select 字段列表 from 表名 where 条件<span class="token punctuation">;</span>
desc select 字段列表 from 表名 where 条件<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><b style="color:#3e547d;"><strong>最左前缀法则</strong></b></p><p>如果索引了多列，要遵循最左前缀法则。最左前缀法则指的是查询从索引的最左列开始，并且不跳过索引中的列。如果跳跃某一列。索引将部分失效(后面的字段索引失效)</p><p><b style="color:#3e547d;"><strong>索引失效</strong></b></p><p>不要在索引列上进行运算操作，索引将失效。</p><p>字符串类型字段使用时，不加引号，索引将失效。</p><h2 id="运维篇" tabindex="-1"><a class="header-anchor" href="#运维篇" aria-hidden="true">#</a> 运维篇</h2>`,250);function D(O,z){const n=i("ExternalLinkIcon");return l(),d("div",null,[C,e("p",null,[t("下载地址："),e("a",T,[t("https://dev.mysql.com/downloads/installer/"),s(n)])]),j,N,q,w,A,e("p",null,[e("a",I,[t("03. 基础-概述-MySQL安装及启动_哔哩哔哩_bilibili"),s(n)])]),Q])}const F=r(S,[["render",D],["__file","MySql.html.vue"]]);export{F as default};
