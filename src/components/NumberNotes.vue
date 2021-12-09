<template>
	<div class="numberOfNotes">
		<p v-show = 'posts.length'>Количество заметок: <strong>{{posts.length}}</strong></p>
	</div>
	
</template>


<script>
	export default{
		props:{
			posts:{
				type: Array,
				required: true
			}
		}
	}
</script>


<style scoped>	
	.numberOfNotes{
		margin: 15px 0;
		display:  flex;
		flex-direction: column;
	}
	.numberOfNotes p {
		align-self: flex-end ;
	}
</style>