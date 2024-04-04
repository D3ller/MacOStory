import {reactive, ref} from 'vue'
export const store = reactive({
seePhoto: false,
seeLocalizations: ref(false),
Author: 'Arthur',
Message: 'C\'était vraiment une soirée de dingue hier !',
Player: [],


    sendFirstMessage() {

    }
})

export default store;