import './App.css';
import { Form, Button } from 'react-bootstrap'
import { useState } from 'react';
function App() {
  const [items, setItems] = useState([]);
  const [index, setIndex] = useState(0);
  const [name, setName] = useState('');
  const [cal, setCal] = useState('');
  function nameChangeHandler(e) {
    setName(e.target.value);
  }
  function calChangeHandler(e) {
    setCal(e.target.value);
  }
  function submitHandler(e) {
    e.preventDefault();
    const newItems = [{
      name: name,
      cal: cal,
      index: index,
      editing: false
    }, ...items];
    setItems(newItems);
    setIndex((index) => index + 1);
  }
  function deleteHandler(index) {
    console.log(index);
    let newItems = [];
    items.map((item) => {
      if (item.index === index) {
        console.log(item);
      }
      else {
        newItems.push(item);
      }
    })
    setItems(newItems);
  }

  function updateHandler(index) {
    let newItems = [];
    items.map((item) => {
      if (item.index === index) {
        item.editing = !item.editing;
        newItems.push(item);
      }
      else {
        newItems.push(item);
      }
    })
    setItems(newItems);
  }
  return (
    <div className="App">
      <h2 style={{margin: '70px'}}> Calorie Tracker</h2>
      <Form onSubmit={submitHandler}>
        <input style={{ 'marginRight': '20px' }} type="text" placeholder="Item Name" onChange={nameChangeHandler} />
        <input type="text" placeholder="Calorie Amount" onChange={calChangeHandler} />
        <div className="submitbtn">
          <Button type="submit" style={{ marginBottom: '20px' }}>Add Item</Button>
        </div>
      </Form>
      <div className="itemHandler">
        {items.map((item, index) => {
          return (
            <div key={index}>
              {!item.editing && <div style={{margin: '30px'}}><h2>{item.name}</h2>
                <p>You have consumed {item.cal} calories</p>
                <div className="submitbtn">
                  <Button style={{ marginRight: '20px' }} onClick={() => {
                    updateHandler(item.index);
                  }}>Edit</Button>
                  <Button onClick={() => {
                    console.log(item.index);
                    deleteHandler(item.index);
                  }}>Delete</Button>
                </div>
              </div>}
              {item.editing && <div>
                <Form onSubmit={()=>{
                      let newItems = [];
                      items.map((i) => {
                        if (i.index === item.index) {
                          i.editing = !i.editing;
                          i.name = name;
                          i.cal = cal;
                          newItems.push(i);
                        }
                        else {
                          newItems.push(i);
                        }
                      })
                      setItems(newItems);
                }}>
                  <input style={{ 'marginRight': '20px' }} type="text" placeholder={item.name} onChange={nameChangeHandler} />
                  <input type="text" placeholder={item.cal} onChange={calChangeHandler}/>
                  <div className="submitbtn">
                    <Button type="submit" style={{ marginBottom: '20px' }}>Submit</Button>
                  </div>
                </Form>
              </div>}
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
