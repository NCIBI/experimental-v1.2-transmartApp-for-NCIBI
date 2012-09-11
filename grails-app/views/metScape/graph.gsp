<%@ page contentType="text/html;charset=ISO-8859-1" %>
<html>
<head>
<meta name="layout" content="main"/>
<title>Metscape Web panel</title>
<!-- JSON support for IE (needed to use JS API) -->
<script type="text/javascript" src="/transmart/js/cytoscape_web/json2.min.js"></script>
<script type="text/javascript" src="/transmart/js/cytoscape_web/AC_OETags.min.js"></script>
<script type="text/javascript" src="/transmart/js/cytoscape_web/cytoscapeweb.min.js"></script>
<script type="text/javascript" src='/transmart/js/ext/ext-all.js'></script>
<script type="text/javascript">
var pageInfo = {
		basePath :"${request.getContextPath()}"
	}
window.onload=function() {
	var cids = "${cids}"
	var geneids = "${geneids}"
	var networktype = "${networktype}"
	var taxid = "${taxid}"
	Ext.Ajax.request({
		url: pageInfo.basePath+'/metScape/network',
		params: {cids: cids, geneids: geneids, networktype: networktype, taxid: taxid },
		success: function(response, opts) {
		    buildNetwork(response.responseText);
		},
		failure: function(response, opts) {
		    alert('Query failed');
		}
	});
};

function changeLayout(layout) {
	if (!vis) return;
	vis.layout(layout);
}

function reviewParameters(){
	var html = makeParameterHtml();
	document.getElementById('parameterPanel').innerHTML = html;
}

function hideParameters(){
	var html = '';
	document.getElementById('parameterPanel').innerHTML = html;
}

function makeParameterHtml(){
	var cids = "${cids}";
	var geneids = "${geneids}";
	var networktype = "${networktype}";
	var taxid = "${taxid}";
			
	return "<ul>" 
		+ "<li>Compound ids: " + cids + "</li>"
		+ "<li>Gene ids: " + geneids + "</li>"
		+ "<li>Network type: " + networktype + "</li>"
		+ "<li>Taxid: " + taxid + "</li>"
		+ "</ul>";
}

function buildNetwork(response) {
	// id of Cytoscape Web container div
    var div_id = "main";
    
    // you could also use other formats (e.g. GraphML) or grab the network data via AJAX
    var networ_json = JSON.parse(response).responseValue;

    var visual_style = {
            global: {
            },
            nodes: {
            	label: {
                    passthroughMapper: {attrName:"canonicalName"}
                },
                color: {
                    discreteMapper: {
                        attrName: "Category",
                        entries: [
                            { attrValue: "Input Compound", value: "#FF0000"},
                            { attrValue: "Compound", value: "#FF9999" },
                            { attrValue: "Reaction", value: "#D1D9C5" },
                            { attrValue: "Enzyme", value: "#CCFFCC" },
                            { attrValue: "Input Gene", value: "#3333FF"},
                            { attrValue: "Gene", value: "#CCCCFF" }
                        ]
                    }
                },
                labelFontColor:{
                	discreteMapper: {
                        attrName: "Reaction.reversible",
                        entries: [
                            { attrValue: "true", value: "#9707F7" },
                            { attrValue: "false", value: "#F77E04" }
                        ]
                    }
                },
                shape: {
                    discreteMapper: {
                        attrName: "Type",
                        entries: [
                            { attrValue: "Compound", value: "HEXAGON" },
                            { attrValue: "Reaction", value: "RECTANGLE" },
                            { attrValue: "Enzyme", value: "ROUNDRECT" },
                            { attrValue: "Gene", value: "ELLIPSE" }
                        ]
                    }
                },
            },
            edges: {
                color: "#000000",
                label: {
                    passthroughMapper: {attrName:"label"}
                },
                targetArrowShape: {
					discreteMapper: {
						attrName: "direction",
						entries: [
							{ attrValue: "directed", value: "DELTA" },
							{ attrValue: "bidirectional", value: "DELTA" },
							{ attrValue: "undirected", value: "NONE" },
						]
					}
                },
	            sourceArrowShape: {
					discreteMapper: {
						attrName: "direction",
						entries: [
							{ attrValue: "directed", value: "NONE" },
							{ attrValue: "bidirectional", value: "DELTA" },
							{ attrValue: "undirected", value: "NONE" },
						]
					}
	            }
            }
        };
    
    // initialization options
    var options = {
        // where you have the Cytoscape Web SWF
        swfPath: "/transmart/swf/CytoscapeWeb",
        // where you have the Flash installer SWF
        flashInstallerPath: "/transmart/swf/playerProductInstall"
    };
    
    // init and draw
    vis = new org.cytoscapeweb.Visualization(div_id, options);
    vis.draw({ network: networ_json, visualStyle: visual_style, edgeLabelsVisible: true });
}
</script>
<style>
/* The Cytoscape Web container must have its dimensions set. */
html, body { height: 99%; width: 99%; padding: 1px; margin: 1px; padding-right:20px; padding-bottom: 30px;}
#main {height: 99%; width: 99%; padding: 2px; margin: 5px; border-style:solid; border-color: black;}
</style>
</head>
<body>
<div id="controls">
<form>Layout: <g:select name="layout" from="${layouts}" onChange="changeLayout(this.value)"/>&nbsp; &nbsp; 
<a href="#controls" onclick="reviewParameters()">review parameters</a>&nbsp; &nbsp; 
<a href="#controls" onclick="hideParameters()">hide parameters</a>
</form>
<div id="parameterPanel"></div>
</div>
<div id="main">
</div>
</body>
</html>