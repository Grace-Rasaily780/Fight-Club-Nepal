"use client";
import { useState, useEffect } from "react";
import styles from "./Updates.module.css";
import Image from "next/image";
import axios from "axios";
import moment from "moment";

export default function About() {
  const [updates, setUpdates] = useState<any[]>([]);
  useEffect(() => {
    const load = async () => {
      try {
        const { data } = await axios.get(
          "https://fightclubnepal.com/wordpress/wp-json/wp/v2/posts?categories=9",
        );
        setUpdates(data);
      } catch (error) {}
    };
    load();
  }, []);
  return (
    <div className={styles.container} id="about">
      <div className={styles.content_container}>
        {updates.map((update) => (
          <div
            className={styles.update}
            key={update.id}
            onClick={() => {
              window.open(update.link, "_blank");
            }}
          >
            <div className={styles.update_content}>
              <p>{moment(update.date).format("MMMM Do YYYY")}</p>

              <h3>{update.title.rendered}</h3>
              <div
                dangerouslySetInnerHTML={{ __html: update.content.rendered }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
