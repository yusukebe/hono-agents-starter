import { useState } from 'react'
import { useAgent } from 'agents/react'
import type { CounterAgent, CounterState } from '../agents/counter'

export function CounterWidget() {
  const [count, setCount] = useState(0)

  const agent = useAgent<CounterAgent, CounterState>({
    agent: 'CounterAgent',
    onStateUpdate: (state) => setCount(state.count)
  })

  return (
    <>
      {count}
      <button onClick={() => agent.stub.increment()}>+</button>
      <button onClick={() => agent.stub.decrement()}>-</button>
    </>
  )
}
