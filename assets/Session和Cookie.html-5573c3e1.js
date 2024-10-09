import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o,c as s,e as i}from"./app-64e5f4dc.js";const n={},a=i('<h1 id="session和cookie" tabindex="-1"><a class="header-anchor" href="#session和cookie" aria-hidden="true">#</a> Session和Cookie</h1><h2 id="http无状态" tabindex="-1"><a class="header-anchor" href="#http无状态" aria-hidden="true">#</a> Http无状态</h2><p>HTTP无状态协议，是指协议对于交互性场景没有记忆能力。通俗理解就是你这次登录之后，你下次使用相同的用户名和密码登录，服务器并不知道还是你。</p><h2 id="cookie" tabindex="-1"><a class="header-anchor" href="#cookie" aria-hidden="true">#</a> Cookie</h2><p><strong>实现每次HTTP请求都自动带数据给服务器的技术</strong>。如果没有Session。浏览器第一次发送HTTP请求，服务器会进行Cookie设置，也就是Set-Cookie，里面有名和值两个重要的属性。服务器会把名和值属性里的内容给填充完整。发给浏览器以后，浏览器会保存起来。这样浏览器以后发送的每一个请求都会自动附上这个Cookie。说白了Cookie就是一种存储在浏览器的数据而已。但是把用户名和密码保存在Cookie里面是很不安全的。只要电脑被黑，在Cookie里面的重要信息就会被泄露。于是出现了Session(会话)。</p><h2 id="session" tabindex="-1"><a class="header-anchor" href="#session" aria-hidden="true">#</a> Session</h2><p>浏览器访问服务器就是会话的开始，不同的网站对与每个用户的会话都设定了时间以及唯一的ID，这里的ID就是通常所说的Session ID。使用用户名和密码进行登录，服务器确定用户名和密码都是正确的，就会创建一个Session ID和会话结束时间，Session ID一般都是无规律的字符串。服务器把Session ID和会话结束时间发给浏览器。这里就用到了Cookie，设置Cookie，并把Session ID加入到Cookie里。再把会话结束时间对应设置为这个Cookie的有效期。这里浏览器就不是保存的用户名和密码而是Session ID，而Session ID无规律所以安全性有了增强。</p><h2 id="token" tabindex="-1"><a class="header-anchor" href="#token" aria-hidden="true">#</a> Token</h2><p>随着互联网的发展，用户群体变得越来越大，如果服务器依旧基于Cookie和Session，在特定时间有大量用户访问服务器的时候。服务器就需要存储大量Session ID在服务器里，但是如果有多台服务器，就需要分享Session ID给其它服务器。如此就出现了JWT。用户第一次登录之后服务器会生成一个JWT令牌，服务器不需要保存这个JWT，只需要保存JWT签名的密文，接着把JWT发给浏览器，浏览器以Cookie的形式存储，以后每次用户发送请求都会把这个JWT发给服务器，用户就不需要重新输入用户名和密码了，这里的Token存储在用户那边而不是服务器端。</p>',9),t=[a];function r(h,d){return o(),s("div",null,t)}const S=e(n,[["render",r],["__file","Session和Cookie.html.vue"]]);export{S as default};
