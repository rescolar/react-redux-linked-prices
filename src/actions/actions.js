import {  NEW_LINK, UNLINK, ON_SELECT_LINKABLE, NEW_LINK_RULE } from './actionTypes'

const uid = () => Math.random().toString(34).slice(2);


export const unLink = (id) => {
  return {
    type: UNLINK,
    payload: id
  }
}

export const newLink = (form, newLinkRuleId) => {
  console.log('newLinkSub Action, newLinkRuleId:',newLinkRuleId);
  return {
    type: NEW_LINK,
    payload: {      
      linkedRoomPriceId: form.linkables,
      parentRoomPriceId: form.parents,
      ruleId: getNewLinkRuleId(),
      ruleType: form.ruletype,
      ruleValue: form.rulevalue
    },
    form
  }
}
// Link Rule Actions
let lastNewLRSIndex = -1;
function getNewLinkRuleId (){
  return lastNewLRSIndex--
}
/*
export const newLink  = (form) => {
  return function (dispatch) {
    let newLinkRuleId = getNewLinkRuleId();
    return dispatch(new newLinkSub(form, newLinkRuleId));
  }
}
*/
export const onSelectLinkable = (id) => {
  return {
    type: ON_SELECT_LINKABLE,
    payload: id
  }
}



