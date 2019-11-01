$(function () {
  let id = 0;
  $('.mui-scroll').on('click', 'a', function (e) {
    e.preventDefault();
    id = $(this).data('id');
    console.log(id);
    renderCon();
  })

  function renderCon() {
    $.ajax({
      type: 'GET',
      url: 'http://127.0.0.1:9090/api/getbaicaijiaproduct',
      data: {
        titleid: id
      },
      dataType: 'json',
      success: function (response) {
        console.log(response);
        // console.log(template('tmpCon',{list:response}));
        $('.bcj-list').html(template('tmpCon', response));
      },
    });
  }
  renderCon();

  function renderMenu() {
    $.ajax({
      type: 'GET',
      url: 'http://127.0.0.1:9090/api/getbaicaijiatitle',
      dataType: 'json',
      success: function (response) {
        // console.log(response);
        $('.mui-scroll').html(template('tmpMenu', {
          list: response.result
        }));
      },
      complete:function() {
        $('.mui-scroll').children().eq(0).addClass('mui-active')
      }
    });
  }
  renderMenu();
})