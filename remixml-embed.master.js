/** @license Copyright (c) 2018-2021 by Stephen R. van den Berg <srb@cuci.nl> */

/** @define {number} */ var DEBUG = 1;
/** @define {number} */ var ALERTS = 0;
                            // error context length
/** @define {number} */ var RUNTIMEDEBUG = 64;
/** @define {number} */ var MEASUREMENT = 0;
/** @define {number} */ var ASSERT = 1;
/** @define {number} */ var VERBOSE = 0;

// Cut BEGIN delete
(function()
{ "use strict";
// Cut END delete

  // Cut BEGIN for externs
  // Cut BEGIN for prepend
  // Cut END for prepend
  // Cut END for externs
  // Cut BEGIN for prepend
  // Cut END for prepend

  const O = Object;

  var /** function(string,number=):(function(!Object):!Array) */ compile;
  var /** !Object */ remixml;

  function /** !Node */ abstract2dom(/** !Array */ abstract,/** !Node= */ node)
  { return remixml["abstract2dom"](abstract, node);
  }

  var g =
  { "loadscripts": loadscripts,
    "loadscript": loadscript,
    "fetchfile": fetchfile,
  };

  if (!O.assign)
    O.defineProperty(O, "assign",
    { "value": function(d, s, i)
      { if (s) for (i in s) d[i] = s[i]; return d;
      }
    });

  function /** void */ fetchfile(/** string */ url,
    /** function(string):void */ cb)
  { let /** !Object */ r = new XMLHttpRequest();
    r.open("GET", url);
    r.onload = function()
    { if (r.status >= 200 && r.status < 500)
        cb(r.responseText);
    };
    r.send();
  }

  function /** void */ loadscript(/** !Node */ node,/** !Object */ $,
    /** string= */ src)
  { if (src == null)
    { if (node.src)
      { fetchfile(node.src, function /** void */(/** string */ src)
	 { loadscript(node, $, src);
	 });
	return;
      } else
	src = node.text;
    }
    var /** !Array */ abstract = compile(src)($);
    var /** !Node */ newnodes = abstract2dom(abstract);
    node.parentNode.replaceChild(newnodes, node);
  }

  function /** void */ loadscripts(/** !Node */ node,/** !Object */ $)
  { var /** NodeList */ list
     = node.querySelectorAll('script[type="text/remixml"]');
    var /** number */ i;
    for (i = 0; i < list.length; )
      loadscript(list[i++], $);	  // Execute in order defined
  }

  function /** !Object */ factory(/** !Object */ rxml)
  { compile = (remixml = rxml)["compile"];
    return g;
  }

  const /** string */ rxs = "remixml";

  if (typeof define == "function" && define["amd"])
    define("remixml-embed", [rxs], factory);
  else if (typeof exports == "object")
    O.assign(/** @type{!Object} */(exports),
     factory(require(rxs)));
  else {
    var W = window;
    W["Remixmlembed"] = factory(W["Remixml"]);
  }

// Cut BEGIN delete
}).call(this);
// Cut BEGIN end
