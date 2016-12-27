import { NEW_LINK, UNLINK, ON_SELECT_LINKABLE, SET_ROOM_PRICES,SET_LINK_PRICE_RULE } from '../actions/actionTypes'
import {reducer as formReducer} from 'redux-form'
import {routerReducer } from 'react-router-redux'
import {hashHistory} from 'react-router'
import cloneDeep from 'lodash/cloneDeep'

/**
 * Main reducer that handles the list of room prices
 */
export const roomprices = (roomprices=[], action) => {  
  switch(action.type) { 
    case SET_ROOM_PRICES:                          
      return action.roomPrices    
           
    case NEW_LINK:            
      return cloneDeep(roomprices.map(rp => {
         let linkedRoomPriceId = parseInt(action.payload.linkedRoomPriceId) 
         let parentRoomPriceId = parseInt(action.payload.parentRoomPriceId)                          
         let linkRuleId = parseInt(action.payload.ruleId)                          
         if(rp.id === linkedRoomPriceId) {             
           rp.linkPriceId = parentRoomPriceId 
           rp.linkRuleId = linkRuleId
          return rp
        } else {
          return rp
        }
      }))     

    default:
      return roomprices
  }
}
/**
 * Main reducer that handles the list of link rules
 */
export const linkRules = (linkRules=[], action) => {  
  switch(action.type) {    
    case SET_LINK_PRICE_RULE:        
      linkRules = action.linkPriceRules  
      return  linkRules     
    case NEW_LINK:   
      var linkRule = {
          id: action.payload.ruleId,
          link_type: action.payload.ruleType,
          link_value: action.payload.ruleValue
        }
        linkRules = [ ...linkRules, linkRule ]         
      return linkRules

    default:
      return linkRules
  }
}

/**
 * Utility Map to search by room price id
 */
export const rpsMap = (rpsMap=[], action) => {
  switch(action.type) {    
  case SET_ROOM_PRICES:                              
    let rpsMapAux = new Map()
    action.roomPrices.map(rp => {rpsMapAux.set(rp.id, rp.shortDesc)})
    return rpsMapAux;
  default:
      return rpsMap
  }
}


/**
 * Use the formReducer plugin to reset the form after new link is created
 */
export const form = formReducer.plugin({
    newRowForm: (state, action) => { // <------ 'account' is name of form given to reduxForm()
      switch(action.type) {
        case NEW_LINK:
          return undefined       // <--- blow away form data
        default:
          return state
      }
    }
  })

export const routing = routerReducer