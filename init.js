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
