webpackJsonp([1],{

/***/ "33WU":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "8T6S":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "BJy/":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "K5jv":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "cUaE":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "erTq":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "hgLs":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "qYBt":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "x35b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm.js
var vue_esm = __webpack_require__("7+uW");

// EXTERNAL MODULE: ./node_modules/vue-property-decorator/lib/vue-property-decorator.umd.js
var vue_property_decorator_umd = __webpack_require__("EOM2");
var vue_property_decorator_umd_default = /*#__PURE__*/__webpack_require__.n(vue_property_decorator_umd);

// CONCATENATED MODULE: ./node_modules/ts-loader!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/app.vue
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var app_App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.menu = [
            { text: 'home', to: '/' },
            { text: 'challenge', to: '/challenge' },
            { text: 'download', to: '/download' },
            { text: 'explore', to: '/explore' },
            { text: 'benchmark', to: '/benchmark' },
        ];
        return _this;
    }
    Object.defineProperty(App.prototype, "route", {
        get: function () {
            return this.$route.path;
        },
        enumerable: true,
        configurable: true
    });
    App = __decorate([
        Object(vue_property_decorator_umd["Component"])({ name: 'app' })
    ], App);
    return App;
}(vue_esm["default"]));
/* harmony default export */ var app = (app_App);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-588fa736","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/template-compiler/preprocessor.js?engine=pug!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/app.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[_c('header',{staticClass:"hero is-primary",attrs:{"id":"nav"}},[_vm._m(0),_c('div',{staticClass:"hero-foot"},[_c('nav',{staticClass:"tabs is-boxed is-full-width"},[_c('div',{staticClass:"container"},[_c('ul',_vm._l((_vm.menu),function(item){return _c('li',{class:{'is-active': _vm.route == item.to}},[_c('router-link',{staticClass:"nav-item",attrs:{"to":item.to}},[_vm._v(_vm._s(item.text))])],1)}))])])])]),_c('main',{staticClass:"section"},[_c('router-view')],1)])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"hero-body"},[_c('div',{staticClass:"container"},[_c('h1',{staticClass:"title"},[_vm._v("Youtube Large Video Segmentation")]),_c('h2',{staticClass:"subtitle"},[_vm._v("ECCV-2018 Workshop")])])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var selectortype_template_index_0_src_app = (esExports);
// CONCATENATED MODULE: ./src/app.vue
function injectStyle (ssrContext) {
  __webpack_require__("cUaE")
  __webpack_require__("BJy/")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  app,
  selectortype_template_index_0_src_app,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_app = (Component.exports);

// EXTERNAL MODULE: ./src/assets/theme.scss
var theme = __webpack_require__("hgLs");
var theme_default = /*#__PURE__*/__webpack_require__.n(theme);

// EXTERNAL MODULE: ./src/assets/main.scss
var main = __webpack_require__("erTq");
var main_default = /*#__PURE__*/__webpack_require__.n(main);

// EXTERNAL MODULE: ./node_modules/buefy/lib/index.js
var lib = __webpack_require__("MMSg");
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// CONCATENATED MODULE: ./src/components/index.ts




vue_esm["default"].use(lib_default.a);

// EXTERNAL MODULE: ./node_modules/vue-router/dist/vue-router.esm.js
var vue_router_esm = __webpack_require__("/ocq");

// CONCATENATED MODULE: ./node_modules/ts-loader!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/pages/home.vue
var home___extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var home___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var home_HomePage = /** @class */ (function (_super) {
    home___extends(HomePage, _super);
    function HomePage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.samples = ['bicycle1', 'fishtank1', 'mountain1'];
        return _this;
    }
    HomePage = home___decorate([
        vue_property_decorator_umd["Component"]
    ], HomePage);
    return HomePage;
}(vue_property_decorator_umd["Vue"]));
/* harmony default export */ var home = (home_HomePage);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-39afd14b","hasScoped":true,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/template-compiler/preprocessor.js?engine=pug!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/pages/home.vue
var home_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"page",attrs:{"id":"page-home"}},[_c('section',{staticClass:"section",attrs:{"id":"display-section"}},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"section"},[_c('div',{staticClass:"columns"},_vm._l((_vm.samples),function(sample){return _c('div',{staticClass:"column"},[_c('img',{attrs:{"src":'/static/samples/'+sample+'.jpg'}})])}))]),_vm._m(0),_vm._m(1),_vm._m(2)])])])}
var home_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"section"},[_c('h1',{staticClass:"title"},[_vm._v("DataSet")]),_c('div',[_vm._v("DAVIS 2016 In each video sequence a single instance is annotated.")]),_c('div',[_vm._v("DAVIS 2017 In each video sequence a single instance is annotated.")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"section"},[_c('h1',{staticClass:"title"},[_vm._v("Publication")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"section"},[_c('h1',{staticClass:"title"},[_vm._v("Preview of the Annotations")]),_c('div',{staticClass:"container"},[_c('video',{staticClass:"is-center",attrs:{"controls":"controls"}},[_c('source',{attrs:{"src":"/static/DAVIS-2017-TrainVal.mp4"}})])])])}]
var home_esExports = { render: home_render, staticRenderFns: home_staticRenderFns }
/* harmony default export */ var pages_home = (home_esExports);
// CONCATENATED MODULE: ./src/pages/home.vue
function home_injectStyle (ssrContext) {
  __webpack_require__("33WU")
}
var home_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var home___vue_template_functional__ = false
/* styles */
var home___vue_styles__ = home_injectStyle
/* scopeId */
var home___vue_scopeId__ = "data-v-39afd14b"
/* moduleIdentifier (server only) */
var home___vue_module_identifier__ = null
var home_Component = home_normalizeComponent(
  home,
  pages_home,
  home___vue_template_functional__,
  home___vue_styles__,
  home___vue_scopeId__,
  home___vue_module_identifier__
)

/* harmony default export */ var src_pages_home = (home_Component.exports);

// CONCATENATED MODULE: ./node_modules/ts-loader!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/pages/challenge.vue
var challenge___extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var challenge___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var challenge_ChallengePage = /** @class */ (function (_super) {
    challenge___extends(ChallengePage, _super);
    function ChallengePage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChallengePage = challenge___decorate([
        vue_property_decorator_umd["Component"]
    ], ChallengePage);
    return ChallengePage;
}(vue_property_decorator_umd["Vue"]));
/* harmony default export */ var challenge = (challenge_ChallengePage);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-31a55829","hasScoped":true,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/template-compiler/preprocessor.js?engine=pug!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/pages/challenge.vue
var challenge_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var challenge_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"page-dataset"}},[_c('section',{staticClass:"section"},[_c('div',{staticClass:"container"},[_c('p',[_vm._v("Some details of our dataset are given as follows. Our videos arecrawled from the YouTube-8M dataset which is a large-scale video\nclassification dataset. We carefully select 76 categories from the whole\ncategory set of that dataset. The selected categories cover a span of\ndifferent animals, vehicles, accessories and sports, which ensure that\nour dataset should contain diverse objects and motion, and should be\nrepresentative for everyday scenarios. We then download more than 5000\nvideos and use video-shot-detection algorithms to partition each video\ninto clips. Only one clip of each video whose length is about three to\nsix seconds is kept. We also manually verify each clip to contain the\ncorrect categories and is good to use for our task (e.g.  no scene\ntransition). We then ask human annotators to select up to five objects of\nproper size and categories per video and carefully annotate them every\nfive frames to reduce the redundancy. Note that object boundaries in our\ndataset are carefully traced instead of using rough polygons, thus the\nannotation quality can be guaranteed.")])])])])}]
var challenge_esExports = { render: challenge_render, staticRenderFns: challenge_staticRenderFns }
/* harmony default export */ var pages_challenge = (challenge_esExports);
// CONCATENATED MODULE: ./src/pages/challenge.vue
function challenge_injectStyle (ssrContext) {
  __webpack_require__("qYBt")
}
var challenge_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var challenge___vue_template_functional__ = false
/* styles */
var challenge___vue_styles__ = challenge_injectStyle
/* scopeId */
var challenge___vue_scopeId__ = "data-v-31a55829"
/* moduleIdentifier (server only) */
var challenge___vue_module_identifier__ = null
var challenge_Component = challenge_normalizeComponent(
  challenge,
  pages_challenge,
  challenge___vue_template_functional__,
  challenge___vue_styles__,
  challenge___vue_scopeId__,
  challenge___vue_module_identifier__
)

