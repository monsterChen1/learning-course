<template>
  <div class="article-page">
    <nav class="my-nav van-hairline--bottom">
      <a
        :class="{active: type === 'weight_desc'}"
        href="javascript:;"
        @click="handleChange('weight_desc')"
        >推荐</a
      >
      <a
        :class="{active: type === null}"
        href="javascript:;"
        @click="handleChange(null)"
        >最新</a
      >
      <div class="logo"><img src="@/assets/logo.png" alt=""></div>
    </nav>
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      :immediate-check="false"
      offset="10"
      @load="onLoad"
    >
      <ArticleItem v-for="item in list" :key="item.id" :item="item"></ArticleItem>

    </van-list>
  </div>
</template>

<script>
import { getArticleList } from '@/api/article'

export default {
  name: 'article-page',
  data () {
    return {
      type: 'weight_desc',
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
    handleChange (type) {
      if (this.type === type) return
      this.type = type
      this.current = 1
      this.list = []
      this.finished = false

      this.getList(false)
    },
    async onLoad () {
      if (this.current >= this.totalPage) {
        this.loading = false
        return
      }
      this.current++
      const res = await this.getList()
      if (res === true) this.loading = false
    },
    async getList () {
      const res = await getArticleList({
        current: this.current,
        sorter: this.type
      })
      this.list = this.list.concat(res.data.rows)
      this.totalPage = res.data.pageTotal
      return true
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
.article-page {
  margin-bottom: 50px;
  margin-top: 44px;
  .my-nav {
    height: 44px;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 999;
    background: #fff;
    display: flex;
    align-items: center;
    > a {
      color: #999;
      font-size: 14px;
      line-height: 44px;
      margin-left: 20px;
      position: relative;
      transition: all 0.3s;
      &::after {
        content: '';
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: 0;
        width: 0;
        height: 2px;
        background: #222;
        transition: all 0.3s;
      }
      &.active {
        color: #222;
        &::after {
          width: 14px;
        }
      }
    }
    .logo {
      flex: 1;
      display: flex;
      justify-content: flex-end;
      > img {
        width: 64px;
        height: 28px;
        display: block;
        margin-right: 10px;
      }
    }
  }
}
</style>
