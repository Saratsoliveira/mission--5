// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

$(document).ready(function () {
    $('#calculateBtn').on('click', function () {
        var hours = parseInt($('#hours').val());

        // Validate input
        if (isNaN(hours) || hours <= 0) {
            alert('Please enter a valid positive number for hours.');
            return;
        }

        // Calculate total charge
        var hourlyCharge = 29; // Example hourly charge
        var totalCharge = hours * hourlyCharge;

        // Display total charge
        $('#total').text('$' + totalCharge);
    });
});
