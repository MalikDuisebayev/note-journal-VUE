<template>
	<div class="post">
		<div>
			<div> {{post.id}}</div>
			<div><strong>Название:</strong> {{post.title}} </div>
      		<div><strong>Описание:</strong> {{post.body}} </div>		
		</div>
			<div>
			<my-buttons @click = '$router.push(`/posts/${post.id}`)'> Открыть </my-buttons>
			 </div>
		<div>
			<my-buttons @click = "$emit('remove',post)"> Удалить </my-buttons>
		</div>
    </div>
</template>

<script>
	export default{
		props:{
			post:{
				type: Object,
				required: true
			}
		}
	}
</script>


<style scoped>
.post{
    padding: 15px;
    border:  2px solid teal;
    margin-top: 15px;
    display:  flex;
    align-items: center;
    justify-content: space-between;
    text-align: justify;
}
</style>