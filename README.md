# 用原生 JS 实现自由拖拽一个 div 

## 下载运行
+ clone 或者下载压缩包之后
+ 使用 http-server -c-1 命令行运行

## 该项目相关知识点

### onmousedown onmousemove onmouseup 三个事件
+ [onmousedown](https://developer.mozilla.org/zh-CN/docs/Web/API/GlobalEventHandlers/onmousedown)：在当前元素上鼠标按下瞬间会触发mousedown事件；
+ [onmousemove](https://developer.mozilla.org/zh-CN/docs/Web/API/GlobalEventHandlers/onmousemove)：当用户在当前元素上移动鼠标时会触发mousemove事件；
+ [onmouseup](https://developer.mozilla.org/zh-CN/docs/Web/API/GlobalEventHandlers/onmouseup)：当用户在当前元素上放开鼠标某个按键时会触发mouseup事件;

### 如何将 body 变成和页面可视部分一样大

```css
body {
    box-sizing: border-box;
    height: 100vh;
    margin: 0;
}
```

### js 为一个元素添加类名的两种方式

+ 操作 classList 数组，如 `div.classList = ["demo"]`
+ 赋值 className ，`div.className = "demo"`


### body 元素是有默认 margin 的。

### JS 的 .style 只能拿到内联样式
