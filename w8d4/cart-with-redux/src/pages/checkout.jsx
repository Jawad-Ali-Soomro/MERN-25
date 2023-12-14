import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Checkout() {
  const globalState = useSelector((state) => state);
  return (
    <div>
      Checkout
      <hr />
      <table>
        <thead>
          <tr>
            <th> # </th>
            <th> name </th>
            <th> price </th>
            <th> quantity </th>
            <th> net price </th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(globalState.cart).map((itemKey, counterKey) => (
            <tr key={itemKey}>
              <td>{counterKey + 1}</td>
              <td>{globalState?.cart[itemKey]?.name}</td>
              <td>{globalState?.cart[itemKey]?.price}</td>
              <td>{globalState?.cart[itemKey]?.qty}</td>
              <td>
                {globalState?.cart[itemKey]?.qty *
                  globalState?.cart[itemKey]?.price}
              </td>
            </tr>
          ))}

          <tr className="border-t-orange-300 border-[1px]">
            <td colSpan={"4"}></td>
            <td>400</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
