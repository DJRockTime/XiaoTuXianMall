<template>
    <div class="layout-header">
        <el-row class="center">
            <el-col>
                <el-row></el-row>
                <el-image style="width: 200px; height: 136px" :src="img" :fit="contain" />
                <el-row></el-row>
                <el-menu
                    :default-active="activeIndex"
                    class="el-menu-demo"
                    mode="horizontal"
                    :ellipsis="false"
                    @select="handleSelect"
                >
                    <div class="flex-grow" />
                    <el-menu-item index="1">首页</el-menu-item>
                    <el-menu-item index="2">居家</el-menu-item>
                    <el-menu-item index="3">美食</el-menu-item>
                    <el-menu-item index="4">服饰</el-menu-item>
                    <el-menu-item index="5">母婴</el-menu-item>
                    <el-menu-item index="6">个护</el-menu-item>
                    <el-menu-item index="7">严选</el-menu-item>
                    <el-menu-item index="8">数码</el-menu-item>
                    <el-menu-item index="9">运动</el-menu-item>
                    <el-menu-item index="10">杂项</el-menu-item>
                    <el-menu-item>
                        <el-autocomplete
                            v-model="state"
                            :fetch-suggestions="querySearch"
                            popper-class="my-autocomplete"
                            placeholder="Please input"
                            @select="handleSelect"
                        >
                            <template #suffix>
                                <el-icon class="el-input__icon" @click="handleIconClick">
                                    <Search />
                                </el-icon>
                            </template>
                            <template #default="{ item }">
                                <div class="value">{{ item.value }}</div>
                                <span class="link">{{ item.link }}</span>
                            </template>
                        </el-autocomplete></el-menu-item
                    >
                    <el-menu-item>
                        <el-badge :value="200" :max="99" class="item">
                            <el-icon><Goods /></el-icon>
                        </el-badge>
                    </el-menu-item>
                </el-menu>
            </el-col>
        </el-row>
    </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import img from "@/assets/images/rabbitMallLogo.png";

const state = ref("");
const links = ref([]);

const querySearch = (queryString, cb) => {
    const results = queryString ? links.value.filter(createFilter(queryString)) : links.value;
    // call callback function to return suggestion objects
    cb(results);
};
const createFilter = (queryString) => {
    return (restaurant) => {
        return restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0;
    };
};
const loadAll = () => {
    return [
        { value: "vue", link: "https://github.com/vuejs/vue" },
        { value: "element", link: "https://github.com/ElemeFE/element" },
        { value: "cooking", link: "https://github.com/ElemeFE/cooking" },
        { value: "mint-ui", link: "https://github.com/ElemeFE/mint-ui" },
        { value: "vuex", link: "https://github.com/vuejs/vuex" },
        { value: "vue-router", link: "https://github.com/vuejs/vue-router" },
        { value: "babel", link: "https://github.com/babel/babel" }
    ];
};
const handleSelect = (item) => {
    console.log(item);
};

const handleIconClick = (ev) => {
    console.log(ev);
};

onMounted(() => {
    links.value = loadAll();
});
</script>

<style lang="scss" scoped>
.el-row {
    margin-bottom: 20px;
}
.el-row:last-child {
    margin-bottom: 0;
}
.el-col {
    border-radius: 4px;
}

.grid-content {
    border-radius: 4px;
    min-height: 36px;
}

.my-autocomplete li {
    line-height: normal;
    padding: 7px;
}
.my-autocomplete li .name {
    text-overflow: ellipsis;
    overflow: hidden;
}
.my-autocomplete li .addr {
    font-size: 12px;
    color: #b4b4b4;
}
.my-autocomplete li .highlighted .addr {
    color: #ddd;
}

.el-menu-item {
    .el-badge__content.is-fixed {
        .el-badge__content {
            background-color: var(--el-badge-bg-color);
            border-radius: var(--el-badge-radius);
            color: var(--el-color-white);
            display: inline-flex;
            justify-content: center;
            align-items: center;
            font-size: var(--el-badge-font-size);
            height: var(--el-badge-size);
            padding: 0 var(--el-badge-padding);
            white-space: nowrap;
            border: none !important;
        }
    }
}
</style>
