# Worker branch (current master)

Shows workers failing

1. `npm run build`
2. Open console (note - it's using http-server not dev server, you may need to refresh)
3. `ReferenceError: global is not defined`

To demonstrate it is not a code error:
4. Keep the browser open as-is
5. Copy-paste the `worker.ts` source exactly to replace the generated `dist/worker.js`
6. Refresh and look in the console - you'll see a successful roundtrip communication

# Timeout branch

Shows the `timeout` property failing in tests

`npm run test` fails

`npm run test:env` passes

