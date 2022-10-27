# Button 按钮

常用的操作按钮。

## 基础用法

基础的按钮用法。

:::demo 使用`type`、`plain`、`round`属性来定义 Button 的样式。

```vue
<template>
  <div class="py-2">
    <s-button>默认按钮</s-button>
    <s-button type="primary">主要按钮</s-button>
    <s-button type="success">成功按钮</s-button>
    <s-button type="info">信息按钮</s-button>
    <s-button type="warning">警告按钮</s-button>
    <s-button type="danger">危险按钮</s-button>
  </div>
  <div class="py-2">
    <s-button plain>朴素按钮</s-button>
    <s-button plain type="primary">主要按钮</s-button>
    <s-button plain type="success">成功按钮</s-button>
    <s-button plain type="info">信息按钮</s-button>
    <s-button plain type="warning">警告按钮</s-button>
    <s-button plain type="danger">危险按钮</s-button>
  </div>
  <div class="py-2">
    <s-button round plain>圆角按钮</s-button>
    <s-button round plain type="primary">主要按钮</s-button>
    <s-button round plain type="success">成功按钮</s-button>
    <s-button round plain type="info">信息按钮</s-button>
    <s-button round plain type="warning">警告按钮</s-button>
    <s-button round plain type="danger">危险按钮</s-button>
  </div>
</template>
```

:::

## 按钮尺寸

Button 组件提供除三种尺寸，可以在不同场景下选择合适的按钮尺寸。

:::demo 使用`small`、`medium`、`large`来设置`size`属性。

```vue
<template>
  <div class="py-2">
    <s-button>标准按钮</s-button>
    <s-button size="medium">中按钮</s-button>
    <s-button size="small">小按钮</s-button>
    <s-button size="mini">超小按钮</s-button>
  </div>
</template>
```

:::

## 图标按钮

带图标的按钮可增强辨识度（有文字）或节省空间（无文字）。

:::demo 设置 icon 属性即可。

```vue
<template>
  <div class="py-2">
    <s-button icon="search">搜索</s-button>
    <s-button icon="edit">编辑</s-button>
    <s-button icon="check">检查</s-button>
    <s-button icon="message"></s-button>
    <s-button icon="delete"></s-button>
    <s-button icon="add"></s-button>
    <s-button icon="share"></s-button>
  </div>
</template>
```

:::
