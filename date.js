
//Hijri Infromation
var hijriYears = ['1432h', '1433h', '1434h', '1435h', '1436h', '1437h', '1438h', '1439h', '1440h', '1441h', '1442h', '1443h']
var hijriMonths = [
    'Muharram', 'Safar', 'Rabi ul Awal', 'Rabi Al-Akhar', 'Jumadu Al-Awal', 
    'Jumadu Al-Akhar', 'Rajab', 'Shaban', 'Ramadaan', 'Shawwal', 'Dhul Qadah', 'Dhul Hijjah'
]
var hijriDays = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]

//Miilaadi Information
var miladiYears = [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021]
var miladiMonths = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
]

//Function That Displays current hijri and miladi Dates
setTimeout(displayCurrentDate, 300)
function displayCurrentDate(){
    currentDate = new Date()
    today = currentDate.getDay()
    miladiDate = currentDate.getDate()
    month = currentDate.getMonth()
    year = currentDate.getFullYear()
    document.getElementById('year').selectedIndex = miladiYears.indexOf(year)
    document.getElementById('days').selectedIndex = miladiDate - 1
    document.getElementById('month').selectedIndex = month

    hijriDate = 0
    hijriMonth = 0
    hijriYear = 0
    if(miladiMonths[month] == 'January' & year == 2020){
        hijriYear = "1441h"
        if(miladiDate <= 25){
            hijriDate = parseInt(miladiDate) + 5
            hijriMonth = 'Jumadu Al-Awal'
        }
        else{
            totalDate = parseInt(miladiDate) + 5
            hijriDate = totalDate - 30
            hijriMonth = 'Jumadu Al-Akhar'
        }
    }
    else if(miladiMonths[month] == 'February' & year == 2020){
        hijriYear = "1441h"
        if(miladiDate <= 24){
            hijriDate = parseInt(miladiDate) + 6
            hijriMonth = 'Jumadu Al-Akhar'
        }
        else{
            totalDate = parseInt(miladiDate) + 6
            hijriDate = totalDate - 30
            hijriMonth = 'Rajab'
        }
    }
    else if(miladiMonths[month] == 'March' & year == 2020){
        hijriYear = "1441h"
        if(miladiDate <= 24){
            hijriDate = parseInt(miladiDate) + 5
            hijriMonth = 'Rajab'
        }
        else{
            totalDate = parseInt(miladiDate) + 5
            hijriDate = totalDate - 29
            hijriMonth = 'Shaban'
        }
    }
    else if(miladiMonths[month] == 'April' & year == 2020){
        hijriYear = "1441h"
        if(miladiDate <= 23){
            hijriDate = parseInt(miladiDate) + 7
            hijriMonth = 'Shaban'
        }
        else{
            totalDate = parseInt(miladiDate) + 7
            hijriDate = totalDate - 30
            hijriMonth = 'Ramadaan'
        }
    }
    else if(miladiMonths[month] == 'May' & year == 2020){
        hijriYear = "1441h"
        if(miladiDate <= 23){
            hijriDate = parseInt(miladiDate) + 7
            hijriMonth = 'Ramadaan'
        }
        else{
            totalDate = parseInt(miladiDate) + 7
            hijriDate = totalDate - 30
            hijriMonth = 'Shawwal'
        }
    }
    else if(miladiMonths[month] == 'June' & year == 2020){
        hijriYear = "1441h"
        if(miladiDate <= 21){
            hijriDate = parseInt(miladiDate) + 8
            hijriMonth = 'Shawal'
        }
        else{
            totalDate = parseInt(miladiDate) + 8
            hijriDate = totalDate - 29
            hijriMonth = 'Dhul Qadah'
        }
    }
    else if(miladiMonths[month] == 'July' & year == 2020){
        hijriYear = "1441h"
        if(miladiDate <= 21){
            hijriDate = parseInt(miladiDate) + 9
            hijriMonth = 'Dhul Qadah'
        }
        else{
            totalDate = parseInt(miladiDate) + 9
            hijriDate = totalDate - 30
            hijriMonth = 'Dhul Hijjah'
        }
    }
    else if(miladiMonths[month] == 'August' & year == 2020){
        hijriYear = "1441h"
        if(miladiDate <= 19){
            hijriDate = parseInt(miladiDate) + 10
            hijriMonth = 'Dhul Hijjah'
        }
        else{
            totalDate = parseInt(miladiDate) + 10
            hijriDate = totalDate - 29
            hijriMonth = 'Muharram'
            hijriYear = '1442h'
        }
    }
    else if(miladiMonths[month] == 'September' & year == 2020){
        hijriYear = "1442h"
        if(miladiDate <= 17){
            hijriDate = parseInt(miladiDate) + 12
            hijriMonth = 'Muharram'
        }
        else{
            totalDate = parseInt(miladiDate) + 12
            hijriDate = totalDate - 29
            hijriMonth = 'Safar'
        }
    }
    else if(miladiMonths[month] == 'October' & year == 2020){
        hijriYear = "1442h"
        if(miladiDate <= 17){
            hijriDate = parseInt(miladiDate) + 13
            hijriMonth = 'Safar'
        }
        else{
            totalDate = parseInt(miladiDate) + 13
            hijriDate = totalDate - 30
            hijriMonth = 'Rabi ul Awal'
        }
    }
    else if(miladiMonths[month] == 'November' & year == 2020){
        hijriYear = "1442h"
        if(miladiDate <= 14){
            hijriDate = parseInt(miladiDate) + 15
            hijriMonth = 'Rabi ul Awal'
        }
        else{
            totalDate = parseInt(miladiDate) + 15
            hijriDate = totalDate - 29
            hijriMonth = 'Rabi ul Akhar'
        }
    }
    else if(miladiMonths[month] == 'December' & year == 2020){
        hijriYear = "1442h"
        if(miladiDate <= 17){
            hijriDate = parseInt(miladiDate) + 15
            hijriMonth = 'Rabi al Akhar'
        }
        else{
            totalDate = parseInt(miladiDate) + 15
            hijriDate = totalDate - 30
            hijriMonth = 'Jumadu Al-Awal'
        }
    }
    //2021 starts here
    else if(miladiMonths[month] == 'January' & year == 2021){
        hijriYear = "1442h"
        if(miladiDate <= 13){
            hijriDate = parseInt(miladiDate) + 16
            hijriMonth = 'Jumadu Al-Awal'
        }
        else{
            totalDate = parseInt(miladiDate) + 16
            hijriDate = totalDate - 29
            hijriMonth = 'Jumadu Al-Akhir'
        }
    }
    else if(miladiMonths[month] == 'February' & year == 2021){
        hijriYear = "1442h"
        if(miladiDate <= 12){
            hijriDate = parseInt(miladiDate) + 18
            hijriMonth = 'Jumadu Al-Akhir'
        }
        else{
            totalDate = parseInt(miladiDate) + 18
            hijriDate = totalDate - 30
            hijriMonth = 'Rajab'
        }
    }
    else if(miladiMonths[month] == 'March' & year == 2021){
        hijriYear = "1442h"
        if(miladiDate <= 13){
            hijriDate = parseInt(miladiDate) + 16
            hijriMonth = 'Rajab'
        }
        else{
            totalDate = parseInt(miladiDate) + 16
            hijriDate = totalDate - 29
            hijriMonth = 'Shaban'
        }
    }
    else if(miladiMonths[month] == 'April' & year == 2021){
        hijriYear = "1442h"
        if(miladiDate <= 12){
            hijriDate = parseInt(miladiDate) + 18
            hijriMonth = 'Shaban'
        }
        else{
            totalDate = parseInt(miladiDate) + 18
            hijriDate = totalDate - 30
            hijriMonth = 'Ramadaan'
        }
    }
    else if(miladiMonths[month] == 'May' & year == 2021){
        hijriYear = "1442h"
        if(miladiDate <= 18){
            hijriDate = parseInt(miladiDate) + 18
            hijriMonth = 'Ramadaan'
        }
        else{
            totalDate = parseInt(miladiDate) + 18
            hijriDate = totalDate - 30
            hijriMonth = 'Shawwal'
        }
    }
    else if(miladiMonths[month] == 'June' & year == 2021){
        hijriYear = "1442h"
        if(miladiDate <= 10){
            hijriDate = parseInt(miladiDate) + 19
            hijriMonth = 'Shawwal'
        }
        else{
            totalDate = parseInt(miladiDate) + 19
            hijriDate = totalDate - 29
            hijriMonth = 'Dhul Qadah'
        }
    }
    else if(miladiMonths[month] == 'July' & year == 2021){
        hijriYear = "1442h"
        if(miladiDate <= 10){
            hijriDate = parseInt(miladiDate) + 20
            hijriMonth = 'Dhul Qadah'
        }
        else{
            totalDate = parseInt(miladiDate) + 20
            hijriDate = totalDate - 30
            hijriMonth = 'Dhul Hijjah'
        }
    }
    else if(miladiMonths[month] == 'August' & year == 2021){
        hijriYear = "1442h"
        if(miladiDate <= 8){
            hijriDate = parseInt(miladiDate) + 21
            hijriMonth = 'Dhul Hijjah'
        }
        else{
            totalDate = parseInt(miladiDate) + 21
            hijriDate = totalDate - 29
            hijriMonth = 'Muharram'
            hijriYear = '1443h'
        }
    }
    else if(miladiMonths[month] == 'September' & year == 2021){
        hijriYear = "1443h"
        if(miladiDate <= 7){
            hijriDate = parseInt(miladiDate) + 23
            hijriMonth = 'Muharram'
        }
        else{
            totalDate = parseInt(miladiDate) + 23
            hijriDate = totalDate - 30
            hijriMonth = 'Safar'
        }
    }
    else if(miladiMonths[month] == 'October' & year == 2021){
        hijriYear = "1443h"
        if(miladiDate <= 6){
            hijriDate = parseInt(miladiDate) + 23
            hijriMonth = 'Safar'
        }
        else{
            totalDate = parseInt(miladiDate) + 23
            hijriDate = totalDate - 29
            hijriMonth = 'Rabi ul Awal'
        }
    }
    else if(miladiMonths[month] == 'November' & year == 2021){
        hijriYear = "1443h"
        if(miladiDate <= 5){
            hijriDate = parseInt(miladiDate) + 25
            hijriMonth = 'Rabi ul Awal'
        }
        else{
            totalDate = parseInt(miladiDate) + 25
            hijriDate = totalDate - 30
            hijriMonth = 'Rabi ul Akhar'
        }
    }
    else if(miladiMonths[month] == 'December' & year == 2021){
        hijriYear = "1443h"
        if(miladiDate <= 3){
            hijriDate = parseInt(miladiDate) + 26
            hijriMonth = 'Rabi al Akhar'
        }
        else{
            totalDate = parseInt(miladiDate) + 26
            hijriDate = totalDate - 29
            hijriMonth = 'Jumadu Al-Awal'
        }
    }
    else{
        dateIndex = document.getElementById('days').selectedIndex
        monthIndex = document.getElementById('month').selectedIndex
        yearIndex = document.getElementById('year').selectedIndex
        hijriDate = miladiDate
        hijriMonth = hijriMonths[monthIndex]
        hijriYear = hijriYears[yearIndex]
    }
    document.getElementById('maalinta').innerText = hijriDate
    document.getElementById('bisha').innerText = hijriMonth
    document.getElementById('sanadka').innerText = hijriYear
}


