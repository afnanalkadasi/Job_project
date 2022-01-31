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
  
  $('table tbody tr').show(); //intially all rows will be shown
  
  function filter_function(){
    $('table tbody tr').hide(); //hide all rows
    
    var companyFlag = 0;
    var companyValue = $('#filter-company').val();
    var contactFlag = 0;
    var contactValue = $('#filter-contact').val();
 
    //setting intial values and flags needed
    
   //traversing each row one by one
    $('table tr').each(function() {  
    
      if(companyValue == 0){   //if no value then display row
      companyFlag = 1;
      }
      else if(companyValue == $(this).find('td.company').data('company')){ 
        companyFlag = 1;       //if value is same display row
      }
      else{
        companyFlag = 0;
      }
      
      
       if(contactValue == 0){
      contactFlag = 1;
      }
      else if(contactValue == $(this).find('td.contact').data('contact')){
        contactFlag = 1;
      }
      else{
        contactFlag = 0;
      }
      


     if(companyFlag && contactFlag){
       $(this).show();  //displaying row which satisfies all conditions
     }
  
  });   
  }