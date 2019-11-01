$(function() {
  let id = location.search.split('productid=')[1].split('&categoryid=')[0];
  console.log(id);

  function renderCon() {
    $.ajax({
      type: 'GET',
      url: 'http://127.0.0.1:9090/api/getproduct',
      data: {productid:id},
      dataType: 'json',
      success: function(response) {
        // console.log(response);
        // console.log(template('tmpCon',response));
        $('.mm-detail').html(template('tmpCon',response));
        let productName = response.result[0].productName.split(' ')[0];
        // console.log(productName);
        $('.mm-menu ul .index').html(template('tmpMenu2', {productName}));
      },
    });
  }
  renderCon();
  
  function renderMenu() {
    let proid = location.search.split('categoryid=')[1];
    $.ajax({
      type: 'GET',
      url: 'http://127.0.0.1:9090/api/getcategorybyid',
      data: {
        categoryid: proid,

      },
      dataType: 'json',
      success: function (response) {
        // console.log(response)
        $('.mm-menu ul .index_').html(template('tmpMenu1', response));
      },
    });
  }
  renderMenu();

  function renderComment() {
    $.ajax({
      type: 'GET',
      url: 'http://127.0.0.1:9090/api/getproductcom',
      data: {productid:id},
      dataType: 'json',
      success: function(response) {
        console.log(response);
        $('.mm-comment .comment-list ul').html(template('tmpComment',{list:response.result}));
      },
    });
  }
  renderComment();
})