/* harmony default export */ var src_pages_challenge = (challenge_Component.exports);

// CONCATENATED MODULE: ./node_modules/ts-loader!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/pages/download.vue
var download___extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var download___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var download_DownloadPage = /** @class */ (function (_super) {
    download___extends(DownloadPage, _super);
    function DownloadPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DownloadPage = download___decorate([
        vue_property_decorator_umd["Component"]
    ], DownloadPage);
    return DownloadPage;
}(vue_property_decorator_umd["Vue"]));
/* harmony default export */ var download = (download_DownloadPage);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-da92a694","hasScoped":true,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/template-compiler/preprocessor.js?engine=pug!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/pages/download.vue
var download_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"page",attrs:{"id":"page-download"}},[_c('section',{staticClass:"section"},[_vm._m(0),_c('div',{staticClass:"container download"},[_c('a',{staticClass:"button is-primary"},[_c('b-icon',{attrs:{"icon":"github-circle","size":"is-small"}}),_c('span',[_vm._v("Matlab code")])],1)]),_c('div',{staticClass:"container download"},[_c('a',{staticClass:"button is-primary"},[_c('b-icon',{attrs:{"icon":"github-circle","size":"is-small"}}),_c('span',[_vm._v("Python code")])],1)])]),_c('section',{staticClass:"section"},[_vm._m(1),_c('div',{staticClass:"container download"},[_c('a',{staticClass:"button is-info"},[_c('b-icon',{attrs:{"icon":"cube-outline","size":"is-small"}}),_c('span',[_vm._v("Test Dev and Test Challenge")])],1)])]),_c('section',{staticClass:"section"},[_c('div',{staticClass:"container"},[_c('h1',{staticClass:"title"},[_vm._v("Downloads")]),_c('p',[_vm._v("The official metrics will be computed using the images and annotations at 480p resolution, but feel free to use the full resolution ones (4k, 1080p, etc.) in any step of your research.")]),_c('div',{staticClass:"container download"},[_c('span',{staticClass:"left"},[_vm._v("Train-Val - Images and Annotations")]),_c('a',{staticClass:"button is-warning"},[_c('b-icon',{attrs:{"icon":"zip-box","size":"is-small"}}),_c('span',[_vm._v("480p")])],1),_c('a',{staticClass:"button is-warning"},[_c('b-icon',{attrs:{"icon":"zip-box","size":"is-small"}}),_c('span',[_vm._v("full resolution")])],1)]),_c('div',{staticClass:"container download"},[_c('span',{staticClass:"left"},[_vm._v("Test-Dev - Images and First Frame Annotations")]),_c('a',{staticClass:"button is-warning"},[_c('b-icon',{attrs:{"icon":"zip-box","size":"is-small"}}),_c('span',[_vm._v("480p")])],1),_c('a',{staticClass:"button is-warning"},[_c('b-icon',{attrs:{"icon":"zip-box","size":"is-small"}}),_c('span',[_vm._v("full resolution")])],1)]),_c('div',{staticClass:"container download"},[_c('span',{staticClass:"left"},[_vm._v("Test-Challenge - Images and First Frame Annotations")]),_c('a',{staticClass:"button is-warning"},[_c('b-icon',{attrs:{"icon":"zip-box","size":"is-small"}}),_c('span',[_vm._v("480p")])],1),_c('a',{staticClass:"button is-warning"},[_c('b-icon',{attrs:{"icon":"zip-box","size":"is-small"}}),_c('span',[_vm._v("full resolution")])],1)])])])])}
var download_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_c('h1',{staticClass:"title"},[_vm._v("Evaluation Code")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_c('h1',{staticClass:"title"},[_vm._v("Evaluation Test-Dev and Test-Challenge")])])}]
var download_esExports = { render: download_render, staticRenderFns: download_staticRenderFns }
/* harmony default export */ var pages_download = (download_esExports);
// CONCATENATED MODULE: ./src/pages/download.vue
function download_injectStyle (ssrContext) {
  __webpack_require__("8T6S")
}
var download_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var download___vue_template_functional__ = false
/* styles */
var download___vue_styles__ = download_injectStyle
/* scopeId */
var download___vue_scopeId__ = "data-v-da92a694"
/* moduleIdentifier (server only) */
var download___vue_module_identifier__ = null
var download_Component = download_normalizeComponent(
  download,
  pages_download,
  download___vue_template_functional__,
  download___vue_styles__,
  download___vue_scopeId__,
  download___vue_module_identifier__
)

