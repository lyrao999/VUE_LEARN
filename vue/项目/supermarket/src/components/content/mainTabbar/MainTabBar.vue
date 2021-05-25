<template>
	<div>
		<tab-bar>
			<tab-bar-item path="/home" activeColor="red">
				<!-- 这里使用路径别名时，需要加~ -->
				<img src="~assets/imgs/tabbar/icon01.png" alt="" slot="item-icon" />
				<img src="~assets/imgs/tabbar/icon01_active.png" alt="" slot="item-icon-active" />
				<div slot="text">主页</div>
			</tab-bar-item>
			<tab-bar-item path="/category" active-color="red">
				<img src="~assets/imgs/tabbar/icon02.png" alt="" slot="item-icon" />
				<img src="~assets/imgs/tabbar/icon02_active.png" alt="" slot="item-icon-active" />
				<div slot="text">分类</div>
			</tab-bar-item>
			<tab-bar-item path="shopcar" active-color="red">
				<img src="~assets/imgs/tabbar/icon03.png" alt="" slot="item-icon" />
				<img src="~assets/imgs/tabbar/icon03_active.png" alt="" slot="item-icon-active" />
				<div slot="text">购物车</div>
			</tab-bar-item>
			<tab-bar-item path="profile">
				<img src="~assets/imgs/tabbar/icon04.png" alt="" slot="item-icon" />
				<img src="~assets/imgs/tabbar/icon04_active.png" alt="" slot="item-icon-active" />
				<div slot="text">我的</div>
			</tab-bar-item>
		</tab-bar>
	</div>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar";
import TabBarItem from "components/common/tabbar/TabBarItem";
export default {
  name: 'MainTabBar',
	components: {
		TabBar,
		TabBarItem
	}
}
</script>