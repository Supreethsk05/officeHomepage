// To-Do List Functionality
document.getElementById('add-todo').addEventListener('click', function() {
    var todoInput = document.getElementById('todo-input');
    var todoText = todoInput.value;
    if (todoText) {
        var listItem = document.createElement('li');
        listItem.textContent = todoText;
        document.getElementById('todo-list').appendChild(listItem);
        todoInput.value = '';
    }
});

// Timer Functionality
let timerInterval;
let timer = {
    seconds: 0,
    minutes: 0,
    hours: 0
};

function updateTimerDisplay() {
    document.getElementById('timer-display').textContent = 
        `${timer.hours.toString().padStart(2, '0')}:${timer.minutes.toString().padStart(2, '0')}:${timer.seconds.toString().padStart(2, '0')}`;
}

document.getElementById('start-timer').addEventListener('click', function() {
    if (!timerInterval) {
        timerInterval = setInterval(function() {
            timer.seconds++;
            if (timer.seconds === 60) {
                timer.seconds = 0;
                timer.minutes++;
            }
            if (timer.minutes === 60) {
                timer.minutes = 0;
                timer.hours++;
            }
            updateTimerDisplay();
        }, 1000);
    }
});

document.getElementById('stop-timer').addEventListener('click', function() {
    clearInterval(timerInterval);
    timerInterval = null;
});

document.getElementById('reset-timer').addEventListener('click', function() {
    clearInterval(timerInterval);
    timerInterval = null;
    timer.seconds = 0;
    timer.minutes = 0;
    timer.hours = 0;
    updateTimerDisplay();
});

document.getElementById('lap-timer').addEventListener('click', function() {
    var lapTime = document.createElement('li');
    lapTime.textContent = document.getElementById('timer-display').textContent;
    document.getElementById('laps-list').appendChild(lapTime);
});

// Placeholder for Fetching Emails
document.addEventListener('DOMContentLoaded', function() {
    fetchEmails();
});

function fetchEmails() {
    // This is a placeholder function. You would typically use Microsoft Graph API to fetch Outlook emails.
    document.getElementById('email-container').innerHTML = '<p>Fetching emails...</p>';
    
    // Simulate fetching emails
    setTimeout(function() {
        document.getElementById('email-container').innerHTML = '<p>Emails fetched from Microsoft Outlook will be displayed here.</p>';
    }, 2000);
}
