import React from 'react'

const EmptyItem = () => {
  return (
    <>
        <div className="mt-32">
        <div
          className="flex"
          style={{ padding: "0 20px", height: "100vh", width: "100%" }}
        >
          <div className="container mx-auto mt-5 flex flex-col justify-center gap-3 w-full h-1/2 bg-white shadow-lg empty-cart-container">
            <img
              src="/empty-cart.png"
              alt=""
              className="mx-auto w-24"
              style={{ width: "100px" }}
            />
            <div className="mx-auto font-bold text-center">
              Your cart is empty{" "}
              <p> You have not added any item to your cart </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default EmptyItem