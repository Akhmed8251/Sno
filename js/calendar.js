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
})