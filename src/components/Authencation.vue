<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div id="authencation">
    <Login
      @handleChangeForm="handleChangeForm"
      v-show="handleCheckView('login')" />
    <Register
      @handleChangeForm="handleChangeForm"
      v-show="handleCheckView('register')" />
    <ForgotPassword
      @handleChangeForm="handleChangeForm"
      v-show="handleCheckView('forgot')" />
    <span id="icon-first"></span>
  </div>
</template>

<script setup>
//import
import { ref, onMounted } from "vue";
import ForgotPassword from "../views/authen/ForgotPassword.vue";
import Login from "../views/authen/Login.vue";
import Register from "../views/authen/Register.vue";
//
const viewDefault = ref("login");

onMounted(() => {});

const handleCheckView = (view) => viewDefault.value === view;
const handleChangeForm = (view) => {
  viewDefault.value = view;
};
</script>

<style>
#authencation {
  width: 100vw;
  height: 100vh;
  background: #2148c0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
}
#authencation::before {
  content: "";
  background: #edecec60;
  width: 600px;
  height: 600px;
  border-radius: 50%;
  position: absolute;
  left: 0;
  bottom: 0;
  transform: translate(-80px, 80px);
  z-index: 0;
  opacity: 0.3;
}
#authencation::after {
  content: "";
  background: #edececcf;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  position: absolute;
  left: 0;
  bottom: 0;
  transform: translate(-80px, 80px);
  z-index: 0;
  opacity: 0.3;
}
#icon-first {
  background: #edecec19;
  width: 800px;
  height: 800px;
  border-radius: 50%;
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(150px, -150px);
}
#icon-first::before {
  content: "";
  background: #2148c0;
  width: 600px;
  height: 600px;
  border-radius: 50%;
  position: absolute;
  left: 0;
  bottom: 0;
  transform: translate(150px, -150px);
  z-index: 0;
}
#icon-first::after {
  content: "";
  background: #edececcf;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  position: absolute;
  left: 0;
  bottom: 0;
  transform: translate(300px, -300px);
  z-index: 0;
  opacity: 0.4;
}
</style>
