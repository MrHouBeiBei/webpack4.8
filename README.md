

#package.json
webpack script中 model需要在配置文件中制定才有效果

##nodemon
# **设置修改代码后服务自动重启**
```
npm install nodemon --D 或   npm install -g nodemon
```
restartable-设置重启模式 
ignore-设置忽略文件 
verbose-设置日志输出模式，true 详细模式 
execMap-设置运行服务的后缀名与对应的命令 
{ 
“js”: “node –harmony” 
} 
表示使用 nodemon 代替 node 
watch-监听哪些文件的变化，当变化的时候自动重启 
ext-监控指定的后缀文件名


[link]()

```
```