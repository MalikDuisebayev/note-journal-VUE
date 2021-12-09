<template>
	<button class = 'btn'>
		<slot></slot>
	</button>
	
</template>

<script>
	export default{
		name: 'my-buttons'	
	}
	
</script>


<style scoped>
.btn{
    cursor:  pointer;
    padding: 10px 15px;
    background: none;
    color:  teal;
    border:  1px solid teal;
  }
 .btn:hover{
 	background: teal;
 	color: white;
 	transition: All .3s;
 }
	
</style>