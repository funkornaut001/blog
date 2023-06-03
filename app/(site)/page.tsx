import { getProjects } from "@/sanity/sanity-utils"
import Image from 'next/image'
import Link from 'next/link'

export default async function Home() {
  const projects = await getProjects();

  return (
    <div>
      <h1 className="text-7xl font-extrabold">Hello I&apos;m
        <span className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent"> Trevor!</span>
      </h1>
      <p className="mt-3 text-xl text-gray-600">
        Gm, I am a self-taught full stack blockchain developer with a keen interest in NFTs, DAOs, and Smart Contract Security. I have a strong foundation in smart contract engineering and proudly serve as a founder and lead smart contract engineer at Raffi3, Polygon&apos;s first NFT raffle platform.
      </p>

      <p className="mt-3 text-xl text-gray-600">
        In addition to my work at Raffi3, I&apos;ve actively contributed to the MN Blockchain Initiative by conducting comprehensive research on blockchain adoption and usage within the state. This experience has provided me with valuable insights into the real-world applications and potential impact of blockchain technology.
      </p>

      <p className="mt-3 text-xl text-gray-600">
        Additionally, I&apos;ve had the privilege of contributing to the growth of LinksDAO, where I played a crucial role in organizing events and building a robust framework for LinkUps. This initiative has empowered members to connect locally and foster meaningful relationships within the links community.
      </p>
      <h2 className="mt-24 font-bold text-gray-700 text-3xl">My Projects</h2>

      <div className="mt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-8">{projects.map((project) => (
        <Link href={`/projects/${project.slug}`} key={project._id} className="border-2 border-gray-500 rounded-lg p-1 hover:scale-105 hover:border-blue-500 transition">
          {project.image && (
            <Image
              src={project.image}
              alt={project.name}
              width={750}
              height={300}
              className="object-cover rounded-lg border border-gray-500"
            />
          )}
          <div className="mt-2 font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
            {project.name}
          </div>
        </Link>
      ))}
      </div>
    </div>
  )

}
