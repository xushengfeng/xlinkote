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
var mathjax_cache = {};
function get_svg(c) {
    let html, ca = mathjax_cache?.[c];
    if (ca) {
        html = ca[0];
        mathjax_cache[c][1] = 2;
    }
    else {
        html = window.MathJax.tex2svg(c).outerHTML;
        mathjax_cache[c] = [window.MathJax.tex2svg(c).outerHTML, 1];
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
