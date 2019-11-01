$(function() {
  function render() {
    $.ajax({
      type: 'GET',
      url: 'http://127.0.0.1:9090/api/getinlanddiscount',
      dataType: 'json',
      success: function(response) {
        console.log(response);
        $('.mm-content ul').html(template('tmp',{list:response.result}))
      },
    });
  }
  render();
})