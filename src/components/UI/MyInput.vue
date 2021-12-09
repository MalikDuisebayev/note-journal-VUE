<template>
	<input :value = 'modelValue' @input = 'updateInput' type="text" class = 'input'>
</template>

<script>
	export default{
		name: 'my-inputs',
		props:{
			modelValue: [String,Number],
		},
		methods:{
			updateInput(event){
				this.$emit('update:modelValue',event.target.value)
			}
		}
	}
	
</script>

<style scoped>
 .input{
    width: 100%;
    border:  1px solid teal;
    padding: 10px 15px;
    margin-top: 15px;
  }
</style>

