import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import FeaturedPosts from '../components/FeaturedPosts';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <FeaturedPosts />
      <Footer />
    </div>
  );
}


// import Head from 'next/head';

// export default function Home() {
//   return (
//     <div className="bg-gray-50 min-h-screen">
//       <Head>
//         <title>My Personal Blog</title>
//         <meta name="description" content="A beautiful blog about coding, technology, and life." />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
      
//       {/* Navbar */}
//       <header className="bg-white shadow-md">
//         <div className="container mx-auto px-6 py-4 flex justify-between items-center">
//           <h1 className="text-3xl font-bold text-gray-800">MyBlog</h1>
//           <nav>
//             <a href="#" className="text-gray-600 mx-4 hover:text-blue-500">Home</a>
//             <a href="#" className="text-gray-600 mx-4 hover:text-blue-500">About</a>
//             <a href="#" className="text-gray-600 mx-4 hover:text-blue-500">Contact</a>
//           </nav>
//         </div>
//       </header>

//       {/* Hero Section */}
//       <section className="bg-cover bg-center h-screen flex items-center justify-center" style={{ backgroundImage: "url('/hero-bg.jpg')" }}>
//         <div className="text-center">
//           <h2 className="text-5xl text-white font-bold leading-tight mb-4">Welcome to My Blog</h2>
//           <p className="text-2xl text-white mb-8">Sharing ideas, experiences, and inspirations.</p>
//           <a href="#" className="bg-blue-500 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">Read More</a>
//         </div>
//       </section>

//       {/* Featured Articles */}
//       <section className="container mx-auto py-16 px-6">
//         <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Featured Articles</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {/* Article Card */}
//           <div className="bg-white rounded-lg shadow-lg overflow-hidden">
//             <img src="/article1.jpg" alt="Article Image" className="w-full h-56 object-cover"/>
//             <div className="p-6">
//               <h3 className="font-semibold text-2xl mb-2">The Future of Technology</h3>
//               <p className="text-gray-600 mb-4">Explore the latest trends and innovations in tech industry.</p>
//               <a href="#" className="text-blue-500 hover:underline">Read More</a>
//             </div>
//           </div>

//           <div className="bg-white rounded-lg shadow-lg overflow-hidden">
//             <img src="/article2.jpg" alt="Article Image" className="w-full h-56 object-cover"/>
//             <div className="p-6">
//               <h3 className="font-semibold text-2xl mb-2">Learning to Code</h3>
//               <p className="text-gray-600 mb-4">A beginner's guide to start your journey as a developer.</p>
//               <a href="#" className="text-blue-500 hover:underline">Read More</a>
//             </div>
//           </div>

//           <div className="bg-white rounded-lg shadow-lg overflow-hidden">
//             <img src="/article3.jpg" alt="Article Image" className="w-full h-56 object-cover"/>
//             <div className="p-6">
//               <h3 className="font-semibold text-2xl mb-2">Personal Growth</h3>
//               <p className="text-gray-600 mb-4">How to build good habits and achieve your goals.</p>
//               <a href="#" className="text-blue-500 hover:underline">Read More</a>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-800 py-12 mt-16">
//         <div className="container mx-auto text-center text-gray-400">
//           <p>&copy; 2024 MyBlog. All Rights Reserved.</p>
//         </div>
//       </footer>
//     </div>
//   );
// }

// import Image from "next/image";
// import localFont from "next/font/local";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

// export default function Home() {
//   return (
//     <h1 className="bg-sky-700 px-4 py-2 text-center text-white hover:bg-sky-800 sm:px-8 sm:py-3">
//       Hello world!
//     </h1>
//   );
// }

// export default function Home() {
//   return (
//     <div
//       className={`${geistSans.variable} ${geistMono.variable} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
//     >
//       <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
//         <Image
//           className="dark:invert"
//           src="https://nextjs.org/icons/next.svg"
//           alt="Next.js logo"
//           width={180}
//           height={38}
//           priority
//         />
//         <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
//           <li className="mb-2">
//             Get started by editing{" "}
//             <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
//               pages/index.tsx
//             </code>
//             .
//           </li>
//           <li>Save and see your changes instantly.</li>
//         </ol>

//         <div className="flex gap-4 items-center flex-col sm:flex-row">
//           <a
//             className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="https://nextjs.org/icons/vercel.svg"
//               alt="Vercel logomark"
//               width={20}
//               height={20}
//             />
//             Deploy now
//           </a>
//           <a
//             className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Read our docs
//           </a>
//         </div>
//       </main>
//       <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="https://nextjs.org/icons/file.svg"
//             alt="File icon"
//             width={16}
//             height={16}
//           />
//           Learn
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="https://nextjs.org/icons/window.svg"
//             alt="Window icon"
//             width={16}
//             height={16}
//           />
//           Examples
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="https://nextjs.org/icons/globe.svg"
//             alt="Globe icon"
//             width={16}
//             height={16}
//           />
//           Go to nextjs.org →
//         </a>
//       </footer>
//     </div>
//   );
// }
