export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

export const sortByDate = (date = '') => ({
    type: 'SORT_BY_DATE',
    date
});

export const sortByAmount = (amount = '') => ({
    type: 'SORT_BY_AMOUNT',
    amount
});

export const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
});

export const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
});
