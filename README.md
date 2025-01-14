# Express.js Server Crash: Synchronous Database Operation

This repository demonstrates a common error in Express.js applications: blocking the event loop with a synchronous database operation.  The server becomes unresponsive and crashes when a synchronous function is used to fetch data within a route handler.

## The Problem

The `fetchDataFromDatabase` function simulates a long-running database query that is synchronous. This blocks the Express.js event loop, preventing it from handling other requests.  This leads to unresponsive servers and potential crashes.

## The Solution

The solution involves using asynchronous operations (promises or async/await) to perform database queries.  This allows the event loop to remain responsive while waiting for the database operation to complete.