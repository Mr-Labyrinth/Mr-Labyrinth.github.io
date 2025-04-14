var posts=["2025/02/25/hello-world/","2025/02/25/第一篇博客，纪念/","2025/04/13/一些计划——2025-04/","2025/04/14/使用IDEA和git提交的问题解决/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };