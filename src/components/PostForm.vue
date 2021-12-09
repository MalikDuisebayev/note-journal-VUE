<template>
	<form @submit.prevent>
      <my-inputs type = 'text' v-model = 'post.title' placeholder="Название" />
      <my-inputs type = 'text' v-model = 'post.body' placeholder = 'Описание' />
      <my-buttons style = 'align-self: flex-end; margin-top: 15px;' class="btn" @click = 'createPost'>Сохранить</my-buttons>
    </form>
</template>

<script>
	export default{
		data(){
			return{
				post:{
					title: '',
					body: ''
				}
			}
		},
		methods:{
			createPost(){
				this.post.id = Date.now()
				this.$emit('create',this.post)
				this.post = {
					title : '',
					body : ''
				}
			}
		},
	}
	
</script>


<style scoped>
  form{
    display: flex;
    flex-direction: column;
  }
  
</style>