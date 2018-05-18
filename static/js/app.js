webpackJsonp([1],{

/***/ "/S1M":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "5WGJ":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "Be0L":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "IfUc":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "L2CI":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "TgP7":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "VTNl":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "bVI6":
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

/***/ "ioKj":
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
            { text: 'Home', to: 'home' },
            {
                text: 'Dataset', to: 'dataset',
                submenu: [{
                        text: 'Download', 'to': 'download'
                    }, {
                        text: 'Explore', 'to': 'explore'
                    }],
            },
            {
                text: 'Challenge 2018', to: 'challenge',
                submenu: [{
                        text: 'Challenge 2018', to: 'challenge2018',
                    }, {
                        text: 'Guidelines', to: 'guidelines',
                    }, {
                        text: 'Workshop Program', to: 'workshop',
                    }, {
                        text: 'Leaderboard', to: 'leaderboard',
                        disabled: true,
                    },],
            }
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

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-56bc22d6","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/template-compiler/preprocessor.js?engine=pug!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/app.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[_c('header',{staticClass:"hero is-primary",attrs:{"id":"nav"}},[_vm._m(0),_c('div',{staticClass:"hero-foot"},[_c('nav',{staticClass:"tabs is-full-width is-boxed"},[_c('div',{staticClass:"container"},[_vm._l((_vm.menu),function(item){return [(!item.submenu)?_c('div',{staticClass:"dropdown nav-item",class:{active: _vm.route.includes(item.to)},attrs:{"slot":"trigger"},slot:"trigger"},[_c('router-link',{attrs:{"to":'/'+item.to}},[_vm._v(_vm._s(item.text))])],1):_vm._e(),(item.submenu)?_c('b-dropdown',{attrs:{"hoverable":"hoverable"}},[_c('div',{staticClass:"nav-item",class:{active: _vm.route.includes(item.to)},attrs:{"slot":"trigger"},slot:"trigger"},[_c('a',[_vm._v(_vm._s(item.text)),_c('b-icon',{attrs:{"icon":"menu-down","size":"is-small"}})],1)]),_vm._l((item.submenu),function(subitem){return _c('b-dropdown-item',{class:{active: _vm.route.includes(subitem.to)},attrs:{"disabled":subitem.disabled}},[_c('router-link',{staticClass:"submenu",attrs:{"to":'/'+item.to+'/'+subitem.to,"tag":"span"}},[_vm._v(_vm._s(subitem.text))])],1)})],2):_vm._e()]})],2)])])]),_c('main',{staticClass:"section"},[_c('router-view')],1)])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"hero-body"},[_c('div',{staticClass:"container"},[_c('h1',{staticClass:"title"},[_vm._v("YouTube-VOS: A Large-Scale Benchmark for Video Object Segmentation")])])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var selectortype_template_index_0_src_app = (esExports);
// CONCATENATED MODULE: ./src/app.vue
function injectStyle (ssrContext) {
  __webpack_require__("L2CI")
  __webpack_require__("IfUc")
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

// CONCATENATED MODULE: ./node_modules/ts-loader!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/explore-sidebar.vue
var explore_sidebar___extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var explore_sidebar___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var explore_sidebar_ExploreSidebar = /** @class */ (function (_super) {
    explore_sidebar___extends(ExploreSidebar, _super);
    function ExploreSidebar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.category = '';
        _this.group = '';
        return _this;
    }
    ExploreSidebar.prototype.len = function (x) { return Object.keys(x).length; };
    ExploreSidebar.prototype.go = function (group, cat) {
        this.category = cat;
        this.group = group;
        this.$emit('update:group', group);
        this.$emit('update:category', cat);
    };
    explore_sidebar___decorate([
        Object(vue_property_decorator_umd["Prop"])({ default: '' })
    ], ExploreSidebar.prototype, "category", void 0);
    explore_sidebar___decorate([
        Object(vue_property_decorator_umd["Prop"])({ default: '' })
    ], ExploreSidebar.prototype, "group", void 0);
    explore_sidebar___decorate([
        Object(vue_property_decorator_umd["Prop"])({ default: {} })
    ], ExploreSidebar.prototype, "groups", void 0);
    ExploreSidebar = explore_sidebar___decorate([
        vue_property_decorator_umd["Component"]
    ], ExploreSidebar);
    return ExploreSidebar;
}(vue_property_decorator_umd["Vue"]));
/* harmony default export */ var explore_sidebar = (explore_sidebar_ExploreSidebar);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-538f3915","hasScoped":true,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/template-compiler/preprocessor.js?engine=pug!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/explore-sidebar.vue
var explore_sidebar_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('nav',{staticClass:"panel explore-sidebar"},_vm._l((_vm.groups),function(categories,groupname){return _c('b-collapse',{scopedSlots:_vm._u([{key:"trigger",fn:function(props){return _c('p',{staticClass:"panel-heading"},[_vm._v(_vm._s(groupname)),_c('b-icon',{attrs:{"icon":props.open ? 'chevron-down' : 'chevron-up'}})],1)}}])},_vm._l((categories),function(vids,cat){return _c('a',{staticClass:"panel-block",class:{ 'is-active': _vm.category == cat },on:{"click":function($event){_vm.go(groupname, cat)}}},[_vm._v(_vm._s(cat)+" ("+_vm._s(_vm.len(vids))+")")])}))}))}
var explore_sidebar_staticRenderFns = []
var explore_sidebar_esExports = { render: explore_sidebar_render, staticRenderFns: explore_sidebar_staticRenderFns }
/* harmony default export */ var components_explore_sidebar = (explore_sidebar_esExports);
// CONCATENATED MODULE: ./src/components/explore-sidebar.vue
function explore_sidebar_injectStyle (ssrContext) {
  __webpack_require__("/S1M")
}
var explore_sidebar_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var explore_sidebar___vue_template_functional__ = false
/* styles */
var explore_sidebar___vue_styles__ = explore_sidebar_injectStyle
/* scopeId */
var explore_sidebar___vue_scopeId__ = "data-v-538f3915"
/* moduleIdentifier (server only) */
var explore_sidebar___vue_module_identifier__ = null
var explore_sidebar_Component = explore_sidebar_normalizeComponent(
  explore_sidebar,
  components_explore_sidebar,
  explore_sidebar___vue_template_functional__,
  explore_sidebar___vue_styles__,
  explore_sidebar___vue_scopeId__,
  explore_sidebar___vue_module_identifier__
)

