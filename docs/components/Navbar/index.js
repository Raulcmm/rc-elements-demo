"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Navbar = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var styles_navbar_1 = require("./styles.navbar");
var Navbar = function (props) {
    var backgroundColor = props.backgroundColor, maxWidth = props.maxWidth, logo = props.logo, color = props.color, alt = props.alt, _a = props.options, options = _a === void 0 ? [] : _a, hoverColor = props.hoverColor;
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)(styles_navbar_1.Container, __assign({ backgroundColor: backgroundColor, color: color, maxWidth: maxWidth }, { children: (0, jsx_runtime_1.jsxs)(styles_navbar_1.Content, { children: [(0, jsx_runtime_1.jsx)("img", { src: logo, alt: alt }, void 0), (0, jsx_runtime_1.jsx)(styles_navbar_1.Nav, { children: (0, jsx_runtime_1.jsx)(styles_navbar_1.Options, { children: options.map(function (option) { return (option.target
                                ? (0, jsx_runtime_1.jsxs)("li", { children: [" ", (0, jsx_runtime_1.jsxs)(styles_navbar_1.A, __assign({ href: option.url, target: "_blank", rel: "noreferrer", color: color, hoverColor: hoverColor }, { children: [" ", option.title, " "] }), option.id), " "] }, void 0)
                                : (0, jsx_runtime_1.jsxs)("li", { children: [" ", (0, jsx_runtime_1.jsxs)(styles_navbar_1.A, __assign({ href: option.url, color: color, hoverColor: hoverColor }, { children: [" ", option.title, " "] }), option.id), " "] }, void 0)); }) }, void 0) }, void 0)] }, void 0) }), void 0) }, void 0));
};
exports.Navbar = Navbar;
exports.default = exports.Navbar;
