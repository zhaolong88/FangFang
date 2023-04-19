System.register("chunks:///_virtual/main",["./main.ts"],(function(){"use strict";return{setters:[null],execute:function(){}}}));

System.register("chunks:///_virtual/main.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var e,i,l,a,n,r,s,o,b;return{setters:[function(t){e=t.applyDecoratedDescriptor,i=t.inheritsLoose,l=t.initializerDefineProperty,a=t.assertThisInitialized},function(t){n=t.cclegacy,r=t._decorator,s=t.EditBox,o=t.Label,b=t.Component}],execute:function(){var c,u,p,h,g,d,f,_,y,m,x,F,z,k,w,L,v,S,I,U,D;n._RF.push({},"ee87feM43NAkraflISN6e/l","main",void 0);var A=r.ccclass,B=r.property;t("main",(c=A("main"),u=B(s),p=B(s),h=B(s),g=B(s),d=B(o),f=B(o),_=B(o),y=B(o),m=B(o),c((z=e((F=function(t){function e(){for(var e,i=arguments.length,n=new Array(i),r=0;r<i;r++)n[r]=arguments[r];return e=t.call.apply(t,[this].concat(n))||this,l(e,"edit1",z,a(e)),l(e,"edit2",k,a(e)),l(e,"edit3",w,a(e)),l(e,"edit4",L,a(e)),l(e,"label_1",v,a(e)),l(e,"label_2",S,a(e)),l(e,"label_3",I,a(e)),l(e,"label_4",U,a(e)),l(e,"label_5",D,a(e)),e}i(e,t);var n=e.prototype;return n.start=function(){},n.onLoad=function(){this.edit3.string="0.0335",this.edit4.string="36",this.edit1.node.on("text-changed",this.callback1,this),this.edit2.node.on("text-changed",this.callback2,this),this.edit3.node.on("text-changed",this.callback3,this),this.edit4.node.on("text-changed",this.callback4,this)},n.callback1=function(t){},n.callback2=function(t){this.setUI()},n.callback3=function(t){this.setUI()},n.callback4=function(t){this.setUI()},n.setUI=function(){this.label_1.string=String(parseFloat(this.edit2.textLabel.string)/parseFloat(this.edit4.textLabel.string)),this.label_3.string=String(parseFloat(this.edit2.textLabel.string)*parseFloat(this.edit3.textLabel.string)),this.label_2.string=String(parseFloat(this.label_3.string)-parseFloat(this.label_1.string)),this.label_4.string=String(parseFloat(this.label_2.string)*parseFloat(this.edit4.textLabel.string)),this.label_5.string=String(parseFloat(this.label_3.string)*parseFloat(this.edit4.textLabel.string))},n.update=function(t){},e}(b)).prototype,"edit1",[u],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),k=e(F.prototype,"edit2",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),w=e(F.prototype,"edit3",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),L=e(F.prototype,"edit4",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),v=e(F.prototype,"label_1",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),S=e(F.prototype,"label_2",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),I=e(F.prototype,"label_3",[_],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),U=e(F.prototype,"label_4",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),D=e(F.prototype,"label_5",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),x=F))||x));n._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});