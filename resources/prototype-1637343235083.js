jQuery("#simulation")
;(function(window, undefined) {
  var dictionary = {
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Screen 1",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);	window.widgets = {
		descriptionMap : widgetDescriptionMap = {},
		rootWidgetMap : widgetRootMap = {}
	};

	widgets.descriptionMap[["s-Paragraph_1", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Paragraph_1", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Top bar 1", "s-Group_2"]; 

	widgets.descriptionMap[["s-Image_1", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Image_1", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Top bar 1", "s-Group_2"]; 

	widgets.descriptionMap[["s-Paragraph_2", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Paragraph_2", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Top bar 1", "s-Group_2"]; 

	widgets.descriptionMap[["s-Image", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Image", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Image", "s-Image"]; 

	widgets.descriptionMap[["s-Paragraph", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Paragraph", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Text", "s-Paragraph"]; 

	widgets.descriptionMap[["s-Paragraph_6", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Paragraph_6", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Paragraph", "s-Paragraph_6"]; 

	(function(window, undefined) {
  var dictionary = {
  };

  window.jimDevelopers.lookUpSlice = function(name) {
    var imageName;
    if(dictionary.hasOwnProperty(name)) { /* search by name */
      imageName = dictionary[name];
    }
    return imageName;
  };
})(window);