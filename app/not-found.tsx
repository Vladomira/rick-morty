import Link from "next/link";

import InfoMessage from "@/src/components/InfoMessage";

export default function Error() {
  return (
    <section className="character__section bg-image-position">
      <div className="inform__text-box notfound__box ">
        <InfoMessage message="Page doesn't exist" />

        <div className="error__button-box">
          <Link href="/" className="error__button">
            <p className="drop-shadow-nav">Go home</p>
          </Link>
        </div>
      </div>
    </section>
  );
}
