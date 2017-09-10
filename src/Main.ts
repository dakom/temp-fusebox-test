const worker = new Worker("worker.js");
worker.addEventListener('message', (e: MessageEvent) => {
    console.log(e);
    if(e.data.cmd === "pong") {
        console.log("got pong!", e.data.val);
    }
});
worker.postMessage({cmd:"ping", val: performance.now()});