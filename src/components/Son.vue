<template>
    <div>{{ cc }}</div>
    <h1>{{ count }}</h1>
    <button @click="handleClick">Button Add</button>
</template>

<script setup name="son">
import { inject, reactive, ref } from 'vue';

const cc = inject('name');
let count = inject('data');

const name = ref('rock');
const age = ref(18);

const handleClick = () => {
    count.value += 1;
};

const obj = reactive({
    x: 18,
    y: 20
});

const aa = () => {
    console.log('aa executed');
    // return 0;
};

defineExpose({ obj, name, age, aa });
</script>

<style lang="scss" scoped></style>
