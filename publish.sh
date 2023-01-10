npm config get registry # 检查仓库镜像库
npm config set registry=https://registry.npmjs.org # 切换到npm官方镜像
echo "请进行 npm 登录操作："
npm login # 登录
echo "----------publishing----------"
npm publish # 发布
npm config set registry=https://registry.npm.taobao.org # 设置为淘宝镜像
echo "发布完成"
exit