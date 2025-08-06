export default function Contact() {
  return (
    <section className="max-w-container mx-auto w-full my-s-1">
      <h1 className="text-h1 text-title text-center">Contact Us</h1>

      <div className="w-[330px] flex flex-col mb-t-1">
        <strong>Email :</strong>
        <a
          className="hover:text-btn-hover duration-300 font-[500]"
          href="mailto:info@hway.co.kr"
        >
          hway@hway.co.kr
        </a>
        <strong className="mt-t-1">Address :</strong>
        C-613 Doosan ThelandPark, 161-8, Magokjungang-ro, Gangseo-gu, Seoul,
        Republic of Korea
      </div>
    </section>
  );
}
