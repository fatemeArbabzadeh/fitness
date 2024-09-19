document.addEventListener('DOMContentLoaded', function () {
    // Overall Progress Chart
    var overallCtx = document.getElementById('overallProgressChart').getContext('2d');
    var overallProgressChart = new Chart(overallCtx, {
        type: 'bar',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May'],
            datasets: [{
                label: 'Progress',
                data: [12, 19, 3, 5, 2],
                backgroundColor: ['rgba(0,0,255,0.1)', 'rgba(0 ,128 ,0,0.1 )', 'rgba(128, 0, 128,0.1)', 'rgba(255, 0, 255,0.1)', 'rgba(255, 0, 0,0.1)'],
                borderColor: ['rgba(0,0,255)', 'rgba( 0, 128,0)', 'rgba(128, 0, 128)', 'rgba(255, 0, 255)', 'rgba(255, 0, 0)'],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Growth Rate of Users Chart
    var growthCtx = document.getElementById('growthRateChart').getContext('2d');
    var growthRateChart = new Chart(growthCtx, {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May'],
            datasets: [{
                label: 'Growth Rate',
                data: [3, 2, 1, 4, 5],
                backgroundColor: 'rgba(0, 128, 0, 0.1)',
                borderColor: 'rgba(0, 128, 0)',
                borderWidth: 1,
                fill: true
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Active Users Chart
    var activeCtx = document.getElementById('activeUsersChart').getContext('2d');
    var activeUsersChart = new Chart(activeCtx, {
        type: 'bar',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May'],
            datasets: [{
                label: 'Active Users',
                data: [30, 50, 40, 60, 70],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Steps Taken Chart
    var stepsCtx = document.getElementById('stepsChart').getContext('2d');
    var stepsChart = new Chart(stepsCtx, {
        type: 'bar',
        data: {
            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
            datasets: [{
                label: 'Steps Taken',
                data: [8000, 10000, 7000, 9000],
                backgroundColor: 'rgba(102, 0, 204, 0.1)',
                borderColor: 'rgba(102, 0, 204, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        color: "#ffffff"
                    }
                },
                x: {
                    ticks: {
                        color: "#ffffff"
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });

    // Sleep Rest Chart
    var sleepCtx = document.getElementById('sleepChart').getContext('2d');
    var sleepChart = new Chart(sleepCtx, {
        type: 'bar',
        data: {
            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
            datasets: [{
                label: 'Sleep Rest',
                data: [6, 7, 5, 8],
                backgroundColor: 'rgba(0, 204, 153, 0.1)',
                borderColor: 'rgba(0, 204, 153, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        color: "#ffffff"}
                    },
                    x: {
                        ticks: {
                            color: "#ffffff"
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }
        });
    
        // Calories Burned Chart
        var caloriesCtx = document.getElementById('caloriesChart').getContext('2d');
        var caloriesChart = new Chart(caloriesCtx, {
            type: 'bar',
            data: {
                labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
                datasets: [{
                    label: 'Calories Burned',
                    data: [1500, 1700, 1400, 1600],
                    backgroundColor: 'rgba(255, 102, 204, 0.1)',
                    borderColor: 'rgba(255, 102, 204, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            color: "#ffffff"
                        }
                    },
                    x: {
                        ticks: {
                            color: "#ffffff"
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }
        });
    });


    // نمایش مودال
var modal = document.getElementById("developerModal");
var openModalBtn = document.getElementById("openModalBtn");
var closeModalBtn = document.getElementsByClassName("close")[0];

// وقتی روی دکمه کلیک می‌شود، مودال باز شود
openModalBtn.onclick = function() {
    modal.style.display = "flex";
}

// وقتی روی علامت ضربدر کلیک می‌شود، مودال بسته شود
closeModalBtn.onclick = function() {
    modal.style.display = "none";
}

// وقتی کاربر بیرون از مودال کلیک می‌کند، مودال بسته شود
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// مدیریت ارسال فرم
document.getElementById("developerForm").onsubmit = function(e) {
    e.preventDefault();
    
    const email = document.getElementById("email").value;
    const username = document.getElementById("username").value;
    const role = document.getElementById("role").value;
    
    alert(`ایمیل: ${email}\nنام کاربری: ${username}\nبخش فعالیت: ${role}`);
    
    // بعد از ارسال فرم، مودال بسته می‌شود
    modal.style.display = "none";
}
    
    
   