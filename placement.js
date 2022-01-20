function Assess() {
  button.appendChild(CU); 
  button.appendChild(workshop);
  button.appendChild(OSL);
}


GetFieldplacementActions = (function() {
     var cached_function = GetFieldplacementActions;
     return function() {
         // your code
         var result = cached_function.apply(this, arguments); // use .apply() to call it
 
 
 setTimeout(function(){ 

  
  var href = $('a:contains(Download Roll-up)').attr('href').replace(/[^0-9\\.]+/g, '');
 
 
 const li = $('li');
        
 for (let i = 0; i < li.length; i++) {
   if(li[i].innerText === 'Force Completion')
   {
     $("ul.popover-menu", $popover).prepend("<li role='none'><a role='menuitem' tabindex='-1' style='position:relative;z-index:2004; background: #151c55' href=\"javascript:ViewPlacement('" + href +"')"+ ';Assess()">' + "Assess" + "<\/a><\/li>");
 };};
  
  
  
  
 }, 500);
 
 
 return result;
     };
 })();
 
 
   var studentname = localStorage.getItem('studentname');
   var placementname = localStorage.getItem('placementname');
   
   
   var button = document.createElement('div');
   button.id="button";
   button.style.background = "transparent";
   button.style.height="auto";
   button.style.position="fixed";
   button.style.bottom="0";
   button.style.right="0";
   button.style.zIndex = "9999";
   button.style.color = "#fff";
   button.style.textAlign = "center";
   document.body.appendChild(button);
   
   var CU = document.createElement('div');
   CU.id="CU";
   CU.style.padding="13px 0";
   CU.style.width="200px";
   CU.innerHTML = "1CU";
   
   
   var workshop = document.createElement('div');
   workshop.id= "workshop"
   workshop.style.padding="13px 0";
   workshop.style.width="200px";
   workshop.innerHTML = "Workshop";
   
   
   var OSL = document.createElement('div');
   OSL.id= "OSL"
   OSL.style.padding="13px 0";
   OSL.style.width="200px";
   OSL.innerHTML = "OSL";
   
