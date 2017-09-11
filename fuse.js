const {WebIndexPlugin, QuantumPlugin, FuseBox} = require("fuse-box");

const mainProducer = FuseBox.init({
    homeDir: "src",
    output: `dist/$name.js`,
    target: "browser",
    plugins: [
        WebIndexPlugin({
            title: "Fusebox Worker Test",
            template: "./src/index.html",
            path: "."
        })
    ]
});

const mainBundle = mainProducer.bundle("main");
mainBundle.instructions(`>Main.ts`);
mainBundle.watch();
mainProducer.dev({ open: true });


const workerProducer = FuseBox.init({
    homeDir: "src",
    output: `dist/$name.js`,
    target: "browser",
    plugins: [
        QuantumPlugin({
            containedAPI : true,
            bakeApiIntoBundle: "worker",
            target : "server"
        })
    ]
});

const workerBundle = workerProducer.bundle("worker");
workerBundle.watch();
workerBundle.instructions(`>Worker.ts`);

workerProducer.run();
mainProducer.run();