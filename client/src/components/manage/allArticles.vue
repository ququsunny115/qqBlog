<template>
  <el-table border>
    <el-table-column align="center" type="index" label="序号" width="50"></el-table-column>
    <el-table-column align="center" label="日期" prop=""></el-table-column>
    <el-table-column align="center" label="标签" prop=""></el-table-column>
    <el-table-column align="center" label="时间" prop=""></el-table-column>
    <el-table-column align="center" label="操作" prop="">
      <template slot-scope="scope">
          <el-button type="primary" plain size="mini" @click="2">编辑</el-button>
          <el-button type="danger" plain size="mini" @click="2">删除</el-button>
        </template>
    </el-table-column>
  </el-table>
</template>
