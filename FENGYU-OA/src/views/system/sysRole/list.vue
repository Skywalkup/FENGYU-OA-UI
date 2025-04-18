
<script>
// 1 引入js文件
import api from '@api/system/sysRole.js'

export default {
    // vue 代码结构
    // 2 定义初始值
    data(){
        return {
            list: [],
            page: 1,
            limit: 10,
            total: 0,
            serarchObj: {}
        }
    },
    // 3 在页面渲染之前执行：获取数据
    created(){
        this.fetchData()
    },
    // 4 具体的操作方法
    methods: {
        // 4.1 定义条件分页查询方法
        fetchData(){         
            api.getPageList
        }
    }
}
</script>