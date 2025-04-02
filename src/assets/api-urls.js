// these are every urls used in the app 
// "getProfile": "/user/:param1" // when you need to pass params to the url
// globally_res_feedback:{ err:true, succ_msg: 'event-happend successfully'} // if we want the err || succ res to be handled globally
export default  {
  "auth": {
    // "signUp": {url:"/auth/register",method:'post'},
    "login": {url:"/user/sign_in",method: 'post'},
    "getProfile": {url:"/user/get_me",method: 'get',globally_res_feedback:{err:true}},
    "updateMe": {url:"/user/update_me",method: 'post'},
    "updatePassword": { url: "/user/update_password",method: 'post' },
    "updatePhoneNumber": {url:"/user/update_phoneNumber",method: 'post'}
  },
  "user":{
    "getList": {url:"/user/users",method: 'get',globally_res_feedback:{ err:true}},
    "createUser":{url:"/user/create",method: 'post',globally_res_feedback:{ err:true,succ_msg: 'employee-registered successfully'}},
  },
  "store":{
    "create": {url:"/store",method: 'post'},
    "getList": {url:"/store",method: 'get',globally_res_feedback:{ err:true}},
    "requested_items":{url:"/store/requested_items",method: 'get',globally_res_feedback:{ err:true}},
  },
  "department":{
    "getList": {url:"/department",method: 'get',globally_res_feedback:{ err:true}},
    "create": {url:"/department",method: 'post'},
  },
  "employee":{
    "getList": {url:"/employee",method: 'get',globally_res_feedback:{ err:true}},
    "register": {url:"/employee/register",method: 'post',globally_res_feedback:{ succ_msg: 'employee-registered successfully'}},
  },
  "vacancy":{
    "getList": { url:"/vacancy",method: 'get',globally_res_feedback:{ err:true} },
    "create": { url:"/vacancy",method: 'post',globally_res_feedback:{ err:true,succ_msg: 'New Vacancy Posted Successfully 👍!!!' }},
  },
  "blog":{
    "getList": { url:"/blog",method: 'get',globally_res_feedback:{ err:true} },
    "create": { url:"/blog",method: 'post',globally_res_feedback:{ err:true,succ_msg: 'New Blog Posted Successfully 👍!!!' }},
  },
  "newsletter":{
    "getList": { url:"/newsletter",method: 'get',globally_res_feedback:{ err:true} },
    "create": { url:"/newsletter",method: 'post',globally_res_feedback:{ err:true,succ_msg: 'Newsletters sent Successfully 👍!!!' }},
    "subs": { url:"/newsletter/subscriber",method: 'get',globally_res_feedback:{ err:true }},
  }
}