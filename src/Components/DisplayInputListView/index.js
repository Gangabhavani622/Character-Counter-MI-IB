import './index.css'

const DisplayInputListView = props => {
  const {inputDetails} = props
  const {name, length} = inputDetails
  return (
    <li>
      <p className="list-item">
        {name}:{length}
      </p>
    </li>
  )
}

export default DisplayInputListView
