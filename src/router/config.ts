const routes = [
  {
    path: ["/", "/home"],
    exact: true,
    component: "Home",
  },
  {
    path: "/blog",
    exact: true,
    component: "Blog",  // Đường dẫn đến trang danh sách blog
  },
  {
    path: "/blog/post/:postId",  // Đường dẫn đến trang chi tiết bài viết
    exact: true,
    component: "BlogPost",
  },
];

export default routes;
