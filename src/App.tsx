import './i18n/config'
import './App.css'
import { HInput, HSelect } from '@/components'
const options = [
  { label: 'option 1', value: 1 },
  { label: 'option 1', value: 2, disabled: true },
  { label: 'option 3', value: 3 },
  { label: 'option 4', value: 4, disabled: true }
]
function App() {
  const handleSelect = (e) => {
    console.log(e.target.value)
  }
  return (
    <>
      <div>
        <HInput label="test label" id="test" placeholder="test placeholder" />
      </div>
      <HSelect label="test" placeholder="test" options={options} onChange={handleSelect} />
    </>
  )
}

export default App
