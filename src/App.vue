<template>
    <div>hello world</div>
    <h1>{{ counterStore.count }}</h1>
    <button @click="counterStore.increment">Button Add</button>
</template>

<script setup>
import { useCounterStore } from "./stores/counters";
import { onMounted } from "vue";
import { storeToRefs } from "pinia";

const counterStore = useCounterStore();
console.log(counterStore);

// 响应式数据需要storeToRefs来解构
const { count, double } = storeToRefs(counterStore);

// 方法需要单独结构
const { increment } = counterStore;

onMounted(() => {
    counterStore.getList();
});
</script>

<style lang="scss" scoped></style>
