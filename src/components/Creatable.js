"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var components = {
    DropdownIndicator: null,
};
var createOption = function (label) { return ({
    label: label,
    value: label,
}); };
var CreatableInputOnly = /** @class */ (function (_super) {
    __extends(CreatableInputOnly, _super);
    function CreatableInputOnly() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            inputValue: '',
            value: [],
        };
        _this.handleChange = function (value, actionMeta) {
            console.group('Value Changed');
            console.log(value);
            console.log("action: " + actionMeta.action);
            console.groupEnd();
            _this.setState({ value: value });
        };
        _this.handleInputChange = function (inputValue) {
            _this.setState({ inputValue: inputValue });
        };
        _this.handleKeyDown = function (event) {
            var _a = _this.state, inputValue = _a.inputValue, value = _a.value;
            if (!inputValue)
                return;
            switch (event.key) {
                case 'Enter':
                case 'Tab':
                    console.group('Value Added');
                    console.log(value);
                    console.groupEnd();
                    _this.setState({
                        inputValue: '',
                        value: __spreadArrays(value, [createOption(inputValue)]),
                    });
                    event.preventDefault();
            }
        };
        return _this;
    }
    CreatableInputOnly.prototype.render = function () {
        var _a = this.state, inputValue = _a.inputValue, value = _a.value;
        return components = { components: components };
        inputValue = { inputValue: inputValue };
        isClearable;
        isMulti;
        menuIsOpen = { false:  };
        onChange = { this: .handleChange };
        onInputChange = { this: .handleInputChange };
        onKeyDown = { this: .handleKeyDown };
        placeholder = "Type something and press enter...";
        value = { value: value }
            /  >
        ;
        ;
    };
    return CreatableInputOnly;
}(react_1.Component));
exports.default = CreatableInputOnly;
