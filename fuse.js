const {EnvPlugin, FuseBox} = require("fuse-box");

const fuse = FuseBox.init({
    homeDir: "src",
    output: `dist/$name.js`,
    target: "browser"
});

const bundle = fuse.bundle("fusetest");
bundle.test("[tests/**/*.test.ts]");

fuse.run();