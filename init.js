import { existsSync, mkdirSync, writeFileSync } from "fs";
import download from "download";

if (!existsSync("./public/ocr")) {
    mkdirSync("./public/ocr", { recursive: true });
    writeFileSync(
        "./public/ocr/ppocr_det.onnx",
        await download(
            "https://github.com/xushengfeng/eSearch-OCR/releases/download/3.0.0/ch_PP-OCRv3_det_infer.onnx",
            { rejectUnauthorized: false }
        )
    );
    writeFileSync(
        "./public/ocr/ppocr_rec.onnx",
        await download(
            "https://github.com/xushengfeng/eSearch-OCR/releases/download/3.0.0/ch_PP-OCRv3_rec_infer.onnx",
            { rejectUnauthorized: false }
        )
    );
    writeFileSync(
        "./public/ocr/ppocr_keys_v1.txt",
        await download("https://github.com/xushengfeng/eSearch-OCR/releases/download/3.0.0/ppocr_keys_v1.txt", {
            rejectUnauthorized: false,
        })
    );
}

if (!existsSync("./lib/tikzjax.js")) {
    writeFileSync(
        "./lib/tikzjax.js",
        await download("https://raw.githubusercontent.com/artisticat1/obsidian-tikzjax/0.5.1/tikzjax.js", {
            rejectUnauthorized: false,
        })
    );
}
