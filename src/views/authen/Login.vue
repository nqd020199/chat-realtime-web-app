<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div id="sigin">
    <h1 class="title has-text-centered has-text-primary mb-6 is-1 is-uppercase">
      Sig in
    </h1>
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
        @keypress="(event) => handleListenPressKey(event)"
        v-model="password" />
    </div>
    <div class="field forgot-password is-flex is-justify-content-space-between">
      <p
        class="subtitle is-6 is-clickable has-text-grey-light"
        @click="handleChangeFormForgot('register')">
        Sig up
      </p>
      <p
        class="subtitle is-6 is-clickable has-text-grey-light"
        @click="handleChangeFormForgot('forgot')">
        Forgot password
      </p>
    </div>
    <div class="field mt-5">
      <button class="button is-success is-fullwidth" @click="handleSubmit">
        Sin in
      </button>
    </div>
    <div class="sigin-social mt-5">
      <button
        class="button is-info is-fullwidth"
        @click="handleLoginWithGoogle">
        Sig in with Google
        <i class="fa-brands fa-google-plus-g ml-1 has-text-danger icon"></i>
      </button>
    </div>
  </div>
</template>

<script setup>
//import
import { ref, defineEmits, onMounted } from "vue";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");
const emit = defineEmits(["handleChangeForm"]);
const router = useRouter();
const provider = new GoogleAuthProvider();
const auth = getAuth();

const handleChangeFormForgot = (view) => {
  emit("handleChangeForm", view);
};

const handleValiated = () => {
  if (!email.value.trim() || !password.value.trim()) {
    alert("DaiNQ 🚀 -> Email và mật khẩu là trường bắt buộc");
    return false;
  }
  return true;
};

const handleListenPressKey = (event) => {
  if (event.key === "Enter") {
    handleSubmit();
  }
};

const handleSubmit = () => {
  if (!handleValiated()) return;
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      localStorage.setItem(
        "TOKEN",
        JSON.stringify({ ...userCredential.user?.reloadUserInfo })
      ); //}));
      console.log("DaiNQ 🚀 -> .then -> userCredential:", userCredential);
      router.push("/");
      // Signed in
    })
    .catch((error) => {
      alert("DaiNQ 🚀 -> Tài khoản hoặc mật khẩu không chính xác", error);
    });
};

const handleLoginWithGoogle = async () => {
  await signInWithPopup(auth, provider)
    .then((result) => {
      console.log("DaiNQ 🚀 -> .then -> result:", result);
      localStorage.setItem(
        "TOKEN",
        JSON.stringify({ ...result.user.providerData[0] })
      );
      router.push("/");
    })
    .catch((error) => {
      alert("DaiNQ 🚀 -> Tài khoản hoặc mật khẩu không chính xác", error);
    });
};

onMounted(() => {});
// end import
</script>

<style>
#sigin {
  width: calc(100% * 0.25);
  height: calc(100% * 0.5);
  min-width: 370px;
  background: #fff;
  border-radius: 16px;
  box-shadow: 5px 3px 16px 5px #4c4b4b;
  padding: 40px auto;
  position: relative;
  z-index: 100;
}
.subtitle:hover {
  color: rgb(32, 156, 238) !important;
}
</style>
