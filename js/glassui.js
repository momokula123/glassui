(function (root, factory) {
  if (typeof define === "function" && define.amd) {
    define([], factory);
  } else if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    root.GlassUI = factory();
  }
})(typeof self !== "undefined" ? self : this, function () {
  "use strict";

  var _toastContainer = null;

  var GRADE_COLORS = {
    A: "green",
    B: "cyan",
    C: "orange",
    D: "red",
    F: "red",
  };

  var TAG_COLORS = [
    "blue",
    "cyan",
    "green",
    "orange",
    "purple",
    "red",
    "pink",
    "yellow",
  ];

  function _el(tag, attrs, children) {
    var el = document.createElement(tag);
    if (attrs) {
      Object.keys(attrs).forEach(function (k) {
        if (k === "className") {
          el.className = attrs[k];
        } else if (k === "style" && typeof attrs[k] === "object") {
          Object.assign(el.style, attrs[k]);
        } else if (k.indexOf("on") === 0) {
          el.addEventListener(k.slice(2).toLowerCase(), attrs[k]);
        } else if (k === "htmlFor") {
          el.setAttribute("for", attrs[k]);
        } else if (k === "innerHTML") {
          el.innerHTML = attrs[k];
        } else if (k === "textContent") {
          el.textContent = attrs[k];
        } else {
          el.setAttribute(k, attrs[k]);
        }
      });
    }
    if (children) {
      if (!Array.isArray(children)) children = [children];
      children.forEach(function (c) {
        if (c == null) return;
        if (typeof c === "string" || typeof c === "number") {
          el.appendChild(document.createTextNode(c));
        } else if (c.nodeType) {
          el.appendChild(c);
        }
      });
    }
    return el;
  }

  function _getContainer() {
    if (!_toastContainer) {
      _toastContainer = _el("div", { className: "gu-toast-container" });
      document.body.appendChild(_toastContainer);
    }
    return _toastContainer;
  }

  function Toast(message, type, duration) {
    type = type || "info";
    duration = duration != null ? duration : 3000;
    var icons = {
      success: "\u2713",
      error: "\u2717",
      warning: "\u26A0",
      info: "\u2139",
    };
    var toast = _el("div", {
      className: "gu-toast gu-toast-" + type,
      innerHTML:
        '<span style="font-weight:600">' +
        (icons[type] || "") +
        "</span> " +
        _escapeHtml(message),
    });
    _getContainer().appendChild(toast);
    if (duration > 0) {
      setTimeout(function () {
        toast.classList.add("removing");
        setTimeout(function () {
          if (toast.parentNode) toast.parentNode.removeChild(toast);
        }, 250);
      }, duration);
    }
    return toast;
  }

  function _escapeHtml(str) {
    var div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }

  function Modal(options) {
    this.title = (options && options.title) || "";
    this.content = (options && options.content) || "";
    this.onClose = (options && options.onClose) || null;
    this._overlay = null;
    this._modal = null;
    this._build();
  }

  Modal.prototype._build = function () {
    var self = this;
    this._overlay = _el("div", { className: "gu-modal-overlay" });
    this._modal = _el("div", { className: "gu-modal" });

    var header = _el("div", { className: "gu-modal-header" });
    var title = _el("h3", {
      className: "gu-modal-title",
      textContent: this.title,
    });
    var closeBtn = _el("button", {
      className: "gu-modal-close",
      textContent: "\u00D7",
      onClick: function () {
        self.close();
      },
    });
    header.appendChild(title);
    header.appendChild(closeBtn);

    var body = _el("div", { className: "gu-modal-body" });
    if (typeof this.content === "string") {
      body.innerHTML = this.content;
    } else if (this.content && this.content.nodeType) {
      body.appendChild(this.content);
    }

    this._modal.appendChild(header);
    this._modal.appendChild(body);
    this._overlay.appendChild(this._modal);

    this._overlay.addEventListener("click", function (e) {
      if (e.target === self._overlay) self.close();
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && self._overlay.classList.contains("open")) {
        self.close();
      }
    });
  };

  Modal.prototype.open = function () {
    document.body.appendChild(this._overlay);
    requestAnimationFrame(function () {
      this._overlay.classList.add("open");
    }.bind(this));
    return this;
  };

  Modal.prototype.close = function () {
    var self = this;
    this._overlay.classList.remove("open");
    setTimeout(function () {
      if (self._overlay.parentNode) {
        self._overlay.parentNode.removeChild(self._overlay);
      }
      if (self.onClose) self.onClose();
    }, 250);
    return this;
  };

  function Tabs(options) {
    this.items = (options && options.items) || [];
    this.onChange = (options && options.onChange) || null;
    this.activeIndex = (options && options.activeIndex) || 0;
    this.element = null;
    this._build();
  }

  Tabs.prototype._build = function () {
    var self = this;
    this.element = _el("div", { className: "gu-tabs" });
    this.items.forEach(function (item, i) {
      var tab = _el("button", {
        className: "gu-tab" + (i === self.activeIndex ? " active" : ""),
        textContent: item.label,
        onClick: function () {
          self.setActive(i);
        },
      });
      self.element.appendChild(tab);
    });
  };

  Tabs.prototype.setActive = function (index) {
    var tabs = this.element.querySelectorAll(".gu-tab");
    tabs.forEach(function (t, i) {
      t.classList.toggle("active", i === index);
    });
    this.activeIndex = index;
    if (this.onChange) this.onChange(index, this.items[index]);
  };

  function Dropdown(options) {
    this.trigger = (options && options.trigger) || null;
    this.items = (options && options.items) || [];
    this.element = null;
    this._menu = null;
    this._build();
  }

  Dropdown.prototype._build = function () {
    var self = this;
    this.element = _el("div", { className: "gu-dropdown" });
    if (this.trigger) {
      this.trigger.addEventListener("click", function (e) {
        e.stopPropagation();
        self.element.classList.toggle("open");
      });
    }
    this._menu = _el("div", { className: "gu-dropdown-menu" });
    this.items.forEach(function (item) {
      if (item === "divider") {
        self._menu.appendChild(_el("div", { className: "gu-dropdown-divider" }));
        return;
      }
      var el = _el("button", {
        className: "gu-dropdown-item",
        textContent: item.label,
        onClick: function () {
          self.element.classList.remove("open");
          if (item.onClick) item.onClick();
        },
      });
      self._menu.appendChild(el);
    });
    this.element.appendChild(this._menu);
    document.addEventListener("click", function () {
      self.element.classList.remove("open");
    });
  };

  function Card(options) {
    this.icon = (options && options.icon) || null;
    this.iconBg = (options && options.iconBg) || "rgba(108,99,255,0.2)";
    this.title = (options && options.title) || "";
    this.subtitle = (options && options.subtitle) || "";
    this.description = (options && options.description) || "";
    this.tags = (options && options.tags) || [];
    this.grade = (options && options.grade) || null;
    this.interactive = (options && options.interactive) !== false;
    this.onClick = (options && options.onClick) || null;
    this.footer = (options && options.footer) || null;
    this.element = null;
    this._build();
  }

  Card.prototype._build = function () {
    var self = this;
    var classes = "gu-card";
    if (this.interactive) classes += " gu-card-interactive";
    this.element = _el("div", { className: classes });

    if (this.icon || this.title) {
      var header = _el("div", { className: "gu-card-header" });
      if (this.icon) {
        var iconEl = _el("div", {
          className: "gu-card-icon",
          innerHTML: this.icon,
        });
        header.appendChild(iconEl);
      }
      var titleWrap = _el("div");
      var titleEl = _el("div", {
        className: "gu-card-title",
        textContent: this.title,
      });
      titleWrap.appendChild(titleEl);
      if (this.subtitle) {
        var subEl = _el("div", {
          className: "gu-card-subtitle",
          textContent: this.subtitle,
        });
        titleWrap.appendChild(subEl);
      }
      header.appendChild(titleWrap);
      if (this.grade) {
        var gradeColor = GRADE_COLORS[this.grade.toUpperCase()] || "cyan";
        var gradeEl = _el("span", {
          className: "gu-grade gu-grade-" + gradeColor.toLowerCase(),
          textContent: this.grade.toUpperCase(),
        });
        header.appendChild(gradeEl);
      }
      this.element.appendChild(header);
    }

    if (this.description) {
      var body = _el("div", {
        className: "gu-card-body",
        textContent: this.description,
      });
      this.element.appendChild(body);
    }

    if (this.tags.length || this.footer) {
      var footer = _el("div", { className: "gu-card-footer" });
      this.tags.forEach(function (tag, i) {
        var color = TAG_COLORS[i % TAG_COLORS.length];
        var tagEl = _el("span", {
          className: "gu-tag gu-tag-" + color,
          textContent: tag,
        });
        footer.appendChild(tagEl);
      });
      if (this.footer) {
        if (typeof this.footer === "string") {
          footer.innerHTML += this.footer;
        } else if (this.footer.nodeType) {
          footer.appendChild(this.footer);
        }
      }
      this.element.appendChild(footer);
    }

    if (this.onClick) {
      this.element.addEventListener("click", function () {
        self.onClick();
      });
      this.element.style.cursor = "pointer";
    }
  };

  function ThemeManager() {
    this._current = "dark";
    this._listeners = [];
    var saved = localStorage.getItem("gu-theme");
    if (saved) {
      this._current = saved;
      this._apply();
    }
  }

  ThemeManager.prototype.get = function () {
    return this._current;
  };

  ThemeManager.prototype.set = function (theme) {
    this._current = theme;
    localStorage.setItem("gu-theme", theme);
    this._apply();
    this._listeners.forEach(function (fn) {
      fn(theme);
    });
  };

  ThemeManager.prototype.toggle = function () {
    this.set(this._current === "dark" ? "light" : "dark");
  };

  ThemeManager.prototype.onChange = function (fn) {
    this._listeners.push(fn);
  };

  ThemeManager.prototype._apply = function () {
    document.documentElement.setAttribute("data-gu-theme", this._current);
  };

  function Grid(columns, options) {
    options = options || {};
    this.columns = columns || 3;
    this.gap = options.gap || null;
    this.element = _el("div", {
      className: "gu-grid gu-grid-" + this.columns,
    });
    if (this.gap) this.element.style.gap = this.gap;
  }

  Grid.prototype.add = function (child) {
    this.element.appendChild(child.element || child);
    return this;
  };

  Grid.prototype.clear = function () {
    this.element.innerHTML = "";
    return this;
  };

  function SearchBar(options) {
    options = options || {};
    this.placeholder = options.placeholder || "\u641C\u7D22...";
    this.onSearch = options.onSearch || null;
    this.debounce = options.debounce != null ? options.debounce : 300;
    this.element = null;
    this._input = null;
    this._timer = null;
    this._build();
  }

  SearchBar.prototype._build = function () {
    var self = this;
    var wrapper = _el("div", { className: "gu-search-bar" });
    var icon = _el("span", {
      className: "gu-search-icon",
      innerHTML: '<i class="fas fa-search"></i>',
    });
    this._input = _el("input", {
      className: "gu-input",
      type: "text",
      placeholder: this.placeholder,
    });
    this._input.addEventListener("input", function () {
      clearTimeout(self._timer);
      self._timer = setTimeout(function () {
        if (self.onSearch) self.onSearch(self._input.value);
      }, self.debounce);
    });
    wrapper.appendChild(icon);
    wrapper.appendChild(this._input);
    this.element = wrapper;
  };

  SearchBar.prototype.getValue = function () {
    return this._input.value;
  };

  SearchBar.prototype.setValue = function (v) {
    this._input.value = v;
  };

  SearchBar.prototype.focus = function () {
    this._input.focus();
    return this;
  };

  function Navbar(options) {
    options = options || {};
    this.brand = options.brand || "";
    this.brandHtml = options.brandHtml || null;
    this.links = options.links || [];
    this.actions = options.actions || [];
    this.element = null;
    this._build();
  }

  Navbar.prototype._build = function () {
    var self = this;
    this.element = _el("nav", { className: "gu-nav" });

    var brand = _el("a", {
      className: "gu-nav-brand",
      href: "#",
      innerHTML: this.brandHtml || _escapeHtml(this.brand),
    });
    this.element.appendChild(brand);

    if (this.links.length) {
      var linksUl = _el("ul", { className: "gu-nav-links" });
      this.links.forEach(function (link) {
        var li = _el("li");
        var a = _el("a", {
          href: link.href || "#",
          textContent: link.label,
          className: link.active ? "active" : "",
        });
        li.appendChild(a);
        linksUl.appendChild(li);
      });
      this.element.appendChild(linksUl);
    }

    var actions = _el("div", { className: "gu-nav-actions" });
    this.actions.forEach(function (action) {
      if (typeof action === "string") {
        actions.innerHTML += action;
      } else if (action && action.nodeType) {
        actions.appendChild(action);
      }
    });
    this.element.appendChild(actions);

    var toggle = _el("button", {
      className: "gu-nav-mobile-toggle",
      textContent: "\u2630",
      onClick: function () {
        var links = self.element.querySelector(".gu-nav-links");
        if (links) links.classList.toggle("open");
      },
    });
    this.element.appendChild(toggle);
  };

  function Hero(options) {
    options = options || {};
    this.title = options.title || "";
    this.description = options.description || "";
    this.actions = options.actions || [];
    this.element = null;
    this._build();
  }

  Hero.prototype._build = function () {
    this.element = _el("div", { className: "gu-hero" });

    var title = _el("h1", {
      className: "gu-hero-title",
      textContent: this.title,
    });
    this.element.appendChild(title);

    if (this.description) {
      var desc = _el("p", {
        className: "gu-hero-desc",
        textContent: this.description,
      });
      this.element.appendChild(desc);
    }

    if (this.actions.length) {
      var actionsDiv = _el("div", { className: "gu-hero-actions" });
      this.actions.forEach(function (action) {
        if (action && action.nodeType) {
          actionsDiv.appendChild(action);
        }
      });
      this.element.appendChild(actionsDiv);
    }
  };

  function Stat(options) {
    options = options || {};
    this.value = options.value || "0";
    this.label = options.label || "";
    this.element = null;
    this._build();
  }

  Stat.prototype._build = function () {
    this.element = _el("div", { className: "gu-stat" });
    var value = _el("div", {
      className: "gu-stat-value",
      textContent: this.value,
    });
    var label = _el("div", {
      className: "gu-stat-label",
      textContent: this.label,
    });
    this.element.appendChild(value);
    this.element.appendChild(label);
  };

  function initBody() {
    document.body.classList.add("gu-body");
    var theme = localStorage.getItem("gu-theme") || "dark";
    document.documentElement.setAttribute("data-gu-theme", theme);
  }

  return {
    Toast: Toast,
    Modal: Modal,
    Tabs: Tabs,
    Dropdown: Dropdown,
    Card: Card,
    Grid: Grid,
    SearchBar: SearchBar,
    Navbar: Navbar,
    Hero: Hero,
    Stat: Stat,
    ThemeManager: ThemeManager,
    el: _el,
    initBody: initBody,
    GRADE_COLORS: GRADE_COLORS,
    TAG_COLORS: TAG_COLORS,
  };
});