//Function that gives each month it's day
changeDaysInterval = setInterval(changeDays, 1000)
function changeDays(){
    title = document.querySelector('#h3').innerText
    if(title == 'Gregorian to Hijri Converter'){
        month = document.getElementById('month')
        selectedMonth = month.options[month.selectedIndex]
        if(selectedMonth.text == 'February'){
            document.getElementsByClassName('day')[29].style = "visibility: hidden"
            document.getElementsByClassName('day')[30].style = "visibility: hidden"
        }
        else if(selectedMonth.text == 'April'){
            document.getElementsByClassName('day')[30].style = "visibility: hidden"
        }
        else if(selectedMonth.text == 'Jun'){
            document.querySelector('.day31').style = "visibility: hidden"
        }
        else if(selectedMonth.text == 'September'){
            document.getElementsByClassName('day')[30].style = "visibility: hidden"
        }
        else if(selectedMonth.text == 'November'){
            document.getElementsByClassName('day')[30].style = "visibility: hidden"
        }
        else{
            document.getElementsByClassName('day')[29].style = "visibility: visible"
            document.getElementsByClassName('day')[30].style = "visibility: visible"
        }
    }
    else{
        document.getElementsByClassName('day')[30].style = "visibility: hidden"
        }
}


//function that change the way user can select a Date to convert.
function changeDateSelection(){
    dateIndex = document.getElementById('days').selectedIndex
    miladiDate = document.getElementsByClassName('day')[dateIndex].innerText
    monthIndex = document.getElementById('month').selectedIndex
    miladiMonth = document.getElementsByClassName('month')[monthIndex].innerText
    yearIndex = document.getElementById('year').selectedIndex
    miladiYear = document.getElementsByClassName('year')[yearIndex].innerText

    maalintaHijri = document.getElementById('maalinta').innerText
    bishaHijri = document.getElementById('bisha').innerText
    sanadkaHijri = document.getElementById('sanadka').innerText

    clearInterval(changeDaysInterval)

    monthIndex = 0
    for(month of hijriMonths){
        document.getElementsByClassName('month')[monthIndex].innerHTML = month
        monthIndex += 1
    }
    yearIndex = 0
    for(year of hijriYears){
        document.getElementsByClassName('year')[yearIndex].innerHTML = year
        yearIndex += 1
    }
    document.getElementById('days').selectedIndex = hijriDays.indexOf(parseInt(maalintaHijri)) 
    document.getElementById('month').selectedIndex = hijriMonths.indexOf(bishaHijri) 
    document.getElementById('year').selectedIndex = hijriYears.indexOf(sanadkaHijri)

    document.getElementById('maalinta').innerText = miladiDate
    document.getElementById('bisha').innerText = miladiMonth
    document.getElementById('sanadka').innerText = miladiYear

    document.getElementById('h3').innerHTML = 'Hijri to Gregorian Converter'
    document.getElementById('switch').onclick = backDateSelection
    document.getElementById('convert').onclick = convertHijri

}

