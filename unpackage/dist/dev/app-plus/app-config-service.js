
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/index","pages/search/search","pages/paper/paper","pages/mine/mine","pages/dongtai/dongtai","pages/addInput/addInput","my-components/commonList/commonList","pages/talkKid/talkKid","pages/talkDetail/talkDetail","pages/friendList/friendList","pages/userChat/userChat","pages/myCanvas/myCanvas","pages/contentDetail/contentDetail"],"window":{},"tabBar":{"borderStyle":"black","backgroundColor":"#fff","selectedColor":"#FFDB20","position":"bottom","list":[{"pagePath":"pages/index/index","iconPath":"./static/tabbar/index.png","selectedIconPath":"./static/tabbar/indexed.png","text":"主页"},{"pagePath":"pages/dongtai/dongtai","iconPath":"./static/tabbar/news.png","selectedIconPath":"./static/tabbar/newsed.png","text":"动态"},{"pagePath":"pages/paper/paper","iconPath":"./static/tabbar/paper.png","selectedIconPath":"./static/tabbar/papered.png","text":"小纸条"},{"pagePath":"pages/mine/mine","iconPath":"./static/tabbar/home.png","selectedIconPath":"./static/tabbar/homeed.png","text":"我的"}]},"nvueCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"demo1","compilerVersion":"2.9.3","entryPagePath":"pages/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarBackgroundColor":"#fff","navigationBarTextStyle":"black","scrollIndicator":"none","bounce":"none","titleNView":{"searchInput":{"align":"center","backgroundColor":"#f7f7f7","borderRadius":"10px","placeholder":"搜索糗事","placeholderColor":"#ccc","disabled":true},"buttons":[{"color":"#ff9619","colorPressed":"#bbb","float":"left","fontSize":"30px","fontSrc":"./static/font/icon.ttf","text":""},{"color":"#000","text":"","colorPressed":"#bbb","float":"right","fontSize":"30px","fontSrc":"./static/font/icon.ttf"}]}}},{"path":"/pages/search/search","meta":{},"window":{"titleNView":{"autoBackButton":false,"searchInput":{"backgroundColor":"#fff","align":"left","borderRadius":"10px","placeholder":"搜索糗事","placeholderColor":"#C9C9C9"},"buttons":[{"color":"#000000","float":"right","fontWeight":"normal","text":"取消","fontSize":"16px"}]}}},{"path":"/pages/paper/paper","meta":{"isQuit":true,"isTabBar":true},"window":{"backgroundColorTop":"#fff","enablePullDownRefresh":true,"titleNView":"false"}},{"path":"/pages/mine/mine","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"paper"}},{"path":"/pages/dongtai/dongtai","meta":{"isQuit":true,"isTabBar":true},"window":{"bounce":"none","titleNView":false}},{"path":"/pages/addInput/addInput","meta":{},"window":{"titleNView":false}},{"path":"/my-components/commonList/commonList","meta":{},"window":{}},{"path":"/pages/talkKid/talkKid","meta":{},"window":{"navigationBarBackgroundColor":"#fff","navigationBarTextStyle":"black","navigationBarTitleText":"话题分类"}},{"path":"/pages/talkDetail/talkDetail","meta":{},"window":{"scrollIndicator":"none","titleNView":{"type":"transparent","buttons":[{"type":"menu"}]}}},{"path":"/pages/friendList/friendList","meta":{},"window":{"enablePullDownRefresh":false,"navigationBarBackgroundColor":"#fff","bounce":"none","titleNView":{"autoBackButton":false,"searchInput":{"backgroundColor":"#F7F7F7","placeholder":"搜索糗事","borderRadius":"10rpx","placeholderColor":"","align":"left"},"buttons":[{"text":"取消","float":"right","fontSize":"32rpx","color":"#000000"}]}}},{"path":"/pages/userChat/userChat","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"titleNView":false}},{"path":"/pages/myCanvas/myCanvas","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/contentDetail/contentDetail","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"titleNView":false}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});