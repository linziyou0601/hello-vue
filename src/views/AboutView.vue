<template>
  <div class="about">
    <h1>This is an about page</h1>
    <ul class="nav nav-pills nav-fill">
      <li class="nav-item">
        <router-link :class="navLinkClass('about-new')" to="/about/new">
          New
        </router-link>
      </li>
      <li class="nav-item">
        <router-link :class="navLinkClass('about-hot')" to="/about/hot">
          Hot
        </router-link>
      </li>
    </ul>
    <router-view />
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { computed } from "vue";
import { getNavLinkClass } from '@/common-functions.js';

const route = useRoute();
const currentMatchesNames = computed(() => route.matched.map((s) => s.name));
const navLinkClass = (name) => getNavLinkClass(currentMatchesNames, name);
</script>
