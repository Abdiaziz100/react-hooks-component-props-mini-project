function Article({ title, date = "January 1, 1970", preview, minutes }) {
  const renderEmojis = () => {
    const emoji = minutes < 30 ? "☕️" : "🍱";
    const interval = minutes < 30 ? 5 : 10;
    const count = Math.ceil(minutes / interval);
    return emoji.repeat(count);
  };

  return (
    <article>
      <h3>{title}</h3>
      <small>
        {date} • {renderEmojis()} {minutes} min read
      </small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;