/* harmony default export */ var src_components_explore_sidebar = (explore_sidebar_Component.exports);

// CONCATENATED MODULE: ./src/components/index.ts





vue_esm["default"].use(lib_default.a);
vue_esm["default"].component('explore-sidebar', src_components_explore_sidebar);

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
        _this.samples = ['sample1', 'sample2', 'sample3', 'sample4'];
        _this.infos = [
            {
                number: 4000,
                unit: 'Videos',
            },
            { number: 80, unit: 'Categories' },
            { number: 6000, unit: 'Unique Objects' },
            { number: 133886, unit: 'Human Annotations' },
            { number: 217.21, unit: 'Duration (Minutes)' },
        ];
        _this.organizers = [
            { name: 'Ning Xu', affiliation: 'Adobe Research', im_name: 'NingXu' },
            { name: 'Linjie Yang', affiliation: 'Snap Research', im_name: 'LinjieYang' },
            { name: 'Jianchao Yang', affiliation: 'Toutiao', im_name: 'Jianchao' },
            { name: 'Dingcheng Yue', affiliation: 'UIUC', im_name: 'Dingcheng' },
            { name: 'Yuchen Fan', affiliation: 'UIUC', im_name: 'Fan' },
            { name: 'Yuchen Liang', affiliation: 'UIUC', im_name: 'Liang' },
            { name: 'Thomas Huang', affiliation: 'UIUC', im_name: 'Tom' },
        ];
        _this.sponsors = [
            { name: 'Snapchat', im_name: 'snapchat.jpg' },
            { name: 'Adobe', im_name: 'adobe.png' },
            { name: 'UIUC', im_name: 'uiuc.jpg' },
            { name: 'CAS', im_name: 'cas.jpg' },
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

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-a646221c","hasScoped":true,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/template-compiler/preprocessor.js?engine=pug!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/pages/home.vue
var home_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"page",attrs:{"id":"page-home"}},[_c('section',{staticClass:"section",attrs:{"id":"display-section"}},[_c('div',{staticClass:"container"},[_vm._m(0),_c('div',{staticClass:"section"},[_c('div',{staticClass:"columns"},_vm._l((_vm.infos),function(info){return _c('div',{staticClass:"column"},[_c('div',{staticClass:"infos"},[_c('b-tooltip',{attrs:{"label":_vm.expandinfo(info),"type":"is-light"}},[_c('div',{staticClass:"num"},[_vm._v(" "+_vm._s(info.number))]),_c('div',{staticClass:"info"},[_vm._v(_vm._s(info.unit))])])],1)])}))]),_vm._m(1),_c('div',{staticClass:"section news"},[_c('h1',{staticClass:"title"},[_vm._v("News")]),_c('p',[_vm._v("Check out our benchmark challenge"),_c('router-link',{attrs:{"to":"challenge/challenge2018"}},[_vm._v("\"1st Large-scale Video Object Segmentation Challenge\"")]),_vm._v("which will be held in ECCV 2018!")],1),_c('p',[_vm._v("Dataset will be released in early June, 2018.")])]),_vm._m(2),_c('div',{staticClass:"section"},[_c('h1',{staticClass:"title"},[_vm._v("Dataset Examples")]),_c('div',{staticClass:"columns"},_vm._l((_vm.samples),function(sample){return _c('div',{staticClass:"column"},[_c('img',{attrs:{"src":'/static/samples/'+sample+'_bike.jpg'}}),_c('img',{attrs:{"src":'/static/samples/'+sample+'_fish.jpg'}})])})),_c('p',[_c('span',[_vm._v("For more examples, please")]),_c('router-link',{attrs:{"to":"dataset/explore"}},[_vm._v(" explore")]),_c('span',[_vm._v(" our dataset.")])],1)]),_c('div',{staticClass:"section"},[_c('h1',{staticClass:"title"},[_vm._v("People")]),_c('div',{staticClass:"columns"},_vm._l((_vm.organizers),function(organizer){return _c('div',{staticClass:"column"},[_c('figure',{staticClass:"image is-128x128"},[_c('img',{staticClass:"is-rounded",attrs:{"src":'/static/organizers/'+organizer.im_name+'.jpg'}})]),_c('p',{staticClass:"is-size-7-desktop"},[_vm._v(_vm._s(organizer.name))]),_c('p',{staticClass:"is-size-7-desktop"},[_vm._v(_vm._s(organizer.affiliation))])])}))]),_vm._m(3),_vm._m(4),_c('div',{staticClass:"section"},[_c('h1',{staticClass:"title"},[_vm._v("Sponsors")]),_c('div',{staticClass:"columns"},_vm._l((_vm.sponsors),function(sponsor){return _c('div',{staticClass:"column"},[_c('figure',{staticClass:"image is-128x128"},[_c('img',{attrs:{"src":'/static/sponsors/'+sponsor.im_name}})])])}))])])])])}
var home_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"section"},[_c('h1',{staticClass:"title"},[_vm._v("YouTube-VOS")]),_c('p',[_vm._v("YouTube-VOS is the first large-scale dataset for video object segmentation. Our dataset contains 4000+ YouTube videos, 70+ common objects and densely-sampled high-quality pixel-level annotations. Some statistics of the dataset are shown below. More details can be found in the dataset report.")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"section"},[_c('p',[_vm._v("We hope that such a large-scale dataset can")]),_c('p',[_vm._v("1. Overcome the data-insufficiency issue for video object segmentation as well as other low and mid-level video understanding tasks, and therefore foster more bold and complicated algorithms such as RNN, Reinforcement Learning etc.")]),_c('p',[_vm._v("2. Provide diverse training samples to help learn specific object characteristics in videos such as spatial-temporal coherence.")]),_c('p',[_vm._v("3. Provide more comprehensive evaluation results than existing datasets (For example, larger testing scale and better evaluation metrics).")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"section"},[_c('h1',{staticClass:"title"},[_vm._v("Citation")]),_c('p',[_vm._v("If you find our dataset is useful for your research, please cite:")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"section"},[_c('h1',{staticClass:"title"},[_vm._v("Contact")]),_c('p',[_vm._v("For dataset related questions, please contact"),_c('a',{attrs:{"href":"youtube-vos@gmail.com"}},[_vm._v(" youtube-vos@gmail.com")]),_vm._v(".")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"section"},[_c('h1',{staticClass:"title"},[_vm._v("License")]),_c('p',[_vm._v("The annotations in this dataset belong to the organizers of the challenge and are licensed under a"),_c('a',{attrs:{"href":"https://creativecommons.org/licenses/by/4.0/"}},[_vm._v(" Creative Commons Attribution 4.0 License")]),_vm._v(".")])])}]
var home_esExports = { render: home_render, staticRenderFns: home_staticRenderFns }
/* harmony default export */ var pages_home = (home_esExports);
// CONCATENATED MODULE: ./src/pages/home.vue
function home_injectStyle (ssrContext) {
  __webpack_require__("5WGJ")
}
var home_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var home___vue_template_functional__ = false
/* styles */
var home___vue_styles__ = home_injectStyle
/* scopeId */
var home___vue_scopeId__ = "data-v-a646221c"
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
            { name: 'Ning Xu', affiliation: 'Adobe Research', im_name: 'NingXu' },
            { name: 'Linjie Yang', affiliation: 'Snap Research', im_name: 'LinjieYang' },
            { name: 'Yuchen Fan', affiliation: 'UIUC', im_name: 'YuchenFan' },
        ];
        _this.sponsors = [
            { name: 'Snapchat', im_name: 'snapchat.jpg' },
            { name: 'Adobe', im_name: 'adobe.png' },
            { name: 'UIUC', im_name: 'uiuc.jpg' },
            { name: 'CAS', im_name: 'cas.jpg' },
        ];
        return _this;
    }
    ChallengePage = challenge___decorate([
        vue_property_decorator_umd["Component"]
    ], ChallengePage);
    return ChallengePage;
}(vue_property_decorator_umd["Vue"]));
/* harmony default export */ var challenge = (challenge_ChallengePage);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-ab7be624","hasScoped":true,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/template-compiler/preprocessor.js?engine=pug!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/pages/challenge.vue
var challenge_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"page-dataset"}},[_c('section',{staticClass:"section",attrs:{"id":"display-section"}},[_c('div',{staticClass:"container"},[_vm._m(0),_vm._m(1),_vm._m(2),_vm._m(3),_vm._m(4),_c('div',{staticClass:"section"},[_c('h1',{staticClass:"title is-4"},[_vm._v("Organizers")]),_c('div',{staticClass:"columns"},_vm._l((_vm.organizers),function(organizer){return _c('div',{staticClass:"column"},[_c('figure',{staticClass:"image is-128x128"},[_c('img',{staticClass:"is-rounded",attrs:{"src":'/static/organizers/'+organizer.im_name+'.jpg'}})]),_c('p',{staticClass:"is-size-7-desktop"},[_vm._v(_vm._s(organizer.name))]),_c('p',{staticClass:"is-size-7-desktop"},[_vm._v(_vm._s(organizer.affiliation))])])}))]),_vm._m(5),_c('div',{staticClass:"section"},[_c('h1',{staticClass:"title is-4"},[_vm._v("Sponsors")]),_c('div',{staticClass:"columns"},_vm._l((_vm.sponsors),function(sponsor){return _c('div',{staticClass:"column"},[_c('figure',{staticClass:"image is-128x128"},[_c('img',{attrs:{"src":'/static/sponsors/'+sponsor.im_name}})])])}))])])])])}
var challenge_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"section"},[_c('h1',{staticClass:"title center"},[_vm._v("The 1st Large-scale Video Object Segmentation Challenge (put in the middel, also link this page to the home of Challenge 2018)")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"section"},[_c('h1',{staticClass:"title is-4"},[_vm._v("Introduction")]),_c('p',[_vm._v("Video object segmentation has been studied extensively in the past decade due to its importance in understanding video spatial-temporal structures as well as its value in industrial applications. Recently, data-driven algorithms (e.g. deep learning) have become the dominant approach to computer vision problems and one of the most important keys to their successes is the availability of large-scale datasets. Unfortunately, there does not exist a large-scale dataset for video object segmentation. As a result, recent algorithms for video object segmentation have to train their models on image datasets which do not contain any temporal information or video-specific characteristics, and thus would settle for suboptimal solutions. Besides, previous benchmark does not differentiate the object categories used in training and testing, and therefore cannot evaluate the true generalization ability of algorithms on unseen categories.")]),_c('p',[_vm._v("In this workshop in conjunction with a competition, we will present the first large-scale dataset for video object segmentation, which would allow participant teams to try novel and bold ideas that could not succeed with previous small-scale datasets. In contrast to previous video-object-segmentation datasets, our dataset has the following advantages:")]),_c('p',[_vm._v("1. Our dataset contains 5000 high-resolution videos clips, which are downloaded from YouTube and contain diverse contents. It is more than 30 times larger than the existing largest dataset (i.e. DAVIS) for video object segmentation.")]),_c('p',[_vm._v("2. Our dataset consists of a total of 76 object categories which cover common objects such as animals, vehicles, accessories and sports.")]),_c('p',[_vm._v("3. The videos in our dataset are taken by both amateurs and professionals. Therefore, in addition to various object motion, there is frequently significant camera motion.")]),_c('p',[_vm._v("4. Our segmentation masks are carefully labeled by human annotators to ensure high quality")]),_c('p',[_vm._v("We expect that our new dataset shall bring new possibilities of generating novel ideas for dense-prediction video tasks as well as providing a more comprehensive evaluation methodologies for video segmentation technology.")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"section"},[_c('h1',{staticClass:"title is-4"},[_vm._v("Announcement")]),_c('p',[_vm._v("The top three teams will be awarded with prizes.")]),_c('p',[_vm._v("The training dataset will be released soon.")]),_c('p',[_vm._v("The test server will be available soon.")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"section"},[_c('h1',{staticClass:"title is-4"},[_vm._v("Important Dates")]),_c('p',[_vm._v("6/1/2018. Release the training dataset (tentatively)")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"section"},[_c('h1',{staticClass:"title is-4"},[_vm._v("Citation")]),_c('p',[_vm._v("If you are reporting results of the challenge or using the dataset, Please cite:")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"section"},[_c('h1',{staticClass:"title"},[_vm._v("Contact")]),_c('p',[_vm._v("For Challenge related questions, please contact"),_c('a',{attrs:{"href":"youtube-vos@gmail.com"}},[_vm._v("youtube-vos@gmail.com")]),_vm._v(".")])])}]
var challenge_esExports = { render: challenge_render, staticRenderFns: challenge_staticRenderFns }
/* harmony default export */ var pages_challenge = (challenge_esExports);
// CONCATENATED MODULE: ./src/pages/challenge.vue
function challenge_injectStyle (ssrContext) {
  __webpack_require__("Be0L")
}
var challenge_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var challenge___vue_template_functional__ = false
/* styles */
var challenge___vue_styles__ = challenge_injectStyle
/* scopeId */
var challenge___vue_scopeId__ = "data-v-ab7be624"
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

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-e82af728","hasScoped":true,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/template-compiler/preprocessor.js?engine=pug!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/pages/download.vue
var download_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"page",attrs:{"id":"page-download"}},[_c('section',{staticClass:"section"},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"section"},[_c('h1',{staticClass:"title"},[_vm._v("Evaluation Code")]),_c('div',{staticClass:"container download"},[_c('a',{staticClass:"button is-primary"},[_c('b-icon',{attrs:{"icon":"github-circle","size":"is-small"}}),_c('span',[_vm._v("Matlab code")])],1)]),_c('div',{staticClass:"container download"},[_c('a',{staticClass:"button is-primary"},[_c('b-icon',{attrs:{"icon":"github-circle","size":"is-small"}}),_c('span',[_vm._v("Python code")])],1)])]),_c('div',{staticClass:"section"},[_c('h1',{staticClass:"title"},[_vm._v("Evaluation Test-Dev and Test-Challenge")]),_c('div',{staticClass:"container download"},[_c('a',{staticClass:"button is-info"},[_c('b-icon',{attrs:{"icon":"cube-outline","size":"is-small"}}),_c('span',[_vm._v("Test Dev and Test Challenge")])],1)])]),_c('div',{staticClass:"section"},[_c('h1',{staticClass:"title"},[_vm._v("Downloads")]),_c('p',[_vm._v("To reduce data preprocessing time, we have prepared all image frames and annotations in 360p resolution. We provide download links for annotated image frames (6fps) as well as raw image frames (30fps).")]),_c('div',{staticClass:"container download"},[_c('span',{staticClass:"left"},[_vm._v("Train-Val - Images and Annotations")]),_c('a',{staticClass:"button is-warning"},[_c('b-icon',{attrs:{"icon":"zip-box","size":"is-small"}}),_c('span',[_vm._v("Annotated frames")])],1),_c('a',{staticClass:"button is-warning"},[_c('b-icon',{attrs:{"icon":"zip-box","size":"is-small"}}),_c('span',[_vm._v("All frames")])],1)]),_c('div',{staticClass:"container download"},[_c('span',{staticClass:"left"},[_vm._v("Test-Dev - Images and First Frame Annotations")]),_c('a',{staticClass:"button is-warning"},[_c('b-icon',{attrs:{"icon":"zip-box","size":"is-small"}}),_c('span',[_vm._v("Annotated frames")])],1),_c('a',{staticClass:"button is-warning"},[_c('b-icon',{attrs:{"icon":"zip-box","size":"is-small"}}),_c('span',[_vm._v("All frames")])],1)]),_c('div',{staticClass:"container download"},[_c('span',{staticClass:"left"},[_vm._v("Test-Challenge - Images and First Frame Annotations")]),_c('a',{staticClass:"button is-warning"},[_c('b-icon',{attrs:{"icon":"zip-box","size":"is-small"}}),_c('span',[_vm._v("Annotated frames")])],1),_c('a',{staticClass:"button is-warning"},[_c('b-icon',{attrs:{"icon":"zip-box","size":"is-small"}}),_c('span',[_vm._v("All frames")])],1)])])])])])}
var download_staticRenderFns = []
var download_esExports = { render: download_render, staticRenderFns: download_staticRenderFns }
/* harmony default export */ var pages_download = (download_esExports);
// CONCATENATED MODULE: ./src/pages/download.vue
function download_injectStyle (ssrContext) {
  __webpack_require__("VTNl")
}
var download_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var download___vue_template_functional__ = false
/* styles */
var download___vue_styles__ = download_injectStyle
/* scopeId */
var download___vue_scopeId__ = "data-v-e82af728"
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
        _this.cvideo = '';
        _this.cframe = 1;
        _this.cat = 'Tennis';
        _this.group = 'Sports';
        _this.groups = {
            Sports: {
                Tennis: [], Bull_riding: [], Parachuting: [],
                Snowboarding: [], Skateboarding: [], Frisbee: [],
                Motorcycling: {
                    '-t-NFaw9mv0_4': genframes(145),
                    '-t-NFaw9mv0_5': genframes(145),
                }, Slopestyle: [], Surfing: []
            },
            Mamals: {
                Deer: [], Tiger: [],
                Giant_panda: [], Leopard: [],
                Sheep: [], Camel: [], Ape: [],
                Fox: {
                    'bfypQW7frfc_1': genframes(145),
                    'bfypQW7frfc_2': genframes(145),
                    'bfypQW7frfc_3': genframes(145),
                    'bfypQW7frfc_5': genframes(145),
                }, Hedgehog: [],
                Monkey: {
                    '0pV_HO8Om0U_1': genframes(145),
                    '0pV_HO8Om0U_4': genframes(145),
                },
                Rabbit: [], Squirrel: [],
            },
            Insects: {
                Ant: [], Snail: [],
                Butterfly: {
                    '02Ad3UtMz7Y_1': genframes(175),
                    'aJP-eBK8kY0_1': genframes(175),
                },
                Spider: []
            },
            Birds: {
                Owl: [], Eagle: [], Goose: [],
                Parrot: [], Penguin: [],
            },
            Fish: {
                Goldfish: [], Earless_seal: [], Jellyfish: [],
                Dolphin: [], Whale: [],
            },
            Reptile: {
                Frog: [], Reptile: [], Chameleon: [],
                Snake: [], Lizard: [], Turtle: []
            }
        };
        return _this;
    }
    Object.defineProperty(ExplorePage.prototype, "videos", {
        get: function () {
            var _a = this, group = _a.group, cat = _a.cat;
            if (!group || !cat)
                return {};
            return this.groups[group][cat];
        },
        enumerable: true,
        configurable: true
    });
    ExplorePage.prototype.imgurl = function (video, frame) {
        return "/static/demos/" + video + "/images/" + frame + ".jpg";
    };
    ExplorePage.prototype.annotationurl = function (video, frame) {
        return "/static/demos/" + video + "/annotations/" + frame + ".png";
    };
    ExplorePage = explore___decorate([
        vue_property_decorator_umd["Component"]
    ], ExplorePage);
    return ExplorePage;
}(vue_property_decorator_umd["Vue"]));
/* harmony default export */ var explore = (explore_ExplorePage);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-61be1d59","hasScoped":true,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/template-compiler/preprocessor.js?engine=pug!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/pages/explore.vue
var explore_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"explore",attrs:{"id":"page-explore"}},[_c('explore-sidebar',{attrs:{"groups":_vm.groups,"group":_vm.group,"category":_vm.cat},on:{"update:group":function($event){_vm.group=$event},"update:category":function($event){_vm.cat=$event}}}),_c('section',{staticClass:"section",attrs:{"id":"content"}},[_c('div',{staticClass:"container grid"},_vm._l((_vm.videos),function(frames,video){return _c('div',{staticClass:"square",on:{"click":function($event){_vm.cframe=1; _vm.cvideo=video; _vm.showModal=true}}},[_c('img',{staticClass:"demo",attrs:{"src":_vm.imgurl(video, 0)}}),_c('div',{staticClass:"banner"},[_vm._v(_vm._s(video))])])}))]),_c('b-modal',{attrs:{"active":_vm.showModal},on:{"update:active":function($event){_vm.showModal=$event}}},[_c('div',{staticClass:"container modal"},[_c('div',{staticClass:"card"},[(_vm.videos[_vm.cvideo])?_c('div',{staticClass:"card-content"},[_c('div',{staticClass:"square"},[_c('img',{staticClass:"image",attrs:{"src":_vm.imgurl(_vm.cvideo, _vm.videos[_vm.cvideo][_vm.cframe])}}),_c('img',{staticClass:"annotation",class:{ hide: !_vm.showAnnotation },attrs:{"src":_vm.annotationurl(_vm.cvideo, _vm.videos[_vm.cvideo][_vm.cframe])}})]),_c('b-pagination',{attrs:{"total":_vm.videos[_vm.cvideo].length-1,"current":_vm.cframe,"order":"is-centered","per-page":1},on:{"update:current":function($event){_vm.cframe=$event}}}),_c('div',{staticClass:"line"},[_c('b-switch',{model:{value:(_vm.showAnnotation),callback:function ($$v) {_vm.showAnnotation=$$v},expression:"showAnnotation"}},[_vm._v("annotation")])],1)],1):_vm._e()])])])],1)}
var explore_staticRenderFns = []
var explore_esExports = { render: explore_render, staticRenderFns: explore_staticRenderFns }
/* harmony default export */ var pages_explore = (explore_esExports);
// CONCATENATED MODULE: ./src/pages/explore.vue
function explore_injectStyle (ssrContext) {
  __webpack_require__("bVI6")
}
var explore_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var explore___vue_template_functional__ = false
/* styles */
var explore___vue_styles__ = explore_injectStyle
/* scopeId */
var explore___vue_scopeId__ = "data-v-61be1d59"
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

