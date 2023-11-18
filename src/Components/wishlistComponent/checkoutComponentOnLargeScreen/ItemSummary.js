import React from 'react'

const ItemSummary = ({wishlist}) => {
  return (
    <>
        <div className="flex justify-between my-auto">
              <h2 className="text-xl font-semibold mb-4">Cart Summary</h2>
              <h3 className="font-bold">
                <span>{wishlist.length}</span>{" "}
                {wishlist.length > 1 ? <span>Items</span> : <span>Item</span>}
              </h3>
            </div>
    </>
  )
}

export default ItemSummary