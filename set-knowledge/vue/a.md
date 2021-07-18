

## 父组件调用子组件
1. 加载渲染过程
父beforeCreate->父created->父beforeMount->子beforeCreate->子created->子beforeMount->子mounted->父mounted
2. 子组件更新过程
父beforeUpdate->子beforeUpdate->子updated->父updated
3. 父组件更新过程
父beforeUpdate->父updated
4. 销毁过程
父beforeDestroy->子beforeDestroy->子destroyed->父destroyed

在父组件的`created`生命周期中，可能获取不到子组件，可以使用：
```js
this.$next(()=>{
    ...
})
```