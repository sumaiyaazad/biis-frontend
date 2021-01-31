import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
    namespaced:true,
    state:{
        flagSignIn:false,
        userId:"",
        termId:"",
        userName:"",
        token:"",
        dept: "",
        currentLevel:"",
        currentTerm:"",
        currentSession:"",
        hallName:"",
        hallStatus:"",
        contact_person_name:"",
        contact_person_number:"",
        adviserId:"",
        adviserName:"",
        adviserDesignation: "",
        adviserDept:"",
        phone:"",
        email:"",
        address:"",
        spinnerFlag:false,
        registration:false,
        courses:[],
        total_credit_hours:"",
        registered_credit_hours:"",
        credit_hours_upto_this_term:"",
    },
    mutations,
    actions,
    getters
};