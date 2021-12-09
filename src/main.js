import { createApp } from 'vue'
import App from './App.vue'
import components from '@/components/UI'
import router from '@/components/router/router.js'

const app = createApp(App)

components.forEach(comp =>{
	app.component(comp.name,comp)
})

app.use(router).mount('#app')
