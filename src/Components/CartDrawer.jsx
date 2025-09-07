import { useContext } from "react";
import { DataContext } from "../context/UserContext";
import { RxCross2 } from "react-icons/rx";
import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";

const CartDrawer = () => {
  const { cartItems, removeFromCart, updateQty, getTotal, setShowCart } =
    useContext(DataContext);

  // Subtotal (qty x price)
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  const deliveryFee = subtotal > 0 ? 50 : 0; // fixed delivery fee
  const total = subtotal + deliveryFee;

  return (
    <div className="w-[100%] md:w-[40vw] h-full fixed top-0 right-0 bg-white transition-all duration-500 shadow-xl p-6">
      {/* Header */}
      <header className="w-full flex justify-between items-center text-green-500 text-lg font-semibold">
        <span>Order Items</span>
        <RxCross2
          className="w-6 h-6 cursor-pointer hover:text-gray-600"
          onClick={() => setShowCart(false)}
        />
      </header>

      {/* Items */}
      <div className="mt-4 space-y-4 overflow-y-auto h-[60%]">
        {cartItems.length === 0 && <p>No items in cart</p>}
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between bg-gray-100 p-3 rounded-md"
          >
            <img
              src={item.food_image}
              alt={item.food_name}
              className="w-16 h-16 object-cover rounded"
            />
            <div className="flex-1 px-3">
              <h2 className="font-semibold">{item.food_name}</h2>
              <p>Price: {item.price * item.qty}</p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => updateQty(item.id, item.qty - 1)}
                className="px-2 py-1 bg-gray-300 rounded cursor-pointer hover:bg-green-300"
              >
                -
              </button>
              <span>{item.qty}</span>
              <button
                onClick={() => updateQty(item.id, item.qty + 1)}
                className="px-2 py-1 bg-gray-300 rounded cursor-pointer hover:bg-green-300"
              >
                +
              </button>
              <button
                onClick={() => {
                  removeFromCart(item.id);
                  toast.error(`${item.food_name} removed from cart`);
                }}
                className=" text-red-500 cursor-pointer text-2xl"
              >
                <MdDelete />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Summary Section */}
      <div className="mt- border-t pt-2">
        <div className="flex justify-between mb-2">
          <span className="text-gray-600">Subtotal</span>
          <span className="font-semibold">Taka {subtotal} /-</span>
        </div>
        <hr className="my-2" />
        <div className="flex justify-between mb-2">
          <span className="text-gray-600">Delivery Fee</span>
          <span className="font-semibold">Taka {deliveryFee} /-</span>
        </div>
        <hr className="my-2" />
        <div className="flex justify-between text-lg font-bold">
          <span>Total</span>
          <span>Taka {total} /-</span>
        </div>
        <button className="w-full mt-4 bg-green-500 text-white py-2 rounded-md">
          Place Order
        </button>
      </div>
    </div>
  );
};

export default CartDrawer;
