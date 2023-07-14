$(function () {
   'use strict';

   // selección de asiento
   $('.bus-seats-lines .seat').on('click', function () {
      let isSelectableSeat = $(this).hasClass('seat--locked') || $(this).hasClass('seat--cashier') || $(this).hasClass('seat--na');
      if( !isSelectableSeat ) {
         $(this).toggleClass('selected');
      }
   });;
  
});