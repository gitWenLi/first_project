$(function() {
  $('.filter .tit .info').click(function() {
    // console.log(this)
    if ($(this).data('id') == 1) {
      $('#itemsOne').stop().toggle();
      $('#itemsTwo').stop().hide();
      $('#itemsThree').stop().hide();
    } else if($(this).data('id') == 2) {
      $('#itemsOne').stop().hide();
      $('#itemsTwo').stop().toggle();
      $('#itemsThree').stop().hide();
    } else {
      $('#itemsOne').stop().hide();
      $('#itemsTwo').stop().hide();
      $('#itemsThree').stop().toggle();
    }
  })

  function renderShop() {
    $.ajax({
      type: 'GET',
      url: 'http://127.0.0.1:9090/api/getgsshop',
      dataType: 'json',
      success: function(response) {
        // console.log(response);
        // console.log(template('tmpShop',{list:response.result}));
        $('#itemsOne').html(template('tmpShop',{list:response.result}));
      },
    });
  }
  renderShop();

  function renderArea() {
    $.ajax({
      type: 'GET',
      url: 'http://127.0.0.1:9090/api/getgsshoparea',
      // data: 'data',
      dataType: 'json',
      success: function(response) {
        // console.log(response);
        $('#itemsTwo').html(template('tmpArea',{list:response.result}));
      },
    });
  }
  renderArea();

  let shopId = 0;
  let areaId = 0
  function renderPro() {
    $.ajax({
      type: 'GET',
      url: 'http://127.0.0.1:9090/api/getgsproduct',
      data: {
        shopid:shopId,
        areaid:areaId
      },
      dataType: 'json',
      success: function(response) {
        // console.log(response);
        $('.mm-content ul').html(template('tmpPro',{list:response.result}));
      },
    });
  }
  renderPro();

  $('#itemsOne').on('click','a',function() {
    shopId = $(this).data('id');
    console.log(shopId);
    $('.tit .shop a').text($(this).text());
    renderPro();
  })

  $('#itemsTwo').on('click','a',function() {
    areaId = $(this).data('id');
    console.log(areaId);
    $('.tit .area a').text($(this).text().slice(0,2));
    console.log($(this).text());
    renderPro();
  })
})