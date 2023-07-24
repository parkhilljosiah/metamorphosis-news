import Articles from "../articles/Articles";

export default function Entertainment() {
  let query = "&category=entertainment";

  return <Articles query={query} />;
}
