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
exports.__esModule = true;
var helpers_1 = require("../helpers");
function bkStrAsk(dialogue, tx, handler, key, attachment, txFn) {
    var thread_name = "t_" + (typeof key === "object" ? key.key : key);
    // if (process.env.NODE_ENV === "development") {
    //   handler(
    //     "10",
    //     {
    //       setVar: (key, value) => {},
    //       vars: {
    //         gold_prices: {
    //           gold: 1,
    //           silver: 1,
    //         },
    //       },
    //       gotoThread: async (goToThreadId) => {
    //         if (
    //           goToThreadId === "t_on_go_back" ||
    //           !goToThreadId ||
    //           goToThreadId === "t_" ||
    //           goToThreadId === "t_undefined"
    //         ) {
    //           return;
    //         }
    //         if (cy.$id(goToThreadId).length === 0) {
    //           cy.add({
    //             group: "nodes",
    //             data: { id: goToThreadId, name: goToThreadId },
    //           });
    //         }
    //         if (cy.$id(thread_name).length === 0) {
    //           cy.add({
    //             group: "nodes",
    //             data: {
    //               id: thread_name,
    //               name: thread_name,
    //             },
    //           });
    //         }
    //         if (cy.$id(`${thread_name}_${goToThreadId}`).length === 0) {
    //           cy.add({
    //             data: {
    //               id: `${thread_name}_${goToThreadId}`,
    //               target: goToThreadId,
    //               source: thread_name,
    //             },
    //           });
    //         }
    //       },
    //       repeat: async () => {},
    //       stop: async () => {},
    //     },
    //     undefined,
    //     undefined
    //   );
    // }
    return dialogue.addQuestion({
        text: txFn ? txFn : function () { return helpers_1.translate(tx); },
        attachment: [
            __assign({ title: key }, attachment),
        ]
    }, handler, key, "t_" + key);
}
exports["default"] = bkStrAsk;
//# sourceMappingURL=ask_str.js.map