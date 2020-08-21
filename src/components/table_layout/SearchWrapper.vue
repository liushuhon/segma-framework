<!--表格搜索栏 - 布局容器-->
<template>
    <div class="search-wrapper">
        <div class="search-list">
            <slot></slot>
        </div>
        <div class="search-btn">
            <slot name="button"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SearchWrapper',
    // componentName务必需要,子组件用来获取参数的依据
    componentName: 'SearchWrapper',
    // components: {},
    // directives: {},
    // filters: {},
    // model: {},
    props: {
        gap: {
            type: Number,
            default: 20
        },
        space: {
            type: Number,
            default: 6
        }
    }
    // data() {},
    // computed: {},
    // watch: {},
    // mounted() {},
    // created() {},
    // activated() {},
    // beforeDestroy() {},
    // destroyed() {},
    // methods: {},
};
</script>

<style lang="less"
       scoped>
.search-wrapper {
    display: flex;
    width: 100%;

    .search-list {
        flex: 1;
        width: 100%;
        white-space: pre-wrap;
    }

    .search-btn {
        flex: 0;
        display: flex;
        align-items: center;
    }
}
</style>
