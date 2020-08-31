<!--自适应表格布局-->
<template>
    <div ref="wrapper"
         class="adaptive-table">
        <slot></slot>
        <slot name="pager"></slot>
    </div>
</template>

<script>
import _debounce from 'lodash/debounce';

export default {
    name: 'AdaptiveTable',
    // components: {},
    // directives: {},
    // filters: {},
    // model: {},
    props: {
        pageSize: {
            type: Number,
            default: 1
        },
        // 表头高度
        headColHeight: {
            type: Number,
            default: 48
        },
        // 表格内容一行高度
        bodyColHeight: {
            type: Number,
            default: 48
        },
        // 分页器所占空间高度（此高度需要包含margin值）
        pagerHeight: {
            type: Number,
            default: 54
        }
    },
    // data() {},
    computed: {
        _calcPageSize() {
            return _debounce(this.calcPageSize, 300);
        }
    },
    // watch: {},
    mounted() {
        this.calcPageSize();
        const resizeObserver = new ResizeObserver(() => {
            this._calcPageSize();
        });
        resizeObserver.observe(this.$refs.wrapper);
        this.$once('hook:beforeDestroy', () => {
            resizeObserver.unobserve(this.$refs.wrapper);
        });
    },
    // created() {},
    // activated() {},
    // beforeDestroy() {},
    // destroyed() {},
    methods: {
        calcPageSize() {
            let wrapperHeight = this.$refs.wrapper.clientHeight;
            let pageSize = Math.floor((wrapperHeight - this.pagerHeight - this.headColHeight) / this.bodyColHeight);
            this.$emit('update:pageSize', pageSize);
        }
    }
};
</script>

<style lang="less"
       scoped>
.adaptive-table {
    width: 100%;
    height: 100%;
}
</style>
