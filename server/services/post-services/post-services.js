import { post_stats } from "./post-stats.js";
import { get_post } from "./get-post.js";
import { get_posts } from "./get-posts.js";
import { create_post } from "./create-post.js";

export const post_services = {
  query: {
    get_posts,
    get_post,
    post_stats,
  },
  mutation: {
    create_post,
  },
};
