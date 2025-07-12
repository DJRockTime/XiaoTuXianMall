<template>
  <div>
    <section>
      <!-- lv1 -->
      <el-select
        v-model="lv1Value"
        placeholder="Select lv1"
        clearable
        style="width: 240px"
        @clear="onClearLv1"
        @change="onLv1Change"
      >
        <el-option
          v-for="item in lv1Options"
          :key="item.lv1Code"
          :label="item.lv1Name"
          :value="item.lv1Code"
        />
      </el-select>

      <!-- lv2 -->
      <el-select
        v-model="lv2Value"
        placeholder="Select lv2"
        clearable
        style="width: 240px"
        @clear="onClearLv2"
        @change="onLv2Change"
      >
        <el-option
          v-for="item in lv2Options"
          :key="item.lv2Code"
          :label="item.lv2Name"
          :value="item.lv2Code"
        />
      </el-select>

      <!-- lv3 -->
      <el-select
        v-model="itemValue"
        placeholder="Select docItem"
        clearable
        style="width: 240px"
        @clear="onClearLv3"
        @change="onLv3Change"
      >
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
import { ref, watch } from "vue";

// 原始数据
// const newData = ref([
//   {
//     lv1Code: "001-1",
//     lv1Name: "商业",
//     lv2List: [
//       {
//         lv2Code: "002-1",
//         lv2Name: "零售",
//         docItems: [
//           { docItemCode: "001-1-1", docItemName: "商品A" },
//           { docItemCode: "001-1-2", docItemName: "商品B" },
//         ],
//       },
//       {
//         lv2Code: "002-2",
//         lv2Name: "批发",
//         docItems: [
//           { docItemCode: "001-2-1", docItemName: "大宗商品" },
//           { docItemCode: "001-2-2", docItemName: "农产品" },
//         ],
//       },
//     ],
//   },
// ]);
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
        ],
      },
      {
        lv2Code: "002-2",
        lv2Name: "批发",
        docItems: [
          { docItemCode: "001-2-1", docItemName: "大宗商品" },
          { docItemCode: "001-2-2", docItemName: "农产品" },
        ],
      },
    ],
  },
  {
    lv1Code: "001-2",
    lv1Name: "制造业",
    lv2List: [
      {
        lv2Code: "003-1",
        lv2Name: "机械制造",
        docItems: [
          { docItemCode: "002-1-1", docItemName: "机床" },
          { docItemCode: "002-1-2", docItemName: "液压设备" },
        ],
      },
      {
        lv2Code: "003-2",
        lv2Name: "电子制造",
        docItems: [
          { docItemCode: "002-2-1", docItemName: "电路板" },
          { docItemCode: "002-2-2", docItemName: "芯片" },
        ],
      },
    ],
  },
  {
    lv1Code: "001-3",
    lv1Name: "教育",
    lv2List: [
      {
        lv2Code: "004-1",
        lv2Name: "高等教育",
        docItems: [
          { docItemCode: "003-1-1", docItemName: "教材A" },
          { docItemCode: "003-1-2", docItemName: "教材B" },
        ],
      },
      {
        lv2Code: "004-2",
        lv2Name: "职业培训",
        docItems: [
          { docItemCode: "003-2-1", docItemName: "技能课程A" },
          { docItemCode: "003-2-2", docItemName: "技能课程B" },
        ],
      },
    ],
  },
  {
    lv1Code: "001-4",
    lv1Name: "医疗",
    lv2List: [
      {
        lv2Code: "005-1",
        lv2Name: "医疗器械",
        docItems: [
          { docItemCode: "004-1-1", docItemName: "呼吸机" },
          { docItemCode: "004-1-2", docItemName: "监护仪" },
        ],
      },
      {
        lv2Code: "005-2",
        lv2Name: "药品销售",
        docItems: [
          { docItemCode: "004-2-1", docItemName: "感冒药" },
          { docItemCode: "004-2-2", docItemName: "抗生素" },
        ],
      },
    ],
  },
  {
    lv1Code: "001-5",
    lv1Name: "金融",
    lv2List: [
      {
        lv2Code: "006-1",
        lv2Name: "银行业务",
        docItems: [
          { docItemCode: "005-1-1", docItemName: "个人贷款" },
          { docItemCode: "005-1-2", docItemName: "企业融资" },
        ],
      },
      {
        lv2Code: "006-2",
        lv2Name: "保险服务",
        docItems: [
          { docItemCode: "005-2-1", docItemName: "车险" },
          { docItemCode: "005-2-2", docItemName: "健康险" },
        ],
      },
    ],
  },
]);

