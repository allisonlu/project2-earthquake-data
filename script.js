$(function () {
  // Grab the template script
  var source = $("#earthquake-template").html();

  // Compile the template
  var template = Handlebars.compile(source);

  // Define our data object
  var context={
    "location": "UCLA",
    "magnitude": "2.5",
    "time": "5:00 PM"
  };

  // Pass our data to the template
  var html1 = template(context);

  // Add the compiled html to the page
  $('.content-placeholder').html(html1);
});