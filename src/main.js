import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// import './assets/main.css'
// import style from './sass/style.scss';
// import style from './sass/style.scss';
import './sass/styx.scss';


const app = createApp(App)

app.use(router)

app.mount('#app')




