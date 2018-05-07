webpackJsonp([1],{

/***/ "9B9P":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "F0vs":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "K5jv":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "erTq":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "gDjx":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "hgLs":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "rk90":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "u2YC":
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

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-1c662c00","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/template-compiler/preprocessor.js?engine=pug!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/app.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[_c('header',{staticClass:"hero is-primary",attrs:{"id":"nav"}},[_vm._m(0),_c('div',{staticClass:"hero-foot"},[_c('nav',{staticClass:"tabs is-boxed is-full-width"},[_c('div',{staticClass:"container"},[_c('ul',_vm._l((_vm.menu),function(item){return _c('li',{class:{'is-active': _vm.route == item.to}},[_c('router-link',{staticClass:"nav-item",attrs:{"to":item.to}},[_vm._v(_vm._s(item.text))])],1)}))])])])]),_c('main',{staticClass:"section"},[_c('router-view')],1)])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"hero-body"},[_c('div',{staticClass:"container"},[_c('h1',{staticClass:"title"},[_vm._v("Youtube Video Object Segmentation")])])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var selectortype_template_index_0_src_app = (esExports);
// CONCATENATED MODULE: ./src/app.vue
function injectStyle (ssrContext) {
  __webpack_require__("F0vs")
  __webpack_require__("9B9P")
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
        _this.infos = [
            {
                number: 1000,
                unit: 'annotations',
            },
            { number: 49, unit: 'types of objects' },
            { number: 3759, unit: 'videos' },
            { number: 5, unit: 'objects per frame on average' },
        ];
        return _this;
    }
    HomePage.prototype.expandinfo = function (info) {
        return "The data set consists of " + info['number'] + " " + info['unit'];
    };
    HomePage = home___decorate([
        vue_property_decorator_umd["Component"]
    ], HomePage);
    return HomePage;
}(vue_property_decorator_umd["Vue"]));
/* harmony default export */ var home = (home_HomePage);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-24bc4728","hasScoped":true,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/template-compiler/preprocessor.js?engine=pug!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/pages/home.vue
var home_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"page",attrs:{"id":"page-home"}},[_c('section',{staticClass:"section is-info hero"},[_c('div',{staticClass:"hero-body"},[_c('div',{staticClass:"columns"},_vm._l((_vm.samples),function(sample){return _c('div',{staticClass:"column"},[_c('img',{attrs:{"src":'/static/samples/'+sample+'.jpg'}})])})),_c('div',{staticClass:"columns"},_vm._l((_vm.infos),function(info){return _c('div',{staticClass:"column"},[_c('div',{staticClass:"infos"},[_c('b-tooltip',{attrs:{"label":_vm.expandinfo(info),"type":"is-light"}},[_c('div',{staticClass:"num"},[_vm._v(" "+_vm._s(info.number))]),_c('div',{staticClass:"info"},[_vm._v(_vm._s(info.unit))])])],1)])}))])]),_c('section',{staticClass:"section",attrs:{"id":"display-section"}},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"section"},[_c('h1',{staticClass:"title"},[_vm._v("Introduction")]),_c('div',{staticClass:"columns"},_vm._l((_vm.samples),function(sample){return _c('div',{staticClass:"column"},[_c('img',{attrs:{"src":'/static/samples/'+sample+'.jpg'}})])})),_c('p',[_vm._v("Video object segmentation, which targets at segmenting a particular object instance throughout the entire video sequence given only the object mask on the first frame, has attracted much attention from the vision community recently. However, we notice that the current datasets for video object segmentation have several limitations, i.e. limited number of videos and no separation between training and evaluation categories. To facilitate future research on this topic, we collected a large scale video segmentation datasets called Youtube-VOS (YouTube Video Object Segmentation). Our dataset contains 3,252 YouTube video clips featuring 78 categories covering common animals, vehicles, accessories and human activities. Each video clip is about 3 to 6 seconds long and often contains multiple objects, which are manually segmented by professional annotators. In addition, our test set contains 10 unique categories that do not exist in the training set and are used to evaluate the generalization ability of existing approaches on unseen categories.")]),_vm._m(0)]),_c('div',{staticClass:"section"}),_vm._m(1),_vm._m(2),_vm._m(3)])])])}
var home_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_vm._v("To facilitate researches in video object segmentation in a large scale base, we will organize a workshop competition named \"The 1st Large-scale Video Object Segmentation Challenge\" at ECCV 2018. The competition will be based on the Youtube-VOS dataset. For details, please check out"),_c('a',{attrs:{"href":"challenge"}},[_vm._v("Challenge page")]),_vm._v(".")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"section"},[_c('h1',{staticClass:"title"},[_vm._v("Data Statistics")]),_c('p',[_vm._v("put a historgram of number of different categories, a histogram of video length")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"section"},[_c('h1',{staticClass:"title"},[_vm._v("Publication")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"section"},[_c('h1',{staticClass:"title"},[_vm._v("License")]),_c('p',[_vm._v("The annotations in this dataset belong to the organizers of the challenge and are licensed under a"),_c('a',{attrs:{"href":"https://creativecommons.org/licenses/by/4.0/"}},[_vm._v("Creative Commons Attribution 4.0 License")]),_vm._v(".")])])}]
var home_esExports = { render: home_render, staticRenderFns: home_staticRenderFns }
/* harmony default export */ var pages_home = (home_esExports);
// CONCATENATED MODULE: ./src/pages/home.vue
function home_injectStyle (ssrContext) {
  __webpack_require__("gDjx")
}
var home_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var home___vue_template_functional__ = false
/* styles */
var home___vue_styles__ = home_injectStyle
/* scopeId */
var home___vue_scopeId__ = "data-v-24bc4728"
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
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.organizers = [
            { name: 'Ning Xu', affiliation: 'Adobe Research', im_name: 'Ning_Xu' },
            { name: 'Linjie Yang', affiliation: 'Snap Research', im_name: 'LinjieYang' },
            { name: 'Yuchen Fan', affiliation: 'UIUC', im_name: 'YuchenFan' },
        ];
        return _this;
    }
    ChallengePage = challenge___decorate([
        vue_property_decorator_umd["Component"]
    ], ChallengePage);
    return ChallengePage;
}(vue_property_decorator_umd["Vue"]));
/* harmony default export */ var challenge = (challenge_ChallengePage);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-2047a9d0","hasScoped":true,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/template-compiler/preprocessor.js?engine=pug!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/pages/challenge.vue
var challenge_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"page-dataset"}},[_c('section',{staticClass:"section"},[_c('div',{staticClass:"container"}),_vm._m(0),_vm._m(1),_vm._m(2),_c('div',{staticClass:"section"},[_c('h1',{staticClass:"title"},[_vm._v("Organizers")]),_c('div',{staticClass:"columns"},_vm._l((_vm.organizers),function(organizer){return _c('div',{staticClass:"column"},[_c('figure',{staticClass:"image is-128x128"},[_c('img',{staticClass:"is-rounded",attrs:{"src":'/static/organizers/'+organizer.im_name+'.jpg'}})]),_c('p',{staticClass:"is-size-7-desktop"},[_vm._v(_vm._s(organizer.name)+" ")]),_c('p',{staticClass:"is-size-7-desktop"},[_vm._v(_vm._s(organizer.affiliation))])])}))])])])}
var challenge_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"section"},[_c('h1',{staticClass:"title"},[_vm._v("News")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"section"},[_c('h1',{staticClass:"title"},[_vm._v("Challenge")]),_c('h1',{staticClass:"title is-5"},[_vm._v("Time schedule")]),_c('p',[_vm._v("Test-Dev: June 2018 - Open end.")]),_c('p',[_vm._v("Test-Challenge: 18th Aug 2018 23:59 UTC - 3th Sep 2018 23:59 UTC.")]),_c('h1',{staticClass:"title is-5"},[_vm._v("Datasets")]),_c('li',[_vm._v("Train: 3000 sequences in XX categories.")]),_c('li',[_vm._v("Val: 200 sequences in XX categories that are the same as training set.")]),_c('li',[_vm._v("Test-Dev: 200 sequences in the XX training categories, and 100 sequences of 10 categories that are unseen in training.")]),_c('li',[_vm._v("Test-Challenge: Another 200 sequences in the XX training categories, and 100 sequences of 10 categories that are unseen in training.")]),_c('li',[_vm._v("RGB images and annotations for the labeled frames will be provided. We will also provide a download link for all image frames.")]),_c('h1',{staticClass:"title is-5"},[_vm._v("Evaluation Metric")]),_c('p',[_vm._v("Similar to previous video object segmentation challenge DAVIS, we will be using Region Jaccard (J) and Boundary F measure (F) as evaluation metric.  The overall ranking measures will be computed as the mean between J and F, both averaged over all objects. Note that we have some of the objects start appearing from the middle of videos, we will only compute the metrics after the first occurence of these objects.")]),_c('h1',{staticClass:"title is-5"},[_vm._v("Submission")]),_c('p',[_vm._v("Submission of evaluation results will be made through "),_c('a',{attrs:{"href":"https://competitions.codalab.org"}},[_vm._v("CodaLab")]),_vm._v(".")]),_c('h1',{staticClass:"title is-5"},[_vm._v("Prizes")]),_c('h1',{staticClass:"title is-5"},[_vm._v("Papers")]),_c('li',[_vm._v("We will be inviting top-ranking teams to submit short technical papers. The template of the paper is the same as CVPR, but length will be limited to 6 pages including references.")]),_c('li',[_vm._v("All papers will be invited to the workshop in form of oral presentation or poster.")]),_c('li',[_vm._v("Accepted papers will be self-published in the web of the challenge.")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"section"},[_c('h1',{staticClass:"title"},[_vm._v("Workshop")]),_c('h1',{staticClass:"title is-5"},[_vm._v("Invited Speakers")]),_c('h1',{staticClass:"title is-5"},[_vm._v("Workshop program (Sep 14th afternoon)")]),_c('p',[_vm._v("Will be available soon")])])}]
var challenge_esExports = { render: challenge_render, staticRenderFns: challenge_staticRenderFns }
/* harmony default export */ var pages_challenge = (challenge_esExports);
// CONCATENATED MODULE: ./src/pages/challenge.vue
function challenge_injectStyle (ssrContext) {
  __webpack_require__("u2YC")
}
var challenge_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var challenge___vue_template_functional__ = false
/* styles */
var challenge___vue_styles__ = challenge_injectStyle
/* scopeId */
var challenge___vue_scopeId__ = "data-v-2047a9d0"
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

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-e5c0ba2a","hasScoped":true,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/template-compiler/preprocessor.js?engine=pug!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/pages/download.vue
var download_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"page",attrs:{"id":"page-download"}},[_c('section',{staticClass:"section"},[_vm._m(0),_c('div',{staticClass:"container download"},[_c('a',{staticClass:"button is-primary"},[_c('b-icon',{attrs:{"icon":"github-circle","size":"is-small"}}),_c('span',[_vm._v("Matlab code")])],1)]),_c('div',{staticClass:"container download"},[_c('a',{staticClass:"button is-primary"},[_c('b-icon',{attrs:{"icon":"github-circle","size":"is-small"}}),_c('span',[_vm._v("Python code")])],1)])]),_c('section',{staticClass:"section"},[_vm._m(1),_c('div',{staticClass:"container download"},[_c('a',{staticClass:"button is-info"},[_c('b-icon',{attrs:{"icon":"cube-outline","size":"is-small"}}),_c('span',[_vm._v("Test Dev and Test Challenge")])],1)])]),_c('section',{staticClass:"section"},[_c('div',{staticClass:"container"},[_c('h1',{staticClass:"title"},[_vm._v("Downloads")]),_c('p',[_vm._v("To reduce data preprocessing time, we have prepared all image frames and annotations in 360p resolution. We provide download links for annotated image frames (6fps) as well as raw image frames (30fps).")]),_c('div',{staticClass:"container download"},[_c('span',{staticClass:"left"},[_vm._v("Train-Val - Images and Annotations")]),_c('a',{staticClass:"button is-warning"},[_c('b-icon',{attrs:{"icon":"zip-box","size":"is-small"}}),_c('span',[_vm._v("Annotated frames")])],1),_c('a',{staticClass:"button is-warning"},[_c('b-icon',{attrs:{"icon":"zip-box","size":"is-small"}}),_c('span',[_vm._v("All frames")])],1)]),_c('div',{staticClass:"container download"},[_c('span',{staticClass:"left"},[_vm._v("Test-Dev - Images and First Frame Annotations")]),_c('a',{staticClass:"button is-warning"},[_c('b-icon',{attrs:{"icon":"zip-box","size":"is-small"}}),_c('span',[_vm._v("Annotated frames")])],1),_c('a',{staticClass:"button is-warning"},[_c('b-icon',{attrs:{"icon":"zip-box","size":"is-small"}}),_c('span',[_vm._v("All frames")])],1)]),_c('div',{staticClass:"container download"},[_c('span',{staticClass:"left"},[_vm._v("Test-Challenge - Images and First Frame Annotations")]),_c('a',{staticClass:"button is-warning"},[_c('b-icon',{attrs:{"icon":"zip-box","size":"is-small"}}),_c('span',[_vm._v("Annotated frames")])],1),_c('a',{staticClass:"button is-warning"},[_c('b-icon',{attrs:{"icon":"zip-box","size":"is-small"}}),_c('span',[_vm._v("All frames")])],1)])])])])}
var download_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_c('h1',{staticClass:"title"},[_vm._v("Evaluation Code")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_c('h1',{staticClass:"title"},[_vm._v("Evaluation Test-Dev and Test-Challenge")])])}]
var download_esExports = { render: download_render, staticRenderFns: download_staticRenderFns }
/* harmony default export */ var pages_download = (download_esExports);
// CONCATENATED MODULE: ./src/pages/download.vue
function download_injectStyle (ssrContext) {
  __webpack_require__("rk90")
}
var download_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var download___vue_template_functional__ = false
/* styles */
var download___vue_styles__ = download_injectStyle
/* scopeId */
var download___vue_scopeId__ = "data-v-e5c0ba2a"
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