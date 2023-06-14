# MarkDown 

## 特点
1. 提供了常用操作便利的快捷键
2. 支持目录
3. 一边书写一边预览(Ctrl + Shift + V or Ctrl + K V)
4. 可轻松转换为HTML文件和PDF文件
5. 优化了List editing的编辑
6. 可格式化table (Alt + Shift + F) 以及Task list (use Alt + C to check/uncheck a list item)
7. 支持特殊数学符号渲染


## 常用快捷键
1. Key    Command
2. Ctrl + B    粗体
3. Ctrl + I    斜体
4. Alt + S    删除线
5. Ctrl + Shift + ]    标题(up level)
6. Ctrl + Shift + [    标题(down level)
7. Ctrl + M    Toggle math environment
8. Alt + C    Check/Uncheck task list item


# RabbitMall Project Note

+ Element 替换主题
+ axios 基础配置
  1. 接口基地址
  2. 接口超时时间
  3. 请求拦截器
  4. 相应拦截器

+ 静态资源引入
+ scss文件自动导入
  1. 新增var.scss文件，存入色值变量
  2. 通过vite.config.js配置自动导入文件 
  ```
  @use '@/styles/var.scss' as *;
  ``` 


