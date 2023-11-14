<template>
    <div>
        <RenderButton />
        <SFCButton />
        <JSXButton />
    </div>
    <div>
        <s-button>默认按钮</s-button>
        <s-button type="primary">主要按钮</s-button>
        <s-button type="success">成功按钮</s-button>
        <s-button type="info">信息按钮</s-button>
        <s-button type="warning">警告按钮</s-button>
        <s-button type="danger">危险按钮</s-button>
    </div>
    <div>
        <s-button plain>朴素按钮</s-button>
        <s-button plain type="primary">主要按钮</s-button>
        <s-button plain type="success">成功按钮</s-button>
        <s-button plain type="info">信息按钮</s-button>
        <s-button plain type="warning">警告按钮</s-button>
        <s-button plain type="danger">危险按钮</s-button>
    </div>
    <div>
        <s-button round>圆角按钮</s-button>
        <s-button round type="primary">主要按钮</s-button>
        <s-button round type="success">成功按钮</s-button>
        <s-button round type="info">信息按钮</s-button>
        <s-button round type="warning">警告按钮</s-button>
        <s-button round type="danger">危险按钮</s-button>
    </div>
    <div>
        <s-button>按钮尺寸</s-button>
        <s-button size="medium">中按钮</s-button>
        <s-button size="small">小按钮</s-button>
        <s-button size="mini">超小按钮</s-button>
    </div>
    <div>
        <s-button icon="search">搜索</s-button>
        <s-button icon="edit">编辑</s-button>
        <s-button icon="check">检查</s-button>
        <s-button icon="message"></s-button>
        <s-button icon="delete"></s-button>
        <s-button icon="add"></s-button>
        <s-button icon="share"></s-button>
    </div>
</template>

<script lang="ts">
export default {
    name: 'App',
}
</script>
