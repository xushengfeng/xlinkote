import Fuse from "../node_modules/fuse.js/dist/fuse";

declare global {
    interface Window {
        markdownit: any;
        showOpenFilePicker: any;
        showDirectoryPicker: any;
        showSaveFilePicker: any;
        MathJax: any;
        markdownitTaskLists: any;
        markdownitEmoji: any;
        JXG: any;
        markdownitContainer: any;
        TurndownService: any;
        html2canvas: any;
        WebDAV: any;
        CryptoJS: any;
        Fuse: Fuse;
    }
    const mathSymbols: any;
}
