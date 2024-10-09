import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as r,c as s,e,b as l,d as a}from"./app-d6cea1c0.js";const i={},t=e('<h1 id="如何优雅的书写代码" tabindex="-1"><a class="header-anchor" href="#如何优雅的书写代码" aria-hidden="true">#</a> 如何优雅的书写代码</h1><h2 id="编程规约" tabindex="-1"><a class="header-anchor" href="#编程规约" aria-hidden="true">#</a> 编程规约</h2><h3 id="命名风格" tabindex="-1"><a class="header-anchor" href="#命名风格" aria-hidden="true">#</a> 命名风格</h3>',3),o=l("ol",null,[l("li",null,[l("p",null,[a("所有编程相关的命名均"),l("strong",null,"不能以下划线或美元符号开始"),a("，也"),l("strong",null,"不能以下划线或美元符号结束")]),l("p",null,[a("反例：_name / __name / "),l("span",{class:"katex"},[l("span",{class:"katex-mathml"},[l("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[l("semantics",null,[l("mrow",null,[l("mi",null,"O"),l("mi",null,"b"),l("mi",null,"j"),l("mi",null,"e"),l("mi",null,"c"),l("mi",null,"t"),l("mi",{mathvariant:"normal"},"/"),l("mi",null,"n"),l("mi",null,"a"),l("mi",null,"m"),l("msub",null,[l("mi",null,"e"),l("mi",{mathvariant:"normal"},"/")]),l("mi",null,"n"),l("mi",null,"a"),l("mi",null,"m"),l("mi",null,"e")]),l("annotation",{encoding:"application/x-tex"},"Object / name_ / name")])])]),l("span",{class:"katex-html","aria-hidden":"true"},[l("span",{class:"base"},[l("span",{class:"strut",style:{height:"1.1052em","vertical-align":"-0.3552em"}}),l("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),l("span",{class:"mord mathnormal",style:{"margin-right":"0.05724em"}},"bj"),l("span",{class:"mord mathnormal"},"ec"),l("span",{class:"mord mathnormal"},"t"),l("span",{class:"mord"},"/"),l("span",{class:"mord mathnormal"},"nam"),l("span",{class:"mord"},[l("span",{class:"mord mathnormal"},"e"),l("span",{class:"msupsub"},[l("span",{class:"vlist-t vlist-t2"},[l("span",{class:"vlist-r"},[l("span",{class:"vlist",style:{height:"0.3448em"}},[l("span",{style:{top:"-2.5198em","margin-left":"0em","margin-right":"0.05em"}},[l("span",{class:"pstrut",style:{height:"2.7em"}}),l("span",{class:"sizing reset-size6 size3 mtight"},[l("span",{class:"mord mtight"},"/")])])]),l("span",{class:"vlist-s"},"​")]),l("span",{class:"vlist-r"},[l("span",{class:"vlist",style:{height:"0.3552em"}},[l("span")])])])])]),l("span",{class:"mord mathnormal"},"nam"),l("span",{class:"mord mathnormal"},"e")])])]),a(" / Object$")])]),l("li",null,[l("p",null,[a("所有编程相关的命名"),l("strong",null,"严禁使用拼音与英文混合方式"),a("，"),l("strong",null,"更不允许直接使用中文")])]),l("li",null,[l("p",null,[a("代码和注释中都要避免使用任何人类语言中的"),l("strong",null,"种族歧视性"),a("或"),l("strong",null,"侮辱性词语"),a("。")])]),l("li",null,[l("p",null,[l("strong",null,"类名"),a("使用 "),l("strong",null,"UpperCamelCase"),a(" 风格")]),l("p",null,"正例：ForceCode / UserDO / HtmlDTO / XmlService / TcpUdpDeal / TaPromotion")]),l("li",null,[l("p",null,[l("strong",null,"方法名、参数名、成员变量、局部变量"),a("都统一使用 "),l("strong",null,"lowerCamelCase"),a(" 风格。")]),l("p",null,"正例：localValue / getHttpMessage() / inputUserId")]),l("li",null,[l("p",null,[l("strong",null,"常量"),a("命名应该"),l("strong",null,"全部大写"),a("，单词间"),l("strong",null,"用下划线隔开"),a("，力求语义表达完整清楚，不要嫌名字长。")])]),l("li",null,[l("p",null,[l("strong",null,"POJO 类"),a("中的任何布尔类型的变量，都"),l("strong",null,"不要加 is 前缀"),a("，否则部分框架解析会引起序列化错误")])]),l("li",null,[l("p",null,[l("strong",null,"包名"),a("统一"),l("strong",null,"使用小写"),a("，点分隔符之间有且仅有一个自然语义的英语单词。包名统一使用"),l("strong",null,"单数形"),l("br"),l("strong",null,"式"),a("，但是类名如果有复数含义，类名可以使用复数形式。")])]),l("li",null,[l("p",null,[a("避免在"),l("strong",null,"子父类的成员变量"),a("之间、或者不同代码块的局部变量之间"),l("strong",null,"采用完全相同的命名"),a("，使可理"),l("br"),a(" 解性降低")])]),l("li",null,[l("p",null,"杜绝完全不规范的英文缩写，避免望文不知义。")]),l("li",null,[l("p",null,"如果模块、接口、类、方法使用了设计模式，在命名时要体现出具体模式。"),l("p",null,"正例："),l("p",null,[a("public class OrderFactory;"),l("br"),a(" public class LoginProxy;"),l("br"),a(" public class ResourceObserver")])]),l("li",null,[l("p",null,[l("strong",null,"接口类"),a("中的"),l("strong",null,"方法"),a("和"),l("strong",null,"属性不要加任何修饰符号（public 也不要加）"),a("，保持代码的简洁性，并加上"),l("br"),a(" 有效的 Javadoc 注释。尽量不要在接口里定义常量，如果一定要定义，最好确定该常量与接口的方法"),l("br"),a(" 相关，并且是整个应用的基础常量。")])]),l("li",null,[l("p",null,[l("strong",null,"枚举类"),a("名带上 "),l("strong",null,"Enum 后缀"),a("，枚举成员名称需要"),l("strong",null,"全大写"),a("，"),l("strong",null,"单词"),a("间"),l("strong",null,"用下划线隔开")])]),l("li",null,[l("p",null,[a("各层命名规约："),l("br"),a(" A）Service / DAO 层方法命名规约："),l("br"),a(" 1）获取单个对象的方法用 get 做前缀。"),l("br"),a(" 2）获取多个对象的方法用 list 做前缀，复数结尾，如：listObjects"),l("br"),a(" 3）获取统计值的方法用 count 做前缀。"),l("br"),a(" 4）插入的方法用 save / insert 做前缀。"),l("br"),a(" 5）删除的方法用 remove / delete 做前缀。"),l("br"),a(" 6）修改的方法用 update 做前缀。"),l("br"),a(" B）领域模型命名规约："),l("br"),a(" 1）数据对象：xxxDO，xxx 即为数据表名。"),l("br"),a(" 2）数据传输对象：xxxDTO，xxx 为业务领域相关的名称。"),l("br"),a(" 3）展示对象：xxxVO，xxx 一般为网页名称。"),l("br"),a(" 4）POJO 是 DO / DTO / BO / VO 的统称，禁止命名成 xxxPOJO。")])])],-1),p=e('<h3 id="常量定义" tabindex="-1"><a class="header-anchor" href="#常量定义" aria-hidden="true">#</a> 常量定义</h3><ol><li><p>long 或 Long 赋值时，数值后使用大写 L，不能是小写 l，小写容易跟数字混淆，造成误解。</p></li><li><p>浮点数类型的数值后缀统一为大写的 D 或 F</p><p>正例：</p><p>​ public static final double HEIGHT = 175.5D;<br> ​ public static final float WEIGHT = 150.3F;</p></li><li><p>不要使用一个常量类维护所有常量，要按常量功能进行归类，分开维护</p></li><li><p>如果变量值仅在一个固定范围内变化用 enum 类型来定义。</p></li></ol><h3 id="代码格式" tabindex="-1"><a class="header-anchor" href="#代码格式" aria-hidden="true">#</a> 代码格式</h3><ol><li><p>如果大括号内为空，简洁地写成{}即可，大括号中间无需换行和空格；</p><p>如果是非空代码块，则：<br> 1）左大括号前不换行。<br> 2）左大括号后换行。<br> 3）右大括号前换行。<br> 4）右大括号后还有 else 等代码则不换行；表示终止的右大括号后必须换行。</p></li><li><p>注释的双斜线与注释内容之间有且仅有一个空格。</p></li><li><p>在进行类型强制转换时，右括号与强制转换值之间不需要任何空格隔开。</p></li><li><p>单行字符数限制不超过 120 个，超出需要换行</p></li><li><p>方法参数在定义和传入时，多个参数逗号后面必须加空格。</p></li><li><p>单个方法的总行数不超过 80 行。</p></li></ol><h3 id="oop规约" tabindex="-1"><a class="header-anchor" href="#oop规约" aria-hidden="true">#</a> OOP规约</h3><ol><li><p>避免通过一个类的对象引用访问此类的静态变量或静态方法，无谓增加编译器解析成本，直接用<br> 类名来访问即可。</p></li><li><p>所有的覆写方法，必须加 @Override 注解。</p></li><li><p>不能使用过时的类或方法。</p></li><li><p>Object 的 equals 方法容易抛空指针异常，应使用常量或确定有值的对象来调用 equals。<br> 正例：&quot;test&quot;.equals(param);<br> 反例：param.equals(&quot;test&quot;);<br> 说明：推荐使用 JDK7 引入的工具类 java.util.Objects#equals(Object a, Object b</p></li><li><p>所有整型包装类对象之间值的比较，全部使用 equals 方法比较。<br> 说明：对于 Integer var = ? 在 -128 至 127 之间的赋值，Integer 对象是在 IntegerCache.cache 产生，会复用已有对象，这个区间内的 Integer 值可以直接使用 == 进行判断，但是这个区间之外的所有数据，都会在堆上产生，并不会复用已有对象，这是一个大坑，推荐使用 equals 方法进行判断。</p></li><li><p>任何货币金额，均以最小货币单位且为整型类型进行存储。</p></li><li><p>浮点数之间的等值判断，基本数据类型不能使用 == 进行比较，包装数据类型不能使用 equals<br> 进行判断。</p></li><li><p>循环体内，字符串的连接方式，使用 StringBuilder 的 append 方法进行扩展。</p></li></ol><h3 id="日期格式" tabindex="-1"><a class="header-anchor" href="#日期格式" aria-hidden="true">#</a> 日期格式</h3><ol><li><p>日期格式化时，传入 pattern 中表示年份统一使用小写的 y。<br> 说明：日期格式化时，yyyy 表示当天所在的年，而大写的 YYYY 代表是 week in which year（JDK7 之后引入的概念），<br> 意思是当天所在的周属于的年份，一周从周日开始，周六结束，只要本周跨年，返回的 YYYY 就是下一年。<br> 正例：表示日期和时间的格式如下所示：<br> new SimpleDateFormat(&quot;yyyy-MM-dd HH:mm:ss&quot;)<br> 反例：某程序员因使用 YYYY/MM/dd 进行日期格式化，2017/12/31 执行结果为 2018/12/31，造成线上故障</p></li><li><p>在日期格式中分清楚大写的 M 和小写的 m，大写的 H 和小写的 h 分别指代的意义。<br> 说明：日期格式中的这两对字母表意如下：<br> 1）表示月份是大写的 M<br> 2）表示分钟则是小写的 m<br> 3）24 小时制的是大写的 H<br> 4）12 小时制的则是小写的 h</p></li><li><p>获取当前毫秒数：System.currentTimeMillis()；而不是 new Date().getTime()。<br> 说明：获取纳秒级时间，则使用 System.nanoTime 的方式。在 JDK8 中，针对统计时间等场景，推荐使用 Instant 类。</p></li></ol><h3 id="集合处理" tabindex="-1"><a class="header-anchor" href="#集合处理" aria-hidden="true">#</a> 集合处理</h3><ol><li>关于 hashCode 和 equals 的处理，遵循如下规则：<br> 1）只要覆写 equals，就必须覆写 hashCode。<br> 2）因为 Set 存储的是不重复的对象，依据 hashCode 和 equals 进行判断，所以 Set 存储的对象必须覆写这两种方法。<br> 3）如果自定义对象作为 Map 的键，那么必须覆写 hashCode 和 equals。<br> 说明：String 因为覆写了 hashCode 和 equals 方法，所以可以愉快地将 String 对象作为 key 来使用。</li><li>判断所有集合内部的元素是否为空，使用 isEmpty() 方法，而不是 size() == 0 的方式。<br> 说明：在某些集合中，前者的时间复杂度为 O(1)，而且可读性更好。</li><li>不要在 foreach 循环里进行元素的 remove / add 操作。remove 元素请使用 iterator 方式，<br> 如果并发操作，需要对 iterator 对象加锁。</li><li>集合初始化时，指定集合初始值大小。<br> 说明：HashMap 使用构造方法 HashMap(int initialCapacity) 进行初始化时，如果暂时无法确定集合大小，那么指定默认值（16）即可。<br> 正例：initialCapacity = (需要存储的元素个数 / 负载因子) + 1。注意负载因子（即 loaderfactor）默认为 0.75，如果暂时无法确定初始值大小，请设置为 16（即默认值）。<br> 反例：HashMap 需要放置 1024 个元素，由于没有设置容量初始大小，随着元素增加而被迫不断扩容，resize() 方法总共会调用 8 次，反复重建哈希表和数据迁移。当放置的集合元素个数达千万级时会影响程序性能。</li><li>使用 entrySet 遍历 Map 类集合 KV，而不是 keySet 方式进行遍历。<br> 说明：keySet 其实是遍历了 2 次，一次是转为 Iterator 对象，另一次是从 hashMap 中取出 key 所对应的 value。而entrySet 只是遍历了一次就把 key 和 value 都放到了 entry 中，效率更高。如果是 JDK8，使用 Map.forEach 方法。<br> 正例：values() 返回的是 V 值集合，是一个 list 集合对象；keySet() 返回的是 K 值集合，是一个 Set 集合对象；entrySet() 返回的是 K-V 值组合的 Set 集合。</li></ol><h3 id="注释规约" tabindex="-1"><a class="header-anchor" href="#注释规约" aria-hidden="true">#</a> 注释规约</h3><ol><li><p>类、类属性、类方法的注释必须使用 Javadoc 规范，使用 /** 内容 */ 格式，不得使用 // xxx方式。<br> 说明：在 IDE 编辑窗口中，Javadoc 方式会提示相关注释，生成 Javadoc 可以正确输出相应注释；在 IDE 中，工程调用方法时，不进入方法即可悬浮提示方法、参数、返回值的意义，提高阅读效率。</p></li><li><p>所有的类都必须添加创建者和创建日期。<br> 说明：在设置模板时，注意 IDEA 的@author 为<code>${USER}</code>，而 eclipse 的@author 为<code>${user}</code>，大小写有区别，而日期的设置统一为 yyyy/MM/dd 的格式。<br> 正例：<br> /**<br> *</p><ul><li>@author yangguanbao</li><li>@date 2021/11/26</li><li></li></ul><p>**/</p></li><li><p>所有的枚举类型字段必须要有注释，说明每个数据项的用途。</p></li><li><p>方法内部单行注释，在被注释语句上方另起一行，使用 // 注释。方法内部多行注释使用 /* */<br> 注释，注意与代码对齐。</p></li></ol>',12),u=[t,o,p];function h(c,m){return r(),s("div",null,u)}const g=n(i,[["render",h],["__file","代码中的优雅.html.vue"]]);export{g as default};
