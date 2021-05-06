window.addEventListener('DOMContentLoaded', () => {
    const app = new Vue({
        el: '#app',
        data: {
            books: [
                { id: 1, name: '《算法导论》', data: '2006-9', price: 85.00, count: 1 },
                { id: 2, name: '《UNIX编程艺术》', data: '2006-2', price: 59.00, count: 1 },
                { id: 3, name: '《编程珠玑》', data: '2006-10', price: 39.00, count: 1 },
                { id: 4, name: '《代码大全》', data: '2006-3', price: 128.00, count: 1 }
            ]
        },
        methods: {
            increment(index) {
                this.books[index].count++
            },
            decrement(index) {
                this.books[index].count--
            },
            removeItem(index) {
                this.books.splice(index, 1)
            }
        },
        // 计算属性
        computed: {
            totalPrice() {
                // let price = 0
                // for (let i = 0; i < this.books.length; i++) {
                //     price += this.books[i].price * this.books[i].count
                // }
                // return price

                return this.books.reduce((acc, cur) => acc += cur.price * cur.count, 0)
            }
        },
        // 过滤器
        filters: {
            showPrice(price) {
                // console.log(typeof(price));  number 类型
                return '￥' + price.toFixed(2)
            }
        }
    })
})