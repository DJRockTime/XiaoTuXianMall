<template>
    <div class="layout-header">
        <el-row class="row-bg" justify="end">
            <el-breadcrumb separator="|">
                <el-breadcrumb-item :to="{ path: '/' }">Allen</el-breadcrumb-item>
                <el-breadcrumb-item><a href="/">Logout</a></el-breadcrumb-item>
                <el-breadcrumb-item><a href="/">My Orders</a></el-breadcrumb-item>
                <el-breadcrumb-item><a href="/">Member Centers</a></el-breadcrumb-item>
            </el-breadcrumb>
        </el-row>
        <el-row>
            <el-col>
                <el-menu
                    :default-active="activeIndex"
                    class="el-menu-demo"
                    mode="horizontal"
                    :ellipsis="false"
                    @select="handleSelect"
                >
                    <el-menu-item index="0">LOGO</el-menu-item>
                    <div class="flex-grow" />
                    <el-menu-item index="1">Home</el-menu-item>
                    <el-menu-item index="1">Home Decor</el-menu-item>
                    <el-menu-item index="1">Food</el-menu-item>
                    <el-menu-item index="1">Clothing</el-menu-item>
                </el-menu>
            </el-col>
            <el-col></el-col>
        </el-row>
    </div>
</template>

<script setup></script>

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
</style>
