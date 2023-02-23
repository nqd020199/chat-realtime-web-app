<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div id="register">
    <h1 class="title has-text-centered has-text-primary mb-6 is-1 is-uppercase">
      Sig up
    </h1>
    <form>
      <div class="field">
        <input
          class="input"
          type="email"
          placeholder="Email"
          autofocus
          v-model="email" />
      </div>
      <div class="field">
        <input
          class="input"
          type="password"
          placeholder="Password"
          v-model="password" />
      </div>
      <div
        class="field forgot-password is-flex is-justify-content-space-between">
        <p
          class="subtitle is-6 is-clickable has-text-grey-light"
          @click="handleChangeFormProps('login')">
          Have an account ?
        </p>
        <p
          class="subtitle is-6 is-clickable has-text-grey-light"
          @click="handleChangeFormProps('forgot')">
          Forgot password
        </p>
      </div>
      <div class="field mt-5">
        <button
          class="button is-success is-fullwidth"
          @click="(event) => handleRegisterUser(event)">
          Sin in
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
//import
import { ref, defineEmits } from "vue";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");
const emit = defineEmits(["handleChangeForm"]);
const router = useRouter();

const handleChangeFormProps = (view) => {
  emit("handleChangeForm", view);
};

const handleRegisterUser = (event) => {
  if (!email.value.trim() || !password.value.trim()) {
    return event.preventDefault();
  }
  createUserWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data) => {
      console.log("DaiNQ 🚀 -> .then -> data:", data);
      router.push("/login");
    })
    .catch((error) => {
      console.log("DaiNQ 🚀 -> handleRegisterUser -> error:", error);
      // switch (error.code) {
      //   case "auth/invalid-email":
      //     console.log("DaiNQ 🚀 -> handleRegisterUser -> error:", error);
      //     break;
      //   case "auth/user-not-found":
      //     console.log("DaiNQ 🚀 -> handleRegisterUser -> error:", error);
      //     break;
      //   case "auth/wrong-password":
      //     console.log("DaiNQ 🚀 -> handleRegisterUser -> error:", error);
      //     break;
      //   default:
      //     break;
      // }
    });
};

// life cycle
</script>

<style>
#register {
  width: calc(100% * 0.3);
  height: calc(100% * 0.5);
  min-width: 370px;
  background: #fff;
  border-radius: 16px;
  box-shadow: 5px 3px 16px 5px #4c4b4b;
  padding: 40px;
  position: relative;
  z-index: 100;
}
.register:hover {
  color: rgb(32, 156, 238) !important;
}
</style>
