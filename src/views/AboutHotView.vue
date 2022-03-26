<template>
  <div class="about_hot">
    <PostDialog :post="currentPost" />
    <div class="row row-cols-1 row-cols-md-4 g-2">
      <div class="col" v-for="(post, index) in posts" :key="index">
        <div class="card m-2">
          <div
            class="cursor-pointer"
            @click="currentPost = post"
            data-bs-toggle="modal"
            data-bs-target="#postDialogModal"
          >
            <div class="card-header bg-transparent py-3">
              <div class="row align-items-center">
                <div class="col-auto">
                  <div
                    class="avatar rounded-circle d-flex justify-content-center align-items-center"
                  >
                    {{ post.user[0] }}
                  </div>
                </div>
                <div class="col text-start">
                  {{ post.department }}．{{ post.user }}
                </div>
                <div class="col-auto d-flex" style="height: 40px">
                  <div class="vr"></div>
                </div>
                <div class="col-auto">{{ post.date }}</div>
              </div>
            </div>
            <div class="card-body">
              <h4 class="text-start mb-3">{{ post.title }}</h4>
              <p
                class="card-text text-start text-muted"
                v-html="parseContent(post)"
              ></p>
            </div>
            <img
              v-show="post.coverimg"
              :src="post.coverimg"
              class="img-fluid"
              style="width: 100%"
            />
          </div>
          <div class="card-footer bg-transparent py-3">
            <div class="row mx-auto post-card-footer">
              <div class="col d-flex justify-content-center align-items-center">
                <svg
                  width="20"
                  height="18"
                  viewBox="0 0 26 23"
                  :fill="post.liked ? 'red' : 'none'"
                  @click="
                    post.liked = !(post.liked || false);
                    post.liked ? post.likes++ : post.likes--;
                  "
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.23437 8.50347C0.440508 4.789 1.56252 1.69007 6.15635 1.07453C10.7502 0.45899 12.6396 3.81588 12.5602 5.27514C12.5602 3.55057 15.8362 0.522666 19.5197 1.07453C24.1242 1.76436 24.6677 6.24825 23.6743 9.06064C22.6809 11.873 16.3795 17.9577 12.5602 21C8.78491 18.108 2.02824 12.2179 1.23437 8.50347Z"
                    :stroke="post.liked ? 'red' : 'black'"
                    stroke-width="2"
                  />
                </svg>
                <span class="ps-2">{{ numberFilter(post.likes) }}</span>
              </div>
              <div class="col d-flex justify-content-center align-items-center">
                <svg
                  width="19"
                  height="18"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.0184 22.5L17.9262 21.2373C6.72914 24.553 2.33132 18.2306 1.57907 14.7725C0.763854 11.025 1.57907 -0.558311 14.7725 1.8185C22.9571 3.29296 25.1594 12.161 22.1793 17.3876L23.0184 22.5Z"
                    stroke="black"
                    stroke-width="2"
                  />
                </svg>
                <span class="ps-2">{{ numberFilter(post.comments) }}則</span>
              </div>
              <div class="col d-flex justify-content-center align-items-center">
                <svg
                  width="20"
                  height="18"
                  viewBox="0 0 26 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.8235 1.71558H2.73828L11.2885 9.71128L13.6107 20.2845L23.8235 1.71558Z"
                    stroke="black"
                    stroke-width="2"
                  />
                  <path
                    d="M23.8233 1.71558L11.5669 9.4742"
                    stroke="black"
                    stroke-width="2"
                  />
                </svg>
                <span class="ps-2">{{ numberFilter(post.shares) }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PostDialog from "@/components/PostDialog.vue";

export default {
  components: {
    PostDialog
  }
};
</script>

<script setup>
import { ref, reactive } from "vue";
import { numberFilter, parseContent } from "@/common-functions.js";
import hotPosts from "@/assets/hot_posts.json";

const posts = reactive(hotPosts);
const currentPost = ref({});
</script>

<style scoped>
.avatar {
  width: 40px;
  height: 40px;
  color: #fff;
  background: #235252;
}
.post-card-footer {
  font-size: 0.75rem;
}
</style>
