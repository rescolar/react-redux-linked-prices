import {  NEW_LINK, UNLINK, ON_SELECT_LINKABLE } from './actionTypes'

const uid = () => Math.random().toString(34).slice(2);


export const unLink = (id) => {
  return {
    type: UNLINK,
    payload: id
  }
}

export const newLink = (form) => {
  console.log('submitForm Action>',form);
  return {
    type: NEW_LINK,
    payload: {      
      linkedRoomPriceId: form.linkables,
      parentRoomPriceId: form.parents,
      ruleType: form.ruletype,
      ruleValue: form.rulevalue
    }
  }
}

export const onSelectLinkable = (id) => {
  return {
    type: ON_SELECT_LINKABLE,
    payload: id
  }
}

