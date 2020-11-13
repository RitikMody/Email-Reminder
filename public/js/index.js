var toggle = false;
$('.dark').click(()=>{
  if(!toggle)
  {
    toggle = true;
    $(".css").html("<link rel='stylesheet' href='/css/dark.css'>");
    $(".dark").html("<i class='fas fa-moon fa-2x'></i>");
  }
  else
  {
    toggle = false;
    $(".css").html("<link rel='stylesheet' href='/css/styles.css'>");
    $(".dark").html("<i class='fas fa-sun fa-2x'></i>");
  }
});
