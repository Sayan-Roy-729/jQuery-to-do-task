$(document).ready(function () {
  // console.log("Hello World");

  check = 0
  del = 0
  task_number = 0
  date_number = 0
  time_count = 0
  modal_number_count = 0



  $('#add').click(function () {
    let task = $('#task').val();
    let time = $('#time').val();
    let date = $('#date').val();

    if (task != '' && time != '' && date != '') {

      check++;
      del++;
      task_number++;
      date_number++;
      time_count++;
      modal_number_count++;

      $('#notcomp').append(`<tr>
          <td class = "task-`+ task_number + `">${task}</td>
          <td class = "time-`+ time_count + `">${time}</td>
          <td class = "date-`+ date_number + `">${date}</td>
          <td><button class="btn btn-danger" id="edit" data-toggle="modal" data-target="#Modal-` + modal_number_count + `">Edit</button></td>
          <td><i class='fas fa-check' id='check-` + check + `' role="button"></i></td>
          <td><i class='fas fa-trash-alt' id='delete-` + del + `' role="button"></i></td>
        </tr>`);






      // adding modal
      $('#box').append(`<div class="modal fade" id="Modal-` + modal_number_count + `" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Edit task</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                

                  
                  <form>
                      <div class="form-group">
                        <label for="exampleInputEmail1">Time</label>
                        <input type="time" class="form-control" id="edited_task_time-`+ modal_number_count + `" aria-describedby="emailHelp">
                      </div>
                      <div class="form-group">
                        <label for="exampleInputPassword1">Date</label>
                        <input type="date" class="form-control" id="edited_task_date-`+ modal_number_count + `">
                      </div>
                  </form>

      </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary edit_save-${date_number}" id="save-changes" data-dismiss="modal">Save changes</button>
              </div>
            </div>
          </div>
        </div>`);
    }

    else {
      alert("Please fill-up all forms");
    }

    $("#task").val('');
    $("#time").val('');
    $("#date").val('');

  });







  // for delete the task----> 
  $(document).on('click', '.fa-trash-alt', function () {
    $(this).parent().parent().remove();
  });



  

    
  
  // for complition the task --------->
  $(document).on('click', '.fa-check', function () {

    $(this).attr('id').split('  ').map(function (clssName) {

      

      check_id_list = [clssName];

      check_id = check_id_list[0];
      split_list = check_id.split('-');
      count_number = split_list[1];

      // fetch classes ----> 
      task_name_class = "." + "task-" + count_number;
      selected_date_class = "." + "date-" + count_number;


      // fetch values -----> 
      task_name = $(`${task_name_class}`).text();


      selected_date = $(`${selected_date_class}`).text();
      selected_date_list = selected_date.split('');

      selected_date = selected_date_list[0] + selected_date_list[1] + selected_date_list[2] + selected_date_list[3] + selected_date_list[4] + selected_date_list[5] + selected_date_list[6] + selected_date_list[7] + selected_date_list[8] + selected_date_list[9]

      // time ----------->
      date = new Date();
      hour = date.getHours();
      minute = date.getMinutes();

      completed_time = String(hour) + ':' + String(minute);


      // date ----------------->

      year = date.getFullYear();
      month = Number(date.getMonth()) + 1;
      day = date.getDate();

      completed_date = String(year) + '-' + String(month) + '-' + String(day);

      $('#comp').append(`<tr>
          <td class="text-light">${task_name}</td>
          <td class="text-light">${completed_time}</td>
          <td class="text-light">${selected_date}</td>
          <td class="text-light">${completed_date}</td>
          <td class="text-light"><i class='fas fa-trash-alt' role="button"></i></td>
        </tr>`);

      $(`${task_name_class}`).parent().remove();

    });
  });
  




  // for editing ------>  
  $(document).on('click', '#save-changes', function () {

    $(this).attr('class').split('  ').map(function (clssName) {

      class_list = [clssName];

      check_id = class_list[0].split(' ')[2];

      split_list = check_id.split('-');
      count_number = split_list[1];


      // fetching the modal date class ------------> 
      edited_date_class = "#" + "edited_task_date-" + count_number;


      // fetching the modal time class ------------> 
      edited_time_class = "#" + "edited_task_time-" + count_number;

      edited_time = $(`${edited_time_class}`).val();
      edited_date = $(`${edited_date_class}`).val();




      // fetching the time class of incompleted task table ------------> 
      selected_time_class = "." + "time-" + count_number;

      // fetching the date class of incompleted task table ------------> 
      selected_date_class = "." + "date-" + count_number;






      $(`${selected_date_class}`).text(edited_date);
      $(`${selected_time_class}`).text(edited_time);

      $(`${edited_time_class}`).val('');
      $(`${edited_date_class}`).val('');


    });
  });


})