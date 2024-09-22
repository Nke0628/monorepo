"use client";

import Image from "next/image";
import { Button } from "@repo/ui/button";
import styles from "./page.module.css";
import { GetObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { useEffect, useState } from "react";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

export default function Home() {
  const [videoUrl, setVideoUrl] = useState("");
  useEffect(() => {
    const fetchVideo = async () => {
      const client = new S3Client({
        region: "us-east-1",
        credentials: {
          accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_ID as string,
          secretAccessKey: process.env.NEXT_PUBLIC_AWS_ACCESS_SECRET as string,
        },
      });
      const command = new GetObjectCommand({
        Bucket: "nk0628-monorepo",
        Key: "sample-video.mp4",
      });
      try {
        const signedUrl = await getSignedUrl(client, command, {
          expiresIn: 3600,
        });
        setVideoUrl(signedUrl);
      } catch (err) {
        throw new Error("動画が取得できませんでした");
      }
    };
    fetchVideo();
  }, []);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div>
          {videoUrl && (
            <video width="100%" controls>
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol>
          <li>
            Get started by editing <code>app/page.tsx</code>
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className={styles.ctas}>
          <a
            className={styles.primary}
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.logo}
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondary}
          >
            Read our docs
          </a>
        </div>
        <Button
          appName="web"
          className="mx-auto rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
        >
          Open alert
        </Button>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file-text.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
