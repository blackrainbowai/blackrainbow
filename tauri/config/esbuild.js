import fs from "fs";
const outDir = "dist";
export default () => {
    return {
        format: "iife",
        minify: true,
        outdir: outDir,
        bundle: true,
        platform: "browser",
        target: ["edge104", "esnext"],
        write: true,
        sourcesContent: false,
        plugins: [
            {
                name: "clean-dist",
                setup(build) {
                    build.onStart(async () => {
                        try {
                            await fs.promises.rm(outDir, {
                                recursive: true,
                            });
                        }
                        catch (error) { }
                    });
                },
            },
        ],
    };
};
