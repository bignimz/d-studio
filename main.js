"use strict";

$('document').ready(function(){
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