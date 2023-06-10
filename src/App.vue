<template>
    <div class="app">
        <el-table>
            <el-table-column type="selection" width="150">选择</el-table-column>
            <el-table-column prop="name" label="姓名">
                <template slot-scope="scope">
                    {{ scope.row.name }}
                </template>
            </el-table-column>
            <el-table-column prop="age" label="年龄">
                <template slot-scope="scope">
                    {{ scope.row.age }}
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script setup>
// import Edit from './components/Edit.vue';
import axios from 'axios';
import { onMounted, ref } from 'vue';

const list = ref([]);
const getList = async () => {
    // 接口调用
    const res = await axios.get('/list');

    list.value = res.data;
};

onMounted(() => {
    getList();
});
</script>

<style lang="scss" scoped></style>
