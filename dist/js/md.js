var md = window
    .markdownit({
    html: true,
    linkify: true,
    typographer: true,
})
    .use(window.markdownitTaskLists)
    .use(window.markdownitContainer, "spoiler", {
    validate: function (params) {
        return params.trim().match(/^(.*)$/);
    },
    render: function (tokens, idx) {
        var m = tokens[idx].info.trim().match(/^(.*)$/);
        if (tokens[idx].nesting === 1) {
            // opening tag
            return "<details><summary>" + md.utils.escapeHtml(m[1]) + "</summary>\n";
        }
        else {
            // closing tag
            return "</details>\n";
        }
    },
    marker: "+",
});
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
md.renderer.rules["mathjax_inline"] = (tokens, idx, options, env, self) => self.renderToken(tokens, idx, options);
md.renderer.rules.mathjax_inline = (tokens, idx, options, env, self) => {
    return window.MathJax.tex2svg(tokens[idx].content).outerHTML.replace(`display="true"`, "");
};
md.inline.ruler.before("emphasis", "mathjax_inline", function (state, silent) {
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
    // don't allow unescaped spaces/newlines inside
    if (content.match(/(^|[^\\])(\\\\)*\s/)) {
        state.pos = start;
        return false;
    }
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
