var md = window
    .markdownit({
        html: true,
        linkify: true,
        typographer: true,
    })
    .use(window.markdownitTaskLists);

var defaultRender =
    md.renderer.rules.heading_open ||
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
