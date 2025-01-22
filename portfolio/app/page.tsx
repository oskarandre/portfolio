//import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 p-8 sm:p-20">
      <section id="home" className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-4xl">Hello, I'm Oskar.</h2>
        <p className="text-center max-w-2xl">
          Welcome to my portfolio. Here you can find information about my projects and skills.
        </p>
      </section>

      <section id="about" className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-4xl">About Me</h2>
        <div className="flex flex-col items-center gap-4">
          {/* <Image
            src="/profile.jpg"
            alt="Oskar's profile picture"
            width={200}
            height={200}
            className="rounded-full"
          /> */}
          <p className="text-center max-w-2xl">
            I am a software developer based in Stockholm, Sweden. I have experience working with various technologies and programming languages.
          </p>
        </div>
      </section>

      <section id="projects" className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-4xl">Projects</h2>
        <p className="text-center max-w-2xl">
          Here are some of the projects I have worked on.
        </p>
        {/* Add project details here */}
      </section>

      <section id="contact" className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-4xl">Contact</h2>
        <p className="text-center max-w-2xl">
          Feel free to reach out to me through any of the following platforms.
        </p>
        {/* Add contact details here */}
      </section>
    </div>
  );
}
