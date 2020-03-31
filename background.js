var contextMenuItem = {
    "id": "jishoLookup",
    "title": "Search Jisho for \"%s\"",
    "contexts": ["selection"],
    onclick: function (info) {
        if (info.selectionText) {
            var base = "https://jisho.org/search/"

            browser.tabs.create({
                url: base.concat(info.selectionText)
            });
        }
    }
};

browser.contextMenus.create(contextMenuItem);
