// JavaScript code
function search_ele() {
    let input = document.getElementById('searchbar').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('job_card');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="list-item";                 
        }
    }
}
//////////////// filtering
$('.filter').change(function(){

  filter_function();
  
  //calling filter function each select box value change
  
});

$('.job_card .card .card-body ').show(); //intially all rows will be shown

function filter_function(){
  $('.job_card .card .card-body ').hide(); //hide all rows
  
  var companyFlag = 0;
  var companyValue = $('#filter-company').val();
  var cityFlag = 0;
  var cityValue = $('#filter-city').val();

  //setting intial values and flags needed
  
 //traversing each row one by one
  $('.card .card-body').each(function() {  
  
    if(companyValue == 0){   //if no value then display row
    companyFlag = 1;
    }
    else if(companyValue == $(this).find('h5.company').data('company')){ 
      companyFlag = 1;       //if value is same display row
    }
    else{
      companyFlag = 0;
    }
    
    
     if(cityValue == 0){
    cityFlag = 1;
    }
    else if(cityValue == $(this).find('span.city').data('city')){
      cityFlag = 1;
    }
    else{
      cityFlag = 0;
    }

   if(companyFlag && cityFlag){
     $(this).show();  //displaying row which satisfies all conditions
   }

});   
}
  ////////////////lang
  function togglestyle() {
    var styles = document.getElementsByTagName('link')[0];
    var paragraphEN = document.getElementById('en');
    var paragraphAR = document.getElementById('ar');

    if (styles.getAttribute('href') == 'css/style.css') {
        styles.setAttribute('href', 'css/styleEN.css');
        paragraphEN.style.display = 'none';
        paragraphAR.style.display = 'block';

    }
    else {
        styles.setAttribute('href', 'css/style.css');
        paragraphAR.style.display = 'none';
        paragraphEN.style.display = 'block';
    }
}
