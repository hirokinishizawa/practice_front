<template>
    <div class="header">
        <div class="left">
            <div class="logo">
                <img src="" alt="">
            </div>
            <div class="search">
                <el-input placeholder="検索する"></el-input>
                <img src="" alt="">
            </div>
        </div>
        <div class="right">
            <div class="clickable" @click="toCreatePage">
                投稿する
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        toCreatePage() {
            this.$router.push({ name: 'create' })
        }
    }
}
</script>


<style lang="scss" scoped>
.header {
    height: 60px;
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #182A4B;
    .left {
        display: flex;
        .logo {
            height: 60px;
            width: 60px;
            margin-right: 16px;
        }
        .search {
            display: flex;
            align-items: center;
            width: 240px;
            opacity: 0.9;
        }
    }
    .right {
        display: flex;
        color: white;
        font-weight: bold;
        .clickable {
            padding: 16px;
            cursor: pointer;
            &:hover {
                background-color: #182A4B;
                opacity: 0.8;
            }
        }
    }
}
</style>
