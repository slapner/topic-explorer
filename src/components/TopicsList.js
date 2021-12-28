/** I kept this component in the same file because it is not used
 *  anywhere else. I chose to export it incase it needed to be used
 *  in a test
 */
export function TopicListItem({ topic, handleClick }) {
  return (
    <li
      className="flex w-full cursor-pointer mb-4 justify-between last:mb-0 transition-all text-xl bg-white rounded-lg py-4 px-8 shadow-xl shadow-purple-900 hover:font-bold
      hover:shadow-md border border-purple-700"
      onClick={() => handleClick(topic.name)}
    >
      <span className="text-green-500">{topic.name}</span>
      <span className="text-blue-400">{topic.stargazerCount} 🤩</span>
    </li>
  );
}

function TopicsList({ data, setTopic }) {
  const sorted = data.relatedTopics.sort((a, b) =>
    a.stargazerCount > b.stargazerCount ? -1 : 1
  );
  return (
    <>
      <div className="pb-5 text-center">
        <h1 className="text-5xl font-bold text-purple-50 mb-2">{data.name}</h1>
        <h2 className="text-lg text-purple-100">
          {data.stargazerCount} total 🤩
        </h2>
      </div>
      <ul className="py-10 text-lg">
        {sorted.map((item) => (
          <TopicListItem topic={item} key={item.id} handleClick={setTopic} />
        ))}
      </ul>
    </>
  );
}

export default TopicsList;
