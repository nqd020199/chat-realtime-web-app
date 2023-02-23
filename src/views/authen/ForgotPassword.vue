<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div id="sigin">
    <h1 class="title has-text-centered has-text-primary mb-6 is-1 is-uppercase">
      forgot password
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
      <div class="field mt-5 is-flex">
        <p
          class="button is-danger is-fullwidth mr-1"
          @click="handleChangeFormProps">
          Back to Login
        </p>
        <button class="button is-success is-fullwidth ml-1">Send</button>
      </div>
    </form>
  </div>
</template>

<script setup>
//import
import { ref, defineEmits } from "vue";

const email = ref("");
const emit = defineEmits(["handleChangeForm"]);

const handleChangeFormProps = () => {
  emit("handleChangeForm", "login");
};

// end import
</script>

<style>
#sigin {
  width: calc(100% * 0.3);
  height: calc(100% * 0.4);
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
