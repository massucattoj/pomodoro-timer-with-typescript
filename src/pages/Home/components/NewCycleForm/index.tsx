import { useFormContext } from 'react-hook-form'
import { FormContainer, MinutesAmountInput, TaskInput } from './styles'
import { useContext } from 'react'
import { CyclesContext } from '../../../../contexts/CyclesContext'

/**
 * Register -> method/function that adds an input to the form
 * function register(name: string) {
 *  return {
 *    onChange: () => void;
 *    onBlur: () => void;
 *    ...
 *  }
 * }
 *
 * handleSubmit vai receber a funcao que lida com o submit do form
 *
 */

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()

  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em </label>
      <TaskInput
        id="task"
        list="task-suggestions"
        placeholder="Set the name for your project"
        disabled={!!activeCycle}
        // onChange={(e) => setTask(e.target.value)}
        // value={task}
        {...register('task')}
      />

      <datalist id="task-suggestions">
        <option value="Projeto Amanhecer"></option>
        <option value="Shadow Next"></option>
        <option value="Lost vayne"></option>
      </datalist>

      <label htmlFor="minutesAmount">durante</label>
      <MinutesAmountInput
        id="minutesAmount"
        type="number"
        placeholder="00"
        step={5}
        min={5}
        max={60}
        disabled={!!activeCycle}
        {...register('minutesAmount', { valueAsNumber: true })}
      />

      <span>minutos.</span>
    </FormContainer>
  )
}
