$(function() {
  let id = location.search.split('=')[1];
  let num = 1;
  let maxPage = '';


  function render() {
    $.ajax({
      type: 'GET',
      url: 'http://127.0.0.1:9090/api/getmoneyctrl',
      data: {
        categoryid: id,
        pageid: num
      },
      dataType: 'json',
      success: function(response) {
        console.log(response);
        $('.mm-content .content-list ul').html(template('tmpCon',response));
        maxPage = Math.ceil(response.totalCount / response.pagesize);
        $('.page-select').html(template('tmpSelect', { maxPage}));
        $('.page-select').val(num);
      },
    });
  }
  render();

  $('.last-page').click(function () {
    if(num == 1) return;

    num --;
    render();
  })
  $('.next-page').click(function () {
    if (num == maxPage) return;
  console.log(num);
    num ++;
    render();
  })

  $('.page-select').on('change', function () {
    console.log(this.value);
    num = this.value;
    render();
  })
})