/* harmony default export */ var src_pages_download = (download_Component.exports);

// CONCATENATED MODULE: ./node_modules/ts-loader!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/pages/explore.vue
var explore___extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var explore___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

function genframes(x) {
    var frames = [];
    for (var i = 0; i < x; i += 5)
        frames.push(i);
    return frames;
}
var explore_ExplorePage = /** @class */ (function (_super) {
    explore___extends(ExplorePage, _super);
    function ExplorePage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.showModal = false;
        _this.showAnnotation = true;
        _this.videos = {
            bull: genframes(175),
            butterfly: genframes(175),
            camel: genframes(175),
            chameleon: genframes(175)
        };
        _this.cvideo = 'bull';
        _this.cframe = 1;
        return _this;
    }
    ExplorePage.prototype.imgurl = function (video, frame) {
        return "/static/demos/" + video + "_images/" + frame + ".jpg";
    };
    ExplorePage.prototype.annotationurl = function (video, frame) {
        return "/static/demos/" + video + "_annotations/" + frame + ".png";
    };
    ExplorePage = explore___decorate([
        vue_property_decorator_umd["Component"]
    ], ExplorePage);
    return ExplorePage;
}(vue_property_decorator_umd["Vue"]));
/* harmony default export */ var explore = (explore_ExplorePage);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-06ab8220","hasScoped":true,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/template-compiler/preprocessor.js?engine=pug!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/pages/explore.vue
var explore_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"explore",attrs:{"id":"page-explore"}},[_c('section',{staticClass:"section"},[_c('div',{staticClass:"container grid"},_vm._l((_vm.videos),function(frames,video){return _c('div',{staticClass:"square",on:{"click":function($event){_vm.cframe=1; _vm.cvideo=video; _vm.showModal=true}}},[_c('img',{staticClass:"demo",attrs:{"src":_vm.imgurl(video, 0)}}),_c('div',{staticClass:"banner"},[_vm._v(_vm._s(video))])])}))]),_c('b-modal',{attrs:{"active":_vm.showModal},on:{"update:active":function($event){_vm.showModal=$event}}},[_c('div',{staticClass:"container modal"},[_c('div',{staticClass:"card"},[_c('div',{staticClass:"card-content"},[_c('div',{staticClass:"square"},[_c('img',{staticClass:"image",attrs:{"src":_vm.imgurl(_vm.cvideo, _vm.videos[_vm.cvideo][_vm.cframe])}}),_c('img',{staticClass:"annotation",class:{ hide: !_vm.showAnnotation },attrs:{"src":_vm.annotationurl(_vm.cvideo, _vm.videos[_vm.cvideo][_vm.cframe])}})]),_c('b-pagination',{attrs:{"total":_vm.videos[_vm.cvideo].length,"current":_vm.cframe,"order":"is-centered","per-page":1},on:{"update:current":function($event){_vm.cframe=$event}}}),_c('div',{staticClass:"line"},[_c('b-switch',{model:{value:(_vm.showAnnotation),callback:function ($$v) {_vm.showAnnotation=$$v},expression:"showAnnotation"}},[_vm._v("annotation")])],1)],1)])])])],1)}
var explore_staticRenderFns = []
var explore_esExports = { render: explore_render, staticRenderFns: explore_staticRenderFns }
/* harmony default export */ var pages_explore = (explore_esExports);
// CONCATENATED MODULE: ./src/pages/explore.vue
function explore_injectStyle (ssrContext) {
  __webpack_require__("K5jv")
}
var explore_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var explore___vue_template_functional__ = false
/* styles */
var explore___vue_styles__ = explore_injectStyle
/* scopeId */
var explore___vue_scopeId__ = "data-v-06ab8220"
/* moduleIdentifier (server only) */
var explore___vue_module_identifier__ = null
var explore_Component = explore_normalizeComponent(
  explore,
  pages_explore,
  explore___vue_template_functional__,
  explore___vue_styles__,
  explore___vue_scopeId__,
  explore___vue_module_identifier__
)

/* harmony default export */ var src_pages_explore = (explore_Component.exports);

// CONCATENATED MODULE: ./src/pages/index.ts






vue_esm["default"].use(vue_router_esm["a" /* default */]);
/* harmony default export */ var pages = (new vue_router_esm["a" /* default */]({
    mode: 'hash',
    routes: [
        {
            path: '/',
            name: 'home',
            component: src_pages_home,
        }, {
            path: '/challenge',
            name: 'challenge',
            component: src_pages_challenge,
        }, {
            path: '/download',
            name: 'download',
            component: src_pages_download,
        }, {
            path: '/explore',
            name: 'explore',
            component: src_pages_explore,
        }
    ],
}));

// CONCATENATED MODULE: ./src/main.ts
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.




new vue_esm["default"]({
    el: "#app",
    router: pages,
    template: "<app/>",
    components: { app: src_app },
});


/***/ })

},["x35b"]);
//# sourceMappingURL=app.js.map