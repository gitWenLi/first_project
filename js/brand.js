$(function () {
  let id = location.search.split('=')[1];

  function renderCon() {
    $.ajax({
      type: 'GET',
      url: 'http://127.0.0.1:9090/api/getbrand',
      data: {
        brandtitleid: id
      },
      dataType: 'json',
      success: function (response) {
        // console.log(response);
        $('.brand-list ul').html(template('tmpCon', {
          list: response.result
        }));
      },
    });
  }
  renderCon();

  function renderPro() {
    $.ajax({
      type: 'GET',
      url: 'http://127.0.0.1:9090/api/getbrandproductlist',
      data: {
        brandtitleid: id,
        pagesize: 5
      },
      dataType: 'json',
      success: function (response) {
        $('.mm-products ul').html(template('tmpPro', {
          list: response.result
        }));
      },
    });
  }
  renderPro();

  function renderCom() {
    $.ajax({
      type: 'GET',
      url: 'http://127.0.0.1:9090/api/getproductcom',
      data: {productid:id},
      dataType: 'json',
      success: function(response) {
        console.log(response);
        $('.comment-list ul').html(template('tmpComment',{list:response.result}));
      },
    });
  }
  renderCom();
})