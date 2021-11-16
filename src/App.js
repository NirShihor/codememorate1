import Project from './components/project/Project';

function App() {
  return (
    <div className='App'>
      <Project
        projectTitle='Some Project'
        description='Some description'
        part='Some part'
        title='Some title'
        snippet='snippet'
        snippetDescription='snippetDescription'
      />
    </div>
  );
}

export default App;
