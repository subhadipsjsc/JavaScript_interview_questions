
# ---------------- callback ----------------


In JavaScript, functions are objects (hence the designation of first-class object) so one can pass functions to other functions as variables.
Node.js, being an asynchronous platform, doesn’t wait around for things like file I/O , network calls , or other time taking tasks  to finish , so Node.js uses callbacks.A callback is a function called at the completion of a given task. this prevents any blocking, and allows other code to be run in the meantime.