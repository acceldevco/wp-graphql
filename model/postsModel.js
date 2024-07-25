// Model/postsModel.js
let posts = [];

export function updatePosts(newPosts) {
  posts = newPosts;
}

export function getPosts() {
  return posts;
}