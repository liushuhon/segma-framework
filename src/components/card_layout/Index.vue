<!--自适应卡片-->
<template>
    <div class="adaptive-card">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'AdaptiveCard'
};
</script>

<style lang="less"
       scoped>
.adaptive-card {
    margin: 10px;
    min-width: 280px;
}

@media only screen and (min-width: 1740px) {
    .adaptive-card {
        width: calc((100% - 80px) / 5);

        &:nth-child(5n+1) {
            margin-left: 0;
        }

        &:nth-child(5n+5) {
            margin-right: 0;
        }
    }
}

@media only screen and (max-width: 1739px) and (min-width: 1440px) {
    .adaptive-card {
        width: calc((100% - 60px) / 4);

        &:nth-child(4n+1) {
            margin-left: 0;
        }

        &:nth-child(4n+4) {
            margin-right: 0;
        }
    }
}

@media only screen and (max-width: 1439px) and (min-width: 1200px) {
    .adaptive-card {
        width: calc((100% - 40px) / 3);

        &:nth-child(3n+1) {
            margin-left: 0;
        }

        &:nth-child(3n+3) {
            margin-right: 0;
        }
    }
}

@media only screen and (max-width: 1199px) and (min-width: 840px) {
    .adaptive-card {
        width: calc((100% - 20px) / 2);

        &:nth-child(2n+1) {
            margin-left: 0;
        }

        &:nth-child(2n+2) {
            margin-right: 0;
        }
    }
}

@media only screen and (max-width: 839px) {
    .adaptive-card {
        width: 100%;
    }
}
</style>
