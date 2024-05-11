function calculateAge() {
    var day = parseInt(document.getElementById('day').value);
    var month = parseInt(document.getElementById('month').value);
    var year = parseInt(document.getElementById('year').value);

    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    var currentMonth = currentDate.getMonth() + 1;
    var currentDay = currentDate.getDate();

    var ageYears = currentYear - year;
    var ageMonths = currentMonth - month;
    var ageDays = currentDay - day;

    if (ageDays < 0) {
        ageMonths--;
        ageDays += daysInMonth(currentMonth - 1, currentYear);
    }

    if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
    }

    var ageHours = ageYears * 365 * 24 + ageMonths * 30 * 24 + ageDays * 24;
    var ageMinutes = ageHours * 60;
    var ageSeconds = ageMinutes * 60;

    document.getElementById('result').innerHTML = "<div class='age'>Your age is:<br>" + ageYears + " years <br>" + ageMonths + " months <br>" + ageDays + " days <br>" + ageHours + " hours <br>" + ageMinutes + " minutes <br>" + ageSeconds + " seconds</div>";

    var nextBirthdayYear = currentYear;
    var nextBirthdayMonth = month;
    var nextBirthdayDay = day;

    if (currentMonth > month || (currentMonth === month && currentDay > day)) {
        nextBirthdayYear++;
    }

    var nextBirthdayDate = new Date(nextBirthdayYear, nextBirthdayMonth - 1, nextBirthdayDay);
    var daysUntilNextBirthday = Math.ceil((nextBirthdayDate - currentDate) / (1000 * 60 * 60 * 24));

    document.getElementById('nextBirthday').innerHTML = "<div class='next-birthday'><i class='fa-solid fa-cake-candles'></i> Your next birthday is in " + daysUntilNextBirthday + " days.</div>";
}

function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}
