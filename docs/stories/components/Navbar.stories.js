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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Basic = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var Navbar_1 = __importDefault(require("../../components/Navbar"));
exports.default = {
    title: 'UI/Navbar',
    component: Navbar_1.default
};
var Template = function (args) { return (0, jsx_runtime_1.jsx)(Navbar_1.default, __assign({}, args), void 0); };
exports.Basic = Template.bind({});
exports.Basic.args = {
    // title:'No title',
    logo: '../assets/logo_rcm.jpg',
    alt: "Logo de ...",
    backgroundColor: 'blue',
    color: 'white',
    hoverColor: 'black',
    maxWidth: 1460,
    options: [
        { id: 1, title: 'Home', url: 'face', target: false },
        { id: 2, title: 'About', url: 'face2', target: false },
        { id: 3, title: 'Google', url: 'https://google.com', target: true },
    ]
};
