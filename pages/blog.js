import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "../styles/Blog.module.css";
import * as fs from "fs";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className={styles.main}>
      {blogs.map((blogItem) => {
        return (
          <main key={blogItem.slug} className={styles.card}>
            <Link href={"/blogpost/learn-javascript"}>
              <h2>{blogItem.title}</h2>
            </Link>
            <p>{blogItem.content}</p>
          </main>
        );
      })}
    </div>
  );
};
export async function getStaticProps(context) {
  let data = await fs.promises.readdir("blogdata");
  let myfile;
  let allBlogs = [];
  for (let index = 0; index < data.length; index++) {
    const item = data[index];

    myfile = await fs.promises.readFile("blogdata/" + item, "utf-8");
    allBlogs.push(JSON.parse(myfile));
  }

  return {
    props: { allBlogs },
  };
}
export default Blog;
