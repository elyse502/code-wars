/**
 * Promise State
 * 
 * As you know, a promise is in one of these states: pending, fulfilled, rejected.

 * Implement the async function getState that determines a state of a promise.

    const p = Promise.resolve();
    const state = await getState(p); // === "fulfilled"

    const p = Promise.reject();
    const state = await getState(p); // === "rejected"

    const p = new Promise(() => {});
    const state = await getState(p); // === "pending"
 * 
 * @param {*} promise
 * @returns {Promise<'pending' | 'fulfilled' | 'rejected'>}
 */

exports.getState = async (promise) => {
  // Input validation
  if (!promise || typeof promise.then !== "function") {
    throw new TypeError("Expected a Promise");
  }

  // Create tracking object
  const result = { status: "pending" };

  // Attach handlers
  promise.then(
    () => {
      result.status = "fulfilled";
    },
    () => {
      result.status = "rejected";
    }
  );

  // Wait for microtasks to complete
  await Promise.resolve();

  return result.status;

  // Alternative approach using Promise.race
  /*Promise.race([promise, 'pending'])
         .then(val => val === 'pending' ? 'pending' : 'fulfilled')
         .catch(() => 'rejected'); */
};
