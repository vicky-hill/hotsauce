export const getCartItemInfo = (items, products) => {
    return items.map(item => ({
        ...item,
        ...products.find(product => product._id === item.productID)
    }))
}



