"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UrlBuilder = (function () {
    function UrlBuilder() {
    }
    UrlBuilder.hackernoonUrl = 'https://hackernoon.com';
    UrlBuilder.getUrlWithTag = function (tag) { return UrlBuilder.hackernoonUrl + "/tagged/" + tag; };
    UrlBuilder.extractPostIdFromLink = function (link) { return link.split('-').pop(); };
    UrlBuilder.getPostUrl = function (postIdentifier) { return "" + UrlBuilder.hackernoonUrl + postIdentifier; };
    return UrlBuilder;
}());
exports.UrlBuilder = UrlBuilder;
//# sourceMappingURL=UrlBuilder.js.map