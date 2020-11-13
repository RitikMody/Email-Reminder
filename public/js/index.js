var toggle = false;
$('.dark').click(()=>{
  document.body.classList.toggle('dark-mode');
  if(!toggle)
  {
    toggle = true;
    $(".dark").html("<i class='fas fa-moon fa-2x'></i>");
  }
  else
  {
    toggle = false;
    // $(".css").html("<link rel='stylesheet' href='/css/styles.css'>");
    $(".dark").html("<i class='fas fa-sun fa-2x'></i>");
  }
});
