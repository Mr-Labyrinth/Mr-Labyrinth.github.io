var posts=["2025/02/25/hello-world/","2025/02/25/第一篇博客，纪念/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };