function updateFailPassRatio(passCount, failCount) {
     // Create the pie chart
     const ctx = document.getElementById('pass-fail-ratio-chart').getContext('2d');
     new Chart(ctx, {
         type: 'pie',
         data: {
             labels: [
                'Pass', 'Fail'],
             datasets: [{
                 label:
                 'Pass/Fail Ratio',
                 data: [passCount, failCount],
                 backgroundColor: ['#FFD700', '#b197fc'],
             }],
         },
         options: {
             responsive: true,
             plugins: {
                tooltip: {
                    callbacks: {
                        label: function(tooltipItem) {
                            // Directly return the count instead of percentage
                            const label = tooltipItem.label;
                            const value = tooltipItem.raw;
                            return `${label}: ${value}`; // Show count
                        }
                    }
                }
            }
         },
     });
 }