// 响应式变量
const lv1Value = ref("");
const lv2Value = ref("");
const itemValue = ref("");

const lv1Options = ref<any[]>([]);
const lv2Options = ref<any[]>([]);
const lv3ItemOptions = ref<any[]>([]);

// docItemCode -> lv2Code, lv1Code 映射
const docItemMap = ref(new Map());
const lv2Map = ref(new Map());

const isLv1Restricted = ref(false)
const isLv2Restricted = ref(false)
const isLv3Restricted = ref(false)

/** 初始化处理 **/
// 初始化选项，不设置默认选中项
function initOptions() {
  lv1Options.value = newData.value.map((lv1) => ({
    lv1Code: lv1.lv1Code,
    lv1Name: lv1.lv1Name,
  }));

  const lv2Temp: any[] = [];
  const lv3Temp: any[] = [];

  lv2Map.value.clear();
  docItemMap.value.clear();

  newData.value.forEach((lv1) => {
    lv1.lv2List.forEach((lv2) => {
      lv2Map.value.set(lv2.lv2Code, {
        ...lv2,
        lv1Code: lv1.lv1Code,
      });
      lv2Temp.push({
        lv2Code: lv2.lv2Code,
        lv2Name: lv2.lv2Name,
      });

      lv2.docItems?.forEach((doc) => {
        docItemMap.value.set(doc.docItemCode, {
          ...doc,
          lv2Code: lv2.lv2Code,
          lv1Code: lv1.lv1Code,
        });
        lv3Temp.push({
          docItemCode: doc.docItemCode,
          docItemName: doc.docItemName,
        });
      });
    });
  });

  lv2Options.value = lv2Temp;
  lv3ItemOptions.value = lv3Temp;
}

/** 联动处理 **/
function onLv1Change() {
  lv2Value.value = "";
  itemValue.value = "";
  isLv1Restricted.value = true;

  // 限定 lv2Options
  const selected = newData.value.find((l1) => l1.lv1Code === lv1Value.value);
  lv2Options.value = selected?.lv2List.map(l2 => ({
    lv2Code: l2.lv2Code,
    lv2Name: l2.lv2Name
  })) || [];

  // 限定 lv3Options
  const lv3Temp: any[] = [];
  selected?.lv2List.forEach(l2 => {
    l2.docItems?.forEach(doc => {
      lv3Temp.push({
        docItemCode: doc.docItemCode,
        docItemName: doc.docItemName
      });
    });
  });
  lv3ItemOptions.value = lv3Temp;
}


function onLv2Change() {
  itemValue.value = "";

  const mapVal = lv2Map.value.get(lv2Value.value);
  if (mapVal) {
    lv1Value.value = mapVal.lv1Code;

    // ✅ 限定 lv1 只显示对应的项
    lv1Options.value = [
      {
        lv1Code: mapVal.lv1Code,
        lv1Name:
          newData.value.find((l1) => l1.lv1Code === mapVal.lv1Code)?.lv1Name ||
          "",
      },
    ];

    // ✅ 限定 lv2Options 为当前这个
    lv2Options.value = [
      {
        lv2Code: mapVal.lv2Code,
        lv2Name: mapVal.lv2Name,
      },
    ];

    // ✅ 更新 lv3Options
    lv3ItemOptions.value =
      mapVal.docItems?.map((doc) => ({
        docItemCode: doc.docItemCode,
        docItemName: doc.docItemName,
      })) || [];
  }
}

