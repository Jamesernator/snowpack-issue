// @ts-check
"use strict";

/** @type {import("snowpack").SnowpackUserConfig} */
const config = {
    exclude: ["**/*.mjs"],
    mount: {
        src: "/",
    },
    optimize: {
        bundle: false,
        preload: true,
        minify: true,
        sourcemap: "external",
        target: "esnext",
    },
    buildOptions: {
        clean: true,
        out: "./web/",
        sourcemap: true,
    },
    devOptions: {
        hostname: "assignments.localhost",
        output: "stream",
    },
    workspaceRoot: "./",
};

export default config;
