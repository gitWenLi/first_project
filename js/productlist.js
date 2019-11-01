// import { render } from "art-template";

$(function () {

  let id = location.search.split('=')[1];
  let num = 1;
  let maxPage = '';

  function renderMenu() {
    $.ajax({
      type: 'GET',
      url: 'http://127.0.0.1:9090/api/getcategorybyid',
      data: {
        categoryid: id
      },
      dataType: 'json',
      success: function (response) {
        // console.log(response)
        $('.mm-menu ul .index').html(template('tmpMenu', response));
      },
    });
  }
  renderMenu();


  function renderCon() {
    $.ajax({
      type: 'GET',
      url: 'http://127.0.0.1:9090/api/getproductlist',
      data: {
        categoryid: id,
        pageid: num
      },
      dataType: 'json',
      success: function (response) {
        console.log(response);
        $('.mm-products ul').html(template('tmpCon', response));
        maxPage = Math.ceil(response.totalCount / response.pagesize);
        $('.page-select').html(template('tmpSelect', { maxPage}));
        $('.page-select').val(num);
      },

    });
  }
  renderCon();

  $('.last-page').click(function () {
    if(num == 1) return;

    num --;
    renderCon();
  })
  $('.next-page').click(function () {
    if (num == maxPage) return;
    console,location(num)

    num ++;
    renderCon();
  })

  $('.page-select').on('change', function () {
    console.log(this.value);
    num = this.value;
    renderCon();
  })
})