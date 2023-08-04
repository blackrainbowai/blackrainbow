import type { BuildOptions, PluginBuild } from "esbuild";
import { copy } from "esbuild-plugin-copy";
import { rm } from "fs/promises";

const outDir = "dist";

export default {
	format: "esm",
	minify: true,
	outdir: outDir,
	bundle: true,
	platform: "browser",
	target: ["edge104", "esnext"],
	plugins: [
		{
			name: "clean-dist",
			setup(build: PluginBuild) {
				build.onStart(async () => {
					try {
						await rm(outDir, {
							recursive: true,
						});
					} catch (_error) {}
				});
			},
		},
		copy({
			resolveFrom: "out",
			assets: [
				{
					from: "./Src/styles/*.css",
					to: "./styles/",
				},
			],
		}),
	],
} satisfies BuildOptions;
