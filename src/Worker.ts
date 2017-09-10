self.addEventListener('message', e => {
    console.log(e);
    if (e.data.cmd == 'ping') {
        console.log("got ping!");
        this.postMessage({
            cmd: 'pong',
            val: e.data.val
        });
    }
});