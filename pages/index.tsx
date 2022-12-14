import Head from "next/head"
import styles from "../styles/Home.module.css"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          OneSignal + Supabase Integration Sample API
        </h1>

        <p className={styles.description}>
          Get started by starting by running the companion{" "}
          <a
            href="https://github.com/OneSignalDevelopers/onesignal-supabase-sample-integration-supabase/blob/main/README.md"
            target="_blank"
            rel="noreferrer"
          >
            Supabase
          </a>{" "}
          project and the{" "}
          <a
            href="https://github.com/OneSignalDevelopers/onesignal-supabase-sample-integration-app/blob/main/README.md"
            target="_blank"
            rel="noreferrer"
          >
            app
          </a>
          .
        </p>
      </main>
    </div>
  )
}
