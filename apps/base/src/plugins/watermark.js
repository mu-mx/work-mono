var WaterMark = function () {
  this.container = null;
  this.defaultOption = {
    id: "watermark-global",
    width: 300,
    preventTamper: true,
    height: 115,
    text: "icc-watermark",
    font: "20px Times New Roman",
    rotateDegree: (30 * Math.PI) / 180,
    style: {
      "pointer-events": "none",
      width: "100%",
      height: "100%",
      top: 0,
      left: 0,
      position: "fixed",
      "z-index": 5000,
    },
  };
};

//create image base64 url via canvas
WaterMark.prototype.createImageUrl = function (options) {
  var canvas = document.createElement("canvas");
  var text = options.text;
  canvas.width = 300;
  canvas.height = 150;
  var ctx = canvas.getContext("2d");
  ctx.rotate((19 * Math.PI) / 180);
  ctx.font = options.font || "15px Microsoft JhengHei";
  ctx.fillStyle = "rgba(17, 17, 17, 0.08)";
  ctx.textAlign = "left";
  ctx.textBaseline = "Middle";
  ctx.fillText(text, canvas.width / 3, canvas.height / 2);
  ctx.rotate(options.rotateDegree);
  return canvas.toDataURL("image/png");
};

WaterMark.prototype.createContainer = function (options, forceCreate) {
  var oldDiv = document.getElementById(options.id);
  var existsOldDiv = typeof oldDiv != "undefined" && oldDiv != null;
  if (!forceCreate && existsOldDiv) {
    return existsOldDiv;
  }
  var url = this.createImageUrl(options);
  var div = existsOldDiv ? oldDiv : document.createElement("div");
  div.id = options.id;

  var parentEl = options.preventTamper
    ? document.body
    : options.parentEl || document.body;

  if (typeof parentEl === "string") {
    if (parentEl.startsWith("#")) {
      parentEl = parentEl.substring(1);
    }
    parentEl = document.getElementById(parentEl);
  }
  var rect = parentEl.getBoundingClientRect();
  options.style.left = (options.left || rect.left) + "px";
  options.style.top = (options.top || rect.top) + "px";
  div.style.cssText = this.getStyleText(options);
  div.setAttribute("class", "");
  div.style.background = "url(" + url + ") repeat top left";
  !oldDiv && parentEl.appendChild(div);
  return div;
};

WaterMark.prototype.getStyleText = function (options) {
  var ret = "",
    style = options.style;
  Object.keys(style).forEach(function (k) {
    ret += k + ": " + style[k] + ";";
  });
  return ret;
};

WaterMark.prototype.observe = function (options) {
  var self = this;
  self.container = self.createContainer(options, true);
  var target = self.container;
  var observer = new MutationObserver(function () {
    observer.disconnect();
    self.container = self.createContainer(options, true);
    var config = {
      attributes: true,
      childList: true,
      characterData: true,
      subtree: true,
    };
    observer.observe(target, config);
  });
  var config = {
    attributes: true,
    childList: true,
    characterData: true,
    subtree: true,
  };
  observer.observe(target, config);
};

WaterMark.prototype.observeBody = function (options) {
  //observe body element, recreate if the element is deleted
  var self = this;
  var pObserver = new MutationObserver(function (mutations) {
    mutations.forEach(function (m) {
      var length = m.removedNodes.length;
      if (m.type === "childList" && length > 0) {
        var watermarkNodeRemoved = false;
        for (var n = 0; n < length; n++) {
          if (m.removedNodes[n].id === options.id) {
            watermarkNodeRemoved = true;
            break;
          }
        }
        if (watermarkNodeRemoved) {
          self.observe(options, true);
        }
      }
    });
  });
  pObserver.observe(document.body, { childList: true, subtree: true });
};

WaterMark.prototype.init = function (options) {
  options = !options
    ? this.defaultOption
    : Object.assign({}, this.defaultOption, options);
  this.observe(options);
  this.observeBody(options);
};

module.exports = WaterMark;
