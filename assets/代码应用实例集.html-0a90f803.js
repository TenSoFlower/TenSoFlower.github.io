import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as e,e as i}from"./app-3b1ccbc2.js";const a={},l=i(`<h1 id="代码应用实例集" tabindex="-1"><a class="header-anchor" href="#代码应用实例集" aria-hidden="true">#</a> 代码应用实例集</h1><h2 id="使用java代码解决markdown图片路径问题" tabindex="-1"><a class="header-anchor" href="#使用java代码解决markdown图片路径问题" aria-hidden="true">#</a> 使用Java代码解决Markdown图片路径问题</h2><p><b style="color:#3e547d;"><strong>问题描述</strong></b></p><p>在Markdown上插入图片和Html一样都需要把图片放到一个文件夹中然后可以使用相对路径引用图片。你写的Markdown文档发给别人看时就需要把图片文件夹一起发给别人，不然图片不会正常显示。有时候我们也需要更改图片文件夹的路径，但是手动一张一张的更改太麻烦。既然是程序员就可以写代码来自动完成图片路径的更改。</p><p><b style="color:#3e547d;"><strong>代码</strong></b></p><p><b style="color:#6E8B74;">如想使用您只需改动下述 完整代码 中开头两个字符串的值</b></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">//替换成您Markdown文档的位置</span>
<span class="token keyword">final</span> <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">String</span> filePath <span class="token operator">=</span> <span class="token string">&quot;D:\\\\Desktop\\\\test.md&quot;</span><span class="token punctuation">;</span>
<span class="token comment">//替换成您图片文件夹的位置</span>
<span class="token keyword">final</span> <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">String</span> newFilePath <span class="token operator">=</span> <span class="token string">&quot;D:\\\\Desktop&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><b style="color:#6E8B74;"><strong>完整代码</strong></b></p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>/*
   以下是一个Markdown中图片的路径
   ![img](D:\\Desktop\\Images\\MySql\\image.png)
   此功能会把Markdown文档中图片路径中的D:\\Desktop\\Images\\MySql替换成你自定义的路径
*/
public class Main
{
    //Markdown文档的所在路径
    final private static String filePath = &quot;D:\\\\Desktop\\\\test.md&quot;;
    /*\\
        需要替换的路径
        如把 ![img](D:\\Desktop\\Images\\MySql\\image.png)
        替换成 ![img](D:\\Desktop\\image.png)
        则下方的 newFilePath 定义为 &quot;D:\\\\Desktop&quot;
     */
    final private static String newFilePath = &quot;D:\\\\Desktop&quot;;

    public static String handle(String line)
    {
        /*
            以下是一个图片的路径
            ![img](D:\\Desktop\\Images\\MySql\\image.png)
         */

        //匹配是不是以![里面是任意字符]开头的 是则说明是图片
        Pattern pattern = Pattern.compile(&quot;^!\\\\[.*?\\\\]&quot;);
        Matcher matcher = pattern.matcher(line);
        //如果找到说明是图片
        if(matcher.find())
        {
            //得到 (D:\\Desktop\\Images\\MySql\\image.png)字符串
            pattern = Pattern.compile(&quot;\\\\(([^)]+)\\\\)&quot;);
            matcher = pattern.matcher(line);
            //如果找到则对D:\\Desktop\\Images\\MySql\\进行替换
            if(matcher.find())
            {
                String str = matcher.group(0);
                //去除( )
                str = str.substring(1, str.length() - 1);
                String regex = &quot;\\\\\\\\&quot;;
                if(str.startsWith(&quot;.&quot;))
                {
                    regex = &quot;/&quot;;
                }

                String Regex = &quot;\\\\\\\\&quot;;
                if(newFilePath.contains(&quot;/&quot;)) Regex = &quot;/&quot;;

                String[] strs = str.split(regex);

                //替换之后的字符串
                StringBuffer newStr = new StringBuffer();
                newStr.append(&quot;(&quot;)
                        .append(newFilePath)
                        .append(Regex)
                        .append(strs[strs.length-1])
                        .append(&quot;)&quot;);

                // 获取括号的结束位置
                int endIndex = matcher.end();
                // 获取括号后面的内容
                String contentAfter = line.substring(endIndex);
                // 返回新字符串
                return &quot;![]&quot; + newStr + contentAfter;
            }
        }
        return line;
    }
    public static String read(String filePath) throws IOException
    {
        BufferedReader reader = null;
        StringBuffer buf = new StringBuffer();
        try
        {
            reader = new BufferedReader(new FileReader(filePath));
            String line;
            while ((line = reader.readLine()) != null)
            {
                //按行处理
                line = handle(line);
                //处理之后进行拼接
                buf.append(line + &quot;\\n&quot;);
            }
        } catch (IOException e)
        {
            System.out.println(&quot;更换失败&quot;);
            e.printStackTrace();
        } finally
        {
            reader.close();
        }
        return buf.toString();
    }
    public static void delete(String filePath)
    {
        // 创建要删除的文件对象
        File fileToDelete = new File(filePath);
        // 检查文件是否存在并且是一个文件
        if (fileToDelete.exists() &amp;&amp; fileToDelete.isFile())
        {
            // 尝试删除文件
            if (fileToDelete.delete())
            {
                System.out.println(&quot;文件删除成功: &quot; + fileToDelete.getAbsolutePath());
            } else
            {
                System.err.println(&quot;无法删除文件: &quot; + fileToDelete.getAbsolutePath());
            }
        } else
        {
            System.err.println(&quot;文件不存在或不是一个文件: &quot; + fileToDelete.getAbsolutePath());
        }
    }
    public static void create(String filePath,String content) throws IOException
    {
        BufferedWriter writer = null;
        try
        {
            File file = new File(filePath);

            // 如果文件不存在，创建新文件
            if (!file.exists())
            {
                file.createNewFile();
            }

            // 使用BufferedWriter写入内容到文件
            writer = new BufferedWriter(new FileWriter(file));
            writer.write(content);

            System.out.println(&quot;内容已成功写入到文件: &quot; + filePath);
        } catch (IOException e)
        {
            e.printStackTrace();
        } finally
        {
            writer.close();
        }
    }
    public static void main(String[] args) throws IOException
    {
        // 如果文件不存在，提示文件不存在
        File file = new File(filePath);
        if (!file.exists())
        {
            System.out.println(&quot;该路径下文件不存在&quot;);
            return ;
        }

        //进行读操作并返回对图片处理之后的字符串
        String str = read(filePath);

        //删除原文件
        delete(filePath);

        //创建新文件并写入新内容
        create(filePath,str);

        System.out.println(&quot;运行结束&quot;);
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用java代码获取文件夹下的所有文件路径" tabindex="-1"><a class="header-anchor" href="#使用java代码获取文件夹下的所有文件路径" aria-hidden="true">#</a> 使用Java代码获取文件夹下的所有文件路径</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">// 文件夹(不是文件)的路径</span>
    <span class="token class-name">String</span> folderPath <span class="token operator">=</span> <span class="token string">&quot;D:\\\\Desktop\\\\&quot;</span><span class="token punctuation">;</span>
    <span class="token comment">// 用给定的文件夹路径创建File类</span>
    <span class="token class-name">File</span> file <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span>folderPath<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 用数组把文件夹下的文件存起来</span>
    <span class="token class-name">File</span><span class="token punctuation">[</span><span class="token punctuation">]</span> files <span class="token operator">=</span> file<span class="token punctuation">.</span><span class="token function">listFiles</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 如果文件数组为空则可能路径不对 给出提示</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>files <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">||</span> files<span class="token punctuation">.</span>length <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;您的文件夹下没有文件或者您的路径不对&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//foreach遍历数组</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">File</span> file2 <span class="token operator">:</span> files<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// 获取该文件夹下文件的全路径用getPath()方法</span>
        <span class="token class-name">String</span> filePath <span class="token operator">=</span> file2<span class="token punctuation">.</span><span class="token function">getPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>filePath<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 获取该文件夹下文件的名称用getName()方法</span>
        <span class="token class-name">String</span> fileName <span class="token operator">=</span> file2<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>fileName<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),t=[l];function d(c,r){return s(),e("div",null,t)}const p=n(a,[["render",d],["__file","代码应用实例集.html.vue"]]);export{p as default};
