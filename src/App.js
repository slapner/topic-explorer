import { useState } from 'react';
import { useQuery } from 'graphql-hooks';
import TopicsList from './components/TopicsList';
import SearchBar from './components/SearchBar';
import Header from './components/Header';
import { TopicsQuery } from './graphql/queries';

// Single-use local components
const Loading = () => (
  <div className="text-xl bg-white rounded-lg py-4 px-8 shadow-xl shadow-purple-900 border border-purple-700">
    <h2 className="text-2xl">Loading...</h2>
  </div>
);

const ErrorMessage = () => (
  <div className="bg-red-500 text-red-50 py-5 px-7 rounded flex justify-between items-baseline my-10">
    <h2 className="text-2xl font-bold">Ooops!</h2>
    <h3>Something went wrong...please try again</h3>
  </div>
);

function App() {
  const [name, setName] = useState('react');

  const { loading, error, data } = useQuery(TopicsQuery, {
    variables: { name: name },
  });

  const handleSubmit = (ev, value) => {
    ev.preventDefault();
    setTopic(value);
  };

  const setTopic = (name) => setName(name);

  // Keep rendering logic out of render method
  const renderContent = () => {
    let content;
    switch (true) {
      case loading:
        content = content = <Loading />;
        break;
      case error:
        content = <ErrorMessage />;
        break;
      default:
        content = <TopicsList data={data.topic} setTopic={setTopic} />;
    }

    return <div className="w-full my-10 py-5">{content}</div>;
  };

  return (
    <div className="bg-gradient-to-br from-purple-800 to-purple-600 py-10 min-w-full h-screen flex justify-center">
      <div className="w-3/4">
        <Header />
        <SearchBar handleSubmit={handleSubmit} name={name} />

        {renderContent()}
      </div>
    </div>
  );
}

export default App;
