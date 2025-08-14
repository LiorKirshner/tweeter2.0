function Tweet({ tweet }) {
  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffInMinutes = Math.floor((now - date) / (1000 * 60));

    if (diffInMinutes < 1) return "now";
    if (diffInMinutes < 60) return `${diffInMinutes}m`;
    if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)}h`;
    return date.toLocaleDateString();
  };

  return (
  <article className="border-b border-gray-100 p-4 bg-gray-50 mb-3 mx-2 rounded-xl shadow-sm">
      <div className="flex space-x-3">
        {/* Tweet content */}
        <div className="flex-1 min-w-0">
          {/* User info and time */}
          <div className="flex items-center space-x-2 mb-2">
            <span className="font-semibold text-gray-700 text-sm">
              {tweet.author}
            </span>
            <span className="text-gray-400 text-xs">
              {formatDate(tweet.timestamp)}
            </span>
          </div>

          {/* Tweet text */}
          <p className="text-gray-900 text-base leading-relaxed">{tweet.text}</p>
        </div>
      </div>
    </article>
  );
}

export default Tweet;
