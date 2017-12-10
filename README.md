## react脚手架

└─build：打包之后的文件

├─config：构建的配置文件

├─src：前端开发源码

│   ├─public：静态资源目录

│   ├─components：react组件

│   │   └─Hello: 公共组件

│   ├─index.html：入口html

│   └─app.js：应用的入口文件

├─.babelrc：babel配置文件

├─config.js：开发和生产环境配置

├─webpack.config.js：webpack配置

├─postcss.config.js：css3前缀配置

### 拉包
```
git clone https://github.com/deng565430/react-webpack.git

cd react-webpack

npm install
```

### 启动热更新
```
npm run server
```

### 打包
```
npm run build
```

### 打包前端代码并实施监控代码变化并打包
```
npm run dev
```

#### 后期将添加完成测试用例
