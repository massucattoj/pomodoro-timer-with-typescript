import { useForm } from 'react-hook-form'
import { FormContainer, MinutesAmountInput, TaskInput } from './styles'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(3, 'Informe a tarefa'),
  minutesAmount: zod
    .number()
    .min(1, 'O ciclo precisa ser de no minimo 5 minutos')
    .max(60, 'O ciclo precisa ser de no maximo 60 minutos'),
})

// The intercace can be extract from zod
// interface NewCycleFormData {
//   task: string
//   minutesAmount: number
// }
type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

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
  const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

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
        min={1}
        max={60}
        disabled={!!activeCycle}
        {...register('minutesAmount', { valueAsNumber: true })}
      />

      <span>minutos.</span>
    </FormContainer>
  )
}
