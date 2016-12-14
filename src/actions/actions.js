import {  NEWLINK, UNLINK } from './actionTypes'

const uid = () => Math.random().toString(34).slice(2);


export const unlink = (id) => {
  return {
    type: UNLINK,
    payload: id
  }
}

export const newlink = (form) => {
  console.log('submitForm Action>',form);
  return {
    type: NEWLINK,
    payload: {      
      linkedRoomPriceId: form.linkables,
      parentRoomPriceId: form.parents,
      ruleType: form.ruletype,
      ruleValue: form.rulevalue
    }
  }
}



