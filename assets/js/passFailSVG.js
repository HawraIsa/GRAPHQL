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

//  function updateSVGChart(passPercentage, failPercentage) {
//     const svg = document.getElementById('pass-fail-ratio-svg');
//     const width = svg.clientWidth;
//     const height = svg.clientHeight;
//     const radius = Math.min(width, height) / 2;
//     const colors = ['#FFD700', '#b197fc'];

//     // Clear existing SVG content
//     svg.innerHTML = '';

//     const data = [passPercentage, failPercentage];
//     let cumulativePercentage = 0;


//     data.forEach((percentage, index) => {
//         const [startX, startY] = getCoordinatesForPercentage(cumulativePercentage, radius, width, height);
//         cumulativePercentage += percentage / 100;
//         const [endX, endY] = getCoordinatesForPercentage(cumulativePercentage, radius, width, height);

//         const largeArcFlag = percentage > 50 ? 1 : 0;

//         const pathData = [
//             `M ${width / 2} ${height / 2}`, // Move
//             `L ${startX} ${startY}`, // Line
//             `A ${radius} ${radius} 0 ${largeArcFlag} 1 ${endX} ${endY}`, // Arc
//             'Z' // Close path
//         ].join(' ');

//         // Creates a new SVG path element within the SVG namespace.
//         const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
//         path.setAttribute('d', pathData);
//         path.setAttribute('fill', colors[index]);
//         svg.appendChild(path);
//     });
// }

// function getCoordinatesForPercentage(percentage, radius, width, height) { // Calculates the coordinates on a circle for a given percentage.
//     const x = Math.cos(2 * Math.PI * percentage) * radius + width / 2;
//     const y = Math.sin(2 * Math.PI * percentage) * radius + height / 2;
//     return [x, y]; // Return the coordinates as an array [x, y]
// }

//updateFailPassRatio(passCount, failCount);
