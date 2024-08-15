import Link from "next/link";

export default function Error() {
  return (
    <section
      className="character__section h-[100vh]"
      style={{
        backgroundImage:
          " linear-gradient(rgba(47, 48, 58, 0.4), rgba(47, 48, 58, 0.4)),  url(/assets/background/home-back2.webp)",
      }}
    >
      <div className="inform__text-box flex-col items-center">
        <h1 className="inform__text-box--text">Page doesn't exist</h1>
        <Link
          href="/"
          className="bg-fuchsia-300 text-primaryYellow font-bold text-2xl mt-10 shadow-table px-4 py-2 rounded-lg "
        >
          <p className="drop-shadow-nav">Go home</p>
        </Link>
      </div>
    </section>
  );
}