CU.onclick = function(){
  var text2 = $('span.flag.tag').text();
    if (text2 == 'Internship' || text2 == 'Community Service')
         {
           
 $('.panelviewerback').addClass( $('.closing').attr('class') );
 
 $( ".panel-viewer-bar > a:first" ).removeClass( "panel-viewer-back" );
 
 $( ".panel-viewer-bar > a:first" ).addClass("closing").html('<span style="visibility: hidden;">←</span>').attr({
       "href" : "javascript:void(0)",
       "title" : "Go Back"
     });;
     
   $( ".closing" ).click(function() {
     
  document.getElementById("CU").remove();
  document.getElementById("workshop").remove();
  document.getElementById("OSL").remove();

 $( "#status" ).remove();
 var appraisal = null;
 var appraisal1 = null;
 var appraisal2 = null;
 var appraisal3 = null;
 var appraisal4 = null;
 var appraisal5 = null;
 
 var assessed = '';
 
 var appointment = null;
 var reflection = null;
 
 var enddate = null;
 var today = null;
 var millisBetween = null; 
 var days = null;
 
 $(".panel-viewer-detail").load(location.href+" .panel-viewer-detail>*","");
 
 
     });
     
 var appraisal = $('.keep-together h3:contains("Appraisal Overall Grade")').siblings().html();
 var appraisal1 = $('.keep-together h3:contains("Appraisal GLO1")').siblings().html();
 var appraisal2 = $('.keep-together h3:contains("Appraisal GLO2")').siblings().html();
 var appraisal3 = $('.keep-together h3:contains("Appraisal GLO3")').siblings().html();
 var appraisal4 = $('.keep-together h3:contains("Appraisal GLO4")').siblings().html();
 var appraisal5 = $('.keep-together h3:contains("Appraisal GLO5")').siblings().html();
 
 var assessed = $("tr:contains('Assessment') td:last-child").html();
 
 var appointment = $('.keep-together h3:contains("Appointment")').siblings().html();
 
 var reflection = $("tr:contains('Post-activity Reflection') td:nth-last-child(2) span").html();
 
 var enddate3 = $('p.picker-selection:contains("0 Hours")').prev("p").html();
 
 
 var enddate2 = enddate3.slice(-10);
 var enddate = new Date(enddate2);
 var today = new Date();
 var millisBetween = today.getTime() - enddate.getTime();  
 var days = millisBetween / (1000 * 3600 * 24);  
 var days = Math.round(Math.abs(days));
 
 if (enddate > today) 
 {var days = -days;};
 
 var my_css_class = { background : 'red', color : '#fff' , zIndex: '9999', cursor: 'pointer', padding: '13px 0', width: '200px'};
 
 
 var status = document.createElement('div');
 status.id="status";
 status.style.background = "red";
 status.style.height="auto";
 status.style.position="fixed";
 status.style.top="30%";
 status.style.right="0px";
 status.style.zIndex = "9999";
 status.style.color = "#fff";
 status.style.textAlign = "center";
 
 
 var appraisalwindow = document.createElement('div');
 appraisalwindow.style.padding="13px 0";
 appraisalwindow.style.width="200px";
 
 var assesswindow = document.createElement('div');
 assesswindow.style.padding="13px 0";
 assesswindow.style.width="200px";
 
 var appointwindow = document.createElement('div');
 appointwindow.style.padding="13px 0";
 appointwindow.style.width="200px";
 
 var datewindow = document.createElement('div');
 datewindow.style.padding="13px 0";
 datewindow.style.width="200px";
 
 var reflectwindow = document.createElement('div');
 reflectwindow.style.padding="13px 0";
 reflectwindow.style.width="200px";
 reflectwindow.id="reflection";
 
 //enddate//
 if(days < 30)
  {datewindow.innerHTML = "Not ready to grade ("+days+" days)";
      status.appendChild(datewindow);
  } else 
  {datewindow.innerHTML = "Ready to grade ("+days+" days)";
 datewindow.style.background = "green";
 status.appendChild(datewindow);};
 
  //reflection//
  if(reflection  === 'Complete')
  {reflectwindow.style.background = "green"; 
  reflectwindow.innerHTML = "Reflection complete (click to view)";
  reflectwindow.style.cursor = "pointer";
 status.appendChild(reflectwindow);} else 
 {reflectwindow.innerHTML = "Reflection incomplete";
 status.appendChild(reflectwindow);} 
 
  //appraisal//
 if((appraisal  === '') && (appraisal1  === '') && (appraisal2  === '') && (appraisal3  === '') && (appraisal4  === '') && (appraisal5  === ''))
  {appraisalwindow.innerHTML = "No appraisal";
       status.appendChild(appraisalwindow);
  } else 
  {appraisalwindow.innerHTML = "Appraisal done";
  appraisalwindow.style.background = "green"; 
  status.appendChild(appraisalwindow);};
 
  //member or leader//
  if(appointment  === 'Leader')
  {appointwindow.innerHTML = "Leader (check C4SR assessment)"
  appointwindow.style.background = "black";
       status.appendChild(appointwindow);
  } 
  else {appointwindow.innerHTML = "Member";
   appointwindow.style.background = "black";
       status.appendChild(appointwindow);
  };
 
 //assessed//
 if(assessed  === '')
  {assesswindow.innerHTML = "Department Unassessed";  
  assesswindow.style.background = "orange";
  status.appendChild(assesswindow);
  } else 
  {assesswindow.innerHTML = "Department Assessed";
  assesswindow.style.background = "green";
    status.appendChild(assesswindow);
  }; 
 
  document.body.appendChild(status);
 
 $('#reflection').click(function(){
     
     
     setTimeout(function(){
         
         $("tr:contains('Post-activity Reflection') td").trigger('click');
   $('li a:contains("Delete Survey")').closest('li').remove(); 
   $('li a:contains("Edit")').closest('li').remove(); 
   
   
       setTimeout(function(){ 
           
   var reflectionalert = $('.popover-inner li a:contains("Edit")').attr('href').replace(/[^0-9=]/g, "");
 
  reflectionalertarray = reflectionalert.split('=')
 
  var topicid = reflectionalertarray[1]; 
 var departid = reflectionalertarray[2];
  var allocateid = reflectionalertarray[3]; 
  
 console.log(topicid + " "+ departid + " " + allocateid);
 
 
  // set click callback
 $('.popover-inner li a:contains("Edit")').click(function() {
 
 location.href = "https://shib.chalkandwire.com/ep2_smu/DemographicsRun.aspx?cus=465&TopicId="+topicid+"&deptID="+departid+"&AllocationID="+allocateid;
 
 
 });
 // trigger click callback
 $('.popover-inner li a:contains("Edit")').click();
  
     }, 1000);
   
   
         
     }, 1000);
     
     
 
 });
         } else {
    alert("Not a CSP or Internship");
         }
 };
