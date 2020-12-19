
# ---------------- Event loop ----------------

Nodejs is an event-based platform. This means that everything that happens in Node is the reaction to an event.the reason Node can essentially be "single threaded" while still allowing an arbitrary number of operations to be handled in the background is due to its 'event loop'.

we all know these functions : setTimeout, http.get or fs.readFile. Neither of these things can be found in V8's code, but they are available in the C++ API of Node.js called Libuv.Libuv which provides a mechanism called an event loop and  a special thread pool called the libuv thread pool. means even though V8 is single-threaded, the underlying C++ API of Node isn't (libuv thread pool of libuv ).

Libuv initiates a thread pool of 4 threads that it uses to offload synchronous operations to. In doing this, Libuv ensures that our application does not get blocked. we can increase this thread pool to 1024 threads by setting the **UV_THREADPOOL_SIZE** Node variable. 

the event loop can automatically ofload heady tasks to these libuv thread pools. these happens behind the scene automaticaly.Then later when those threads finish their execution or throws an error they call their callbacks and that is how the event loop is aware of the fact that the execution of a worker thread is completed.