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
