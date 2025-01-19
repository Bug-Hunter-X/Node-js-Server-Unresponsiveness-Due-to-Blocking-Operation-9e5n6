# Node.js Server Unresponsiveness Due to Blocking Operation

This repository demonstrates a common issue in Node.js applications: server unresponsiveness caused by a long-running synchronous operation within the request handler.  The bug.js file shows the problematic code, which blocks the event loop and prevents the server from handling subsequent requests.

The bugSolution.js file offers a solution by offloading the long-running task using asynchronous operations to prevent blocking the event loop.  This ensures the server remains responsive to incoming requests even when performing computationally expensive operations.