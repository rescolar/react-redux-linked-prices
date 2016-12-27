import {  NEW_LINK, UNLINK, ON_SELECT_LINKABLE, NEW_LINK_RULE, SET_ROOM_PRICES,SET_LINK_PRICE_RULE } from './actionTypes'
import RoomPrice from 'ba-common-interface-js/com/bookassist/model/RoomPrice'
import LinkPrice from 'ba-common-interface-js/com/bookassist/model/LinkPrice'
import Restables from 'ba-common-interface-js/com/bookassist/model/Restables'
import Restable from 'ba-common-interface-js/com/bookassist/model/Restable'

const uid = () => Math.random().toString(34).slice(2);

/**
 * Action to unlink
 */
export const unLink = (id) => {
  return {
    type: UNLINK,
    payload: id
  }
}

/**
 * Action to create a new linked room room_price
 */
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
/**
 * Get internal linkRuleId to have an id for new entries
 */
let lastNewLRSIndex = -1;
function getNewLinkRuleId (){
  return lastNewLRSIndex--
}
/**
 * Action to mark the room price as selected to be a linked
 */
export const onSelectLinkable = (id) => {
  return {
    type: ON_SELECT_LINKABLE,
    payload: id,
    id
  }
}


export const setRoomPrices = (roomPrices) => {
  return {
    type: SET_ROOM_PRICES,
    roomPrices
  }
}
export const setLinkPriceRules = (linkPriceRules) => {
  console.log ('On Action setLinkPriceRules', linkPriceRules)
  return {
    type: SET_LINK_PRICE_RULE,
    linkPriceRules: linkPriceRules
  }
}
/**
 * Load the room prices from url
 */
export const loadRoomPrices = (guideId, hotelId) => {  
  const restables = new Restables(RoomPrice)  
  return (dispatch) => {
    //dispatch(requestRoomPrices())
    restables.get({
        url: `http://bassist.milocalhost.com/rest/report/room_prices/${hotelId}/${guideId}`         
    })      
    .then((roomPrices) => {  
      console.log('>>>RoomPrices',roomPrices)          
      roomPrices = roomPrices.toObject()
      let restableArray = []   
      restableArray = roomPrices.filter(rp => rp.linkRuleId > 0).map(rp => {              
      const restable = new Restable(LinkPrice)
      return restable.get({        
        url: `http://bassist.milocalhost.com/rest/report/link_price_rule/${rp.linkRuleId}`
        })            
      })
      return Promise.all (restableArray)
      .then((restableArray) =>{
        console.log('before dispatch lrs: ', restableArray)
        let linkPriceRules = []
        restableArray.map(lp => {   
          let lpObj = lp.toObject()          
          linkPriceRules = [ ...linkPriceRules,  {id: lpObj.d, type: lpObj.ype, value: lpObj.alue } ]           
          })
        dispatch(setLinkPriceRules(linkPriceRules))                
        dispatch(setRoomPrices(roomPrices))      
      })
    })    
    .catch( function(error) {
      console.log('Err loadRoomPrices: ' + error.message);
      return error //hashHistory.push(`/error/${guideId}/${hotelId}`);
    })
  } 
}

export const loadLinkPrice = (roomPrices, dispatch) => {  
  console.log('Action loadLinkPrice: ',roomPrices)    
  let restableArray = []
    //dispatch(requestRoomPrices())
  restableArray = roomPrices.filter(rp => rp.linkRuleId > 0).map(rp => {              
      const restable = new Restable(LinkPrice)
      return restable.get({        
        url: `http://bassist.milocalhost.com/rest/report/link_price_rule/${rp.linkRuleId}`
        })            
      })
  //console.log ('restableArray=',restableArray)        
  Promise.all(restableArray)
    .then((linkPrice) => {
        //console.log('before dispatch',linkPrice)    
        let linkPriceRules = []
        linkPrice.map(lp => {   
          let lpObj = lp.toObject()          
          linkPriceRules = [ ...linkPriceRules,  {id: lpObj.d, type: lpObj.ype, value: lpObj.alue } ]           
          })
        dispatch(setLinkPriceRules(linkPriceRules))
    })
    .catch( function(error) {
      console.log('Err loadLinkPrice: ' + error.message);
      return error //hashHistory.push(`/error/${guideId}/${hotelId}`);
    })     
}


/*

(linkPrice) => {
        console.log('before dispatch',linkPrice)    
        let linkPriceRules = []
        linkPrice.map(lp => {   
          let lpObj = lp.toObject()          
          linkPriceRules = [ ...linkPriceRules,  {id: lpObj.d, type: lpObj.ype, value: lpObj.alue } ]           
          })
        dispatch(setLinkPriceRules(linkPriceRules))
    })
    .catch( function(error) {
      console.log('Err loadLinkPrice: ' + error.message);
      return error //hashHistory.push(`/error/${guideId}/${hotelId}`);
    })

    */
