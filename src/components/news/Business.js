import Articles from "../articles/Articles";

export default function Business() {
  let query = "&category=business";

  return <Articles query={query} />;
}
