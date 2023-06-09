import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Blog from "./blog";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Hunting Coder </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.description}>
          <span className="dummy">
            <h1> Hunting Coder</h1>
          </span>
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By Abhishek
            </a>
          </div>
        </div>

        <div className={styles.center}>
          <h2 width={180} height={37} priority>
            Latest Blogs
          </h2>
        </div>

        <div className={styles.grid}>
          <Blog />
        </div>
      </main>
    </>
  );
}