//function that is getting back the previous way of the selection of the Date.
function backDateSelection(){
    dateIndex = document.getElementById('days').selectedIndex
    hijriDate = document.getElementsByClassName('day')[dateIndex].innerText
    monthIndex = document.getElementById('month').selectedIndex
    hijriMonth = document.getElementsByClassName('month')[monthIndex].innerText
    yearIndex = document.getElementById('year').selectedIndex
    hijriYear = document.getElementsByClassName('year')[yearIndex].innerText

    maalintaMiladi = document.getElementById('maalinta').innerText
    bishaMiladi = document.getElementById('bisha').innerText
    sanadkaMiladi = document.getElementById('sanadka').innerText

    monthIndex = 0
    for(month of miladiMonths){
        document.getElementsByClassName('month')[monthIndex].innerHTML = month
        monthIndex += 1
    }
    yearIndex = 0
    for(year of miladiYears){
        document.getElementsByClassName('year')[yearIndex].innerHTML = year
        yearIndex += 1
    }
    document.getElementById('days').selectedIndex = hijriDays.indexOf(parseInt(maalintaMiladi)) 
    document.getElementById('month').selectedIndex = miladiMonths.indexOf(bishaMiladi) 
    document.getElementById('year').selectedIndex = miladiYears.indexOf(parseInt(sanadkaMiladi))

    document.getElementById('maalinta').innerText = hijriDate
    document.getElementById('bisha').innerText = hijriMonth
    document.getElementById('sanadka').innerText = hijriYear

    document.getElementById('h3').innerHTML = 'Gregorian to Hijri Converter'
    document.getElementById('switch').onclick = changeDateSelection
    document.getElementById('convert').onclick = convertMiladi
}


