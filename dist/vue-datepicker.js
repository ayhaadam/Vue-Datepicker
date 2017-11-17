(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.VueDatepickerPlugin = factory());
}(this, (function () { 'use strict';

function ___$insertStyle(css) {
  if (!css) {
    return;
  }
  if (typeof window === 'undefined') {
    return;
  }

  var style = document.createElement('style');

  style.setAttribute('type', 'text/css');
  style.innerHTML = css;
  document.head.appendChild(style);

  return css;
}

___$insertStyle("/* @import .scss files here */\n");

___$insertStyle(".my-style {\n  font-size: 2em;\n  text-align: center; }\n");

var MyComponent = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('p', { staticClass: "my-style" }, [_vm._v(_vm._s(_vm.greetings) + " World !")]);
  }, staticRenderFns: [],
  data: function data() {
    return {
      greetings: 'Hello'
    };
  }
};

//
// vue PlugIn
//
var plugin$1 = {
  install: function install(vm) {
    vm.component('my-component', MyComponent);
  }
};

// Auto-install
var _Vue = null;
if (typeof window !== 'undefined') {
  _Vue = window.Vue;
} else if (typeof global !== 'undefined') {
  _Vue = global.Vue;
}
if (_Vue) {
  _Vue.use(plugin$1);
}

return plugin$1;

})));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidnVlLWRhdGVwaWNrZXIuanMiLCJzb3VyY2VzIjpbIi4uL3NyYy9wbHVnaW4vbXktY29tcG9uZW50LnZ1ZSIsIi4uL3NyYy9wbHVnaW4vaW5kZXguanMiLCIuLi9saWJlbnRyeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxwIGNsYXNzPVwibXktc3R5bGVcIj57e2dyZWV0aW5nc319IFdvcmxkICE8L3A+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICBkYXRhICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZ3JlZXRpbmdzOiAnSGVsbG8nXG4gICAgfVxuICB9XG59XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9Y3NzPlxuLm15LXN0eWxlIHtcbiBmb250LXNpemU6IDJlbTtcbiB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG48L3N0eWxlPlxuIiwiLy9cbi8vIHZ1ZSBQbHVnSW5cbi8vXG5pbXBvcnQgTXlDb21wb25lbnQgZnJvbSAnLi9teS1jb21wb25lbnQudnVlJ1xuXG5jb25zdCBwbHVnaW4gPSB7XG4gIGluc3RhbGwgKHZtKSB7XG4gICAgdm0uY29tcG9uZW50KCdteS1jb21wb25lbnQnLCBNeUNvbXBvbmVudClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBwbHVnaW5cblxuIiwiaW1wb3J0ICcuL3NyYy9zdHlsZXMvc3R5bGVzLnNjc3MnXG5pbXBvcnQgcGx1Z2luIGZyb20gJy4vc3JjL3BsdWdpbi9pbmRleC5qcydcbmV4cG9ydCBkZWZhdWx0IHBsdWdpblxuXG4vLyBBdXRvLWluc3RhbGxcbmxldCBfVnVlID0gbnVsbFxuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gIF9WdWUgPSB3aW5kb3cuVnVlXG59IGVsc2UgaWYgKHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnKSB7XG4gIF9WdWUgPSBnbG9iYWwuVnVlXG59XG5pZiAoX1Z1ZSkge1xuICBfVnVlLnVzZShwbHVnaW4pXG59XG4iXSwibmFtZXMiOlsicmVuZGVyIiwicGx1Z2luIiwidm0iLCJjb21wb25lbnQiLCJNeUNvbXBvbmVudCIsIl9WdWUiLCJ3aW5kb3ciLCJWdWUiLCJnbG9iYWwiLCJ1c2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtBLGtCQUFlLEVBQUNBOztHQUFELHFCQUFBO01BQUEsa0JBQ0w7V0FDQztpQkFDTTtLQURiOztDQUZKOztBQ0xBOzs7QUFHQSxBQUVBLElBQU1DLFdBQVM7U0FBQSxtQkFDSkMsRUFESSxFQUNBO09BQ1JDLFNBQUgsQ0FBYSxjQUFiLEVBQTZCQyxXQUE3Qjs7Q0FGSjs7QUNEQTtBQUNBLElBQUlDLE9BQU8sSUFBWDtBQUNBLElBQUksT0FBT0MsTUFBUCxLQUFrQixXQUF0QixFQUFtQztTQUMxQkEsT0FBT0MsR0FBZDtDQURGLE1BRU8sSUFBSSxPQUFPQyxNQUFQLEtBQWtCLFdBQXRCLEVBQW1DO1NBQ2pDQSxPQUFPRCxHQUFkOztBQUVGLElBQUlGLElBQUosRUFBVTtPQUNISSxHQUFMLENBQVNSLFFBQVQ7Ozs7Ozs7OzsifQ==
