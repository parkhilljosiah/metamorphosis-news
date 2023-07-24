import Articles from "../articles/Articles";

export default function Sports() {
  let query = "&category=sports";

  return <Articles query={query} />;
}
