import { Container } from "components/Container";
import Image from "next/image";
import Link from "next/link";

export default async function About() {
  return (
    <main>
      <Container>
        <div className="mx-8 divide-y divide-gray-200 dark:divide-gray-700">
          <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
            <div className="flex flex-col items-center space-x-2 pt-8">
              <Image
                src="/assets/avatar.jpg"
                alt="avatar"
                width={192}
                height={192}
                className="h-48 w-48 rounded-full"
              />
              <h3 className="pb-2 pt-4 text-2xl font-bold leading-8 tracking-tight">
                Cong Le
              </h3>
              <div className="text-gray-500 dark:text-gray-400">
                Software Engineer
              </div>
              <div className="flex space-x-3 pt-6">
                <Link href="mailto:congle.engineer@gmail.com">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    className="hover:text-primary-500 dark:hover:text-primary-400 h-6 w-6 fill-current text-gray-700 dark:text-gray-200"
                  >
                    <title>Mail</title>
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                </Link>

                <Link href="https://github.com/congle-engineer" target="_blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="hover:text-primary-500 dark:hover:text-primary-400 h-6 w-6 fill-current text-gray-700 dark:text-gray-200"
                  >
                    <title>GitHub</title>
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
                  </svg>
                </Link>

                <Link
                  href="https://www.facebook.com/congle.hcmut"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="hover:text-primary-500 dark:hover:text-primary-400 h-6 w-6 fill-current text-gray-700 dark:text-gray-200"
                  >
                    <title>Facebook</title>
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
                  </svg>
                </Link>

                <Link
                  href="https://www.youtube.com/@congle-engineer"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="hover:text-primary-500 dark:hover:text-primary-400 h-6 w-6 fill-current text-gray-700 dark:text-gray-200"
                  >
                    <title>Youtube</title>
                    <path d="M23.499 6.203a3.008 3.008 0 00-2.089-2.089c-1.87-.501-9.4-.501-9.4-.501s-7.509-.01-9.399.501a3.008 3.008 0 00-2.088 2.09A31.258 31.26 0 000 12.01a31.258 31.26 0 00.523 5.785 3.008 3.008 0 002.088 2.089c1.869.502 9.4.502 9.4.502s7.508 0 9.399-.502a3.008 3.008 0 002.089-2.09 31.258 31.26 0 00.5-5.784 31.258 31.26 0 00-.5-5.808zm-13.891 9.4V8.407l6.266 3.604z"></path>
                  </svg>
                </Link>
              </div>
            </div>
            <div className="prose dark:prose-invert max-w-none pb-8 pt-8 xl:col-span-2">
              <div className="text-2xl font-bold">Education</div>
              <br />
              Bachelor of Computer Science & Engineering
              <br />
              Duration: 2011 – 2016
              <br />
              University: Ho Chi Minh City University of Technology
              <br />
              Major: Computer Science
              <br />
              <br />
              Master of Computer Science
              <br />
              Duration: 2016 – 2019
              <br />
              University: Ho Chi Minh City University of Technology
              <br />
              Major: Computer Science
              <br />
              <br />
              <div className="text-2xl font-bold">Professional Skills</div>
              <br />
              Programming languages: C/C++, C#, Java, Python, Golang, HTML5,
              CSS3, Javascript, Typescript, Haskell, Plutus, Aiken, Solidity.
              <br />
              <br />
              Frameworks: Bootstrap, Reactjs, Nextjs, Expressjs, Nestjs.
              <br />
              <br />
              Database: MySQL, PostgreSQL, LevelDB, MongoDB, Redis, Memcached.
              <br />
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
