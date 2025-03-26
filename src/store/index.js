import {defineStore} from "pinia";

const useDemoStore = defineStore("demoStore", {
    state: () => {
        return {
            isLoading: false,

        }
    },

    getters: {
        getStoreItem: (state) => {
            return (entity) => state.state[entity];
        },
    },

    actions: {

    }

})

