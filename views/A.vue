<template>
  <div>A</div>
  <el-button type="primary" @click="handleClickOpenDialog"
    >Open Dialog</el-button
  >
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

// 打开弹框
const handleClickOpenDialog = () => {
  router.push({ name: "a-dialog", params: { id: Number(new Date()) } });
};
</script>

<style scoped></style>
