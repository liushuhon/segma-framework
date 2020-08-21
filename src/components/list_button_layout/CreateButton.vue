<!-- 新建按钮，与侧边栏树形组件一起使用 -->
<template>
    <el-popover placement="bottom"
                trigger="click"
                popper-class="create-popover"
                :visible-arrow="false"
                :width="width">
        <div slot="reference"
             class="button-container">
            <el-button ref="button"
                       size="small"
                       type="primary">
                <slot name="title">
                    <i class="iconfont se-icon-add"></i>
                    新建
                </slot>
            </el-button>
        </div>
        <ul class="create-action-list">
            <li v-for="(item, index) in commands"
                :key="index"
                @click="item.handler">
                <span v-if="item.icon"
                      class="command-icon">
                    <i :class="['iconfont', `${item.icon}`]"></i>
                </span>
                {{item.text}}
            </li>
        </ul>
    </el-popover>
</template>
<script>
export default {
    name: 'CreateButton',
    props: {
        commands: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            width: 200
        };
    },
    mounted() {
        this.width = this.$refs.button.$el.offsetWidth;
    }
};
</script>
<style lang="less"
       scoped>
/deep/ .button-container {
    margin: 20px 12px 0 12px;

    .iconfont {
        padding-right: 5px;
    }

    .el-button {
        width: 100%;
    }
}

.create-action-list {
    li {
        display: flex;
        padding: 0 20px;
        font-size: 12px;
        cursor: pointer;
        align-items: center;

        &:hover {
            background-color: rgba(239, 239, 239, 1);
        }

        .command-icon {
            margin-right: 5px;
            font-size: 20px;

            .icon {
                margin-right: 12px;
            }
        }
    }
}
</style>
<style lang="less">
.create-popover {

    &.el-popover {
        padding: 10px 0;
        min-width: 0;
    }

    .create-action-list {
        li {
            line-height: 32px;

            &:hover {
                color: #5374c0;
                background-color: #f0f7ff;
            }
        }
    }
}
</style>
