(function () {
    if (typeof (window.org) === "undefined") {
        window.org = {}
    }
    if (typeof (window.org.cytoscapeweb) === "undefined") {
        org.cytoscapeweb = {}
    }
    window._cytoscapeWebInstances = {
        index: 0
    };
    org.cytoscapeweb.Visualization = function (a, b) {
        this.containerId = a;
        if (!b) {
            b = {}
        }
        this.options = b;
        this.idToken = b.idToken ? b.idToken : "cytoscapeWeb";
        this.swfPath = b.swfPath ? b.swfPath : "CytoscapeWeb";
        this.flashInstallerPath = b.flashInstallerPath ? b.flashInstallerPath : "playerProductInstall";
        this.flashAlternateContent = b.flashAlternateContent ? b.flashAlternateContent : "This content requires the Adobe Flash Player. <a href=http://www.adobe.com/go/getflash/>Get Flash</a>";
        _cytoscapeWebInstances.index++;
        this.id = this.idToken + _cytoscapeWebInstances.index;
        _cytoscapeWebInstances[this.id] = this
    };
    org.cytoscapeweb.Visualization.prototype = {
        draw: function (a) {
            if (!a) {
                a = {}
            }
            this.drawOptions = a;
            this.embedSWF();
            return this
        },
        ready: function (a) {
            if (!a) {
                this._onReady = function () {}
            } else {
                this._onReady = a
            }
            return this
        },
        layout: function () {
            var a = this.swf();
            if (arguments.length > 0) {
                a.applyLayout(arguments[0]);
                return this
            } else {
                return a.getLayout()
            }
        },
        visualStyle: function () {
            var a = this.swf();
            if (arguments.length > 0) {
                a.setVisualStyle(arguments[0]);
                return this
            } else {
                return a.getVisualStyle()
            }
        },
        visualStyleBypass: function () {
            var b = this.swf();
            var a;
            if (arguments.length > 0) {
                a = JSON.stringify(arguments[0]);
                b.setVisualStyleBypass(a);
                return this
            } else {
                a = b.getVisualStyleBypass();
                return this._parseJSON(a)
            }
        },
        panZoomControlVisible: function () {
            var a = this.swf();
            if (arguments.length > 0) {
                a.showPanZoomControl(arguments[0]);
                return this
            } else {
                return a.isPanZoomControlVisible()
            }
        },
        edgesMerged: function () {
            var a = this.swf();
            if (arguments.length > 0) {
                a.mergeEdges(arguments[0]);
                return this
            } else {
                return a.isEdgesMerged()
            }
        },
        nodeLabelsVisible: function () {
            var a = this.swf();
            if (arguments.length > 0) {
                a.showNodeLabels(arguments[0]);
                return this
            } else {
                return a.isNodeLabelsVisible()
            }
        },
        edgeLabelsVisible: function () {
            var a = this.swf();
            if (arguments.length > 0) {
                a.showEdgeLabels(arguments[0]);
                return this
            } else {
                return a.isEdgeLabelsVisible()
            }
        },
        nodeTooltipsEnabled: function () {
            var a = this.swf();
            if (arguments.length > 0) {
                a.enableNodeTooltips(arguments[0]);
                return this
            } else {
                return a.isNodeTooltipsEnabled()
            }
        },
        edgeTooltipsEnabled: function () {
            var a = this.swf();
            if (arguments.length > 0) {
                a.enableEdgeTooltips(arguments[0]);
                return this
            } else {
                return a.isEdgeTooltipsEnabled()
            }
        },
        customCursorsEnabled: function () {
            if (arguments.length > 0) {
                this.swf().enableCustomCursors(arguments[0]);
                return this
            } else {
                return this.swf().isCustomCursorsEnabled()
            }
        },
        panEnabled: function () {
            if (arguments.length > 0) {
                this.swf().enableGrabToPan(arguments[0]);
                return this
            } else {
                return this.swf().isGrabToPanEnabled()
            }
        },
        panBy: function (b, a) {
            this.swf().panBy(b, a);
            return this
        },
        panToCenter: function () {
            this.swf().panToCenter();
            return this
        },
        zoom: function () {
            var a = this.swf();
            if (arguments.length > 0) {
                a.zoomTo(arguments[0]);
                return this
            } else {
                return a.getZoom()
            }
        },
        zoomToFit: function () {
            this.swf().zoomToFit();
            return this
        },
        node: function (b) {
            var a = this.swf().getNodeById(b);
            return this._parseJSON(a)
        },
        nodes: function (a) {
            var b = this.swf().getNodes(a);
            return this._parseJSON(b)
        },
        childNodes: function (a) {
            if (a == null) {
                throw ("The 'parent' parameter is mandatory.")
            }
            if (typeof a === "object" && a.hasOwnProperty("data")) {
                if (typeof a.data === "object") {
                    a = a.data.id
                }
            }
            var b = this.swf().getChildNodes(a);
            return this._parseJSON(b)
        },
        parentNodes: function () {
            var a = this.swf().getParentNodes();
            return this._parseJSON(a)
        },
        edge: function (b) {
            var a = this.swf().getEdgeById(b);
            return this._parseJSON(a)
        },
        edges: function () {
            var a = this.swf().getEdges();
            return this._parseJSON(a)
        },
        mergedEdges: function () {
            var a = this.swf().getMergedEdges();
            return this._parseJSON(a)
        },
        addElements: function () {
            var a, c = false;
            if (arguments.length > 0 && this._typeof(arguments[0]) === "array") {
                a = arguments[0]
            }
            if (a == null) {
                throw ("The 'items' object is mandatory.")
            }
            if (arguments.length > 1 && typeof arguments[1] === "boolean") {
                c = arguments[1]
            }
            var b = this.swf().addElements(a, c);
            return this._parseJSON(b)
        },
        addNode: function (a, g) {
            var c;
            var f = false;
            var e = null;
            var b = 2;
            if (arguments.length > b && (typeof arguments[b] === "object" || arguments[b] == null)) {
                c = arguments[b++]
            }
            if (arguments.length > b && typeof arguments[b] === "boolean") {
                f = arguments[b++]
            }
            var d = this.swf().addNode(a, g, c, f);
            return this._parseJSON(d)
        },
        addEdge: function (a) {
            var c = false;
            if (a == null) {
                throw ("The 'data' object is mandatory.")
            }
            if (a.source == null) {
                throw ("The 'source' node ID mandatory.")
            }
            if (a.target == null) {
                throw ("The 'target' node ID mandatory.")
            }
            if (arguments.length > 1) {
                c = arguments[1]
            }
            var b = this.swf().addEdge(a, c);
            return this._parseJSON(b)
        },
        removeNode: function (a, b) {
            this.swf().removeElements("nodes", [a], b);
            return this
        },
        removeEdge: function (a, b) {
            this.swf().removeElements("edges", [a], b);
            return this
        },
        removeElements: function () {
            var b, a, c = false;
            if (arguments.length >= 1) {
                if (typeof arguments[0] === "string") {
                    b = arguments[0]
                } else {
                    if (this._typeof(arguments[0]) === "array") {
                        a = arguments[0]
                    } else {
                        if (typeof arguments[0] === "boolean") {
                            c = arguments[0]
                        }
                    }
                }
            }
            if (arguments.length >= 2) {
                if (this._typeof(arguments[1]) === "array") {
                    a = arguments[1]
                } else {
                    if (typeof arguments[1] === "boolean") {
                        c = arguments[1]
                    }
                }
            }
            if (arguments.length > 2) {
                c = arguments[2]
            }
            b = this._normalizeGroup(b);
            this.swf().removeElements(b, a, c);
            return this
        },
        dataSchema: function () {
            return this._parseJSON(this.swf().getDataSchema())
        },
        addDataField: function () {
            var a, c, b = 0;
            if (arguments.length > 1) {
                a = arguments[b++]
            }
            c = arguments[b];
            if (c == null) {
                throw ("The 'dataField' object is mandatory.")
            }
            if (c.name == null) {
                throw ("The 'name' of the data field is mandatory.")
            }
            if (c.type == null) {
                throw ("The 'type' of the data field is mandatory.")
            }
            a = this._normalizeGroup(a);
            this.swf().addDataField(a, c);
            return this
        },
        removeDataField: function () {
            var b, a, c = 0;
            if (arguments.length > 1) {
                b = arguments[c++]
            }
            a = arguments[c];
            if (a == null) {
                throw ("The 'name' of the data field is mandatory.")
            }
            b = this._normalizeGroup(b);
            this.swf().removeDataField(b, a);
            return this
        },
        updateData: function () {
            var b, a, c;
            if (arguments.length === 1) {
                if (typeof arguments[0] === "string") {
                    b = arguments[0]
                } else {
                    if (this._typeof(arguments[0]) === "array") {
                        a = arguments[0]
                    } else {
                        c = arguments[0]
                    }
                }
            } else {
                if (arguments.length === 2) {
                    if (typeof arguments[0] === "string") {
                        b = arguments[0];
                        if (this._typeof(arguments[1]) === "array") {
                            a = arguments[1]
                        } else {
                            c = arguments[1]
                        }
                    } else {
                        a = arguments[0];
                        c = arguments[1]
                    }
                } else {
                    if (arguments.length > 2) {
                        b = arguments[0];
                        a = arguments[1];
                        c = arguments[2]
                    }
                }
            }
            b = this._normalizeGroup(b);
            this.swf().updateData(b, a, c);
            return this
        },
        select: function () {
            var b, a;
            if (arguments.length === 1) {
                if (typeof arguments[0] === "string") {
                    b = arguments[0]
                } else {
                    a = arguments[0]
                }
            } else {
                if (arguments.length > 1) {
                    b = arguments[0];
                    a = arguments[1]
                }
            }
            b = this._normalizeGroup(b);
            this.swf().select(b, a);
            return this
        },
        selected: function (a) {
            return this._nodesAndEdges(a, "getSelectedNodes", "getSelectedEdges")
        },
        deselect: function () {
            var b, a;
            if (arguments.length === 1) {
                if (typeof arguments[0] === "string") {
                    b = arguments[0]
                } else {
                    a = arguments[0]
                }
            } else {
                if (arguments.length > 1) {
                    b = arguments[0];
                    a = arguments[1]
                }
            }
            b = this._normalizeGroup(b);
            this.swf().deselect(b, a);
            return this
        },
        filter: function () {
            var b, d, a = [],
                g = false;
            if (arguments.length > 2) {
                b = arguments[0];
                d = arguments[1];
                g = arguments[2]
            } else {
                if (arguments.length === 2) {
                    if (typeof arguments[0] === "string") {
                        b = arguments[0];
                        d = arguments[1]
                    } else {
                        d = arguments[0];
                        g = arguments[1]
                    }
                } else {
                    if (arguments.length === 1) {
                        d = arguments[0]
                    }
                }
            }
            b = this._normalizeGroup(b);
            if (typeof d === "function") {
                var e = this._nodesAndEdges(b, "getNodes", "getEdges");
                if (e.length > 0) {
                    for (var c = 0; c < e.length; c++) {
                        var f = e[c];
                        if (d(f)) {
                            a.push(f.data.id)
                        }
                    }
                }
            } else {
                if (this._typeof(d) === "array") {
                    a = d
                }
            }
            this.swf().filter(b, a, g);
            return this
        },
        removeFilter: function (a, b) {
            a = this._normalizeGroup(a);
            this.swf().removeFilter(a, b);
            return this
        },
        firstNeighbors: function (b, a) {
            var c = this.swf().firstNeighbors(b, a);
            return this._parseJSON(c)
        },
        networkModel: function () {
            var a = this.swf().getNetworkModel();
            return this._parseJSON(a)
        },
        graphml: function () {
            return this.swf().getNetworkAsText("graphml")
        },
        xgmml: function () {
            return this.swf().getNetworkAsText("xgmml")
        },
        sif: function (a) {
            return this.swf().getNetworkAsText("sif", a)
        },
        pdf: function (a) {
            return this.swf().getNetworkAsImage("pdf", a)
        },
        svg: function (a) {
            return this.swf().getNetworkAsImage("svg", a)
        },
        png: function () {
            return this.swf().getNetworkAsImage("png")
        },
        exportNetwork: function (c, b, a) {
            c = c.toLowerCase().trim();
            this.swf().exportNetwork(c, b, a);
            return this
        },
        addListener: function (a, f) {
            var d;
            if (arguments.length > 2) {
                d = arguments[1];
                f = arguments[2]
            }
            a = this._normalizeEvent(a);
            d = this._normalizeGroup(d);
            if (!this._listeners) {
                this._listeners = {}
            }
            if (!this._listeners[d]) {
                this._listeners[d] = {}
            }
            var c = this._listeners[d][a];
            if (!c) {
                c = [];
                this._listeners[d][a] = c
            }
            var b = false;
            for (var e = 0; e < c.length; e++) {
                if (f === c[e]) {
                    b = true;
                    break
                }
            }
            if (!b) {
                c.push(f)
            }
            return this
        },
        removeListener: function (b) {
            var d;
            var f;
            if (arguments.length > 2) {
                d = arguments[1];
                f = arguments[2]
            } else {
                if (arguments.length === 2) {
                    if (typeof arguments[1] === "function") {
                        f = arguments[1]
                    } else {
                        d = arguments[1]
                    }
                }
            }
            b = this._normalizeEvent(b);
            d = this._normalizeGroup(d);
            var a;
            if (this._listeners) {
                a = this._listeners[d]
            }
            if (a) {
                if (!f) {
                    delete a[b]
                } else {
                    var c = a[b];
                    if (c) {
                        for (var e = 0; e < c.length; e++) {
                            if (f === c[e]) {
                                c.splice(e, 1);
                                break
                            }
                        }
                    }
                }
            }
            return this
        },
        hasListener: function (b) {
            var e = false;
            var d;
            if (arguments.length > 1) {
                d = arguments[1]
            }
            b = this._normalizeEvent(b);
            d = this._normalizeGroup(d);
            if (this._listeners) {
                var a = this._listeners[d];
                if (a) {
                    var c = a[b];
                    e = c && c.length > 0
                }
            }
            return e
        },
        addContextMenuItem: function (d, c) {
            if (d && c) {
                var b;
                if (arguments.length > 2) {
                    b = arguments[1];
                    c = arguments[2]
                }
                b = this._normalizeGroup(b);
                if (!this._contextMenuItems) {
                    this._contextMenuItems = {}
                }
                var a = this._contextMenuItems[b];
                if (!a) {
                    a = {};
                    this._contextMenuItems[b] = a
                }
                a[d] = c;
                this.swf().addContextMenuItem(d, b)
            }
            return this
        },
        removeContextMenuItem: function (c) {
            if (c) {
                var b;
                if (arguments.length > 1) {
                    b = arguments[1]
                }
                b = this._normalizeGroup(b);
                if (this._contextMenuItems) {
                    var a = this._contextMenuItems[b];
                    if (a) {
                        if (a[c]) {
                            this.swf().removeContextMenuItem(c, b);
                            delete a[c]
                        }
                    }
                }
            }
            return this
        },
        removeAllContextMenuItems: function () {
            if (this._contextMenuItems) {
                for (var b in this._contextMenuItems) {
                    if (this._contextMenuItems.hasOwnProperty(b)) {
                        var a = this._contextMenuItems[b];
                        if (a) {
                            for (var c in a) {
                                if (a.hasOwnProperty(c)) {
                                    this.removeContextMenuItem(c, b)
                                }
                            }
                        }
                    }
                }
            }
            return this
        },
        swf: function () {
            if (navigator.appName.indexOf("Microsoft") !== -1) {
                return window[this.id]
            } else {
                return document[this.id]
            }
        },
        embedSWF: function () {
            var c = 10;
            var l = 0;
            var j = 0;
            var h = this.containerId;
            AC_Generateobj = function (s, r, o) {
                var q = "";
                var p;
                if (isIE && isWin && !isOpera) {
                    q += "<object ";
                    for (p in s) {
                        if (Object.hasOwnProperty.call(s, p)) {
                            q += p + '="' + s[p] + '" '
                        }
                    }
                    q += ">";
                    for (p in r) {
                        if (Object.hasOwnProperty.call(r, p)) {
                            q += '<param name="' + p + '" value="' + r[p] + '" /> '
                        }
                    }
                    q += "</object>"
                } else {
                    q += "<embed ";
                    for (p in o) {
                        if (Object.hasOwnProperty.call(o, p)) {
                            q += p + '="' + o[p] + '" '
                        }
                    }
                    q += "> </embed>"
                }
                document.getElementById(h).innerHTML = q
            };
            var g = DetectFlashVer(6, 0, 65);
            var d = DetectFlashVer(c, l, j);
            if (g && !d) {
                var b = (isIE === true) ? "ActiveX" : "PlugIn";
                var a = window.location;
                document.title = document.title.slice(0, 47) + " - Flash Player Installation";
                var e = document.title;
                AC_FL_RunContent("src", this.flashInstallerPath, "FlashVars", "MMredirectURL=" + a + "&MMplayerType=" + b + "&MMdoctitle=" + e + "", "width", "100%", "height", "100%", "align", "middle", "id", this.id, "quality", "high", "bgcolor", "#ffffff", "name", this.id, "allowScriptAccess", "always", "type", "application/x-shockwave-flash", "pluginspage", "http://www.adobe.com/go/getflashplayer")
            } else {
                if (d) {
                    var n = ["resourceBundleUrl"];
                    var k = "";
                    if (this.options) {
                        for (var f in n) {
                            if (Object.hasOwnProperty.call(n, f)) {
                                var m = n[f];
                                if (this.options[m] !== undefined) {
                                    k += m + "=" + this.options[m] + "&"
                                }
                            }
                        }
                        k += "id=" + this.id
                    }
                    AC_FL_RunContent("src", this.swfPath, "width", "100%", "height", "100%", "align", "middle", "id", this.id, "quality", "high", "bgcolor", "#ffffff", "name", this.id, "allowScriptAccess", "always", "type", "application/x-shockwave-flash", "pluginspage", "http://www.adobe.com/go/getflashplayer", "wmode", "opaque", "flashVars", k)
                } else {
                    document.getElementById(h).innerHTML = this.flashAlternateContent
                }
            }
            return this
        },
        _onBeforeComplete: function () {
            var b = window.__flash__addCallback;
            window.__flash__addCallback = function (d, e) {
                try {
                    b(d, e)
                } catch (c) {}
            };
            var a = window.__flash__removeCallback;
            window.__flash__removeCallback = function (d, e) {
                try {
                    a(d, e)
                } catch (c) {}
            }
        },
        _onComplete: function () {
            this.swf().draw(this.drawOptions)
        },
        _onReady: function () {},
        _dispatch: function (d, b) {
            var a = null;
            if (b != null) {
                a = this._parseJSON(b)
            }
            var c = this[d](a);
            return c
        },
        _hasListener: function (a) {
            return this.hasListener(a.type, a.group)
        },
        _invokeListeners: function (b) {
            if (this._listeners) {
                var d = this._normalizeGroup(b.group);
                var a = this._listeners[d];
                if (a) {
                    var f = this._normalizeEvent(b.type);
                    var c = a[f];
                    for (var e = 0; e < c.length; e++) {
                        c[e](b)
                    }
                }
            }
        },
        _invokeContextMenuCallback: function (b) {
            if (this._contextMenuItems) {
                var c = this._normalizeGroup(b.group);
                var a = this._contextMenuItems[c];
                if (a) {
                    b = new org.cytoscapeweb.Event(b);
                    var d = a[b.value];
                    if (d) {
                        d(b)
                    }
                }
            }
        },
        _normalizeEvent: function (a) {
            if (a) {
                a = a.toLowerCase().trim()
            }
            return a
        },
        _normalizeGroup: function (a) {
            if (a) {
                a = a.toLowerCase().trim()
            }
            if (a !== "nodes" && a !== "edges") {
                a = "none"
            }
            return a
        },
        _nodesAndEdges: function (e, b, a) {
            var f = [];
            e = this._normalizeGroup(e);
            if (e === "nodes" || e === "none") {
                var d = this._parseJSON(this.swf()[b]());
                f = f.concat(d)
            }
            if (e === "edges" || e === "none") {
                var c = this._parseJSON(this.swf()[a]());
                f = f.concat(c)
            }
            return f
        },
        _typeof: function (a) {
            if (typeof (a) == "object") {
                if (a === null) {
                    return "null"
                }
                if (a.constructor == (new Array).constructor) {
                    return "array"
                }
                if (a.constructor == (new Date).constructor) {
                    return "date"
                }
                if (a.constructor == (new RegExp).constructor) {
                    return "regex"
                }
                return "object"
            }
            return typeof (a)
        },
        _parseJSON: function (a) {
            return JSON.parse(a)
        }
    };
    if (!String.prototype.trim) {
        String.prototype.trim = function () {
            return this.replace(/(?:(?:^|\n)\s+|\s+(?:$|\n))/g, "")
        }
    }
    org.cytoscapeweb.Event = function (a) {
        this.type = a.type;
        this.group = a.group;
        this.target = a.target;
        this.value = a.value;
        this.mouseX = a.mouseX;
        this.mouseY = a.mouseY
    }
})();