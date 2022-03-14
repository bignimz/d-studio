"use strict";

$('document').ready(function(){
      /* Function to toggle hide and 
         show what we do content
      */
      $('#design').click(function(){
            $('.wwd-img1').toggle('hide');
            $('.design').toggle('hide');
      })

      $('#development').click(function(){
            $('.wwd-img2').toggle('hide');
            $('.development').toggle('hide');

      })

      $('#product').click(function(){
            $('.wwd-img3').toggle('hide');
            $('.product').toggle('hide');
      });


      // Function That toggles hover effect on Portfolio cards

      $('.card1').hover(function(){
            $('.overlay1').toggle('show');
            $('.content1').toggle('show');
            
      })

      $('.card2').hover(function(){
            $('.overlay2').toggle('show');
            $('.content2').toggle('show');
            
      })

      $('.card3').hover(function(){
            $('.overlay3').toggle('show');
            $('.content3').toggle('show');
      })

      $('.card4').hover(function(){
            $('.overlay4').toggle('show');
            $('.content4').toggle('show');
            
      })

      $('.card5').hover(function(){
            $('.overlay5').toggle('show');
            $('.content5').toggle('show'); 
      })

      $('.card6').hover(function(){
            $('.overlay6').toggle('show');
            $('.content6').toggle('show');
      })

      $('.card7').hover(function(){
            $('.overlay7').toggle('show');
            $('.content7').toggle('show');           
      })

      $('.card8').hover(function(){
            $('.overlay8').toggle('show');
            $('.content8').toggle('show');       
      })

});




// Contact Form
// Add event listener to submit button
const submit = document.getElementById('submit');

submit.addEventListener('click', function() {
     
      let name = document.getElementById('name').value;
      let email = document.getElementById('email').value;
      let message = document.getElementById('message').value;
     
      if(name !== "" && email !== "" && message !== ""){
            $('#form-success').text(`${name}, we have received your message. Thank you for reaching out to us`).fadeIn(1500);
      }else if(name === ""){
            alert('Name cannot be empty');
      }else if(email === ""){
            alert('Email cannot be empty');
      }else if(message === ""){
            alert('Message cannot be empty');
      }

      $('#form')[0].reset();
      
})