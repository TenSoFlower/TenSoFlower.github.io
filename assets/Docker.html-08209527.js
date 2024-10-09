import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as c,c as s,b as e,d as r,a,e as t}from"./app-d0110afb.js";const d="/assets/img-7bb78e88.png",h={},l=t('<h1 id="docker" tabindex="-1"><a class="header-anchor" href="#docker" aria-hidden="true">#</a> Docker</h1><h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2><figure><img src="'+d+'" alt="鲸鱼箱" tabindex="0" loading="lazy"><figcaption>鲸鱼箱</figcaption></figure><p><strong>一切在云端，万物皆容器。一次镜像，处处运行</strong>。Docker 是一个开源的应用容器引擎，基于Go 语言并遵从 Apache2.0 协议开源。Docker可以让开发者打包他们的应用以及依赖包到一个轻量级、可移植的容器中，然后发布到任何流行的 Linux 机器上，也可以实现虚拟化。容器是完全使用沙箱机制，相互之间不会有任何接口（类似 iPhone 的 app）,更重要的是容器性能开销极低。<strong>可以这么说: Docker的出现实现了从搬家到搬楼。</strong></p><h2 id="官网" tabindex="-1"><a class="header-anchor" href="#官网" aria-hidden="true">#</a> 官网</h2>',5),p={href:"http://www.docker.com",target:"_blank",rel:"noopener noreferrer"},k=e("h2",{id:"下载教程",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#下载教程","aria-hidden":"true"},"#"),r(" 下载教程")],-1),_={href:"https://www.bilibili.com/video/BV1gr4y1U7CY/?p=7&spm_id_from=pageDriver&vd_source=549482551e5288f70f4ac8e71f20781e",target:"_blank",rel:"noopener noreferrer"},b=t('<h2 id="优点" tabindex="-1"><a class="header-anchor" href="#优点" aria-hidden="true">#</a> 优点</h2><p>Docker 是一个用于开发，交付和运行应用程序的开放平台。Docker 使您能够将应用程序与基础架构分开，从而可以快速交付软件。借助Docker，您可以与管理应用程序相同的方式来管理基础架构。通过利用 Docker 的方法来快速交付，测试和部署代码，您可以大大减少编写代码和在生产环境中运行代码之间的延迟。</p><p><b style="color:#3e547d;">快速，一致地交付您的应用程序</b></p><p>Docker允许开发人员使用您提供的应用程序或服务的本地容器在标准化环境中工作，从而简化了开发的生命周期。</p><p>容器非常适合持续集成和持续交付（CI / CD）工作流程，请考虑以下示例方案：</p><ul><li>您的开发人员在本地编写代码，并使用 Docker 容器与同事共享他们的工作。</li><li>他们使用 Docker 将其应用程序推送到测试环境中，并执行自动或手动测试。</li><li>当开发人员发现错误时，他们可以在开发环境中对其进行修复，然后将其重新部署到测试环境中，以进行测试和验证。</li><li>测试完成后，将修补程序推送给生产环境，就像将更新的镜像推送到生产环境一样简单。</li></ul><p><b style="color:#3e547d;">响应式部署和扩展</b></p><p>Docker 是基于容器的平台，允许高度可移植的工作负载。Docker 容器可以在开发人员的本机上，数据中心的物理或虚拟机上，云服务上或混合环境中运行。Docker 的可移植性和轻量级的特性，还可以使您轻松地完成动态管理的工作负担，并根据业务需求指示，实时扩展或拆除应用程序和服务。</p><p><b style="color:#3e547d;">在同一硬件上运行更多工作负载</b></p><p>Docker 轻巧快速。它为基于虚拟机管理程序的虚拟机提供了可行、经济、高效的替代方案，因此您可以利用更多的计算能力来实现业务目标。Docker 非常适合于高密度环境以及中小型部署，而您可以用更少的资源做更多的事情。Docker是内核级虚拟化，其不像传统的虚拟化技术一样需要额外的Hypervisor支持，所以在一台物理机上可以运行很多个容器实例，可大大提升物理服务器的CPU和内存的利用率。</p><h2 id="作用" tabindex="-1"><a class="header-anchor" href="#作用" aria-hidden="true">#</a> 作用</h2><p>软件可以带环境安装，解决了MySql Redis JDK等的版本不一致问题。让运维和开发的环境版本一致，方便运维部署项目。解决了运维手动改版本的麻烦。</p><h2 id="专有名词解释" tabindex="-1"><a class="header-anchor" href="#专有名词解释" aria-hidden="true">#</a> 专有名词解释</h2><p>Docker包含三个基本概念，分别是<strong>镜像</strong>（Image）、<strong>容器</strong>（Container）和<strong>仓库</strong>（Repository）。镜像是 Docker 运行容器的前提，仓库是存放镜像的场所，可见镜像是Docker的核心。</p><h3 id="镜像-image" tabindex="-1"><a class="header-anchor" href="#镜像-image" aria-hidden="true">#</a> <b style="color:#3e547d;">镜像（Image）</b></h3><p><strong>规范的解释：<strong>Docker 镜像可以看作是一个</strong>特殊的文件系统</strong>，除了提供容器运行时所需的程序、库、资源、配置等文件外，还包含了一些为运行时准备的一些配置参数（如匿名卷、环境变量、用户等）。镜像不包含任何动态数据，其内容在构建之后也不会被改变。</p><p><strong>通俗的解释：</strong> 电脑装系统的时候，需要一张盘，我们称其为镜像，镜像是一个固定的文件，这次读盘和下次读盘内容是一样的。但有些开发者会把这个镜像安装到电脑上，再在这个电脑上删删改改，再重新打包一个镜像刻盘，固化出一个镜像来，这就是镜像打包。并且这个镜像和之前的不同。那么其有什么好处呢？比如程序员A实现了一个玩英雄联盟的镜像，这时我们就可以拿来直接玩。那么世界上所有的人都可以去制作各种功能的镜像，并且都可以上传到专门的镜像网站，我们需要哪种功能就可以到镜像网上自己下载。可谓是<strong>前人种树，后人乘凉。</strong></p><h3 id="容器-container" tabindex="-1"><a class="header-anchor" href="#容器-container" aria-hidden="true">#</a> <b style="color:#3e547d;">容器（Container）</b></h3><p>镜像创建的运行示例，Docker利用容器来运行应用。每个容器都是相互隔离的，保证安全的平台。我们可以把容器看做是一个轻量级的Linux运行环境。</p><h3 id="仓库-repository" tabindex="-1"><a class="header-anchor" href="#仓库-repository" aria-hidden="true">#</a> <b style="color:#3e547d;">仓库（Repository）</b></h3><p>存放镜像的地方，分为共有仓库和私有仓库。</p><h2 id="镜像网" tabindex="-1"><a class="header-anchor" href="#镜像网" aria-hidden="true">#</a> 镜像网</h2>',22),f={href:"https://hub.docker.com/",target:"_blank",rel:"noopener noreferrer"},g=e("p",null,[r("阿里云镜像网(国内)地址："),e("a",{href:"Http://mirrors.aliyun.com"},"Http://mirrors.aliyun.com")],-1),u=e("details",{class:"hint-container details"},[e("summary",null,[e("b",{style:{color:"#bf3e73"}},"问：容器与虚拟机有什么不同")]),e("p",null,[e("b",{style:{color:"#f19977"}},[r("答：容器与虚拟机不同，不需要捆绑一整套操作系统，只需要软件工作所需的库资源和设置。系统因此而变得高效轻量并保证部署在任何环境中的软件都能始终如一地运行。"),e("strong",null,"Docker容器是在操作系统层面上实现虚拟化，直接复用本地主机的操作系统，而传统虚拟机则是在硬件层面实现虚拟化"),r("。Docker优势为启动速度快，占用体积小。")])])],-1);function m(D,x){const o=i("ExternalLinkIcon");return c(),s("div",null,[l,e("p",null,[r("官网地址："),e("a",p,[r("http://www.docker.com"),a(o)])]),k,e("p",null,[r("B站："),e("a",_,[r("07_docker官网介绍_哔哩哔哩_bilibili"),a(o)])]),b,e("p",null,[r("最大镜像网DockerHub(国外)网址："),e("a",f,[r("https://hub.docker.com/"),a(o)])]),g,u])}const v=n(h,[["render",m],["__file","Docker.html.vue"]]);export{v as default};
