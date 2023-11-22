document.addEventListener("DOMContentLoaded", function() {
    let choiceOptions = {
        searchEnabled: false,
        itemSelectText: "",
        position: "bottom",
        searchResultLimit: 9999,
    }

    let currentDate = new Date()
    let currentYear = currentDate.getFullYear()
    let currentMonthsNumber = currentDate.getMonth()

    let yearChoices = []
    yearChoices.push(
        {
            value: currentYear - 2,
            label: `${currentYear - 2}`
        },
        {
            value: currentYear - 1,
            label: `${currentYear - 1}`
        },
        {
            value: currentYear,
            label: `${currentYear}`
        },
        {
            value: currentYear + 1,
            label: `${currentYear + 1}`
        },
        {
            value: currentYear + 2,
            label: `${currentYear + 2}`
        },
    )

    let yearsSelect = document.querySelector("#years")
    let yearsChoice = new Choices(yearsSelect, choiceOptions)
    yearsChoice.setChoices(yearChoices, "value", "label", true)
    yearsChoice.setChoiceByValue(currentYear);

    let monthChoices = []
    monthChoices.push(
        {
            value: 1,
            label: "Январь"
        },
        {
            value: 2,
            label: "Февраль"
        },
        {
            value: 3,
            label: "Март"
        },
        {
            value: 4,
            label: "Апрель"
        },
        {
            value: 5,
            label: "Май"
        },
        {
            value: 6,
            label: "Июнь"
        },
        {
            value: 7,
            label: "Июль"
        },
        {
            value: 8,
            label: "Август"
        },
        {
            value: 9,
            label: "Сентябрь"
        },
        {
            value: 10,
            label: "Октябрь"
        },
        {
            value: 11,
            label: "Ноябрь"
        },
        {
            value: 12,
            label: "Декабрь"
        },
    )

    let monthsSelect = document.querySelector("#months")
    let monthsChoice = new Choices(monthsSelect, {
        ...choiceOptions,
        shouldSort: false
    })
    monthsChoice.setChoices(monthChoices, "value", "label", true)
    monthsChoice.setChoiceByValue(currentMonthsNumber + 1);

    yearsSelect.addEventListener("choice", function(evt) {
        let year = evt.detail.choice.value
        let month = monthsChoice.getValue(true) - 1
        showCalendar(year, month)
    })

    monthsSelect.addEventListener("choice", function(evt) {
        let month = evt.detail.choice.value
        let year = yearsChoice.getValue(true)
        showCalendar(year, month)
    })

    let selectedYear = yearsChoice.getValue(true)
    let selectedMonthNumber = monthsChoice.getValue(true)

    
    const showCalendar = (year, month) => {
        month--
        var d = new Date(year, month),
        tableTbody = '';

        for (var i = 0; i < getDay(d); i++) {
            tableTbody += '<td></td>';
        }

        // ячейки календаря с датами
        while (d.getMonth() == month) {
            tableTbody += `<td class="calendar__day"></td>`;

            if (getDay(d) % 7 == 6) {
                tableTbody += '</tr><tr>';
            }
            d.setDate(d.getDate() + 1);
        }

        if (getDay(d) != 0) {
            for (var i = getDay(d); i < 7; i++) {
                tableTbody += '<td></td>';
            }
        }

        tableTbody += '</tr>';

        function getDay(date) {
            var day = date.getDay();
            if (day == 0) day = 7;
            return day - 1;
        }

        document.querySelector("tbody").innerHTML = tableTbody
    }

    showCalendar(selectedYear, selectedMonthNumber)
})