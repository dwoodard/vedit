// import Carousel3d from './Carousel3d.vue'
// import Slide from './Slide.vue'
import Vedit from './Vedit.vue'
const install = (Vue) => {
    // Vue.component('carousel3d', Carousel3d)
    // Vue.component('slide', Slide)
    Vue.component('vedit', Vedit)
}

export default {
    install
}

export {
	Vedit
    // Carousel3d,
    // Slide
}