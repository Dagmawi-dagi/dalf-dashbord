import { defineStore } from 'pinia';
import { ref } from 'vue';
import { use_break_point } from '../composables/break-point'

export const use_util_store = defineStore('util-store',()=>{
  
  // to tell any comp that the page routing is resolved 
  const route_resovled = ref(false)

  const { desktop,laptop } = use_break_point()
  
  const side_bar_open = ref( (desktop.value || laptop.value ) ? true:false  )
  const dark_theme = ref(false)

  // template refs to use from Anywhwere  
  const router_view_container = ref(null)

  // set the HeaderDrawer values on beforeEnter Router hook 
  // OR on created hook of the route that need HeaderDrawer
  const header_drawer = ref({
    tab: false,
    tabs: [],
    thinCard: false,
    thinCardData: [] 
  })

  const any_open_modal = ref({
    bool: false,
    id: '',
    AnythingTopass: null // use this passed data on the mounted modal
  })

  const   global_vue_easy_lightbox = ref({
    display: false,
    imgs: []
  })

  // for filter sort search
  // we are NOT pushing the filter and search Obj to the Route
  // so filter and search Obj  values will also be on the local Storage cus we need the on reload 
  const filter_obj = ref(null)  
  const search_string = ref(null)  
  const sort_obj = ref(null)  

  return{
    route_resovled,

    side_bar_open,

    dark_theme,

    //refs
    router_view_container,

    header_drawer,

    any_open_modal,

    global_vue_easy_lightbox,

    filter_obj,
    search_string,
    sort_obj
  }
})