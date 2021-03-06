/* eslint quotes: ["error", "double"] */
/* nls files need to use double quotes */
define({
  "viewer": {
    "common": {
      "save": "保存",
      "close": "关闭"
    },
    "errors": {
      "noConfigName": "未在 index.html > configOptions.story 中指定配置。",
      "configFormatError": "存在 JSON 语法错误，无法加载指定的配置。",
      "configNotFound": "找不到指定的配置或存在 JSON 语法错误，无法加载指定的配置。",
      "boxTitle": "发生错误",
      "servedFromFile": "应用程序必须通过 Web 服务器进行访问。请查看 ${USER_GUIDE} 获取详细信息。",
      "userGuide": "用户指南",
      "invalidConfig": "配置无效",
      "invalidConfigNoApp": "未在 index.html 中指定 Web 制图应用程序标识符。",
      "invalidConfigNoAppDev": "未在 URL 参数(?appid=)中指定 Web 制图应用程序标识符。在开发模式下，将忽略 index.html 中的 appid 配置。",
      "unspecifiedConfigOwner": "尚未配置授权的所有者。",
      "invalidConfigOwner": "未授权故事所有者。",
      "invalidConfignoOAuth": "此故事需要身份验证，请在 index.html 中配置 ArcGIS OAuth ID 或向公众提供故事的访问权限。",
      "invalidApp": "无法加载此故事。",
      "appLoadingFail": "发生错误，未正确加载 {TPL_NAME}。",
      "notConfiguredDesktop": "尚未配置此故事。",
      "notConfiguredMobile": "此显示器大小不支持 {TPL_NAME} 构建器。如果可能，请调整您的浏览器尺寸以访问构建器或用更大的屏幕在设备上构建您的故事。",
      "notConfiguredMobile2": "请将您的设备旋转至横向以使用 {TPL_NAME} 构建器。",
      "notAuthorized": "您无权访问此故事",
      "notAuthorizedBuilder": "您无权使用 {TPL_NAME} 构建器。",
      "noViewerIE": "低于 ${VERSION} 版本的 Internet Explorer 不支持此故事。${UPGRADE}。",
      "noViewerIE2": "您尝试查看故事所使用的浏览器版本过旧，不受支持。某些要素可能无法正常运行或出现非预期问题。我们建议您将浏览器更新至 Internet Explorer 11 或使用 Chrome 等其他浏览器。",
      "noViewerIE3": "2017 年底，将无法在此浏览器中加载此故事。届时，您必须使用受支持的浏览器查看此故事。",
      "upgradeBrowser": "请更新您的浏览器",
      "mapLoadingFail": "发生了一些错误，地图未正确加载。",
      "signOut": "登出",
      "builderSupport1": "Story Map Cascade 构建器仅受 ${CHROME} 和 ${SAFARI} 支持。但可在 Internet Explorer 11+、Firefox 等其他浏览器中查看使用构建器创建的 Cascade 故事。",
      "builderSupport2": "iPad 不支持 Story Map Cascade 构建器。但创建和共享的 Cascade 故事可在 iPad 上运行。",
      "builderSupport3": "可在 Chrome、Safari、Firefox 和 Internet Explorer 11+ 中查看 Cascade 故事，但 Story Map Cascade 构建器仅支持 ${CHROME} 和 ${SAFARI}。",
      "builderSupport4": "可在所有常用的 Web 浏览器中查看 Cascade 故事，但 Story Map Cascade 构建器只支持 ${CHROME} 和 ${SAFARI}。<br><br>如果您希望 Cascade 构建器支持其他浏览器，请联系 ${ESRI-SUPPORT} 或 ${BROWSER-SUPPORT-VOTE}。",
      "sorry": "注意："
    },
    "mobileWarning": {
      "message1": "您已阅读此故事的移动版本。有关含丰富媒体元素的完整版本，请尝试使用台式电脑。",
      "email": "使用电子邮件发送此故事"
    },
    "cover": {
      "iosEmbedLink": "点击以读取完整故事"
    },
    "media": {
      "captionPlaceholder": "您的此处标题...",
      "loadingError": "对不起，无法访问此内容",
      "explore": "浏览",
      "exploreMap": "浏览地图",
      "exploreStop": "停止浏览",
      "sceneNotSupported": "对不起，您的设备不支持 3D 地图。",
      "loading1": "正在加载...",
      "loading2": "正在加载地图...",
      "videoPlayPause": "播放/暂停",
      "videoMuteUnmute": "静音/取消静音"
    },
    "headerFromCommon": {
      "defaultTagline": "${STORY_MAP}",
      "share": "共享",
      "tooltipAutoplayDisabled": "这不适用于自动播放模式"
    },
    "shareFromCommon": {
      "copy": "复制",
      "copied": "已复制",
      "open": "打开",
      "embed": "嵌入到网页",
      "embedExplain": "使用以下 HTML 代码将故事嵌入到 Web 页面中。",
      "size": "大小(宽度/高度)：",
      "autoplayLabel": "自动播放模式",
      "autoplayExplain1": "自动播放模式将以定期的时间间隔播放您的故事。该模式是自助服务或公共显示屏的理想选择，但请注意，在其他情景下会使故事难以阅读。小型显示器不支持该功能。",
      "autoplayExplain2": "激活此模式时，可使用控件播放/暂停故事和调整导航速度。",
      "linksupdated": "链接已更新!"
    },
    "theme": {
      "lightLabel": "浅色",
      "darkLabel": "暗色"
    },
    "autoplay": {
      "speedFast": "快速",
      "speedMedium": "中等",
      "speedSlow": "慢速"
    }
  }
});