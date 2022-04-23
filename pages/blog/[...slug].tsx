import type { NextPage } from "next";
import { useRouter } from "next/router";

const BlogPosts: NextPage = () => {
  const router = useRouter();
  console.log(router.query);

  return <div>Blog posts</div>;
};

export default BlogPosts;
