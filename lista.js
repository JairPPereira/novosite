var list = [100,101,101299,1022206,1024530,1026624,1032412,10358,103663,105,10534,1061671,106646,10681,1072567,1074656,1077280,1081313,109513,11001,11216,1124,112205,11324,11327,13455,114,11423,11658,11817,118683,11937,120,120143,121,122,12477,12685,127770,128,129,13,131631,131634,13223,13805,139567,1399,1402,1422,146233,155,157336,157485,1585,15941,16279,164457,1654,16869,1830,184125,1891,192134,199591,20435,205596,20941,221731,22331,227300,228968,231474,23514,23520,236735,238,24,240,244786,245891,25237,253020,25376,254024,254302,256474,265177,266856,27205,274,27582,277,278,280,284289,290098,296096,299534,302401,303021,3082,308695,309581,311,315162,329235,324786,324857,324552,332672,33511,337404,338958,346,346684,346808,348,359940,361743,372058,372412,38017,387,389,391486,39414,39564,391698,399579,40096,407806,408670,406997,410537,413452,411088,414906,415214,422821,424,429,423,424694,43549,437068,44113,443700,444090,44665,447362,45170,458156,458220,459075,470044,47089,475557,488623,490132,4935,495386,496243,497,50014,50348,504198,505642,50601,510,515001,522924,527641,530915,53172,536554,539,545611,550,550776,55101,556018,581,58448,589157,593643,598,600354,603,603692,606856,614934,615457,615777,618344,62215,622585,629,63,630566,631842,635302,637,637920,640,640146,646389,652722,66113,661374,676,679,680,68202,68348,68718,687354,70160,703451,707214,71211,715931,717980,725201,73,7304,7345,73873,73963,739986,740441,740555,742408,74549,747803,758009,759175,76203,76600,766507,769,77,770428,77067,77338,774752,77877,77949,781456,785534,788752,791373,792237,79465,80299,80544,807,814757,81488,85,850871,851644,852096,857,8587,862491,869112,87516,875303,877269,877703,881164,890980,893656,8944,9003,92321,937278,943822,950,954293,961707,96933,98,989937,9978,49046,674324,533514,14160,619930,843794,500,899112,890541,696374,997265,668482,1065796,676547,420808,751741,600583,811631,978406,877269,897192,814338,866267,518896,736526,551271,759507,335795,894205,799546,882598,1122493,597922,816952,672154,1027014,10439,642885,619730,960704,921643,852046,429473,724495,762968,814800,999127,436270,532639,325133,862551,1057648,629176,744276,760161,829560,673271,769636,760741,755566,800345,585511,980804,818612,698948,765172,227719,718930,648743,997703,8292,530385,838330,762975,539681,787787,560057,616037,745376,668742,667642,574249,845887,489,338970,438148,79224,660267,817889,843847,814340,975714,615469,746419,982939,880313,852592,440021,270938,102651,605,648579,1126543,645693,551726,910365,
];
var randomNumber = 0;
var url = "";

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("myButton").addEventListener("click", function() {
    randomNumber = list[Math.floor(Math.random() * list.length)];
    url = "https://jp-app.netlify.app/details/" + randomNumber;
    window.open(url, "_blank");
  });
});
