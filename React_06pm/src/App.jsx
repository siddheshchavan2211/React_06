import Bellow from "./Components/Bellow"
import data from "./assets/data.json"
// console.log(data)

function App() {

  return (
    <div className="flex items-center justify-center h-screen">
      <Bellow value={data} />
    </div>
  )
}

export default App;
