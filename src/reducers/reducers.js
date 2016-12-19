import { NEW_LINK, UNLINK, ON_SELECT_LINKABLE } from '../actions/actionTypes'
import {reducer as formReducer} from 'redux-form'
import cloneDeep from 'lodash/cloneDeep'


const lrs = [
  {
      "id": 4,
      "link_type": "fixed",
      "link_value": 100
    },
   {
      "id": 18,
      "link_type": "percent",
      "link_value": -10
    },
   {
      "id": 460,
      "link_type": "percent",
      "link_value": 15
    }
]

const rps = [
    {
        "allowCancellation": true,
        "allowModification": false,
        "ccRequired": true,
        "dateLastValid": "3000-01-01",
        "dateStartValid": "2015-07-07",
        "defaultLanguage": "en",
        "defaultOpen": "open",
        "defaultPriceListRef": "a",
        "extraAdultPrice": 0,
        "extraChildPrice": 0,
        "guideId": 100,
        "hotelId": 2637,
        "id": 48203,
        "label": "",
        "linkPriceId": 48202,
        "linkRuleId": 4,
        "listingPriority": 11,
        "longDescription": "<p>Family room 2 adults + up to 2 children, fully equipped with double bed or twin beds (upon availability, please, indicate this in Special Remarks).</p>\r\n<p>Breakfast is NOT included in this rate.</p>\r\n<p><strong>The hotel will debit from your credit card the 100% of the reservation same day of booking.</strong></p>",
        "maxExtraBedsInRoom": 0,
        "mealPlanMandatory": false,
        "parentId": 0,
        "priceGroup": "3",
        "priceGroups": [
            "1",
            "2"
        ],
        "roomGroupId": 13178,
        "roomType": 20,
        "shortDesc": "Family Suite - Non Refundable",
        "state": "Live",
        "translations": {},
        "variationGroupId": 0
    },
    {
        "allowCancellation": true,
        "allowModification": false,
        "ccRequired": true,
        "dateLastValid": "3000-01-01",
        "dateStartValid": "2015-07-07",
        "defaultLanguage": "en",
        "defaultOpen": "open",
        "defaultPriceListRef": "a",
        "extraAdultPrice": 0,
        "extraChildPrice": 0,
        "guideId": 100,
        "hotelId": 2637,
        "id": 48193,
        "label": "",
        "linkPriceId": 0,
        "linkRuleId": 0,
        "listingPriority": -3,
        "longDescription": "<p>Standard room 1 person fully equipped with double bed or twin beds (upon availability, please, indicate this in Special Remarks).</p>\r\n<p>Breakfast is NOT included in this rate.</p><p><strong>Free cancellation.</strong></p>",
        "maxExtraBedsInRoom": 0,
        "mealPlanMandatory": false,
        "parentId": 0,
        "priceGroup": "3",
        "priceGroups": [
            "1",
            "2"
        ],
        "roomGroupId": 13175,
        "roomType": 1,
        "shortDesc": "Single Room - Non Standard",
        "state": "Live",
        "translations": {},
        "variationGroupId": 0
    },
    {
        "allowCancellation": true,
        "allowModification": false,
        "ccRequired": true,
        "dateLastValid": "3000-01-01",
        "dateStartValid": "2015-07-07",
        "defaultLanguage": "en",
        "defaultOpen": "open",
        "defaultPriceListRef": "a",
        "extraAdultPrice": 0,
        "extraChildPrice": 0,
        "guideId": 100,
        "hotelId": 2637,
        "id": 48198,
        "label": "",
        "linkPriceId": 48196,
        "linkRuleId": 18,
        "listingPriority": 6,
        "longDescription": "<p>Standard room 2 people fully equipped with double bed or twin beds (upon availability, please, indicate this in Special Remarks).</p>\r\n<p>Breakfast is included in this rate.</p><p><strong>Free cancellation.</strong></p>",
        "maxExtraBedsInRoom": 0,
        "mealPlanMandatory": false,
        "parentId": 0,
        "priceGroup": "3",
        "priceGroups": [
            "1",
            "2"
        ],
        "roomGroupId": 13176,
        "roomType": 2,
        "shortDesc": "Standard Double Room - Bed And Breakfast",
        "state": "Live",
        "translations": {},
        "variationGroupId": 0
    },
    {
        "allowCancellation": true,
        "allowModification": false,
        "ccRequired": true,
        "dateLastValid": "3000-01-01",
        "dateStartValid": "2015-07-07",
        "defaultLanguage": "en",
        "defaultOpen": "open",
        "defaultPriceListRef": "a",
        "extraAdultPrice": 0,
        "extraChildPrice": 0,
        "guideId": 100,
        "hotelId": 2637,
        "id": 48199,
        "label": "",
        "linkPriceId": 0,
        "linkRuleId": 0,
        "listingPriority": 7,
        "longDescription": "<p>Deluxe room 2 people fully equipped with double bed or twin beds (upon availability, please, indicate this in Special Remarks).</p>\r\n<p>Breakfast is NOT included in this rate.</p><p><strong>Free cancellation.</strong></p>",
        "maxExtraBedsInRoom": 0,
        "mealPlanMandatory": false,
        "parentId": 0,
        "priceGroup": "3",
        "priceGroups": [
            "1",
            "2"
        ],
        "roomGroupId": 13177,
        "roomType": 2,
        "shortDesc": "Deluxe Double Room - Room Only",
        "state": "Live",
        "translations": {},
        "variationGroupId": 0
    },
    {
        "allowCancellation": true,
        "allowModification": false,
        "ccRequired": true,
        "dateLastValid": "3000-01-01",
        "dateStartValid": "2015-07-07",
        "defaultLanguage": "en",
        "defaultOpen": "open",
        "defaultPriceListRef": "a",
        "extraAdultPrice": 0,
        "extraChildPrice": 0,
        "guideId": 100,
        "hotelId": 2637,
        "id": 48204,
        "label": "",
        "linkPriceId": 48202,
        "linkRuleId": 18,
        "listingPriority": 12,
        "longDescription": "<p>Family room 2 adults + up to 2 children, fully equipped with double bed or twin beds (upon availability, please, indicate this in Special Remarks).</p>\r\n<p>Breakfast is included in this rate.</p><p><strong>Free cancellation.</strong></p>",
        "maxExtraBedsInRoom": 0,
        "mealPlanMandatory": false,
        "parentId": 0,
        "priceGroup": "3",
        "priceGroups": [
            "1",
            "2"
        ],
        "roomGroupId": 13178,
        "roomType": 20,
        "shortDesc": "Family Suite - Bed & Breakfast",
        "state": "Live",
        "translations": {},
        "variationGroupId": 0
    },
    {
        "allowCancellation": true,
        "allowModification": false,
        "ccRequired": true,
        "dateLastValid": "3000-01-01",
        "dateStartValid": "2015-07-07",
        "defaultLanguage": "en",
        "defaultOpen": "open",
        "defaultPriceListRef": "a",
        "extraAdultPrice": 0,
        "extraChildPrice": 0,
        "guideId": 100,
        "hotelId": 2637,
        "id": 48201,
        "label": "",
        "linkPriceId": 48199,
        "linkRuleId": 18,
        "listingPriority": 9,
        "longDescription": "<p>Deluxe room 2 people fully equipped with double bed or twin beds (upon availability, please, indicate this in Special Remarks).</p>\r\n<p>Breakfast is included in this rate.</p><p><strong>Free cancellation.</strong></p>",
        "maxExtraBedsInRoom": 0,
        "mealPlanMandatory": false,
        "parentId": 0,
        "priceGroup": "3",
        "priceGroups": [
            "1",
            "2"
        ],
        "roomGroupId": 13177,
        "roomType": 2,
        "shortDesc": "Deluxe Double Room - Bed And Breakfast",
        "state": "Live",
        "translations": {},
        "variationGroupId": 0
    },
    {
        "allowCancellation": true,
        "allowModification": false,
        "ccRequired": true,
        "dateLastValid": "3000-01-01",
        "dateStartValid": "2015-07-07",
        "defaultLanguage": "en",
        "defaultOpen": "open",
        "defaultPriceListRef": "a",
        "extraAdultPrice": 0,
        "extraChildPrice": 0,
        "guideId": 100,
        "hotelId": 2637,
        "id": 48202,
        "label": "",
        "linkPriceId": 0,
        "linkRuleId": 0,
        "listingPriority": 10,
        "longDescription": "<p>Family room 2 adults + up to 2 children, fully equipped with double bed or twin beds (upon availability, please, indicate this in Special Remarks).</p>\r\n<p>Breakfast is NOT included in this rate.</p><p><strong>Free cancellation.</strong></p>",
        "maxExtraBedsInRoom": 0,
        "mealPlanMandatory": false,
        "parentId": 0,
        "priceGroup": "3",
        "priceGroups": [
            "1",
            "2"
        ],
        "roomGroupId": 13178,
        "roomType": 20,
        "shortDesc": "Family Suite - Room Only",
        "state": "Live",
        "translations": {},
        "variationGroupId": 0
    },
    {
        "allowCancellation": true,
        "allowModification": false,
        "ccRequired": true,
        "dateLastValid": "3000-01-01",
        "dateStartValid": "2015-07-07",
        "defaultLanguage": "en",
        "defaultOpen": "open",
        "defaultPriceListRef": "a",
        "extraAdultPrice": 0,
        "extraChildPrice": 0,
        "guideId": 100,
        "hotelId": 2637,
        "id": 48200,
        "label": "",
        "linkPriceId": 48199,
        "linkRuleId": 4,
        "listingPriority": 8,
        "longDescription": "<p>Deluxe room 2 people fully equipped with double bed or twin beds (upon availability, please, indicate this in Special Remarks).</p>\r\n<p>Breakfast is NOT included in this rate.</p>\r\n<p><strong>The hotel will debit from your credit card the 100% of the reservation same day of booking.</strong></p>",
        "maxExtraBedsInRoom": 0,
        "mealPlanMandatory": false,
        "parentId": 0,
        "priceGroup": "3",
        "priceGroups": [
            "1",
            "2"
        ],
        "roomGroupId": 13177,
        "roomType": 2,
        "shortDesc": "Deluxe Double Room - Non Refundable",
        "state": "Live",
        "translations": {},
        "variationGroupId": 0
    },
    {
        "allowCancellation": true,
        "allowModification": false,
        "ccRequired": true,
        "dateLastValid": "3000-01-01",
        "dateStartValid": "2015-07-07",
        "defaultLanguage": "en",
        "defaultOpen": "open",
        "defaultPriceListRef": "a",
        "extraAdultPrice": 0,
        "extraChildPrice": 0,
        "guideId": 100,
        "hotelId": 2637,
        "id": 48194,
        "label": "",
        "linkPriceId": 48193,
        "linkRuleId": 4,
        "listingPriority": 2,
        "longDescription": "<p>Standard room 1 person fully equipped with double bed or twin beds (upon availability, please, indicate this in Special Remarks).</p>\r\n<p>Breakfast is NOT included in this rate.</p>\r\n<p><strong>The hotel will debit from your credit card the 100% of the reservation same day of booking.</strong></p>",
        "maxExtraBedsInRoom": 0,
        "mealPlanMandatory": false,
        "parentId": 0,
        "priceGroup": "3",
        "priceGroups": [
            "1",
            "2"
        ],
        "roomGroupId": 13175,
        "roomType": 1,
        "shortDesc": "Single Room - Non Refundable",
        "state": "Live",
        "translations": {},
        "variationGroupId": 0
    },
    {
        "allowCancellation": true,
        "allowModification": false,
        "ccRequired": true,
        "dateLastValid": "3000-01-01",
        "dateStartValid": "2015-07-07",
        "defaultLanguage": "en",
        "defaultOpen": "open",
        "defaultPriceListRef": "a",
        "extraAdultPrice": 0,
        "extraChildPrice": 0,
        "guideId": 100,
        "hotelId": 2637,
        "id": 48197,
        "label": "",
        "linkPriceId": 48196,
        "linkRuleId": 4,
        "listingPriority": 5,
        "longDescription": "<p>Standard room 2 people fully equipped with double bed or twin beds (upon availability, please, indicate this in Special Remarks).</p>\r\n<p>Breakfast is NOT included in this rate.</p>\r\n<p><strong>The hotel will debit from your credit card the 100% of the reservation same day of booking.</strong></p>",
        "maxExtraBedsInRoom": 0,
        "mealPlanMandatory": false,
        "parentId": 0,
        "priceGroup": "3",
        "priceGroups": [
            "1",
            "2"
        ],
        "roomGroupId": 13176,
        "roomType": 2,
        "shortDesc": "Standard Double Room - Non Refundable",
        "state": "Live",
        "translations": {},
        "variationGroupId": 0
    },
    {
        "allowCancellation": true,
        "allowModification": false,
        "ccRequired": true,
        "dateLastValid": "3000-01-01",
        "dateStartValid": "2015-07-07",
        "defaultLanguage": "en",
        "defaultOpen": "open",
        "defaultPriceListRef": "a",
        "extraAdultPrice": 0,
        "extraChildPrice": 0,
        "guideId": 100,
        "hotelId": 2637,
        "id": 48196,
        "label": "",
        "linkPriceId": 0,
        "linkRuleId": 0,
        "listingPriority": 4,
        "longDescription": "<p>Standard room 2 people fully equipped with double bed or twin beds (upon availability, please, indicate this in Special Remarks).</p>\r\n<p>Breakfast is NOT included in this rate.</p><p><strong>Free cancellation.</strong></p>",
        "maxExtraBedsInRoom": 0,
        "mealPlanMandatory": false,
        "parentId": 0,
        "priceGroup": "3",
        "priceGroups": [
            "1",
            "2"
        ],
        "roomGroupId": 13176,
        "roomType": 2,
        "shortDesc": "Standard Double Room - Room Only",
        "state": "Live",
        "translations": {},
        "variationGroupId": 0
    },
    {
        "allowCancellation": true,
        "allowModification": false,
        "ccRequired": true,
        "dateLastValid": "3000-01-01",
        "dateStartValid": "2015-07-07",
        "defaultLanguage": "en",
        "defaultOpen": "open",
        "defaultPriceListRef": "a",
        "extraAdultPrice": 0,
        "extraChildPrice": 0,
        "guideId": 100,
        "hotelId": 2637,
        "id": 48195,
        "label": "",
        "linkPriceId": 48193,
        "linkRuleId": 460,
        "listingPriority": 3,
        "longDescription": "<p>Standard room 1 person fully equipped with double bed or twin beds (upon availability, please, indicate this in Special Remarks).</p>\r\n<p>Breakfast is included in this rate.</p><p><strong>Free cancellation.</strong></p>",
        "maxExtraBedsInRoom": 0,
        "mealPlanMandatory": false,
        "parentId": 0,
        "priceGroup": "3",
        "priceGroups": [
            "1",
            "2"
        ],
        "roomGroupId": 13175,
        "roomType": 1,
        "shortDesc": "Single Room - Bed And Breakfast",
        "state": "Live",
        "translations": {},
        "variationGroupId": 0
    }
]



const uid = () => Math.random().toString(34).slice(2);


/**
 * Main reducer that handles the list of room prices
 */
export const roomprices = (roomprices=rps, action) => {  
  console.log('Reducers',action)
  switch(action.type) { 
    case UNLINK:                          
      return cloneDeep(roomprices.map(rp => {
         if(rp.id === action.payload) {             
           rp.linkPriceId = 0
          return rp
        } else {
          return rp
        }
      }))
      
    case NEW_LINK:            
      return cloneDeep(roomprices.map(rp => {
         let linkedRoomPriceId = parseInt(action.payload.parentRoomPriceId)                          
         if(rp.id === linkedRoomPriceId) {             
           rp.linkPriceId = linkedRoomPriceId      
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
export const linkRules = (linkRules=lrs, action) => {  
  return  linkRules  
}

/**
 * Utility Map to search by room price id
 */
export const rpsMap = (rpsMap, action) => {  
  if (!rpsMap){
    //console.log('Rebuilding rpsMap')
    let rpsMapAux = new Map()
    rps.map(rp => {rpsMapAux.set(rp.id, rp.shortDesc)})  
    return rpsMapAux;
  }else{
    //console.log('Just return rpsMap',rpsMap)
    return rpsMap  
  }
  
}


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