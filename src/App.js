import React,{Component} from 'react';
import {BrowserRouter as Router ,Route, Link} from 'react-router-dom';
import './App.css';
import tasks from './samples/task.json';

//components 
import Tasks from './components/tasks';
import  TaskForm from './components/TaskForm';
import Posts from './components/posts';



class App extends Component{

  state = {
    tasks: tasks
  }

  addTask = (title,description) => {
    const newTask = {
      title: title,
      description: description,
      id: this.state.tasks.length
    }
    console.log(newTask)
    this.setState({
      tasks: [...this.state.tasks,newTask]
    })
  }

  deleteTask = (id) =>{
    const newTasks = this.state.tasks.filter(task=> task.id !== id);
    this.setState({tasks:newTasks})
  }

  checkDone = id => {
    const newTasks = this.state.tasks.map(task => {
      if(task.id === id){
        task.done = !task.done
      }
      return task;
    });
    this.setState({tasks:newTasks})
  }

  render(){
    
    return(
      <div>
        <Router>
          <Link to='/'>Home</Link>
          <Link to='/posts'>Posts</Link>
          
          <Route exact path='/' render={() => {
            return <div>
              <TaskForm addTask={this.addTask} />
              <Tasks
                tasks={this.state.tasks}
                deleteTask={this.deleteTask}
                checkDone={this.checkDone}
              />
            </div>
          }}>

          </Route>
          <Route path='/posts' component={Posts}/>
        </Router>
        
        
          <Posts/>
      </div>
    )
  }

}










































// function Helloworld(props){
//   return(
//     <div id="hello">
//       <h3>{props.subtitle}</h3>
//       {props.mytext}
//     </div>
//   )
// }

// const App = () => <div>This is my component: <Helloworld/></div>

// class App extends React.Component{
//   render(){
//     return <div>This is my component <Helloworld/></div>
//   }
// }

// class Helloworld extends React.Component{

//   state = {
//     show:true
//   }


//   toggleShow = () =>{
//     this.setState({show:!this.state.show})
//   }


//   render(){
//     if(this.state.show){
//       return(
//         <div id="hello">
//            <h3>{this.props.subtitle}</h3>
//            {this.props.mytext}
//            <button onClick={this.toggleShow}>Cambiar estado</button>
//         </div>
//       )
//     }else{
//       return (
//         <h1>
//           Not elements
//           <button onClick={this.toggleShow}>
//             toggle Show
//           </button>
//         </h1>
        
//       )
//     }
    
    
//   }
// }


// function App() {
//   return (
//     <div>
//       This is my component: 
//       <Helloworld mytext="Hello Julián" subtitle="lorem ipsum"/> 
//       <Helloworld mytext="Hello Mundo" subtitle="julian ipsum"/> 
//       <Helloworld mytext="Hello man!" subtitle="lorem ipsum"/>
//     </div>
//   );
// }

export default App;
