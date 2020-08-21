<!--表格搜索栏 - 搜索项容器-->
<template>
    <div class="search-list-item"
         :style="style">
        <span class="label">{{label}}</span>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'SearchListItem',
    // components: {},
    // directives: {},
    // filters: {},
    // model: {},
    props: {
        label: {
            type: String,
            default: ''
        },
        // eslint-disable-next-line vue/require-default-prop
        width: {
            type: [Number, String]
        },
        minWidth: {
            type: [Number, String],
            default: 80
        }
    },
    // data() {},
    computed: {
        parentProps() {
            return this.$parent.$options.componentName === 'SearchWrapper' ? this.$parent.$props : {};
        },
        gap() {
            if (this.parentProps && this.parentProps['gap'] === 0) {
                return 0;
            }
            return this.parentProps && this.parentProps['gap'] || this.parentProps && !this.parentProps['gap'] || 20;
        },
        space() {
            if (this.parentProps && this.parentProps['space'] === 0) {
                return 0;
            }
            return this.parentProps && this.parentProps['space'] || 6;
        },
        realWidth() {
            let realWidth = '';
            if (this.width) {
                realWidth = this.width;
            }
            if (Number(this.minWidth) && Number(this.width) < Number(this.minWidth)) {
                realWidth = Number(this.minWidth);
            }
            return realWidth;
        },
        style() {
            let style = {};
            if (this.realWidth) {
                style = {
                    ...style,
                    width: `${this.realWidth}px`
                };
            }
            style = {
                ...style,
                marginRight: `${this.gap}px`,
                marginTop: `${this.space}px`,
                marginBottom: `${this.space}px`
            };
            return style;
        }
    }
    // watch: {},
    // mounted() {}
    // created() {},
    // activated() {},
    // beforeDestroy() {},
    // destroyed() {},
    // methods: {},
};
</script>

<style lang="less"
       scoped>
.search-list-item {
    display: inline-flex;
    overflow: hidden;
    align-items: center;
    line-height: 30px;

    // 设计要求最低宽度120px
    /deep/ input {
        min-width: 120px;
    }

    /deep/ .el-input__count-inner {
        white-space: initial;
    }

    .label {
        margin-right: 4px;
        white-space: nowrap;
        color: rgba(34, 34, 34, 1);
    }
}
</style>
