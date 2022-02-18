"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Singleton_1 = __importDefault(require("./Singleton"));
const a = Singleton_1.default.getInstance();
const b = Singleton_1.default.getInstance();
console.log('A es igual a B?', a === b);