function onLv3Change() {
  const mapVal = docItemMap.value.get(itemValue.value);
  if (mapVal) {
    lv2Value.value = mapVal.lv2Code;
    lv1Value.value = mapVal.lv1Code;

    // ✅ 限定 lv2 只显示所属 lv2
    lv2Options.value = [
      {
        lv2Code: mapVal.lv2Code,
        lv2Name: lv2Map.value.get(mapVal.lv2Code)?.lv2Name || "",
      },
    ];

    // ✅ 限定 lv1 只显示所属 lv1
    lv1Options.value = [
      {
        lv1Code: mapVal.lv1Code,
        lv1Name:
          newData.value.find((l1) => l1.lv1Code === mapVal.lv1Code)?.lv1Name ||
          "",
      },
    ];

    // ✅ 限定 lv3 为该 lv2 下所有项
    const lv2DocItems = lv2Map.value.get(mapVal.lv2Code)?.docItems || [];
    lv3ItemOptions.value = lv2DocItems.map((doc) => ({
      docItemCode: doc.docItemCode,
      docItemName: doc.docItemName,
    }));
  }
}

function onClearLv1() {
  lv1Value.value = "";
  lv2Value.value = "";
  itemValue.value = "";

  isLv1Restricted.value = false;
  isLv2Restricted.value = false;
  isLv3Restricted.value = false;

  initOptions(); // 全量
}

function onClearLv2() {
  lv2Value.value = "";
  itemValue.value = "";

  isLv2Restricted.value = false;

  if (lv1Value.value && isLv1Restricted.value) {
    const selected = newData.value.find(l1 => l1.lv1Code === lv1Value.value);
    lv2Options.value = selected?.lv2List.map(l2 => ({
      lv2Code: l2.lv2Code,
      lv2Name: l2.lv2Name
    })) || [];

    const lv3Temp: any[] = [];
    selected?.lv2List.forEach(l2 => {
      l2.docItems?.forEach(doc => {
        lv3Temp.push({
          docItemCode: doc.docItemCode,
          docItemName: doc.docItemName
        });
      });
    });
    lv3ItemOptions.value = lv3Temp;
  } else {
    // 全量恢复
    lv2Options.value = Array.from(lv2Map.value.values()).map(item => ({
      lv2Code: item.lv2Code,
      lv2Name: item.lv2Name
    }));
    lv3ItemOptions.value = Array.from(docItemMap.value.values()).map(doc => ({
      docItemCode: doc.docItemCode,
      docItemName: doc.docItemName
    }));
  }
}


function onClearLv3() {
  itemValue.value = "";

  // 优先按 lv2 限定 lv3
  if (lv2Value.value) {
    const docItems = lv2Map.value.get(lv2Value.value)?.docItems || [];
    lv3ItemOptions.value = docItems.map((doc) => ({
      docItemCode: doc.docItemCode,
      docItemName: doc.docItemName,
    }));
  } else if (lv1Value.value) {
    // fallback: 当前 lv1 下所有 docItems
    const lv3Filtered: any[] = [];
    newData.value.forEach((l1) => {
      if (l1.lv1Code === lv1Value.value) {
        l1.lv2List.forEach((l2) => {
          l2.docItems?.forEach((doc) => {
            lv3Filtered.push({
              docItemCode: doc.docItemCode,
              docItemName: doc.docItemName,
            });
          });
        });
      }
    });
    lv3ItemOptions.value = lv3Filtered;
  } else {
    // fallback: 全量
    lv3ItemOptions.value = Array.from(docItemMap.value.values()).map(
      (item) => ({
        docItemCode: item.docItemCode,
        docItemName: item.docItemName,
      })
    );
  }
}

// 初始化数据
initOptions();
</script>
