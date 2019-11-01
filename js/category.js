$(function () {

  function renderTitle() {
    $.ajax({
      type: 'GET',
      url: 'http://127.0.0.1:9090/api/getcategorytitle',
      data: 'data',
      dataType: 'json',
      success: function(response) {
        // console.log(response);
        $('.mm-category .cates').on('click','.cate-title',function() {
          $(this).parent().children('.cate-body').stop().slideToggle();
          $(this).parent().siblings().children('.cate-body').stop().slideUp();
          let id = $(this).parent().data('id');
          // console.log(id);
          renderCon(id);
        })
        $('.mm-category .cates').html(template('tmpTitle',response));
      },
    });
  }
  renderTitle();
})

  function renderCon(id) {
    $.ajax({
      type: 'GET',
      url: 'http://127.0.0.1:9090/api/getcategory',
      dataType: 'json',
      data:{titleid:id},
      success: function(response) {
        $('.cate-body ul').html(template('tmpCon',response));
      },
    });
  }

