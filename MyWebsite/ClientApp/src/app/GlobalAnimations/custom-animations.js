"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var animations_1 = require("@angular/animations");
exports.fadeIn = animations_1.trigger('fadeIn', [
    animations_1.transition('hide => show', [
        animations_1.query('.ilustration', animations_1.animate('1000ms 200ms ease-out', animations_1.keyframes([
            animations_1.style({ transform: "scale(0.2)", opacity: 0, offset: 0 }),
            animations_1.style({ transform: "scale(1.2)", opacity: 0.5, offset: 0.8 }),
            animations_1.style({ transform: "scale(1)", opacity: 1, offset: 1 })
        ])))
    ]),
    animations_1.transition('show => hide', [
        animations_1.query('.ilustration', animations_1.animate('1000ms 200ms ease-in', animations_1.keyframes([
            animations_1.style({ transform: "scale(1)", opacity: 1, offset: 0 }),
            animations_1.style({ transform: "scale(1.2)", opacity: 0.5, offset: 0.2 }),
            animations_1.style({ transform: "scale(0.2)", opacity: 0, offset: 1 })
        ])))
    ])
]);
exports.resize = animations_1.trigger('resize', [
    animations_1.state('void', animations_1.style({ height: '100vh', width: "100vw", transform: 'rotateX(180deg)' })),
    animations_1.transition(':enter, :leave', animations_1.animate('1000ms ease-in'))
]);
exports.portfolio_appear = animations_1.trigger('portfolio_appear', [
    animations_1.state('hide', animations_1.style({
        opacity: 0
    })),
    animations_1.transition('hide => show', animations_1.animate('600ms 100ms cubic-bezier(.55,.79,.44,.09)', animations_1.keyframes([
        animations_1.style({ transform: "scale(0.9)", opacity: 0, offset: 0 }),
        animations_1.style({ transform: "scale(1.1)", opacity: 0.5, offset: 0.5 }),
        animations_1.style({ transform: "scale(1)", opacity: 1, offset: 1 })
    ])))
]);
exports.EnterFromLeft = animations_1.trigger('EnterFromLeft', [
    animations_1.state('hide', animations_1.style({
        opacity: 0
    })),
    animations_1.transition('hide => show', animations_1.animate('1000ms 200ms ease-out', animations_1.keyframes([
        animations_1.style({ opacity: 0, transform: "translateX(-100%)", offset: 0 }),
        animations_1.style({ opacity: 1, transform: "translateX(15%)", offset: 0.85 }),
        animations_1.style({ opacity: 1, transform: "translateX(0)", offset: 1 }),
    ])))
]);
exports.EnterFromRight = animations_1.trigger('EnterFromRight', [
    animations_1.state('hide', animations_1.style({
        opacity: 0
    })),
    animations_1.transition('hide => show', animations_1.animate('1000ms 200ms ease-out', animations_1.keyframes([
        animations_1.style({ opacity: 0, transform: "translateX(100%)", offset: 0 }),
        animations_1.style({ opacity: 1, transform: "translateX(-5%)", offset: 0.85 }),
        animations_1.style({ opacity: 1, transform: "translateX(0)", offset: 1 }),
    ])))
]);
exports.EnterFromBottom = animations_1.trigger('EnterFromBottom', [
    animations_1.state('show', animations_1.style({
        opacity: 1,
        transform: "translateY(0)"
    })),
    animations_1.state('hide', animations_1.style({
        opacity: 0,
        transform: "translateY(400%)"
    })),
    animations_1.transition('show => hide', animations_1.animate('700ms  ease-out')),
    animations_1.transition('hide => show', animations_1.animate('700ms 200ms ease-in'))
]);
//# sourceMappingURL=custom-animations.js.map