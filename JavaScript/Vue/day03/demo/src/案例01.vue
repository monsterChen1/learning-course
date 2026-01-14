<template>
  <div id="app">
    <div class="score-case">
      <div class="table">
        <table>

          <thead>
            <tr>
              <th>编号</th>
              <th>科目</th>
              <th>成绩</th>
              <th>考试时间</th>
              <th>操作</th>
            </tr>
          </thead>

          <tbody v-if="list.length">
            <tr v-for="(item, i) in list" :key="item.id">
              <td>{{ i + 1 }}</td>
              <td>{{ item.subject }}</td>
              <td :class="item.score < 60 ? 'red' : ''">{{ item.score }}</td>
              <td>{{ item.date }}</td>
              <td>
                <a href="#" @click="del(item.id)">删除</a>
              </td>
            </tr>
          </tbody>
          <tbody v-else>
            <tr>
              <td colspan="5">
                <span class="none">暂无数据</span>
              </td>
            </tr>
          </tbody>

          <tfoot>
            <tr>
              <td colspan="5">
                <span>总分：{{ totalScore }}</span>
                <span style="margin-left:50px">平均分：{{ avgScore }} <!--| {{ totalScore / list.length }} --> </span>
              </td>
            </tr>
          </tfoot>

        </table>
      </div>

      <div class="form">
        <div class="form-item">
          <div class="label">科目：</div>
          <div class="input">
            <input type="text" placeholder="请输入科目" v-model.trim="subject">
          </div>
        </div>
        <div class="form-item">
          <div class="label">分数：</div>
          <div class="input">
            <input type="text" placeholder="请输入分数" v-model.number="score">
          </div>
        </div>
        <div class="form-item">
          <div class="label"></div>
          <div class="input">
            <button class="submit" @click="add">添加</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  name: 'App',
  data() {
    return {
      list: [
        {id: 15, subject: '语文', score: 88, date: this.getTime('2022-06-07 10:00:00')},
        {id: 27, subject: '数学', score: 100, date: this.getTime('2022-06-07 10:00:00')},
        {id: 32, subject: '英语', score: 56, date: this.getTime('2022-06-07 10:00:00')},
        {id: 41, subject: '物理', score: 76, date: this.getTime('2022-06-07 10:00:00')},
      ],
      subject: '',
      score: null,
    }
  },
  methods: {
    add() {
      if(!this.subject || !this.score){
        alert('请填写完整的信息');
        return;
      }

      let newItem = {
        id: Math.floor(Math.random() * 1000 + 100),
        subject: this.subject,
        score: this.score,
        date: this.getTime(),
      };
      this.list.push(newItem);

      this.subject = '';
      this.score = null;
    },
    del(id) {
      this.list = this.list.filter(item => item.id !== id);
    },
    getTime(str){
      return moment(str).format('YYYY-MM-DD HH:mm:ss');
    }
  },
  computed: {
    totalScore() {
      return this.list.reduce((sum, item) => sum + item.score, 0);
    },
    avgScore() {
      if(this.list.length === 0) return 0;
      return (this.totalScore / this.list.length).toFixed(2);
    }
  },
}
</script>

<style lang="less">
.score-case {
  width: 1000px;
  margin: 50px auto;
  display: flex;
  .table {
    flex: 4;
    table {
      width: 100%;
      border-spacing: 0;
      border-top: 1px solid #ccc;
      border-left: 1px solid #ccc;
      th {
        background: #f5f5f5;
      }
      tr:hover td {
        background: #f5f5f5;
      }
      td,
      th {
        border-bottom: 1px solid #ccc;
        border-right: 1px solid #ccc;
        text-align: center;
        padding: 10px;
        &.red {
          color: red;
        }
      }
    }
    .none {
      height: 100px;
      line-height: 100px;
      color: #999;
    }
  }
  .form {
    flex: 1;
    padding: 20px;
    .form-item {
      display: flex;
      margin-bottom: 20px;
      align-items: center;
    }
    .form-item .label {
      width: 60px;
      text-align: right;
      font-size: 14px;
    }
    .form-item .input {
      flex: 1;
    }
    .form-item input,
    .form-item select {
      appearance: none;
      outline: none;
      border: 1px solid #ccc;
      width: 200px;
      height: 40px;
      box-sizing: border-box;
      padding: 10px;
      color: #666;
    }
    .form-item input::placeholder {
      color: #666;
    }
    .form-item .cancel,
    .form-item .submit {
      appearance: none;
      outline: none;
      border: 1px solid #ccc;
      border-radius: 4px;
      padding: 4px 10px;
      margin-right: 10px;
      font-size: 12px;
      background: #ccc;
    }
    .form-item .submit {
      border-color: #069;
      background: #069;
      color: #fff;
    }
  }
}
</style>