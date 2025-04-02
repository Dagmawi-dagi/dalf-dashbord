// list_header.vue will use this to create header tabs for data_list
// list_raw will use this to display the raw items accordingly 

export const  a_heads =  {
  "user id" : { "width": "120px", bg:'cyan', tx:'#000' },
  "user" : { "width": "120px", bg:'cyan', tx:'#000' },
  "createdAt" : { "width":  "120px"},
  "body" : { "grow":  true },
}

export const  b_heads =  {
  "logo" : { "width": "150px" },
  "name" : { "width":  "120px"},
  "subtopics" : { "grow":  true},
}

export const  users_heads =  {
  "userName" : { "width": "150px" },
  "last_logged_in":{"width": '120px'},
  "role" : { "width":  "120px"},
  "phoneNumber" : { "width":  '120px'},
  "active" :{ "width": "120px", bg:'cyan', tx:'#000' },
  "email" : { "width":  "120px"},
  "createdAt" : { "width":  '120px'},
}


export const  emergency_contacts_heads =  {
  "name" : { "width": "150px" },
  "phone_number" : { "width":  "120px"},
  "createdAt" : { "width":  '120px'},
}


export const  warning_heads =  {
  "allergy" : { "width": "150px" },
  "behavior" : { "width":  "120px"},
  "chronic_diseases" : { "width":  "120px"},
  "createdAt" : { "width":  '120px'},
}

//employee
export const  employee_heads =  {
  "first_name" : { "width":"120px" },
  "last_name" : { "width":  '120px'},
  "gender" : { "width":  '120px'},
  "email" : { "width":  '120px'},
  "phone_number" : { "width":  '120px'},
  "system_user" : { "width":  '120px'},
  "has_share" : { "width":  '120px'},
  "department":{"width":  '120px'},  
  "createdBy":{"width": '120px'}
}

export const  attendance_heads =  {
  "shift" : { "width":"120px" },
  "enterAt" : { "width":  '120px'},
  "leaveAt" : { "width":  '120px'},
  "seenBy" : { "width":  '120px'},
  "createdBy":{"width": '120px'}
}
export const store_items_head = {
  "item_name":  { "width":"120px" },
  "item_type":  { "width":"120px" },
  "quantity":   { "width":"120px" },
  "createdAt":  { "width":"120px" },
}

export const store_requested_items_head = {
  "store_item":  { "width":"120px" },
  "requested_by":  { "width":"120px" },
  "aprroved_by":   { "width":"120px" },
  "status":  { "width":"120px" },
  "comment":{"width": "120px" }
}

export const departments_head = {
  "department_name":  { "width":"120px" },
  "parent_reference":  { "width":"120px" },
  "createdAt":{"width": "120px" }
}

export const  vacancy_head = {
  "position_name":  { "width":"120px" },
  "description":  { "width":"120px" },
  "locations":  { "width":"120px" },
  "salary":  { "width":"120px" },
  "company":  { "width":"120px" },
  "createdBy":{"width": "120px" },
  "createdAt":{"width": "120px" }
}

export const attendance_head = {
  "employee_archive":  { "width":"120px" },
  "shift":  { "width":"120px" },
  "enterAt":  { "width":"120px" },
  "leaveAt":  { "width":"120px" },
  "seenBy":  { "width":"120px" },
  "createdBy":{"width": "120px" },
}


export const blog_head = {
  "title":  { "width":"120px" },
  "content":  { "width":"120px" },
  "coverImg":  { "width":"120px" },
  "reactions":  { "width":"120px" },
  "createdBy":{"width": "120px" },
}

export const newsletter_head = {
  "subject":  { "width":"120px" },
  "content":  { "width":"120px" },
  "coverImg":  { "width":"120px" },
  "recipients":  { "width":"120px" },
  "successful_recipients":  { "width":"120px" },
  "failed_recipients":  { "width":"120px" },
  "createdBy":{"width": "120px" },
}

export default { 
  a_heads,
  b_heads,
  users_heads,
  emergency_contacts_heads,
  warning_heads,
  store_items_head,
  store_requested_items_head,
  departments_head,
  // employee
  attendance_head,
  employee_heads,
  attendance_heads,
  //HR
  vacancy_head,
  // compnay website
  blog_head,
  newsletter_head
}