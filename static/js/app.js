webpackJsonp([1],{

/***/ "/S1M":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "1I5O":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "9+/V":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "Eo9/":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "LzS7":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "Sa65":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "bhnf":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "cEWm":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "erTq":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "fLdC":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "hgLs":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "mS3k":
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
                        text: 'Download', 'to': 'download',
                        disabled: false,
                    }, {
                        text: 'Explore', 'to': 'explore',
                        disabled: true,
                    }],
            },
            {
                text: 'Challenge 2018', to: 'challenge',
                submenu: [{
                        text: 'ECCV Workshop', to: 'challenge2018',
                    }, {
                        text: 'Guidelines', to: 'guidelines',
                        disabled: false,
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

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-03c6f5b3","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/template-compiler/preprocessor.js?engine=pug!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/app.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[_vm._m(0),_c('nav',{staticClass:"tabs is-full-width is-boxed"},[_c('div',{staticClass:"container is-primary"},[_vm._l((_vm.menu),function(item){return [(!item.submenu)?_c('div',{staticClass:"dropdown nav-item",class:{active: _vm.route.includes(item.to)},attrs:{"slot":"trigger"},slot:"trigger"},[_c('router-link',{attrs:{"to":'/'+item.to}},[_vm._v(_vm._s(item.text))])],1):_vm._e(),(item.submenu)?_c('b-dropdown',{attrs:{"hoverable":"hoverable"}},[_c('div',{staticClass:"nav-item",class:{active: _vm.route.includes(item.to)},attrs:{"slot":"trigger"},slot:"trigger"},[_c('a',[_vm._v(_vm._s(item.text)),_c('b-icon',{attrs:{"icon":"menu-down","size":"is-small"}})],1)]),_vm._l((item.submenu),function(subitem){return _c('b-dropdown-item',{class:{active: _vm.route.includes(subitem.to)},attrs:{"disabled":subitem.disabled}},[(!subitem.disabled)?_c('router-link',{staticClass:"submenu",attrs:{"to":'/'+item.to+'/'+subitem.to,"tag":"span"}},[_vm._v(_vm._s(subitem.text))]):_vm._e(),(subitem.disabled)?_c('span',{staticClass:"submenu"},[_vm._v(_vm._s(subitem.text))]):_vm._e()],1)})],2):_vm._e()]})],2)]),_c('router-view')],1)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('header',{staticClass:"hero is-primary"},[_c('div',{staticClass:"hero-body"},[_c('div',{staticClass:"container"},[_c('h1',{staticClass:"title"},[_vm._v("YouTube-VOS: A Large-Scale Benchmark for Video Object Segmentation")])])])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var selectortype_template_index_0_src_app = (esExports);
// CONCATENATED MODULE: ./src/app.vue
function injectStyle (ssrContext) {
  __webpack_require__("LzS7")
  __webpack_require__("fLdC")
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
                number: 4453,
                unit: 'Videos',
            },
            { number: 7822, unit: 'Unique Objects' },
            { number: 191378, unit: 'Human Annotations' },
            { number: 345, unit: 'Minutes' },
        ];
        _this.organizers = [
            {
                name: 'Ning Xu',
                affiliation: 'Adobe Research',
                im_name: 'NingXu',
                link: 'https://sites.google.com/view/ningxu/homepage'
            }, {
                name: 'Linjie Yang',
                affiliation: 'Snap Research',
                im_name: 'LinjieYang'
            }, {
                name: 'Jianchao Yang',
                affiliation: 'Toutiao AI Lab',
                im_name: 'JianchaoYang'
            }, {
                name: 'Dingcheng Yue',
                affiliation: 'UIUC',
                im_name: 'DingchengYue'
            }, {
                name: 'Yuchen Fan',
                affiliation: 'UIUC',
                im_name: 'YuchenFan'
            }, {
                name: 'Yuchen Liang',
                affiliation: 'UIUC',
                im_name: 'YuchenLiang'
            }, {
                name: 'Thomas Huang',
                affiliation: 'UIUC',
                im_name: 'Tom'
            },
        ];
        _this.sponsors = [
            { name: 'Snapchat', im_name: 'snapchat.jpg' },
            { name: 'Adobe', im_name: 'adobe.png' },
            { name: 'UIUC', im_name: 'uiuc-alt.jpg' },
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

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-45593bdc","hasScoped":true,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/template-compiler/preprocessor.js?engine=pug!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/pages/home.vue
var home_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"page",attrs:{"id":"page-home"}},[_c('section',{staticClass:"section",attrs:{"id":"display-section"}},[_c('div',{staticClass:"container content"},[_vm._m(0),_c('div',{staticClass:"section"},[_c('div',{staticClass:"columns"},_vm._l((_vm.infos),function(info){return _c('div',{staticClass:"column"},[_c('div',{staticClass:"infos"},[_c('b-tooltip',{attrs:{"label":_vm.expandinfo(info),"type":"is-light"}},[_c('div',{staticClass:"num"},[_vm._v(" "+_vm._s(info.number))]),_c('div',{staticClass:"info"},[_vm._v(_vm._s(info.unit))])])],1)])}))]),_vm._m(1),_c('div',{staticClass:"section news"},[_c('h1',{staticClass:"title is-4"},[_vm._v("News")]),_c('ul',[_c('li',[_vm._v("We have now released all the frames for the dataset")]),_vm._m(2),_c('li',[_vm._v("The training images and annotations are now available in"),_c('router-link',{attrs:{"to":"/dataset/download"}},[_vm._v(" download")]),_vm._v(" page. The competition guidelines can be found in"),_c('router-link',{attrs:{"to":"/challenge/guidelines"}},[_vm._v(" guidelines")]),_vm._v(" page.")],1),_c('li',[_vm._v("We are carefully performing the final check of our dataset and will release it in mid June of 2018.")]),_c('li',[_vm._v("Check out our benchmark challenge"),_c('router-link',{attrs:{"to":"/challenge/challenge2018"}},[_vm._v(" \"1st Large-scale Video Object Segmentation Challenge\"")]),_vm._v(" which will be held in ECCV 2018!")],1)])]),_c('div',{staticClass:"section"},[_c('h1',{staticClass:"title is-4"},[_vm._v("Dataset Examples")]),_c('div',{staticClass:"columns example"},_vm._l((_vm.samples),function(sample){return _c('div',[_c('img',{attrs:{"src":'/static/samples/'+sample+'_bike.jpg'}}),_c('img',{attrs:{"src":'/static/samples/'+sample+'_fish.jpg'}})])})),_c('p',[_c('span',[_vm._v("For more examples, please")]),_c('router-link',{attrs:{"to":"/dataset/explore"}},[_vm._v(" explore")]),_c('span',[_vm._v(" our dataset.")])],1)]),_c('div',{staticClass:"section"},[_c('h1',{staticClass:"title is-4"},[_vm._v("People")]),_c('div',{staticClass:"columns flex-wrap"},_vm._l((_vm.organizers),function(organizer){return _c('div',[_c('figure',{staticClass:"image is-128x128"},[_c('img',{staticClass:"is-rounded",attrs:{"src":'/static/organizers/'+organizer.im_name+'.jpg'}})]),_c('p',{staticClass:"has-text-centered"},[_c('a',{attrs:{"href":organizer.link}},[_vm._v(_vm._s(organizer.name))]),_c('br'),_c('span',[_vm._v(_vm._s(organizer.affiliation))])])])}))]),_c('div',{staticClass:"section"},[_c('hi',{staticClass:"title is-4"},[_vm._v("Citation")]),_c('p',[_vm._v("will be available soon")])],1),_c('div',{staticClass:"section"},[_c('h1',{staticClass:"title is-4"},[_vm._v("Contact")]),_c('p',[_vm._v("For "),_c('router-link',{attrs:{"to":"/dataset/download"}},[_vm._v("dataset")]),_vm._v(" related questions, please feel free to contact"),_c('a',{attrs:{"href":"mailto:ytvos@gmail.com"}},[_vm._v(" ytbvos@gmail.com")]),_vm._v(".")],1),_c('p',[_vm._v("For "),_c('router-link',{attrs:{"to":"/challenge/challenge2018"}},[_vm._v("challenge")]),_vm._v(" related questions, you canalso use "),_c('a',{attrs:{"href":"https://competitions.codalab.org/forums/16267/"}},[_vm._v("codalab forums")]),_vm._v(".")],1)]),_vm._m(3),_c('div',{staticClass:"section"},[_c('h1',{staticClass:"title is-4"},[_vm._v("Sponsors")]),_c('div',{staticClass:"columns"},_vm._l((_vm.sponsors),function(sponsor){return _c('div',{staticClass:"column"},[_c('figure',{staticClass:"image is-128x128"},[_c('img',{attrs:{"src":'/static/sponsors/'+sponsor.im_name}})])])}))])])])])}
var home_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"section"},[_c('h1',{staticClass:"title is-4"},[_vm._v("YouTube-VOS")]),_c('p',[_vm._v("YouTube-VOS is the first large-scale dataset for video object segmentation. Our dataset contains 4000+ YouTube videos, 70+ common objects and densely-sampled high-quality pixel-level annotations. Some statistics of the dataset are shown below. "),_c('a',{attrs:{"href":"https://arxiv.org/abs/1809.03327"}},[_vm._v("More details can be found in the dataset report.")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"section"},[_c('p',[_vm._v("We hope that such a large-scale dataset can:")]),_c('ul',[_c('li',[_vm._v("Overcome the data-insufficiency issue for video object segmentation as well as other low and mid-level video understanding tasks, and therefore foster more bold and complicated algorithms such as RNN, Reinforcement Learning etc.")]),_c('li',[_vm._v("Provide diverse training samples to help learn specific object characteristics in videos such as spatial-temporal coherence.")]),_c('li',[_vm._v("Provide more comprehensive evaluation results than existing datasets (For example, larger testing scale and better evaluation metrics).")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',[_vm._v("The competition is hosted on "),_c('a',{attrs:{"href":"https://competitions.codalab.org/competitions/19544"}},[_vm._v("codelab")]),_vm._v(". Please register an account on codalab to participate.")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"section"},[_c('h1',{staticClass:"title is-4"},[_vm._v("License")]),_c('p',[_vm._v("The annotations in this dataset belong to the organizers of the challenge and are licensed under a"),_c('a',{attrs:{"href":"https://creativecommons.org/licenses/by/4.0/"}},[_vm._v(" Creative Commons Attribution 4.0 License")]),_vm._v(".")])])}]
var home_esExports = { render: home_render, staticRenderFns: home_staticRenderFns }
/* harmony default export */ var pages_home = (home_esExports);
// CONCATENATED MODULE: ./src/pages/home.vue
function home_injectStyle (ssrContext) {
  __webpack_require__("9+/V")
}
var home_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var home___vue_template_functional__ = false
/* styles */
var home___vue_styles__ = home_injectStyle
/* scopeId */
var home___vue_scopeId__ = "data-v-45593bdc"
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
            {
                name: 'Ning Xu',
                affiliation: 'Adobe Research',
                im_name: 'NingXu',
                link: 'http://sites.google.com/view/ningxu/',
            }, {
                name: 'Linjie Yang',
                affiliation: 'Snap Research',
                im_name: 'LinjieYang',
                link: 'https://sites.google.com/site/linjieyang89/',
            }, {
                name: 'Yuchen Fan',
                affiliation: 'UIUC',
                im_name: 'YuchenFan',
                link: 'https://ece.illinois.edu/directory/profile/yuchenf4',
            }, {
                name: 'Brian Price',
                affiliation: 'Adobe Research',
                im_name: 'BrianPrice',
                link: 'https://www.brianpricephd.com/',
            }, {
                name: 'Weiyao Lin',
                affiliation: 'SJTU',
                im_name: 'WeiyaoLin',
                link: 'https://weiyaolin.github.io/',
            }, {
                name: 'Michael Ying Yang',
                affiliation: 'U of Twente',
                im_name: 'MichaelYingYang',
                link: 'https://sites.google.com/site/michaelyingyang/',
            }, {
                name: 'Jianchao Yang',
                affiliation: 'Toutiao AI Lab',
                im_name: 'JianchaoYang',
                link: 'http://www.ifp.illinois.edu/~jyang29/',
            }, {
                name: 'Jiebo Luo',
                affiliation: 'U of Rochester',
                im_name: 'JieboLuo',
                link: 'http://www.cs.rochester.edu/u/jluo/',
            }, {
                name: 'Thomas Huang',
                affiliation: 'UIUC',
                im_name: 'Tom',
                link: 'https://ece.illinois.edu/directory/profile/t-huang1'
            },
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

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-14edd102","hasScoped":true,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/template-compiler/preprocessor.js?engine=pug!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/pages/challenge.vue
var challenge_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"page-dataset"}},[_c('section',{staticClass:"section",attrs:{"id":"display-section"}},[_c('div',{staticClass:"container content"},[_vm._m(0),_vm._m(1),_c('div',{staticClass:"section"},[_c('h1',{staticClass:"title is-4"},[_vm._v("Announcement")]),_c('ul',[_vm._m(2),_c('li',[_vm._v("The top three teams will be awarded with prizes.")]),_c('li',[_vm._v("The training dataset is available. Please checkout"),_c('router-link',{attrs:{"to":"/dataset/download"}},[_vm._v(" download")]),_vm._v(" page.")],1),_c('li',[_vm._v("The test server will be available soon.")])])]),_vm._m(3),_c('div',{staticClass:"section"},[_c('h1',{staticClass:"title is-4"},[_vm._v("Organizers")]),_c('div',{staticClass:"columns flex-wrap"},_vm._l((_vm.organizers),function(organizer){return _c('div',[_c('figure',{staticClass:"image is-128x128 has-text-centered"},[_c('img',{staticClass:"is-rounded",attrs:{"src":'/static/organizers/'+organizer.im_name+'.jpg'}})]),_c('p',{staticClass:"is-size-6 has-text-centered"},[_c('a',{attrs:{"href":organizer.link}},[_vm._v(_vm._s(organizer.name))]),_c('br'),_c('span',[_vm._v(_vm._s(organizer.affiliation))])])])}))]),_vm._m(4),_c('div',{staticClass:"section"},[_c('h1',{staticClass:"title is-4"},[_vm._v("Sponsors")]),_c('div',{staticClass:"columns flex-wrap"},_vm._l((_vm.sponsors),function(sponsor){return _c('div',[_c('figure',{staticClass:"image is-128x128"},[_c('img',{attrs:{"src":'/static/sponsors/'+sponsor.im_name}})])])}))])])])])}
var challenge_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"section"},[_c('h1',{staticClass:"title has-text-centered"},[_vm._v("The 1st Large-scale Video Object Segmentation Challenge")]),_c('h2',{staticClass:"subtitle has-text-centered has-text-grey-light"},[_vm._v("Workshop in conjunction with ECCV2018, Munich, Germany")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"section"},[_c('h1',{staticClass:"title is-4"},[_vm._v("Introduction")]),_c('p',[_vm._v("Video object segmentation has been studied extensively in the past decade due to its importance in understanding video spatial-temporal structures as well as its value in industrial applications. Recently, data-driven algorithms (e.g. deep learning) have become the dominant approach to computer vision problems and one of the most important keys to their successes is the availability of large-scale datasets. Unfortunately, there does not exist a large-scale dataset for video object segmentation. As a result, recent algorithms for video object segmentation have to train their models on image datasets which do not contain any temporal information or video-specific characteristics, and thus would settle for suboptimal solutions. Besides, previous benchmark does not differentiate the object categories used in training and testing, and therefore cannot evaluate the true generalization ability of algorithms on unseen categories.")]),_c('p',[_vm._v("In this workshop in conjunction with a competition, we will present the first large-scale dataset for video object segmentation, which would allow participant teams to try novel and bold ideas that could not succeed with previous small-scale datasets. In contrast to previous video-object-segmentation datasets, our dataset has the following advantages:")]),_c('li',[_vm._v("Our dataset contains 4000+ high-resolution videos clips, which are downloaded from YouTube and contain diverse contents. It is more than 30 times larger than the existing largest dataset (i.e. DAVIS) for video object segmentation.")]),_c('li',[_vm._v("Our dataset consists of a total of 94 object categories which cover common objects such as animals, vehicles, accessories and persons in different activities.")]),_c('li',[_vm._v("The videos in our dataset are taken by both amateurs and professionals. Therefore, in addition to various object motion, there is frequently significant camera motion.")]),_c('li',[_vm._v("Our segmentation masks are carefully labeled by human annotators to ensure high quality")]),_c('p',[_vm._v("We expect that our new dataset shall bring new possibilities of generating novel ideas for dense-prediction video tasks as well as providing a more comprehensive evaluation methodologies for video segmentation technology.")]),_c('p',[_vm._v("Our workshop is co-located with another video segmentation workshop"),_c('a',{attrs:{"href":"http://eecs.oregonstate.edu/IWVS_workshop/"}},[_vm._v(" \"The Third International Workshop on Video Segmentation\"")]),_vm._v(". The other workshop will discuss on a wide range of topics in video segmentation. Welcome to attend their workshop as  well in the morning session.")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{staticClass:"has-text-weight-bold"},[_vm._v("The test server is now ready at"),_c('a',{attrs:{"href":"https://competitions.codalab.org/competitions/19544"}},[_vm._v(" CodaLab.")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"section"},[_c('h1',{staticClass:"title is-4"},[_vm._v("Tentative Timetable")]),_c('ul',[_c('li',[_c('strong',[_vm._v("Sep 14th")]),_vm._v(": The workshop begins.")]),_c('li',[_c('strong',[_vm._v("Aug 27th")]),_vm._v(": The final competition results will be announced and high-performance teams will be invited.")]),_c('li',[_c('strong',[_vm._v("Aug 10th-25th")]),_vm._v(": Release the test dataset and open the submission of the test results.")]),_c('li',[_c('strong',[_vm._v("Jul 18th")]),_vm._v(": Setup the submission server on CodaLab and open the submission of the validation results.")]),_c('li',[_c('strong',[_vm._v("Jun 18th")]),_vm._v(": Release the training and validation dataset.")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"section"},[_c('h1',{staticClass:"title is-4"},[_vm._v("Contact")]),_c('p',[_vm._v("For Challenge related questions, please feel free to contact"),_c('a',{attrs:{"href":"mailto:ytvos@gmail.com"}},[_vm._v(" ytbvos@gmail.com")]),_vm._v(".")])])}]
var challenge_esExports = { render: challenge_render, staticRenderFns: challenge_staticRenderFns }
/* harmony default export */ var pages_challenge = (challenge_esExports);
// CONCATENATED MODULE: ./src/pages/challenge.vue
function challenge_injectStyle (ssrContext) {
  __webpack_require__("mS3k")
}
var challenge_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var challenge___vue_template_functional__ = false
/* styles */
var challenge___vue_styles__ = challenge_injectStyle
/* scopeId */
var challenge___vue_scopeId__ = "data-v-14edd102"
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
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.downloads = [{
                text: 'Training Images and Annotations',
            }, {
                text: 'Validation Images and First Frame Annotations',
            }, {
                text: 'Test Images and First Frame Annotations'
            }];
        return _this;
    }
    DownloadPage = download___decorate([
        vue_property_decorator_umd["Component"]
    ], DownloadPage);
    return DownloadPage;
}(vue_property_decorator_umd["Vue"]));
/* harmony default export */ var download = (download_DownloadPage);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-568ad2d2","hasScoped":true,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/template-compiler/preprocessor.js?engine=pug!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/pages/download.vue
var download_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"page",attrs:{"id":"page-download"}},[_c('section',{staticClass:"section"},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"section"},[_c('h1',{staticClass:"title"},[_vm._v("Evaluation")]),_c('div',{staticClass:"container download"},[_c('a',{staticClass:"button is-info",attrs:{"href":"https://competitions.codalab.org/competitions/19544#participate-submit_results"}},[_c('b-icon',{attrs:{"icon":"cube-outline","size":"is-small"}}),_c('span',[_vm._v("codalab link")])],1)])]),_c('div',{staticClass:"section"},[_c('h1',{staticClass:"title"},[_vm._v("Downloads")]),_c('p',[_vm._v("Currently, download links are available through #"),_c('a',{attrs:{"href":"https://competitions.codalab.org/competitions/19544#participate"}},[_vm._v("codalab")]),_vm._v(" competition for challenge2018. For more details, please see the"),_c('router-link',{attrs:{"to":"/challenge/challenge2018"}},[_vm._v(" the 1st large-scale video object segmentation challenge")]),_vm._v(" and its"),_c('router-link',{attrs:{"to":"/challenge/guidelines"}},[_vm._v(" guidelines")]),_vm._v(".")],1),_vm._l((_vm.downloads),function(download){return (false)?_c('div',{staticClass:"container download"},[_c('span',{staticClass:"left"},[_vm._v(_vm._s(download.text))]),_c('b-dropdown',{attrs:{"hoverable":download.annotated_frames,"disabled":!download.annotated_frames}},[_c('a',{staticClass:"button is-warning",attrs:{"slot":"trigger"},slot:"trigger"},[_c('b-icon',{attrs:{"icon":"zip-box","size":"is-small"}}),_c('span',[_vm._v("Annotated frames")]),_c('b-icon',{attrs:{"icon":"menu-down"}})],1),_vm._l((download.annotated_frames),function(link){return _c('b-dropdown-item',{attrs:{"has-link":"has-link","position":"is-bottom-left"}},[_c('a',{attrs:{"href":link.link,"target":"_blank"}},[_c('b-icon',{attrs:{"icon":link.icon,"size":"is-small"}}),_c('span',[_vm._v(_vm._s(link.text))])],1)])})],2),_c('b-dropdown',{attrs:{"hoverable":download.all_frames,"disabled":!download.all_frames}},[_c('a',{staticClass:"button is-warning",attrs:{"slot":"trigger"},slot:"trigger"},[_c('b-icon',{attrs:{"icon":"zip-box","size":"is-small"}}),_c('span',[_vm._v("All frames")])],1)])],1):_vm._e()})],2)])])])}
var download_staticRenderFns = []
var download_esExports = { render: download_render, staticRenderFns: download_staticRenderFns }
/* harmony default export */ var pages_download = (download_esExports);
// CONCATENATED MODULE: ./src/pages/download.vue
function download_injectStyle (ssrContext) {
  __webpack_require__("1I5O")
}
var download_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var download___vue_template_functional__ = false
/* styles */
var download___vue_styles__ = download_injectStyle
/* scopeId */
var download___vue_scopeId__ = "data-v-568ad2d2"
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
            { name: 'Weiyao Lin', affiliation: 'SJTU', im_name: 'WeiyaoLin' },
        ];
        _this.speakers = [{
                name: 'Jason Corso',
                bio: "Corso is an associate professor of Electrical Engineering and Computer Science at the\n    University of Michigan. From 2007-14 he was a member of the Computer Science and\n    Engineering faculty at SUNY Buffalo.  He is the recipient of a Google Faculty Research Award\n    2015, the Army Research Office Young Investigator Award 2010, NSF CAREER award 2009,\n    SUNY Buffalo Young Investigator Award 2011, a member of the 2009 DARPA Computer Science\n    Study Group, and a recipient of the Link Foundation Fellowship in Advanced Simulation and\n    Training 2003. Corso has authored 90+ peer-reviewed papers on topics of his research interest\n    including computer vision, robot perception, data science, and medical imaging. He is an\n    Associate Editor of PAMI, and a member of the AAAI, IEEE, ACM.",
                photo: 'JasonCorso',
            }, {
                name: 'Brian Price',
                bio: "Brian is a researcher in the Adobe Research Labs working in computer vision. He received his\n    PhD degree in computer science from Brigham Young University in 2010, and his adviser was Dr. Bryan\n    Morse. His PhD research focused on interactive image segmentation and matting in images and videos.\n    Before that, he received his masters degree from the same institution under the guidance of Dr. \n    William Barrett.\n    Brian joined Adobe in 2010 after completing his graduate work. His research interests include image\n    and video segmentation and matting, interactive vision methods, stereo, and other computer vision\n    fields, and well as broad interest in computer graphics and machine learning.",
                photo: 'BrianPrice',
            }];
        return _this;
    }
    WorkshopPage = workshop___decorate([
        vue_property_decorator_umd["Component"]
    ], WorkshopPage);
    return WorkshopPage;
}(vue_property_decorator_umd["Vue"]));
/* harmony default export */ var workshop = (workshop_WorkshopPage);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-761f1c64","hasScoped":true,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/template-compiler/preprocessor.js?engine=pug!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/pages/workshop.vue
var workshop_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"page-workshop"}},[_c('section',{staticClass:"section",attrs:{"id":"display-section"}},[_c('div',{staticClass:"container"},[_vm._m(0),_c('div',{staticClass:"section"},[_c('h1',{staticClass:"title is-4"},[_vm._v("Invited Speakers (Tentatively)")]),_vm._l((_vm.speakers),function(speaker){return _c('article',{staticClass:"message is-dark speakers"},[_c('div',{staticClass:"message-body columns"},[_c('div',{staticClass:"left column is-narrow"},[_c('figure',{staticClass:"image"},[_c('img',{attrs:{"src":'/static/speakers/'+speaker.photo+'.jpg'}})])]),_c('div',{staticClass:"right column"},[_c('p',{staticClass:"is-size-5 has-text-weight-bold"},[_vm._v(_vm._s(speaker.name))]),_c('p',[_vm._v(_vm._s(speaker.bio))])])])])})],2),_vm._m(1)])])])}
var workshop_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"section"},[_c('h1',{staticClass:"title"},[_vm._v("Program")]),_c('h2',{staticClass:"subtitle has-text-grey-light"},[_vm._v("ECCV2018, Munich, Germany")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"section"},[_c('h1',{staticClass:"title is-4"},[_vm._v("Workshop schedule (Sep 14th afternoon)")]),_c('li',[_c('strong',[_vm._v("12:30-1:30")]),_vm._v(": Poster Session (Shared with the workshop \"The Third International Workshop on Video Segmentation\").")]),_c('li',[_c('strong',[_vm._v("1:30-2:00")]),_vm._v(": Welcome and introduction.")]),_c('li',[_c('strong',[_vm._v("2:00-2:40")]),_vm._v(": Invited talk: Brian Price.")]),_c('li',[_c('strong',[_vm._v("2:40-2:55")]),_vm._v(": 4th place team presentation.")]),_c('li',[_c('strong',[_vm._v("2:55-3:10")]),_vm._v(": Break.")]),_c('li',[_c('strong',[_vm._v("3:10-3:50")]),_vm._v(": Invited talk: Jason Corso.")]),_c('li',[_c('strong',[_vm._v("3:50-4:05")]),_vm._v(": 3rd place team presentation.")]),_c('li',[_c('strong',[_vm._v("4:05-4:20")]),_vm._v(": 2nd place team presentation.")]),_c('li',[_c('strong',[_vm._v("4:20-4:35")]),_vm._v(": 1st place team presentation.")]),_c('li',[_c('strong',[_vm._v("4:35-5:00")]),_vm._v(": Closing remarks and awards.")]),_c('li',[_c('strong',[_vm._v("5:00-6:00")]),_vm._v(": Poster Session (Shared with the workshop \"The Third International Workshop on Video Segmentation\").")])])}]
var workshop_esExports = { render: workshop_render, staticRenderFns: workshop_staticRenderFns }
/* harmony default export */ var pages_workshop = (workshop_esExports);
// CONCATENATED MODULE: ./src/pages/workshop.vue
function workshop_injectStyle (ssrContext) {
  __webpack_require__("bhnf")
}
var workshop_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var workshop___vue_template_functional__ = false
/* styles */
var workshop___vue_styles__ = workshop_injectStyle
/* scopeId */
var workshop___vue_scopeId__ = "data-v-761f1c64"
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

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-1db145c6","hasScoped":true,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/template-compiler/preprocessor.js?engine=pug!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/pages/guidelines.vue
var guidelines_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"page-guidelines"}},[_c('section',{staticClass:"section",attrs:{"id":"display-section"}},[_c('div',{staticClass:"container content"},[_vm._m(0),_vm._m(1),_c('div',{staticClass:"section"},[_c('h1',{staticClass:"title is-4"},[_vm._v("Dataset")]),_c('p',[_vm._v("Our dataset contains three subsets.")]),_c('ul',[_c('li',[_vm._v("Training: 3471 video sequences with densely-sampled multi-object annotations. Each object is annotated with a category name, there is 65 categories in traning set.")]),_c('li',[_vm._v("Validation: 474 video sequences with the first-frame annotations. It includes objects from the 65 training categories, and 26 unseen categories in training.")]),_c('li',[_vm._v("Test: Another 508 sequences with the first-frame annotations. It includes objects from the 65 training categories, and 29 unseen categories in training.")]),_c('li',[_vm._v("RGB images and annotations for the labeled frames will be provided. We will also provide a download link for all image frames. Evaluation of validation and test sets will be done by uploading results to our evaluation server. Category information for validation and test sets will not be released.")]),_c('li',[_vm._v("To download the dataset, checkout"),_c('router-link',{attrs:{"to":"/dataset/download"}},[_vm._v(" download")]),_vm._v(" page.")],1)])]),_vm._m(2),_vm._m(3),_vm._m(4),_vm._m(5)])])])}
var guidelines_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"section"},[_c('h1',{staticClass:"title"},[_vm._v("Guidelines")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"section"},[_c('h1',{staticClass:"title is-4"},[_vm._v("Task")]),_c('p',[_vm._v("The challenge task is semi-supervised video object segmentation, which targets at segmenting a particular object isntance throughout the entire video sequence given only the object mask of the first frame. Different from previous video object segmentation challenges in CVPR 2017 and 2018, we will provide much larger scale of training and test data to foster various kinds of algorithms. In addition, our test dataset will have  unseen categories which do not exist in the training dataset, in order to evaluate the generalization ability of algorithms.")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"section"},[_c('h1',{staticClass:"title is-4"},[_vm._v("Evaluation Metric")]),_c('p',[_vm._v("Similar to a previous video object segmentation challenge"),_c('a',{attrs:{"href":"http://davischallenge.org/"}},[_vm._v(" DAVIS")]),_vm._v(", we will be using Region Jaccard (J) and Boundary F measure (F) as evaluation metric.  The overall ranking measures will be computed in the following way:"),_c('ul',[_c('li',[_vm._v("compute J and F for both seen and unseen categories, averaged over all corresponding objects.")]),_c('li',[_vm._v("the final score is the average of the four scores:")]),_c('ul',[_c('li',[_vm._v("J for seen categories")]),_c('li',[_vm._v("F for seen categories")]),_c('li',[_vm._v("J for unseen categories")]),_c('li',[_vm._v("F for unseen categories")])])]),_vm._v("Note that we have some of the objects start appearing from the middle of videos, we will only compute the metrics from the first occurence of these objects to the end of the video.")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"section"},[_c('h1',{staticClass:"title is-4"},[_vm._v("Result Submission")]),_c('p',[_vm._v("Submission of evaluation results will be made through"),_c('a',{attrs:{"href":"https://competitions.codalab.org/competitions/19544"}},[_vm._v(" CodaLab")]),_vm._v(". Go to "),_c('a',{attrs:{"href":"https://competitions.codalab.org/competitions/19544#participate"}},[_vm._v("participate")]),_vm._v("\nto join in the competition.")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"section"},[_c('h1',{staticClass:"title is-4"},[_vm._v("Paper Submission")]),_c('li',[_vm._v("We will be inviting top-ranking teams to submit short technical papers. The template of the paper is the same as ECCV, but length will be limited to 10 pages including references.")]),_c('li',[_vm._v("All papers will be invited to the workshop in form of oral presentation or poster.")]),_c('li',[_vm._v("Accepted papers will be self-published on the web of the challenge.")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"section"},[_c('h1',{staticClass:"title is-4"},[_vm._v("FAQ")]),_c('ol',[_c('li',{staticClass:"has-text-weight-bold"},[_vm._v("Can external datasets be used to train the competition models?")]),_c('p',[_vm._v("Yes, external datasets can be used. If external datasets are used, it needs to be clarified in the technical papers.")])])])}]
var guidelines_esExports = { render: guidelines_render, staticRenderFns: guidelines_staticRenderFns }
/* harmony default export */ var pages_guidelines = (guidelines_esExports);
// CONCATENATED MODULE: ./src/pages/guidelines.vue
function guidelines_injectStyle (ssrContext) {
  __webpack_require__("Sa65")
}
var guidelines_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var guidelines___vue_template_functional__ = false
/* styles */
var guidelines___vue_styles__ = guidelines_injectStyle
/* scopeId */
var guidelines___vue_scopeId__ = "data-v-1db145c6"
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

// CONCATENATED MODULE: ./node_modules/ts-loader!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/pages/dummy.vue
var dummy___extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var dummy___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var dummy_DummyPage = /** @class */ (function (_super) {
    dummy___extends(DummyPage, _super);
    function DummyPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DummyPage = dummy___decorate([
        vue_property_decorator_umd["Component"]
    ], DummyPage);
    return DummyPage;
}(vue_property_decorator_umd["Vue"]));
/* harmony default export */ var dummy = (dummy_DummyPage);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-a9155c5a","hasScoped":true,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/template-compiler/preprocessor.js?engine=pug!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/pages/dummy.vue
var dummy_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"dummypage"}},[_c('p',[_c('b-icon',{attrs:{"icon":"timer-sand-full","size":"is-large"}}),_vm._v("Please wait ...")],1),_c('p',[_vm._v(_vm._s(_vm.$route.path.split('/').pop())+" page will be available soon")])])}
var dummy_staticRenderFns = []
var dummy_esExports = { render: dummy_render, staticRenderFns: dummy_staticRenderFns }
/* harmony default export */ var pages_dummy = (dummy_esExports);
// CONCATENATED MODULE: ./src/pages/dummy.vue
function dummy_injectStyle (ssrContext) {
  __webpack_require__("cEWm")
}
var dummy_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var dummy___vue_template_functional__ = false
/* styles */
var dummy___vue_styles__ = dummy_injectStyle
/* scopeId */
var dummy___vue_scopeId__ = "data-v-a9155c5a"
/* moduleIdentifier (server only) */
var dummy___vue_module_identifier__ = null
var dummy_Component = dummy_normalizeComponent(
  dummy,
  pages_dummy,
  dummy___vue_template_functional__,
  dummy___vue_styles__,
  dummy___vue_scopeId__,
  dummy___vue_module_identifier__
)

/* harmony default export */ var src_pages_dummy = (dummy_Component.exports);

// CONCATENATED MODULE: ./node_modules/ts-loader!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/pages/notfound.vue
var notfound___extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var notfound___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var notfound_NotfoundPage = /** @class */ (function (_super) {
    notfound___extends(NotfoundPage, _super);
    function NotfoundPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NotfoundPage = notfound___decorate([
        vue_property_decorator_umd["Component"]
    ], NotfoundPage);
    return NotfoundPage;
}(vue_property_decorator_umd["Vue"]));
/* harmony default export */ var notfound = (notfound_NotfoundPage);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-4916f6cb","hasScoped":true,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/template-compiler/preprocessor.js?engine=pug!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/pages/notfound.vue
var notfound_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"not-found-page"}},[_c('p',[_c('b-icon',{attrs:{"icon":"alert-circle","size":"is-large"}}),_vm._v(" Page not found")],1),_c('p',[_c('router-link',{attrs:{"to":"/home"}},[_vm._v("return to home page")])],1)])}
var notfound_staticRenderFns = []
var notfound_esExports = { render: notfound_render, staticRenderFns: notfound_staticRenderFns }
/* harmony default export */ var pages_notfound = (notfound_esExports);
// CONCATENATED MODULE: ./src/pages/notfound.vue
function notfound_injectStyle (ssrContext) {
  __webpack_require__("Eo9/")
}
var notfound_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var notfound___vue_template_functional__ = false
/* styles */
var notfound___vue_styles__ = notfound_injectStyle
/* scopeId */
var notfound___vue_scopeId__ = "data-v-4916f6cb"
/* moduleIdentifier (server only) */
var notfound___vue_module_identifier__ = null
var notfound_Component = notfound_normalizeComponent(
  notfound,
  pages_notfound,
  notfound___vue_template_functional__,
  notfound___vue_styles__,
  notfound___vue_scopeId__,
  notfound___vue_module_identifier__
)

/* harmony default export */ var src_pages_notfound = (notfound_Component.exports);

// CONCATENATED MODULE: ./src/pages/index.ts









vue_esm["default"].use(vue_router_esm["a" /* default */]);
/* harmony default export */ var pages = (new vue_router_esm["a" /* default */]({
    mode: 'history',
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
            component: src_pages_dummy,
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
        }, {
            path: '/challenge/leaderboard',
            name: 'leaderboard',
            component: src_pages_dummy,
        }, {
            path: '/404',
            component: src_pages_notfound,
        }, {
            path: '*',
            redirect: '/404'
        },
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