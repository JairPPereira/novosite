var list = [10098,101,101299,1022206,10229,1024530,1026624,1032412,10358,103663,105,10534,1061671,106646,10726,1074656,1077280,1081313,10898,109513,11001,11041,11162,11215,11216,1124,112205,11324,11327,114,11423,116,11658,11770,11817,118683,11937,120,120143,12085,121,12162,122,12477,12685,127770,128,129,13,131631,131634,13207,13223,13252,13256,13505,13805,139567,1399,1402,141,1422,146233,14655,146631,152795,1537,155,157336,157485,1585,15941,16279,164331,164457,1654,16869,178809,184125,18654,1891,192134,192712,195423,199556,199591,20435,2046,205596,20941,221731,221732,22331,227156,227300,227970,228968,230179,231474,23172,23367,23514,23520,236735,238,24,240,244786,245698,245891,250546,25237,253020,25376,254024,254302,256474,259018,265177,266856,270774,27205,272251,274,27582,277,278,27845,280,284289,284427,290098,296096,299534,302401,303021,3082,308695,309581,311,314405,315162,329235,324786,324857,324552,330070,332672,334527,335,33511,337404,336004,337706,338958,339877,340185,346,346684,346808,347751,348,354282,357110,359940,361743,36557,372058,372412,376581,38017,38234,387,389,391486,39414,39564,391698,399579,40096,402423,40508,407806,408670,406997,410537,413452,411088,414906,415214,420818,422821,424,429,423,424694,43549,437068,44113,443700,444090,4442,44665,447362,449406,45170,45767,457837,458156,458220,459075,460458,470044,47089,47533,475557,47931,480408,488623,490132,49021,4935,495386,496243,497,50014,50348,504198,505642,50601,507313,510,512,512195,515001,522478,522924,523366,52454,526896,526973,527641,53080,530915,53172,535,536554,537061,539,540291,545611,550,550776,55101,555604,556018,562266,568124,579872,581,58448,589157,593643,598,600354,603,603692,606856,61037,611207,611291,613911,614934,615457,615777,617502,618344,62215,622585,624860,629,63,630566,631843,635302,63699,637,637920,640,640146,644495,646389,64689,652722,653024,657644,66113,661374,661930,664474,66859,676,680,680058,68202,68348,68718,687354,70160,703451,707214,71211,715931,717980,725201,73,7304,734265,7345,7347,736073,73873,73963,740441,740555,742408,7446,74549,747803,7553,758009,759175,75948,76163,76203,763164,76600,766507,769,77,770428,77067,77338,774752,774825,77949,781456,785533,785534,791373,792237,79465,800410,80299,80544,807,814757,81488,818647,82693,829557,85,850871,851644,852096,857,8587,858815,862491,869112,87516,875303,877269,877703,881164,890980,8922,893656,8944,9003,901,914,92321,9297,943822,9462,950,954293,961707,96933,9776,9792,98,9869,989937,9978];
var randomNumber = 0;
var url = "";

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("myButton").addEventListener("click", function() {
    randomNumber = list[Math.floor(Math.random() * list.length)];
    url = "https://jp-app.netlify.app/details/" + randomNumber;
    window.open(url, "_blank");
  });
});
