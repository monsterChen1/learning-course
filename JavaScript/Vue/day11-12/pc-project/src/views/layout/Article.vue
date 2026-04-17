<template>
  <div class="article-page">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>面经后台</el-breadcrumb-item>
      <el-breadcrumb-item>面经管理</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card shadow="never" border="false">
      <template #header>
        <div class="header">

          <!-- <span>共 300 条记录</span> -->
          <el-button
            icon="el-icon-plus"
            size="small"
            type="primary"
            @click="handleOpen('add')"
            round>
            添加面经
          </el-button>
        </div>
      </template>

      <el-table :data="list" stripe style="width: 100%">
        <el-table-column prop="stem" label="标题" width="400"></el-table-column>
        <el-table-column prop="creator" label="作者"></el-table-column>
        <el-table-column prop="likeCount" label="点赞"></el-table-column>
        <el-table-column prop="views" label="浏览"></el-table-column>
        <el-table-column prop="createdAt" label="更新时间" width="200"></el-table-column>
        <el-table-column fixed="right" label="操作" width="120">
          <template #default="scope">
            <div class="actions">
              <i class="el-icon-view" @click="handleOpen('view', scope.row.id)"></i>
              <i class="el-icon-edit-outline" @click="handleOpen('edit', scope.row.id)"></i>
              <i class="el-icon-delete" @click="handleDel(scope.row.id)"></i>
            </div>
          </template>
        </el-table-column>
      </el-table>
      <div style="display: flex;justify-content: flex-end;">
        <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="current"
            :page-sizes="[10, 20, 30, 40]"
            :page-size="pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total">
          </el-pagination>
      </div>
    </el-card>

    <el-drawer
      :title="title + '面经'"
      :visible.sync="show"
      direction="rtl"
      :before-close="cancel"
      :wrapperClosable="false"
      size="40%">
      <div v-if="title === '预览'" class="article-preview ">
        <h5>{{ form.stem }}</h5>
        <div v-html="form.content"></div>
      </div>
      <el-form v-else ref="form" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="标题" prop="stem">
          <el-input v-model="form.stem" placeholder="输入标题"></el-input>
        </el-form-item>
        <el-form-item label="内容" prop="content">
          <quillEditor v-model="form.content" @blur="editorCk"></quillEditor>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submit">确认</el-button>
          <el-button @click="cancel">取消</el-button>
        </el-form-item>
      </el-form>
    </el-drawer>
  </div>
</template>

<script>
import { getArticleList, addArticle, getArticle, delArticle, updateArticle } from '@/api/article'
import { quillEditor } from 'vue-quill-editor'

export default {
  name: 'article-page',
  data () {
    return {
      current: 1,
      pageSize: 10,
      total: 0,
      list: [],
      show: false,
      title: '添加',
      form: {
        stem: '',
        content: ''
      },
      rules: {
        stem: [
          { required: true, message: '请输入标题', trigger: 'blur' }
        ],
        content: [
          { required: true, message: '请输入内容', trigger: 'blur' }
        ]
      }
    }
  },
  components: {
    quillEditor
  },
  created () {
    this.getList()
  },
  methods: {
    async getList () {
      const { data } = await getArticleList({
        current: this.current,
        pageSize: this.pageSize
      })
      // console.log(data)
      this.list = data.rows
      this.total = data.total
    },
    async getInfo (id) {
      const { data } = await getArticle(id)
      console.log(data)
    },
    handlePage (value) {
      console.log(this.current, this.pageSize, value)
    },
    handleSizeChange (pageSize) {
      this.pageSize = pageSize
      this.getList()
    },
    handleCurrentChange (page) {
      this.current = page
      this.getList()
    },
    async handleOpen (action, id = 0) {
      if (id) {
        const { data } = await getArticle(id)
        this.form.id = data.id
        this.form.stem = data.stem
        this.form.content = data.content
      }
      if (action === 'edit') {
        this.title = '编辑'
      } else if (action === 'view') {
        this.title = '预览'
      } else {
        this.title = '添加'
      }
      this.show = true
    },
    editorCk () {
      this.$refs.form.validateField('content')
    },
    submit () {
      this.$refs.form.validate(async valid => {
        if (!valid) return false

        let ret
        if (this.form.id) {
          ret = await updateArticle(this.form)
        } else {
          ret = await addArticle(this.form)
        }
        if (ret.code === 10000) {
          this.$message.success(this.form.id ? '编辑成功' : '添加成功')
          this.current = 1
          this.getList()
          this.cancel()
        }
      })
    },
    cancel () {
      this.form = { stem: '', content: '' }
      if (this.$refs.form) {
        this.$refs.form.resetFields()
      }
      this.show = false
    },
    handleDel (id) {
      this.$confirm('确认删除?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(async () => {
        const ret = await delArticle(id)
        if (ret.code === 10000) {
          this.$message.success('删除成功')
          this.getList()
        }
      }).catch(() => {
        return false
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.el-card {
  margin-top: 25px;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 16px;
  }
  .actions {
    font-size: 18px;
    display: flex;
    justify-content: space-around;
    color: #666;
    > i:hover {
      color: rgba(114, 124, 245, 1);
      cursor: pointer;
    }
  }
}
.el-pagination {
  margin-top: 20px;
  text-align: center;
}
.el-breadcrumb {
  margin-top: 10px;
}
.el-form {
  padding-right: 40px;
}
.quill-editor {
  ::v-deep .ql-editor {
    height: 300px;
  }
}
.el-rate {
  padding: 10px 0;
}
.article-preview {
  padding: 0 40px 40px 40px;
  > h5 {
    font-size: 20px;
    color: #666;
    border-bottom: 1px dashed #ccc;
    padding-bottom: 30px;
    margin: 0 0 20px 0;
  }
}
</style>
