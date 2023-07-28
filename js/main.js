$(function () {
   'use strict';

   // Bootstrap datepicker
   $('.is-datepicker').datepicker({
      format: "dd/mm/yyyy",
      startDate: "1",
      orientation: "auto",
      language: "es",
      templates: { leftArrow: '<svg xmlns="http://www.w3.org/2000/svg" width="9" height="15" viewBox="0 0 9 15" fill="none"><path d="M7.54395 14L1.00003 7.5L7.54395 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>', rightArrow: '<svg xmlns="http://www.w3.org/2000/svg" width="9" height="15" viewBox="0 0 9 15" fill="none"><path d="M1.37842 14L7.92234 7.5L1.37842 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>' }
   });
   
   // selección de asiento
   $('.bus-seats-lines .seat').on('click', function () {
      let isSelectableSeat = $(this).hasClass('seat--locked') || $(this).hasClass('seat--cashier') || $(this).hasClass('seat--na');
      if( !isSelectableSeat ) {
         $(this).toggleClass('selected');
      }
   });
  
});