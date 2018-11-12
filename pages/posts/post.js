var postsData=require('../../data/posts_data.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function() {
    this.setData({
      postList:postsData.postList
    });
  },

  onPostTap: function(event){

    var postid = event.currentTarget.dataset.postid;

    wx.navigateTo({
      url: 'post-detail/post-detail',
    })
  }
})