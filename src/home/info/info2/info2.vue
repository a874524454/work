<template>
  <div class='tableInfo'>
      <el-table
      :data="tableData">
      <el-table-column
        prop="seat"
        label="座位">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名">
      </el-table-column>
      <el-table-column
        prop="department"
        label="部门">
      </el-table-column>
      <el-table-column
        prop="title"
        label="职称">
      </el-table-column>
      <el-table-column
        prop="permissions"
        label="会议权限">
      </el-table-column>
      <el-table-column
        prop="time"
        label="签到时间">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
 export default {
      data() {
        return {
          tableData: [
          {
            seat: '1',
            name: '王小虎',
            department: '国务院',
            title:'常委',
            permissions:'会议主持',
            time:'2020-8-4'
          },
          {
            seat: '2',
            name: '王小二',
            department: '国务院',
            title:'常委',
            permissions:'会议主持',
            time:'2020-8-4'
          },
          {
            seat: '3',
            name: '张三',
            department: '国务院',
            title:'常委',
            permissions:'会议主持',
            time:'2020-8-4'
          }
        ]
        }
      }
    }
</script>

<style lang='less'>
.tableInfo{
    font-size: 12px;
    height: 100%;
    .el-table{
        font-size: 12px;
        width: 100%;
        height: 100%;
        border-collapse: collapse;
    }
    .el-table__row td{
        padding: 0;
        .cell{
        padding: 0;
        text-align: center;
    }
    }
    th{
        padding: 0;
        .cell{
        padding: 0;
        text-align: center;
    }
    }
}
</style>