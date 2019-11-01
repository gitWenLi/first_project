$(function() {
  let id = location.search.split('=')[1];
  function render() {
    $.ajax({
      type: 'GET',
      url: 'http://127.0.0.1:9090/api/getdiscountproduct',
      data: {productid:id},
      dataType: 'json',
      success: function(response) {
        console.log(response);
        $('.mm-content').html(template('tmp',{list:response.result}));
      },
    });
  }
  render();
})