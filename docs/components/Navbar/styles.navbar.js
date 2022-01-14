"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.A = exports.Options = exports.Nav = exports.Content = exports.Container = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
exports.Container = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    background-color  : ", ";\n    color             : ", ";\n    margin            : 0 auto\n    max-width         : ", "px;\n    padding           : 25px;\n"], ["\n    background-color  : ", ";\n    color             : ", ";\n    margin            : 0 auto\n    max-width         : ", "px;\n    padding           : 25px;\n"])), function (props) { return props.backgroundColor || 'white'; }, function (props) { return props.color; }, function (props) { return props.maxWidth; });
exports.Content = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    display:grid;\n    grid-template-columns:1fr 1fr 1fr 2fr;\n"], ["\n    display:grid;\n    grid-template-columns:1fr 1fr 1fr 2fr;\n"])));
exports.Nav = styled_components_1.default.nav(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    grid-column: 4/5;\n"], ["\n    grid-column: 4/5;\n"])));
exports.Options = styled_components_1.default.ul(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    display:flex;\n    justify-content:space-between;\n"], ["\n    display:flex;\n    justify-content:space-between;\n"])));
exports.A = styled_components_1.default.a(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    color:", ";\n    text-decoration:none;\n    &:hover{\n        font-weight:bold;\n        color: ", ";\n\n    }\n"], ["\n    color:", ";\n    text-decoration:none;\n    &:hover{\n        font-weight:bold;\n        color: ", ";\n\n    }\n"])), function (props) { return props.color; }, function (props) { return props.hoverColor; });
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
