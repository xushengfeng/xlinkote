import Fuse from "../node_modules/fuse.js/dist/fuse";

declare global {
    interface Window {
        showOpenFilePicker: any;
        showDirectoryPicker: any;
        showSaveFilePicker: any;
        MathJax: any;
    }
}
