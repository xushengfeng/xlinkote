import { existsSync, mkdirSync, writeFileSync } from "fs";
import download from "download";

if (!existsSync("./public/ocr")) {
    mkdirSync("./public/ocr", { recursive: true });
    await download("https://github.com/xushengfeng/eSearch-OCR/releases/download/3.0.0/ch.zip", "./public/ocr", {
        rejectUnauthorized: false,
        extract: true,
    });
}

if (!existsSync("./lib/tikzjax.js")) {
    writeFileSync(
        "./lib/tikzjax.js",
        await download("https://raw.githubusercontent.com/artisticat1/obsidian-tikzjax/0.5.1/tikzjax.js", {
            rejectUnauthorized: false,
        })
    );
}

if (!existsSync("./lib/mathjax@3.2.2-tex-svg-full.js")) {
    writeFileSync(
        "./lib/mathjax@3.2.2-tex-svg-full.js",
        await download("https://unpkg.com/mathjax@3.2.2/es5/tex-svg-full.js", {
            rejectUnauthorized: false,
        })
    );
}
