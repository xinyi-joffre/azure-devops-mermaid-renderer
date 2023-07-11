var mermaidRenderer = (function () {
    "use strict";
    return {
        renderContent: function(rawContent, options) {
            var rendered = document.getElementById('render-content-display');
            
            var graphDefinition = rawContent;
            mermaid.render('graphDiv', graphDefinition).then((result) => { 
                rendered.innerHTML = result.svg;
            });
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