// CONCATENATED MODULE: ./node_modules/ts-loader!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/pages/workshop.vue
var workshop___extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var workshop___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var workshop_WorkshopPage = /** @class */ (function (_super) {
    workshop___extends(WorkshopPage, _super);
    function WorkshopPage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.organizers = [
            { name: 'Ning Xu', affiliation: 'Adobe Research', im_name: 'Ning_Xu' },
            { name: 'Linjie Yang', affiliation: 'Snap Research', im_name: 'LinjieYang' },
            { name: 'Yuchen Fan', affiliation: 'UIUC', im_name: 'YuchenFan' },
        ];
        return _this;
    }
    WorkshopPage = workshop___decorate([
        vue_property_decorator_umd["Component"]
    ], WorkshopPage);
    return WorkshopPage;
}(vue_property_decorator_umd["Vue"]));
/* harmony default export */ var workshop = (workshop_WorkshopPage);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-4797e96c","hasScoped":true,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/template-compiler/preprocessor.js?engine=pug!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/pages/workshop.vue
var workshop_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var workshop_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"page-workshop"}},[_c('section',{staticClass:"section",attrs:{"id":"display-section"}},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"section"},[_c('h1',{staticClass:"title"},[_vm._v("Program")])]),_c('div',{staticClass:"section"},[_c('h1',{staticClass:"title is-4"},[_vm._v("Invited Speakers (Tentatively)")])]),_c('div',{staticClass:"section"},[_c('h1',{staticClass:"title is-4"},[_vm._v("Workshop schedule (Sep 14th afternoon)")]),_c('p',[_vm._v("Will be available soon")])])])])])}]
var workshop_esExports = { render: workshop_render, staticRenderFns: workshop_staticRenderFns }
/* harmony default export */ var pages_workshop = (workshop_esExports);
// CONCATENATED MODULE: ./src/pages/workshop.vue
function workshop_injectStyle (ssrContext) {
  __webpack_require__("ioKj")
}
var workshop_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var workshop___vue_template_functional__ = false
/* styles */
var workshop___vue_styles__ = workshop_injectStyle
/* scopeId */
var workshop___vue_scopeId__ = "data-v-4797e96c"
/* moduleIdentifier (server only) */
var workshop___vue_module_identifier__ = null
var workshop_Component = workshop_normalizeComponent(
  workshop,
  pages_workshop,
  workshop___vue_template_functional__,
  workshop___vue_styles__,
  workshop___vue_scopeId__,
  workshop___vue_module_identifier__
)

