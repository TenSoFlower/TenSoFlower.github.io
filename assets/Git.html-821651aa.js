import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as d,c as a,b as t,d as e,a as o,e as n}from"./app-d6cea1c0.js";const s="/assets/image-3fccaa1a.png",h={},c=n('<h1 id="git" tabindex="-1"><a class="header-anchor" href="#git" aria-hidden="true">#</a> Git</h1><h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2><p>Git是一个免费的，开源的分布式版本控制系统，可以快速高效地处理从小型到大型的各种项目。创始人为Linux创始人Linux Torvalds。又称为版本控制是一种记录文件内容变化，以便将来查阅特定版本修订情况的系统。</p><h2 id="官网" tabindex="-1"><a class="header-anchor" href="#官网" aria-hidden="true">#</a> 官网</h2>',4),u={href:"https://git-scm.com/",target:"_blank",rel:"noopener noreferrer"},g=n('<h2 id="下载" tabindex="-1"><a class="header-anchor" href="#下载" aria-hidden="true">#</a> 下载</h2><p><b style="color:#3e547d;"><strong>第一步</strong></b></p><figure><img src="'+s+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="hint-container warning"><p class="hint-container-title">注意</p><p><b style="color:#8f71e0;"><strong>下载完后一直下一步不建议修改安装目录，安装的目录路径不要有中文</strong></b></p></div><h2 id="作用" tabindex="-1"><a class="header-anchor" href="#作用" aria-hidden="true">#</a> 作用</h2><p>可以记录文件修改历史记录，从而让用户能够查看历史版本，方便版本切换。能让个人开发过度到团队协作。</p><h2 id="命令" tabindex="-1"><a class="header-anchor" href="#命令" aria-hidden="true">#</a> 命令</h2><p>鼠标右键选择Open Git Bash Here下输入</p>',8),_=t("thead",null,[t("tr",null,[t("th",null,"命令"),t("th",null,"作用")])],-1),p=t("tr",null,[t("td",null,"git --version"),t("td",null,"查看版本")],-1),b=t("tr",null,[t("td",null,"git init"),t("td",null,"初始化本地库")],-1),f=t("tr",null,[t("td",null,"git status"),t("td",null,"查看本地库状态")],-1),m={href:"http://user.name",target:"_blank",rel:"noopener noreferrer"},x=t("td",null,"设置用户签名",-1),v=t("tr",null,[t("td",null,"git config --global user.email 邮箱"),t("td",null,"设置邮箱")],-1),y=t("tr",null,[t("td",null,"git add 文件名"),t("td",null,"把文件增加到暂存区(把文件增加到Git上)")],-1),G=t("tr",null,[t("td",null,"git rm --cached 文件名"),t("td",null,"把文件从暂存区删除")],-1),k=t("tr",null,[t("td",null,'git commit -m "版本说明文字" 文件名'),t("td",null,"把暂存区的文件提交到本地仓库")],-1),B=t("tr",null,[t("td",null,"git reflog"),t("td",null,"查看版本信息")],-1),w=t("tr",null,[t("td",null,"git log"),t("td",null,"查看版本详细信息")],-1),L=n('<div class="hint-container warning"><p class="hint-container-title">注意</p><p><b style="color:#8f71e0;"><strong>第一次使用前必须要设置用户签名和邮箱</strong></b></p></div><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2><p><b style="color:#3e547d;"><strong>图形化工具使用</strong></b></p><p>安装图形化管理工具TortoiseGit</p><p><b style="color:#3e547d;"><strong>下载地址</strong></b></p>',5),N={href:"https://tortoisegit.org/download/",target:"_blank",rel:"noopener noreferrer"},T=n('<p><b style="color:#3e547d;"><strong>使用命令行</strong></b></p><table><thead><tr><th>命令</th><th>作用</th></tr></thead><tbody><tr><td>git init</td><td>初始化仓库</td></tr><tr><td>git add *</td><td>增加所有文件到暂存区</td></tr><tr><td>git commit -m &quot;描述信息......&quot;</td><td>提交并提供版本描述信息</td></tr><tr><td>git branch -M 分支名</td><td>自定义分支名</td></tr><tr><td>git remote add origin 远程地址</td><td>设置远程地址</td></tr><tr><td>git push -u origin 分支名</td><td>推送到远程</td></tr><tr><td>git push -f origin 分支名</td><td>使用强覆盖的方式用本地代码替代Git仓库内容</td></tr></tbody></table><div class="hint-container warning"><p class="hint-container-title">注意</p><p><b style="color:#8f71e0;"><strong>提交的文件中单个文件不能超过100MB不然推送不上去</strong></b></p></div>',3);function V(E,q){const r=l("ExternalLinkIcon");return d(),a("div",null,[c,t("p",null,[t("a",u,[e("Git官网"),o(r)])]),g,t("table",null,[_,t("tbody",null,[p,b,f,t("tr",null,[t("td",null,[e("git config --global "),t("a",m,[e("user.name"),o(r)]),e(" 用户名")]),x]),v,y,G,k,B,w])]),L,t("p",null,[t("a",N,[e("TortoiseGit"),o(r)])]),T])}const z=i(h,[["render",V],["__file","Git.html.vue"]]);export{z as default};
