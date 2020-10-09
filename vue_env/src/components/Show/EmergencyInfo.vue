<template>
    <div class="emergencyInfo">
        <div class="emergencyTable">应急信息</div>
        <table cellspacing="0">
            <tr>
                <td>告警设备编号</td>
                <td>YG-001</td>
                <td>告警设备名称</td>
                <td>烟感2号</td>
            </tr>
            <tr>
                <td>设备类型</td>
                <td>烟感</td>
                <td>设备负责人</td>
                <td>赵石页-13509877890</td>
            </tr>
            <tr>
                <td>设备告警时间</td>
                <td>2020-01-23 13：20：03</td>
                <td>告警位置名称</td>
                <td>教学楼-一楼-走廊-东</td>
            </tr>
            <tr>
                <td>预案名称</td>
                <td>火情紧急处理应急预案</td>
                <td>预案类型</td>
                <td>应急预案</td>
            </tr>
            <tr>
                <td>预案负责人</td>
                <td>田旭-15699882536</td>
                <td>告警类型</td>
                <td>设备告警</td>
            </tr>
        </table>
        <p>预案执行时长：3小时19分25秒</p>
    </div>
</template>

<script>
    
</script>

<style lang="scss">
.emergencyInfo{
    width:3340px;
    height: 1660px;
    background-color: #1b3c44;
    font-family: Microsoft YaHei;

    .emergencyTable{
        text-align: center;
        font-size: 120px;
        color: #ffffff;
        font-weight: bold;
    }
    
    table{
        width:100%;
        color: #ffffff;
        border:1px solid #9ba9ad;
        cellspacing:0px;

        td{
            border:1px solid #9ba9ad;
            font-size: 72px;
            padding: 50px 30px;
        }
        td:nth-child(odd){
            text-align: right;
        }
        td:nth-child(even){
            text-align: left;
        }
    }

    p{
        text-align: center;
        font-size: 72px;
        color: #00ffff;
    }
}

</style>