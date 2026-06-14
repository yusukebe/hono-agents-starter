import { Agent, callable } from 'agents'

export type CounterState = {
  count: number
}

export class CounterAgent extends Agent<CloudflareBindings, CounterState> {
  initialState: CounterState = { count: 0 }

  @callable()
  increment() {
    this.setState({ count: this.state.count + 1 })
    return this.state.count
  }

  @callable()
  decrement() {
    this.setState({ count: this.state.count - 1 })
    return this.state.count
  }
}
