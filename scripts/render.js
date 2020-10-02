var mermaidRenderer = (function () {
    "use strict";
    return {
        renderContent: function(rawContent, options) {
            var rendered = document.getElementById('render-content-display');

            var insertSvg = function(svgCode, bindFunctions){
                rendered.innerHTML = svgCode;
            };

            var graphDefinition = rawContent;
            mermaid.mermaidAPI.render('graphDiv', graphDefinition, insertSvg);
        }
    };
}());

VSS.init({
    usePlatformScripts: true, 
    usePlatformStyles: true, 
    explicitNotifyLoaded: true 
});

VSS.ready(function () {
    VSS.register("mermaid_renderer", function (context) {
        return mermaidRenderer;
    });

    VSS.notifyLoadSucceeded();
});