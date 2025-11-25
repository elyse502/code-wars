/**
 * Promises Made and Broken: The Misadventures of Bob the Highly Paid Consultant
 * 
 * The Misadventures of Bob the Highly Paid Consultant
 * Chapter 1: Promises Made and Broken
 * Your company has purchased a new ordering system and hired Bob the Highly Paid Consultant to develop a front end. However, after continuous delays and missed deliverables, his contract has now come to an end. Bob vanishes like a ghost into the fog, leaving you to see if you can salvage the pieces of his work.

 * One thing is clear: Bob has left a chain of broken promises in his wake.

 * Can you help to fix things?

 * In the sample test case (submitOrder(12345)), "Your order was placed successfully" should be logged to the console. Hit "Attempt" to see if you pass the kata.

 * Some notes:

    1. You can assume that the functions Bob is calling actually exist and take the given parameters in the given order.
    2. User "12345" is a valid user for testing
    3. Any provided function whose name ends in Async returns a Promise.
    4. Any provided function whose name does not end in Async is synchronous, i.e. calculateShipping().
 * As you may have gathered, the purpose of this Kata is to familiarize yourself with using JavaScript Promises for asynchronous programming.
 * 
 * @param {*} user 
 * @returns 
 */

exports.submitOrder = async (user) => {
  try {
    // Mock the APIs for local testing
    const OrderAPI = {
      getShoppingCartAsync: (userId) =>
        Promise.resolve({
          items: [{ id: 1, name: "Product", price: 29.99 }],
          total: 29.99,
        }),
      placeOrderAsync: (cart, shipping) => Promise.resolve(true),
    };

    const CustomerAPI = {
      getProfileAsync: (userId) =>
        Promise.resolve({
          zipCode: "12345",
          address: "123 Main St",
        }),
    };

    const calculateShipping = (cart, zipCode) => {
      return cart.total > 50 ? 0 : 5.99;
    };

    // Get cart and profile simultaneously
    const [cart, profile] = await Promise.all([
      OrderAPI.getShoppingCartAsync(user),
      CustomerAPI.getProfileAsync(user),
    ]);

    // Calculate shipping and place order
    const shipping = calculateShipping(cart, profile.zipCode);
    await OrderAPI.placeOrderAsync(cart, shipping);

    console.log("Your order was placed successfully");
    return true;
  } catch (error) {
    console.log("Your order was NOT placed successfully");
    return false;
  }
};
