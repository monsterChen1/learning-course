<template>
  <div class="detail-page">
    <van-nav-bar
      left-text="返回"
      @click-left="goBack"
      fixed
      title="面经详细"
    />
    <header class="header">
      <h1>{{ item.stem }}</h1>
      <p>
        {{ item.createdAt }} | {{ item.views }} 浏览量 |
        {{ item.likeCount }} 点赞数
      </p>
      <p>
        <img :src="item.avatar" alt="" />
        <span>{{ item.creator }}</span>
      </p>
    </header>
    <main class="body" v-html="item.content"></main>
    <div class="opt">
      <van-icon :class="{active: item.likeFlag}" name="like-o" @click="toAction(1)"/>
      <van-icon :class="{active: item.collectFlag}" name="star-o" @click="toAction(2)"/>
    </div>
  </div>
</template>

<script>
import { getDetail, actions } from '@/api/detail'
export default {
  name: 'detail-page',
  data () {
    return {
      item: {}
    }
  },
  async created () {
    const id = this.$route.params.id

    const res = await getDetail({ id: id })
    this.item = res.data
  },
  methods: {
    goBack () {
      this.$router.back()
    },
    async toAction (opt) {
      await actions({
        id: this.item.id,
        optType: opt
      })
      if (opt === 1) {
        this.item.likeFlag = !this.item.likeFlag
        if (this.item.likeFlag) {
          this.item.likeCount++
        } else {
          this.item.likeCount--
        }
      } else if (opt === 2) {
        this.item.collectFlag = !this.item.collectFlag
      }
    }
  }
}
</script>

<style lang="less" scoped>
.detail-page {
  margin-top: 44px;
  overflow: hidden;
  padding: 0 15px;
  .header {
    h1 {
      font-size: 24px;
    }
    p {
      color: #999;
      font-size: 12px;
      display: flex;
      align-items: center;
    }
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      overflow: hidden;
    }
  }
  .opt {
    position: fixed;
    bottom: 100px;
    right: 0;
    > .van-icon {
      margin-right: 20px;
      background: #fff;
      width: 40px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      border-radius: 50%;
      box-shadow: 2px 2px 10px #ccc;
      font-size: 18px;
      &.active {
        background: #FEC635;
        color: #fff;
      }
    }
  }
}
</style>
