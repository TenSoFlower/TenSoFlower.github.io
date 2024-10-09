import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as t,c as r,b as e,d as i,a,e as d}from"./app-30f3bdfc.js";const c={},v=d('<h1 id="git" tabindex="-1"><a class="header-anchor" href="#git" aria-hidden="true">#</a> Git</h1><h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2><p>Git是一个免费的，开源的<strong>分布式</strong>版本控制系统，可以快速高效地处理从小型到大型的各种项目。创始人为Linux创始人Linux Torvalds。又称为版本控制是一种记录文件内容变化，以便将来查阅特定版本修订情况的系统。</p><h2 id="官网" tabindex="-1"><a class="header-anchor" href="#官网" aria-hidden="true">#</a> 官网</h2>',4),u={href:"https://git-scm.com/",target:"_blank",rel:"noopener noreferrer"},m=e("h2",{id:"下载",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#下载","aria-hidden":"true"},"#"),i(" 下载")],-1),o={href:"https://git-scm.com/",target:"_blank",rel:"noopener noreferrer"},g=d(`<div class="hint-container warning"><p class="hint-container-title">注意</p><p><b style="color:#8f71e0;"><strong>下载完后一直下一步不建议修改安装目录，安装的目录路径不要有中文</strong></b></p></div><h2 id="作用" tabindex="-1"><a class="header-anchor" href="#作用" aria-hidden="true">#</a> 作用</h2><p>可以记录文件修改历史记录，从而让用户能够查看历史版本，方便版本切换。能让个人开发过度到团队协作。</p><h2 id="命令" tabindex="-1"><a class="header-anchor" href="#命令" aria-hidden="true">#</a> 命令</h2><p>下载完成后在某一文件夹下鼠标右键选择Open <strong>Git Bash</strong> Here会打开一个黑窗口，此窗口相当于一个小型的<strong>Linux环境</strong>，能输入Linux命令。</p><div class="hint-container warning"><p class="hint-container-title">注意</p><p><b style="color:#8f71e0;"><strong>第一次使用前必须要设置用户签名和邮箱，因为是多人环境，设置用户名和邮箱是为了方便区分。</strong></b></p></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p><b style="color:#8f71e0;"><strong>提交的文件中单个文件不能超过100MB不然推送不上去</strong></b></p></div><h3 id="git相关" tabindex="-1"><a class="header-anchor" href="#git相关" aria-hidden="true">#</a> Git相关</h3><div class="hint-container tip"><p class="hint-container-title">小贴士</p><p><b style="color:#A6522C;"> 以下命令中用[ ]括起来的内容表示自定义。如git add [FileName]表示FileName为自定义内容。可以为a.txt，也可为b.txt。</b></p></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 命令：git --version
// 作用：查看当前git版本
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><hr><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 命令：git config --global user.name [username]
// 命令：git config --global user.email [email]
// 作用：通常在第一次时候使用，设置git的用户名和邮箱，每次提交代码时可以知道是谁提交的。方便多人协作开发时管理。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 命令：git init
// 作用：会在当前文件夹下创建本地仓库即 .git 文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><hr><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>可以指定当前文件夹下的哪些文件交给Git管理。当前文件下的所有文件叫工作区，交给Git管理的文件叫暂存区。
// 命令：git add [FileName]
// 作用：指定文件到暂存区即指定当前文件夹下的哪些文件交给Git管理。FileName是文件的名字，如user.txt。
// 扩展命令：git add .
// 作用：把当前文件夹下的所有文件都上传到暂存区即都交给Git管理。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 命令：git rm --cached [FileName]
// 作用：把文件名为FileName的从暂存区删除
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><hr><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 命令：git commit -m &quot;[版本说明文字]&quot; 
// 作用：将暂存区的所有文件提交到本地仓库也就是.git文件里，形成一次提交记录。&quot;版本说明文字&quot;是对这次版本的描述。可以自定义。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><hr><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 命令：git status
// 作用：查看暂存区与非暂存区有哪些文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><hr><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 命令：git log
// 作用：查看提交历史。可以看到每次提交的ID、版本描述、提交时间、提交人的用户名和邮箱。
// 扩展命令：git log --pretty=oneline --all --graph --abbrev-commit
// 作用：简化提交历史信息的显示
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 为命令设置别名
1. 输入 touch ~/.bashrc命令创建~/.bashrc文件
2. 输入 nano ~/.bashrc命令编辑~/.bashrc文件
3. 在~/.bashrc文件中输入
	alias git-log=&#39;git log --pretty=oneline --all --graph --abbrev-commit&#39; 命令
	alias是设置别名的意思，上述的意思是将git log --pretty=oneline --all --graph --abbrev-commit设置成git-log
4. 输入 source ~/.bashrc命令 重新加载~/.bashrc文件
5. 成功，即可用git-log表示git log --pretty=oneline --all --graph --abbrev-commit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 版本回退
// 命令：git reset --hard [commitID]
// 作用：回退到之前的版本 commitID可以使用git log指令查看
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 查看操作的历史记录
// 命令：git reflog
// 作用：查看回退版本的所有历史记录，有时候回退到前一版本之后，又想回退到现在的版本，用git log是看不到现在的版本ID，因为你回退到了上一个版本。这时候需要使用git reflog命令查看，他记录了你回退的所有操作以及对应的版本ID。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 忽略文件
在.git的同目录下创建.gitignore文件，然后在里面填写忽略的文件即不想让git管理的文件。git会自动读取.gitignore文件里面的忽略文件。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><hr><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 查看分支
// 命令：git branch
// 作用：查看所有的分支列表
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 创建分支
// 命令：git branch [BranchName]
// 作用：创建分支，BranchName是自定义的分支名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 切换分支
// 命令：git checkout [BranchName]
// 作用：切换分支，BranchName是要切换的分支名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 创建并切换分支
// 命令：git checkout -b [BranchName]
// 作用：创建一个不存在的分支，并切换到这个不存在的分支。BranchName是当前不存在的分支名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 合并分支
// 命令：git merge [BranchName]
// 作用：合并分支，一般都是先切换到master分支上，然后合并BranchName分支
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 删除分支
// 命令：git branch -d [BranchName]
// 作用：删除名字为BranchName的分支，需要做各种检查
// 命令：git branch -D [BranchName]
// 作用：删除名字为BranchName的分支，不做任何检查，强制删除
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 解决冲突
1. 先手动解决冲突
2. 然后 git add .
3. 然后 git commit -m &quot;[Version Description]&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 添加远程仓库
// 命令：git remote add [origin] [url]
// 作用：增加远程仓库 origin是这个远程仓库的名字可以自定义，url是仓库在gitee或者github上面的仓库地址。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 查看当前定义的远程仓库名字
// 命令：git remote
// 作用：查看当前定义的远程仓库名字
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 推送代码到远程仓库
// 命令：git pull [origin] [master]
// 作用：推送代码到远程仓库 origin是当前定义的远程仓库名字，master是想要推送到哪一个分支。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 克隆代码
// 命令：git clone [url]
// 作用：从远程仓库克隆代码到本地，在哪里打开的git bash，会在打开git bash文件路径下创建一个文件夹并将克隆下来的代码放到此文件夹中。文件夹名字为url中最后一个/之后.git之前的符号。
// 命令：git clone [url] [FileName]
// 作用：从远程仓库克隆代码到本地，在哪里打开的git bash，会在打开git bash文件路径下创建一个文件夹并将克隆下来的代码放到此文件夹中。文件夹名字为自定义的FileName。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 拉取代码
// 命令：git fetch [origin] [master]
// 作用：只拉取别人更改之后的代码，而不进行合并。origin是自定义的远程仓库名字，master是分支名。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 拉取并合并代码
// 命令：git pull [origin] [master]
// 作用：拉取别人更改之后的代码并与你的进行合并。origin是自定义的远程仓库名字，master是分支名。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="完整流程" tabindex="-1"><a class="header-anchor" href="#完整流程" aria-hidden="true">#</a> 完整流程</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 1.直接在主分支上提交。
git status
git add .
git commit -m &quot;[版本信息]&quot;
git pull [远程名] [主分支]
git push [远程名] [主分支]

// 2.本地自己创建一个分支，然后合并到主分支上，此种方法更安全。
git branch [SelfBranchName] // 创建自己的分支名-只需执行一次

git status
git add .
git commit -m &quot;[版本信息]&quot;
git checkout [主分支名]
git merge [自己的分支]
git push [远程名] [主分支]
git checkout [自己的分支]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="linux相关" tabindex="-1"><a class="header-anchor" href="#linux相关" aria-hidden="true">#</a> Linux相关</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 命令：ll
// 作用：用于列出目录中的文件和目录的详细信息。它实际上是ls -l命令的一个别名，显示的结果
包括文件类型、权限、硬链接数、所有者、组、文件大小、最后修改时间和文件名等详细信息。
// 扩展命令：
ll -a：包括隐藏文件在内的所有文件。
ll -h：以人类可读的格式显示文件大小（例如，1K、234M、2G）。
ll -t：根据修改时间排序。
ll -r：逆序排列。
ll -R：递归列出子目录中的文件。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 命令：touch [FileName]
// 作用：在当前文件夹下创建文件，FileName是文件名称，如touch demo.txt。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><hr><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 命令：clear
// 作用：清除当前所有文字
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="tortoisegit" tabindex="-1"><a class="header-anchor" href="#tortoisegit" aria-hidden="true">#</a> TortoiseGit</h2><p><b style="color:#3e547d;"><strong>图形化工具使用</strong></b></p><p>安装图形化管理工具TortoiseGit</p><p><b style="color:#3e547d;"><strong>下载地址</strong></b></p>`,71),b={href:"https://tortoisegit.org/download/",target:"_blank",rel:"noopener noreferrer"};function h(x,p){const n=l("ExternalLinkIcon");return t(),r("div",null,[v,e("p",null,[e("a",u,[i("Git官网"),a(n)])]),m,e("p",null,[e("a",o,[i("Git下载"),a(n)])]),g,e("p",null,[e("a",b,[i("TortoiseGit"),a(n)])])])}const N=s(c,[["render",h],["__file","Git.html.vue"]]);export{N as default};
