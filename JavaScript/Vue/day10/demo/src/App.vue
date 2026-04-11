<template>
  <div id="app">
    <h1>根组件</h1>
    <span>库存总数:</span>
    <input type="text" v-model.number.lazy="count">
    <button @click="getCount">获取库存</button>
    <div style="border: 1px solid black; width: 300px;">
      <AddItem />
    </div>
    <div style="border: 1px solid black; width: 300px;">
      <SubItem />
    </div>
    <p>总价（7折）: {{ $store.getters.totalPrice }}</p>

    <h1>用户</h1>
    <div>name: <input type="text" v-model="name"/></div>
    <div>age: {{ age }}</div>
    <div>sex: {{ sex}} <button @click="changeSex('female')">改变</button></div>
    <div>{{ fullInfo }}</div>
    <div>{{ $store.getters['user/fullInfo'] }}</div>
  </div>
</template>

<script>
import AddItem from '@/components/AddItem.vue';
import SubItem from '@/components/SubItem.vue';
import { mapState, mapActions, mapGetters } from 'vuex';

export default {
  name: 'App',
  components: {
    AddItem,
    SubItem
  },
  computed: {
    count: {
      get() {
        return this.$store.state.count;
      },
      set(value) {
        this.$store.commit('reset', value);
      }
    },
    name: {
      get(){
        return this.$store.state.user.name;
      },
      set(value){
        this.$store.commit('user/updateName', value);
      }
    },
    ...mapState('user', ['age', 'sex']),
    ...mapGetters('user', ['fullInfo'])
  },
  methods: {
    getCount(){
      this.$store.dispatch('getServer');
    },
    ...mapActions('user', ['changeSex'])
  },
}
</script>

<style>
#app {
  width: 300px;
  margin: 20px auto;
  border: 1px solid #ccc;
  padding: 4px;
}
</style>
