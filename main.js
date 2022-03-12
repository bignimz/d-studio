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
      })


      
})

// Contact Form
// Add event listener to submit button


const submit = document.getElementById('submit');

submit.addEventListener('click', function() {
     
      let name = document.getElementById('name').value;
      let email = document.getElementById('email').value;
      let message = document.getElementById('message').value;
     
      if(name !== "" && email !== "" && message !== ""){

            $('#form-success').text(`${name}, we have received your message. Thank you fro reaching out to us`).fadeIn(1500);
      }else if(name === ""){
            alert('Name cannot be empty');
      }else if(email === ""){
            alert('Email cannot be empty');
      }else if(message === ""){
            alert('Message cannot be empty');
      }

      $('#form')[0].reset();
      
})