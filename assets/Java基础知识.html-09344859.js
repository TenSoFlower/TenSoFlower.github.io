import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as t,c as n,b as i}from"./app-46317bc3.js";const a="/assets/image-1696297522367-edda582b.png",s="/assets/image-1696227436011-08efda66.png",r="/assets/image-1696227450537-53051e00.png",l="/assets/image-1696227460907-b87ef75c.png",d="/assets/image-1696227473880-416e3dfe.png",c="/assets/image-1696227488667-5ba361c0.png",o="/assets/1697360871529-00669072.png",g="/assets/1697361053472-26e7c305.png",v="/assets/234-09c5329e.png",u="/assets/image-1696227544341-59a78df8.png",p="/assets/image-1696227553956-9daad91d.png",b="/assets/image-1696227564579-9228f6c8.png",m="/assets/image-1696227580281-d14ae56d.png",h="/assets/image-1696227592541-d44ce219.png",x="/assets/image-1696227604463-259d85a8.png",y="/assets/image-1696227616426-3024bbdc.png",f={},q=i('<h1 id="java基础知识" tabindex="-1"><a class="header-anchor" href="#java基础知识" aria-hidden="true">#</a> Java基础知识</h1><h2 id="static" tabindex="-1"><a class="header-anchor" href="#static" aria-hidden="true">#</a> static</h2><p><b style="color:#3e547d;"><strong>简介</strong></b></p><p>static叫静态可以修饰成员变量，成员方法，有static修饰，属于类，会被类的全部对象共享，会随类的加载而加载。没有被static修饰的变量叫实例变量。实例变量是属于对象的，每个对象的实例变量都不同，会随对象的加载而加载。被static修饰的方法，可以通过 类名.方法名 调用。没有被修饰的方法只能通过 对象名.方法名 调用。如果某个类中的所有方法都是static修饰的我们叫该类为工具类。</p><details class="hint-container details"><summary><b style="color:#bf3e73;">问：为什么静态方法中不能引用实例变量？</b></summary><p><b style="color:#f19977;"><strong>答:因为实例变量属于对象，而类中还没有实例化对象，所以找不到该变量。</strong></b></p></details><h2 id="修饰符" tabindex="-1"><a class="header-anchor" href="#修饰符" aria-hidden="true">#</a> 修饰符</h2><table><thead><tr><th style="text-align:center;">修饰符</th><th style="text-align:center;">作用范围</th></tr></thead><tbody><tr><td style="text-align:center;">private</td><td style="text-align:center;">属性 方法</td></tr><tr><td style="text-align:center;">default</td><td style="text-align:center;">属性 方法 类 接口</td></tr><tr><td style="text-align:center;">protected</td><td style="text-align:center;">属性 方法</td></tr><tr><td style="text-align:center;">public</td><td style="text-align:center;">属性 方法 类 接口</td></tr></tbody></table><p><b style="color:#3e547d;"><strong>可见性</strong></b></p><figure><img src="'+a+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="面向对象三大特征" tabindex="-1"><a class="header-anchor" href="#面向对象三大特征" aria-hidden="true">#</a> 面向对象三大特征</h2><p><b style="color:#3e547d;"><strong>封装</strong></b></p><p>在Java中，封装是一种面向对象编程（OOP）的概念，它指的是将一个对象的状态（属性）和行为（方法）包装在一个单独的单元中，并通过访问修饰符来控制外部代码对对象内部数据的访问。封装有助于隐藏实现细节，提供对外部的清晰接口，并增强代码的可维护性和可扩展性。</p><p><b style="color:#3e547d;"><strong>继承</strong></b></p><p>在Java中，继承是面向对象编程（OOP）的核心概念之一，它允许一个类（称为子类或派生类）继承另一个类（称为父类、基类或超类）的属性和方法。继承使得代码重用、扩展和维护变得更加方便。通过继承，子类可以获得父类的属性和方法，同时还可以通过重写（覆盖）方法来改变或扩展父类的行为。在Java中，继承的实现通过关键字 extends来完成。</p><p><b style="color:#3e547d;"><strong>多态</strong></b></p><p>多态是面向对象编程的一个重要概念，它允许不同的对象使用相同的接口来表现出不同的行为。在Java中，多态性通过方法的重写（覆盖）和方法的动态绑定来实现。多态性有助于代码的灵活性、可扩展性和重用性。它使得代码可以适应不同类型的对象，而不需要在每个情况下都编写特定的代码</p><h2 id="静态代码块" tabindex="-1"><a class="header-anchor" href="#静态代码块" aria-hidden="true">#</a> 静态代码块</h2><p>写在类中，main方法运行时会首先执行static静态代码块中的内容</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package com.ctg;
/**
 * @author CTG
 */
public class Main
{
    static
    {
        System.out.println(&quot;我会首先执行&quot;);
    }
    public static void main(String[] args) throws ParseException
    {
       
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="java-和-equals" tabindex="-1"><a class="header-anchor" href="#java-和-equals" aria-hidden="true">#</a> Java == 和 equals()</h2><p>== 对于基本类型来说比较的是值对于引用类型来说比较的是对象的内存地址</p><p>equals不重写的话和==等价，对于自定义的类常常要重写equals方法来判断两个对象的属性是否相等，如String类就重写了equals方法，equals不能用于比较基本数据类型</p><h2 id="java-hashcode-方法" tabindex="-1"><a class="header-anchor" href="#java-hashcode-方法" aria-hidden="true">#</a> Java hashCode()方法</h2><p>hashCode()如果没有重写会将内存地址转为int数值进行返回，这个int值为散列码其作用是确定对象在哈希表中的索引位置。如果两个equals方法和hashCode方法不一起重写会造成大量重复对象。hashCode保证性能，equals保证可靠。</p><h2 id="java-枚举" tabindex="-1"><a class="header-anchor" href="#java-枚举" aria-hidden="true">#</a> Java 枚举</h2><p><b style="color:#3e547d;"><strong>枚举的定义</strong></b></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package com.ctg.Enum;
enum Season
{
    SPRING,
    SUMMER,
    AUTUMN,
    WINTER
}
public class Main
{
    public static void main(String[] args)
    {
        Season season = Season.AUTUMN;
        switch (season)
        {
            case SUMMER:
                System.out.println(&quot;SUMMER&quot;);
                break;
            case AUTUMN:
                System.out.println(&quot;AUTUMN&quot;);
                break;
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><b style="color:#3e547d;"><strong>枚举类中可以写方法</strong></b></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package com.ctg.Enum;
enum Day
{
    SUNDAY(&quot;Sun&quot;),
    MONDAY(&quot;Mon&quot;),
    TUESDAY(&quot;Tue&quot;),
    WEDNESDAY(&quot;Wed&quot;),
    THURSDAY(&quot;Thu&quot;),
    FRIDAY(&quot;Fri&quot;),
    SATURDAY(&quot;Sat&quot;);
    private String abbreviation;
    // 构造函数
    private Day(String abbreviation)
    {
        this.abbreviation = abbreviation;
    }
    // 获取缩写的方法
    public String getAbbreviation()
    {
        return abbreviation;
    }
    // 演示其他方法
    public void sayHello()
    {
        System.out.println(&quot;Hello from &quot; + this.name());
    }
}
public class Main
{
    public static void main(String[] args)
    {
        Day today = Day.WEDNESDAY;
        // 使用枚举方法
        System.out.println(&quot;Today is &quot; + today);
        System.out.println(&quot;Abbreviation: &quot; + today.getAbbreviation());
        // 调用枚举中的自定义方法
        today.sayHello();
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="java-异常" tabindex="-1"><a class="header-anchor" href="#java-异常" aria-hidden="true">#</a> Java 异常</h2><h3 id="处理方式" tabindex="-1"><a class="header-anchor" href="#处理方式" aria-hidden="true">#</a> 处理方式</h3><p>Java处理异常的方式是中断处理</p><figure><img src="`+s+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>try {
    //可能产生异常的代码
}
catch () {
    //出现异常则执行此代码块的逻辑
}
finally {
    //无论是否会出现异常都执行此代码块的内容
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="throw" tabindex="-1"><a class="header-anchor" href="#throw" aria-hidden="true">#</a> throw</h3><p><b style="color:#3e547d;"><strong>使用格式</strong></b></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">throw</span> <span class="token keyword">new</span> 异常类名<span class="token punctuation">(</span>参数<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="`+r+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+l+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="throws" tabindex="-1"><a class="header-anchor" href="#throws" aria-hidden="true">#</a> throws</h3><figure><img src="'+d+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="自定义异常类" tabindex="-1"><a class="header-anchor" href="#自定义异常类" aria-hidden="true">#</a> 自定义异常类</h3><figure><img src="'+c+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package com.ctg.exception;
public class MyException extends Exception
{
    public MyException(){super();}
    public MyException(String message) {super(message);}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="java-集合" tabindex="-1"><a class="header-anchor" href="#java-集合" aria-hidden="true">#</a> Java 集合</h2><h3 id="单列集合" tabindex="-1"><a class="header-anchor" href="#单列集合" aria-hidden="true">#</a> 单列集合</h3><figure><img src="`+o+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>Collection继承了Iterable</strong>所以所有的单例集合都有迭代器。</p><p><b style="color:#3e547d;"><strong>List接口</strong></b></p><p><strong>有序</strong>，<strong>能存放重复元素</strong>，能存放所有元素甚至是null并且可以是多个</p><p><b style="color:#6E8B74;"><strong>ArrayList</strong></b></p><p><strong>ArrayList</strong>是<strong>线程不安全</strong>的，<strong>执行效率高</strong>，在多线程的情况下，不建议使用ArrayList。</p><p><b style="color:#5CB3CC;"><strong>ArrayList底层</strong></b></p><p>ArrayList中维护了一个Object类型的数组elementData，当创建ArrayList对象时，如果使用的是无参构造器，则初始elementData容量为0，第一次添加，则<strong>扩容elementData为10</strong>，如需要再次扩容，则扩容为elementData的<strong>1.5倍</strong>。如果使用的是指定大小的构造器，则初始elementData容量为指定大小，如果需要扩容，则直接扩容为elementData的1.5倍。</p><p><b style="color:#6E8B74;"><strong>Vector</strong></b></p><p>Vector基本等同于ArrayList，在<strong>多线程情况下建议使用Vector</strong>，其大多数方法都带有<strong>synchronized</strong></p><p><b style="color:#5CB3CC;"><strong>Vector底层</strong></b></p><p>如果是无参默认大小是<strong>10</strong>，满之后，按2倍扩容。如果指定大小，则每次按<strong>2倍</strong>扩容。</p><p><b style="color:#6E8B74;"><strong>LinkedList</strong></b></p><p>实现了双向链表和双端队列的特点，<strong>线程不安全</strong></p><p><strong>如果改查操作多，用ArrayList。增删操作多用LinkedList</strong></p><p><b style="color:#3e547d;"><strong>Set接口</strong></b></p><p>无序(添加和取出的顺序不一致)，不能存放重复元素，最多包含一个null</p><p><strong>HashSet实际上是HashMap</strong></p><h3 id="双列集合" tabindex="-1"><a class="header-anchor" href="#双列集合" aria-hidden="true">#</a> 双列集合</h3><figure><img src="'+g+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><b style="color:#3e547d;"><strong>HashMap底层</strong></b></p><p><strong>数组+链表+红黑树</strong></p><p>数组初始大小为<strong>16</strong></p><p>如果数组的长度<strong>大于64并且链表长度大于8</strong>就会<strong>树化成红黑树</strong></p><p>扩容倍数是<strong>2倍</strong></p><h2 id="java-uuid" tabindex="-1"><a class="header-anchor" href="#java-uuid" aria-hidden="true">#</a> Java UUID</h2><p>数据的一种生成算法，主要功能就是生成不会重复的数据，因为时间不重复，所以UUID所生成的数据也就不重复，UUID是基于时间应用的一种数据工具类。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>String randomStr = String.valueOf(UUID.randomUUID());
System.out.println(randomStr);
//结果 a9b03e38-69e0-4e69-a418-c03c0b7ce57d
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Java UUID生成的字符串由 英文字符 or _ or 数字 构成 生成的字符串长度为36</p><h2 id="java-正则表达式" tabindex="-1"><a class="header-anchor" href="#java-正则表达式" aria-hidden="true">#</a> Java 正则表达式</h2><p><b style="color:#3e547d;"><strong>简介</strong></b></p><p>正则表达式，又称正规表示法、常规表示法（英语：Regular Expression，在代码中常简写为regex、regexp或RE），计算机科学的一个概念。正则表达式使用单个字符串来描述、匹配一系列符合某个句法规则的字符串。在很多文本编辑器里，正则表达式通常被用来检索、替换那些符合某个模式的文本。</p><p><b style="color:#3e547d;"><strong>作用</strong></b></p><table><thead><tr><th style="text-align:center;">作用</th></tr></thead><tbody><tr><td style="text-align:center;">文本搜索和匹配：正则表达式可以用于在文本中搜索特定的模式或匹配字符串。这对于从文本中提取信息、验证输入数据的格式或执行字符串替换等任务非常有用。</td></tr><tr><td style="text-align:center;">数据验证：您可以使用正则表达式来验证用户输入的数据是否符合特定的格式要求。例如，验证电子邮件地址、电话号码、日期等。</td></tr><tr><td style="text-align:center;">数据提取：通过正则表达式，您可以轻松地从文本中提取所需的信息。这在日志文件处理、数据分析和文本解析中非常有用。</td></tr><tr><td style="text-align:center;">字符串替换：您可以使用正则表达式来替换文本中的匹配项。这对于批量文本处理和文本清理非常有用。</td></tr><tr><td style="text-align:center;">模式匹配和分组：正则表达式允许您创建复杂的模式，以匹配不同的字符串，并且可以使用分组来提取匹配项的特定部分。</td></tr><tr><td style="text-align:center;">文本编辑工具：许多文本编辑器和开发环境都支持正则表达式，使您能够在大规模文本文件中执行高级搜索和替换操作。</td></tr><tr><td style="text-align:center;">编译器和解析器：编程语言的编译器和解析器通常使用正则表达式来分析源代码，并执行词法分析和语法分析等任务。</td></tr><tr><td style="text-align:center;">网络爬虫和数据抓取：网络爬虫和数据抓取工具可以使用正则表达式来从网页中提取所需的信息，例如链接、标题、价格等。</td></tr><tr><td style="text-align:center;">日志分析：正则表达式在日志文件分析中非常有用，可以帮助您查找特定的日志条目、过滤和统计数据。</td></tr></tbody></table><p><b style="color:#3e547d;"><strong>组成</strong></b></p><p><b style="color:#6E8B74;"><strong>Pattern 类</strong></b></p><p>Pattern 类表示编译后的正则表达式模式，它负责将正则表达式字符串编译成一个可重复使用的 Pattern 对象。</p><p>通常，您首先使用 Pattern.compile(String regex) 静态方法来创建 Pattern 对象，将正则表达式字符串作为参数传递。</p><p>Pattern 对象的主要任务是将模式应用于输入字符串，生成一个 Matcher 对象。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>示例: Pattern pattern = Pattern.compile(&quot;a*b&quot;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><b style="color:#6E8B74;"><strong>Matcher 类</strong></b></p><p>Matcher 类用于在输入字符串中执行匹配操作，它与特定的 Pattern 关联，并可用于查找匹配项、提取匹配的子字符串等。</p><p>使用 Matcher 的 find()、group() 和其他方法来查找和操作匹配项。</p><p>Matcher 对象是非线程安全的，每次需要匹配时都应创建一个新的 Matcher 对象。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>示例
Matcher matcher = pattern.matcher(&quot;aaaab&quot;);
boolean isMatch = matcher.matches();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><b style="color:#6E8B74;"><strong>PatternSyntaxException 类</strong></b></p><p>PatternSyntaxException 是一个异常类，用于表示正则表达式的语法错误。</p><p>当您在编写正则表达式时，如果存在语法错误，将抛出 PatternSyntaxException 异常，提供有关错误的详细信息，如错误位置、错误的原因等。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>示例
try {
    Pattern.compile(&quot;[a-z&quot;); // 此处有语法错误
} catch (PatternSyntaxException e) {
    System.out.println(&quot;正则表达式语法错误: &quot; + e.getMessage());
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><b style="color:#3e547d;"><strong>使用</strong></b></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public static void main(String[] args)
{
    String content = &quot;Pattern 类表示编译后的正则表达式模式，它负责将正则表达式字符串编译成一个可重复使用的 Pattern 对象。\\n&quot; +
            &quot;通常，您首先使用 Pattern.compile(String regex) 静态方法来创建 Pattern 对象，将正则表达式字符串作为参数传递。\\n&quot; +
            &quot;Pattern 对象的主要任务是将模式应用于输入字符串，生成一个 Matcher 对象。&quot;;
    // 创建一个 Pattern 对象，表示正则表达式模式
    Pattern pattern = Pattern.compile(&quot;[a-zA-Z]+&quot;);
    // 使用 Pattern 对象创建一个 Matcher 对象
    Matcher matcher = pattern.matcher(content);
    // 使用 Matcher 对象查找匹配项
    while(matcher.find())
    {
        // 打印匹配项
        System.out.println(matcher.group(0));
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><b style="color:#6E8B74;"><strong>group(0)方法</strong></b></p><p>表达式中用()括起来的表示分组如([0-9]+)|([a-zA-Z]+)如果是group(0)表示匹配全部的字符串。group(1)表示匹配第一组，group(2)表示匹配第二组，以此类推。</p><p><b style="color:#6E8B74;"><strong>不区分大小写</strong></b></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Pattern pattern = Pattern.compile(&quot;[a-z]&quot;,Pattern.CASE_INSENSITIVE);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在参数上加上Pattern.CASE_INSENSITIVE</p><p><b style="color:#6E8B74;"><strong>匹配方式</strong></b></p><table><thead><tr><th style="text-align:center;">方式</th><th style="text-align:center;">解释</th></tr></thead><tbody><tr><td style="text-align:center;">[a-zA-Z]+</td><td style="text-align:center;">[a-zA-Z]表示a到z或者A到Z的一个字母，+号表示一或多个，合起来就是匹配一个单词</td></tr><tr><td style="text-align:center;">[0-9]+</td><td style="text-align:center;">[0-9]表示数字，+表示一个或多个，合起来就是匹配一串数字</td></tr><tr><td style="text-align:center;">([0-9]+)|([a-zA-Z]+)</td><td style="text-align:center;">表示匹配单词或者一串数字</td></tr><tr><td style="text-align:center;">[efgh]</td><td style="text-align:center;">匹配efgh中的任意一个</td></tr><tr><td style="text-align:center;">[^abc]</td><td style="text-align:center;">除abc之外的任意一个字符包括数字和特殊符号</td></tr><tr><td style="text-align:center;">.</td><td style="text-align:center;">匹配除\\n之外的任何字符 如 a..b 表示以a开头b结尾中间包括2个任意字符的长度为4的字符串</td></tr></tbody></table><p><b style="color:#6E8B74;"><strong>元字符</strong></b></p><table><thead><tr><th style="text-align:center;">符号</th><th style="text-align:center;">解释</th></tr></thead><tbody><tr><td style="text-align:center;">\\</td><td style="text-align:center;">转义号需要用到转义号的字符有以下：<img src="`+v+'" alt="" loading="lazy"></td></tr><tr><td style="text-align:center;">\\d \\d{3} (\\d)* (\\d)？</td><td style="text-align:center;">1.表示任意数字 \\d\\d\\d\\d表示四个连在一起的数字2.表示匹配任意三个数字3.表示匹配任意多的数字4.表示0个或者1个数字</td></tr><tr><td style="text-align:center;">\\D</td><td style="text-align:center;">匹配单个非数字字符</td></tr><tr><td style="text-align:center;">\\w</td><td style="text-align:center;">匹配单个数字大小写字母</td></tr><tr><td style="text-align:center;">\\W \\W+</td><td style="text-align:center;">1.匹配单个非数字大小写字母字符2.+表示匹配一个或多个</td></tr><tr><td style="text-align:center;">(?!)abc a(?!)bc a((?!)b)c</td><td style="text-align:center;">1.表示abc不区分大小写2.表示bc不区分大小写3.表示只有b不区分大小写</td></tr><tr><td style="text-align:center;">\\s</td><td style="text-align:center;">匹配任何空白的字符</td></tr></tbody></table><p><b style="color:#6E8B74;"><strong>选择匹配符</strong></b></p><table><thead><tr><th style="text-align:center;">匹配符</th><th style="text-align:center;">解释</th></tr></thead><tbody><tr><td style="text-align:center;">Hello | World</td><td style="text-align:center;">匹配Hello或者是World</td></tr></tbody></table><p><b style="color:#6E8B74;"><strong>限定符</strong></b></p><figure><img src="'+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><b style="color:#6E8B74;"><strong>定位符</strong></b></p><figure><img src="'+b+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><b style="color:#3e547d;"><strong>解决的实际问题</strong></b></p><p><b style="color:#6E8B74;"><strong>判断 t 字符串是不是 s 字符串的子串</strong></b></p><p>字符串的一个子序列是原始字符串删除一些（也可以不删除）字符而不改变剩余字符相对位置形成的新字符串。（例如，&quot;ace&quot;是&quot;abcde&quot;的一个子序列，而&quot;aec&quot;不是）。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public boolean isSubsequence(String s, String t)
{
    // 创建一个 StringBuilder 对象，用于构建正则表达式模式
    StringBuilder patternBuilder = new StringBuilder(&quot;.*&quot;);
    // 遍历字符串 s 的每个字符
    for (char c : s.toCharArray())
    {
        // 在正则表达式模式中添加当前字符，并且用 &quot;.*&quot; 匹配任意字符的正则表达式来匹配字符之间的任意字符
        patternBuilder.append(c).append(&quot;.*&quot;);
    }
    // 将 StringBuilder 中的模式转化为字符串
    String pattern = patternBuilder.toString();
    // 使用构建好的正则表达式模式创建一个 Pattern 对象
    Pattern regex = Pattern.compile(pattern);
    // 使用正则表达式模式匹配字符串 t，创建 Matcher 对象
    Matcher matcher = regex.matcher(t);
    // 返回 Matcher 对象的匹配结果，如果完全匹配返回 true，否则返回 false
    return matcher.matches();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="java-stream" tabindex="-1"><a class="header-anchor" href="#java-stream" aria-hidden="true">#</a> Java Stream</h2><p><b style="color:#3e547d;"><strong>使用要求</strong></b></p><p>Java8的特性 于2014年发布</p><p><b style="color:#3e547d;"><strong>作用</strong></b></p><p>处理集合、序列化数据(数组，文件等)</p><p><b style="color:#3e547d;"><strong>特点</strong></b></p><p>函数式编程、链式编程、重点关注做什么而不是怎么做。</p><p><b style="color:#3e547d;"><strong>原理</strong></b></p><p>相当于流水线工作，先把全部数据放入到流水线上，然后调用中间方法对数据进行处理(丢掉一部分数据),最后调用终结方法把剩下的数据封装。</p><p><b style="color:#3e547d;"><strong>好处</strong></b></p><p>减少代码量</p><p><b style="color:#3e547d;"><strong>使用方法</strong></b></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//场景1：把list中所有以“张”开头的并且长度为3的元素循环打印出来
list.stream() //得到流
        .filter(s-&gt;s.startsWith(&quot;C&quot;)) //过滤 首符号是 C 的留下
        .filter(s-&gt;s.length()==3) //过滤 长度为3的留下
        .forEach(s-&gt; System.out.println(s)); //打印
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><b style="color:#3e547d;"><strong>谁能使用</strong></b></p><p>List Set Map 数组</p><p><b style="color:#3e547d;"><strong>中间方法</strong></b></p><figure><img src="`+m+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="hint-container warning"><p class="hint-container-title">注意</p><p><b style="color:#8f71e0;"><strong>修改Stream流中的数据，不会影响原来集合或者数组中的数据。</strong></b></p></div><p><b style="color:#3e547d;"><strong>终结方法</strong></b></p><figure><img src="'+h+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="java-创建不可变集合" tabindex="-1"><a class="header-anchor" href="#java-创建不可变集合" aria-hidden="true">#</a> Java 创建不可变集合</h2><p><b style="color:#3e547d;"><strong>使用要求</strong></b></p><p>Java9的特性</p><p><b style="color:#3e547d;"><strong>不可变集合定义</strong></b></p><p>不可以被修改，不可以增加(长度内容都不能修改)</p><p><b style="color:#3e547d;"><strong>解决问题类型</strong></b></p><p>当集合对象被不可信的库调用是，不可变形式是安全的。另外某个数据不能修改，放到不可变集合中是个很好的选择。</p><p><b style="color:#3e547d;"><strong>解决的实际问题</strong></b></p><p>如一副54张的扑克牌为了防止出老千，可以用不可变集合储存。</p><p><b style="color:#3e547d;"><strong>怎么创建</strong></b></p><figure><img src="'+x+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>List</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>List&lt;String&gt; fruits = List.of(&quot;Apple&quot;, &quot;Banana&quot;, &quot;Orange&quot;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Map</strong></p><figure><img src="`+y+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>Map最多存10个键值对</p><div class="hint-container warning"><p class="hint-container-title">注意</p><p><b style="color:#8f71e0;"><strong>按照指定顺序排序，不可重复，不能包含null</strong></b></p></div><h2 id="java-optional" tabindex="-1"><a class="header-anchor" href="#java-optional" aria-hidden="true">#</a> Java Optional</h2><p><b style="color:#3e547d;"><strong>概念</strong></b></p><p>是一个一元容器就是只能存一个或者0个元素</p><p><b style="color:#3e547d;"><strong>作用</strong></b></p><p>处理Java中的空指针异常</p><p><b style="color:#3e547d;"><strong>使用方式</strong></b></p><p>将可能为空的对象转化为Optional对象</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Optional&lt;User&gt; user1 = Optional.ofNullable(new User(&quot;Cao&quot;));
//得到User中的name，如果为null则默认为wang
String name = user1.map(User::getName)
        .orElse(&quot;wang&quot;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><b style="color:#3e547d;"><strong>包含方法</strong></b></p><p>map()：映射</p><p>orElse()：没有则赋予默认值</p><p>orElseThrow(() -&gt; new xxxxException())：没有则抛出xxx异常</p><h2 id="java-泛型" tabindex="-1"><a class="header-anchor" href="#java-泛型" aria-hidden="true">#</a> Java 泛型</h2><p><b style="color:#3e547d;"><strong>使用要求</strong></b></p><p>Java5的特性</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package com;
import com.ctg.Init.PreMain;
class Print&lt;T&gt;
{
    T element;
    Print(T element) {this.element = element;}
    public void print() {System.out.println(element);}
}
public class Main
{
    static {PreMain.showBanner();}
    public static void main(String[] args)
    {
        Print&lt;String&gt; print = new Print&lt;&gt;(&quot;Cao&quot;);
        print.print();
        Print&lt;Integer&gt; print1 = new Print&lt;&gt;(23);
        print1.print();
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><b style="color:#3e547d;"><strong>注意事项</strong></b></p><p>泛型不支持基本类型</p><h2 id="java-位运算与位移运算" tabindex="-1"><a class="header-anchor" href="#java-位运算与位移运算" aria-hidden="true">#</a> Java 位运算与位移运算</h2><table><thead><tr><th style="text-align:center;">符号</th><th style="text-align:center;">解释</th></tr></thead><tbody><tr><td style="text-align:center;">&amp;</td><td style="text-align:center;">都为1才为真</td></tr><tr><td style="text-align:center;">|</td><td style="text-align:center;">都为0才为假</td></tr><tr><td style="text-align:center;">^</td><td style="text-align:center;">两个不相等返回真，相等返回假</td></tr><tr><td style="text-align:center;">~</td><td style="text-align:center;">取反</td></tr><tr><td style="text-align:center;">&lt;&lt;</td><td style="text-align:center;">左移 相当于*2</td></tr><tr><td style="text-align:center;">&gt;&gt;</td><td style="text-align:center;">右移 相当于/2</td></tr><tr><td style="text-align:center;">&gt;&gt;&gt;</td><td style="text-align:center;">无符号右移</td></tr><tr><td style="text-align:center;">&lt;&lt;&lt;</td><td style="text-align:center;">无符号左移</td></tr></tbody></table><h2 id="other" tabindex="-1"><a class="header-anchor" href="#other" aria-hidden="true">#</a> Other</h2><p><strong>程序员笑话</strong></p><p>你发任你发，我用Java8</p>`,177),S=[q];function _(E,M){return t(),n("div",null,S)}const U=e(f,[["render",_],["__file","Java基础知识.html.vue"]]);export{U as default};
