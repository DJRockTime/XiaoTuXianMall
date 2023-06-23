<template>
    <div class="layout-nav">
        <div class="center">
            <el-row class="row-bg" justify="end">
                <el-breadcrumb separator="|">
                    <el-breadcrumb-item><a href="/">登录</a></el-breadcrumb-item>
                    <el-breadcrumb-item><a href="/">帮助中心</a></el-breadcrumb-item>
                    <el-breadcrumb-item><a href="/">关于我们</a></el-breadcrumb-item>
                </el-breadcrumb>
            </el-row>
        </div>
    </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.layout-nav {
    display: flex;
    height: 45px;
    background: #242424;
    flex-direction: column;
    justify-content: center;

    .el-breadcrumb__inner a {
        color: #fff;
        font-weight: normal !important;
        text-decoration: none;
    }
    .el-breadcrumb__inner a:hover {
        color: #27ba9b
    }
}
</style>
