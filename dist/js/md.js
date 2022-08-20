var md = window
    .markdownit({
    html: true,
    linkify: true,
    typographer: true,
})
    .use(window.markdownitTaskLists, { enabled: true })
    .use(window.markdownitContainer, "spoiler", {
    validate: function (params) {
        return params.trim().match(/^(.*)$/);
    },
    render: function (tokens, idx) {
        var m = tokens[idx].info.trim().match(/^(.*)$/);
        if (tokens[idx].nesting === 1) {
            // opening tag
            return "<details><summary>" + md.render(m[1]) + "</summary>\n";
        }
        else {
            // closing tag
            return "</details>\n";
        }
    },
    marker: "+",
})
    .use(window.markdownitEmoji);
var defaultRender = md.renderer.rules.heading_open ||
    function (tokens, idx, options, env, self) {
        return self.renderToken(tokens, idx, options);
    };
md.renderer.rules.heading_open = function (tokens, idx, options, env, self) {
    let aIndex = tokens[idx].attrIndex("id");
    if (aIndex < 0) {
        tokens[idx].attrPush(["id", tokens[idx + 1].content]);
    }
    return defaultRender(tokens, idx, options, env, self);
};
md.renderer.rules.strong_open = function (tokens, idx, options, env, self) {
    let aIndex = tokens[idx].attrIndex("id");
    if (aIndex < 0) {
        tokens[idx].attrPush(["id", tokens[idx + 1].content]);
    }
    return defaultRender(tokens, idx, options, env, self);
};
md.renderer.rules.em_open = function (tokens, idx, options, env, self) {
    let aIndex = tokens[idx].attrIndex("id");
    if (aIndex < 0) {
        tokens[idx].attrPush(["id", tokens[idx + 1].content]);
    }
    return defaultRender(tokens, idx, options, env, self);
};
let f = md.renderer.rules.fence;
md.renderer.rules.fence = function (tokens, idx, options, env, self) {
    if (tokens[idx].info == "mermaid") {
        let o = "";
        window.mermaid.mermaidAPI.render("mgraph" + String(new Date().getTime()), tokens[idx].content, (svg) => {
            o = svg;
        });
        return o;
    }
    return f(tokens, idx, options, env, self);
};
md.renderer.rules.image = function (tokens, idx, options, env, self) {
    let value = tokens[idx].attrGet("src");
    let b = 集.assets?.[value]?.base64;
    if (b)
        tokens[idx].attrSet("src", b);
    return defaultRender(tokens, idx, options, env, self);
};
var will_load_math = false;
var mathjax_cache = {};
function get_svg(c) {
    let html, ca = mathjax_cache?.[c];
    if (ca) {
        html = ca[0];
        mathjax_cache[c][1] = 2;
    }
    else {
        if (window.MathJax.tex2svg) {
            html = window.MathJax.tex2svg(c).outerHTML;
            mathjax_cache[c] = [window.MathJax.tex2svg(c).outerHTML, 1];
        }
        else {
            html = "<mjx-container></mjx-container>";
            if (!will_load_math) {
                let s = document.createElement("script");
                s.src = "./node/mathjax/es5/tex-svg.js";
                will_load_math = true;
                s.onload = reload;
                document.body.append(s);
                s.onerror = () => {
                    let s = document.createElement("script");
                    s.src = "./node_modules/mathjax/es5/tex-svg.js";
                    document.body.append(s);
                    s.onload = reload;
                };
            }
            function reload() {
                console.log("加载数学组件完成");
                document.querySelectorAll("mjx-container").forEach((el) => {
                    画布.querySelectorAll("x-md").forEach((pel) => {
                        if (pel.contains(el)) {
                            pel.reload();
                        }
                    });
                });
            }
        }
    }
    return html;
}
setInterval(() => {
    for (let i in mathjax_cache) {
        if (mathjax_cache[i][1] == 1) {
            delete mathjax_cache[i];
        }
    }
}, 10000);
setInterval(() => {
    mathjax_cache = {};
}, 100000);
md.renderer.rules["mathjax_inline"] = (tokens, idx, options, env, self) => self.renderToken(tokens, idx, options);
md.renderer.rules.mathjax_inline = (tokens, idx, options, env, self) => {
    return get_svg(tokens[idx].content).replace(`display="true"`, "");
};
md.inline.ruler.after("escape", "mathjax_inline", function (state, silent) {
    var found, content, token, max = state.posMax, start = state.pos;
    if (state.src.charCodeAt(start) !== 36 /* $ */) {
        return false;
    }
    if (silent) {
        return false;
    } // don't run any pairs in validation mode
    if (start + 2 >= max) {
        return false;
    }
    state.pos = start + 1;
    while (state.pos < max) {
        if (state.src.charCodeAt(state.pos) === 36 /* $ */) {
            found = true;
            break;
        }
        state.md.inline.skipToken(state);
    }
    if (!found || start + 1 === state.pos) {
        state.pos = start;
        return false;
    }
    content = state.src.slice(start + 1, state.pos);
    // found!
    state.posMax = state.pos;
    state.pos = start + 1;
    token = state.push("mathjax_open", "span", 1);
    token.markup = "$";
    token = state.push("mathjax_inline", "", 0);
    token.content = content;
    token = state.push("mathjax_close", "span", -1);
    token.markup = "$";
    state.pos = state.posMax + 1;
    state.posMax = max;
    return true;
});
md.renderer.rules["mathjax_block"] = (tokens, idx, options, env, self) => self.renderToken(tokens, idx, options);
md.renderer.rules.mathjax_block = (tokens, idx, options, env, self) => {
    return get_svg(`\\displaylines{${tokens[idx].content}}`);
};
function math_b(state, startLine, endLine, silent) {
    var nextLine, token, lineText, pos = state.bMarks[startLine] + state.tShift[startLine], max = state.eMarks[startLine];
    // if it's indented more than 3 spaces, it should be a code block
    if (state.sCount[startLine] - state.blkIndent >= 4) {
        return false;
    }
    if (!state.md.options.html) {
        return false;
    }
    if (state.src.charCodeAt(pos) !== 36 /* $ */) {
        return false;
    }
    lineText = state.src.slice(pos, max);
    if (!lineText.includes("$$"))
        return false;
    if (silent) {
        return true;
    }
    nextLine = startLine + 1;
    if (lineText.match(/\$\$/g).length == 1) {
        for (; nextLine < endLine; nextLine++) {
            if (state.sCount[nextLine] < state.blkIndent) {
                break;
            }
            pos = state.bMarks[nextLine] + state.tShift[nextLine];
            max = state.eMarks[nextLine];
            lineText = state.src.slice(pos, max);
            if (lineText.includes("$$")) {
                if (lineText.length !== 0) {
                    nextLine++;
                }
                break;
            }
        }
    }
    state.line = nextLine;
    token = state.push("mathjax_block", "mjx-container", 0);
    token.map = [startLine, nextLine];
    let t = state.getLines(startLine, nextLine, state.blkIndent, true).trim();
    token.content = t.slice(2, t.length - 2);
    return true;
}
md.block.ruler.after("blockquote", "mathjax_block", math_b, {
    alt: ["paragraph", "reference", "blockquote", "list"],
});
// https://github.com/jGleitz/markdown-it-kbd
const MARKER_OPEN = "[";
const MARKER_CLOSE = "]";
const ESCAPE_CHARACTER = "\\";
const TAG = "x-link";
function tlink(state, silent) {
    if (silent) {
        return false;
    }
    const start = state.pos;
    const max = state.posMax;
    let now_char = state.src.charAt(start);
    let next_char = state.src.charAt(start + 1);
    // We are looking for two times the open symbol.
    if (now_char !== MARKER_OPEN || next_char !== MARKER_OPEN) {
        return false;
    }
    // Find the end sequence
    let openTagCount = 1;
    let end = -1;
    let skipNext = false;
    let id_l = 0;
    let id = "";
    for (let i = start + 1; i < max && end === -1; i++) {
        now_char = next_char;
        next_char = state.src.charAt(i + 1);
        if (skipNext) {
            skipNext = false;
            continue;
        }
        if (now_char === MARKER_CLOSE && next_char === MARKER_CLOSE) {
            openTagCount -= 1;
            if (openTagCount == 0) {
                // Found the end!
                end = i;
            }
            // Skip second marker char, it is already counted.
            skipNext = true;
        }
        else if (now_char === MARKER_OPEN && next_char === MARKER_OPEN) {
            openTagCount += 1;
            // Skip second marker char, it is already counted.
            skipNext = true;
        }
        else if (now_char === "\n") {
            // Found end of line before the end sequence. Thus, ignore our start sequence!
            return false;
        }
        else if (now_char === ESCAPE_CHARACTER) {
            skipNext = true;
        }
        else if (now_char == "#") {
            end = i;
            id_l = state.src.indexOf("]", i) - i;
            id = state.src.slice(i + 1, state.src.indexOf("]", i));
        }
    }
    // Input ended before closing sequence.
    if (end === -1) {
        return false;
    }
    // start tag
    let t = state.push("x-link_open", TAG, 1);
    // parse inner
    state.pos += 2;
    state.posMax = end;
    state.md.inline.tokenize(state);
    t.attrPush(["id", id || state.tokens[state.tokens.length - 1].content]);
    state.pos = end + id_l + 2;
    state.posMax = max;
    // end tag
    state.push("x-link_close", TAG, -1);
    return true;
}
md.inline.ruler.before("link", "x-link", tlink);
