import { useEffect, useState } from "react";
import "../../assets/stylesheets/Article.css";
import Articles from "../articles/Articles";

export default function CurrentEvents() {

    let query = ""

 return <Articles query={query} />
}
