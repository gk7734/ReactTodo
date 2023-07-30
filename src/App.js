import Todo from "./components/Todo";

function App() {
    return (
        <div>
            <h1>My Todos</h1>
            <Todo text='Learn React' />
            <Todo text='Learn Next.js' />
            <Todo text='Learn Vue.js' />
        </div>
    );
}

export default App;
