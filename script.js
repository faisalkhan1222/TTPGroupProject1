function mail(){


  var subject = document.getElementById("subject").value;
  var comments = document.getElementById("comments").value;

  console.log('subject: ' + subject);
  console.log('comments: ' + comments);

  window.open('mailto:test@example.com?subject='+subject+'&body='+comments);

  return false;
}
