<template>
  <div>
     <h2>Создание поста</h2>
     <my-inputs v-model = 'searchQuery' placeholder = 'Поиск'>
       
     </my-inputs>
     <div class = 'appButtons'>
           <my-buttons  @click = 'showDialog' > Создать пост </my-buttons>
           <my-select v-model = 'selectorSort' :options = 'sortOptions' />
     </div>
     <my-dialog v-model:show = 'dialogVisible'>
       <post-form  @create = 'createPost' />
     </my-dialog> 
    <post-list :posts = 'sortedAndSearchedPosts' @remove = 'removePost' v-if = '!isPostsLoading' />
      <my-loading v-else />
    <number-notes :posts = 'posts'/>
    <div class="page__wrapper">
      <div v-for = 'pageNumber in totalPage' :key = 'pageNumber' class = 'page' 
      :class = '{"current__page" : page === pageNumber}'
      @click = 'changePage(pageNumber)'
      > {{pageNumber}} </div>
    </div>
  </div>
</template>

<script>
  import PostForm from '@/components/PostForm.vue'
  import PostList from '@/components/PostList.vue'
  import NumberNotes from '@/components/NumberNotes.vue'
  import MyDialog from '@/components/UI/MyDialog.vue'
  import axios from 'axios'
  // import pagination from '@/components/Pagination.vue'
  export default{
    components: {
      'post-form':PostForm ,
      'post-list':PostList,
      'number-notes': NumberNotes,
      // Pagination,
    },
    data(){
      return{
        posts:[
                // {id:1, title: 'Java Script', body: 'Описание поста 1'},
                // {id:2, title: 'Java Script', body: 'Описание поста 2'},
                // {id:3, title: 'Java Script', body: 'Описание поста 3'},
                // {id:4, title: 'Java Script', body: 'Описание поста 3'},
              ],
        dialogVisible: false,
        isPostsLoading: false,
        selectorSort: '',
        searchQuery: '',
        page: 1,
        limit: 10,
        totalPage: 0,
        sortOptions:[
            {value: 'title', name: 'По заголовку'},
            {value: 'body', name: 'По описанию'},
        ]

      }
    },methods:{
     createPost(post){
      this.posts.push(post)
      this.dialogVisible = false
     },
     removePost(post){
      this.posts = this.posts.filter(p => p.id !== post.id)
     },
     showDialog(){
      this.dialogVisible = true
     },
     async fetchPosts(){
        try{
          this.isPostsLoading = true
          setTimeout(async()=>{
              const response  = await axios.get('https://jsonplaceholder.typicode.com/posts',{
                params:{
                  _page: this.page,
                  _limit: this.limit 
                }
              })
              this.totalPage  = Math.ceil(response.headers['x-total-count'] / this.limit)
              this.posts = response.data
              this.isPostsLoading = false
          },2000)
        }catch(e){
          alert('Ошибка')
        }
     },
     changePage(pageNumber){
      this.page = pageNumber
     }
    },
    // METHODS
    mounted(){ //Вызов функции при загрузке страницы
      this.fetchPosts()
    },
    // watch
    watch:{
      selectorSort(newValue){
        this.posts.sort((post1,post2)=>{
          return post1[newValue]?.localeCompare(post2[newValue])
        })
      },
      page(){
        this.fetchPosts()
      }
    },
    // computed
    computed:{
        sortedPost(){
          return[...this.posts].sort((post1,post2)=> post1[this.selectorSort]?.localeCompare(post2[this.selectorSort]))
        },
        sortedAndSearchedPosts(){
          return this.sortedPost.filter(post=>post.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
        } 
      },

  }
</script>

<style>

  .appButtons{
    margin: 15px 0;
    display:  flex;
    justify-content: space-between;
  }
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

