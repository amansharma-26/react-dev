import Card from './components/Card.jsx'

const App = () => {

  const arr = [99,37,93,58,45, 78, 12, 34, 56, 89];

  return (<div className="parent">
      {arr.map(function (elem) {
          return <Card price={elem} />
      })}
    </div>)
}

export default App