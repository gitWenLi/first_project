$(function() {
  let id = location.search.split('=')[1];
  function render() {
    $.ajax({
      type: 'GET',
      url: 'http://127.0.0.1:9090/api/getcouponproduct',
      data: {couponid:id},
      dataType: 'json',
      success: function(response) {
        console.log(response);
        $('.coupon-content ul').html(template('tmp',{list:response.result}));
      },
    });
  }
  render();
})