import React from "react";
import products from "../data/Products.json";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  ADD_TO_CART,
  CLEAR_CART,
  DECREMENT_FROM_CART,
  INCREMENT_TO_CART,
  REMOVE_FROM_CART,
} from "../redux/actions";
export default function Products() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const globalState = useSelector((state) => state);
  return (
    <div>
      <div className="flex justify-around ">
        Products Total sum :
        {Object.keys(globalState.cart).reduce(
          (prevValue, currentItem) =>
            prevValue + globalState.cart[currentItem].qty,
          0
        )}
        <div className="flex">
          <span
            className="cursor-pointer "
            onClick={() => {
              if (Object.keys(globalState.cart).length > 0) {
                navigate("checkout");
              } else alert("please purchase something first");
            }}
          >
            <div className="relative">
              <div className="absolute top-[-2px] right-[-2px] text-[8px]  bg-[dodgerblue] text-white p-[1px] rounded-full">
                {Object.keys(globalState.cart).length}
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
            </div>
          </span>

          <span
            className="cursor-pointer transition-transform transform hover:scale-110"
            onClick={() => {
              dispatch({
                type: CLEAR_CART,
              });
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-red-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </span>
        </div>
      </div>
      {/*   Cart: {JSON.stringify(globalState.cart)} */}
      <div className="flex flex-wrap gap-4 p-2">
        {products.map((productItem) => (
          <div
            className="bg-lime-200 shadow-md w-[150px] transform hover:scale-105 transition-transform ease-in-out duration-300"
            key={productItem.id}
          >
            <div className="flex justify-center items-center">
              <img
                className="h-20 w-20"
                src={`https://api.dicebear.com/7.x/icons/svg?seed=${productItem.name}`}
                alt="avatar"
              />
            </div>
            <div className="text-center">{productItem.name}</div>
            <div className="text-center">{productItem.price} $</div>
            <div className="text-center">
              Available :{" "}
              {productItem.availability -
                (globalState.cart[productItem.id]?.qty || 0)}
            </div>
            <div className="text-center">
              Qty : {globalState.cart[productItem.id]?.qty || 0}
            </div>
            <div className="flex justify-around">
              <span
                className="cursor-pointer transition-transform transform hover:scale-110"
                onClick={() => {
                  if (globalState.cart[productItem.id]?.qty) {
                    if (
                      globalState.cart[productItem.id]?.qty -
                        productItem.availability ==
                      0
                    ) {
                      alert("Out of stock");
                      return;
                    }
                    dispatch({
                      type: INCREMENT_TO_CART,
                      payload: { id: productItem.id },
                    });
                  } else
                    dispatch({
                      type: ADD_TO_CART,
                      payload: {
                        id: productItem.id,
                        name: productItem.name,
                        price: productItem.price,
                      },
                    });
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
              </span>
              {globalState.cart[productItem.id]?.qty && (
                <React.Fragment>
                  <span
                    className="cursor-pointer transition-transform transform hover:scale-110"
                    onClick={() => {
                      dispatch({
                        type: INCREMENT_TO_CART,
                        payload: { id: productItem.id },
                      });
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </span>
                  <span
                    className="cursor-pointer transition-transform transform hover:scale-110"
                    onClick={() => {
                      dispatch({
                        type: DECREMENT_FROM_CART,
                        payload: { id: productItem.id },
                      });
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </span>
                  <span
                    className="cursor-pointer transition-transform transform hover:scale-110"
                    onClick={() => {
                      dispatch({
                        type: REMOVE_FROM_CART,
                        payload: {
                          id: productItem.id,
                        },
                      });
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 text-red-400"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                  </span>
                </React.Fragment>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
