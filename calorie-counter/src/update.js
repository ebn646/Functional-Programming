
// 1
// export const MSGS = {
//   SHOW_FORM: 'SHOW_FORM'
// }

const MSGS = {
  SHOW_FORM: 'SHOW_FORM'
}

// 2. We change the type of message from a string to an object
// since the message is now an object it can have additional information in the message
// in this case it's a property called showForm which can contain a boolean value
// now it can look at the showForm part of the message to show what to do with the model showForm property
// this is how we derive a payload property
export function showFormMsg(showForm){
  return {
    type: MSGS.SHOW_FORM,
    showForm
  };
}
function update(msg,model){
  //switch(msg){
  switch(msg.type){
    case MSGS.SHOW_FORM:
    const { showForm } = msg;
      //return { ...model, showForm: true }
      return { ...model, showForm, description: '', calories: 0 }
  }
  return model;
}

export default update;