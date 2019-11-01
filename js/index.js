$(function() {

  function renderNav() {
    $.ajax({
      type: 'GET',
      url: 'http://192.168.135.116:9090/api/getindexmenu',
      dataType: 'json',
      success: function(response) {
        // console.log(response);
        $('.mm-nav ul').html(template('tmpNav',response));
      },
    });
  }
  renderNav();

  function renderContent() {
    $.ajax({
      type: 'GET',
      url: 'http://localhost:9090/api/getmoneyctrl',
      dataType: 'json',
      success: function(response) {
        
        // template.helper("getUrl", function(imgErrElement) {
        //   return (imgErrElement.split('imgurl=')[1]).split('" alt=')[0];
        // });
        $('.content-list ul').html(template('tmpCon',response));
      },
    });
  }
  renderContent();
})