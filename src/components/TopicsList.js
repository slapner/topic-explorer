function TopicListItem({ topic, handleClick }) {
  return (
    <li
      className="flex w-full hover:font-bold cursor-pointer mb-4 justify-between last:mb-0 transition-all text-xl"
      onClick={() => handleClick(topic.name)}
    >
      <span className="text-green-500 underline underline-offset-4">
        {topic.name}
      </span>
      <span className="text-blue-400">{topic.stargazerCount} 🤩</span>
    </li>
  );
}

function TopicsList({ data, setTopic }) {
  return (
    <>
      <div className="flex items-baseline justify-between border-b border-gray-300 pb-5 font-bold">
        <h1 className="text-4xl text-purple-800">{data.name}</h1>
        <h2 className="text-lg text-purple-900">
          {data.stargazerCount} total 🤩
        </h2>
      </div>
      <ul className="py-10 text-lg">
        {data.relatedTopics.map((item) => (
          <TopicListItem topic={item} key={item.id} handleClick={setTopic} />
        ))}
      </ul>
    </>
  );
}

export default TopicsList;
