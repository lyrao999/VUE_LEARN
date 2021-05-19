<template>
	<div>
		<tab-bar>
			<tab-bar-item path="/home" activeColor="blue">
				<!-- 这里使用路径别名时，需要加~ -->
				<img src="~assets/img/tabbar/icon01.png" alt="" slot="item-icon" />
				<img src="~assets/img/tabbar/icon01_active.png" alt="" slot="item-icon-active" />
				<div slot="text">主页</div>
			</tab-bar-item>
			<tab-bar-item path="/category" active-color="blue">
				<img src="~assets/img/tabbar/icon02.png" alt="" slot="item-icon" />
				<img src="~assets/img/tabbar/icon02_active.png" alt="" slot="item-icon-active" />
				<div slot="text">分类</div>
			</tab-bar-item>
			<tab-bar-item path="shopcar" active-color="blue">
				<img src="~assets/img/tabbar/icon03.png" alt="" slot="item-icon" />
				<img src="~assets/img/tabbar/icon03_active.png" alt="" slot="item-icon-active" />
				<div slot="text">购物车</div>
			</tab-bar-item>
			<tab-bar-item path="profile">
				<img src="~assets/img/tabbar/icon04.png" alt="" slot="item-icon" />
				<img src="~assets/img/tabbar/icon04_active.png" alt="" slot="item-icon-active" />
				<div slot="text">我的</div>
			</tab-bar-item>
		</tab-bar>
	</div>
</template>

<script>
import TabBar from "cpns/tabbar/TabBar";
import TabBarItem from "cpns/tabbar/TabBarItem";
export default {
  name: 'MainTabBar',
	components: {
		TabBar,
		TabBarItem
	}
}
</script>