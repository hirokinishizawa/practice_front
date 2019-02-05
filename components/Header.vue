<template>
    <div class="header">
        <div class="top">
            <div class="left">
                <div class="logo" @click="toHome">
                    <img src="" alt="">
                </div>
                <div class="search">
                    <el-input placeholder="検索する"/>
                    <img src="" alt="">
                </div>
            </div>
            <div class="right">
                <div class="clickable" @click="toCreatePage">
                    投稿する
                </div>
            </div>
        </div>
        <div class="bottom">
            <div class="category" v-for="(category, key) in categories" :key="key">
                {{ category.name }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            categories: [
                {
                    name: 'カテゴリー1'
                },
                {
                    name: 'カテゴリー2'
                },
                {
                    name: 'カテゴリー3'
                },
                {
                    name: 'カテゴリー4'
                },
            ]
        }
    },
    methods: {
        toCreatePage() {
            this.$router.push({ name: 'create' })
        },
        toHome() {
            this.$router.push({ name: 'home' })
        }
    }
}
</script>


<style lang="scss" scoped>
.header {
    height: 100px;
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    .top {
        height: 60px;
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
                cursor: pointer;
                opacity: 0.8;
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
    .bottom {
        height: 40px;
        border: 1px solid rgba(24, 42, 75, .3);
        display: flex;
        justify-content: flex-start;
        .category {
            padding: 0 10px;
            height: 100%;
            display: flex;
            align-items: center;
            cursor: pointer;
            &:hover {
                background-color: rgba(24, 42, 75, .1);
            }
        }
    }
}
</style>