/* harmony default export */ var src_pages_workshop = (workshop_Component.exports);

// CONCATENATED MODULE: ./node_modules/ts-loader!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/pages/guidelines.vue
var guidelines___extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var guidelines___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var guidelines_GuidelinesPage = /** @class */ (function (_super) {
    guidelines___extends(GuidelinesPage, _super);
    function GuidelinesPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GuidelinesPage = guidelines___decorate([
        vue_property_decorator_umd["Component"]
    ], GuidelinesPage);
    return GuidelinesPage;
}(vue_property_decorator_umd["Vue"]));
/* harmony default export */ var guidelines = (guidelines_GuidelinesPage);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-377b245b","hasScoped":true,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/template-compiler/preprocessor.js?engine=pug!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/pages/guidelines.vue
var guidelines_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var guidelines_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"page-guidelines"}},[_c('section',{staticClass:"section",attrs:{"id":"display-section"}},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"section"},[_c('h1',{staticClass:"title"},[_vm._v("Guidelines")])]),_c('div',{staticClass:"section"},[_c('h1',{staticClass:"title is-4"},[_vm._v("Task")]),_c('p',[_vm._v("The challenge task is the semi-supervised video object segmentation, which targets at segmenting a particular object isntance throughout the entire video sequence given only the object mask of the first frame. Different from previous video object segmentation challenges in CVPR 2017 and 2018, we will provide much larger scale of training and test data to foster various kinds of algorithms. In addition, our test dataset will have  unseen categories which do not exist in the training dataset, in order to evaluate the generalization ability of algorithms.")])]),_c('div',{staticClass:"section"},[_c('h1',{staticClass:"title is-4"},[_vm._v("Dataset")]),_c('p',[_vm._v("Our dataset contains three subsets.")]),_c('li',[_vm._v("Train: 3500 video sequences with densely-sampled multi-object annotations.")]),_c('li',[_vm._v("Test-Dev: 200 video sequences with the first-frame annotation in the XX training categories, and 100 sequences of 10 categories that are unseen in training.")]),_c('li',[_vm._v("Test-Challenge: Another 200 sequences in the XX training categories, and 100 sequences of 10 categories that are unseen in training.")]),_c('li',[_vm._v("RGB images and annotations for the labeled frames will be provided. We will also provide a download link for all image frames.")]),_c('li',[_vm._v("To download the dataset, checkout "),_c('a',{attrs:{"href":"/dataset/download"}},[_vm._v("download ")]),_vm._v("page.")])]),_c('div',{staticClass:"section"},[_c('h1',{staticClass:"title is-4"},[_vm._v("Evaluation Metric")]),_c('p',[_vm._v("Similar to a previous video object segmentation challenge "),_c('a',{attrs:{"href":"http://davischallenge.org/"}},[_vm._v("DAVIS")]),_vm._v(", we will be using Region Jaccard (J) and Boundary F measure (F) as evaluation metric.  The overall ranking measures will be computed as the mean between J and F, both averaged over all objects. Note that we have some of the objects start appearing from the middle of videos, we will only compute the metrics after the first occurence of these objects.")])]),_c('div',{staticClass:"section"},[_c('h1',{staticClass:"title is-4"},[_vm._v("Result Submission")]),_c('p',[_vm._v("Submission of evaluation results will be made through "),_c('a',{attrs:{"href":"https://competitions.codalab.org"}},[_vm._v("CodaLab")]),_vm._v(".")])]),_c('div',{staticClass:"section"},[_c('h1',{staticClass:"title is-4"},[_vm._v("Paper Submission")]),_c('li',[_vm._v("We will be inviting top-ranking teams to submit short technical papers. The template of the paper is the same as ECCV, but length will be limited to 10 pages including references.")]),_c('li',[_vm._v("All papers will be invited to the workshop in form of oral presentation or poster.")]),_c('li',[_vm._v("Accepted papers will be self-published on the web of the challenge.")])]),_c('div',{staticClass:"section"},[_c('h1',{staticClass:"title is-4"},[_vm._v("FAQ")]),_c('p',[_vm._v("1. Can external datasets be used to train the competition models? ")]),_c('p')])])])])}]
var guidelines_esExports = { render: guidelines_render, staticRenderFns: guidelines_staticRenderFns }
/* harmony default export */ var pages_guidelines = (guidelines_esExports);
// CONCATENATED MODULE: ./src/pages/guidelines.vue
function guidelines_injectStyle (ssrContext) {
  __webpack_require__("TgP7")
}
var guidelines_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var guidelines___vue_template_functional__ = false
/* styles */
var guidelines___vue_styles__ = guidelines_injectStyle
/* scopeId */
var guidelines___vue_scopeId__ = "data-v-377b245b"
/* moduleIdentifier (server only) */
var guidelines___vue_module_identifier__ = null
var guidelines_Component = guidelines_normalizeComponent(
  guidelines,
  pages_guidelines,
  guidelines___vue_template_functional__,
  guidelines___vue_styles__,
  guidelines___vue_scopeId__,
  guidelines___vue_module_identifier__
)

/* harmony default export */ var src_pages_guidelines = (guidelines_Component.exports);

// CONCATENATED MODULE: ./src/pages/index.ts








vue_esm["default"].use(vue_router_esm["a" /* default */]);
/* harmony default export */ var pages = (new vue_router_esm["a" /* default */]({
    mode: 'hash',
    routes: [
        {
            path: '/',
            redirect: '/home',
        }, {
            path: '/home',
            name: 'home',
            component: src_pages_home,
        }, {
            path: '/dataset/download',
            name: 'download',
            component: src_pages_download,
        }, {
            path: '/dataset/explore',
            name: 'explore',
            component: src_pages_explore,
        }, {
            path: '/challenge/challenge2018',
            name: 'challenge',
            component: src_pages_challenge,
        }, {
            path: '/challenge/workshop',
            name: 'workshop',
            component: src_pages_workshop,
        }, {
            path: '/challenge/guidelines',
            name: 'guidelines',
            component: src_pages_guidelines,
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