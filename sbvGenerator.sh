#!/bin/bash
echo '*************************创建项目文件夹*************************'
# 0.创建各自的项目文件夹,这里需要手动改成和后端一致的packageName
if [ ! -d "src/views/sbvadmin" ];then
    mkdir src/views/sbvadmin
fi
if [ ! -d "src/api/sbvadmin" ];then
    mkdir src/api/sbvadmin
fi
if [ ! -d "src/api/sbvadmin/model" ];then
    mkdir src/api/sbvadmin/model
fi
