#!/bin/bash

# 配置变量
APP_NAME="hu-be"
CONFIG_FILE="ecosystem.config.js"
ENV="production"  # 可以是 'production' 或 'development'

# 检查应用是否已经由 PM2 管理
APP_STATUS=$(pm2 list | grep $APP_NAME)

# 如果应用已经存在，则重启应用并更新环境变量
if [ -n "$APP_STATUS" ]; then
  echo "应用已存在，正在重启 $APP_NAME..."
  pm2 restart $CONFIG_FILE --env $ENV
else
  # 否则，启动新的应用实例并设置环境变量
  echo "应用不存在，正在启动 $APP_NAME..."
  pm2 start $CONFIG_FILE --env $ENV
fi

# 显示 PM2 应用列表
pm2 list
