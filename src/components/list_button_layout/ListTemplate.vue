<!--ListTemplate.vue-->
<template>
    <div class="list-template-wrapper">
        <div class="left">
            <create-button class=""
                           :commands="commands">
                <template slot="title">
                    <i class="iconfont se-icon-add"></i>添加监控
                </template>
            </create-button>
            <div class="list-wrapper">list-area</div>
        </div>
        <div class="right">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import LeftMenu from '../base_layout/LeftMenu';
import CreateButton from './CreateButton';

export default {
    name: 'ListTemplate',
    components: { CreateButton, LeftMenu },
    computed: {
        commands() {
            return [
                {
                    text: '选项A',
                    icon: 'se-icon-f-autolocation',
                    handler: () => {
                        // todo
                    }
                },
                {
                    text: '选项B',
                    icon: 'se-icon-analyse',
                    handler: () => {
                        // todo
                    }
                }
            ];
        }
    },
    // watch: {},
    // mounted() {},
    // created() {},
    // activated() {},
    // beforeDestroy() {},
    // destroyed() {},
    methods: {}
};
</script>

<style lang="less"
       scoped>
.list-template-wrapper {
    width: 100%;
    height: 100%;

    .right {
        margin-left: 220px;
        height: 100%;

        .no-tab {
            display: flex;
            margin-top: 55px;
            user-select: none;
            flex-direction: column;
            align-items: center;

            .text {
                margin-top: 6px;
                font-size: 14px;
                font-weight: 400;
                line-height: 17px;
                color: rgb(130, 137, 146);
            }
        }
    }

    .left {
        float: left;
        overflow: hidden;
        width: 220px;
        height: 100%;
        box-shadow: 0 4px 12px rgba(82, 92, 108, 0.16);

        .list-wrapper {
            margin-top: 20px;
            width: 100%;
            height: calc(100% - 70px);
            overflow-y: auto;
            overflow-x: hidden;
            box-sizing: border-box;
        }
    }
}
</style>
