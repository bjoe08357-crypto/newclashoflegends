'use strict';

// Runtime shim to avoid Node 22 macOS uv_interface_addresses crash in dev.
// If os.networkInterfaces throws, return a localhost-only interface list so
// frameworks (like Next.js) can bind and continue.

const os = require('os');

const originalNetworkInterfaces = os.networkInterfaces;

os.networkInterfaces = function safeNetworkInterfaces() {
  try {
    return originalNetworkInterfaces.call(os);
  } catch (err) {
    return {
      lo0: [
        { address: '127.0.0.1', family: 'IPv4', internal: true },
        { address: '::1', family: 'IPv6', internal: true, scopeid: 0 }
      ]
    };
  }
};

module.exports = {};


