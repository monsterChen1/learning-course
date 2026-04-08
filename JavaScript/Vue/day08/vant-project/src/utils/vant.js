import Vue from 'vue'
// 导入所有
// import Vant from 'vant'
// import 'vant/lib/index.css'

// Vue.use(Vant)

// 需要下载依赖 babel-plugin-import
// 配置babel.config.js
// 按需导入
import { Button, Image as VanImage, NavBar, Form, Field, Tabbar, TabbarItem, Icon, List, Grid, GridItem, Cell, CellGroup, Toast } from 'vant'
Vue.use(Button)
Vue.use(VanImage)
Vue.use(NavBar)
Vue.use(Form)
Vue.use(Field)
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(Icon)
Vue.use(List)
Vue.use(Grid)
Vue.use(GridItem)
Vue.use(Cell)
Vue.use(CellGroup)
Vue.use(Toast)
Vue.prototype.$toast = Toast
