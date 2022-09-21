import Head from "next/head"
import Link from "next/link"
// import Airtable from "airtable"
import { motion } from "framer-motion"

// START AIRTABLE COVERS FETCHING
export async function getStaticProps() {
  const airtable = new Airtable({
    apiKey: "keyyoYTw1F1pL9BRB",
  })

  const records = await airtable
    .base("app2N6jrZGA3RLDaN")("Projects")
    .select({
      fields: ["Project cover"],
    })
    .all()

  const projects = records.map((project) => {
    return {
      covers: project.get("Project cover").map((cover) => cover.url),
    }
  })

  return {
    props: {
      projects,
    },
  }
}

// END AIRTABLE COVERS FETCHING

export default function Layout({ children, page, projects }) {
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.3,
        duration: 1,
        type: "tween",
      },
    },
  }
  const items = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 2 } },
  }
  return (
    <>
      <div className="dimensional-sticky-image"></div>
      <div className="">
        <Head>
          <title>{page}</title>
        </Head>
        <header className="flex justify-between p-16 fixed w-full">
          <span className="font-sans">Quentin Chapon</span>
          <nav>
            <motion.ul
              variants={container}
              initial={"hidden"}
              animate={"show"}
              className="flex"
            >
              <motion.li variants={items} className="font-serif ml-16">
                Selected work
              </motion.li>
              <motion.li variants={items} className="font-serif ml-16">
                About
              </motion.li>
              <motion.li variants={items} className="font-serif ml-16">
                Contact
              </motion.li>
            </motion.ul>
          </nav>
        </header>

        <main>{children}</main>
      </div>
    </>
  )
}
