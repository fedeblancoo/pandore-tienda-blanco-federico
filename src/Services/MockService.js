import products from "../data/data";

function getItems (idCategory) {
    return new Promise((resolve) => {
        if (idCategory === undefined){
            setTimeout (() => {
                resolve(products)
            }, 2000);
        }
        else {
            let requestedItem = products.filter ((e) => e.category === idCategory)

            setTimeout (() => {
                resolve(requestedItem)
            }, 1000);

        }
    });
}

export function getSingleItem (id) {
    return new Promise((resolve) => {
        let requestedItem = products.find ((e) => e.id === Number(id))

        setTimeout (() => {
            resolve(requestedItem)
        }, 1000);
    });
}

export default getItems;