workshop.onclick = function(){
     
 $('.panelviewerback').addClass( $('.closing').attr('class') );
 
 $( ".panel-viewer-bar > a:first" ).removeClass( "panel-viewer-back" );
 
 $( ".panel-viewer-bar > a:first" ).addClass("closing").html('<span style="visibility: hidden;">←</span>').attr({
       "href" : "javascript:void(0)",
       "title" : "Go Back"
     });;
     
 
     
   $( ".closing" ).click(function() {
  document.getElementById("CU").remove();
  document.getElementById("workshop").remove();
  document.getElementById("OSL").remove();
 $( "#status" ).remove();
 var appraisal = null;
 var appraisal1 = null;
 var appraisal2 = null;
 var appraisal3 = null;
 var appraisal4 = null;
 var appraisal5 = null;
 
 var assessed = '';
 
 var appointment = null;
 var reflection = null;
 
 var enddate = null;
 var today = null;
 var millisBetween = null; 
 var days = null;
 
 
 $(".panel-viewer-detail").load(location.href+" .panel-viewer-detail>*","");
 
 
     });	  	
           
 var GLO = $('.keep-together h3:contains("GLO")').siblings().html().replace(/[^0-9\.]/g, '');
 localStorage.setItem('GLOnum', GLO);
 
 var idid = $('span.name:eq(1)').text().replace('_', '');
 
 localStorage.setItem('idid', idid);
 
 var currentId2 =$('#DataTables_Table_0 tbody tr').attr('id'); 
  currentId = currentId2.replace(/[^0-9\.]/g, '');
 
 var text = $('span.flag.tag').text();
 var comparingText = 'Workshop';
 
 if(text == comparingText)
 {
 goNav('my_assessments','allocationId='+currentId);
 }
 else 
 {alert("Not Workshop");}



 };
OSL.onclick = function(){
         
     $('.panelviewerback').addClass( $('.closing').attr('class') );
     
     $( ".panel-viewer-bar > a:first" ).removeClass( "panel-viewer-back" );
     
     $( ".panel-viewer-bar > a:first" ).addClass("closing").html('<span style="visibility: hidden;">←</span>').attr({
           "href" : "javascript:void(0)",
           "title" : "Go Back"
         });;
         
     
         
       $( ".closing" ).click(function() {
  document.getElementById("CU").remove();
  document.getElementById("workshop").remove();
  document.getElementById("OSL").remove();
  
     $( "#status" ).remove();
     var appraisal = null;
     var appraisal1 = null;
     var appraisal2 = null;
     var appraisal3 = null;
     var appraisal4 = null;
     var appraisal5 = null;
     
     var assessed = '';
     
     var appointment = null;
     var reflection = null;
     
     var enddate = null;
     var today = null;
     var millisBetween = null; 
     var days = null;
     
     
     $(".panel-viewer-detail").load(location.href+" .panel-viewer-detail>*","");
     
     
         });	  	



         var enddate3 = $('p.picker-selection:contains("0 Hours")').prev("p").html();
 
 
         var enddate2 = enddate3.slice(-10);
         var enddate = new Date(enddate2);
         var today = new Date();
         var millisBetween = today.getTime() - enddate.getTime();  
         var days = millisBetween / (1000 * 3600 * 24);  
         var days = Math.round(Math.abs(days));
         
         if (enddate > today) 
         {var days = -days;
         var text2 = $('span.flag.tag').text();
         };

         //nested if else (not workshop,internship or CSP), then check date
           
         if (text2 == 'Workshop' || text2 == 'Internship' || text2 == 'Community Service')
         {alert("Not a CCA");
            } else {
            //enddate//
            if (days < 30)
            {alert("Not ready to grade ("+days+" days)");
            } else 
            {var GLO = $('.keep-together h3:contains("GLO")').siblings().html().replace(/[^0-9\.]/g, '');
            localStorage.setItem('GLOnum', GLO);
            
            var idid = $('span.name:eq(1)').text().replace('_', '');
            
            localStorage.setItem('idid', idid);
            
            var currentId2 =$('#DataTables_Table_0 tbody tr').attr('id'); 
             currentId = currentId2.replace(/[^0-9\.]/g, '');
            
            var reflectionjournal = $('.journals-list tr td:nth-last-child(2)').text();
    
    
            if(reflectionjournal == 0)
            {
            goNav('my_assessments','allocationId='+currentId);
            }
            else 
            {alert("Reflection available!");}     
         
         };

       };    

     };


