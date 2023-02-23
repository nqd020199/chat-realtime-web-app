<template>
  <div class="homepage">
    <div class="homepage-list_user"><ListUser /></div>
    <div class="homepage-form_chat"></div>
  </div>
</template>

<script setup>
import ListUser from "@/views/home/ListUser.vue";
import { onMounted } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
onMounted(async () => {
  const token = JSON.parse(localStorage.getItem("TOKEN"));
  if (!token?.email) {
    return router.push("/login");
  }
});
</script>

<style>
.homepage {
  height: 100vh;
  width: 100%;
  display: flex;
  flex-grow: 10;
}

.homepage-list_user {
  height: 100%;
  width: 100%;
  flex: 2;
  box-shadow: 1px 1px 1px 1px #d7d7d7;
}
.homepage-form_chat {
  height: 100%;
  width: 100%;
  flex: 8;
}
</style>
