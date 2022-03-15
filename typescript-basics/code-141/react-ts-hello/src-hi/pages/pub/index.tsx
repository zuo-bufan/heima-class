import { useParams } from 'react-router-dom'

function Pub() {
  // 4. useParams => 泛型函数
  const params = useParams<{ id?: string }>()
  console.log(params.id)
  return (
    <div>
      <h1>Pub</h1>
    </div>
  )
}

export default Pub
