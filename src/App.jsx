import './styles/global.css';

import { CardForm } from './page/CardForm';

export function App() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-full h-full flex flex-row font-medium font-space-grotesk">
        <CardForm />
      </div>
    </div>
  )
}