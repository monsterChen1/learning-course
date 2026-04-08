<template>
  <div class="like-page">
    <van-nav-bar fixed title="我的点赞" />
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      :immediate-check="false"
      @load="onLoad"
    >
      <article-item v-for="item in list" :key="item.id" :item="item" />
    </van-list>
  </div>
</template>

<script>
import { getOptList } from '@/api/article'
export default {
  name: 'like-page',
  data () {
    return {
      loading: false,
      current: 1,
      totalPage: 1,
      list: []
    }
  },
  async created () {
    this.getList()
  },
  methods: {
    async getList () {
      const res = await getOptList({
        page: this.current,
        optType: 1
      })
      this.list = this.list.concat(res.data.rows)
      this.totalPage = res.data.pageTotal
      return true
    },
    async onLoad () {
      if (this.finished) return
      this.current++
      const tmp = await this.getList()
      if (tmp === true) this.loading = false
    }
  },
  computed: {
    finished () {
      return this.current >= this.totalPage
    }
  }
}
</script>

<style lang="less" scoped>
.like-page {
  margin-bottom: 50px;
  margin-top: 44px;
}
</style>
