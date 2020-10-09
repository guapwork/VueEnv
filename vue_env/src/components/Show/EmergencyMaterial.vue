<template>
  <div class="emergencyMaterial">
    <div class="head">应急物资</div>
    <div class="body">
      <el-tree
        :data="data"
        :props="defaultProps"
        @node-click="handleNodeClick"
      ></el-tree>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [
        {
          label: "一楼",
          children: [
            {
              label: "二级 1-1",
              children: [
                {
                  label: "三级 1-1-1",
                },
              ],
            },
          ],
        },
        {
          label: "二楼",
          children: [
            {
              label: "二级 2-1",
              children: [
                {
                  label: "三级 2-1-1",
                },
              ],
            },
            {
              label: "二级 2-2",
              children: [
                {
                  label: "三级 2-2-1",
                },
              ],
            },
          ],
        },
        {
          label: "三楼",
          children: [
            {
              label: "301房间",
              children: [
                {
                  label: "三级 3-1-1",
                },
              ],
            },
            {
              label: "302房间",
              children: [
                {
                  label: "灭火器1号    灭火器",
                },
                {
                  label: "灭火器2号    灭火器",
                },
                {
                  label: "监控北3号    高空瞭望摄像头",
                },
              ],
            },
          ],
        },
      ],
      defaultProps: {
        children: "children",
        label: "label",
      },
    };
  },
  methods: {
    handleNodeClick(data) {
      console.log(data);
    },
  },
};
</script>

<style lang="scss">
.emergencyMaterial {
  width: 3340px;
  height: 1660px;
  background-color: #1b3c44;
  font-family: Microsoft YaHei;

  .head {
    width: 100%;
    height: 200px;
    color: #ffffff;
    font-size: 120px;
    text-align: center;
    font-weight: bold;
    border-bottom:5px solid #0e1f23;
    padding:20px;
    box-sizing: border-box;
  }
  .body {
    width: 100%;
    height: 1460px;
    overflow: auto;
    padding:20px;
    box-sizing: border-box;
    .el-tree {
      background: #1b3c44 !important;
      color: #ffffff !important;
    }
  }
}
.el-tree-node.is-current > .el-tree-node__content {
  background-color: #1b3c44 !important;
  color: #ffffff;
}

.el-tree-node__content {
    height: 92px !important;
}
.el-tree-node__expand-icon {
    font-size: 72px;
}
.el-tree-node__label {
  font-size: 72px !important;
}
.el-tree-node__content:hover {
  background-color: #1b3c44 !important;
}
</style>