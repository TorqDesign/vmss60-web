export const state = () => ({
    list: []
});

export const mutations = {
    add(state, item) {
        state.list.push(item)
    },
    remove(state, item) {
        state.list.splice(state.list.indexOf(item), 1)
    },
    empty(state) {
        state.list = []
    }
};


// export const getters = {
//     cartItems(state, getters, rootState) {
//         let final = [];
//         for (let obj in state.list) {
//             final.push({
//                 name: obj.name,
//                 price: obj.price,
//                 description: obj.description,
//                 image: obj.image
//             })
//         }
//         return final;
//     }
// }