//function that converts the Date from the User.
function convertMiladi(){
    title = document.querySelector('#h3').innerText
    if(title == 'Gregorian to Hijri Converter'){
        myDate = new Date()
        dayIndex = myDate.getDay()
        dateIndex = document.getElementById('days').selectedIndex
        miladiDate = document.getElementsByClassName('day')[dateIndex].innerText
        monthIndex = document.getElementById('month').selectedIndex
        miladiMonth = document.getElementsByClassName('month')[monthIndex].innerText
        yearIndex = document.getElementById('year').selectedIndex
        miladiYear = document.getElementsByClassName('year')[yearIndex].innerText
        hijriDate = 0
        hijriMonth = 0
        hijriYear = 0
        if(miladiYear == 2020){
            if(miladiMonth == 'January' & miladiYear == 2020){
                hijriYear = "1441h"
                if(miladiDate <= 25){
                    hijriDate = parseInt(miladiDate) + 5
                    hijriMonth = 'Jumadu Al-Awal'
                }
                else{
                    totalDate = parseInt(miladiDate) + 5
                    hijriDate = totalDate - 30
                    hijriMonth = 'Jumadu Al-Akhar'
                }
            }
            else if(miladiMonth == 'February' & miladiYear == 2020){
                hijriYear = "1441h"
                if(miladiDate <= 24){
                    hijriDate = parseInt(miladiDate) + 6
                    hijriMonth = 'Jumadu Al-Akhar'
                }
                else{
                    totalDate = parseInt(miladiDate) + 6
                    hijriDate = totalDate - 30
                    hijriMonth = 'Rajab'
                }
            }
            else if(miladiMonth == 'March' & miladiYear == 2020){
                hijriYear = "1441h"
                if(miladiDate <= 24){
                    hijriDate = parseInt(miladiDate) + 5
                    hijriMonth = 'Rajab'
                }
                else{
                    totalDate = parseInt(miladiDate) + 5
                    hijriDate = totalDate - 29
                    hijriMonth = 'Shaban'
                }
            }
            else if(miladiMonth == 'April' & miladiYear == 2020){
                hijriYear = "1441h"
                if(miladiDate <= 23){
                    hijriDate = parseInt(miladiDate) + 7
                    hijriMonth = 'Shaban'
                }
                else{
                    totalDate = parseInt(miladiDate) + 7
                    hijriDate = totalDate - 30
                    hijriMonth = 'Ramadaan'
                }
            }
            else if(miladiMonth == 'May' & miladiYear == 2020){
                hijriYear = "1441h"
                if(miladiDate <= 23){
                    hijriDate = parseInt(miladiDate) + 7
                    hijriMonth = 'Ramadaan'
                }
                else{
                    totalDate = parseInt(miladiDate) + 7
                    hijriDate = totalDate - 30
                    hijriMonth = 'Shawwal'
                }
            }
            else if(miladiMonth == 'June' & miladiYear == 2020){
                hijriYear = "1441h"
                if(miladiDate <= 21){
                    hijriDate = parseInt(miladiDate) + 8
                    hijriMonth = 'Shawwal'
                }
                else{
                    totalDate = parseInt(miladiDate) + 8
                    hijriDate = totalDate - 29
                    hijriMonth = 'Dhul Qadah'
                }
            }
            else if(miladiMonth == 'July' & miladiYear == 2020){
                hijriYear = "1441h"
                if(miladiDate <= 21){
                    hijriDate = parseInt(miladiDate) + 9
                    hijriMonth = 'Dhul Qadah'
                }
                else{
                    totalDate = parseInt(miladiDate) + 9
                    hijriDate = totalDate - 30
                    hijriMonth = 'Dhul Hijjah'
                }
            }
            else if(miladiMonth == 'August' & miladiYear == 2020){
                hijriYear = "1441h"
                if(miladiDate <= 19){
                    hijriDate = parseInt(miladiDate) + 10
                    hijriMonth = 'Dhul Hijjah'
                }
                else{
                    totalDate = parseInt(miladiDate) + 10
                    hijriDate = totalDate - 29
                    hijriMonth = 'Muharram'
                    hijriYear = '1442h'
                }
            }
            else if(miladiMonth == 'September' & miladiYear == 2020){
                hijriYear = "1442h"
                if(miladiDate <= 17){
                    hijriDate = parseInt(miladiDate) + 12
                    hijriMonth = 'Muharram'
                }
                else{
                    totalDate = parseInt(miladiDate) + 12
                    hijriDate = totalDate - 29
                    hijriMonth = 'Safar'
                }
            }
            else if(miladiMonth == 'October' & miladiYear == 2020){
                hijriYear = "1442h"
                if(miladiDate <= 17){
                    hijriDate = parseInt(miladiDate) + 13
                    hijriMonth = 'Safar'
                }
                else{
                    totalDate = parseInt(miladiDate) + 13
                    hijriDate = totalDate - 30
                    hijriMonth = 'Rabi ul Awal'
                }
            }
            else if(miladiMonth == 'November' & miladiYear == 2020){
                hijriYear = "1442h"
                if(miladiDate <= 14){
                    hijriDate = parseInt(miladiDate) + 15
                    hijriMonth = 'Rabi ul Awal'
                }
                else{
                    totalDate = parseInt(miladiDate) + 15
                    hijriDate = totalDate - 29
                    hijriMonth = 'Rabi ul Akhar'
                }
            }
            else if(miladiMonth == 'December' & miladiYear == 2020){
                hijriYear = "1442h"
                if(miladiDate <= 17){
                    hijriDate = parseInt(miladiDate) + 15
                    hijriMonth = 'Rabi al Akhar'
                }
                else{
                    totalDate = parseInt(miladiDate) + 15
                    hijriDate = totalDate - 30
                    hijriMonth = 'Jumadu Al-Awal'
                }
            }
        }
        //Starts Here 2021
        else if(miladiMonth == 'January' & miladiYear == 2021){
            hijriYear = "1442h"
            if(miladiDate <= 13){
                hijriDate = parseInt(miladiDate) + 16
                hijriMonth = 'Jumadu Al-Awal'
            }
            else{
                totalDate = parseInt(miladiDate) + 16
                hijriDate = totalDate - 29
                hijriMonth = 'Jumadu Al-Akhir'
            }
        }
        else if(miladiMonth == 'February' & miladiYear == 2021){
            hijriYear = "1442h"
            if(miladiDate <= 12){
                hijriDate = parseInt(miladiDate) + 18
                hijriMonth = 'Jumadu Al-Akhir'
            }
            else{
                totalDate = parseInt(miladiDate) + 18
                hijriDate = totalDate - 30
                hijriMonth = 'Rajab'
            }
        }
        else if(miladiMonth == 'March' & miladiYear == 2021){
            hijriYear = "1442h"
            if(miladiDate <= 13){
                hijriDate = parseInt(miladiDate) + 16
                hijriMonth = 'Rajab'
            }
            else{
                totalDate = parseInt(miladiDate) + 16
                hijriDate = totalDate - 29
                hijriMonth = 'Shaban'
            }
        }
        else if(miladiMonth == 'April' & miladiYear == 2021){
            hijriYear = "1442h"
            if(miladiDate <= 12){
                hijriDate = parseInt(miladiDate) + 18
                hijriMonth = 'Shaban'
            }
            else{
                totalDate = parseInt(miladiDate) + 18
                hijriDate = totalDate - 30
                hijriMonth = 'Ramadaan'
            }
        }
        else if(miladiMonth == 'May' & miladiYear == 2021){
            hijriYear = "1442h"
            if(miladiDate <= 18){
                hijriDate = parseInt(miladiDate) + 18
                hijriMonth = 'Ramadaan'
            }
            else{
                totalDate = parseInt(miladiDate) + 18
                hijriDate = totalDate - 30
                hijriMonth = 'Shawwal'
            }
        }
        else if(miladiMonth == 'June' & miladiYear == 2021){
            hijriYear = "1442h"
            if(miladiDate <= 10){
                hijriDate = parseInt(miladiDate) + 19
                hijriMonth = 'Shawwal'
            }
            else{
                totalDate = parseInt(miladiDate) + 19
                hijriDate = totalDate - 29
                hijriMonth = 'Dhul Qadah'
            }
        }
        else if(miladiMonth == 'July' & miladiYear == 2021){
            hijriYear = "1442h"
            if(miladiDate <= 10){
                hijriDate = parseInt(miladiDate) + 20
                hijriMonth = 'Dhul Qadah'
            }
            else{
                totalDate = parseInt(miladiDate) + 20
                hijriDate = totalDate - 30
                hijriMonth = 'Dhul Hijjah'
            }
        }
        else if(miladiMonth == 'August' & miladiYear == 2021){
            hijriYear = "1442h"
            if(miladiDate <= 8){
                hijriDate = parseInt(miladiDate) + 21
                hijriMonth = 'Dhul Hijjah'
            }
            else{
                totalDate = parseInt(miladiDate) + 21
                hijriDate = totalDate - 29
                hijriMonth = 'Muharram'
                hijriYear = '1443h'
            }
        }
        else if(miladiMonth == 'September' & miladiYear == 2021){
            hijriYear = "1443h"
            if(miladiDate <= 7){
                hijriDate = parseInt(miladiDate) + 23
                hijriMonth = 'Muharram'
            }
            else{
                totalDate = parseInt(miladiDate) + 23
                hijriDate = totalDate - 30
                hijriMonth = 'Safar'
            }
        }
        else if(miladiMonth == 'October' & miladiYear == 2021){
            hijriYear = "1443h"
            if(miladiDate <= 6){
                hijriDate = parseInt(miladiDate) + 23
                hijriMonth = 'Safar'
            }
            else{
                totalDate = parseInt(miladiDate) + 23
                hijriDate = totalDate - 29
                hijriMonth = 'Rabi ul Awal'
            }
        }
        else if(miladiMonth == 'November' & miladiYear == 2021){
            hijriYear = "1443h"
            if(miladiDate <= 5){
                hijriDate = parseInt(miladiDate) + 25
                hijriMonth = 'Rabi ul Awal'
            }
            else{
                totalDate = parseInt(miladiDate) + 25
                hijriDate = totalDate - 30
                hijriMonth = 'Rabi ul Akhar'
            }
        }
        else if(miladiMonth == 'December' & miladiYear == 2021){
            hijriYear = "1443h"
            if(miladiDate <= 3){
                hijriDate = parseInt(miladiDate) + 26
                hijriMonth = 'Rabi al Akhar'
            }
            else{
                totalDate = parseInt(miladiDate) + 26
                hijriDate = totalDate - 29
                hijriMonth = 'Jumadu Al-Awal'
            }
        }
        else{
            dateIndex = document.getElementById('days').selectedIndex
            monthIndex = document.getElementById('month').selectedIndex
            yearIndex = document.getElementById('year').selectedIndex
            hijriDate = miladiDate
            hijriMonth = hijriMonths[monthIndex]
            hijriYear = hijriYears[yearIndex]
        }

    document.getElementById('maalinta').innerHTML = hijriDate
    document.getElementById('bisha').innerText = hijriMonth
    document.getElementById('sanadka').innerText = hijriYear
    }
}

//function that converts the Date from the User.
function convertHijri(){
    miladiDateIndex = document.getElementById('days').selectedIndex
    miladiMonthIndex = document.getElementById('month').selectedIndex
    miladiYearIndex = document.getElementById('year').selectedIndex

    document.getElementById('maalinta').innerText = hijriDays[miladiDateIndex]
    document.getElementById('bisha').innerText = miladiMonths[miladiMonthIndex]
    document.getElementById('sanadka').innerText = miladiYears[miladiYearIndex]
}