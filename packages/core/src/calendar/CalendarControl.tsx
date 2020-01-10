import {SyntheticEvent, Component} from 'react'
import CalendarControlProps from './CalendarControlProps'
import CalendarControlState from './CalendarControlState'

export default class CalendarControl extends Component<CalendarControlProps, CalendarControlState> {

  constructor(props: CalendarControlProps) {
    super(props)
    this.state = {
      month: props.calendar.currentMonth,
      year: props.calendar.currentYear,
      dates: props.calendar.getDatesByMonthAndYear(props.calendar.currentMonth, props.calendar.currentYear),
      showSelectMonth: false,
    }
  }

  private toggleSelectMonth = () => {
    this.setState(state => ({
      showSelectMonth: !state.showSelectMonth,
    }))
  }

  private selectMonth = (month: number, year?: number) => {
    this.setState(state => {
      const selectedYear = year || state.year
      return {
        month,
        year: selectedYear,
        dates: this.props.calendar.getDatesByMonthAndYear(month, selectedYear),
        showSelectMonth: false,
      }
    })
  }

  private toPrevMonth = () => {
    this.setState(state => this.props.calendar.getPrevMonth(state.month, state.year))
  }

  private toNextMonth = () => {
    this.setState(state => this.props.calendar.getNextMonth(state.month, state.year))
  }

  private onSelectDate = (day: number) => (event: SyntheticEvent) => {
    event.stopPropagation()
    const {year, month} = this.state
    if (this.props.onSelectDate) {
      this.props.onSelectDate(new Date(year, month, day))
    }
  }

  public render() {
    const {month, year, dates, showSelectMonth} = this.state

    return this.props.children({
      month,
      year,
      dates,
      showSelectMonth,
      toggleSelectMonth: this.toggleSelectMonth,
      selectMonth: this.selectMonth,
      toPrevMonth: this.toPrevMonth,
      toNextMonth: this.toNextMonth,
      onSelectDate: this.onSelectDate,
    })
  }

}
