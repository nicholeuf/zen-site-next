# Docker Debugging for Next.js

This guide explains how to debug your Next.js app running in Docker using the Node.js inspector and VS Code or Chrome DevTools.

## Quick Start

1. **Start the app in debug mode:**
   
   The Docker setup exposes port 9229 for debugging. Use:
   
   ```sh
   docker compose up
   ```
   
   The app will start with the Node.js inspector listening on port 9229.

2. **Attach your debugger:**
   - **VS Code:**
     - Open the Run & Debug panel.
     - Add a new configuration:
       ```json
       {
         "type": "node",
         "request": "attach",
         "name": "Attach to Docker Next.js",
         "address": "localhost",
         "port": 9229,
         "restart": true,
         "protocol": "inspector"
       }
       ```
     - Start debugging.
   - **Chrome DevTools:**
     - Open `chrome://inspect` in Chrome.
     - Click "Configure" and ensure `localhost:9229` is listed.
     - Click "Open dedicated DevTools for Node".

3. **Breakpoints and Debugging:**
   - Set breakpoints in your code as usual.
   - The debugger will pause execution when breakpoints are hit.

## Notes
- The debug port is fixed at 9229 for simplicity and reliability.
- If you need to change the port, update the Dockerfile, docker-compose.yaml, and your debugger config accordingly.
- Turbopack/Next.js may spawn multiple workers; each may use a different port (auto-incremented). Attach to the main process for most debugging needs.

## Troubleshooting
- If you see "address already in use" errors, ensure no other process is using port 9229 on your host.
- If breakpoints are not hit, check that source maps are enabled and your editor is mapping to the correct files.

---

## Reference: Next.js Docker Debugging Discussion

See [Next.js GitHub Discussion #78434](https://github.com/vercel/next.js/discussions/78434) for community insights and troubleshooting tips on debugging Next.js with Docker and Turbopack.

**Key points from the discussion:**
- Use `node --inspect=0.0.0.0:9229 node_modules/.bin/next dev` to start the debugger in Docker, rather than setting `NODE_OPTIONS` globally.
- Only the main process should be started with the inspector; worker processes will auto-increment their debug ports.
- Avoid setting `NODE_OPTIONS` globally to prevent port conflicts.
- Expose and map port 9229 in Docker and Docker Compose for debugger access.
- Attach your debugger (VS Code, Chrome DevTools, etc.) to port 9229 on your host.

This project follows the recommended approach from that discussion for reliable and conflict-free debugging.

---

## Note on Debug Script

In this project, the working debug script is:

```sh
NODE_OPTIONS='--inspect=0.0.0.0:9229' next dev
```

This differs from the Next.js documentation and some community recommendations, but is required for this setup to work reliably in Docker. If you encounter issues with `node --inspect=... node_modules/.bin/next dev`, use the NODE_OPTIONS approach above.

For more details, see the [Next.js Debugging Guide](https://nextjs.org/docs/pages/guides/debugging).

