<template>
  <div>
    <section>
      <!-- 1 -->
      <el-select v-model="lv1Value" placeholder="Select" style="width: 240px">
        <el-option
          v-for="item in lv1Options"
          :key="item.lv1Code"
          :label="item.lv1Name"
          :value="item.lv1Code"
        />
      </el-select>

      <!-- 2 -->
      <el-select v-model="lv2Value" placeholder="Select" style="width: 240px">
        <el-option
          v-for="item in lv2Options"
          :key="item.lv2Code"
          :label="item.lv2Name"
          :value="item.lv2Code"
        />
      </el-select>

      <!-- 3 -->
      <el-select v-model="itemValue" placeholder="Select" style="width: 240px">
        <el-option
          v-for="item in lv3ItemOptions"
          :key="item.docItemCode"
          :label="item.docItemName"
          :value="item.docItemCode"
        />
      </el-select>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const lv1Value = ref("");
const lv2Value = ref("");
const itemValue = ref("");

const lv1Options = ref([]);
const lv2Options = ref([]);
const lv3ItemOptions = ref([]);

const newData = ref([
  {
    lv1Code: "001-1",
    lv1Name: "商业",
    lv2List: [
      {
        lv2Code: "002-1",
        lv2Name: "零售",
        docItems: [
          { docItemCode: "001-1-1", docItemName: "商品A" },
          { docItemCode: "001-1-2", docItemName: "商品B" },
          { docItemCode: "001-1-3", docItemName: "商品C" },
        ],
      },
      {
        lv2Code: "001-2",
        lv2Name: "批发",
        lv3List: [
          { lv3Code: "001-2-1", lv3Name: "大宗商品" },
          { lv3Code: "001-2-2", lv3Name: "农产品" },
        ],
      },
    ],
  },
]);
console.log("🚀 ~ newData:", newData);
</script>

<style scoped></style>

我现在给你这个模板，根据当前的模板数据newData，完成以下功能：

首先，对数据处理，一进来时将数据转换为适合下拉选择的格式。
必须满足 三个下拉框都有值可选
 其次，实现下拉选择的联动功能：

1. 当选择第一级选项时，更新第二级选项。 
2. 当选择第二级选项时，更新第三级选项。
3.  这是线性级联效果

4，如果直接选择第三项，反推出第一项和第二项，将选项带出来
5， 如果直接选择第二项， 反推出第一项，将选项带出来

完成合理的联动效果，请帮我实现，然后我取验证




