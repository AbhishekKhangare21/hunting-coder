import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/BlogPost.module.css";
import * as fs from "fs";

const Slug = (props) => {
  const [blog, setBlog] = useState(props.myBlog);
  return (
    <>
      <div className={styles.main}>
        <h1 className={styles.title}> {blog && blog.title}</h1>
        <hr />
        <div>{blog && blog.content}</div>
      </div>
    </>
  );
};

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: "how-to-learn-flask" } },
      { params: { slug: "how-to-learn-javascript" } },
      { params: { slug: "how-to-learn-next-js" } },
    ],
    fallback: true,
  };
}

export async function getStaticProps(context) {
  console.log(context);
  const { slug } = context.params;

  let myBlog = await fs.promises.readFile(
    `blogdata/${slug}.json`,
    "utf-8",
    (err, data) => {
      return {
        props: { myBlog: JSON.parse(myBlog) },
      };
    }
  );
}
export default Slug;
