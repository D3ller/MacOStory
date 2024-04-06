import {reactive, ref} from 'vue'
export const store = reactive({
seePhoto: false,
seeLocalizations: ref(false),
Author: 'Arthur',
Message: 'C\'était vraiment une soirée de dingue hier !',
    EmmaSlice: 3,
    ArthurSlice: 5,
    EmmaWait: false,
    Image: false,
    App: false,
    Localize: false,
    ArthurNewMsg: false,
    EmmaNewMsg: false,


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