

<template>
	<div id="sidebar">
		<ul>
			<li><a v-link="{ path: '/' }">Demo介绍</a></li>
			<li><a v-link="{ path: '/vue' }">VUE</a></li>
            <li><a v-link="{ path: '/introduce' }">个人介绍</a></li>
		</ul>
	</div>
</template>

<style scoped>
*{
	padding: 0;
	margin:0;
}
div#sidebar{
   width: 300px;
   height: 100%;
   background-color: #c1c1c1;
   text-align: center;
   font-size: 35px;
   margin-right: 20px;
   float: left;
}
ul{
   list-style:none;
   margin-top: auto;
   margin-bottom: auto;
   transform: translate(0,50%);
}
ul li{
	padding: 20px 0 20px 0;
}
li a{
	color:white;
	text-decoration:none;
}

</style>