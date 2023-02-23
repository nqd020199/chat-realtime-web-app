<template>
  <router-view />
</template>

<script setup>
//import
import { onMounted } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

// import {
//   collection,
//   onSnapshot,
//   addDoc,
//   deleteDoc,
//   doc,
//   updateDoc,
//   query,
//   orderBy,
//   limit,
// } from "firebase/firestore";
// import { db } from "@/firebase";
// //todo
// const todos = ref([]);

// const collectionRef = collection(db, "todos");
// const sortAllowDate = query(
//   collectionRef,
//   orderBy("valueSort", "desc"),
//   limit(5)
// );
//mounted
onMounted(async () => {
  const token = JSON.parse(localStorage.getItem("TOKEN"));
  if (!token?.email) {
    return router.push("/login");
  }
});

//add Todo
// const newTodoContent = ref("");
// const addTodo = async () => {
//   await addDoc(collectionRef, {
//     content: newTodoContent.value,
//     done: false,
//     date: new Date().toUTCString(),
//     valueSort: Date.now(),
//   });
//   newTodoContent.value = "";
// };
// const deletTodo = async (id) => {
//   await deleteDoc(doc(collectionRef, id));
// };
// const doneTodo = (id) => {
//   todos.value.forEach(async (todo) => {
//     if (todo.id === id) {
//       await updateDoc(doc(collectionRef, id), {
//         ...todo,
//         done: !todo.done,
//         date: new Date().toUTCString(),
//       });
//     }
//   });
//   return todos;
// };
</script>

<style>
@import "bulma/css/bulma.min.css";

.content-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.is-show {
  display: block;
}
.is-hide {
  display: none;
}

.item-done {
  text-decoration: line-through;
}
</style>
