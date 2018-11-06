Page({

  /**
   * 页面的初始数据
   */
  data: {
    date:"Nov 18 2018",
    title:"正是虾肥蟹壮时"
  },

  process:function(){
    var date = "Nov 18 2018";
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    var post_contents=[
      {
        date: "Nov 18 2018",
        title: "正是虾肥蟹壮时",
        post_img: "/images/posts/crab.png",
        author_img: "/images/avatar/1.png",
        img_condition: true,
        content: "深秋时节，菊黄蟹肥。刷洗螃蟹，一不小心，手指常被蟹螯钳住，可疼呢。捉蟹的时候，只要用大拇指和中指捏住它头胸甲两侧，它就不能得逞啦。螃蟹肉质白嫩，黄胶厚脂，滋味鲜美，营养丰富。自古以来，蟹的美味一直受到赞赏：“螯封嫩玉双双满，壳凸红脂块块香。”",
        view_num: "112",
        collect_num: "76"
      },
      {
        date: "Nov 24 2018",
        title: "比利.林恩的中场故事",
        post_img: "/images/posts/bl.png",
        author_img: "/images/avatar/2.png",
        img_condition: true,
        content: "《比利·林恩的中场战事》是由美国索尼电影娱乐公司发行，由李安执导，乔·阿尔文、克里斯汀·斯图尔特、克里斯·塔克、加内特·赫德兰联合主演剧情片。《比利·林恩的中场战事》根据本·芳汀同名小说改编，讲述了在伊拉克战争中的美国士兵比利·林恩与战友战胜归来并被誉为美国英雄，在一场橄榄球公开赛的中场表演过程中，揭露这群士兵在战场上真实经历的故事。",
        view_num: "56",
        collect_num: "25"
      },
      {
        date: "Nov 23 2018",
        title: "VR科技场景",
        post_img: "/images/posts/vr.png",
        author_img: "/images/avatar/3.png",
        img_condition: true,
        content: "虚拟现实技术是一种可以创建和体验虚拟世界的计算机仿真系统，它利用计算机生成一种模拟环境，是一种多源信息融合的、交互式的三维动态视景和实体行为的系统仿真使用户沉浸到该环境中。",
        view_num: "344",
        collect_num: "666"
      }
    ]
    this.setData({
      post_keys: post_contents
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})