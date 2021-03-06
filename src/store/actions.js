import {ADD_CONUT,ADD_GOOD} from './mutation-types.js' //引入此文件当要改变addCount、addGood等名字的时候可以直接去此文件修改即可
export default {
    //通过actions将商品数量和商品分开分发到mutation，便于管理。
    addCart(context, product) {
        return new Promise((resolve,reject)=>{
            let stateitem = context.state.cartList.find(item => item.iid === product.iid)//将item商品赋给一个变量，便于给它添加count属性
                if (stateitem) {//数量加1
                    // stateitem.count +=1
                    context.commit(ADD_CONUT, stateitem)
                    resolve('添加商品数量+1')
                } else {//添加新的商品
                    product.count = 1
                    // context.state.cartList.push(product)
                    context.commit(ADD_GOOD, product)
                    resolve('成功添加至购物车')
                }
        })
    }
}