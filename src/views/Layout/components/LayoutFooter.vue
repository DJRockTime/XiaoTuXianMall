<template>
    <div>
        <el-row>
            <el-col :span="6">1</el-col>
            <el-col :span="6">2</el-col>
            <el-col :span="6">3</el-col>
            <el-col :span="6">4</el-col>
        </el-row>
        <el-row>
            <el-row>
                <el-col>Good Price</el-col>
                <el-col>Faster Deliver</el-col>
                <el-col>High Quality</el-col>
            </el-row>
            <el-divider>1</el-divider>
            <el-row>
                <el-row justify="center">
                    <el-breadcrumb separator="|">
                        <el-breadcrumb-item :to="{ path: '/' }">about us</el-breadcrumb-item>
                        <el-breadcrumb-item><a href="/">help-center</a></el-breadcrumb-item>
                        <el-breadcrumb-item><a href="/">Customer Service</a></el-breadcrumb-item>
                        <el-breadcrumb-item
                            ><a href="/">Delivery and Acceptance</a></el-breadcrumb-item
                        >
                        <el-breadcrumb-item
                            ><a href="/">Business Cooperation</a></el-breadcrumb-item
                        >
                        <el-breadcrumb-item
                            ><a href="/">Search Recommendations</a></el-breadcrumb-item
                        >
                        <el-breadcrumb-item><a href="/">Partner Links</a></el-breadcrumb-item>
                    </el-breadcrumb>
                </el-row>
                <el-row justify="center"> CopyRight @ RabbitMall </el-row>
            </el-row>
        </el-row>
    </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
