const e=JSON.parse('{"key":"v-b2aa1fe2","path":"/MyNotes/%E8%A7%A3%E5%86%B3%E8%B7%A8%E5%9F%9F%E9%97%AE%E9%A2%98.html","title":"解决跨域问题","lang":"zh-CN","frontmatter":{"icon":"/icon/compass.svg","date":"2023-10-12T00:00:00.000Z","category":["项目技术"],"footer":"云盘山腰间，脚踏山之颠，本是山下人，却成云上仙。","tag":["跨域问题"],"description":"解决跨域问题 什么是本域 本域就是同协议，同域名，同端口的就叫本域。必须要三个都一样。 什么是跨域 在了解什么是跨域的时候，我们首先要了解一个概念，叫同源策略，什么是同源策略呢，就是我们的浏览器出于安全考虑，只允许与本域^ 1下的接口交互。不同源的客户端脚本在没有明确授权的情况下，不能读写对方的资源。是什么意思呢，比如淘宝和京东两个域名不同，如果允许跨域的话，那么我就可以在淘宝上发送一个请求给京东，并且京东会回应我数据，这么做是不符合实际的。","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/MyNotes/%E8%A7%A3%E5%86%B3%E8%B7%A8%E5%9F%9F%E9%97%AE%E9%A2%98.html"}],["meta",{"property":"og:site_name","content":"TenSoFlowBlog"}],["meta",{"property":"og:title","content":"解决跨域问题"}],["meta",{"property":"og:description","content":"解决跨域问题 什么是本域 本域就是同协议，同域名，同端口的就叫本域。必须要三个都一样。 什么是跨域 在了解什么是跨域的时候，我们首先要了解一个概念，叫同源策略，什么是同源策略呢，就是我们的浏览器出于安全考虑，只允许与本域^ 1下的接口交互。不同源的客户端脚本在没有明确授权的情况下，不能读写对方的资源。是什么意思呢，比如淘宝和京东两个域名不同，如果允许跨域的话，那么我就可以在淘宝上发送一个请求给京东，并且京东会回应我数据，这么做是不符合实际的。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-13T15:26:01.000Z"}],["meta",{"property":"article:author","content":"TenSoFlow"}],["meta",{"property":"article:tag","content":"跨域问题"}],["meta",{"property":"article:published_time","content":"2023-10-12T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-13T15:26:01.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"解决跨域问题\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-10-12T00:00:00.000Z\\",\\"dateModified\\":\\"2024-06-13T15:26:01.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"TenSoFlow\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"什么是本域","slug":"什么是本域","link":"#什么是本域","children":[]},{"level":2,"title":"什么是跨域","slug":"什么是跨域","link":"#什么是跨域","children":[]},{"level":2,"title":"什么是session","slug":"什么是session","link":"#什么是session","children":[]},{"level":2,"title":"问题描述","slug":"问题描述","link":"#问题描述","children":[]},{"level":2,"title":"跨域解决方案","slug":"跨域解决方案","link":"#跨域解决方案","children":[{"level":3,"title":"后端","slug":"后端","link":"#后端","children":[]}]},{"level":2,"title":"跨域时session为null解决方案","slug":"跨域时session为null解决方案","link":"#跨域时session为null解决方案","children":[]},{"level":2,"title":"前端","slug":"前端","link":"#前端","children":[]}],"git":{"createdTime":1718292361000,"updatedTime":1718292361000,"contributors":[{"name":"tensoflower","email":"2803391693@qq.com","commits":1}]},"readingTime":{"minutes":3.42,"words":1027},"filePathRelative":"MyNotes/解决跨域问题.md","localizedDate":"2023年10月12日","excerpt":"<h1> 解决跨域问题</h1>\\n<h2> 什么是本域</h2>\\n<p>本域就是<strong>同协议，同域名，同端口</strong>的就叫本域。必须要三个都一样。</p>\\n<h2> 什么是跨域</h2>\\n<p>在了解什么是跨域的时候，我们首先要了解一个概念，叫<strong>同源策略</strong>，什么是同源策略呢，就是我们的浏览器出于安全考虑，只允许与<strong>本域</strong><a href=\\"%E6%9C%AC%E5%9F%9F%E5%B0%B1%E6%98%AF**%E5%90%8C%E5%8D%8F%E8%AE%AE%EF%BC%8C%E5%90%8C%E5%9F%9F%E5%90%8D%EF%BC%8C%E5%90%8C%E7%AB%AF%E5%8F%A3**%E7%9A%84%E5%B0%B1%E5%8F%AB%E6%9C%AC%E5%9F%9F%E3%80%82%E5%BF%85%E9%A1%BB%E8%A6%81%E4%B8%89%E4%B8%AA%E9%83%BD%E4%B8%80%E6%A0%B7%E3%80%82\\">^ 1</a>下的接口交互。不同源的客户端脚本在没有明确授权的情况下，不能读写对方的资源。是什么意思呢，比如淘宝和京东两个域名不同，如果允许跨域的话，那么我就可以在淘宝上发送一个请求给京东，并且京东会回应我数据，这么做是不符合实际的。</p>","copyright":{"author":"TenSoFlower","license":"MIT协议"},"autoDesc":true}');export{e as data};
