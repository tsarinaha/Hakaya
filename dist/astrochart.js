!function(global, factory) {
    if (typeof exports === "object" && typeof module !== "undefined") {
        module.exports = factory();
    } else if (typeof define === "function" && define.amd) {
        define([], factory);
    } else {
        global.astrochart = factory();
    }
}(typeof self !== "undefined" ? self : this, function() {
    // Existing library code here...

    const astrochart = {
        // Define your library methods and properties here
    };

    return astrochart;
});
