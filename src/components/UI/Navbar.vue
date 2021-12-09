<template>
	<div class="navbar">
		<div>
			<my-button class = 'btns' @click = '$router.push("/")' >Home</my-button>
		</div>
		<div class = 'nav__btns'>
			<my-button class = 'btns' @click = '$router.push("/posts")'>Заметки</my-button>
			<my-button class = 'btns' @click = '$router.push("/about")' style = 'margin-left: 20px;'>О приложении</my-button>
		</div>
	</div>
</template>


<script>
	
</script>


<style scoped>
	.navbar{
		height: 50px;
		background-color: teal;
		box-shadow: 2px 2px 4px gray;
		display:  flex;
		color: white;
		align-items: center;
		padding: 0 15px ;
	}
	.nav__btns{
		margin-left: auto;
	}
	.btns{
		cursor: pointer;
	}
</style>