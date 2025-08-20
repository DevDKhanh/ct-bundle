System.register("chunks:///_virtual/KKCoTheBundle",["./KKCoTheLayer.ts"],(function(){return{setters:[null],execute:function(){}}}));

System.register("chunks:///_virtual/KKCoTheLayer.ts",["./rollupPluginModLoBabelHelpers.js","cc","./LayerBase.ts","./kk.ts","./KKGameUIConf.ts","./KKUtils.ts"],(function(n){var t,e,o,c,a,r,s;return{setters:[function(n){t=n.inheritsLoose},function(n){e=n.cclegacy,o=n._decorator},function(n){c=n.LayerBase},function(n){a=n.default},function(n){r=n.KKLayerConf},function(n){s=n.default}],execute:function(){var i;e._RF.push({},"08fc5PTZc9MEJQ4c8O2xLLE","KKCoTheLayer",void 0);var u=o.ccclass;o.property,n("KKCoTheLayer",u("KKCoTheLayer")(i=function(n){function e(){return n.apply(this,arguments)||this}t(e,n);var o=e.prototype;return o.onEnable=function(){s.showCommonPopup({title:"THÔNG BÁO",desc:"Giang hồ cờ cuộc còn dang dở, cao thủ hãy tạm lui một bước.\n\nMời chư vị quay lại sau, thỏa chí anh hùng!",btnTxtCls:"Trở Về",closeCall:function(){a.uiMgr.goLayerAsync(r.Home)}})},o.onBtnClick=function(n,t){switch(t){case"close":a.uiMgr.goLayerAsync(r.Home)}},e}(c))||i);e._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/KKCoTheBundle', 'chunks:///_virtual/KKCoTheBundle'); 
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