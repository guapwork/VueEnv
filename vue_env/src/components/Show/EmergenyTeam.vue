<template>
  <div class="emergencyTeam">
    <div class="head">
      <el-button type="danger">紧急联系方式</el-button>
      <p>应急小组</p>
      <el-button type="success">全部通知</el-button>
      <i class="el-icon-close"></i>
    </div>
    <div class="body">
      <div class="tableHead">
        <p>指挥疏散组</p>
        <div>
          <i class="el-icon-arrow-down"></i>
          <el-button type="success">通知</el-button>
        </div>
      </div>
      <table>
        <tr>
          <td>组长</td>
          <td>计算机学院</td>
          <td>王日立</td>
          <td>15233226544</td>
        </tr>
        <tr>
          <td rowspan="2">副组长</td>
          <td>计算机学院</td>
          <td>王日立</td>
          <td>15233226544</td>
        </tr>
        <tr>
          <td>计算机学院</td>
          <td>王日立</td>
          <td>15233226544</td>
        </tr>
        <tr>
          <td rowspan="6">组员</td>
          <td>计算机学院</td>
          <td>王日立</td>
          <td>15233226544</td>
        </tr>
        <tr>
          <td>计算机学院</td>
          <td>王日立</td>
          <td>15233226544</td>
        </tr>
        <tr>
          <td>计算机学院</td>
          <td>王日立</td>
          <td>15233226544</td>
        </tr>
        <tr>
          <td>计算机学院</td>
          <td>王日立</td>
          <td>15233226544</td>
        </tr>
        <tr>
          <td>计算机学院</td>
          <td>王日立</td>
          <td>15233226544</td>
        </tr>
        <tr>
          <td>计算机学院</td>
          <td>王日立</td>
          <td>15233226544</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
</script>

<style lang="scss">
.emergencyTeam {
  width: 3340px;
  height: 1660px;
  background-color: #1b3c44;
  font-family: Microsoft YaHei;
  .head {
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: 5px solid #0e1f23;
    width: 100%;
    height: 200px;

    p {
      color: #ffffff;
      font-size: 120px;
      font-weight: bold;
    }
    i {
      font-size: 120px;
      color: #ffffff;
    }
  }
  .body {
    width: 100%;
    height: 1460px;
    overflow: auto;
    .tableHead {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 170px;
      padding-left: 20px;
      p {
        color: #00ffff;
        font-size: 80px;
      }
      div {
        padding-right: 20px;
        i {
          margin-right: 40px;
          color: #ffffff;
        }
      }
    }
    table {
      width: 100%;
      color: #ffffff;
      border: 1px solid #9ba9ad;
      cellspacing: 0px;
      td {
        border: 1px solid #9ba9ad;
        font-size: 72px;
        padding: 50px 30px;
      }
    }
  }
}
</style>