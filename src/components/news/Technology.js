import Articles from "../articles/Articles";

export default function Technology() {
  let query = "&category=technology";

  return <Articles query={query} />;
}
