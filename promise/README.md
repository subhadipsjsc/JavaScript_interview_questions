
# ---------------- Promise ----------------


A promise is an object that may produce a single value some time in the future.A promise may be in one of 3 possible states: fulfilled, rejected, or pending.

A pending promise can either be fulfilled with a value or rejected with a reason (error). we can chain promise with **promise.then()** and we can catch error by  **promise.catch()**


for multiple promise running Parallel , we can use **promise.all()**