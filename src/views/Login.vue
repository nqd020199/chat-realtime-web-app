<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div id="sigin">
    <h1 class="title has-text-centered has-text-primary mb-6 is-1">Login</h1>
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
        <p class="subtitle is-6 is-clickable has-text-grey-light">Sig up</p>
        <p class="subtitle is-6 is-clickable has-text-grey-light">
          Forgot password
        </p>
      </div>
      <div class="field mt-5">
        <button class="button is-success is-fullwidth">Sin in</button>
      </div>
    </form>
    <div class="sigin-social mt-5">
      <button class="button is-info is-fullwidth">
        Sig in with Google
        <i class="fa-brands fa-google ml-3 has-text-danger icon"></i>
      </button>
    </div>
  </div>
</template>

<script setup>
//import
import { ref, defineProps, onMounted } from "vue";

const email = ref("");
const password = ref("");
const props = defineProps({ viewDefault: String });
onMounted(() => {
  console.log("DaiNQ 🚀 -> onMounted -> props", props.viewDefault);
});

// end import
</script>

<style>
#sigin {
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
.subtitle:hover {
  color: rgb(32, 156, 238) !important;
}
</style>
