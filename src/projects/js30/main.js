fetch("listOfTasks.json")
  .then(response => response.json())
  .then(json => {
    fillList(json);
    console.log("here");
  });

function fillList(data) {
  for (var i = 0; i < data.length; i++) {
    let j = parseInt(i) + 1;

    var htmlContent =
      '<a href="' +
      data[i].link +
      '" target="_blank"> <div class="js30Project">' +
      '<div class="proj_img_div">' +
      '<img src="' +
      data[i].pic[0] +
      '" class="proj_image">' +
      "</div>" +
      '<div class="proj_content">' +
      '<div class="project_title_div">' +
      data[i].name +
      "</div>" +
      '<div class="proj_line"></div>' +
      '<div class="proj_desc">' +
      data[i].description +
      "</div>" +
      "</div>" +
      "</div>" +
      '<div class="proj_line"></div> <a>';

    $("#jsList").append(htmlContent);
    imgGallery(data, htmlContent);
  }
}

function imgGallery(data, htmlContent) {}
