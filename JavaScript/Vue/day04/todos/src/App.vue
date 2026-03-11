<template>
  <div id="app">
    <section class="todoapp">
    <!-- 头部：输入框 -->
    <header class="header">
      <h1>todos</h1>
      <input class="new-todo" placeholder="输入新计划" autofocus v-model.trim="label" @keydown.enter="submitTodo">
    </header>

    <!-- 列表： -->
    <section class="main">
      <input id="toggle-all" class="toggle-all" type="checkbox" v-model="allCheck">
      <label for="toggle-all">Mark all as complete</label>
      <ul class="todo-list">
          <Todo v-for="item in todoList" :item="item" :key="item.id" @del="del" v-show="select === 'all' || select === item.check"></Todo>
      </ul>
    </section>

    <!-- 底部：状态栏 -->
    <footer class="footer">
      <span class="todo-count">剩余<strong>{{ unfinished }}</strong>未完成 </span>
      <ul class="filters">
        <li>
          <a :class="{selected: select === 'all'}" href="#/" @click="handleSelect('all')">全部</a>
        </li>
        <li>
          <a :class="{selected: select === false}" href="#/active" @click="handleSelect(false)">未完成</a>
        </li>
        <li>
          <a :class="{selected: select === true}" href="#/completed" @click="handleSelect(true)">已完成</a>
        </li>
      </ul>
      <button class="clear-completed" @click="delFinish">清除已完成</button>
    </footer>
  </section>
  </div>
</template>

<script>
import Todo from './components/todo.vue';
export default {
  name: 'App',
  components: {
    Todo
  },
  data() {
    return {
      label: '',
      todoList: [],
      select: 'all',
    }
  },
  methods: {
    submitTodo(){
      if(this.label === '') return;
      this.todoList.push({
        id: parseInt(Math.random() * 1000 + 1),
        label: this.label,
        check: false
      });
      this.label = '';
    },
    handleSelect(type) {
      this.select = type;
    },
    delFinish() {
      this.todoList = this.todoList.filter(item => item.check === false);
    },
    del(id){
      this.todoList = this.todoList.filter(item => item.id !== id);
    }
  },
  computed: {
    unfinished(){
      return this.todoList.reduce((sum, item) => sum += item.check ? 0 : 1, 0);
    },
    allCheck: {
      get(){
        return this.todoList.every(item => item.check === true);
      },
      set(value){
        this.todoList.forEach(item => item.check = value);
      }
    }
  },
  watch: {
    todoList: {
      deep: true,
      immediate: true,
      handler (newV, oldV){
        if(oldV === undefined){
          this.todoList = JSON.parse(localStorage.getItem('todos')) || [];
        }else if(newV){
          localStorage.setItem('todos', JSON.stringify(this.todoList));
        }
      }
    },
  }
}
</script>

<style>

</style>
