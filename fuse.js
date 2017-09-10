const {WebIndexPlugin, FuseBox} = require("fuse-box");

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
mainProducer.run();


const workerProducer = FuseBox.init({
    homeDir: "src",
    output: `dist/$name.js`,
    target: "browser"
});

const workerBundle = workerProducer.bundle("worker");
workerBundle.instructions(`Worker.ts`);
workerProducer.run();