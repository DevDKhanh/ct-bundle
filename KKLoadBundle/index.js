System.register("chunks:///_virtual/KKLoadBundle",["./KKLoadLayer.ts"],(function(){return{setters:[null],execute:function(){}}}));

System.register("chunks:///_virtual/KKLoadLayer.ts",["./rollupPluginModLoBabelHelpers.js","cc","./LayerBase.ts","./kk.ts","./KKGameUIConf.ts","./AsyncHelper.ts","./AsyncQueue.ts","./SkinManager.ts"],(function(n){var e,t,a,i,o,r,u,s,c,l,f,g,d,p,h,y;return{setters:[function(n){e=n.applyDecoratedDescriptor,t=n.inheritsLoose,a=n.initializerDefineProperty,i=n.assertThisInitialized},function(n){o=n.cclegacy,r=n._decorator,u=n.Sprite,s=n.Label,c=n.assetManager},function(n){l=n.LayerBase},function(n){f=n.default},function(n){g=n.KKLayerConf,d=n.KKBundleConf},function(n){p=n.default},function(n){h=n.AsyncQueue},function(n){y=n.GameType}],execute:function(){var b,m,L,A,K,k,v;o._RF.push({},"3bafdJhadZD76O+gnSXPCVd","KKLoadLayer",void 0);var C=r.ccclass,M=r.property;n("KKLoadLayer",(b=C("KKLoadLayer"),m=M(u),L=M(s),b((k=e((K=function(n){function e(){for(var e,t=arguments.length,o=new Array(t),r=0;r<t;r++)o[r]=arguments[r];return e=n.call.apply(n,[this].concat(o))||this,a(e,"pb",k,i(e)),a(e,"lb",v,i(e)),e}t(e,n);var o=e.prototype;return o.onLoad=function(){},o.start=function(){var n=this,e=new h,t=[d.Audios,d.Common,d.Home,d.CoTuong,d.Banqi],a=[{bundle:d.Audios,message:"Đang tải tệp âm thanh"},{bundle:d.Common,message:"Đang tải giao diện"},{bundle:d.Home,message:"Đang tải trang chủ"},{bundle:d.CoTuong,message:"Thiết lập giao diện cờ tướng"},{bundle:d.Banqi,message:"Thiết lập giao diện cờ up"}],i=t.length+a.length+1,o=0,r=function(e,t){void 0===e&&(e=0);var a=(o+e)/i;n.pb.fillRange=a,n.lb.string="Đang triển khai trận cờ "+Math.floor(100*a)+"%"};t.forEach((function(n){e.push((function(e){r(0),p.loadBundleAsync(n).then((function(){o++,r(0),e()}))}))})),a.forEach((function(n){e.push((function(e){p.loadDirAsync(c.getBundle(n.bundle),"/",(function(e,t){r(e/t,n.message)})).then((function(){o++,r(0,n.message),e()}))}))})),e.push((function(n){r(0),f.skinsMgr.getSkinManager(y.COTUONG).loadAllSkinAssets().then((function(){f.skinsMgr.getSkinManager(y.COTUONG).getListSkin(),o++,r(0),n()}))})),e.complete=function(){r(0),n.handleDone()},e.play()},o.handleDone=function(){f.uiMgr.preLoadLayerAsync(g.Auth).then((function(){f.uiMgr.goLayerAsync(g.Auth)}))},e}(l)).prototype,"pb",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),v=e(K.prototype,"lb",[L],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),A=K))||A));o._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/KKLoadBundle', 'chunks:///_virtual/KKLoadBundle'); 
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