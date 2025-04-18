import request from '@/utils/request'

const sysRole_path = '/admin/system/sysRole'

export default {
    getPageList(current, limit, searchObj) {
        return request({
            url: `${sysRole_path}/${current}/${limit}`,
            method: 'get',
            // 如果是普通对象参数，写法：【params:对象参数名称】
            // 如果是json对象参数，写法：【data:对象参数名称】
            params: searchObj
        })
    }

}