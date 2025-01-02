const CONFIG = {
  NOBELIUM_NAV_NOTION_ICON: true, // 是否读取Notion图标作为站点头像 ; 否则默认显示黑色SVG方块

  // 特殊菜单
  NOBELIUM_MENU_RANDOM_POST: false, // 是否显示随机跳转文章按钮
  NOBELIUM_MENU_SEARCH_BUTTON: false, // 是否显示搜索按钮，该按钮支持Algolia搜索
  NOBELIUM_MENU_DARKMODE_BUTTON: false, // 菜单显示深色模式切换

  // 默认菜单配置 （开启自定义菜单后，以下配置则失效，请在Notion中自行配置菜单）
  NOBELIUM_MENU_CATEGORY: false, // 显示分类
  NOBELIUM_MENU_TAG: false, // 显示标签
  NOBELIUM_MENU_ARCHIVE: true, // 显示归档
  NOBELIUM_MENU_SEARCH: false, // 显示搜索
  NOBELIUM_MENU_RSS: false, // 显示订阅

  NOBELIUM_AUTO_COLLAPSE_NAV_BAR: false // 页头导航栏动画
}
export default CONFIG
