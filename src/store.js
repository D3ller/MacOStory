import {reactive, ref} from 'vue'
export const store = reactive({
seePhoto: false,
seeLocalizations: ref(false),
Author: 'Arthur',
Message: 'C\'était vraiment une soirée de dingue hier !',
    EmmaSlice: 0,
    ArthurSlice: 0,
    EmmaWait: false,


    sendFirstMessage() {

    },

    updateEmmaSlice() {
        this.EmmaSlice = this.EmmaSlice + 1
    },

    updateArthurSlice() {
        this.ArthurSlice = this.ArthurSlice + 1
    }


})

export default store;