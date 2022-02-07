import moment from 'moment';
import { setStartDate, setEndDate, sortByDate, sortByAmount, setTextFilter } from '../../actions/filters';

test('Should generate set start date action object', () => {
    const action = setStartDate(moment(0))
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    })
})

test('Should generate set end date action object', () => {
    const action = setEndDate(moment(0))
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    })
})

test('Should generate sort by date action object', () => {
    const action = sortByDate(moment(0))
    expect(action).toEqual({
        type: 'SORT_BY_DATE',
        date: moment(0)
    })
})

test('Should generate sort by amount action object', () => {
    const action = sortByAmount(12.50)
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT',
        amount: 12.50
    })
})

test('Should generate set text filter action object using defaults', () => {
    const action = setTextFilter()
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    })
})

test('Should generate set text filter action object using given text', () => {
    const action = setTextFilter('Testing')
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'Testing'
    })
})