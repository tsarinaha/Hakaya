!function(t,s){"object"==typeof exports&&"object"==typeof module?module.exports=s():"function"==typeof define&&define.amd?define([],s):"object"==typeof exports?exports.astrochart=s():t.astrochart=s()}(self,(()=>(()=>{"use strict";var t={d:(s,e)=>{for(var i in e)t.o(e,i)&&!t.o(s,i)&&Object.defineProperty(s,i,{enumerable:!0,get:e[i]})},o:(t,s)=>Object.prototype.hasOwnProperty.call(t,s),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},s={};t.r(s),t.d(s,{AspectCalculator:()=>_,Chart:()=>m,default:()=>R});const e={...}; // Existing constants remain unchanged

// Updated 'h(r)' function with debugging
const h = function(r) {
    var validationResult = { hasError: false, messages: [] };

    // Debugging input
    console.log("[DEBUG] Validation Input (r):", r);

    if (!r) {
        validationResult.messages.push("Data is not set.");
        validationResult.hasError = true;
        return validationResult;
    }

    if (!r.planets || !Array.isArray(r.planets)) {
        validationResult.messages.push("Planets data is missing or invalid.");
        validationResult.hasError = true;
    }

    if (!r.cusps || !Array.isArray(r.cusps)) {
        validationResult.messages.push("Cusps data is missing or invalid.");
        validationResult.hasError = true;
    } else if (r.cusps.length !== 12) {
        validationResult.messages.push("Cusps array must have exactly 12 elements.");
        validationResult.hasError = true;
    }

    // Debugging validation result
    console.log("[DEBUG] Validation Result:", validationResult);

    return validationResult;
};

// Function usage in the chart logic (example section)
const C = function() {
    function t(t, s, e, i, r, a) {
        this.settings = a;

        // Updated to include debugging
        var validation = h(r);
        if (validation.hasError) {
            console.error("[ERROR] Validation failed:", validation.messages);
            throw new Error(validation.messages.join(" | "));
        }

        // Proceed with valid data
        this.data = r;
        ...
    }

    ... // Rest of the existing logic remains untouched
};

// Debugging utilities
function debugPlanetsAndCusps(planets, cusps) {
    console.log("[DEBUG] Planets:", planets);
    console.log("[DEBUG] Cusps:", cusps);
}

// Test bypass logic (uncomment for debugging purposes)
// var testSample = {
//     planets: [
//         { name: "Sun", longitude: 100 },
//         { name: "Moon", longitude: 200 },
//         { name: "Mars", longitude: 150 }
//     ],
//     cusps: [30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330, 360]
// };
// console.log("[TEST] Bypassing validation with sample data:", testSample);
// new t(...params, testSample);

return s;})());
