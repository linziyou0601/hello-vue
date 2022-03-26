<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img
          src="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg"
          alt=""
          width="30"
          height="24"
          class="d-inline-block align-text-top"
        />bootstrap</a
      >

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link :class="navLinkClass('home')" to="/"
              ><svg
                width="31"
                height="27"
                viewBox="0 0 31 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              ></svg>
              Home
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :class="navLinkClass('about')" to="/about/hot"
              ><svg
                width="31"
                height="27"
                viewBox="0 0 31 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M26.1666 9.875V7.125C26.1666 5.6125 24.9666 4.375 23.4999 4.375H19.4999C19.4999 2.0925 17.7133 0.25 15.4999 0.25C13.2866 0.25 11.4999 2.0925 11.4999 4.375H7.49992C6.03325 4.375 4.83325 5.6125 4.83325 7.125V9.875C2.61992 9.875 0.833252 11.7175 0.833252 14C0.833252 16.2825 2.61992 18.125 4.83325 18.125V23.625C4.83325 25.1375 6.03325 26.375 7.49992 26.375H23.4999C24.9666 26.375 26.1666 25.1375 26.1666 23.625V18.125C28.3799 18.125 30.1666 16.2825 30.1666 14C30.1666 11.7175 28.3799 9.875 26.1666 9.875ZM23.4999 23.625H7.49992V7.125H23.4999V23.625ZM11.4999 15.375C10.3933 15.375 9.49992 14.4537 9.49992 13.3125C9.49992 12.1713 10.3933 11.25 11.4999 11.25C12.6066 11.25 13.4999 12.1713 13.4999 13.3125C13.4999 14.4537 12.6066 15.375 11.4999 15.375ZM21.4999 13.3125C21.4999 14.4537 20.6066 15.375 19.4999 15.375C18.3933 15.375 17.4999 14.4537 17.4999 13.3125C17.4999 12.1713 18.3933 11.25 19.4999 11.25C20.6066 11.25 21.4999 12.1713 21.4999 13.3125ZM10.1666 18.125H20.8333V20.875H10.1666V18.125Z"
                  :fill="linkColor('about')"
                />
              </svg>
              &nbsp;About
            </router-link>
          </li>
        </ul>
        <form class="d-flex">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
  <router-view />
</template>

<script setup>
import { useRoute } from "vue-router";
import { computed } from "vue";
import { getNavLinkClass } from "@/common-functions.js";

const route = useRoute();
const currentMatchesNames = computed(() => route.matched.map((s) => s.name));
const navLinkClass = (name) => ({
  ...getNavLinkClass(currentMatchesNames, name),
  ...{
    "d-flex": true,
    "align-items-center": true
  }
});
const linkColor = computed(
  () => (name) =>
    currentMatchesNames.value.some((s) => s === name) ? "#FFFFFF" : "#FFFFFF8C"
);
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.cursor-pointer {
  cursor: pointer
}
</style>
