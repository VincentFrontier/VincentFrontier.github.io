hexo.extend.filter.register('before_post_render', function(data) {
  // 打印原始内容，调试用
  console.log('Original content:', data.content);
  // 替换已经被转换为 {% asset_img %} 的标签，转回标准 Markdown 格式
  data.content = data.content.replace(/![(.*?)]((.*?))/g, '![$2]($1)');
  // 打印修改后的内容，调试用
  console.log('Modified content:', data.content);
  // 返回修改后的数据
  return data;
}, 1);  // 设置优先级为 1，尽早执行此钩子；source: https://bingbytebard.github.io/2024/11/08/Hexo中插入图片的方法/