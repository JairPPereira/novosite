var list = [101,101299,1022206,10229,1024530,1026624,10358,10534,106646,10726,10898,109513,11001,11041,11162,11215,11216,112205,11327,114,116,11688,11770,11817,118683,11937,120,120143,12085,121,122,122800,12477,12685,127770,129,13,13053,131631,131634,13207,13252,13256,13387,13505,13805,1399,1402,14655,146631,152795,15357,1537,155,157336,157485,15941,16279,164331,164457,1654,17577,178809,184125,18654,1891,191137,192134,192712,195423,199556,199591,20435,2046,209504,212778,221731,22331,227156,227300,227970,22803,228968,230179,231474,23172,23367,23514,23520,236735,238,240,244786,245842,250546,253020,254024,254302,25602,256474,258210,259018,261037,270774,271404,27205,272251,274,27582,277,278,27845,280,284289,296096,300168,302401,303021,308695,309581,311,314405,315162,329235,330070,332672,333167,334527,337404,336004,337706,338958,339877,340185,346,346684,346808,347751,354282,354857,357110,361743,372058,372412,376581,38017,38234,389,390051,391486,39414,39564,399055,399579,40096,402423,40508,408670,410537,413452,414906,415214,417180,417859,418808,420818,422821,424,429,423,43549,438631,44113,443700,444090,44665,449406,45170,451877,454626,45767,457837,459075,460458,461958,47089,47533,476299,47931,480408,49014,49021,4935,495386,496243,497,504198,505579,505642,50601,507313,510,512,512195,522402,522478,523366,523638,523931,524434,52454,526896,526973,528085,53080,53172,535,537061,539,540291,550,55101,556018,557,558,562266,568124,579872,58448,589157,598,603,60420,61037,611207,611291,613911,614934,622585,624860,63,631843,63699,637,644495,64689,652837,653024,657644,66113,661930,664474,66859,672772,676,680,680058,68202,68348,687354,70160,707214,71211,725201,73,7304,734265,7347,73499,736073,73873,73963,742408,7445,7446,74549,747803,7553,759175,75948,76163,763164,76600,766507,769,769749,770428,77067,774752,774825,77949,781456,785533,792237,792678,79465,800410,80299,80544,807,81488,818647,82687,82693,829557,835666,839440,851644,852592,853666,857,858815,875303,877269,890980,8922,893656,8944,9003,91333,9297,9422,9462,950,961707,96933,9776,9869,989937,9978,9792,299534,617502,637920,593643,545611,324857,98,87516,1422,105,290098,877703,16869,1124,1585,629,205596,470044,11324,77,245698,76203,324786,758009,50014,25237,475557,411088,600354,20941,717980,77338,615457,146233,527641,68718,85,630566,92321,62215,128,635302,447362,581,490132,359940,406997,265177,618344,11423,661374,522924,103663,606856,424694,7345,715931,550776,488623,387,530915,335,24,12162,4442,1032412,13223,25376,348,536554,1061671,652722,141,139567,33511,284427,785534,100,437068,791373,407806,11658,914,901,3082,8587,10098,640,515001,1081313,555604,1077280,881164,954293,862491,391698,852096,943822,850871,50348,458220,615777,740441,640146,245891,324552,458156,];
var randomNumber = 0;
var url = "";

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("myButton").addEventListener("click", function() {
    randomNumber = list[Math.floor(Math.random() * list.length)];
    url = "https://jp-app.netlify.app/details/" + randomNumber;
    window.open(url, "_blank");
  });
});
