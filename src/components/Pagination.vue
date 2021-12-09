<template>
	
</template>
    <div class="page__wrapper">
      <div v-for = 'pageNumber in totalPage' :key = 'pageNumber' class = 'page' 
      :class = '{"current__page" : page === pageNumber}'
      @click = 'changePage(pageNumber)'
      > {{pageNumber}} </div>
    </div>
<script>
	export default{
		name: 'my-pagination',
		methods:{
     			changePage(pageNumber){
      			this.$emit('paginPage',pageNumber)
     		}
		}
	}
</script>


<style scoped>
	.page__wrapper{
    display: flex;
    margin-top: 15px;
    align-items: center;
    justify-content: center;
  }
  .page{
    display:  flex;
    align-items:  center;
    justify-content:center;
    border: 1px solid black;
    width: 30px;
    height: 30px;
    border-radius:  50%;
    margin: 0 5px;
    cursor: pointer; 
  }
  .page:hover{
    background-color: teal;
    color: white;
    transition:  all .3s ease;
  }
  .current__page{
    background:  teal;
    color:  white;
  }
	
</style>