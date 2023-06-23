<template>
    <div>
        <el-row class="center footer-top">
            <el-col :span="6"
                >客户服务
                <div class="title"></div>
                <div class="content"></div>
            </el-col>
            <el-col :span="6">关注我们</el-col>
            <el-col :span="6">下载APP</el-col>
            <el-col :span="6">服务热线</el-col>
        </el-row>
        <el-row class="footer-bottom">
            <el-row class="center slogan">
                <el-col :span="8">
                    <el-container>
                        <el-aside width="200px">
                            <el-image style="width: 80px; height: 80px" :src="icon01" :fit="fit" />
                        </el-aside>
                        <el-main>价格亲民</el-main>
                    </el-container>
                </el-col>
                <el-col :span="8">
                    <el-container>
                        <el-aside width="200px">
                            <el-image style="width: 80px; height: 80px" :src="icon02" :fit="fit" />
                        </el-aside>
                        <el-main>物流快捷</el-main>
                    </el-container>
                </el-col>
                <el-col :span="8">
                    <el-container>
                        <el-aside width="200px">
                            <el-image style="width: 80px; height: 80px" :src="icon03" :fit="fit" />
                        </el-aside>
                        <el-main>品质新鲜</el-main>
                    </el-container>
                </el-col>

                <!-- 
                <el-col :span="8">物流快捷</el-col>
                <el-col :span="8">品质新鲜</el-col> -->
            </el-row>
            <el-divider class="divider"></el-divider>
            <el-row class="friend-links">
                <el-row justify="center" class="center">
                    <el-breadcrumb separator="|">
                        <el-breadcrumb-item><a href="/">关于我们</a></el-breadcrumb-item>
                        <el-breadcrumb-item><a href="/">帮助中心</a></el-breadcrumb-item>
                        <el-breadcrumb-item><a href="/">售后服务</a></el-breadcrumb-item>
                        <el-breadcrumb-item><a href="/">配送验收</a></el-breadcrumb-item>
                        <el-breadcrumb-item><a href="/">商务合作</a></el-breadcrumb-item>
                        <el-breadcrumb-item><a href="/">搜索推荐</a></el-breadcrumb-item>
                        <el-breadcrumb-item><a href="/">友情链接</a></el-breadcrumb-item>
                    </el-breadcrumb>
                </el-row>
                <el-row class="center" justify="center"> CopyRight @ RabbitMall </el-row>
            </el-row>
        </el-row>
    </div>
</template>

<script setup>
import icon01 from "@/assets/images/1.png";
import icon02 from "@/assets/images/2.png";
import icon03 from "@/assets/images/3.png";
import icon04 from "@/assets/images/4.png";
import icon05 from "@/assets/images/5.png";
</script>

<style lang="scss" scoped>
.footer-top {
    height: 200px;
}
.footer-bottom {
    color: #7c7c7c;
    // height: 350px;
    background: #29292a;

    .slogan {
        height: 200px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
    }

    .el-main {
        font-size: 22px;
        font-weight: bold;
    }

    .friend-links {
        height: 100px;
    }

    ::v-deep .el-divider--horizontal {
        display: block;
        height: 1px;
        width: 100%;
        margin: 24px 0;
        border-top: 1px solid rgb(70, 70, 70);
    }

    ::v-deep .el-breadcrumb__inner a {
        font-weight: bold;
        text-decoration: none;
        transition: var(--el-transition-color);
        color: #858585;
        font-weight: normal;
    }

    ::v-deep .el-main {
        --el-main-padding: 20px;
        display: flex;
        align-items: center;
        flex: 1;
        flex-basis: auto;
        overflow: auto;
        box-sizing: border-box;
        padding: var(--el-main-padding);
    }
}
</style>
