/**
 * 工具库
 */

export function bsImgLoad(bs, content, delay) {
    // 解决better-scroll 因为图片没有下载完导致的滚动条高度不够，无法浏览全部内容的问题。
    // 原因是better-scroll 初始化是在dom 加载后执行，此时图片没有下载完成，导致滚动条高度计算不准确。
    // 利用图片的complete 属性进行判断，当所有图片下载完成后再对scroll重新计算。
    let img = content.getElementsByTagName("img");
    let count = 0;
    let length = img.length;
    if (length) {
        let timer = setInterval(() => {
            if (count == length) {
                // bs提供的刷新的方法，详见官网
                bs.refresh();
                // bs.openPullUp();
                clearInterval(timer);
            } else if (img[count].complete) {
                count++;
            }
        }, delay);
    }
}