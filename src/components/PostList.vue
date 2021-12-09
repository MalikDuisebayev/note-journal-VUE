<template>
	<div>
		<h3 v-if = 'posts.length'>Список заметок</h3>
		<h3 v-else>Добавьте свою первую заметку</h3>
	<transition-group name = 'post-list'> 
		<post-item v-for = 'post in posts' :post = 'post' :key = 'post.id' @remove = "$emit('remove',post)"/>
	</transition-group>
	</div>
</template>

<script>
	import PostItem from '@/components/PostItem.vue'
	export default{
		components:{PostItem},
		props:{
			posts:{
				type: Array,
				required: true
			}
		}
	}
</script>

<style scoped>
	.post-list-item{
		display:  inline-block;
		margin-right: 10px;
	}
	.post-list-enter-active,
	.post-list-leave-active{
		transition: all .4s ease;
	}
	.post-list-enter-from,
	.post-list-leave-to{
		opacity:  0;
		transform:  translateY(30px);
	}
	.post-list-move {
  	transition: transform .4s;
	}

  
</style>