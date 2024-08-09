/* eslint-disable no-unused-vars */
import React, { useState } from "react";
function OnChange() {
    
    const [name, setName] = useState("Kylaline");
    const [quantity, setQuantity] = useState(1);
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("");
   
   
        function handleNameChange(event) {
        setName(event.target.value);
    }

    function handleQuantityChange(event) {
        setQuantity(event.target.value);
    }

    function handleCommentChange(event) {
        setComment(event.target.value);
    }
    
    function handelePaymentChange(event) {
        setPayment(event.target.value);
    }

    function handelShippingChange(event) {
        setShipping(event.target.value);
    }

    return (<div>
        <input  value={name} onChange={handleNameChange} type="text"/>
        <p>Name: {name}</p>
        
        <input value={quantity} onChange={handleQuantityChange} type="number" />
        <p>Quantity: {quantity}</p>
        
        <textarea value={comment} onChange={handleCommentChange} placeholder="Enter delivery instructions" />
        <p>Comment: {comment}</p>
        
        <select value={payment} onChange={handelePaymentChange}>
            <option value="">Select an option</option>
            <option value="Visa">Visa</option>
            <option value="Mastercard">Mastercard</option>
            <option value="PayPal">PayPal</option>
            
        </select>
        <p>Payment: {payment}</p>

        <label htmlFor="">
            <input type="radio" value="Pick Up" checked={shipping === "Pick Up"}
            onChange={handelShippingChange} />
            Pick Up</label>
        <label htmlFor="">
            <input type="radio" value="Delivery"
                checked={shipping === "Delivery"}
            onChange={handelShippingChange}/>
            Delivery</label>
        <p>Shipping: {shipping}</p>
    </div>
    )
}
export default OnChange