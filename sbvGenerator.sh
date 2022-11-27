#!/bin/bash
echo '*************************开始创建view文件*************************'
# 0.创建各自的sbvadmin,目前写死了sbvadmin
if [ ! -d "src/views/sbvadmin" ];then
    mkdir src/views/sbvadmin
fi
if [ ! -d "src/api/sbvadmin" ];then
    mkdir src/api/sbvadmin
fi
if [ ! -d "src/api/sbvadmin/model" ];then
    mkdir src/api/sbvadmin/model
fi

######################
## 以下废弃，现在使用后端的低代码生成
##
######################
# # 1.创建view
# input=${1%.*}
# inputUpper=$(echo ${input:0:1} | tr '[a-z]' '[A-Z]')${input:1}
# # 根据输入复制items文件夹中的内容，并重命名
# cp -r ./view ../src/views/sbvadmin
# mv ../src/views/sbvadmin/view ../src/views/sbvadmin/$input
# mv ../src/views/sbvadmin/$input/itemData.data.ts ../src/views/sbvadmin/$input/$input.data.ts 
# mv ../src/views/sbvadmin/$input/ItemModal.vue ../src/views/sbvadmin/$input/${inputUpper}"Modal.vue"
# sed -i '' "s/itemApi/$input/g" ../src/views/sbvadmin/$input/index.vue
# sed -i '' "s/itemData/$input/g" ../src/views/sbvadmin/$input/index.vue
# sed -i '' "s/Item/${inputUpper}/g" ../src/views/sbvadmin/$input/index.vue
# sed -i '' "s/ItemManagement/${inputUpper}"Management"/g" ../src/views/sbvadmin/$input/index.vue
# sed -i '' "s/itemApi/$input/g" ../src/views/sbvadmin/$input/${inputUpper}"Modal.vue"
# sed -i '' "s/itemData/$input/g" ../src/views/sbvadmin/$input/${inputUpper}"Modal.vue"
# sed -i '' "s/Item/${inputUpper}/g" ../src/views/sbvadmin/$input/${inputUpper}"Modal.vue"

# # # 2.创建api和model
# cp  ./api/itemApi.ts ../src/api/sbvadmin/$input.ts
# cp  ./api/model/itemModel.ts ../src/api/sbvadmin/model/${input}"Model.ts"
# sed -i '' "s/item/$input/g" ../src/api/sbvadmin/$input.ts
# sed -i '' "s/Item/$inputUpper/g" ../src/api/sbvadmin/$input.ts
# sed -i '' "s/Item/$inputUpper/g" ../src/api/sbvadmin/model/${input}"Model.ts"

