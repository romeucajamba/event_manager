
interface MyBottom {
  text: string
}

function Button(props: MyBottom){
  console.log(props)
  return <button className="bg-orange-400 h-10 px-3 font-medium rounded">{props.text}</button>
}

export function App() {

  return (
    <div className="flex gap-2">
      <Button text="clica em mim!"/>
      <Button text="clica em mim!"/>
      <Button text="clica em mim!"/>
      <Button text="clica em mim!"/>
    </div>
  )
}
